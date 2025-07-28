import Image from "next/image";

const PotentialSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-[#D9D9D9] rounded-[20px] shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Left Content - Text */}
            <div className="lg:w-2/3 p-8 lg:p-12 flex items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-black mb-6">
                  Potensi Desa Belung
                </h2>
                <p className="text-black text-lg text-justify leading-relaxed mb-8">
                  Desa Belung terletak di kaki Gunung Semeru dengan iklim sejuk
                  yang mendukung sektor pertanian dan peternakan. Warga aktif
                  dalam kelompok tani, ternak, jamaah sholawat, hingga
                  pengelolaan air bersih. Budaya lokal seperti Bantengan dan
                  Kuda Lumping tetap lestari sebagai warisan generasi. Potensi
                  ekonomi desa ditopang UMKM olahan hasil pertanian seperti nasi
                  gerit dari jagung, opak, keripik usus, dan produk kemitraan
                  lainnya yang terus berkembang secara mandiri dan
                  berkelanjutan.
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
                    href="/potensi"
                    className="text-black font-semibold hover:text-gray-600 transition-colors"
                  >
                    Pelajari lebih Lanjut
                  </a>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="lg:w-1/3">
              <div className="h-64 lg:h-full bg-gray-300 relative">
                {/* image */}
                <div className="absolute inset-0 bg-gray-300">
                  <Image
                    src="/landing/images/potensi.jpg"
                    alt={` image`}
                    fill
                    priority
                    className="object-cover w-full h-full"
                    quality={85}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PotentialSection;
