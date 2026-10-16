import React, { useState, useEffect } from 'react';
import { 
  X, 
  Clock, 
  CheckCircle, 
  XCircle, 
  ArrowRight, 
  Lightbulb, 
  Award,
  Sparkles
} from 'lucide-react';
import { CategoryId, Difficulty, Language, Question, QuizAnswer, QuizSessionResult } from '../types/quiz';
import { TRANSLATIONS } from '../data/translations';
import { playSound } from '../utils/audio';

interface QuizScreenProps {
  questions: Question[];
  category: CategoryId;
  difficulty: Difficulty;
  isDailyQuiz: boolean;
  language: Language;
  soundEnabled: boolean;
  onExit: () => void;
  onComplete: (result: QuizSessionResult) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  questions,
  category,
  difficulty,
  isDailyQuiz,
  language,
  soundEnabled,
  onExit,
  onComplete
}) => {
  const t = TRANSLATIONS[language];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [secondsElapsed, setSecondsElapsed] = useState(0);
  const [questionStartTime, setQuestionStartTime] = useState(Date.now());

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsElapsed((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentQuestion = questions[currentIndex];
  if (!currentQuestion) return null;

  const localizedQ = currentQuestion[language] || currentQuestion.en;
  const progressPercent = ((currentIndex + 1) / questions.length) * 100;

  const handleSelectOption = (index: number) => {
    if (hasAnswered) return; // Prevent double clicking / re-answering

    const timeSpent = Math.max(1, Math.round((Date.now() - questionStartTime) / 1000));
    const isCorrect = index === localizedQ.correctAnswerIndex;

    setSelectedOption(index);
    setHasAnswered(true);

    if (isCorrect) {
      setScore((prev) => prev + 1);
      playSound('correct', soundEnabled);
    } else {
      playSound('incorrect', soundEnabled);
    }

    const answerRecord: QuizAnswer = {
      questionId: currentQuestion.id,
      selectedIndex: index,
      correctIndex: localizedQ.correctAnswerIndex,
      isCorrect,
      timeSpentSeconds: timeSpent
    };

    setAnswers((prev) => [...prev, answerRecord]);
  };

  const handleNext = () => {
    playSound('click', soundEnabled);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
      setQuestionStartTime(Date.now());
    } else {
      // Completed!
      const finalScore = score + (selectedOption === localizedQ.correctAnswerIndex ? 0 : 0);
      const total = questions.length;
      const result: QuizSessionResult = {
        id: 'quiz_' + Date.now(),
        timestamp: Date.now(),
        category,
        difficulty,
        totalQuestions: total,
        score,
        percentage: Math.round((score / total) * 100),
        timeTakenSeconds: secondsElapsed,
        answers,
        isDailyQuiz
      };
      playSound('complete', soundEnabled);
      onComplete(result);
    }
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="flex-1 flex flex-col bg-slate-100">
      {/* Top Quiz App Bar */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-20">
        <div className="flex items-center justify-between mb-2.5">
          <button
            onClick={onExit}
            className="p-1.5 -ml-1.5 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 active:scale-95 transition"
            aria-label="Exit quiz"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Question Counter Pill */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 bg-slate-100 px-3 py-1 rounded-full">
              {t.question} {currentIndex + 1} {t.of} {questions.length}
            </span>
            {isDailyQuiz && (
              <span className="flex items-center gap-1 text-[11px] font-bold text-orange-700 bg-orange-100 px-2 py-0.5 rounded-full">
                <Sparkles className="w-3 h-3 text-orange-600" />
                Daily
              </span>
            )}
          </div>

          {/* Timer & Current Score */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-slate-50 px-2 py-1 rounded-md border border-slate-200">
              <Clock className="w-3.5 h-3.5 text-slate-500" />
              <span>{formatTime(secondsElapsed)}</span>
            </div>
            <div className="flex items-center gap-1 text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
              <Award className="w-3.5 h-3.5" />
              <span>{score}</span>
            </div>
          </div>
        </div>

        {/* Animated Progress Bar */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-orange-500 to-emerald-500 h-full rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Main Quiz Question & Options Area */}
      <div className="flex-1 p-4 max-w-xl mx-auto w-full pb-28">
        {/* Question Header Card */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm mb-4">
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[11px] font-bold uppercase tracking-wider text-orange-600 bg-orange-50 px-2.5 py-1 rounded-lg">
              {currentQuestion.category.replace('_', ' ')}
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
              {currentQuestion.difficulty}
            </span>
          </div>

          <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
            {localizedQ.question}
          </h2>
        </div>

        {/* Four Options */}
        <div className="space-y-2.5 mb-4">
          {localizedQ.options.map((optionText, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrectAnswer = idx === localizedQ.correctAnswerIndex;

            let buttonStyle = 'bg-white border-slate-200 text-slate-800 hover:border-orange-300 hover:bg-orange-50/30';
            let badgeStyle = 'bg-slate-100 text-slate-700 border-slate-200';
            let iconComponent = null;

            if (hasAnswered) {
              if (isCorrectAnswer) {
                // Correct answer is always green
                buttonStyle = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold ring-2 ring-emerald-500/30';
                badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                iconComponent = <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />;
              } else if (isSelected && !isCorrectAnswer) {
                // User picked wrong option
                buttonStyle = 'bg-rose-50 border-rose-500 text-rose-950 ring-2 ring-rose-500/30';
                badgeStyle = 'bg-rose-600 text-white border-rose-600';
                iconComponent = <XCircle className="w-5 h-5 text-rose-600 shrink-0" />;
              } else {
                // Other options disabled
                buttonStyle = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
              }
            }

            return (
              <button
                key={idx}
                disabled={hasAnswered}
                onClick={() => handleSelectOption(idx)}
                className={`w-full text-left p-3.5 rounded-xl border-2 transition-all flex items-center justify-between gap-3 active:scale-[0.99] cursor-pointer ${buttonStyle}`}
              >
                <div className="flex items-center gap-3">
                  <span
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center font-bold text-xs shrink-0 ${badgeStyle}`}
                  >
                    {optionLetters[idx]}
                  </span>
                  <span className="text-sm font-medium leading-snug">{optionText}</span>
                </div>
                {iconComponent}
              </button>
            );
          })}
        </div>

        {/* Instant Feedback & Educational Explanation Card */}
        {hasAnswered && (
          <div className="animate-in fade-in slide-in-from-bottom-3 duration-200">
            {/* Feedback alert banner */}
            <div
              className={`p-3 rounded-xl mb-3 flex items-center gap-2.5 font-bold text-xs ${
                selectedOption === localizedQ.correctAnswerIndex
                  ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                  : 'bg-rose-100 text-rose-800 border border-rose-300'
              }`}
            >
              {selectedOption === localizedQ.correctAnswerIndex ? (
                <>
                  <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{t.correctFeedback}</span>
                </>
              ) : (
                <>
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>
                    {t.incorrectFeedback} {t.correctAnswerIs}{' '}
                    <strong>{localizedQ.options[localizedQ.correctAnswerIndex]}</strong>
                  </span>
                </>
              )}
            </div>

            {/* Detailed Explanation Box */}
            <div className="bg-amber-50/90 border border-amber-200 rounded-xl p-3.5 shadow-2xs">
              <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900 mb-1">
                <Lightbulb className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{t.explanationTitle}</span>
              </div>
              <p className="text-xs text-amber-950 leading-relaxed font-medium">
                {localizedQ.explanation}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Fixed Bottom Next Button */}
      {hasAnswered && (
        <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 shadow-lg z-20">
          <div className="max-w-xl mx-auto flex items-center justify-between gap-3">
            <span className="text-xs font-semibold text-slate-500">
              {currentIndex + 1 === questions.length ? t.finishQuiz : t.nextQuestion}
            </span>
            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-extrabold text-sm shadow-md shadow-orange-500/20 active:scale-95 transition"
            >
              <span>{currentIndex + 1 === questions.length ? t.finishQuiz : t.nextQuestion}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
