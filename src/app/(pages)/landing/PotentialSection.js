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
                <p className="text-black text-lg leading-relaxed mb-8">
                  Desa Belung memiliki beragam potensi yang menjadi kekuatan
                  utama dalam pembangunan ekonomi dan sosial masyarakatnya.
                  Terletak di lereng Gunung Semeru, desa ini memiliki tanah yang
                  subur dan iklim yang sejuk, menjadikannya sangat ideal untuk
                  pertanian, terutama sayuran dataran tinggi seperti kubis,
                  wortel, kentang, dan daun bawang. Hasil pertanian ini tidak
                  hanya mencukupi kebutuhan lokal, tetapi juga dipasarkan ke
                  kota-kota besar di Jawa Timur.
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
                    src="/landing/images/potential.png"
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
