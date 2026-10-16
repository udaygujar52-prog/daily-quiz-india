import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Trophy, 
  RotateCcw, 
  Home, 
  BookOpenCheck, 
  Share2, 
  Clock, 
  Target, 
  Award, 
  Check, 
  Sparkles,
  Flame
} from 'lucide-react';
import { Language, QuizSessionResult, UserStats } from '../types/quiz';
import { TRANSLATIONS } from '../data/translations';
import { BADGES } from '../utils/badges';

interface ResultScreenProps {
  result: QuizSessionResult;
  stats: UserStats;
  newBadges: string[];
  language: Language;
  onPlayAgain: () => void;
  onReviewAnswers: () => void;
  onHome: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  result,
  stats,
  newBadges,
  language,
  onPlayAgain,
  onReviewAnswers,
  onHome
}) => {
  const t = TRANSLATIONS[language];
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Fire celebratory confetti if score >= 60%
    if (result.percentage >= 60) {
      try {
        confetti({
          particleCount: 65,
          spread: 60,
          origin: { y: 0.6 }
        });
      } catch {
        // Fallback gracefully
      }
    }
  }, [result.percentage]);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    if (mins === 0) {
      return `${secs}s`;
    }
    return `${mins}m ${secs}s`;
  };

  const handleShare = async () => {
    const shareText = `🇮🇳 Daily Quiz India 🇮🇳\n🎯 Score: ${result.score}/${result.totalQuestions} (${result.percentage}%)\n⏱️ Time: ${formatTime(result.timeTakenSeconds)}\n🔥 Daily Streak: ${stats.currentStreak} Days\n⭐ Points: +${result.score * 10} pts\n\nTest your General Knowledge daily for free!`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Daily Quiz India Result',
          text: shareText
        });
        return;
      } catch {
        // If user cancelled, fall through to clipboard
      }
    }

    try {
      await navigator.clipboard.writeText(shareText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Ignore
    }
  };

  // Performance headline
  const getFeedbackHeader = () => {
    if (result.percentage >= 90) {
      return {
        title: language === 'hi' ? 'अद्भुत प्रदर्शन! 🎉' : 'Outstanding Performance! 🎉',
        subtitle: language === 'hi' ? 'आपने लगभग सभी प्रश्नों के सही उत्तर दिए हैं।' : 'You demonstrated exceptional General Knowledge!'
      };
    } else if (result.percentage >= 60) {
      return {
        title: language === 'hi' ? 'शानदार प्रयास! 🌟' : 'Great Job! 🌟',
        subtitle: language === 'hi' ? 'आपका सामान्य ज्ञान बहुत अच्छा है।' : 'Solid knowledge! Keep practicing daily to master all subjects.'
      };
    } else {
      return {
        title: language === 'hi' ? 'अच्छा प्रयास! 📚' : 'Good Effort! 📚',
        subtitle: language === 'hi' ? 'उत्तरों की समीक्षा करें और दोबारा प्रयास करें।' : 'Review the explanations below and try again to improve your score!'
      };
    }
  };

  const feedback = getFeedbackHeader();

  return (
    <div className="flex-1 p-4 max-w-lg mx-auto w-full pb-24">
      {/* Result Card */}
      <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-md text-center mb-4 relative overflow-hidden">
        {/* Top colorful accent bar */}
        <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 via-amber-400 to-emerald-500" />

        <div className="w-16 h-16 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto mb-3 shadow-inner">
          <Trophy className="w-9 h-9" />
        </div>

        <h2 className="text-xl font-extrabold text-slate-900 mb-1">
          {feedback.title}
        </h2>
        <p className="text-xs text-slate-500 max-w-xs mx-auto mb-5 font-medium">
          {feedback.subtitle}
        </p>

        {/* Big Score Display */}
        <div className="py-4 px-6 bg-slate-50 rounded-2xl border border-slate-100 mb-5 inline-block w-full">
          <div className="text-4xl font-black text-slate-900 tracking-tight">
            {result.score} <span className="text-2xl font-bold text-slate-400">/ {result.totalQuestions}</span>
          </div>
          <span className="text-xs font-bold text-emerald-600 mt-1 inline-block">
            {result.percentage}% {t.accuracy}
          </span>
        </div>

        {/* Metric stats grid */}
        <div className="grid grid-cols-3 gap-2 text-left mb-4">
          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-500" />
              {t.timeTaken}
            </span>
            <span className="text-xs font-bold text-slate-800 block mt-0.5">
              {formatTime(result.timeTakenSeconds)}
            </span>
          </div>

          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
              <Award className="w-3 h-3 text-amber-500" />
              {t.points}
            </span>
            <span className="text-xs font-bold text-amber-700 block mt-0.5">
              +{result.score * 10} pts
            </span>
          </div>

          <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <span className="text-[10px] text-slate-400 font-medium flex items-center gap-1">
              <Flame className="w-3 h-3 text-orange-500" />
              {t.streak}
            </span>
            <span className="text-xs font-bold text-orange-600 block mt-0.5">
              {stats.currentStreak}d
            </span>
          </div>
        </div>

        {/* Badges unlocked alert if any */}
        {newBadges.length > 0 && (
          <div className="mb-4 p-3 bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl border border-amber-200 text-left">
            <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>{language === 'hi' ? 'नई उपलब्धि अनलॉक हुई!' : 'New Badge Unlocked!'}</span>
            </div>
            {newBadges.map((badgeId) => {
              const b = BADGES.find((x) => x.id === badgeId);
              if (!b) return null;
              return (
                <div key={badgeId} className="flex items-center gap-2 text-xs text-amber-950 font-semibold mt-1">
                  <span className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs">
                    🏆
                  </span>
                  <span>{b.name[language]}: {b.description[language]}</span>
                </div>
              );
            })}
          </div>
        )}

        {/* Share Button */}
        <button
          onClick={handleShare}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs active:scale-98 transition mb-2"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-700">{t.scoreCopied}</span>
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4 text-slate-600" />
              <span>{t.shareScore}</span>
            </>
          )}
        </button>
      </div>

      {/* Main Action Buttons */}
      <div className="space-y-2.5">
        <button
          onClick={onReviewAnswers}
          className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-sm shadow-md shadow-indigo-500/20 active:scale-98 transition"
        >
          <BookOpenCheck className="w-4 h-4" />
          <span>{t.reviewAnswers}</span>
        </button>

        <div className="grid grid-cols-2 gap-2.5">
          <button
            onClick={onPlayAgain}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-xs active:scale-98 transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{t.playAgain}</span>
          </button>

          <button
            onClick={onHome}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 font-bold text-xs shadow-2xs active:scale-98 transition"
          >
            <Home className="w-4 h-4" />
            <span>{t.backToHome}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
