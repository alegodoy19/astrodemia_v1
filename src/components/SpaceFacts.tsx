import React from 'react';
import { Sparkles } from 'lucide-react';
import { translations } from '../i18n/translations';
import { getCurrentLanguage } from '../utils/language';

const facts = {
  en: [
    "Light from the Sun takes about 8 minutes to reach Earth",
    "A day on Venus is longer than its year",
    "The footprints on the Moon will last for 100 million years"
  ],
  es: [
    "La luz del Sol tarda unos 8 minutos en llegar a la Tierra",
    "Un día en Venus es más largo que su año",
    "Las huellas en la Luna durarán 100 millones de años"
  ]
};

interface SpaceFactsProps {
  t: typeof translations.en | typeof translations.es;
}

export default function SpaceFacts({ t }: SpaceFactsProps) {
  const currentLanguage = getCurrentLanguage(t);

  return (
    <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Sparkles className="text-purple-400" />
        {t.facts.title}
      </h2>
      <div className="space-y-3">
        {facts[currentLanguage].map((fact, index) => (
          <div 
            key={index}
            className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
          >
            <p className="text-white/80">{fact}</p>
          </div>
        ))}
      </div>
      <p className="text-white/40 text-xs mt-4 text-right">{t.facts.source}</p>
    </div>
  );
}