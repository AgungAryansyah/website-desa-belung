"use client";
import { useState } from "react";
import Image from "next/image";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-green-600 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-25">
            {/* Logo and Info */}
            <div className="lg:col-span-1">
              <div className="flex items-start space-x-4 mb-6">
                <Image
                  className="w-24 h-24 flex-shrink-0"
                  src="/MainFooter/Logo.svg"
                  alt="Logo Desa Belung"
                  width={96}
                  height={96}
                />
                <div>
                  <h3 className="text-xl font-bold mb-1">
                    Pemerintah Desa Belung
                  </h3>
                  <p className="text-sm opacity-90">
                    Jl. Raya Belung, No. 51 65157
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
                  <span>pemdesbelung@gmail.com</span>
                </div>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 items-center">
                  <a
                    href="https://www.instagram.com/pemerintahdesabelung?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:opacity-80"
                  >
                    <Image
                      src="/MainFooter/Insta.svg"
                      alt="Instagram"
                      className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
                      width={28}
                      height={28}
                    />
                  </a>
                  <a
                    href="https://www.youtube.com/@pemdesbelung4396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition hover:opacity-80"
                  >
                    <Image
                      src="/MainFooter/Yt.svg"
                      alt="YouTube"
                      className="w-7 h-7 sm:w-6 sm:h-6 object-contain"
                      width={28}
                      height={28}
                    />
                  </a>
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
              </div>
            </div>

            {/* Explore */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Jelajahi</h4>
              <div className="space-y-3 underline">
                <a href="https://belungmarketcenter.id">
                  Website Jual Beli Sayur
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout with Accordion */}
        <div className="lg:hidden">
          {/* Logo and Village Info - Always visible on mobile */}
          <div className="flex items-start space-x-4 mb-6">
            <Image
              className="w-16 h-16 flex-shrink-0"
              src="/MainFooter/Logo.svg"
              alt="Logo Desa Belung"
              width={64}
              height={64}
            />
            <div>
              <h3 className="text-lg font-bold mb-1">Desa Belung</h3>
              <p className="text-sm opacity-90">
                Jl. Raya Belung, No. 51 65157
              </p>
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="space-y-2">
            {/* Kontak Desa */}
            <div className="border-b border-green-500">
              <button
                onClick={() => toggleSection("contact")}
                className="w-full flex items-center justify-between py-3 text-left"
              >
                <div className="flex items-center space-x-3">
                  <span>📞</span>
                  <span className="font-medium">Hubungi Kami</span>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openSection === "contact" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openSection === "contact" && (
                <div className="pb-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <span>📧</span>
                    <span>pemdesbelung@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>🕒</span>
                    <div>
                      <p className="text-sm">Senin - Kamis (08.00 - 15.00) &</p>
                      <p className="text-sm">Jum&apos;at (08.00 - 11.00)</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span>🏠</span>
                    <span className="text-sm">
                      Jl. Raya Belung No. 51, Desa Belung
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* Media Sosial */}
            <div className="border-b border-green-500">
              <button
                onClick={() => toggleSection("social")}
                className="w-full flex items-center justify-between py-3 text-left"
              >
                <div className="flex items-center space-x-3">
                  <span>👥</span>
                  <span className="font-medium">Media Sosial</span>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openSection === "social" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openSection === "social" && (
                <div className="pb-4">
                  <div className="flex gap-4 items-center">
                    <a
                      href="https://www.instagram.com/belung.punyacerita?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:opacity-80"
                    >
                      <Image
                        src="/MainFooter/Insta.svg"
                        alt="Instagram"
                        className="w-8 h-8 object-contain"
                        width={32}
                        height={32}
                      />
                    </a>
                    <a
                      href="https://www.youtube.com/@pemdesbelung4396"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition hover:opacity-80"
                    >
                      <Image
                        src="/MainFooter/Yt.svg"
                        alt="YouTube"
                        className="w-8 h-8 object-contain"
                        width={32}
                        height={32}
                      />
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Nomor Telepon Penting */}
            <div className="border-b border-green-500">
              <button
                onClick={() => toggleSection("emergency")}
                className="w-full flex items-center justify-between py-3 text-left"
              >
                <div className="flex items-center space-x-3">
                  <span>👥</span>
                  <span className="font-medium">Nomor Telepon Penting</span>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openSection === "emergency" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openSection === "emergency" && (
                <div className="pb-4 space-y-3">
                  <div className="flex items-center space-x-3">
                    <span>🚨</span>
                    <div>
                      <p className="font-medium">Ambulance</p>
                      <p className="text-sm opacity-90">08585062950</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Jelajahi */}
            <div className="border-b border-green-500">
              <button
                onClick={() => toggleSection("explore")}
                className="w-full flex items-center justify-between py-3 text-left"
              >
                <div className="flex items-center space-x-3">
                  <span>🔗</span>
                  <span className="font-medium">Jelajahi</span>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openSection === "explore" ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openSection === "explore" && (
                <div className="pb-4 space-y-2 underline">
                  <p className="text-sm opacity-90">
                    •{" "}
                    <a href="https://belungmarketcenter.id">
                      Website Jual Beli Sayur
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Copyright */}
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
