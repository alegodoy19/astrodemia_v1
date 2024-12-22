import React from 'react';
import { Satellite } from 'lucide-react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useISSPosition } from '../../hooks/useISSPosition';
import LoadingSpinner from '../common/LoadingSpinner';
import ISSDetails from './ISSDetails';
import 'leaflet/dist/leaflet.css';

export default function ISSTracker({ t }: { t: any }) {
  const { position, loading, error } = useISSPosition();

  if (loading) return (
    <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Satellite className="text-blue-400" />
        {t.iss.title}
      </h2>
      <LoadingSpinner />
    </div>
  );

  if (error) return (
    <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Satellite className="text-blue-400" />
        {t.iss.title}
      </h2>
      <p className="text-red-400">{error}</p>
    </div>
  );

  if (!position) return null;

  return (
    <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Satellite className="text-blue-400" />
        {t.iss.title}
      </h2>
      <div className="h-[300px] rounded-lg overflow-hidden">
        <MapContainer
          center={[position.latitude, position.longitude]}
          zoom={3}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          />
          <Marker position={[position.latitude, position.longitude]}>
            <Popup>
              {t.iss.location}<br />
              {t.iss.latitude}: {position.latitude.toFixed(2)}°<br />
              {t.iss.longitude}: {position.longitude.toFixed(2)}°
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <ISSDetails position={position} t={t} />
    </div>
  );
}