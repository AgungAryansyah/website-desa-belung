// Export all API functions from endpoints
export * from './endpoints/news';
export * from './endpoints/profile';
export * from './endpoints/structure';
export * from './endpoints/potential';

// Export client and config for direct access if needed
export { fetchAPI } from './client';
export { API_CONFIG, ENDPOINTS } from './config';
