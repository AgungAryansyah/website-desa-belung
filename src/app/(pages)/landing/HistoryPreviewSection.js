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
                    src="/landing/images/background_3.webp"
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
                <p className="text-black text-justify text-lg leading-relaxed mb-8">
                  Desa Belung, yang kini berada di Kecamatan Poncokusumo,
                  Kabupaten Malang, memiliki sejarah panjang sejak era Kerajaan
                  Mataram, Singasari, hingga masa kolonial Belanda. Kisah heroik
                  Panji Pulang Jiwo, Putri Proboretno, dan Mangun Yuda mewarnai
                  asal-usul desa, termasuk nama &quot;Belung&quot; yang diyakini berasal
                  dari luka hingga batas tulang lengan atau dari banyaknya
                  tulang di medan pertempuran. Letaknya yang strategis di kaki
                  Gunung Semeru dan di aliran sungai suci menjadikannya penting
                  dalam sejarah spiritual dan geopolitik lokal. Situs-situs
                  sakral, petilasan, dan tradisi lisan tetap dijaga, memperkuat
                  identitas warga yang menjadikan sejarah sebagai sumber
                  kebanggaan dan kekuatan kolektif masyarakat Belung hingga
                  kini.
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
