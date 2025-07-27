import React from 'react';
import PageTemplate from '../../../templates/PageTemplate';
import { PAGES } from '../../../lib/pages';
import PropTypes from 'prop-types';

// Kartu individu
const PersonCard = ({ photo, position, name }) => (
  <div className="bg-white border rounded-lg p-4 flex flex-col items-center shadow-md w-full max-w-[160px] min-h-[180px] mx-auto transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:-translate-y-1">
    <img
      src={photo}
      alt={position}
      className="object-cover w-16 h-20 mb-2 bg-gray-200 rounded"
    />
    <div className="mb-1 text-sm font-semibold text-center text-black">{position}</div>
    <div className="text-xs text-center text-black">{name}</div>
  </div>
);


PersonCard.propTypes = {
  photo: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default function StrukturPage() {
  const pageConfig = PAGES.STRUKTUR;

 const perangkatDesa = {
  kepala: {
    photo: '/PPdefault.svg',
    position: 'KEPALA DESA',
    name: 'Sudarman'
  },
  sekretaris: {
    photo: '/PPdefault.svg',
    position: 'SEKRETARIS DESA',
    name: 'M.Farid Adriyanto'
  },
  bendahara: {
    photo: '/PPdefault.svg',
    position: 'BENDAHARA',
    name: 'Linda Febriana'
  },
  kasi: [
    { photo: '/PPdefault.svg', position: 'KASI UMUM', name: 'Zaini' },
    { photo: '/PPdefault.svg', position: 'KASI PEMERINTAHAN', name: 'Haris Nasa’i' },
    { photo: '/PPdefault.svg', position: 'KASI KESEJAHTERAAN', name: 'Edi Sampurno' },
    { photo: '/PPdefault.svg', position: 'KASI PERENCANAAN', name: 'Luqman Anwar' },
    { photo: '/PPdefault.svg', position: 'KASI PELAYANAN', name: 'Hafid Rifa’i' }
  ],
  kadus: [
    { photo: '/PPdefault.svg', position: 'KADUS BELUNG KRAJAN', name: 'Shulhan Hadi Wijaya' },
    { photo: '/PPdefault.svg', position: 'KADUS BELUNG BUNTARAN', name: 'Totok Slamet Harwono' }
  ]
};

const bumdes = {
  kepala: {
    photo: '/PPdefault.svg',
    position: 'KEPALA BUMDES',
    name: 'Ahmad Zaini'
  },
  staff: [
    { photo: '/PPdefault.svg', position: 'SEKRETARIS', name: 'Nasrul Ma’ali' },
    { photo: '/PPdefault.svg', position: 'BENDAHARA', name: 'Mashudi' },
    { photo: '/PPdefault.svg', position: 'ADMINISTRASI', name: 'Eko' }
  ]
};

const bpd = {
  inti: [
    { photo: '/PPdefault.svg', position: 'KETUA', name: 'Imam Sayuti' },
    { photo: '/PPdefault.svg', position: 'SEKRETARIS', name: 'Roni Widianto' },
    { photo: '/PPdefault.svg', position: 'BENDAHARA', name: 'Endah Lestari' }
  ],
  anggota: [
    { photo: '/PPdefault.svg', position: 'ANGGOTA', name: 'Sofwan Hadi' },
    { photo: '/PPdefault.svg', position: 'ANGGOTA', name: 'Zainuri' },
    { photo: '/PPdefault.svg', position: 'ANGGOTA', name: 'Imron Mahmudi' },
    { photo: '/PPdefault.svg', position: 'ANGGOTA', name: 'Satune Gatau Lupa' }
  ]
};

  return (
    <PageTemplate className="bg-slate-800">
      <div className="container px-4 py-10 mx-auto text-black">
        <h2 className="mb-10 text-3xl font-bold text-center">Struktur Organisasi Desa</h2>

        {/* Kepala Desa */}
        <div className="flex justify-center mb-6">
          <PersonCard {...perangkatDesa.kepala} />
        </div>

        {/* Sekdes & Bendahara */}
        <div className="flex justify-center gap-10 mb-6">
          <PersonCard {...perangkatDesa.sekretaris} />
          <PersonCard {...perangkatDesa.bendahara} />
        </div>

        {/* Garis horizontal */}
        <div className="w-full my-6 border-t border-black" />

        {/* KAUR & KASI */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {perangkatDesa.kasi.map((person, idx) => (
            <PersonCard key={`kasi-${idx}`} {...person} />
          ))}
        </div>

        {/* Garis horizontal */}
        <div className="w-full my-6 border-t border-black" />

        {/* Kadus */}
        <h3 className="mb-2 text-2xl font-bold text-center">KEPALA DUSUN</h3>
        <div className="flex flex-wrap justify-center gap-10 mb-6">
          {perangkatDesa.kadus.map((person, idx) => (
            <PersonCard key={`kadus-${idx}`} {...person} />
          ))}
        </div>


        {/* Garis horizontal */}
        <div className="w-full my-6 border-t border-black" />

        {/* BUMDES */}
        <h3 className="mb-2 text-2xl font-bold text-center">BUMDES</h3>
        <div className="flex flex-wrap justify-center gap-10 mb-6">
          <PersonCard {...bumdes.kepala} />
        </div>
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          {bumdes.staff.map((person, idx) => (
            <PersonCard key={`bumdes-staff-${idx}`} {...person} />
          ))}
        </div>

        {/* Garis horizontal */}
        <div className="w-full my-6 border-t border-black" />

        {/* BPD */}
        <h3 className="mb-2 text-2xl font-bold text-center">BPD</h3>
        <div className="flex flex-wrap justify-center gap-10 mb-6">
          {bpd.inti.map((person, idx) => (
            <PersonCard key={`bpd-inti-${idx}`} {...person} />
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {bpd.anggota.map((person, idx) => (
            <PersonCard key={`bpd-anggota-${idx}`} {...person} />
          ))}
        </div>
      </div>
    </PageTemplate>
  );
}
