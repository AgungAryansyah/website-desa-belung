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
  };

  const result = await getRecords(COLLECTIONS.NEWS, options);
  
  // Transform data to include full image URLs
  const newsWithImages = result.items.map(news => ({
    ...news,
    imageUrl: news.image ? getFileUrl(news, news.image) : null,
    thumbnailUrl: news.image ? getFileUrl(news, news.image, '300x200') : null,
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
  const news = await getRecord(COLLECTIONS.NEWS, id);
  
  // Add full image URL
  return {
    ...news,
    imageUrl: news.image ? getFileUrl(news, news.image) : null,
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
    filter: `title ~ "${query}" || excerpt ~ "${query}" || content ~ "${query}"`,
    sort: '-created',
  };

  const result = await getRecords(COLLECTIONS.NEWS, searchOptions);
  
  // Transform data to include full image URLs
  const newsWithImages = result.items.map(news => ({
    ...news,
    imageUrl: news.image ? getFileUrl(news, news.image) : null,
    thumbnailUrl: news.image ? getFileUrl(news, news.image, '300x200') : null,
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
