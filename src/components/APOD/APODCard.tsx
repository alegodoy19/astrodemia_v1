import React from 'react';
import { Calendar, Info } from 'lucide-react';
import { useAPOD } from '../../hooks/useAPOD';
import LoadingSpinner from '../common/LoadingSpinner';

export default function APODCard({ t }: { t: any }) {
  const { data, loading } = useAPOD();

  if (loading) return (
    <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6">
      <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Info className="text-purple-400" />
        {t.apod.title}
      </h2>
      <LoadingSpinner />
    </div>
  );

  if (!data) return null;

  return (
    <div className="relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10">
      <img 
        src={data.url}
        alt={data.title}
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
        <h2 className="text-2xl font-bold text-white mb-2">{data.title}</h2>
        <div className="flex items-center gap-4 text-white/80 mb-3">
          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span className="text-sm">{data.date}</span>
          </div>
          {data.copyright && (
            <div className="flex items-center gap-2">
              <Info size={16} />
              <span className="text-sm">© {data.copyright}</span>
            </div>
          )}
        </div>
        <p className="text-white/70">{data.explanation}</p>
      </div>
    </div>
  );
}