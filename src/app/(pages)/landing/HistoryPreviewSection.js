import Image from "next/image";

const HistoryPreviewSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#D9D9D9] rounded-[20px] shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content - Image */}
            <div className="lg:w-1/3">
              <div className="h-64 lg:h-full bg-gray-300 relative">
                {/* image */}
                <div className="absolute inset-0 bg-gray-300">
                  <Image
                    src="/landing/images/history.png"
                    alt={` image`}
                    fill
                    priority
                    className="object-cover w-full h-full"
                    quality={85}
                  />
                </div>
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="lg:w-2/3 p-8 lg:p-12 flex items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                  Sejarah Desa Belung
                </h2>
                <p className="text-black text-lg leading-relaxed mb-8">
                  Desa Belung terletak di kaki Gunung Semeru, sebuah desa yang
                  dikenal dengan kekayaan alamnya, terutama hasil pertaniannya
                  yang melimpah seperti sayuran. Desa ini memiliki sejarah yang
                  kaya, terbentuk pada tahun 1945 dan terus berkembang sebagai
                  bagian penting dari wilayah administratif Kecamatan
                  Poncokusumo, Kabupaten Malang, Jawa Timur. Secara geografis,
                  Desa Belung memiliki koordinat 1.124582 LU dengan ketinggian
                  sekitar ±1.000 meter di atas permukaan laut, menciptakan iklim
                  yang sejuk dan kondusif untuk pertanian.
                </p>

                <div className="flex items-center">
                  <div className="w-6 h-6 bg-[#D9D9D9] rounded-full flex items-center justify-center mr-3">
                    <Image
                      src="/landing/circle_arrow_black.svg"
                      alt="Explore arrow"
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  </div>
                  <a
                    href="/sejarah"
                    className="text-black font-semibold hover:text-gray-600 transition-colors"
                  >
                    Pelajari lebih Lanjut
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryPreviewSection;
