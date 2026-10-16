import { Badge, QuizSessionResult, UserStats } from '../types/quiz';

export const BADGES: Badge[] = [
  {
    id: 'first_step',
    name: { en: 'First Step', hi: 'पहला कदम' },
    description: { en: 'Completed your very first quiz!', hi: 'अपनी पहली क्विज सफलतापूर्वक पूरी की!' },
    icon: 'Footprints',
    requirement: 'Complete 1 quiz'
  },
  {
    id: 'perfect_10',
    name: { en: 'Flawless Master', hi: 'शत-प्रतिशत दक्ष' },
    description: { en: 'Scored a perfect 10/10 (100%) in a quiz!', hi: 'क्विज में 10 में से पूरे 10 अंक (100%) प्राप्त किए!' },
    icon: 'Crown',
    requirement: 'Score 10/10 on any quiz'
  },
  {
    id: 'streak_3',
    name: { en: '3-Day Fire', hi: '3-दिवसीय स्ट्रीक' },
    description: { en: 'Practiced for 3 consecutive days!', hi: 'लगातार 3 दिन तक क्विज में भाग लिया!' },
    icon: 'Flame',
    requirement: 'Reach a 3-day streak'
  },
  {
    id: 'streak_7',
    name: { en: 'Week Warrior', hi: 'साप्ताहिक महारथी' },
    description: { en: 'Maintained a 7-day learning streak!', hi: '7 दिनों तक लगातार दैनिक अध्ययन जारी रखा!' },
    icon: 'Sparkles',
    requirement: 'Reach a 7-day streak'
  },
  {
    id: 'bharat_scholar',
    name: { en: 'Bharat Scholar', hi: 'भारत रत्न अध्येता' },
    description: { en: 'Mastered Indian history & symbols with top marks!', hi: 'भारत सामान्य ज्ञान में उत्कृष्ट अंक हासिल किए!' },
    icon: 'GraduationCap',
    requirement: 'Score 8+ in India GK'
  },
  {
    id: 'science_whiz',
    name: { en: 'Vigyan Guru', hi: 'विज्ञान गुरु' },
    description: { en: 'Demonstrated exceptional scientific acumen!', hi: 'विज्ञान वर्ग में शानदार स्कोर अर्जित किया!' },
    icon: 'Atom',
    requirement: 'Score 8+ in Science'
  },
  {
    id: 'century_club',
    name: { en: 'Century Club', hi: 'शतक क्लब' },
    description: { en: 'Answered over 50 total questions!', hi: 'कुल 50 से अधिक प्रश्नों के उत्तर दिए!' },
    icon: 'Award',
    requirement: 'Answer 50 questions'
  },
  {
    id: 'speed_demon',
    name: { en: 'Lightning Mind', hi: 'तेजस्वी मन' },
    description: { en: 'Completed a quiz in under 75 seconds!', hi: '75 सेकंड से कम समय में क्विज पूर्ण की!' },
    icon: 'Zap',
    requirement: 'Complete quiz in < 75s with 7+ score'
  }
];

export function checkNewBadges(stats: UserStats, latestResult: QuizSessionResult): string[] {
  const newUnlocked: string[] = [];
  const currentUnlocked = new Set(stats.unlockedBadgeIds || []);

  if (!currentUnlocked.has('first_step') && stats.totalQuizzesTaken >= 1) {
    newUnlocked.push('first_step');
  }

  if (!currentUnlocked.has('perfect_10') && latestResult.score === 10) {
    newUnlocked.push('perfect_10');
  }

  if (!currentUnlocked.has('streak_3') && stats.currentStreak >= 3) {
    newUnlocked.push('streak_3');
  }

  if (!currentUnlocked.has('streak_7') && stats.currentStreak >= 7) {
    newUnlocked.push('streak_7');
  }

  if (
    !currentUnlocked.has('bharat_scholar') &&
    (latestResult.category === 'india_gk' || latestResult.category === 'all') &&
    latestResult.score >= 8
  ) {
    newUnlocked.push('bharat_scholar');
  }

  if (
    !currentUnlocked.has('science_whiz') &&
    latestResult.category === 'science' &&
    latestResult.score >= 8
  ) {
    newUnlocked.push('science_whiz');
  }

  if (!currentUnlocked.has('century_club') && stats.totalQuestionsAnswered >= 50) {
    newUnlocked.push('century_club');
  }

  if (
    !currentUnlocked.has('speed_demon') &&
    latestResult.timeTakenSeconds <= 75 &&
    latestResult.score >= 7
  ) {
    newUnlocked.push('speed_demon');
  }

  return newUnlocked;
}
