import PocketBase from 'pocketbase';

// Initialize PocketBase client
const pb = new PocketBase(process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://localhost:8080');

// Enable auto cancellation for duplicate requests
pb.autoCancellation(false);

/**
 * Generic function to get records from a collection
 * @param {string} collection - The PocketBase collection name
 * @param {Object} options - Query options (filter, sort, expand, etc.)
 * @returns {Promise} - Promise resolving to the records
 */
export async function getRecords(collection, options = {}) {
  try {
    const {
      page = 1,
      perPage = 50,
      filter = '',
      sort = '',
      expand = '',
      fields = ''
    } = options;

    const result = await pb.collection(collection).getList(page, perPage, {
      filter,
      sort,
      expand,
      fields
    });

    return result;
  } catch (error) {
    console.error(`Error fetching records from ${collection}:`, error);
    throw error;
  }
}

/**
 * Get a single record by ID
 * @param {string} collection - The PocketBase collection name
 * @param {string} id - The record ID
 * @param {Object} options - Query options (expand, fields)
 * @returns {Promise} - Promise resolving to the record
 */
export async function getRecord(collection, id, options = {}) {
  try {
    const { expand = '', fields = '' } = options;
    
    const record = await pb.collection(collection).getOne(id, {
      expand,
      fields
    });
    console.log(`Fetched record ${id} from ${collection}:`, record);
    return record;
  } catch (error) {
    console.error(`Error fetching record ${id} from ${collection}:`, error);
    throw error;
  }
}

/**
 * Create a new record
 * @param {string} collection - The PocketBase collection name
 * @param {Object} data - The record data
 * @returns {Promise} - Promise resolving to the created record
 */
export async function createRecord(collection, data) {
  try {
    const record = await pb.collection(collection).create(data);
    return record;
  } catch (error) {
    console.error(`Error creating record in ${collection}:`, error);
    throw error;
  }
}

/**
 * Update an existing record
 * @param {string} collection - The PocketBase collection name
 * @param {string} id - The record ID
 * @param {Object} data - The updated data
 * @returns {Promise} - Promise resolving to the updated record
 */
export async function updateRecord(collection, id, data) {
  try {
    const record = await pb.collection(collection).update(id, data);
    return record;
  } catch (error) {
    console.error(`Error updating record ${id} in ${collection}:`, error);
    throw error;
  }
}

/**
 * Delete a record
 * @param {string} collection - The PocketBase collection name
 * @param {string} id - The record ID
 * @returns {Promise} - Promise resolving to success status
 */
export async function deleteRecord(collection, id) {
  try {
    await pb.collection(collection).delete(id);
    return true;
  } catch (error) {
    console.error(`Error deleting record ${id} from ${collection}:`, error);
    throw error;
  }
}

/**
 * Get file URL from PocketBase
 * @param {Object} record - The record containing the file
 * @param {string} filename - The filename field
 * @param {string} thumb - Optional thumbnail size (e.g., '100x100')
 * @returns {string} - The file URL
 */
export function getFileUrl(record, filename, thumb = '') {
  const url = pb.files.getURL(record, filename, { thumb });
  
  // DEBUG: Log file URL generation details
  console.log('=== FILE URL DEBUG ===');
  console.log('Record:', record);
  console.log('Record ID:', record?.id);
  console.log('Record Collection:', record?.collectionId || record?.collectionName);
  console.log('Filename:', filename);
  console.log('Thumb:', thumb);
  console.log('Generated URL:', url);
  console.log('PocketBase Base URL:', pb.baseUrl);
  console.log('========================');
  
  return url;
}

/**
 * Authenticate user
 * @param {string} email - User email
 * @param {string} password - User password
 * @returns {Promise} - Promise resolving to auth data
 */
export async function authWithPassword(email, password) {
  try {
    const authData = await pb.collection('users').authWithPassword(email, password);
    return authData;
  } catch (error) {
    console.error('Authentication error:', error);
    throw error;
  }
}

/**
 * Logout user
 */
export function logout() {
  pb.authStore.clear();
}

/**
 * Check if user is authenticated
 * @returns {boolean} - Authentication status
 */
export function isAuthenticated() {
  return pb.authStore.isValid;
}

/**
 * Get current user
 * @returns {Object|null} - Current user or null
 */
export function getCurrentUser() {
  return pb.authStore.model;
}

// Export PocketBase instance for direct use if needed
export { pb };
