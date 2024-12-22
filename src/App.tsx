import React from 'react';
import { RocketIcon } from 'lucide-react';
import APODCard from './components/APOD/APODCard';
import ISSTracker from './components/ISS/ISSTracker';
import ConstellationViewer from './components/ConstellationViewer';
import SpaceFacts from './components/SpaceFacts';
import LanguageToggle from './components/common/LanguageToggle';
import { useLanguage } from './hooks/useLanguage';

function App() {
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-fixed">
      <div className="min-h-screen bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <header className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <RocketIcon className="w-8 h-8 text-purple-400" />
              <h1 className="text-3xl font-bold text-white">{t.header.title}</h1>
            </div>
            <LanguageToggle language={language} onToggle={toggleLanguage} t={t} />
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <APODCard t={t} />
              <ISSTracker t={t} />
            </div>
            <div className="space-y-6">
              <ConstellationViewer t={t} />
              <SpaceFacts t={t} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;