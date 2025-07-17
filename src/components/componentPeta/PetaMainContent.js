"use client";
import { useState } from "react";
import dynamic from "next/dynamic";

const villagePolygon = [
  [-8.022504647823297, 112.75841045197666],
  [-8.02326137093344, 112.76046424704532],
  [-8.025295057310416, 112.76342553296132],
  [-8.024774812926466, 112.76481065056703],
  [-8.023119485457002, 112.76710325901666],
  [-8.02382888391297, 112.76958686551558],
  [-8.026619284308026, 112.77183171128866],
  [-8.027754356952826, 112.77369445565466],
  [-8.027754356952826, 112.77369445565466],
  [-8.026619917793866, 112.77512797836414],
  [-8.02595779062139, 112.7783280776593],
  [-8.026099675106934, 112.77952214456059],
  [-8.028748176397457, 112.77947438188579],
  [-8.029221121239232, 112.78090726216641],
  [-8.030754948534792, 112.78062076063947],
  [-8.031086008346293, 112.78014313387928],
  [-8.034680354638837, 112.77999984585142],
  [-8.035531642519786, 112.77899682965455],
  [-8.036713983837686, 112.77894906697799],
  [-8.037896321710633, 112.77761171204872],
  [-8.039220536037647, 112.77746842402087],
  [-8.039598882193928, 112.77885354162493],
  [-8.039173242743615, 112.78109838739971],
  [-8.040308280286993, 112.78128943810407],
  [-8.039315122610006, 112.78234021697756],
  [-8.04141990150167, 112.78166464483445],
  [-8.042696811442, 112.77789139342775],
  [-8.03877148288413, 112.77564654765291],
  [-8.038298549167934, 112.77263749906223],
  [-8.037447267091366, 112.77211210962543],
  [-8.038298549167934, 112.76738360469665],
  [-8.03512987905546, 112.76461336948682],
  [-8.036028459660443, 112.76423126807799],
  [-8.036737863995583, 112.76193865962841],
  [-8.03550822902605, 112.76079235540186],
  [-8.036832451146708, 112.7600281525859],
  [-8.036217634270557, 112.7593594751213],
  [-8.034751528731334, 112.7600759152624],
  [-8.03267059026794, 112.75778330584569],
  [-8.031677413899615, 112.75840422063379],
  [-8.029359992926942, 112.7560160868311],
  [-8.027846568011356, 112.75587279880324],
  [-8.02727903221458, 112.75401005443729],
  [-8.027657389501059, 112.75348466500225],
  [-8.026806085111787, 112.7516219206363],
  [-8.023353556287987, 112.75410559223417],
  [-8.019617223087977, 112.75472650702386],
  [-8.019333449542998, 112.75553847251643],
  [-8.019900996434032, 112.75663701406467],
  [-8.021272564817892, 112.75701911547355],
  [-8.022504647823297, 112.75778330584569],
  [-8.022504772248197, 112.75841039209132]
];

const dusunPolygons = [
  {
    name: "Dusun Buntaran",
    description: "Dusun Buntaran terletak di bagian Barat Desa Belung. Merupakan kawasan yang dikenal dengan perkebunan kopinya yang luas.",
    coords: [
      [-7.1245, 112.1235],
      [-7.125, 112.1238],
      [-7.1252, 112.1232],
      [-7.1245, 112.1235],
    ],
  },
  {
    name: "Dusun Krajan",
    description: "Dusun Krajan berada di daerah pemerintahan Desa Belung. Di sini terdapat Kantor Desa dan fasilitas publik lainnya.",
    coords: [
      [-7.125, 112.1225],
      [-7.1255, 112.1228],
      [-7.1252, 112.1222],
      [-7.125, 112.1225],
    ],
  },
];

const locations = [
  { name: "Kantor Desa", coords: [-8.031345849458775, 112.76769459538153] },
  { name: "Cafe Belong", coords: [-8.032450360038462, 112.76760485285344] },
  { name: "Biro Wisata Bromo", coords: [-8.026793251825048, 112.76814574113044] },
  { name: "Kebun Kopi Java Bromo", coords: [-8.033243499715363, 112.77539189275576] },
  { name: "Apotek Belung Sehat", coords: [-8.036580731625191, 112.76828856210173] },
  { name: "SPBU Pertamina Belung", coords: [-8.023901973106344, 112.76761490518525] },
  { name: "Masjid TPQ Baitut Taqwa", coords: [-8.023162177681414, 112.75833083910838] },
  { name: "Manhattan Creative Studio", coords: [-8.034508712699186, 112.7677982251694] },
  // Add more locations as needed
];

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

export default function PetaMainContent() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [highlightDusun, setHighlightDusun] = useState(null);

  return (
    <div className="bg-white rounded-lg shadow-md p-8 flex flex-col md:flex-row gap-8">
      {/* Left: Interactive List */}
      <div className="md:w-1/3">
        <h2 className="text-4xl font-black text-gray-800 mb-12 tracking-wider text-center leading-tight">
          <span className="block text-2xl font-light mb-1">JELAJAHI</span>
          <span className="block font-serif">DESA BELUNG</span>
        </h2>
        <div className="space-y-0">
          {locations.map((loc, idx) => (
            <div
              key={idx}
              className="border-t last:border-b border-[rgba(92,158,79,1)]"
            >
              <button
                className="w-full py-5 text-center text-lg text-gray-700 hover:text-green-700 transition-colors font-medium"
                onClick={() => setSelectedLocation(loc)}
              >
                {loc.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      {/* Right: Map and Info Cards */}
      <div className="md:w-2/3 flex flex-col items-center">
        <div className="w-full aspect-video rounded-xl overflow-hidden border mb-6">
          <LeafletMap
            villagePolygon={villagePolygon}
            dusunPolygons={dusunPolygons}
            selectedLocation={selectedLocation}
            highlightDusun={highlightDusun}
          />
        </div>
        {/* Bottom: Info Cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {dusunPolygons.map((dusun, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow p-4 border">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-gray-800 text-lg mb-1">
                    {dusun.name}
                  </h3>
                </div>
                <button
                  className="inline-flex items-center text-green-700 font-semibold border border-green-600 rounded-full px-4 py-1 hover:bg-green-50 transition"
                  onClick={() => setHighlightDusun(dusun.name)}
                >
                  Lihat di peta
                </button>
              </div>
              <p className="text-gray-600 text-sm mt-3">
                {dusun.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}