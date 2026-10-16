import React from 'react';
import { Volume2, VolumeX, Smartphone, Monitor, Flame, Award } from 'lucide-react';
import { Language } from '../types/quiz';
import { TRANSLATIONS } from '../data/translations';
import { playSound } from '../utils/audio';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  soundEnabled: boolean;
  onSoundToggle: () => void;
  isMobileDeviceFrame: boolean;
  onFrameToggle: () => void;
  streak: number;
  points: number;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  soundEnabled,
  onSoundToggle,
  isMobileDeviceFrame,
  onFrameToggle,
  streak,
  points
}) => {
  const t = TRANSLATIONS[language];

  const handleLangToggle = () => {
    const nextLang = language === 'en' ? 'hi' : 'en';
    playSound('click', soundEnabled);
    onLanguageChange(nextLang);
  };

  const handleSoundToggle = () => {
    playSound('click', !soundEnabled);
    onSoundToggle();
  };

  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 px-4 py-2.5 shadow-xs">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-500 via-orange-500 to-emerald-600 flex items-center justify-center shadow-md shadow-orange-500/20 text-white font-black text-lg ring-2 ring-white">
            <span className="drop-shadow-xs">🇮🇳</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h1 className="font-extrabold text-base md:text-lg tracking-tight text-slate-900 leading-none">
                {t.appName}
              </h1>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                GK
              </span>
            </div>
            <p className="text-[11px] text-slate-500 truncate max-w-[180px] sm:max-w-xs font-medium">
              {language === 'hi' ? 'दैनिक सामान्य ज्ञान' : 'Daily General Knowledge'}
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* Streak & Points Pill */}
          <div className="hidden sm:flex items-center gap-2 bg-slate-100 px-2.5 py-1 rounded-full text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1 text-orange-600" title="Daily Streak">
              <Flame className="w-3.5 h-3.5 fill-orange-500 text-orange-500" />
              {streak}d
            </span>
            <span className="text-slate-300">|</span>
            <span className="flex items-center gap-1 text-amber-700" title="Educational Points">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              {points}
            </span>
          </div>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 active:scale-95 transition"
            title={soundEnabled ? t.soundOn : t.soundOff}
            aria-label="Toggle sound"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-emerald-600" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-400" />
            )}
          </button>

          {/* Phone Frame Mockup Toggle */}
          <button
            onClick={onFrameToggle}
            className="hidden md:flex p-2 rounded-lg text-slate-600 hover:bg-slate-100 active:scale-95 transition"
            title={isMobileDeviceFrame ? t.mobileFrameOff : t.mobileFrameOn}
            aria-label="Toggle device frame"
          >
            {isMobileDeviceFrame ? (
              <Monitor className="w-4 h-4 text-indigo-600" />
            ) : (
              <Smartphone className="w-4 h-4 text-slate-600" />
            )}
          </button>

          {/* Bilingual Switch Button */}
          <button
            onClick={handleLangToggle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold shadow-xs active:scale-95 transition"
            title="Switch Language / भाषा बदलें"
          >
            <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
          </button>

          {/* In-App PWA Install Button */}
          <PWAInstallButton language={language} />
        </div>
      </div>
    </header>
  );
};
