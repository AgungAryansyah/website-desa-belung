'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import PageTemplate from '../../../templates/PageTemplate';
import { PAGES } from '../../../lib/pages';
import { getStructureGrouped } from '../../../lib/api';
import PropTypes from 'prop-types';

const PersonCard = ({ fotoUrl, posisi, nama }) => (
  <div className="bg-white border rounded-lg p-4 flex flex-col items-center shadow-md w-full max-w-[160px] min-h-[180px] mx-auto transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1">
    <div className="relative w-16 h-20 mb-2 bg-gray-200 rounded overflow-hidden">
      <Image
        src={fotoUrl || 'PPdefault.jpg'}
        alt={`Foto ${nama} - ${posisi}`}
        fill
        className="object-cover"
        unoptimized={true}
        onError={(e) => {
          e.currentTarget.src = 'PPdefault.jpg';
        }}
        sizes="64px"
      />
    </div>
    <div className="mb-1 text-sm font-semibold text-center text-black">{posisi}</div>
    <div className="text-xs text-center text-black">{nama}</div>
  </div>
);

PersonCard.propTypes = {
  fotoUrl: PropTypes.string.isRequired,
  posisi: PropTypes.string.isRequired,
  nama: PropTypes.string.isRequired,
};

// Move defaultData outside component to prevent recreation on every render
const DEFAULT_STRUCTURE_DATA = {
  'Perangkat Desa': [
    { id: 1, nama: 'Sudarman', posisi: 'Kepala Desa', fotoUrl: 'PPdefault.jpg' },
    { id: 2, nama: 'M.Farid Adriyanto', posisi: 'Sekretaris Desa', fotoUrl: 'PPdefault.jpg' },
    { id: 3, nama: 'Linda Febriana', posisi: 'Bendahara Desa', fotoUrl: 'PPdefault.jpg' },
    { id: 4, nama: 'Zaini', posisi: 'KASI UMUM', fotoUrl: 'PPdefault.jpg' },
    { id: 5, nama: "Haris Nasa'i", posisi: 'KASI Pemerintahan', fotoUrl: 'PPdefault.jpg' },
    { id: 6, nama: 'Edi Sampurno', posisi: 'KASI Kesejahteraan', fotoUrl: 'PPdefault.jpg' },
    { id: 7, nama: 'Luqman Anwar', posisi: 'KASI Perencanaan', fotoUrl: 'PPdefault.jpg' },
    { id: 8, nama: "Hafid Rifa'i", posisi: 'KASI Pelayanan', fotoUrl: 'PPdefault.jpg' }
  ],
  'Kepala Dusun': [
    { id: 9, nama: 'Shulhan Hadi Wijaya', posisi: 'KADUS Belung Krajan', fotoUrl: 'PPdefault.jpg' },
    { id: 10, nama: 'Totok Slamet Harwono', posisi: 'KADUS Belung Buntaran', fotoUrl: 'PPdefault.jpg' }
  ],
  'BUMDES': [
    { id: 11, nama: 'Ahmad Zaini', posisi: 'KEPALA BUMDES', fotoUrl: 'PPdefault.jpg' },
    { id: 12, nama: "Nasrul Ma'ali", posisi: 'Sekretaris', fotoUrl: 'PPdefault.jpg' },
    { id: 13, nama: 'Mashudi', posisi: 'Bendahara Desa', fotoUrl: 'PPdefault.jpg' },
    { id: 14, nama: 'Eko', posisi: 'ADMINISTRASI', fotoUrl: 'PPdefault.jpg' }
  ],
  'BPD': [
    { id: 15, nama: 'Imam Sayuti', posisi: 'Ketua', fotoUrl: 'PPdefault.jpg' },
    { id: 16, nama: 'Roni Widianto', posisi: 'Sekretaris', fotoUrl: 'PPdefault.jpg' },
    { id: 17, nama: 'Endah Lestari', posisi: 'Bendahara Desa', fotoUrl: 'PPdefault.jpg' },
    { id: 18, nama: 'Sofwan Hadi', posisi: 'Anggota', fotoUrl: 'PPdefault.jpg' },
    { id: 19, nama: 'Zainuri', posisi: 'Anggota', fotoUrl: 'MainFooter/person.jpg' },
    { id: 20, nama: 'Imron Mahmudi', posisi: 'Anggota', fotoUrl: 'PPdefault.jpg' },
    { id: 21, nama: 'Satune Gatau Lupa', posisi: 'Anggota', fotoUrl: 'MainFooter/person.jpg' }
  ]
};

export default function StrukturPage() {
  const pageConfig = PAGES.STRUKTUR;

  // State for data and loading
  const [structureData, setStructureData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch data from PocketBase
  useEffect(() => {
    async function fetchStructureData() {
      try {
        setLoading(true);
        
        const result = await getStructureGrouped();
        console.log('Fetched structure data:', result);
        
        if (result && Object.keys(result).length > 0) {
          setStructureData(result);
        } else {
          setStructureData(DEFAULT_STRUCTURE_DATA);
        }
        
      } catch (err) {
        console.error('Error fetching structure data:', err);
        setError(err.message);
        setStructureData(DEFAULT_STRUCTURE_DATA);
      } finally {
        setLoading(false);
      }
    }

    fetchStructureData();
  }, []); // Empty dependency array - only run once on mount

  // Helper functions to get specific positions
  const getPersonByPosition = (category, position) => {
    const categoryData = structureData[category] || [];
    return categoryData.find(person => person.posisi === position);
  };

  const getPersonsByCategory = (category, excludePositions = []) => {
    const categoryData = structureData[category] || [];
    return categoryData.filter(person => !excludePositions.includes(person.posisi));
  };

  return (
    <PageTemplate className="bg-slate-800">
      <div className="container px-4 py-10 mx-auto text-black">
        <h2 className="mb-10 text-3xl font-bold text-center">Struktur Organisasi Desa</h2>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          </div>
        )}

        {/* Error State */}
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            <p>Error loading structure data: {error}</p>
          </div>
        )}

        {/* Main Content - Show even when loading to prevent layout shift */}
        <div className={loading ? "opacity-50" : ""}>
          {/* Kepala Desa */}
          {getPersonByPosition('Perangkat Desa', 'Kepala Desa') && (
            <div className="flex justify-center mb-6">
              <PersonCard {...getPersonByPosition('Perangkat Desa', 'Kepala Desa')} />
            </div>
          )}

          {/* Sekdes & Bendahara */}
          <div className="flex justify-center gap-10 mb-6">
            {getPersonByPosition('Perangkat Desa', 'Sekretaris Desa') && (
              <PersonCard {...getPersonByPosition('Perangkat Desa', 'Sekretaris Desa')} />
            )}
            {getPersonByPosition('Perangkat Desa', 'Bendahara Desa') && (
              <PersonCard {...getPersonByPosition('Perangkat Desa', 'Bendahara Desa')} />
            )}
          </div>

          {/* Garis horizontal */}
          <div className="w-full my-6 border-t border-black" />

          {/* KAUR & KASI */}
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {getPersonsByCategory('Perangkat Desa', ['Kepala Desa', 'Sekretaris Desa', 'Bendahara Desa']).map((person) => (
              <PersonCard key={person.id} {...person} />
            ))}
          </div>

          {/* Garis horizontal */}
          <div className="w-full my-6 border-t border-black" />

          {/* Kadus */}
          <h3 className="mb-2 text-2xl font-bold text-center">Kepala Dusun</h3>
          <div className="flex flex-wrap justify-center gap-10 mb-6">
            {(structureData['Kepala Dusun'] || []).map((person) => (
              <PersonCard key={person.id} {...person} />
            ))}
          </div>

          {/* Garis horizontal */}
          <div className="w-full my-6 border-t border-black" />

          {/* BUMDES */}
          <h3 className="mb-2 text-2xl font-bold text-center">BUMDES</h3>
          <div className="flex flex-wrap justify-center gap-10 mb-6">
            {getPersonByPosition('BUMDES', 'Kepala') && (
              <PersonCard {...getPersonByPosition('BUMDES', 'Kepala')} />
            )}
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            {getPersonsByCategory('BUMDES', ['Kepala']).map((person) => (
              <PersonCard key={person.id} {...person} />
            ))}
          </div>

          {/* Garis horizontal */}
          <div className="w-full my-6 border-t border-black" />

          {/* BPD */}
          <h3 className="mb-2 text-2xl font-bold text-center">BPD</h3>
          <div className="flex flex-wrap justify-center gap-10 mb-6">
            {(structureData['BPD'] || []).filter(person => ['Ketua', 'Sekretaris', 'Bendahara'].includes(person.posisi)).map((person) => (
              <PersonCard key={person.id} {...person} />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-6">
            {(structureData['BPD'] || []).filter(person => person.posisi === 'Anggota').map((person) => (
              <PersonCard key={person.id} {...person} />
            ))}
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}