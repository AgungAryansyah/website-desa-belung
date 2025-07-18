// API Configuration
export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.example.com',
  timeout: 10000, // 10 seconds
  retries: 3,
};

// Common headers for API requests
export const DEFAULT_HEADERS = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
};

// Endpoint configurations
export const ENDPOINTS = {
  NEWS: '/news',
  PROFILE: '/profile', 
  EVENTS: '/events',
  STRUCTURE: '/structure',
  POTENTIAL: '/potential',
};
