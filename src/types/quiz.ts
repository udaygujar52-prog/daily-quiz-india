export type Language = 'en' | 'hi';

export type CategoryId = 'all' | 'india_gk' | 'history' | 'geography' | 'science' | 'sports';

export type Difficulty = 'easy' | 'medium' | 'hard' | 'all';

export interface LocalizedContent {
  question: string;
  options: [string, string, string, string];
  correctAnswerIndex: number;
  explanation: string;
}

export interface Question {
  id: string;
  category: Exclude<CategoryId, 'all'>;
  difficulty: 'easy' | 'medium' | 'hard';
  en: LocalizedContent;
  hi: LocalizedContent;
}

export interface QuizAnswer {
  questionId: string;
  selectedIndex: number;
  correctIndex: number;
  isCorrect: boolean;
  timeSpentSeconds: number;
}

export interface QuizSessionResult {
  id: string;
  timestamp: number;
  category: CategoryId;
  difficulty: Difficulty;
  totalQuestions: number;
  score: number;
  percentage: number;
  timeTakenSeconds: number;
  answers: QuizAnswer[];
  isDailyQuiz: boolean;
}

export interface UserStats {
  totalQuizzesTaken: number;
  totalQuestionsAnswered: number;
  totalCorrect: number;
  bestScore: number;
  totalPoints: number;
  currentStreak: number;
  bestStreak: number;
  lastPlayedDate: string; // YYYY-MM-DD
  dailyCompletedDates: string[];
  categoryStats: Record<string, { answered: number; correct: number }>;
  unlockedBadgeIds: string[];
}

export interface Badge {
  id: string;
  name: { en: string; hi: string };
  description: { en: string; hi: string };
  icon: string;
  requirement: string;
  isUnlocked?: boolean;
}

export interface CategoryInfo {
  id: Exclude<CategoryId, 'all'>;
  name: { en: string; hi: string };
  icon: string;
  color: string;
  description: { en: string; hi: string };
}
