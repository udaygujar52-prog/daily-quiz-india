import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Eye, 
  EyeOff, 
  Download, 
  CheckCircle, 
  Sparkles,
  HelpCircle
} from 'lucide-react';
import { CategoryId, Difficulty, Language, Question } from '../types/quiz';
import { TRANSLATIONS } from '../data/translations';
import { SAMPLE_QUESTIONS, CATEGORIES_LIST } from '../data/questions';

interface QuestionBankScreenProps {
  language: Language;
}

export const QuestionBankScreen: React.FC<QuestionBankScreenProps> = ({ language }) => {
  const t = TRANSLATIONS[language];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('all');
  const [revealedIds, setRevealedIds] = useState<Set<string>>(new Set());
  const [copiedJson, setCopiedJson] = useState(false);

  const toggleReveal = (id: string) => {
    setRevealedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleRevealAll = () => {
    if (revealedIds.size === filteredQuestions.length) {
      setRevealedIds(new Set());
    } else {
      setRevealedIds(new Set(filteredQuestions.map((q) => q.id)));
    }
  };

  const filteredQuestions = SAMPLE_QUESTIONS.filter((q) => {
    if (selectedCategory !== 'all' && q.category !== selectedCategory) return false;
    if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;

    if (searchQuery.trim() !== '') {
      const qText = `${q.en.question} ${q.hi.question} ${q.en.explanation} ${q.hi.explanation}`.toLowerCase();
      if (!qText.includes(searchQuery.toLowerCase())) {
        return false;
      }
    }

    return true;
  });

  const exportQuestionsJSON = () => {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(SAMPLE_QUESTIONS, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute('href', dataStr);
    downloadAnchor.setAttribute('download', 'daily_quiz_india_question_bank.json');
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2500);
  };

  return (
    <div className="flex-1 p-4 max-w-xl mx-auto w-full pb-24 space-y-4">
      {/* Top Banner */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div>
            <h2 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-indigo-600" />
              <span>{t.studyTitle}</span>
            </h2>
            <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed">
              {t.studyDesc}
            </p>
          </div>
          <button
            onClick={exportQuestionsJSON}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition shrink-0 active:scale-95"
            title="Download JSON Question Bank"
          >
            <Download className="w-3.5 h-3.5 text-slate-600" />
            <span>{copiedJson ? 'Saved!' : 'JSON'}</span>
          </button>
        </div>

        {/* Search input */}
        <div className="relative mb-3">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-9 pr-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.allCategories}
          </button>
          {CATEGORIES_LIST.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition ${
                selectedCategory === c.id
                  ? 'bg-orange-600 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {c.name[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Control bar */}
      <div className="flex items-center justify-between text-xs px-1 text-slate-500 font-semibold">
        <span>
          {filteredQuestions.length} {language === 'hi' ? 'प्रश्न उपलब्ध' : 'questions found'}
        </span>
        <button
          onClick={handleRevealAll}
          className="text-orange-600 hover:text-orange-700 flex items-center gap-1 font-bold"
        >
          {revealedIds.size === filteredQuestions.length ? (
            <>
              <EyeOff className="w-3.5 h-3.5" />
              <span>{t.hideAnswer}</span>
            </>
          ) : (
            <>
              <Eye className="w-3.5 h-3.5" />
              <span>{t.showAnswer}</span>
            </>
          )}
        </button>
      </div>

      {/* Questions list */}
      <div className="space-y-3">
        {filteredQuestions.map((q, idx) => {
          const loc = q[language] || q.en;
          const isRevealed = revealedIds.has(q.id);

          return (
            <div
              key={q.id}
              className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs"
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 font-black text-xs flex items-center justify-center">
                    #{idx + 1}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded">
                    {q.category.replace('_', ' ')}
                  </span>
                </div>
                <span className="text-[10px] uppercase font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                  {q.difficulty}
                </span>
              </div>

              <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug mb-3">
                {loc.question}
              </h3>

              {/* 4 Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 mb-3 text-xs">
                {loc.options.map((opt, optIdx) => {
                  const isCorrect = isRevealed && optIdx === loc.correctAnswerIndex;
                  return (
                    <div
                      key={optIdx}
                      className={`p-2 rounded-xl border flex items-center gap-2 ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-bold'
                          : 'bg-slate-50/70 border-slate-200 text-slate-700'
                      }`}
                    >
                      <span className="w-5 h-5 rounded-md text-[10px] font-bold flex items-center justify-center bg-white border border-slate-200 shrink-0">
                        {['A', 'B', 'C', 'D'][optIdx]}
                      </span>
                      <span className="truncate">{opt}</span>
                    </div>
                  );
                })}
              </div>

              {/* Reveal toggle button */}
              <button
                onClick={() => toggleReveal(q.id)}
                className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-xl transition"
              >
                {isRevealed ? (
                  <>
                    <EyeOff className="w-3.5 h-3.5" />
                    <span>{t.hideAnswer}</span>
                  </>
                ) : (
                  <>
                    <Eye className="w-3.5 h-3.5" />
                    <span>{t.showAnswer}</span>
                  </>
                )}
              </button>

              {/* Explanation Note */}
              {isRevealed && (
                <div className="mt-2.5 p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs animate-in fade-in duration-150">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-amber-900 mb-0.5">
                    <Sparkles className="w-3 h-3 text-amber-600" />
                    <span>
                      {t.correctAnswerIs} {loc.options[loc.correctAnswerIndex]}
                    </span>
                  </div>
                  <p className="text-[11px] text-amber-950 leading-relaxed font-normal">
                    {loc.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
