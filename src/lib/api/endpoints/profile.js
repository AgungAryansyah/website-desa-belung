import { getRecords, getRecord, getFileUrl } from '../client';
import { COLLECTIONS } from '../config';

/**
 * Get village profile information
 * @returns {Promise} - Promise resolving to village profile
 */
export async function getVillageProfile() {
  try {
    // Get the first (and likely only) profile record
    const result = await getRecords(COLLECTIONS.PROFILE, { perPage: 1 });
    
    if (result.items.length === 0) {
      throw new Error('Village profile not found');
    }

    const profile = result.items[0];
    
    return {
      ...profile,
      logoUrl: profile.logo ? getFileUrl(profile, profile.logo) : null,
      bannerUrl: profile.banner ? getFileUrl(profile, profile.banner) : null,
    };
  } catch (error) {
    console.error('Error fetching village profile:', error);
    throw error;
  }
}

/**
 * Get village history
 * @returns {Promise} - Promise resolving to village history
 */
export async function getVillageHistory() {
  const profile = await getVillageProfile();
  return {
    history: profile.history || '',
    historyImages: profile.history_images ? profile.history_images.map(img => getFileUrl(profile, img)) : []
  };
}

/**
 * Get village demographics
 * @returns {Promise} - Promise resolving to village demographics
 */
export async function getVillageDemographics() {
  const profile = await getVillageProfile();
  return {
    population: profile.population || 0,
    households: profile.households || 0,
    area: profile.area || 0,
    demographics: profile.demographics || {}
  };
}

/**
 * Get village contact information
 * @returns {Promise} - Promise resolving to village contact
 */
export async function getVillageContact() {
  const profile = await getVillageProfile();
  return {
    address: profile.address || '',
    phone: profile.phone || '',
    email: profile.email || '',
    website: profile.website || '',
    socialMedia: profile.social_media || {}
  };
}
