import { useState, useEffect } from 'react';
import { translations } from '../i18n/translations';

type Language = 'en' | 'es';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'es' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  return { language, toggleLanguage, t };
}