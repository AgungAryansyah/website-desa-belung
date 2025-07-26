// Export all API functions from endpoints
export * from './endpoints/news';
export * from './endpoints/profile';
export * from './endpoints/structure';
export * from './endpoints/potential';
export * from './endpoints/history';

// Export client functions for direct access if needed
export { 
  getRecords, 
  getRecord, 
  createRecord, 
  updateRecord, 
  deleteRecord, 
  getFileUrl,
  authWithPassword,
  logout,
  isAuthenticated,
  getCurrentUser,
  pb 
} from './client';

// Export config
export { POCKETBASE_CONFIG, COLLECTIONS } from './config';
