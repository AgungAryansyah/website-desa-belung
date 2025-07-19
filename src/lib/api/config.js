// PocketBase Configuration
export const POCKETBASE_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_POCKETBASE_URL || 'http://localhost:8080',
  timeout: 10000, // 10 seconds
};

// Collection names for PocketBase
export const COLLECTIONS = {
  NEWS: 'news',
  PROFILE: 'village_profile',
  EVENTS: 'events',
  STRUCTURE: 'village_structure',
  POTENTIAL: 'village_potential',
  TEAM_MEMBERS: 'team_members',
  GALLERY: 'gallery',
  DOCUMENTS: 'documents',
};
