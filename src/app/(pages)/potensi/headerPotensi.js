"use client";
import React from "react";

const HeaderPotensi = () => {
  return (
    <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="container mx-auto px-6 text-center relative">
        <div className="flex items-center justify-center mb-4">
          {/* MapPin Icon */}
          <svg
            className="w-6 h-6 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="text-green-200">Kabupaten Malang, Jawa Timur</span>
        </div>
        <h1 className="text-5xl font-bold mb-6">Potensi Desa Belung</h1>
        <p className="text-xl max-w-3xl mx-auto leading-relaxed">
          Desa Belung memiliki kekayaan alam, budaya, dan sumber daya manusia
          yang menjadi kekuatan dalam membangun masa depan yang mandiri dan
          berkelanjutan.
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"></div>
    </div>
  );
};
export default HeaderPotensi;
