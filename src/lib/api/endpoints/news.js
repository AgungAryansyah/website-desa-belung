import { fetchAPI } from '../client';

/**
 * Get a list of news articles with pagination
 */
export async function getNews({ page = 1, limit = 10 } = {}) {
  return fetchAPI(`/news?page=${page}&limit=${limit}`);
}

/**
 * Get a single news article by ID
 */
export async function getNewsById(id) {
  return fetchAPI(`/news/${id}`);
}

/**
 * Search news articles
 */
export async function searchNews(query) {
  return fetchAPI(`/news/search?q=${encodeURIComponent(query)}`);
}

/**
 * Get featured news articles
 */
export async function getFeaturedNews() {
  return fetchAPI('/news/featured');
}

/**
 * Get latest news articles
 */
export async function getLatestNews(limit = 5) {
  return fetchAPI(`/news/latest?limit=${limit}`);
}
