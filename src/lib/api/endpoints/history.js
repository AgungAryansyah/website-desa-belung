import { getRecords, getRecord, getFileUrl } from '../client';
import { COLLECTIONS } from '../config';

/**
 * @param {Object} options - Query options
 * @returns {Promise} - Promise resolving to history list
 */
export async function getHistory() {
  const options = {
    page: 1,
    perPage: 1,
  };

  const result = await getRecords(COLLECTIONS.HISTORY, options);
  console.log('History result:', result);

  const historyWithImages = await Promise.all(result.items.map(async (history) => {
    let imageUrl = null;
    let thumbnailUrl = null;
    let cover = null;

    if (history.cover) {
      try {
        const imageRecord = await getRecord(COLLECTIONS.IMAGES, history.cover);
        cover = getFileUrl(imageRecord);
        console.log(`Cover image for history ${history.id}:`, cover);
      } catch (error) {
        console.log(`Failed to fetch image for history ${history.id}:`, error);
      }
    }

    const finalItem = {
      ...history,
      imageUrl,
      thumbnailUrl,
      cover,
    };
    return finalItem;
  }));

  return {
    ...result,
    items: historyWithImages
  };
}
