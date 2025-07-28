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
    <PageTemplate className="pt-0 bg-gray-50">
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
          <div className="container relative z-20 px-4 py-12 mx-auto md:px-10 md:py-50">
            <div className="mx-auto max-w-15x3">
              {/* Logo and Header Card */}
              <div className="bg-white/20 backdrop-blur-[2px] rounded-3xl shadow-2xl p-6 md:p-12 mb-8 border border-white/30">
                <div className="flex flex-col items-center gap-6 md:gap-8 md:flex-row">
                  {/* Logo Kabupaten */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <Image
                        src="/Logo-Belung-1.svg"
                        alt="Logo Kabupaten Malang"
                        width={150}
                        height={300}
                        className="mx-auto md:w-[200px] md:h-[400px]"
                      />
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 mx-4 text-center md:mx-24 md:text-left bg-black/40 rounded-3xl">
                    <h1 className="mt-5 mb-4 text-2xl font-bold text-white md:text-5xl md:text-center">
                      Desa Belung
                    </h1>
                    <p className="mb-4 text-lg font-medium text-white md:text-xl md:text-center">
                      Kecamatan Poncokusumo
                    </p>
                    <div className="pt-4 border-t-2 border-white/50">
                      <p className="mx-4 mb-4 text-sm leading-relaxed text-white md:mx-12 md:text-2xl text-center">
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
        <div className="container px-4 py-12 mx-auto space-y-12">
          {/* Video Profil Section */}
          <section className="overflow-hidden bg-white shadow-xl rounded-3xl">
            <div className="p-6 md:p-12">
              <div className="flex flex-col items-center gap-6 lg:flex-row md:gap-12">
                <div className="lg:w-1/2">
                  <div className="mb-6">
                    <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-4xl">
                      Video Profil Desa Belung
                    </h2>
                  </div>
                  <p className="mb-6 text-base text-justify leading-relaxed text-gray-700 md:text-lg">
                    Saksikan perjalanan dan potret kehidupan masyarakat Desa
                    Belung melalui video profil kami. Temukan keindahan alam,
                    budaya, dan semangat gotong royong yang menjadi kekuatan
                    desa.
                  </p>
                  <a
                    href="https://youtu.be/oSbtRUTxVQE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 text-sm font-medium text-white transition-colors duration-200 bg-green-600 rounded-full md:px-8 md:text-base hover:bg-green-700"
                  >
                    Tonton Video
                  </a>
                </div>
                <div className="w-full lg:w-1/2">
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
                      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 opacity-0 bg-black/20 group-hover:opacity-100">
                        <div className="flex items-center justify-center w-12 h-12 transition-transform duration-300 transform rounded-full md:w-16 md:h-16 bg-white/90 group-hover:scale-110">
                          <svg
                            className="w-6 h-6 ml-1 text-green-600 md:w-8 md:h-8"
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
          <section className="text-white shadow-xl bg-gradient-to-r from-green-600 to-green-700 rounded-3xl">
            <div className="p-6 text-center md:p-12">
              <div className="mb-6">
                <h2 className="mb-6 text-2xl font-bold md:text-4xl md:mb-8">
                  VISI
                </h2>
              </div>
              <blockquote className="max-w-4xl mx-auto text-lg italic font-medium leading-relaxed md:text-2xl">
                "Terwujudnya Desa Belung yang Maju, Mandiri, Sejahtera, dan
                Berakhlak Mulia Berlandaskan Gotong Royong."
              </blockquote>
            </div>
          </section>

          {/* Misi Section */}
          <section className="bg-white shadow-xl rounded-3xl">
            <div className="p-6 md:p-12">
              <div className="mb-8 text-center md:mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-4xl">
                  MISI
                </h2>
                <p className="max-w-2xl mx-auto text-base text-gray-600 md:text-lg">
                  Langkah-langkah strategis untuk mewujudkan visi Desa Belung
                </p>
              </div>

              <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
                {misiData.map((misi) => (
                  <div key={misi.id} className="group">
                    <div className="h-full p-6 transition-shadow duration-300 border-l-4 border-green-500 md:p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg">
                      <div className="flex items-start gap-4 md:gap-6">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-10 h-10 text-lg font-bold text-white bg-green-600 rounded-full md:w-12 md:h-12 md:text-xl">
                            {misi.id}
                          </div>
                        </div>
                        <p className="flex-1 pt-1 text-base text-justify leading-relaxed text-gray-800 md:pt-2 md:text-lg">
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
          <section className="bg-white shadow-xl rounded-3xl">
            <div className="p-6 md:p-12">
              <div className="mb-8 text-center md:mb-10">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 md:text-4xl">
                  Geografis Desa
                </h2>
                <p className="max-w-2xl mx-auto text-base text-gray-600 md:text-lg">
                  Informasi lengkap tentang letak dan batas wilayah Desa Belung
                </p>
              </div>

              <div className="w-full">
                {/* Batas Wilayah */}
                <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 md:py-8">
                  {/* Batas Utara */}
                  <div className="p-6 text-center transition-transform duration-300 border-t-4 border-blue-500 md:p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group">
                    <div className="mb-4">
                      <svg
                        className="w-8 h-8 mx-auto text-blue-600 transition-transform duration-300 transform md:w-10 md:h-10 group-hover:-translate-y-1"
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
                    <h4 className="mb-2 text-base font-bold text-gray-900 md:mb-3 md:text-lg">
                      Batas Utara
                    </h4>
                    <p className="text-sm font-medium text-gray-700 md:text-base">
                      Desa Tulusbesar
                    </p>
                  </div>

                  {/* Batas Selatan */}
                  <div className="p-6 text-center transition-transform duration-300 border-t-4 border-green-500 md:p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl group">
                    <div className="mb-4">
                      <svg
                        className="w-8 h-8 mx-auto text-green-600 transition-transform duration-300 transform md:w-10 md:h-10 group-hover:translate-y-1"
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
                    <h4 className="mb-2 text-base font-bold text-gray-900 md:mb-3 md:text-lg">
                      Batas Selatan
                    </h4>
                    <p className="text-sm font-medium text-gray-700 md:text-base">
                      Desa Gunungrejo
                    </p>
                  </div>

                  {/* Batas Barat */}
                  <div className="p-6 text-center transition-transform duration-300 border-t-4 border-yellow-500 md:p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl group">
                    <div className="mb-4">
                      <svg
                        className="w-8 h-8 mx-auto text-yellow-600 transition-transform duration-300 transform md:w-10 md:h-10 group-hover:-translate-x-1"
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
                    <h4 className="mb-2 text-base font-bold text-gray-900 md:mb-3 md:text-lg">
                      Batas Barat
                    </h4>
                    <p className="text-sm font-medium text-gray-700 md:text-base">
                      Desa Pajaran
                    </p>
                  </div>

                  {/* Batas Timur */}
                  <div className="p-6 text-center transition-transform duration-300 border-t-4 border-purple-500 md:p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl group">
                    <div className="mb-4">
                      <svg
                        className="w-8 h-8 mx-auto text-purple-600 transition-transform duration-300 transform md:w-10 md:h-10 group-hover:translate-x-1"
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
                    <h4 className="mb-2 text-base font-bold text-gray-900 md:mb-3 md:text-lg">
                      Batas Timur
                    </h4>
                    <p className="text-sm font-medium text-gray-700 md:text-base">
                      Desa Gedogkulon
                    </p>
                  </div>
                </div>
                {/* Luas Desa */}
                <div className="p-6 text-center transition-all duration-300 border-l-4 border-indigo-500 shadow-md md:p-10 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl hover:shadow-xl hover:scale-105 hover:border-indigo-600">
                  <div className="flex flex-col items-center justify-center gap-3 mb-4 md:flex-row md:gap-4">
                    <div className="transition-transform duration-300 transform group-hover:rotate-12">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="text-indigo-600 transition-colors duration-300 w-10 h-10 md:w-14 md:h-14 hover:text-indigo-700"
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
                    </div>

                    <div className="text-center md:text-left">
                      <h4 className="text-lg text-center font-semibold text-indigo-700 md:text-xl">
                        Luas Desa
                      </h4>
                      <p className="mt-1 text-2xl font-extrabold text-indigo-800 md:text-4xl">
                        3050 Ha 610 m²
                      </p>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed text-gray-700 md:text-lg">
                    Total luas wilayah Desa Belung yang terdiri dari area
                    pemukiman, pertanian, dan fasilitas umum.
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
