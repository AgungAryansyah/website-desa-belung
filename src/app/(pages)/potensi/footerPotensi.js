const FooterPotensi = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center text-sm text-gray-500 border-t pt-4 sm:pt-6 mt-6 sm:mt-8 gap-4 sm:gap-6">
      <div className="mb-2 sm:mb-0">Bagikan :</div>{" "}
      {/* Tambah margin bawah untuk mode kolom */}
      <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center">
        <a href="#" className="transition hover:opacity-80">
          <img
            src="Berita/whatsApp.svg"
            alt="WhatsApp"
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </a>

        <a href="#" className="transition hover:opacity-80">
          <img
            src="Berita/Facebook.svg"
            alt="Facebook"
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </a>

        <a href="#" className="transition hover:opacity-80">
          <img
            src="Berita/Instagram.svg"
            alt="Instagram"
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </a>
        <a href="#" className="transition hover:opacity-80">
          <img
            src="Berita/Tiktok.svg"
            alt="Tiktok"
            className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
          />
        </a>
        {/* Tambahkan ikon lain jika perlu */}
      </div>
    </div>
  );
};

export default FooterPotensi;
