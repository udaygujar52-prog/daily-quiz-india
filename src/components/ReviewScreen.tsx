import React, { useState } from 'react';
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  Lightbulb, 
  Filter
} from 'lucide-react';
import { Language, Question, QuizSessionResult } from '../types/quiz';
import { TRANSLATIONS } from '../data/translations';
import { SAMPLE_QUESTIONS } from '../data/questions';

interface ReviewScreenProps {
  result: QuizSessionResult;
  language: Language;
  onBack: () => void;
}

export const ReviewScreen: React.FC<ReviewScreenProps> = ({
  result,
  language,
  onBack
}) => {
  const t = TRANSLATIONS[language];
  const [filter, setFilter] = useState<'all' | 'incorrect' | 'correct'>('all');

  // Pair each answer with its full question definition
  const reviewItems = result.answers.map((ans, idx) => {
    const questionObj = SAMPLE_QUESTIONS.find((q) => q.id === ans.questionId);
    return {
      index: idx + 1,
      answer: ans,
      question: questionObj
    };
  }).filter((item) => item.question !== undefined) as {
    index: number;
    answer: QuizSessionResult['answers'][0];
    question: Question;
  }[];

  const filteredItems = reviewItems.filter((item) => {
    if (filter === 'incorrect') return !item.answer.isCorrect;
    if (filter === 'correct') return item.answer.isCorrect;
    return true;
  });

  return (
    <div className="flex-1 flex flex-col bg-slate-100 pb-20">
      {/* Header bar */}
      <div className="bg-white border-b border-slate-200 px-4 py-3 sticky top-0 z-20">
        <div className="max-w-xl mx-auto flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 -ml-1 py-1 px-2 rounded-lg hover:bg-slate-100 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{t.backToHome}</span>
          </button>
          <h2 className="font-extrabold text-sm text-slate-900">{t.reviewTitle}</h2>
          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
            {result.score}/{result.totalQuestions}
          </span>
        </div>

        {/* Filter buttons */}
        <div className="max-w-xl mx-auto flex items-center gap-2 mt-2.5 overflow-x-auto pb-1">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition ${
              filter === 'all'
                ? 'bg-slate-900 text-white shadow-2xs'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            {t.filterAll} ({reviewItems.length})
          </button>
          <button
            onClick={() => setFilter('incorrect')}
            className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition flex items-center gap-1 ${
              filter === 'incorrect'
                ? 'bg-rose-600 text-white shadow-2xs'
                : 'bg-rose-50 text-rose-700 hover:bg-rose-100'
            }`}
          >
            <XCircle className="w-3.5 h-3.5" />
            <span>{t.filterIncorrect} ({reviewItems.filter((i) => !i.answer.isCorrect).length})</span>
          </button>
          <button
            onClick={() => setFilter('correct')}
            className={`px-3 py-1 rounded-lg text-xs font-bold whitespace-nowrap transition flex items-center gap-1 ${
              filter === 'correct'
                ? 'bg-emerald-600 text-white shadow-2xs'
                : 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
            }`}
          >
            <CheckCircle className="w-3.5 h-3.5" />
            <span>{t.filterCorrect} ({reviewItems.filter((i) => i.answer.isCorrect).length})</span>
          </button>
        </div>
      </div>

      {/* Review List */}
      <div className="flex-1 p-4 max-w-xl mx-auto w-full space-y-4">
        {filteredItems.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center border border-slate-200">
            <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
            <p className="text-sm font-bold text-slate-700">
              {filter === 'incorrect'
                ? language === 'hi'
                  ? 'बधाई! आपका कोई भी उत्तर गलत नहीं था!'
                  : 'Awesome! No mistakes found in this quiz.'
                : 'No questions match the current filter.'}
            </p>
          </div>
        ) : (
          filteredItems.map(({ index, answer, question }) => {
            const localizedQ = question[language] || question.en;
            const isCorrect = answer.isCorrect;

            return (
              <div
                key={question.id}
                className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs"
              >
                {/* Question Top Info */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-md bg-slate-100 text-slate-700 font-extrabold text-xs flex items-center justify-center">
                      #{index}
                    </span>
                    <span className="text-[10px] uppercase font-bold text-slate-500 bg-slate-50 px-2 py-0.5 rounded">
                      {question.category.replace('_', ' ')}
                    </span>
                  </div>
                  {isCorrect ? (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                      <CheckCircle className="w-3.5 h-3.5" />
                      +1 pt
                    </span>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                      <XCircle className="w-3.5 h-3.5" />
                      0 pt
                    </span>
                  )}
                </div>

                {/* Question title */}
                <h3 className="text-sm font-bold text-slate-900 leading-snug mb-3">
                  {localizedQ.question}
                </h3>

                {/* Selected vs Correct Options */}
                <div className="space-y-1.5 mb-3 text-xs">
                  {localizedQ.options.map((optText, optIdx) => {
                    const isSelected = answer.selectedIndex === optIdx;
                    const isTheCorrectOne = answer.correctIndex === optIdx;

                    let optStyle = 'bg-slate-50 border-slate-200 text-slate-600';

                    if (isTheCorrectOne) {
                      optStyle = 'bg-emerald-50 border-emerald-400 text-emerald-900 font-bold';
                    } else if (isSelected && !isCorrect) {
                      optStyle = 'bg-rose-50 border-rose-300 text-rose-900 font-medium line-through';
                    }

                    return (
                      <div
                        key={optIdx}
                        className={`p-2.5 rounded-xl border flex items-center justify-between ${optStyle}`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-5 h-5 rounded-md text-[10px] font-bold flex items-center justify-center bg-white/80 border border-slate-200">
                            {['A', 'B', 'C', 'D'][optIdx]}
                          </span>
                          <span>{optText}</span>
                        </div>
                        {isTheCorrectOne && (
                          <span className="text-[10px] font-extrabold uppercase text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded">
                            {language === 'hi' ? 'सही उत्तर' : 'Correct'}
                          </span>
                        )}
                        {isSelected && !isTheCorrectOne && (
                          <span className="text-[10px] font-extrabold uppercase text-rose-700 bg-rose-100/80 px-2 py-0.5 rounded">
                            {language === 'hi' ? 'आपका चयन' : 'Your Pick'}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="p-3 bg-amber-50/80 rounded-xl border border-amber-200 text-xs">
                  <div className="flex items-center gap-1 font-bold text-amber-900 mb-0.5">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                    <span>{t.explanationTitle}</span>
                  </div>
                  <p className="text-amber-950 font-normal leading-relaxed text-[11px]">
                    {localizedQ.explanation}
                  </p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
