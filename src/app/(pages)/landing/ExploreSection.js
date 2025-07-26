import ExploreCard from "./ExploreCard";

const ExploreSection = () => {
  const exploreItems = [
    {
      id: "profil-desa",
      title: "Profil Desa",
      image: "/landing/images/background_1.png",
      link: "/profil",
    },
    {
      id: "struktur-desa",
      title: "Struktur Desa",
      image: "/landing/images/background_1.png",
      link: "/struktur",
    },
    {
      id: "potensi-desa",
      title: "Potensi Desa",
      image: "/landing/images/background_1.png",
      link: "/potensi",
    },
    {
      id: "berita",
      title: "Berita",
      image: "/landing/images/background_1.png",
      link: "/berita",
    },
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="lg:w-1/3 flex-shrink-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 lg:mb-6">
              Jelajahi
              <br />
              Website Ini
            </h2>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              Pada website ini, Anda dapat mengeksplorasi berbagai aspek penting
              yang berkaitan dengan Desa Belung. Mulai dari informasi umum
              hingga potensi lokal yang menjadi kebanggaan desa kami. Temukan
              lebih banyak melalui fitur-fitur berikut:
            </p>
          </div>

          {/* Right Cards Grid */}
          <div className="lg:w-2/3">
            {/* GRID RESPONSIVE - INI YANG PENTING */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
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
