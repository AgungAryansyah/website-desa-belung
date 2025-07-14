const Footer = () => {
  return (
    <footer className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                <div className="w-10 h-10 bg-gray-300 rounded"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Pemerintah Desa Belung</h3>
                <p className="text-sm opacity-90">Jaya Giri Belung, RT.01 Desa Belung, Kecamatan Karangasem, Kabupaten Silirang, 80851</p>
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
                <span>0812-xxxx-xxxx</span>
              </div>
            </div>
          </div>

          {/* Important Numbers */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Nomor Telepon Penting</h4>
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
            <h4 className="text-lg font-semibold mb-4">Jejak[ah]</h4>
            <div className="space-y-3">
              <p className="text-sm opacity-90">Website Juga Beli Sayur Belanja Desa</p>
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
