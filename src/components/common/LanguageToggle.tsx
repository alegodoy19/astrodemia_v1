import React from 'react';
import { Languages } from 'lucide-react';

interface LanguageToggleProps {
  language: string;
  onToggle: () => void;
  t: any;
}

export default function LanguageToggle({ language, onToggle, t }: LanguageToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
      title={t.language.toggle}
    >
      <Languages size={18} className="text-purple-400" />
      <span className="text-sm font-medium uppercase">{language}</span>
    </button>
  );
}