import React from 'react';
import { Calendar, Info } from 'lucide-react';

interface PictureData {
  title: string;
  date: string;
  explanation: string;
}

export default function DailyPicture() {
  const dummyData: PictureData = {
    title: "Nebula in Deep Space",
    date: new Date().toLocaleDateString(),
    explanation: "A stunning nebula captured by the James Webb Space Telescope, showing the beauty of cosmic gas and dust formations."
  };

  return (
    <div className="relative rounded-xl overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10">
      <img 
        src="https://images.unsplash.com/photo-1462332420958-a05d1e002413?auto=format&fit=crop&w=1200&q=80"
        alt="Space"
        className="w-full h-[400px] object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent">
        <h2 className="text-2xl font-bold text-white mb-2">{dummyData.title}</h2>
        <div className="flex items-center gap-2 text-white/80 mb-3">
          <Calendar size={16} />
          <span className="text-sm">{dummyData.date}</span>
        </div>
        <p className="text-white/70">{dummyData.explanation}</p>
      </div>
    </div>
  );
}