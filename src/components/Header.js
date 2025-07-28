"use client";
import Image from "next/image";
import { getNavigationItems } from "../lib/pages";
import { useState, useEffect } from "react";

const Header = () => {
  const navigationItems = getNavigationItems();
  const [activeItem, setActiveItem] = useState(null);
  const [currentPath, setCurrentPath] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Simulasi untuk mendapatkan path saat ini
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleNavClick = (item, event) => {
    event.preventDefault();
    setActiveItem(item.id);
    setIsMenuOpen(false); // Close mobile menu on click

    // Simulasi navigasi (ganti dengan router yang Anda gunakan)
    setTimeout(() => {
      window.location.href = item.path;
    }, 300);
  };

  const isActive = (item) => {
    return currentPath === item.path || activeItem === item.id;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bg-green-600 text-white fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-[11.5px] lg:py-4">
            {/* Logo and Title */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 bg-transparent rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-110">
                <Image
                  className="w-auto h-auto"
                  src="/MainFooter/Logo.svg"
                  alt="Logo Desa Belung"
                  width={48}
                  height={48}
                  priority
                />
              </div>
              <div>
                <h1 className="text-xl font-bold transition-all duration-300 hover:text-green-100">
                  Desa Belung
                </h1>
                <p className="text-sm opacity-90 transition-opacity duration-300 hover:opacity-100">
                  Kabupaten Malang
                </p>
              </div>
            </div>

            {/* Desktop Navigation Menu */}
            <nav className="hidden md:flex space-x-8 mr-4">
              {navigationItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => handleNavClick(item, e)}
                  className={`
                    relative transition-all duration-300 ease-out
                    hover:text-green-100
                    ${
                      isActive(item)
                        ? "text-green-100 font-semibold"
                        : "text-white hover:text-green-100"
                    }
                  `}
                >
                  {item.title}

                  {/* Underline animation untuk halaman aktif */}
                  <span
                    className={`
                      absolute bottom-0 left-0 w-full h-0.5 bg-green-100 
                      transform transition-transform duration-300 origin-left
                      ${
                        isActive(item)
                          ? "scale-x-100"
                          : "scale-x-0 hover:scale-x-100"
                      }
                    `}
                  />
                </a>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden transition-all duration-300 hover:scale-110 p-2 rounded-md hover:bg-green-500"
            >
              <svg
                className="w-6 h-6 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={3}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Loading bar untuk transisi halaman */}
          {activeItem && (
            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500">
              <div
                className="h-full bg-green-100 transition-all duration-300"
                style={{
                  width: "100%",
                  animation: "loadingBar 0.3s ease-out forwards",
                }}
              />
            </div>
          )}
        </div>
      </header>

      {/* Mobile Menu Overlay - Z-index lebih tinggi */}
      {isMenuOpen && isMobile && (
        <div
          className="fixed inset-0 bg-black/50 z-60" // Ubah dari z-40 ke z-60
          onClick={handleMenuClose}
          style={{ top: "88px" }} // Start below the fixed header
        />
      )}

      {/* Mobile Menu - Z-index paling tinggi */}
      <div
        className={`
  fixed right-0 w-80 bg-white z-70 transform transition-transform duration-300 ease-in-out  // Ubah dari z-45 ke z-70
  ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
  md:hidden
  `}
        style={{
          top: "88px", // Start below the fixed header
          height: "calc(100vh - 88px)", // Height from below header to bottom of screen
        }}
      >
        {/* Mobile Menu Items - Direct without header */}
        <nav className="py-6">
          {navigationItems.map((item, index) => (
            <a
              key={item.id}
              href={item.path}
              onClick={(e) => handleNavClick(item, e)}
              className={`
                block px-6 py-4 text-green-600 font-medium border-b border-gray-100
                transition-all duration-200 hover:bg-green-50 hover:pl-8
                ${
                  isActive(item)
                    ? "bg-green-50 border-l-4 border-l-green-600 font-semibold"
                    : ""
                }
              `}
              style={{
                animationDelay: `${index * 50}ms`,
                animation: isMenuOpen
                  ? "slideInLeft 0.3s ease-out forwards"
                  : "none",
              }}
            >
              {item.title}
            </a>
          ))}
        </nav>
      </div>

      <style jsx>{`
        @keyframes loadingBar {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .nav-link {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </>
  );
};

export default Header;
