"use client";
import { useState } from 'react';
import PageTemplate from '../../../templates/PageTemplate';
import { PAGES } from '../../../lib/pages';

const beritaPerPage = {
  1: [
    {
      id: 1,
      title: 'Pelatihan Digitalisasi Desa',
      date: '5 July 2025',
      views: 120,
      image: '/berita1.svg',
      excerpt: 'Pelatihan teknologi digital untuk perangkat Desa Belung telah dilaksanakan dengan sukses...',
    },
    {
      id: 2,
      title: 'Pembersihan Sungai',
      date: '6 July 2025',
      views: 90,
      image: '/berita1.svg',
      excerpt: 'Kegiatan bersih-bersih sungai dilakukan warga dan mahasiswa MMD bersama-sama...',
    },
    {
      id: 3,
      title: 'Sosialisasi Kesehatan',
      date: '7 July 2025',
      views: 150,
      image: '/berita1.svg',
      excerpt: 'Mahasiswa MMD menggelar sosialisasi pola hidup sehat bagi masyarakat desa...',
    },
    {
      id: 4,
      title: 'Workshop Ekonomi Digital',
      date: '7 July 2025',
      views: 88,
      image: '/berita1.svg',
      excerpt: 'Pelatihan marketplace dan pembayaran digital oleh mahasiswa MMD untuk pelaku UMKM...',
    },
    {
      id: 5,
      title: 'Gotong Royong Bersama',
      date: '8 July 2025',
      views: 140,
      image: '/berita1.svg',
      excerpt: 'Seluruh warga bergotong royong membersihkan lapangan sepak bola desa...',
    },
    {
      id: 6,
      title: 'Pembuatan Peta Digital Desa',
      date: '9 July 2025',
      views: 160,
      image: '/berita1.svg',
      excerpt: 'Mahasiswa MMD memetakan titik lokasi penting menggunakan drone dan GPS...',
    },
  ],
  2: [
    {
      id: 7,
      title: 'Kampanye Lingkungan',
      date: '10 July 2025',
      views: 111,
      image: '/berita1.svg',
      excerpt: 'Edukasi warga tentang pentingnya daur ulang dan pengurangan sampah plastik...',
    },
    {
      id: 8,
      title: 'Bazar Produk Lokal',
      date: '11 July 2025',
      views: 97,
      image: '/berita1.svg',
      excerpt: 'Produk lokal dari warga Desa Belung dipasarkan dalam event bazar kreatif...',
    },
    {
      id: 9,
      title: 'Pelatihan Literasi Digital',
      date: '12 July 2025',
      views: 85,
      image: '/berita1.svg',
      excerpt: 'Anak-anak sekolah dasar mendapatkan pelatihan tentang keamanan berinternet...',
    },
    {
      id: 10,
      title: 'Pembuatan Bank Sampah',
      date: '13 July 2025',
      views: 134,
      image: '/berita1.svg',
      excerpt: 'Bank sampah sebagai solusi pengelolaan sampah rumah tangga secara ekonomi...',
    },
    {
      id: 11,
      title: 'Kegiatan Karang Taruna',
      date: '14 July 2025',
      views: 104,
      image: '/berita1.svg',
      excerpt: 'Remaja desa melakukan kegiatan sosial dan penyuluhan remaja bebas narkoba...',
    },
    {
      id: 12,
      title: 'Pelatihan Jurnalistik',
      date: '15 July 2025',
      views: 101,
      image: '/berita1.svg',
      excerpt: 'Pelatihan menulis berita dan membuat video dokumenter bagi warga dan pelajar...',
    },
  ],
  3: [
    {
      id: 13,
      title: 'A',
      date: '10 July 2025',
      views: 111,
      image: '/berita1.svg',
      excerpt: 'Edukasi warga tentang pentingnya daur ulang dan pengurangan sampah plastik...',
    },
    {
      id: 14,
      title: 'B',
      date: '11 July 2025',
      views: 97,
      image: '/berita1.svg',
      excerpt: 'Produk lokal dari warga Desa Belung dipasarkan dalam event bazar kreatif...',
    },
    {
      id: 15,
      title: 'C',
      date: '12 July 2025',
      views: 85,
      image: '/berita1.svg',
      excerpt: 'Anak-anak sekolah dasar mendapatkan pelatihan tentang keamanan berinternet...',
    },
    {
      id: 16,
      title: 'D',
      date: '13 July 2025',
      views: 134,
      image: '/berita1.svg',
      excerpt: 'Bank sampah sebagai solusi pengelolaan sampah rumah tangga secara ekonomi...',
    },
    {
      id: 17,
      title: 'E',
      date: '14 July 2025',
      views: 104,
      image: '/berita1.svg',
      excerpt: 'Remaja desa melakukan kegiatan sosial dan penyuluhan remaja bebas narkoba...',
    },
    {
      id: 18,
      title: 'F',
      date: '15 July 2025',
      views: 101,
      image: '/berita1.svg',
      excerpt: 'Pelatihan menulis berita dan membuat video dokumenter bagi warga dan pelajar...',
    },
  ],
  // Tambahkan halaman ke-4, dst jika mau
};

export default function BeritaPage() {
  const pageConfig = PAGES.HOMEBERITA;

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <PageTemplate>
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-2">Berita Belung</h1>
          <p className="text-gray-600 mb-8 max-w-full">
            Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel jurnalistik dari Desa Belung 
          </p>

          {/* Grid Berita */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(beritaPerPage[currentPage] || []).map((berita) => (
            <div
                key={berita.id}
                className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:shadow-xl hover:-translate-y-1 hover:cursor-pointer active:scale-95"
              >
              <div className="w-full h-48 overflow-hidden">
                <img src={berita.image} alt={berita.title} className="w-full h-full object-cover" />
              </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-md font-bold text-gray-800">{berita.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-3">{berita.excerpt}</p>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <img src="/banyakdilihat.svg" alt="Views" className="w-4 h-4" />
                      <span>Dilihat {berita.views} kali</span>
                    </div>
                    <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                      {berita.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            {/* Prev */}
            <button
              onClick={() => handlePageClick(currentPage - 1)}
              disabled={currentPage === 1}
              className={`w-9 h-9 rounded border text-sm ${
                currentPage === 1
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-black hover:bg-green-600 hover:text-white transition'
              }`}
            >
              &lt;
            </button>

            {/* Pages */}
            {[1, 2, 3, 4, 5].map((page) => (
              <button
              key={page}
              onClick={() => handlePageClick(page)}
              className={`w-9 h-9 rounded border text-sm font-medium transition-all duration-200 ease-in-out transform
                ${currentPage === page
                  ? 'border-green-600 text-black bg-green-100 scale-105 ring-2 ring-green-300'
                  : 'border-gray-300 text-black hover:bg-green-600 hover:text-white hover:scale-105 active:scale-95 cursor-pointer'}
              `}
            >
              {page}
            </button>
            ))}
 
            <span className="text-gray-400">...</span>

            {/* Last Page */}
            <button
              onClick={() => handlePageClick(totalPages)}
              className={`w-9 h-9 rounded border text-sm ${
                currentPage === totalPages
                  ? 'border-green-600 font-bold text-black'
                  : 'border-gray-300 text-black hover:bg-green-600 hover:text-white transition'
              }`}
            >
              {totalPages}
            </button>

            {/* Next */}
            <button
              onClick={() => handlePageClick(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`w-9 h-9 rounded border text-sm ${
                currentPage === totalPages
                  ? 'border-gray-200 text-gray-300 cursor-not-allowed'
                  : 'border-gray-300 text-black hover:bg-green-600 hover:text-white transition'
              }`}
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
