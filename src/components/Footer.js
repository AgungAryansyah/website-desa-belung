import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-25">
          {/* Logo and Info */}
          <div className="lg:col-span-1">
            <div className="flex items-start space-x-4 mb-6">
              <img
                className="w-24 h-24 flex-shrink-0"
                src="MainFooter/Logo.svg"
                alt="Logo Desa Belung"
              />
              <div>
                <h3 className="text-xl font-bold mb-1">
                  Pemerintah Desa Belung
                </h3>
                <p className="text-sm opacity-90">
                  Jaya Giri Belung, RT.01 Desa Belung, Kecamatan Karangasem,
                  Kabupaten Silirang, 80851
                </p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span>📧</span>
                <span>pemdesabelung@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📞</span>
                <span>0812-1234-5678</span>
              </div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center">
                <a
                  href="https://www.facebook.com/profile.php?id=100069073334964"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:opacity-80"
                >
                  <img
                    src="/MainFooter/Fb.svg"
                    alt="Facebook"
                    className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
                  />
                </a>

                <a
                  href="https://www.instagram.com/belung.punyacerita?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:opacity-80"
                >
                  <img
                    src="/MainFooter/Insta.svg"
                    alt="Instagram"
                    className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
                  />
                </a>

                <a
                  href="https://www.tiktok.com/@desabelung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:opacity-80"
                >
                  <img
                    src="/MainFooter/Tiktok.svg"
                    alt="TikTok"
                    className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
                  />
                </a>

                <a
                  href="https://www.youtube.com/@pemdesbelung4396"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:opacity-80"
                >
                  <img
                    src="/MainFooter/Yt.svg"
                    alt="YouTube"
                    className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
                  />
                </a>

                {/* Tambahkan ikon lain jika perlu */}
              </div>
            </div>
          </div>

          {/* Important Numbers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">
              Nomor Telepon Penting
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span>🚨</span>
                <div>
                  <p className="font-medium">Ambulance</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <img src="MainFooter/person.svg"></img>
                <div>
                  <p className="text-sm opacity-90">Kepala Desa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Jelajahi</h4>
            <div className="space-y-3">
              <p className="text-sm opacity-90">Website Jual Beli Sayur Desa</p>
            </div>
          </div>
        </div>

        <div className="border-t border-green-500 mt-8 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2025 Desa Belung. Semua hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;