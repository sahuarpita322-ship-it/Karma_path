import React from 'react';
import { useStore, type Language } from '../context/store';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useStore();

  const languages: { key: Language; label: string }[] = [
    { key: 'en', label: 'EN' },
    { key: 'hi', label: 'हिंदी' },
    { key: 'or', label: 'ଓଡ଼ିଆ' },
  ];

  return (
    <div className="flex gap-1 bg-white/50 backdrop-blur-sm p-1 rounded-lg border border-sand/50">
      {languages.map((lang) => (
        <button key={lang.key} onClick={() => setLanguage(lang.key)} className={`px-2 py-1 rounded-md text-xs font-bold transition-all ${language === lang.key ? 'bg-forest text-white shadow-md' : 'text-earth hover:bg-sand/50'}`}>
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;