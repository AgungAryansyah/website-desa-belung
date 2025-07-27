import Image from "next/image";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "MMD Filkom UB di Desa Belung",
      excerpt:
        "Mahasiswa Membangun Desa (MMD) Fakultas Ilmu Komputer Universitas Brawijaya hadir di Desa Belung sebagai wujud kontribusi nyata dalam pengabdian kepada masyarakat. Program ini bertujuan untuk mendampingi masyarakat desa dalam pemanfaatan teknologi dan pengembangan potensi lokal.",
      image: "/landing/images/news_1.png",
      tag: "FAKULTAS ILMU KOMPUTER UNIVERSITAS BRAWIJAYA MALANG",
      date: "2025-01-10",
    },
    {
      id: 2,
      title: "MMD Filkom UB di Desa Belung",
      excerpt:
        "Mahasiswa Membangun Desa (MMD) Fakultas Ilmu Komputer Universitas Brawijaya hadir di Desa Belung sebagai wujud kontribusi nyata dalam pengabdian kepada masyarakat. Program ini bertujuan untuk mendampingi masyarakat desa dalam pemanfaatan teknologi dan pengembangan potensi lokal.",
      image: "/landing/images/news_1.png",
      tag: "FAKULTAS ILMU KOMPUTER UNIVERSITAS BRAWIJAYA MALANG",
      date: "2025-01-09",
    },
    {
      id: 3,
      title: "MMD Filkom UB di Desa Belung",
      excerpt:
        "Mahasiswa Membangun Desa (MMD) Fakultas Ilmu Komputer Universitas Brawijaya hadir di Desa Belung sebagai wujud kontribusi nyata dalam pengabdian kepada masyarakat. Program ini bertujuan untuk mendampingi masyarakat desa dalam pemanfaatan teknologi dan pengembangan potensi lokal.",
      image: "/landing/images/news_1.png",
      tag: "FAKULTAS ILMU KOMPUTER UNIVERSITAS BRAWIJAYA MALANG",
      date: "2025-01-08",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-black">Berita Terkini</h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="bg-[#D9D9D9] rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              {/* News Image */}
              <div className="relative aspect-video">
                <Image
                  src={news.image}
                  alt={news.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority={news.id === 1}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium text-white bg-green-400 rounded-full">
                    {news.tag}
                  </span>
                </div>
              </div>

              {/* News Content */}
              <div className="p-6">
                <h3 className="mb-3 text-xl font-bold text-black line-clamp-2">
                  {news.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-black line-clamp-3">
                  {news.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center font-medium text-black hover:text-green-400"
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
                  <span className="text-sm text-gray-400">
                    {new Date(news.date).toLocaleDateString("id-ID")}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* See All News Button */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 text-white transition-colors bg-green-600 rounded-lg hover:bg-green-700"
          >
            Lihat Semua Berita
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
