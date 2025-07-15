const HeaderPotensi = ({ children }) => {
  return (
    <>
      {/* Home*/}
      <div className="text-sm text-gray-500 mb-2">
        <span className="inline-flex items-center gap-1">
          🏠 <span>/ Potensi Desa Belung</span>
        </span>
      </div>

      {/* Judul & Info */}
      <h1 className="text-4xl font-bold text-gray-800">
        MMD Filkom UB di Desa Belung
      </h1>
      <div className="flex items-center text-sm text-gray-500 mt-1 mb-4 gap-4">
        <span>🗓 5 Juli 2025</span>
        <span className="ml-auto">👁 Dilihat 100 kali</span>
      </div>
    </>
  );
};

export default HeaderPotensi;
