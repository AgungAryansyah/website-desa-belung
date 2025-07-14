/**
 * Page Management Configuration
 * Centralized configuration for all pages in the application
 */

export const PAGES = {
  BERANDA: {
    id: 'beranda',
    title: 'Beranda',
    path: '/',
    description: 'Halaman utama Desa Belung'
  },
  PROFIL: {
    id: 'profil',
    title: 'Profil',
    path: '/profil',
    description: 'Profil dan informasi umum Desa Belung'
  },
  SEJARAH: {
    id: 'sejarah',
    title: 'Sejarah',
    path: '/sejarah',
    description: 'Sejarah dan perkembangan Desa Belung'
  },
  STRUKTUR: {
    id: 'struktur',
    title: 'Struktur',
    path: '/struktur',
    description: 'Struktur organisasi pemerintahan desa'
  },
  POTENSI: {
    id: 'potensi',
    title: 'Potensi',
    path: '/potensi',
    description: 'Potensi dan kekayaan Desa Belung'
  },
  BERITA: {
    id: 'berita',
    title: 'Berita',
    path: '/berita',
    description: 'Berita dan pengumuman terkini'
  },
  PETA: {
    id: 'peta',
    title: 'Peta',
    path: '/peta',
    description: 'Peta wilayah dan lokasi penting'
  }
};

/**
 * Get navigation items for header/menu
 */
export const getNavigationItems = () => {
  return Object.values(PAGES);
};

/**
 * Get page configuration by ID
 */
export const getPageById = (id) => {
  return Object.values(PAGES).find(page => page.id === id);
};

/**
 * Get page configuration by path
 */
export const getPageByPath = (path) => {
  return Object.values(PAGES).find(page => page.path === path);
};
