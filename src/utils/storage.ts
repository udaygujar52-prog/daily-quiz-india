import { QuizSessionResult, UserStats } from '../types/quiz';
import { checkNewBadges } from './badges';

const STATS_KEY = 'daily_quiz_india_stats_v1';
const HISTORY_KEY = 'daily_quiz_india_history_v1';
const SETTINGS_KEY = 'daily_quiz_india_settings_v1';

export interface AppSettings {
  language: 'en' | 'hi';
  soundEnabled: boolean;
  isMobileDeviceFrame: boolean;
}

const DEFAULT_STATS: UserStats = {
  totalQuizzesTaken: 0,
  totalQuestionsAnswered: 0,
  totalCorrect: 0,
  bestScore: 0,
  totalPoints: 0,
  currentStreak: 0,
  bestStreak: 0,
  lastPlayedDate: '',
  dailyCompletedDates: [],
  categoryStats: {},
  unlockedBadgeIds: []
};

const DEFAULT_SETTINGS: AppSettings = {
  language: 'en',
  soundEnabled: true,
  isMobileDeviceFrame: false
};

export function getTodayDateString(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getYesterdayDateString(): string {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return DEFAULT_STATS;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_STATS, ...parsed };
  } catch {
    return DEFAULT_STATS;
  }
}

export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch {
    // Ignore storage quota errors
  }
}

export function loadSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    return { ...DEFAULT_SETTINGS, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

export function saveSettings(settings: AppSettings): void {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // Ignore storage errors
  }
}

export function loadQuizHistory(): QuizSessionResult[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function recordQuizCompletion(result: QuizSessionResult): {
  updatedStats: UserStats;
  newBadges: string[];
} {
  const prevStats = loadUserStats();
  const today = getTodayDateString();
  const yesterday = getYesterdayDateString();

  let streak = prevStats.currentStreak;
  if (prevStats.lastPlayedDate === today) {
    // Already played today, maintain streak
  } else if (prevStats.lastPlayedDate === yesterday) {
    streak += 1;
  } else {
    streak = 1;
  }

  const bestStreak = Math.max(streak, prevStats.bestStreak || 0);
  const bestScore = Math.max(prevStats.bestScore, result.score);

  // Update category stats
  const catStats = { ...prevStats.categoryStats };
  const catKey = result.category;
  if (!catStats[catKey]) {
    catStats[catKey] = { answered: 0, correct: 0 };
  }
  catStats[catKey].answered += result.totalQuestions;
  catStats[catKey].correct += result.score;

  // Daily challenge tracking
  const dailyDates = new Set(prevStats.dailyCompletedDates || []);
  if (result.isDailyQuiz) {
    dailyDates.add(today);
  }

  const updatedStats: UserStats = {
    ...prevStats,
    totalQuizzesTaken: prevStats.totalQuizzesTaken + 1,
    totalQuestionsAnswered: prevStats.totalQuestionsAnswered + result.totalQuestions,
    totalCorrect: prevStats.totalCorrect + result.score,
    bestScore,
    totalPoints: prevStats.totalPoints + result.score * 10,
    currentStreak: streak,
    bestStreak,
    lastPlayedDate: today,
    dailyCompletedDates: Array.from(dailyDates),
    categoryStats: catStats,
    unlockedBadgeIds: [...prevStats.unlockedBadgeIds]
  };

  // Check for badge unlocks
  const newBadges = checkNewBadges(updatedStats, result);
  if (newBadges.length > 0) {
    updatedStats.unlockedBadgeIds = Array.from(
      new Set([...updatedStats.unlockedBadgeIds, ...newBadges])
    );
  }

  saveUserStats(updatedStats);

  // Save history
  const history = loadQuizHistory();
  history.unshift(result);
  try {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(history.slice(0, 30)));
  } catch {
    // Ignore
  }

  return { updatedStats, newBadges };
}
