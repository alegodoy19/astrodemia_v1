import React from 'react';
import { Star, ChevronRight } from 'lucide-react';
import { translations } from '../i18n/translations';
import { getCurrentLanguage } from '../utils/language';

const constellations = [
  { name: { en: 'Ursa Major', es: 'Osa Mayor' }, stars: 7, description: { en: 'The Great Bear', es: 'La Osa Mayor' } },
  { name: { en: 'Orion', es: 'Orión' }, stars: 7, description: { en: 'The Hunter', es: 'El Cazador' } },
  { name: { en: 'Cassiopeia', es: 'Casiopea' }, stars: 5, description: { en: 'The Queen', es: 'La Reina' } },
];

interface ConstellationViewerProps {
  t: typeof translations.en | typeof translations.es;
}

export default function ConstellationViewer({ t }: ConstellationViewerProps) {
  const currentLanguage = getCurrentLanguage(t);

  return (
    <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Star className="text-yellow-300" />
        {t.constellations.title}
      </h2>
      <div className="space-y-4">
        {constellations.map((constellation) => (
          <div 
            key={constellation.name[currentLanguage]}
            className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <div>
              <h3 className="text-white font-medium">{constellation.name[currentLanguage]}</h3>
              <p className="text-white/60 text-sm">
                {constellation.stars} {t.constellations.stars} • {constellation.description[currentLanguage]}
              </p>
            </div>
            <ChevronRight className="text-white/40 group-hover:text-white/60 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}