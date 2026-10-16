import React from 'react';
import { Home, BookOpen, Trophy, Award, Smartphone } from 'lucide-react';
import { Language } from '../types/quiz';
import { TRANSLATIONS } from '../data/translations';

export type TabId = 'home' | 'study' | 'leaderboard' | 'badges' | 'guide';

interface BottomNavigationProps {
  activeTab: TabId;
  onTabChange: (tab: TabId) => void;
  language: Language;
}

export const BottomNavigation: React.FC<BottomNavigationProps> = ({
  activeTab,
  onTabChange,
  language
}) => {
  const t = TRANSLATIONS[language];

  const tabs: { id: TabId; label: string; icon: React.ReactNode }[] = [
    {
      id: 'home',
      label: t.navHome,
      icon: <Home className="w-5 h-5" />
    },
    {
      id: 'study',
      label: language === 'hi' ? 'अध्ययन' : 'Study',
      icon: <BookOpen className="w-5 h-5" />
    },
    {
      id: 'leaderboard',
      label: language === 'hi' ? 'रैंक' : 'Rank',
      icon: <Trophy className="w-5 h-5" />
    },
    {
      id: 'badges',
      label: language === 'hi' ? 'उपलब्धि' : 'Badges',
      icon: <Award className="w-5 h-5" />
    },
    {
      id: 'guide',
      label: language === 'hi' ? 'APK गाइड' : 'APK Guide',
      icon: <Smartphone className="w-5 h-5" />
    }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-md">
      <div className="max-w-md mx-auto grid grid-cols-5 py-1.5 px-2">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-1 rounded-xl transition ${
                isActive
                  ? 'text-orange-600 font-extrabold'
                  : 'text-slate-500 hover:text-slate-800 font-medium'
              }`}
            >
              <div
                className={`p-1 rounded-lg transition ${
                  isActive ? 'bg-orange-50 text-orange-600 scale-110' : ''
                }`}
              >
                {tab.icon}
              </div>
              <span className="text-[10px] tracking-tight mt-0.5 truncate max-w-full">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
