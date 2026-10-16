import { SAMPLE_QUESTIONS } from '../data/questions';
import { CategoryId, Difficulty, Question } from '../types/quiz';
import { getTodayDateString } from './storage';

// Simple pseudo-random number generator seeded by string
function pseudoRandom(seedStr: string): () => number {
  let h = 1779033703 ^ seedStr.length;
  for (let i = 0; i < seedStr.length; i++) {
    h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353);
    h = (h << 13) | (h >>> 19);
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507);
    h = Math.imul(h ^ (h >>> 13), 3266489909);
    return ((h ^= h >>> 16) >>> 0) / 4294967296;
  };
}

export function getDailyQuizQuestions(): Question[] {
  const today = getTodayDateString();
  const rng = pseudoRandom('daily-quiz-india-' + today);

  const pool = [...SAMPLE_QUESTIONS];
  // Shuffle deterministically based on date
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  // Pick exactly 10 diverse questions
  return pool.slice(0, 10);
}

export function getQuizQuestions(
  category: CategoryId = 'all',
  difficulty: Difficulty = 'all',
  count: number = 10
): Question[] {
  let pool = [...SAMPLE_QUESTIONS];

  if (category !== 'all') {
    pool = pool.filter((q) => q.category === category);
  }

  if (difficulty !== 'all') {
    pool = pool.filter((q) => q.difficulty === difficulty);
  }

  // If pool has fewer than count questions due to strict filter, fallback to category with any difficulty
  if (pool.length < count && category !== 'all') {
    pool = SAMPLE_QUESTIONS.filter((q) => q.category === category);
  }

  // Shuffle randomly
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  return pool.slice(0, Math.min(count, pool.length));
}
