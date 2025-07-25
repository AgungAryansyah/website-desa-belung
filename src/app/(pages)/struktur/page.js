import React from 'react';
import PageTemplate from '../../../templates/PageTemplate';
import { PAGES } from '../../../lib/pages';
import PropTypes from 'prop-types';

// Komponen Card
const PersonCard = ({ photo, position, name }) => (
  <div className="bg-white border rounded-lg p-4 flex flex-col items-center shadow-md w-full max-w-[160px] min-h-[180px] mx-auto hover:shadow-lg transition">
    <img
      src={photo}
      alt={position}
      className="w-16 h-20 object-cover rounded mb-2 bg-gray-200"
    />
    <div className="font-semibold text-center text-sm leading-tight mb-1">{position}</div>
    <div className="text-gray-600 text-xs text-center leading-tight">{name}</div>
  </div>
);

PersonCard.propTypes = {
  photo: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default function StrukturPage() {
  const pageConfig = PAGES.STRUKTUR;

  const orgData = {
    kepala: { photo: '/api/placeholder/150/170', position: 'KEPALA DESA', name: 'Budi Santoso' },
    sekretaris: { photo: '/api/placeholder/150/170', position: 'SEKRETARIS DESA', name: 'Siti Aminah' },
    kasi: [
      { photo: '/api/placeholder/150/170', position: 'KASI PEMERINTAHAN', name: 'Ahmad Fauzi' },
      { photo: '/api/placeholder/150/170', position: 'KASI KESEJAHTERAAN', name: 'Dewi Sartika' },
      { photo: '/api/placeholder/150/170', position: 'KASI PELAYANAN', name: 'Rudi Hartono' }
    ],
    kaurTu: { photo: '/api/placeholder/150/170', position: 'KAUR TATA USAHA', name: 'Indah Permata' },
    kaurKeuangan: { photo: '/api/placeholder/150/170', position: 'KAUR KEUANGAN', name: 'Agus Setiawan' },
    kaurPerencanaan: { photo: '/api/placeholder/150/170', position: 'KAUR PERENCANAAN', name: 'Maya Sari' },
    kadus: [
      { photo: '/api/placeholder/150/170', position: 'KADUS I', name: 'Bambang Wijaya' },
      { photo: '/api/placeholder/150/170', position: 'KADUS II', name: 'Sumarno' },
      { photo: '/api/placeholder/150/170', position: 'KADUS III', name: 'Eko Prasetyo' },
      { photo: '/api/placeholder/150/170', position: 'KADUS IV', name: 'Wati Ningrum' },
      { photo: '/api/placeholder/150/170', position: 'KADUS V', name: 'Sari Melati' }
    ]
  };

  const kaur = [orgData.kaurTu, orgData.kaurKeuangan, orgData.kaurPerencanaan];

  return (
    <PageTemplate className="bg-gray-100">
      <div className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Struktur Organisasi Desa</h2>

        {/* Kepala Desa */}
        <div className="flex justify-center mb-8">
          <PersonCard {...orgData.kepala} />
        </div>

        {/* Sekretaris Desa */}
        <div className="flex justify-center mb-10">
          <PersonCard {...orgData.sekretaris} />
        </div>

        {/* Gabungan KAUR, KASI, KADUS */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {kaur.map((person, idx) => (
            <PersonCard key={`kaur-${idx}`} {...person} />
          ))}
          {orgData.kasi.map((person, idx) => (
            <PersonCard key={`kasi-${idx}`} {...person} />
          ))}
          {orgData.kadus.map((person, idx) => (
            <PersonCard key={`kadus-${idx}`} {...person} />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
