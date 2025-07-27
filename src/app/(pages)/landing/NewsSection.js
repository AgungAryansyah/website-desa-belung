"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from "next/image";
import { getNews } from '../../../lib/api';

const NewsSection = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  // Fetch news data from PocketBase
  useEffect(() => {
    async function fetchNews() {
      try {
        setLoading(true);
        const result = await getNews({ 
          page: 1, 
          limit: 3 // Show 3 latest news items
        });
        
        setNewsItems(result.items || []);
        console.log('NewsSection: Fetched news items:', result.items);
      } catch (err) {
        setError(err.message);
        console.error('NewsSection: Error fetching news:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  // Handle click to navigate to news detail
  const handleNewsClick = (newsId) => {
    router.push(`/berita/${newsId}`);
  };

  // Handle "Lihat Semua Berita" click
  const handleViewAllNews = () => {
    router.push('/berita');
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

  // Helper function to truncate text
  const truncateText = (text, maxLength = 150) => {
    if (!text) return '';
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-black">Berita Terkini</h2>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
            <span className="ml-4 text-gray-600">Memuat berita...</span>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="text-center py-12">
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 max-w-md mx-auto">
              <p>Error loading news: {error}</p>
            </div>
          </div>
        )}

        {/* News Grid */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsItems.map((news, index) => (
                <article
                  key={news.id}
                  className="bg-[#D9D9D9] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => handleNewsClick(news.id)}
                >
                  <div className="relative aspect-video">
                    {news.cover || news.imageUrl ? (
                      <Image
                        src={news.cover || news.imageUrl}
                        alt={news.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                        priority={index === 0}
                        unoptimized
                        onError={(e) => {
                          console.error('Image failed to load:', news.cover || news.imageUrl);
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                        <Image
                          src="/landing/images/news_1.png"
                          alt="Default news image"
                          fill
                          className="object-cover opacity-50"
                        />
                      </div>
                    )}
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {news.category || "BERITA DESA BELUNG"}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                      {news.title || "Untitled"}
                    </h3>
                    <p className="text-black text-sm leading-relaxed mb-4 line-clamp-3">
                      {truncateText(news.excerpt) || "No excerpt available"}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="inline-flex items-center text-black hover:text-green-400 font-medium">
                        <Image
                          src="/landing/circle_arrow_black.svg"
                          alt="Explore arrow"
                          width={24}
                          height={24}
                          className="w-6 h-6 mr-2"
                        />
                        Pelajari lebih Lanjut
                      </div>
                      <span className="text-gray-400 text-sm">
                        {news.created ? formatDate(news.created) : "No date"}
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* No Data State */}
            {newsItems.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Belum ada berita tersedia</p>
              </div>
            )}

            {/* View All News Button */}
            {newsItems.length > 0 && (
              <div className="text-center mt-12">
                <button
                  onClick={handleViewAllNews}
                  className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Lihat Semua Berita
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default NewsSection;
