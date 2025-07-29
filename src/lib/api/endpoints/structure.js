import { getRecords, getRecord, getFileUrl } from '../client';
import { COLLECTIONS } from '../config';

/**
 * Get all structure personnel
 * @param {Object} options - Query options
 * @param {number} options.page - Page number (default: 1)
 * @param {number} options.limit - Items per page (default: 50)
 * @param {string} options.kategori - Filter by category
 * @returns {Promise<Object>} Structure data with pagination info
 */
export async function getAllStructure(options = {}) {
  try {
    const { page = 1, limit = 50, kategori } = options;
    
    let filter = '';
    if (kategori) {
      filter = `kategori="${kategori}"`;
    }
    
    const result = await getRecords(COLLECTIONS.STRUCTURE, {
      page,
      perPage: limit,
      filter,
      sort: 'kategori,posisi',
    });
    
    // Transform data to include full image URLs from the images collection
    const personnelWithImages = await Promise.all(result.items.map(async (person) => {
      let fotoUrl = '/PPdefault.svg'; // Default image

      if (person.foto) {
        try {
          const imageRecord = await getRecord(COLLECTIONS.IMAGES, person.foto);
          fotoUrl = getFileUrl(imageRecord, imageRecord.file);
          console.log(`Photo for personnel ${person.id}:`, fotoUrl);
        } catch (error) {
          console.log(`Failed to fetch photo for personnel ${person.id}:`, error);
          // Keep default image if fetch fails
        }
      }

      return {
        ...person,
        fotoUrl,
      };
    }));
    
    return {
      ...result,
      items: personnelWithImages
    };
  } catch (error) {
    console.error('Error fetching all structure:', error);
    throw error;
  }
}

/**
 * Get structure personnel by category
 * @param {string} kategori - Category name (PERANGKAT DESA, KEPALA DUSUN, BUMDES, BPD)
 * @returns {Promise<Array>} Array of personnel in the category
 */
export async function getStructureByCategory(kategori) {
  try {
    const result = await getRecords(COLLECTIONS.STRUCTURE, {
      filter: `kategori="${kategori}"`,
      sort: 'posisi',
    });
    
    // Transform data to include full image URLs from the images collection
    const personnelWithImages = await Promise.all(result.items.map(async (person) => {
      let fotoUrl = '/PPdefault.svg'; // Default image

      if (person.foto) {
        try {
          const imageRecord = await getRecord(COLLECTIONS.IMAGES, person.foto);
          fotoUrl = getFileUrl(imageRecord, imageRecord.file);
        } catch (error) {
          console.log(`Failed to fetch photo for personnel ${person.id}:`, error);
          // Keep default image if fetch fails
        }
      }

      return {
        ...person,
        fotoUrl,
      };
    }));
    
    return personnelWithImages;
  } catch (error) {
    console.error(`Error fetching structure by category ${kategori}:`, error);
    throw error;
  }
}

/**
 * Get single personnel by ID
 * @param {string} id - Personnel ID
 * @returns {Promise<Object>} Personnel data
 */
export async function getPersonnelById(id) {
  try {
    const person = await getRecord(COLLECTIONS.STRUCTURE, id);
    
    let fotoUrl = '/PPdefault.svg'; // Default image

    if (person.foto) {
      try {
        const imageRecord = await getRecord(COLLECTIONS.IMAGES, person.foto);
        fotoUrl = getFileUrl(imageRecord, imageRecord.file);
      } catch (error) {
        console.log(`Failed to fetch photo for personnel ${person.id}:`, error);
        // Keep default image if fetch fails
      }
    }
    
    return {
      ...person,
      fotoUrl,
    };
  } catch (error) {
    console.error(`Error fetching personnel ${id}:`, error);
    throw error;
  }
}

/**
 * Get all categories available in structure
 * @returns {Promise<Array>} Array of unique categories
 */
export async function getStructureCategories() {
  try {
    const result = await getRecords(COLLECTIONS.STRUCTURE, {
      fields: 'kategori',
    });
    
    // Get unique categories
    const categories = [...new Set(result.items.map(item => item.kategori))];
    return categories;
  } catch (error) {
    console.error('Error fetching structure categories:', error);
    throw error;
  }
}

/**
 * Get structure data grouped by category
 * @returns {Promise<Object>} Object with categories as keys and personnel arrays as values
 */
export async function getStructureGrouped() {
  try {
    const result = await getRecords(COLLECTIONS.STRUCTURE, {
      sort: 'kategori,posisi',
    });
    
    // Transform data to include full image URLs from the images collection
    const personnelWithImages = await Promise.all(result.items.map(async (person) => {
      let fotoUrl = '/PPdefault.svg'; // Default image

      if (person.foto) {
        try {
          const imageRecord = await getRecord(COLLECTIONS.IMAGES, person.foto);
          fotoUrl = getFileUrl(imageRecord, imageRecord.file);
        } catch (error) {
          console.log(`Failed to fetch photo for personnel ${person.id}:`, error);
          // Keep default image if fetch fails
        }
      }

      return {
        ...person,
        fotoUrl,
      };
    }));
    
    // Group by category
    const grouped = personnelWithImages.reduce((acc, person) => {
      const category = person.kategori;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(person);
      return acc;
    }, {});
    
    return grouped;
  } catch (error) {
    console.error('Error fetching grouped structure:', error);
    throw error;
  }
}

/**
 * Search personnel by name or position
 * @param {string} query - Search query
 * @returns {Promise<Array>} Array of matching personnel
 */
export async function searchPersonnel(query) {
  try {
    const result = await getRecords(COLLECTIONS.STRUCTURE, {
      filter: `nama~"${query}" || posisi~"${query}"`,
      sort: 'kategori,posisi',
    });
    
    // Transform data to include full image URLs from the images collection
    const personnelWithImages = await Promise.all(result.items.map(async (person) => {
      let fotoUrl = '/PPdefault.svg'; // Default image

      if (person.foto) {
        try {
          const imageRecord = await getRecord(COLLECTIONS.IMAGES, person.foto);
          fotoUrl = getFileUrl(imageRecord, imageRecord.file);
        } catch (error) {
          console.log(`Failed to fetch photo for personnel ${person.id}:`, error);
          // Keep default image if fetch fails
        }
      }

      return {
        ...person,
        fotoUrl,
      };
    }));
    
    return personnelWithImages;
  } catch (error) {
    console.error(`Error searching personnel with query "${query}":`, error);
    throw error;
  }
}
