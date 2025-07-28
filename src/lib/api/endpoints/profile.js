import { getRecords } from '../client';
import { COLLECTIONS } from '../config';

/**
 * Get village visi (vision) - single record
 * @returns {Promise} - Promise resolving to visi data
 */
export async function getVisi() {
  try {
    // Get the first (and only) visi record
    const result = await getRecords(COLLECTIONS.VISI, { perPage: 1 });
    
    if (result.items.length === 0) {
      throw new Error('Visi not found');
    }

    const visi = result.items[0];

    console.log('Fetched visi:', visi);
    
    return {
      id: visi.id,
      text: visi.visi,
    };
  } catch (error) {
    console.error('Error fetching visi:', error);
    throw error;
  }
}

/**
 * Get all misi items without pagination
 * @returns {Promise} - Promise resolving to all misi items
 */
export async function getAllMisi() {
  try {
    const result = await getRecords(COLLECTIONS.MISI, { 
      perPage: 500, // Large number to get all records
      sort: 'nomor' 
    });
    
    // Transform the data to match expected format
    const misiList = result.items.map(item => ({
      id: item.id,
      nomor: item.nomor,
      text: item.misi,
    }));

    console.log('Fetched misi list:', misiList);  

    return misiList;
  } catch (error) {
    console.error('Error fetching all misi:', error);
    throw error;
  }
}
