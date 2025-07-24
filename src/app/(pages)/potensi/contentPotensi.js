"use client";
import React, { useState } from "react";
import { potensiData, getColorClasses } from "./isiPotensi";

const ContentPotensi = () => {
  const [selectedPotensi, setSelectedPotensi] = useState(null);

  const PotensiCard = ({ potensi, index, isSelected, onSelect }) => {
    const colors = getColorClasses(potensi.color);

    return (
      <div
        className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer w-full max-w-5xl mx-auto min-h-[180px]"
        onClick={() => onSelect(isSelected ? null : index)}
      >
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div
              className={`${colors.bg} p-3 rounded-full ${colors.text} mr-4 group-hover:scale-110 transition-transform`}
            >
              {potensi.icon}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                {potensi.title}
              </h3>
            </div>
            {/* ChevronRight Icon */}
            <svg
              className={`w-5 h-5 text-gray-400 transform transition-transform ${
                isSelected ? "rotate-90" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>

          <p className="text-gray-600 mb-4 leading-relaxed">
            {potensi.description}
          </p>

          {/* Collapsed/Expanded Content */}
          <div
            className={`space-y-3 transition-[max-height] duration-500 ease-in-out ${
              isSelected
                ? "max-h-[1000px] opacity-100"
                : "max-h-0 overflow-hidden"
            }`}
          >
            {potensi.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={`${colors.border} border-l-4 pl-4 py-2 ${colors.hover} transition-colors`}
              >
                <div className="font-semibold text-gray-800">{item.name}</div>
                <div className="text-sm text-gray-600 mt-1">{item.detail}</div>
              </div>
            ))}
          </div>

          {!isSelected && (
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-500">
                Klik untuk melihat detail
              </span>
            </div>
          )}
        </div>
      </div>
    );
  };

  const QuickStats = () => {
    const stats = [
      { value: "1383 Ha 577 m²", label: "Lahan Pertanian" },
      { value: "6.470", label: "Jumlah Penduduk" },
      { value: "1221 Ha 473 m²", label: "Lahan Perkebunan" },
    ];

    return (
      <div className="py-12 bg-white shadow-sm">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="group">
                <div className="text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <QuickStats />

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Ragam Potensi Unggulan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Empat sektor utama yang menjadi kekuatan Desa Belung dalam membangun
            perekonomian dan kesejahteraan masyarakat
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {potensiData.map((potensi, index) => (
            <PotensiCard
              key={index}
              potensi={potensi}
              index={index}
              isSelected={selectedPotensi === index}
              onSelect={setSelectedPotensi}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ContentPotensi;
