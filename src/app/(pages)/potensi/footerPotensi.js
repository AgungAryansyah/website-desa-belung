"use client";
import React from "react";

const FooterPotensi = () => {
  return (
    <div className="container mx-auto px-6 pb-16">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-12 text-center text-white">
        {/* Users Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-16 h-16 mx-auto mb-6 opacity-80"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9.75L12 4l9 5.75V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z"
          />
        </svg>

        <h2 className="text-3xl font-bold mb-4">
          Mari Bergabung Membangun Desa Belung
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          Dengan potensi yang melimpah, mari bersama-sama mengembangkan Desa
          Belung menjadi desa mandiri dan sejahtera untuk generasi mendatang.
        </p>
      </div>
    </div>
  );
};

export default FooterPotensi;
