const BeritaBaru = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Berita Terbaru
      </h2>

      {[1, 2, 3, 4].map((_, idx) => (
        <div key={idx} className="flex gap-3 mb-4">
          <img
            src="Berita/k39.svg"
            alt="thumb"
            className="w-16 h-16 object-cover rounded-md"
          />
          <div className="flex flex-col gap-1.5 ">
            <h3 className="text-sm font-medium text-gray-800">
              MMD Filkom UB di Desa Belung
            </h3>
            <p className="text-xs text-gray-500">🗓 5 Juli 2025</p>
            <p className="text-xs text-gray-500">👁 Dilihat 100 kali</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BeritaBaru;
