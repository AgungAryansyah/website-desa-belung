// PocketBase Configuration
export const POCKETBASE_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_POCKETBASE_URL,
  timeout: 10000, // 10 seconds
};

// Collection names for PocketBase
export const COLLECTIONS = {
  NEWS: 'berita',
  STRUCTURE: 'struktur',
  IMAGES: 'gambar',
  HISTORY: 'sejarah',
  VISI: 'visi',
  MISI: 'misi',
};
