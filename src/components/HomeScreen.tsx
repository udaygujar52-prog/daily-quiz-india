import React from 'react';
import { 
  Play, 
  Flame, 
  Trophy, 
  Compass, 
  Landmark, 
  Atom, 
  Flag, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import { CategoryId, Difficulty, Language, UserStats } from '../types/quiz';
import { TRANSLATIONS } from '../data/translations';
import { CATEGORIES_LIST, SAMPLE_QUESTIONS } from '../data/questions';
import { getTodayDateString } from '../utils/storage';

interface HomeScreenProps {
  language: Language;
  stats: UserStats;
  selectedDifficulty: Difficulty;
  onDifficultyChange: (diff: Difficulty) => void;
  onStartQuiz: (categoryId: CategoryId, difficulty: Difficulty, isDaily: boolean) => void;
  onOpenLeaderboard: () => void;
  onOpenBadges: () => void;
  onOpenStudy: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  language,
  stats,
  selectedDifficulty,
  onDifficultyChange,
  onStartQuiz,
  onOpenBadges,
  onOpenStudy
}) => {
  const t = TRANSLATIONS[language];
  const today = getTodayDateString();
  const isDailyCompletedToday = stats.dailyCompletedDates?.includes(today);

  // Category icon mapping
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'india_gk':
        return <Flag className="w-6 h-6 text-orange-600" />;
      case 'history':
        return <Landmark className="w-6 h-6 text-amber-700" />;
      case 'geography':
        return <Compass className="w-6 h-6 text-emerald-600" />;
      case 'science':
        return <Atom className="w-6 h-6 text-blue-600" />;
      case 'sports':
        return <Trophy className="w-6 h-6 text-rose-600" />;
      default:
        return <BookOpen className="w-6 h-6 text-indigo-600" />;
    }
  };

  const getQuestionCountForCategory = (catId: CategoryId) => {
    if (catId === 'all') return SAMPLE_QUESTIONS.length;
    return SAMPLE_QUESTIONS.filter((q) => q.category === catId).length;
  };

  const difficulties: { id: Difficulty; label: string }[] = [
    { id: 'all', label: t.diffAll },
    { id: 'easy', label: t.diffEasy },
    { id: 'medium', label: t.diffMedium },
    { id: 'hard', label: t.diffHard }
  ];

  return (
    <div className="flex-1 pb-24">
      {/* Hero Daily Challenge Banner */}
      <div className="p-4">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-orange-600 via-amber-600 to-emerald-700 p-5 text-white shadow-lg">
          {/* Decorative tricolor pattern blur */}
          <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
          
          <div className="flex items-start justify-between relative z-10">
            <div>
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide uppercase bg-white/20 backdrop-blur-xs text-white">
                <Sparkles className="w-3 h-3 text-amber-300" />
                {t.dailyQuizTitle}
              </span>
              <h2 className="mt-2 text-xl md:text-2xl font-extrabold tracking-tight">
                {language === 'hi' ? 'आज की दैनिक क्विज' : "Today's Daily Challenge"}
              </h2>
              <p className="mt-1 text-xs text-orange-100/90 leading-relaxed max-w-sm">
                {t.dailyQuizDesc}
              </p>
            </div>
            
            {/* Streak Counter Badge */}
            <div className="flex flex-col items-center justify-center bg-white/15 backdrop-blur-xs px-3 py-2 rounded-xl border border-white/20">
              <Flame className="w-6 h-6 text-amber-300 fill-amber-400 animate-pulse" />
              <span className="text-sm font-black mt-0.5">{stats.currentStreak} {t.streak}</span>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-4 pt-2 border-t border-white/15 flex items-center justify-between">
            <span className="text-[11px] text-orange-100 font-medium">
              10 MCQs • 1 Pt Each • Verified GK
            </span>
            <button
              onClick={() => onStartQuiz('all', 'all', true)}
              className="flex items-center gap-1.5 px-4 py-2 bg-white text-orange-700 font-bold text-xs rounded-xl shadow-md hover:bg-orange-50 active:scale-95 transition"
            >
              <Play className="w-3.5 h-3.5 fill-orange-700" />
              <span>{isDailyCompletedToday ? t.dailyCompleted : t.startDailyQuiz}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Stats Strip */}
      <div className="px-4 mb-4">
        <div className="grid grid-cols-3 gap-2 bg-white p-3 rounded-2xl border border-slate-200 shadow-2xs">
          <div className="text-center border-r border-slate-100">
            <span className="text-[11px] font-medium text-slate-500 block">{t.bestScore}</span>
            <span className="text-lg font-extrabold text-slate-800">
              {stats.bestScore > 0 ? `${stats.bestScore}/10` : '—'}
            </span>
          </div>
          <div className="text-center border-r border-slate-100">
            <span className="text-[11px] font-medium text-slate-500 block">{t.quizzesCompleted}</span>
            <span className="text-lg font-extrabold text-slate-800">
              {stats.totalQuizzesTaken}
            </span>
          </div>
          <div className="text-center cursor-pointer" onClick={onOpenBadges}>
            <span className="text-[11px] font-medium text-slate-500 block">{t.badgesEarned}</span>
            <span className="text-lg font-extrabold text-emerald-600 flex items-center justify-center gap-1">
              <Trophy className="w-4 h-4" />
              {stats.unlockedBadgeIds?.length || 0}
            </span>
          </div>
        </div>
      </div>

      {/* Quick 10-Question Master Quiz CTA */}
      <div className="px-4 mb-5">
        <button
          onClick={() => onStartQuiz('all', selectedDifficulty, false)}
          className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-extrabold text-sm py-3.5 px-4 rounded-2xl shadow-md shadow-orange-500/25 flex items-center justify-between active:scale-[0.99] transition"
        >
          <div className="flex items-center gap-3 text-left">
            <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
              <Play className="w-4 h-4 fill-white" />
            </div>
            <div>
              <span className="block font-bold text-sm leading-tight">{t.startQuiz}</span>
              <span className="block text-[11px] text-orange-100 font-normal">
                {t.quickQuiz} ({selectedDifficulty === 'all' ? t.diffAll : selectedDifficulty.toUpperCase()})
              </span>
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-white/90" />
        </button>
      </div>

      {/* Difficulty Filter Selector */}
      <div className="px-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5 text-orange-500" />
            {t.difficulty}
          </label>
          <span className="text-[11px] text-slate-400">
            {language === 'hi' ? 'स्तर चुनें' : 'Select Level'}
          </span>
        </div>
        <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-200/80 rounded-xl">
          {difficulties.map((diff) => (
            <button
              key={diff.id}
              onClick={() => onDifficultyChange(diff.id)}
              className={`py-1.5 text-xs font-bold rounded-lg transition text-center ${
                selectedDifficulty === diff.id
                  ? 'bg-white text-orange-700 shadow-2xs font-extrabold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {diff.label}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-extrabold text-slate-900 tracking-tight">
            {t.chooseCategory}
          </h3>
          <button
            onClick={onOpenStudy}
            className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-0.5"
          >
            <span>{t.navStudy}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* General Knowledge All Card */}
          <div
            onClick={() => onStartQuiz('all', selectedDifficulty, false)}
            className="group cursor-pointer bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-md transition active:scale-[0.98] flex items-center justify-between"
          >
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h4 className="font-extrabold text-slate-900 text-sm leading-snug">
                  {t.allCategories}
                </h4>
                <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                  {language === 'hi' ? 'सभी विषयों का संपूर्ण मिश्रण' : 'Mixed questions from all subjects'}
                </p>
                <span className="inline-block mt-1 text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                  {getQuestionCountForCategory('all')} {language === 'hi' ? 'प्रश्न' : 'Questions'}
                </span>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition" />
          </div>

          {/* Individual Subject Categories */}
          {CATEGORIES_LIST.map((cat) => {
            const catStats = stats.categoryStats?.[cat.id];
            const accuracy =
              catStats && catStats.answered > 0
                ? Math.round((catStats.correct / catStats.answered) * 100)
                : null;

            return (
              <div
                key={cat.id}
                onClick={() => onStartQuiz(cat.id, selectedDifficulty, false)}
                className="group cursor-pointer bg-white p-3.5 rounded-2xl border border-slate-200 hover:border-orange-300 hover:shadow-md transition active:scale-[0.98] flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-slate-900 text-sm leading-snug">
                      {cat.name[language]}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-medium line-clamp-1">
                      {cat.description[language]}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                        {getQuestionCountForCategory(cat.id)} {language === 'hi' ? 'प्रश्न' : 'Q’s'}
                      </span>
                      {accuracy !== null && (
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full flex items-center gap-0.5">
                          <CheckCircle2 className="w-2.5 h-2.5" />
                          {accuracy}%
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-orange-600 transition" />
              </div>
            );
          })}
        </div>
      </div>

      {/* Safety and Educational Notice */}
      <div className="mt-6 px-4">
        <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-amber-900 text-[11px] leading-relaxed flex items-start gap-2">
          <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold">{t.pointsNotice}</p>
            <p className="text-amber-700 text-[10px] mt-0.5">
              {language === 'hi'
                ? 'यह ऐप 100% निशुल्क है। सभी प्रश्न सत्यापित तथ्यों पर आधारित हैं।'
                : 'Free offline educational app. Questions verified with standard NCERT & national records.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
