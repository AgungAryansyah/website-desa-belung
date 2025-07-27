import { getRecords, getRecord, getFileUrl } from '../client';
import { COLLECTIONS } from '../config';

/**
 * Get village potential/resources
 * @param {Object} options - Query options
 * @returns {Promise} - Promise resolving to village potential
 */
export async function getVillagePotential(options = {}) {
  const result = await getRecords(COLLECTIONS.POTENTIAL, {
    sort: 'category, name',
    ...options
  });

  const potentialWithImages = result.items.map(item => ({
    ...item,
    imageUrl: item.image ? getFileUrl(item, item.image) : null,
    thumbnailUrl: item.image ? getFileUrl(item, item.image, '300x200') : null,
  }));

  return {
    ...result,
    items: potentialWithImages
  };
}

/**
 * Get economic potential
 * @param {Object} options - Query options
 * @returns {Promise} - Promise resolving to economic potential
 */
export async function getEconomicPotential(options = {}) {
  const queryOptions = {
    filter: 'category = "economic"',
    ...options
  };

  return getVillagePotential(queryOptions);
}

/**
 * Get tourism potential
 * @param {Object} options - Query options
 * @returns {Promise} - Promise resolving to tourism potential
 */
export async function getTourismPotential(options = {}) {
  const queryOptions = {
    filter: 'category = "tourism"',
    ...options
  };

  return getVillagePotential(queryOptions);
}

/**
 * Get agricultural potential
 * @param {Object} options - Query options
 * @returns {Promise} - Promise resolving to agricultural potential
 */
export async function getAgriculturalPotential(options = {}) {
  const queryOptions = {
    filter: 'category = "agriculture"',
    ...options
  };

  return getVillagePotential(queryOptions);
}
