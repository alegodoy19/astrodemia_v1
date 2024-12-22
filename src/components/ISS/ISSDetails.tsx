import React from 'react';
import { ISSPosition } from '../../types/iss';

interface ISSDetailsProps {
  position: ISSPosition;
  t: any;
}

export default function ISSDetails({ position, t }: ISSDetailsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
        <div className="text-sm text-white/60">{t.iss.latitude}</div>
        <div className="text-lg font-semibold text-white">{position.latitude.toFixed(2)}°</div>
      </div>
      <div className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
        <div className="text-sm text-white/60">{t.iss.longitude}</div>
        <div className="text-lg font-semibold text-white">{position.longitude.toFixed(2)}°</div>
      </div>
      <div className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
        <div className="text-sm text-white/60">{t.iss.speed}</div>
        <div className="text-lg font-semibold text-white">27,600 {t.iss.kmh}</div>
      </div>
      <div className="bg-white/5 p-3 rounded-lg hover:bg-white/10 transition-colors">
        <div className="text-sm text-white/60">{t.iss.altitude}</div>
        <div className="text-lg font-semibold text-white">408 {t.iss.km}</div>
      </div>
    </div>
  );
}