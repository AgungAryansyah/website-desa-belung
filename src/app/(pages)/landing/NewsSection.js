import Image from 'next/image';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: 'MMD Filkom UB di Desa Belung',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula erat molestie convallis sollicitudin. Fusce ultrices felis lacus, vel scelerisque magna efficitur ut. Nam egestas tempus odio, at pellentesque nibh placerat ut. Suspendisse a feugiat tortor.',
      image: '/news-1-dummy.jpg',
      tag: 'FAKULTAS ILMU KOMPUTER UNIVERSITAS BRAWIJAYA MALANG',
      date: '2025-01-10'
    },
    {
      id: 2,
      title: 'MMD Filkom UB di Desa Belung',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula erat molestie convallis sollicitudin. Fusce ultrices felis lacus, vel scelerisque magna efficitur ut. Nam egestas tempus odio, at pellentesque nibh placerat ut. Suspendisse a feugiat tortor.',
      image: '/news-2-dummy.jpg',
      tag: 'FAKULTAS ILMU KOMPUTER UNIVERSITAS BRAWIJAYA MALANG',
      date: '2025-01-09'
    },
    {
      id: 3,
      title: 'MMD Filkom UB di Desa Belung',
      excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vehicula erat molestie convallis sollicitudin. Fusce ultrices felis lacus, vel scelerisque magna efficitur ut. Nam egestas tempus odio, at pellentesque nibh placerat ut. Suspendisse a feugiat tortor.',
      image: '/news-3-dummy.jpg',
      tag: 'FAKULTAS ILMU KOMPUTER UNIVERSITAS BRAWIJAYA MALANG',
      date: '2025-01-08'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Berita Terkini</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <article key={news.id} className="bg-[#D9D9D9] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative aspect-video">
                <div className="w-full h-full bg-gray-300"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {news.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-3 line-clamp-2">
                  {news.title}
                </h3>
                <p className="text-black text-sm leading-relaxed mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <a 
                    href="#"
                    className="inline-flex items-center text-black hover:text-green-400 font-medium"
                  >
                    <Image 
                      src="/landing/circle_arrow_black.svg" 
                      alt="Explore arrow" 
                      width={24}
                      height={24}
                      className="w-6 h-6 mr-2"
                    />
                    Pelajari lebih Lanjut
                  </a>
                  <span className="text-gray-400 text-sm">
                    {new Date(news.date).toLocaleDateString('id-ID')}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="#"
            className="inline-flex items-center bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Lihat Semua Berita
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
