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
        name: "Pertanian dan Perkebunan",
        detail:
          "Sektor pertanian dan perkebunan menjadi potensi utama desa, dengan hasil utama berupa kubis, jagung, cabai, kol, dan sawi. ",
      },
      {
        name: "Peternakan",
        detail:
          "Sektor peternakan berkembang dalam pemeliharaan sapi, kambing, dan domba yang dikelola secara mandiri oleh masyarakat lokal..",
      },
      {
        name: "Sumber Mata Air",
        detail:
          "Mata air yang terus mengalir yang dimanfaatkan oleh warga setempat",
      },
    ],
  },
  {
    title: "Sumber Daya Manusia",
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
          d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z"
        />
      </svg>
    ),
    color: "cyan",
    description:
      "Masyarakat desa yang aktif, produktif, dan terlibat dalam berbagai kegiatan pembangunan serta pengembangan potensi lokal.",
    items: [
      {
        name: "Karang Taruna",
        detail:
          "Pemuda desa aktif dalam kegiatan sosial, pendidikan, dan pengembangan kewirausahaan.",
      },
      {
        name: "Kelompok Tani",
        detail:
          "Kelompok tani aktif dalam mengelola pertanian, meningkatkan hasil panen, serta berbagi praktik pertanian modern melalui pelatihan dan pendampingan.",
      },
      {
        name: "Kelompok Ternak",
        detail:
          "Terdiri dari peternak lokal yang memelihara sapi, kambing, dan domba dengan sistem kolaboratif untuk peningkatan produksi dan pemasaran.",
      },
      {
        name: "Jamaah Sholawat",
        detail:
          "Komunitas keagamaan yang rutin mengadakan kegiatan spiritual seperti pembacaan sholawat dan pengajian, memperkuat nilai religius dan sosial masyarakat.",
      },
      {
        name: "Kelompok Pengolahan Air",
        detail:
          "Kelompok yang mengelola sumber air bersih desa, bertanggung jawab atas pemeliharaan sistem distribusi dan edukasi konservasi air.",
      },
    ],
  },
  {
    title: "Budaya Lokal",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-yellow-700"
      >
        <path d="M10 11h.01" />
        <path d="M14 6h.01" />
        <path d="M18 6h.01" />
        <path d="M6.5 13.1h.01" />
        <path d="M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3" />
        <path d="M17.4 9.9c-.8.8-2 .8-2.8 0" />
        <path d="M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7" />
        <path d="M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4" />
      </svg>
    ),
    color: "red",
    description:
      "Pelestarian nilai-nilai budaya lokal seperti tradisi, kesenian, dan kearifan lokal yang menjadi identitas desa.",
    items: [
      {
        name: "Bantengan",
        detail:
          "Bantengan merupakan seni tradisional yang melibatkan tarian khas dengan topeng banteng, menjadi simbol keberanian dan kekuatan masyarakat desa.",
      },
      {
        name: "Kuda Lumping",
        detail:
          "Kuda Lumping menampilkan tarian dengan iringan gamelan dan gerakan dinamis, mencerminkan nilai magis dan semangat kolektif warga desa.",
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
      "Pemandangan yang indah dengan udara sejuk memberikan spot foto yang menarik.",
    items: [
      {
        name: "Taman Sayur Belung",
        detail:
          "Menyajikan pemandangan hijau dengan berbagai jenis sayuran segar yang dibudidayakan langsung oleh warga setempat ",
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
      "UMKM dan industri rumahan yang mengolah produk bernilai tambah.",
    items: [
      {
        name: "Makanan Olahan",
        detail:
          "Opak, keripik usus, serta hasil kolaborasi dengan mitra lokal dalam pengembangan usaha olahan pertanian.",
      },
      {
        name: "Produk Pertanian",
        detail: "Produk unggulan desa antara lain Nasi Gerit dari jagung",
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
    red: {
      bg: "bg-red-100",
      text: "text-red-600",
      hover: "hover:bg-red-50",
      border: "border-red-200",
    },
  };
  return colors[color];
};
