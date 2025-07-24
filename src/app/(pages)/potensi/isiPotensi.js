"use client";
import React from "react";

export const potensiData = [
  {
    title: "Sumber Daya Alam",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
    color: "green",
    description:
      "Lahan sawah yang subur dengan hasil padi berkualitas tinggi dan sayuran segar untuk kebutuhan pasar lokal.",
    items: [
      {
        name: "Pertanian ",
        detail: "Produktivitas 6 ton/ha dengan sistem irigasi modern",
      },
      {
        name: "Perkebunan",
        detail: "Cabai, tomat, mentimun untuk pasar Kabupaten Malang",
      },
      {
        name: "Tanah Subur",
        detail: "Tanah vulkanis kaya mineral untuk pertanian",
      },
    ],
  },
  {
    title: "Wisata Alam",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2-2V9z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    color: "blue",
    description:
      "Pemandangan pegunungan yang indah dengan udara sejuk dan spot foto menarik untuk wisata keluarga.",
    items: [
      {
        name: "Agrowisata",
        detail: "Konsep farm to table dengan edukasi pertanian",
      },
      {
        name: "Budaya Lokal",
        detail: "Seni tradisional dan kuliner khas desa",
      },
    ],
  },
  {
    title: "Ekonomi Kreatif",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    color: "purple",
    description:
      "UMKM dan industri rumahan yang mengolah hasil pertanian menjadi produk bernilai tambah.",
    items: [
      {
        name: "Makanan Olahan",
        detail: "Keripik, dodol, dan sirup dari hasil panen lokal",
      },
      {
        name: "Produk Pertanian",
        detail: "Kemasan premium untuk hasil pertanian",
      },
    ],
  },
];

export const getColorClasses = (color) => {
  const colors = {
    green: {
      bg: "bg-green-100",
      text: "text-green-600",
      hover: "hover:bg-green-50",
      border: "border-green-200",
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-600",
      hover: "hover:bg-blue-50",
      border: "border-blue-200",
    },
    purple: {
      bg: "bg-purple-100",
      text: "text-purple-600",
      hover: "hover:bg-purple-50",
      border: "border-purple-200",
    },
    cyan: {
      bg: "bg-cyan-100",
      text: "text-cyan-600",
      hover: "hover:bg-cyan-50",
      border: "border-cyan-200",
    },
  };
  return colors[color];
};
