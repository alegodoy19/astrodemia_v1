import React from 'react';
import { X } from 'lucide-react';
import { translations } from '../../i18n/translations';
import { getCurrentLanguage } from '../../utils/language';
import { Constellation } from '../../types/constellation';

interface ConstellationDetailsProps {
  constellation: Constellation;
  onClose: () => void;
  t: typeof translations.en | typeof translations.es;
}

export default function ConstellationDetails({ constellation, onClose, t }: ConstellationDetailsProps) {
  const currentLanguage = getCurrentLanguage(t);

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-black/90 border border-white/10 rounded-xl w-full max-w-2xl">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white">{constellation.name[currentLanguage]}</h2>
          <button onClick={onClose} className="text-white/60 hover:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <img 
            src={constellation.image} 
            alt={constellation.name[currentLanguage]} 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.constellations.description}</h3>
              <p className="text-white/80">{constellation.fullDescription[currentLanguage]}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.constellations.visibility}</h3>
              <p className="text-white/80">{constellation.bestViewing[currentLanguage]}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">{t.constellations.mainStars}</h3>
              <ul className="list-disc list-inside text-white/80">
                {constellation.mainStars.map(star => (
                  <li key={star[currentLanguage]}>{star[currentLanguage]}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}