"use client";
import { MapContainer, TileLayer, Polygon, Marker, Popup, GeoJSON, useMap } from "react-leaflet";
import { useEffect, useState } from "react";
import L from 'leaflet';
import "leaflet/dist/leaflet.css";

const outer = [
  [-8.07, 112.71],
  [-8.07, 112.83],
  [-8.00, 112.83],
  [-8.00, 112.71],
  [-8.03, 112.71]
];

const maxBounds = [
  [-8.05, 112.73],
  [-8.01, 112.80]
];

function getCentroid(coords) {
  let latSum = 0, lngSum = 0;
  coords.forEach(([lat, lng]) => {
    latSum += lat;
    lngSum += lng;
  });
  return [latSum / coords.length, lngSum / coords.length];
}

function ResponsiveZoom() {
  const map = useMap();

  useEffect(() => {
    function updateZoom() {
      const width = window.innerWidth;
      if (width < 768) { // mobile
        map.setZoom(13.5);
      } else if (width < 1024) { // tablet
        map.setZoom(14);
      } else { // desktop 
        map.setZoom(14.5);
      }
    }

    updateZoom();
    window.addEventListener('resize', updateZoom);
    return () => window.removeEventListener('resize', updateZoom);
  }, [map]);

  return null;
}

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function LeafletMap({ villagePolygon, dusunPolygons, selectedLocation, highlightDusun }) {
  const [initialZoom, setInitialZoom] = useState(14.5);

  useEffect(() => {
    function setResponsiveZoom() {
      const width = window.innerWidth;
      if (width < 768) setInitialZoom(13.5);
      else if (width < 1024) setInitialZoom(14);
      else setInitialZoom(14.5);
    }

    setResponsiveZoom();
  }, []);

  const maskGeoJson = {
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        outer.map(([lat, lng]) => [lng, lat]), // GeoJSON uses [lng, lat]
        villagePolygon.map(([lat, lng]) => [lng, lat]) // hole
      ]
    }
  };

  return (
    <MapContainer
      key={getCentroid(villagePolygon).join(",")}
      center={getCentroid(villagePolygon)}
      zoom={initialZoom}
      minZoom={14}
      maxZoom={17}
      maxBounds={maxBounds}
      boundsOptions={{ padding: [50, 50] }}
      maxBoundsViscosity={1.0}
      style={{ height: "100%", width: "100%" }}
    >
      <ResponsiveZoom />
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON
        data={maskGeoJson}
        style={{
          fillColor: "#888",
          fillOpacity: 0.6,
          color: "#888",
          weight: 0
        }}
      />
      <Polygon
        positions={villagePolygon}
        pathOptions={{ color: "green", fillOpacity: 0, weight: 3 }}
      />
      {dusunPolygons.map((dusun, idx) => (
        <Polygon
          key={idx}
          positions={dusun.coords}
          pathOptions={{
            color: highlightDusun === dusun.name ? '#2563eb' : '#9ca3af',
            fillColor: highlightDusun === dusun.name ? '#3b82f6' : '#9ca3af',
            fillOpacity: highlightDusun === dusun.name ? 0.3 : 0.1,
            weight: highlightDusun === dusun.name ? 3 : 1
          }}
        />
      ))}
      {selectedLocation && (
        <Marker position={selectedLocation.coords}>
          <Popup>{selectedLocation.name}</Popup>
        </Marker>
      )}
    </MapContainer>
  );
}