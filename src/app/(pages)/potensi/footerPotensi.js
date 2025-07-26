const FooterPotensi = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-4 mt-6 text-sm text-gray-500 border-t sm:flex-row sm:pt-6 sm:mt-8 sm:gap-6">
      <div className="mb-2 sm:mb-0">Bagikan :</div>{" "}
      {/* Tambah margin bawah untuk mode kolom */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
        <a href="#" className="transition hover:opacity-80">
          <img
            src="Berita/whatsApp.svg"
            alt="WhatsApp"
            className="object-contain w-7 h-7 sm:w-6 sm:h-6"
          />
        </a>

        <a href="#" className="transition hover:opacity-80">
          <img
            src="Berita/Facebook.svg"
            alt="Facebook"
            className="object-contain w-7 h-7 sm:w-6 sm:h-6"
          />
        </a>

        <a href="#" className="transition hover:opacity-80">
          <img
            src="Berita/Instagram.svg"
            alt="Instagram"
            className="object-contain w-7 h-7 sm:w-6 sm:h-6"
          />
        </a>
        <a href="#" className="transition hover:opacity-80">
          <img
            src="Berita/Tiktok.svg"
            alt="Tiktok"
            className="object-contain w-7 h-7 sm:w-6 sm:h-6"
          />
        </a>
        {/* Tambahkan ikon lain jika perlu */}
      </div>
    </div>
  );
};

export default FooterPotensi;
