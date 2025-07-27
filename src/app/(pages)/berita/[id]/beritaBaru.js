"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getNews } from '../../../../lib/api';

const BeritaBaru = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    async function fetchLatestNews() {
      try {
        setLoading(true);
        console.log('🔍 Fetching latest news...');
        
        const result = await getNews({ 
          page: 1, 
          limit: 4 
        });
        
        setLatestNews(result.items || []);
        
      } catch (err) {
        console.error('❌ Error fetching latest news:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchLatestNews();
  }, []);

  // Handle click to navigate to news detail
  const handleNewsClick = (newsId) => {
    router.push(`/berita/${newsId}`);
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

  // Helper function to truncate title
  const truncateTitle = (title, maxLength = 45) => {
    if (!title) return '';
    return title.length > maxLength ? title.substring(0, maxLength) + '...' : title;
  };

  // Helper function to truncate excerpt
  const truncateExcerpt = (excerpt, maxLength = 80) => {
    if (!excerpt) return '';
    return excerpt.length > maxLength ? excerpt.substring(0, maxLength) + '...' : excerpt;
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Berita Terbaru
      </h2>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600"></div>
          <span className="ml-2 text-sm">Loading...</span>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="text-red-500 text-sm p-4 bg-red-50 rounded-lg">
          Error loading latest news: {error}
        </div>
      )}

      {/* News List */}
      {!loading && !error && latestNews.length > 0 && (
        <div>
          {latestNews.map((news, index) => (
            <div 
              key={news.id || index} 
              className="flex gap-3 mb-4 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors border border-gray-100 hover:border-green-200"
              onClick={() => handleNewsClick(news.id)}
            >
              {/* Image */}
              <div className="w-20 h-20 overflow-hidden rounded-md bg-gray-200 flex-shrink-0">
                {news.thumbnailUrl || news.cover ? (
                  <Image
                    src={news.thumbnailUrl || news.cover}
                    alt={news.title || 'News image'}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200">
                    <Image
                      src="/berita1.svg"
                      alt="Default news image"
                      width={32}
                      height={32}
                      className="opacity-50"
                    />
                  </div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                {/* Title */}
                <h3 className="text-sm font-semibold text-gray-800 leading-tight line-clamp-2">
                  {truncateTitle(news.title || 'Untitled')}
                </h3>
                
                {/* Excerpt */}
                {news.excerpt && (
                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                    {truncateExcerpt(news.excerpt)}
                  </p>
                )}
                
                {/* Meta Information */}
                <div className="flex flex-col gap-1 mt-auto">
                  <p className="text-xs text-gray-500 flex items-center gap-1">
                    <span>🗓</span>
                    {news.created ? formatDate(news.created) : 'No date'}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Data State */}
      {!loading && !error && latestNews.length === 0 && (
        <div className="text-gray-500 text-sm text-center py-8">
          Tidak ada berita terbaru
        </div>
      )}
    </div>
  );
};

export default BeritaBaru;