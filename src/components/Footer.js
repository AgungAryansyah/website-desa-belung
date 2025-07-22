import Image from "next/image";
const Footer = () => {
  return (
    <footer className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-25">
          {/* Logo and Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-21 h-21 rounded-full flex items-center justify-center">
                <Image
                  src="/Logo-Belung-1.svg" // Ganti dengan path logomu
                  alt="Logo Desa Belung"
                  width={300}
                  height={260}
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold">Kantor Desa Belung</h3>
                <p className="text-sm opacity-90">
                  Jalan Raya Belung No. 01 Desa Belung, Kecamatan Poncokusumo,
                  Kabupaten Malang, Provinsi Jawa Timur, 65157
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
                  <p className="text-sm opacity-90">Kepala Desa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Jelajahi</h4>
            <div className="space-y-3">
              <p className="text-sm opacity-90">
                Website Juga Beli Sayur Belanja Desa
              </p>
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
