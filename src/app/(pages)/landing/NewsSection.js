import Image from "next/image";

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: "MMD Filkom UB di Desa Belung",
      excerpt:
        "Mahasiswa Membangun Desa (MMD) Fakultas Ilmu Komputer Universitas Brawijaya hadir di Desa Belung sebagai wujud kontribusi nyata dalam pengabdian kepada masyarakat. Program ini bertujuan untuk mendampingi masyarakat desa dalam pemanfaatan teknologi dan pengembangan potensi lokal..",
      image: "/landing/images/news_1.png",
      tag: "FAKULTAS ILMU KOMPUTER UNIVERSITAS BRAWIJAYA MALANG",
      date: "2025-01-10",
    },
    {
      id: 2,
      title: "MMD Filkom UB di Desa Belung",
      excerpt:
        "Mahasiswa Membangun Desa (MMD) Fakultas Ilmu Komputer Universitas Brawijaya hadir di Desa Belung sebagai wujud kontribusi nyata dalam pengabdian kepada masyarakat. Program ini bertujuan untuk mendampingi masyarakat desa dalam pemanfaatan teknologi dan pengembangan potensi lokal..",
      image: "/landing/images/news_1.png",
      tag: "FAKULTAS ILMU KOMPUTER UNIVERSITAS BRAWIJAYA MALANG",
      date: "2025-01-09",
    },
    {
      id: 3,
      title: "MMD Filkom UB di Desa Belung",
      excerpt:
        "Mahasiswa Membangun Desa (MMD) Fakultas Ilmu Komputer Universitas Brawijaya hadir di Desa Belung sebagai wujud kontribusi nyata dalam pengabdian kepada masyarakat. Program ini bertujuan untuk mendampingi masyarakat desa dalam pemanfaatan teknologi dan pengembangan potensi lokal..",
      image: "/landing/images/news_1.png",
      tag: "FAKULTAS ILMU KOMPUTER UNIVERSITAS BRAWIJAYA MALANG",
      date: "2025-01-08",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Berita Terkini</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="bg-[#D9D9D9] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
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
                    {new Date(news.date).toLocaleDateString("id-ID")}
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
