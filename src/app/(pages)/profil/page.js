import Image from "next/image";
import PageTemplate from "../../../templates/PageTemplate";
import { PAGES } from "../../../lib/pages";
import { getVisi, getAllMisi } from "../../../lib/api/endpoints/profile";

export default async function ProfilPage() {
  const pageConfig = PAGES.PROFIL;

  // Fetch data from PocketBase
  let visiData = "Terwujudnya Desa Belung yang Maju, Mandiri, Sejahtera, dan Berakhlak Mulia Berlandaskan Gotong Royong.";
  let misiData = [
    {
      id: 1,
      nomor: 1,
      text: "Meningkatkan kualitas pelayanan publik yang cepat, mudah, dan transparan bagi seluruh masyarakat desa.",
    },
    {
      id: 2,
      nomor: 2,
      text: "Mengembangkan potensi ekonomi lokal melalui BUMDes dan pemberdayaan UMKM berbasis kearifan lokal.",
    },
    {
      id: 3,
      nomor: 3,
      text: "Mewujudkan infrastruktur desa yang merata dan berkualitas untuk menunjang aktivitas sosial dan ekonomi warga.",
    },
    {
      id: 4,
      nomor: 4,
      text: "Meningkatkan kualitas sumber daya manusia yang berdaya saing dan berakhlak mulia melalui program pendidikan dan keagamaan.",
    },
  ];

  try {
    // Fetch visi data
    const visiResponse = await getVisi();
    visiData = visiResponse.text;
  } catch (error) {
    console.error('Error fetching visi:', error);
    // Keep default visi data if fetch fails
  }

  try {
    // Fetch misi data
    const misiResponse = await getAllMisi();
    if (misiResponse && misiResponse.length > 0) {
      misiData = misiResponse;
    }
  } catch (error) {
    console.error('Error fetching misi:', error);
    // Keep default misi data if fetch fails
  }

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
          <div className="container relative z-20 px-10 py-12 mx-auto md:py-50">
            <div className="mx-auto max-w-15x3">
              {/* Logo and Header Card */}
              <div className="bg-white/20 backdrop-blur-[2px] rounded-3xl shadow-2xl p-8 md:p-12 mb-8 border border-white/30">
                <div className="flex flex-col items-center gap-8 md:flex-row">
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
                  <div className="flex-1 mx-24 text-center md:text-left bg-black/40 rounded-3xl">
                    <h1 className="mt-5 mb-4 text-3xl font-bold text-white md:text-5xl md:text-center ">
                      Desa Belung
                    </h1>
                    <p className="mb-4 text-lg font-medium text-white md:text-xl md:text-center">
                      Kecamatan Poncokusumo
                    </p>
                    <div className="pt-4 border-t-2 border-white/50">
                      <p className="mx-12 mb-4 text-base leading-relaxed text-white md:text-2xl">
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
            <div className="p-8 md:p-12">
              <div className="flex flex-col items-center gap-8 lg:flex-row md:gap-12">
                <div className="lg:w-1/2">
                  <div className="mb-6">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                      Video Profil Desa Belung
                    </h2>
                  </div>
                  <p className="mb-6 text-lg leading-relaxed text-gray-700">
                    Saksikan perjalanan dan potret kehidupan masyarakat Desa
                    Belung melalui video profil kami. Temukan keindahan alam,
                    budaya, dan semangat gotong royong yang menjadi kekuatan
                    desa.
                  </p>
                  <a
                    href="https://youtu.be/oSbtRUTxVQE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 font-medium text-white transition-colors duration-200 bg-green-600 rounded-full hover:bg-green-700"
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
                        <div className="flex items-center justify-center w-16 h-16 transition-transform duration-300 transform rounded-full bg-white/90 group-hover:scale-110">
                          <svg
                            className="w-8 h-8 ml-1 text-green-600"
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
            <div className="p-8 text-center md:p-12">
              <div className="mb-6">
                <h2 className="mb-8 text-3xl font-bold md:text-4xl">VISI</h2>
              </div>
              <blockquote className="max-w-4xl mx-auto text-xl italic font-medium leading-relaxed md:text-2xl">
                "{visiData}"
              </blockquote>
            </div>
          </section>

          {/* Misi Section */}
          <section className="bg-white shadow-xl rounded-3xl">
            <div className="p-8 md:p-12">
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  MISI
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                  Langkah-langkah strategis untuk mewujudkan visi Desa Belung
                </p>
              </div>

              <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
                {misiData.map((misi, index) => (
                  <div 
                    key={misi.id} 
                    className={`group ${
                      misiData.length % 2 !== 0 && index === misiData.length - 1 
                        ? 'md:col-span-2 md:max-w-2xl md:mx-auto' 
                        : ''
                    }`}
                  >
                    <div className="h-full p-8 transition-shadow duration-300 border-l-4 border-green-500 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl hover:shadow-lg">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="flex items-center justify-center w-12 h-12 text-xl font-bold text-white bg-green-600 rounded-full">
                            {misi.nomor || misi.id}
                          </div>
                        </div>
                        <p className="flex-1 pt-2 text-lg leading-relaxed text-gray-800">
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
            <div className="p-8 md:p-12">
              <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                  Geografis Desa
                </h2>
                <p className="max-w-2xl mx-auto text-lg text-gray-600">
                  Informasi lengkap tentang letak dan batas wilayah Desa Belung
                </p>
              </div>

              <div className="w-full">
                {/* Batas Wilayah */}
                <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
                {/* Batas Utara */}
                <div className="p-8 text-center transition-transform duration-300 border-t-4 border-blue-500 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl group">
                  <div className="mb-4">
                    <svg
                      className="w-10 h-10 mx-auto text-blue-600 transition-transform duration-300 transform group-hover:-translate-y-1"
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
                  <h4 className="mb-3 text-lg font-bold text-gray-900">Batas Utara</h4>
                  <p className="text-base font-medium text-gray-700">Desa Tulusbesar</p>
                </div>

                {/* Batas Selatan */}
                <div className="p-8 text-center transition-transform duration-300 border-t-4 border-green-500 bg-gradient-to-br from-green-50 to-green-100 rounded-xl group">
                  <div className="mb-4">
                    <svg
                      className="w-10 h-10 mx-auto text-green-600 transition-transform duration-300 transform group-hover:translate-y-1"
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
                  <h4 className="mb-3 text-lg font-bold text-gray-900">Batas Selatan</h4>
                  <p className="text-base font-medium text-gray-700">Desa Gunungrejo</p>
                </div>

                {/* Batas Barat */}
                <div className="p-8 text-center transition-transform duration-300 border-t-4 border-yellow-500 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl group">
                  <div className="mb-4">
                    <svg
                      className="w-10 h-10 mx-auto text-yellow-600 transition-transform duration-300 transform group-hover:-translate-x-1"
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
                  <h4 className="mb-3 text-lg font-bold text-gray-900">Batas Barat</h4>
                  <p className="text-base font-medium text-gray-700">Desa Pajaran</p>
                </div>

                {/* Batas Timur */}
                <div className="p-8 text-center transition-transform duration-300 border-t-4 border-purple-500 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl group">
                  <div className="mb-4">
                    <svg
                      className="w-10 h-10 mx-auto text-purple-600 transition-transform duration-300 transform group-hover:translate-x-1"
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
                  <h4 className="mb-3 text-lg font-bold text-gray-900">Batas Timur</h4>
                  <p className="text-base font-medium text-gray-700">Desa Gedogkulon</p>
                </div>
              </div>
                {/* Luas Desa */}
<div className="p-10 text-center transition-all duration-300 border-l-4 border-indigo-500 shadow-md bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl hover:shadow-xl hover:scale-105 hover:border-indigo-600">
  <div className="flex items-center justify-center gap-4 mb-4">
    <div className="transition-transform duration-300 transform group-hover:rotate-12">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-indigo-600 transition-colors duration-300 w-14 h-14 hover:text-indigo-700"
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

    <div className="text-left">
      <h4 className="text-xl font-semibold text-indigo-700">Luas Desa</h4>
      <p className="mt-1 text-4xl font-extrabold text-indigo-800">3050 Ha 610 m²</p>
    </div>
  </div>
  <p className="text-lg leading-relaxed text-gray-700">
    Total luas wilayah Desa Belung yang terdiri dari area pemukiman, pertanian, dan fasilitas umum.
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
