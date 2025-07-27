import Image from "next/image";

const HeaderBerita = ({ berita }) => {
  // Helper function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      {/* Home*/}
      <div className="text-sm text-gray-500 mb-2">
        <span className="inline-flex items-center gap-1">
          🏠 <span>/ Berita Desa Belung</span>
        </span>
      </div>

      {/* Judul & Info */}
      <h1 className="text-4xl font-bold text-gray-800">
        {berita?.title || "Loading..."}
      </h1>
      <div className="flex items-center text-sm text-gray-500 mt-1 mb-6 gap-4">
        <span>🗓 {berita?.created ? formatDate(berita.created) : "Loading..."}</span>
      </div>
    </>
  );
};

export default HeaderBerita;