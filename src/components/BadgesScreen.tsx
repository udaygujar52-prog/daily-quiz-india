import React from 'react';
import { 
  Trophy, 
  Flame, 
  Target, 
  Sparkles, 
  Crown, 
  Footprints, 
  GraduationCap, 
  Atom, 
  Award, 
  Zap, 
  Lock, 
  CheckCircle2 
} from 'lucide-react';
import { Language, UserStats } from '../types/quiz';
import { TRANSLATIONS } from '../data/translations';
import { BADGES } from '../utils/badges';
import { CATEGORIES_LIST } from '../data/questions';

interface BadgesScreenProps {
  stats: UserStats;
  language: Language;
}

export const BadgesScreen: React.FC<BadgesScreenProps> = ({ stats, language }) => {
  const t = TRANSLATIONS[language];
  const unlockedSet = new Set(stats.unlockedBadgeIds || []);

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Footprints':
        return <Footprints className="w-5 h-5" />;
      case 'Crown':
        return <Crown className="w-5 h-5" />;
      case 'Flame':
        return <Flame className="w-5 h-5" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5" />;
      case 'Atom':
        return <Atom className="w-5 h-5" />;
      case 'Award':
        return <Award className="w-5 h-5" />;
      case 'Zap':
        return <Zap className="w-5 h-5" />;
      default:
        return <Trophy className="w-5 h-5" />;
    }
  };

  const overallAccuracy =
    stats.totalQuestionsAnswered > 0
      ? Math.round((stats.totalCorrect / stats.totalQuestionsAnswered) * 100)
      : 0;

  return (
    <div className="flex-1 p-4 max-w-xl mx-auto w-full pb-24 space-y-5">
      {/* Overview Stat Cards */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs">
        <h2 className="text-base font-extrabold text-slate-900 mb-3 flex items-center gap-2">
          <Target className="w-5 h-5 text-orange-600" />
          <span>{t.statsOverview}</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
            <span className="text-[11px] font-semibold text-slate-400 block">{t.accuracy}</span>
            <span className="text-xl font-black text-emerald-600">{overallAccuracy}%</span>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
            <span className="text-[11px] font-semibold text-slate-400 block">{t.totalPoints}</span>
            <span className="text-xl font-black text-amber-600">{stats.totalPoints}</span>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
            <span className="text-[11px] font-semibold text-slate-400 block">{t.streak}</span>
            <span className="text-xl font-black text-orange-600 flex items-center justify-center gap-1">
              <Flame className="w-4 h-4 fill-orange-500" />
              {stats.currentStreak}
            </span>
          </div>
          <div className="bg-slate-50 p-3 rounded-2xl border border-slate-100 text-center">
            <span className="text-[11px] font-semibold text-slate-400 block">{t.quizzesCompleted}</span>
            <span className="text-xl font-black text-slate-800">{stats.totalQuizzesTaken}</span>
          </div>
        </div>

        {/* Category-by-Category Accuracy Progress */}
        <div className="space-y-2 pt-2 border-t border-slate-100">
          <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            {language === 'hi' ? 'विषयवार दक्षता' : 'Category Mastery'}
          </h3>
          {CATEGORIES_LIST.map((cat) => {
            const catStat = stats.categoryStats?.[cat.id];
            const answered = catStat?.answered || 0;
            const correct = catStat?.correct || 0;
            const pct = answered > 0 ? Math.round((correct / answered) * 100) : 0;

            return (
              <div key={cat.id} className="space-y-1">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-700">{cat.name[language]}</span>
                  <span className="text-slate-500">
                    {pct}% ({correct}/{answered})
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-orange-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges Showcase */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              <span>{t.badgesTitle}</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              {unlockedSet.size} of {BADGES.length} {t.unlocked}
            </p>
          </div>
          <span className="text-xs font-extrabold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
            {Math.round((unlockedSet.size / BADGES.length) * 100)}%
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {BADGES.map((badge) => {
            const isUnlocked = unlockedSet.has(badge.id);

            return (
              <div
                key={badge.id}
                className={`p-3.5 rounded-2xl border transition flex items-start gap-3 ${
                  isUnlocked
                    ? 'bg-gradient-to-br from-amber-50/60 to-orange-50/40 border-amber-300 shadow-2xs'
                    : 'bg-slate-50/70 border-slate-200 opacity-60'
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                    isUnlocked
                      ? 'bg-amber-500 text-white shadow-sm'
                      : 'bg-slate-200 text-slate-400'
                  }`}
                >
                  {isUnlocked ? getBadgeIcon(badge.icon) : <Lock className="w-5 h-5" />}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="font-extrabold text-xs text-slate-900 truncate">
                      {badge.name[language]}
                    </h4>
                    {isUnlocked && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    )}
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium leading-snug mt-0.5">
                    {badge.description[language]}
                  </p>
                  <span className="inline-block mt-1 text-[10px] text-slate-400 font-semibold bg-white/80 px-2 py-0.5 rounded border border-slate-200/60">
                    {badge.requirement}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
