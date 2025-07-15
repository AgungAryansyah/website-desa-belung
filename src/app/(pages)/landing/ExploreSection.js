import ExploreCard from './ExploreCard';

const ExploreSection = () => {
  const exploreItems = [
    {
      id: 'profil-desa',
      title: 'Profil Desa',
      image: '/placeholder-profil-desa.jpg',
      link: '/profil'
    },
    {
      id: 'struktur-desa',
      title: 'Struktur Desa',
      image: '/placeholder-struktur-desa.jpg',
      link: '/struktur'
    },
    {
      id: 'potensi-desa',
      title: 'Potensi Desa',
      image: '/placeholder-potensi-desa.jpg',
      link: '/potensi'
    },
    {
      id: 'berita',
      title: 'Berita',
      image: '/placeholder-berita.jpg',
      link: '/berita'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Jelajahi<br />
              Website Ini
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Pada Website ini anda bisa melihat aspek-aspek yang terkait dengan desa. Seperti......
            </p>
          </div>

          {/* Right Content - Grid */}
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-3">
              {exploreItems.map((item) => (
                <ExploreCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
