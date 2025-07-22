"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import PageTemplate from '../../../templates/PageTemplate';
import { PAGES } from '../../../lib/pages';
import { getNews } from '../../../lib/api';

export default function BeritaPage() {
  const pageConfig = PAGES.HOMEBERITA;
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState(1);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  
  const itemsPerPage = 6;

  // Fetch news data from PocketBase
  useEffect(() => {
    async function fetchNewsData() {
      try {
        setLoading(true);
        const result = await getNews({ 
          page: currentPage, 
          limit: itemsPerPage 
        });
        
        setNewsData(result.items);
        setTotalPages(Math.ceil(result.totalItems / itemsPerPage));
        
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchNewsData();
  }, [currentPage]);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle card click to navigate to detailed view
  const handleCardClick = (beritaId) => {
    router.push(`/berita/${beritaId}`);
  };

  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <PageTemplate>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">Berita Belung</h1>
          <p className="text-gray-600 mb-8 max-w-full">
            Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel jurnalistik dari Desa Belung 
          </p>

          {/* Loading State */}
          {loading && (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              <p>Error loading news: {error}</p>
            </div>
          )}

          {/* Grid Berita */}
          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsData.map((berita) => (
                <div
                  key={berita.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:cursor-pointer active:scale-95"
                  onClick={() => handleCardClick(berita.id)}
                >
                  <div className="w-full h-48 overflow-hidden relative bg-gray-200">
                    {(berita.cover) ? (
                      <Image 
                        src={berita.cover} 
                        alt={berita.title} 
                        fill
                        className="object-cover"
                        unoptimized
                        onError={(e) => {
                          console.error('Image failed to load:', berita.cover || berita.imageUrl || berita.thumbnailUrl);
                          console.error('Available image fields:', {
                            cover: berita.cover,
                            imageUrl: berita.imageUrl,
                            thumbnailUrl: berita.thumbnailUrl,
                            image: berita.image,
                            image_id: berita.image_id
                          });
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
                        <Image 
                          src="/berita1.svg" 
                          alt="Default news image" 
                          width={100}
                          height={100}
                          className="opacity-50"
                        />
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-md font-bold text-gray-800">{berita.title}</h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-3">{berita.excerpt}</p>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="text-sm text-gray-500 flex items-center gap-1">
                        <Image src="/banyakdilihat.svg" alt="Views" width={16} height={16} className="w-4 h-4" />
                        <span>Dilihat {berita.views || 0} kali</span>
                      </div>
                      <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                        {formatDate(berita.created)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Pagination */}
          {!loading && !error && totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              {/* Prev */}
              <button
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
                className={`w-9 h-9 rounded border text-sm ${
                  currentPage === 1
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-gray-300 text-black hover:bg-green-600 hover:text-white transition'
                }`}
              >
                &lt;
              </button>

              {/* Pages */}
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageClick(page)}
                  className={`w-9 h-9 rounded border text-sm font-medium transition-all duration-200 ease-in-out transform
                    ${currentPage === page
                      ? 'border-green-600 text-black bg-green-100 scale-105 ring-2 ring-green-300'
                      : 'border-gray-300 text-black hover:bg-green-600 hover:text-white hover:scale-105 active:scale-95 cursor-pointer'}
                  `}
                >
                  {page}
                </button>
              ))}

              {totalPages > 5 && <span className="text-gray-400">...</span>}

              {/* Last Page */}
              {totalPages > 5 && (
                <button
                  onClick={() => handlePageClick(totalPages)}
                  className={`w-9 h-9 rounded border text-sm ${
                    currentPage === totalPages
                      ? 'border-green-600 font-bold text-black'
                      : 'border-gray-300 text-black hover:bg-green-600 hover:text-white transition'
                  }`}
                >
                  {totalPages}
                </button>
              )}

              {/* Next */}
              <button
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`w-9 h-9 rounded border text-sm ${
                  currentPage === totalPages
                    ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                    : 'border-gray-300 text-black hover:bg-green-600 hover:text-white transition'
                }`}
              >
                &gt;
              </button>
            </div>
          )}
        </div>
      </div>
    </PageTemplate>
  );
}
