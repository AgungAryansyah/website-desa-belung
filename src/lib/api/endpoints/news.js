import { getRecords, getRecord, getFileUrl } from '../client';
import { COLLECTIONS } from '../config';

/**
 * Get a list of news articles with pagination
 * @param {Object} options - Query options
 * @returns {Promise} - Promise resolving to news list
 */
export async function getNews({ page = 1, limit = 10, featured = false } = {}) {
  const options = {
    page,
    perPage: limit,
    sort: '-created', // Sort by newest first
    filter: featured ? 'featured = true' : '',
    expand: 'image_id', // Expand the image relation
  };

  const result = await getRecords(COLLECTIONS.NEWS, options);
  
  // Transform data to include full image URLs from the images collection
  const newsWithImages = await Promise.all(result.items.map(async (news) => {
    let imageUrl = null;
    let thumbnailUrl = null;
    let cover = null;

    if (news.cover) {
      try {
        const imageRecord = await getRecord(COLLECTIONS.IMAGES, news.cover);
        cover = getFileUrl(imageRecord);
        console.log(`Cover image for news ${news.id}:`, cover);
      } catch (error) {
        console.log(`Failed to fetch image for news ${news.id}:`, error);
      }
    }

    const finalItem = {
      ...news,
      imageUrl,
      thumbnailUrl,
      cover,
    };
    return finalItem;
  }));

  return {
    ...result,
    items: newsWithImages
  };
}

/**
 * Get a single news article by ID
 * @param {string} id - News article ID
 * @returns {Promise} - Promise resolving to news article
 */
export async function getNewsById(id) {
  const news = await getRecord(COLLECTIONS.NEWS, id, {
    expand: 'image_id'
  });
  
  let imageUrl = null;
  let cover = null;

  if (news.cover) {
    try {
      const imageRecord = await getRecord(COLLECTIONS.IMAGES, news.cover);
      cover = getFileUrl(imageRecord, imageRecord.file);
    } catch (error) {
      console.log(`Failed to fetch image for news ${news.id}:`, error);
    }
  }
  
  return {
    ...news,
    imageUrl,
    cover,
  };
}

/**
 * Search news articles
 * @param {string} query - Search query
 * @param {Object} options - Additional options
 * @returns {Promise} - Promise resolving to search results
 */
export async function searchNews(query, options = {}) {
  const searchOptions = {
    page: options.page || 1,
    perPage: options.limit || 10,
    filter: `title ~ "${query}" || ringkasan ~ "${query}" || content ~ "${query}"`,
    sort: '-created',
    expand: 'image_id',
  };

  const result = await getRecords(COLLECTIONS.NEWS, searchOptions);
  
  // Transform data to include full image URLs using correct PocketBase format
  const newsWithImages = await Promise.all(result.items.map(async (news) => {
    let imageUrl = null;
    let thumbnailUrl = null;
    let cover = null;

    // If news has image_id, fetch from images collection
    if (news.image_id) {
      try {
        const imageRecord = await getRecord(COLLECTIONS.IMAGES, news.image_id);
        if (imageRecord && imageRecord.file) {
          const baseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://localhost:8080';
          imageUrl = `${baseUrl}/api/files/${COLLECTIONS.IMAGES}/${imageRecord.id}/${imageRecord.file}`;
          thumbnailUrl = `${baseUrl}/api/files/${COLLECTIONS.IMAGES}/${imageRecord.id}/${imageRecord.file}?thumb=300x200`;
          cover = imageUrl;
        }
      } catch (error) {
        console.warn(`Failed to fetch image for news ${news.id}:`, error);
      }
    }
    
    // Fallback to direct image field if exists
    if (!imageUrl && news.image) {
      const baseUrl = process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://localhost:8080';
      imageUrl = `${baseUrl}/api/files/${COLLECTIONS.NEWS}/${news.id}/${news.image}`;
      thumbnailUrl = `${baseUrl}/api/files/${COLLECTIONS.NEWS}/${news.id}/${news.image}?thumb=300x200`;
      cover = imageUrl;
    }

    return {
      ...news,
      imageUrl,
      thumbnailUrl,
      cover,
    };
  }));

  return {
    ...result,
    items: newsWithImages
  };
}

/**
 * Get featured news articles
 * @param {number} limit - Number of articles to fetch
 * @returns {Promise} - Promise resolving to featured news
 */
export async function getFeaturedNews(limit = 5) {
  return getNews({ limit, featured: true });
}

/**
 * Get latest news articles
 * @param {number} limit - Number of articles to fetch
 * @returns {Promise} - Promise resolving to latest news
 */
export async function getLatestNews(limit = 5) {
  return getNews({ limit });
}

/**
 * Get popup news articles
 * @param {Object} options - Query options
 * @returns {Promise} - Promise resolving to popup news
 */
export async function getPopupNews({ page = 1, limit = 10 } = {}) {
  const options = {
    page,
    perPage: limit,
  };

  const result = await getRecords(COLLECTIONS.BERITA_POPUP, options);
  
  // Transform data - berita field contains direct text content
  const popupNewsItems = result.items.map((popupItem) => {
    return {
      id: popupItem.id,
      text: popupItem.berita || 'Breaking news update',
    };
  });

  return {
    ...result,
    items: popupNewsItems
  };
}

/**
 * Get active popup news (most recent)
 * @returns {Promise} - Promise resolving to active popup news
 */
export async function getActivePopupNews() {
  const result = await getPopupNews({ limit: 1 });
  return result.items.length > 0 ? result.items[0] : null;
}

