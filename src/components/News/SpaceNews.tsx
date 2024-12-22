import React from 'react';
import { Newspaper } from 'lucide-react';
import { translations } from '../../i18n/translations';
import { getCurrentLanguage } from '../../utils/language';
import { useSpaceNews } from '../../hooks/useSpaceNews';

interface SpaceNewsProps {
  t: typeof translations.en | typeof translations.es;
}

export default function SpaceNews({ t }: SpaceNewsProps) {
  const { news, loading } = useSpaceNews();
  const currentLanguage = getCurrentLanguage(t);

  if (loading) {
    return (
      <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          <Newspaper className="text-blue-400" />
          {t.news.title}
        </h2>
        <div className="animate-pulse space-y-4">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-24 bg-white/5 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Newspaper className="text-blue-400" />
        {t.news.title}
      </h2>
      <div className="space-y-4">
        {news.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-all transform hover:scale-[1.02]"
          >
            <h3 className="font-semibold text-white mb-2">{item.title}</h3>
            <p className="text-white/60 text-sm line-clamp-2">{item.summary}</p>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-xs text-white/40">{new Date(item.publishedAt).toLocaleDateString(currentLanguage === 'es' ? 'es-ES' : 'en-US')}</span>
              <span className="text-xs text-purple-400">{item.source}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}