import Image from "next/image";
import PageTemplate from "../../../templates/PageTemplate";
import { PAGES } from "../../../lib/pages";

export default function ProfilPage() {
  const pageConfig = PAGES.PROFIL;

  const misiData = [
    {
      id: 1,
      text: "Meningkatkan kualitas pelayanan publik yang cepat, mudah, dan transparan bagi seluruh masyarakat desa.",
    },
    {
      id: 2,
      text: "Mengembangkan potensi ekonomi lokal melalui BUMDes dan pemberdayaan UMKM berbasis kearifan lokal.",
    },
    {
      id: 3,
      text: "Mewujudkan infrastruktur desa yang merata dan berkualitas untuk menunjang aktivitas sosial dan ekonomi warga.",
    },
    {
      id: 4,
      text: "Meningkatkan kualitas sumber daya manusia yang berdaya saing dan berakhlak mulia melalui program pendidikan dan keagamaan.",
    },
  ];

  return (
    <PageTemplate className="bg-gray-50 pt-0">
      <div className="min-h-screen p-0 m-0">
        {/* HERO SECTION */}
        <section className="relative min-h-[100px] overflow-hidden p-0 m-0">
          {/* Background Image */}
          <Image
            src="/bg-prfl.svg"
            alt="Latar belakang Desa Belung"
            fill
            className="object-cover object-center"
            priority
          />

          {/* Content Container */}
          <div className="relative z-20 container mx-auto px-10 py-12 md:py-50">
            <div className="max-w-15x3 mx-auto">
              {/* Logo and Header Card */}
              <div className="bg-white/20 backdrop-blur-[2px] rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-white/30">
                <div className="flex flex-col md:flex-row items-center gap-8">
                  {/* Logo Kabupaten */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src="/Logo-Belung-1.svg"
                        alt="Logo Kabupaten Malang"
                        width={200}
                        height={400}
                        className="mx-auto"
                      />
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 text-center mx-24 md:text-left bg-black/40 rounded-3xl">
                    <h1 className="text-3xl md:text-5xl md:text-center font-bold text-white mb-4 mt-5 ">
                      Desa Belung
                    </h1>
                    <p className="text-lg md:text-xl md:text-center text-white mb-4 font-medium">
                      Kecamatan Poncokusumo
                    </p>
                    <div className="border-t-2 border-white/50 pt-4">
                      <p className="text-white leading-relaxed text-base mb-4 mx-12 md:text-2xl">
                        Desa Belung merupakan salah satu desa di Kecamatan
                        Poncokusumo yang memiliki keindahan alam serta potensi
                        masyarakat yang terus berkembang menuju desa mandiri dan
                        sejahtera.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* MAIN CONTENT */}
        <div className="container mx-auto px-4 py-12 space-y-12">
          {/* Video Profil Section */}
          <section className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
                <div className="lg:w-1/2">
                  <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                      Video Profil Desa Belung
                    </h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Saksikan perjalanan dan potret kehidupan masyarakat Desa
                    Belung melalui video profil kami. Temukan keindahan alam,
                    budaya, dan semangat gotong royong yang menjadi kekuatan
                    desa.
                  </p>
                  <a
                    href="https://youtu.be/oSbtRUTxVQE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 inline-block"
                  >
                    Tonton Video
                  </a>
                </div>
                <div className="lg:w-1/2 w-full">
                  <a
                    href="https://youtu.be/oSbtRUTxVQE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    {/* Wrapper dengan animasi */}
                    <div className="relative w-full pb-[56.25%] overflow-hidden rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-105">
                      {/* iframe tetap dibiarkan tanpa animasi */}
                      <iframe
                        src="https://www.youtube.com/embed/oSbtRUTxVQE"
                        title="Video Profil Desa Belung"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                      ></iframe>

                      {/* Tombol play tetap bisa ditambahkan kalau mau */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                          <svg
                            className="w-8 h-8 text-green-600 ml-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Visi Section */}
          <section className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl shadow-xl text-white">
            <div className="p-8 md:p-12 text-center">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">VISI</h2>
              </div>
              <blockquote className="text-xl md:text-2xl font-medium italic leading-relaxed max-w-4xl mx-auto">
                "Terwujudnya Desa Belung yang Maju, Mandiri, Sejahtera, dan
                Berakhlak Mulia Berlandaskan Gotong Royong."
              </blockquote>
            </div>
          </section>

          {/* Misi Section */}
          <section className="bg-white rounded-3xl shadow-xl">
            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  MISI
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Langkah-langkah strategis untuk mewujudkan visi Desa Belung
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                {misiData.map((misi) => (
                  <div key={misi.id} className="group">
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 h-full border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                            {misi.id}
                          </div>
                        </div>
                        <p className="text-gray-800 leading-relaxed text-lg flex-1 pt-2">
                          {misi.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Geografis Section */}
          <section className="bg-white rounded-3xl shadow-xl">
            <div className="p-8 md:p-12">
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Geografis Desa
                </h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                  Informasi lengkap tentang letak dan batas wilayah Desa Belung
                </p>
              </div>

              <div className="w-full">
                {/* Batas Wilayah */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center border-t-4 border-blue-500">
                    <div className="mb-4">
                      <svg
                        className="w-10 h-10 mx-auto text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">
                      Batas Utara
                    </h4>
                    <p className="text-gray-700 font-medium text-base">
                      Desa Tulusbesar
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 text-center border-t-4 border-green-500">
                    <div className="mb-4">
                      <svg
                        className="w-10 h-10 mx-auto text-green-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">
                      Batas Timur
                    </h4>
                    <p className="text-gray-700 font-medium text-base">
                      Desa Wringinanom
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 text-center border-t-4 border-orange-500">
                    <div className="mb-4">
                      <svg
                        className="w-10 h-10 mx-auto text-orange-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">
                      Batas Selatan
                    </h4>
                    <p className="text-gray-700 font-medium text-base">
                      Desa Wonomulyo
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-8 text-center border-t-4 border-purple-500">
                    <div className="mb-4">
                      <svg
                        className="w-10 h-10 mx-auto text-purple-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 19l-7-7m0 0l7-7m-7 7h18"
                        />
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-900 mb-3 text-lg">
                      Batas Barat
                    </h4>
                    <p className="text-gray-700 font-medium text-base">
                      Desa Pulungdowo
                    </p>
                  </div>
                </div>

                {/* Luas Desa */}
                <div className="bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-xl p-10 text-center border-l-4 border-indigo-500">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-12 h-12 text-indigo-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 11.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 22s8-4.5 8-11a8 8 0 10-16 0c0 6.5 8 11 8 11z"
                      />
                    </svg>

                    <div>
                      <h4 className="font-bold text-indigo-600 text-2xl">
                        Luas Desa
                      </h4>
                      <p className="text-4xl font-bold text-indigo-600 mt-1">
                        3050 Ha 610 m²
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Total luas wilayah Desa Belung yang terdiri dari area
                    pemukiman, pertanian, dan fasilitas umum
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageTemplate>
  );
}
