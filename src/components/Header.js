"use client";
import Image from 'next/image';
import { getNavigationItems } from "../lib/pages";
import { useState, useEffect } from "react";

const Header = () => {
  const navigationItems = getNavigationItems();
  const [activeItem, setActiveItem] = useState(null);
  const [currentPath, setCurrentPath] = useState("");

  // Simulasi untuk mendapatkan path saat ini
  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const handleNavClick = (item, event) => {
    event.preventDefault();
    setActiveItem(item.id);

    // Simulasi navigasi (ganti dengan router yang Anda gunakan)
    setTimeout(() => {
      window.location.href = item.path;
    }, 300);
  };

  const isActive = (item) => {
    return currentPath === item.path || activeItem === item.id;
  };

  return (
    <header className="bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo and Title */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-transparent rounded-lg flex items-center justify-center">
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
              <h1 className="text-xl font-bold transition-all duration-300 hover:text-green-200">
                Desa Belung
              </h1>
              <p className="text-sm opacity-90 transition-opacity duration-300 hover:opacity-100">
                Kabupaten Malang
              </p>
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-8 mr-4">
            {navigationItems.map((item) => (
              <a
                key={item.id}
                href={item.path}
                onClick={(e) => handleNavClick(item, e)}
                className={`
                  relative transition-all duration-300 ease-out
                  hover:text-green-200
                  ${
                    isActive(item)
                      ? "text-green-300 font-semibold"
                      : "text-white hover:text-green-300"
                  }
                `}
              >
                {item.title}

                {/* Underline animation untuk halaman aktif */}
                <span
                  className={`
                    absolute bottom-0 left-0 w-full h-0.5 bg-green-200 
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
          <button className="md:hidden transition-all duration-300 hover:scale-110 hover:rotate-90 p-2 rounded-md hover:bg-green-700/30">
            <svg
              className="w-6 h-6 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Loading bar untuk transisi halaman */}
        {activeItem && (
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-green-800/30">
            <div
              className="h-full bg-green-200 transition-all duration-300"
              style={{
                width: "100%",
                animation: "loadingBar 0.3s ease-out forwards",
              }}
            />
          </div>
        )}
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

        .nav-link {
          animation: fadeInUp 0.6s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Header;