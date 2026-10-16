import React from 'react';
import { 
  Trophy, 
  Medal, 
  Flame, 
  Sparkles, 
  User, 
  ShieldCheck, 
  Award 
} from 'lucide-react';
import { Language, UserStats } from '../types/quiz';
import { TRANSLATIONS } from '../data/translations';

interface LeaderboardScreenProps {
  stats: UserStats;
  language: Language;
}

interface LeaderboardEntry {
  rank: number;
  name: string;
  location: string;
  points: number;
  streak: number;
  isUser?: boolean;
}

export const LeaderboardScreen: React.FC<LeaderboardScreenProps> = ({ stats, language }) => {
  const t = TRANSLATIONS[language];

  // Base list of simulated Indian learners
  const peerList: Omit<LeaderboardEntry, 'rank'>[] = [
    { name: 'Aarav Sharma', location: 'Jaipur, RJ', points: 940, streak: 12 },
    { name: 'Priya Patel', location: 'Ahmedabad, GJ', points: 880, streak: 9 },
    { name: 'Rohit Verma', location: 'Lucknow, UP', points: 790, streak: 8 },
    { name: 'Ananya Iyer', location: 'Bengaluru, KA', points: 670, streak: 6 },
    { name: 'Aditya Singh', location: 'Patna, BR', points: 590, streak: 5 },
    { name: 'Neha Mukherjee', location: 'Kolkata, WB', points: 510, streak: 4 },
    { name: 'Kavita Joshi', location: 'Dehradun, UK', points: 430, streak: 4 },
    { name: 'Manish Meena', location: 'Bhopal, MP', points: 360, streak: 3 },
    { name: 'Siddharth Rao', location: 'Hyderabad, TS', points: 290, streak: 2 },
    { name: 'Pooja Nair', location: 'Kochi, KL', points: 220, streak: 2 }
  ];

  // Insert current user into the ranking based on points
  const userEntry = {
    name: language === 'hi' ? 'आप (शिक्षार्थी)' : 'You (Learner)',
    location: language === 'hi' ? 'भारत' : 'India',
    points: stats.totalPoints,
    streak: stats.currentStreak,
    isUser: true
  };

  const combined = [...peerList, userEntry].sort((a, b) => b.points - a.points);
  const rankedList: LeaderboardEntry[] = combined.map((entry, index) => ({
    ...entry,
    rank: index + 1
  }));

  const userRank = rankedList.find((entry) => entry.isUser)?.rank || 1;

  const getRankBadge = (rank: number) => {
    if (rank === 1) return <span className="text-xl">🥇</span>;
    if (rank === 2) return <span className="text-xl">🥈</span>;
    if (rank === 3) return <span className="text-xl">🥉</span>;
    return <span className="text-xs font-black text-slate-500">#{rank}</span>;
  };

  return (
    <div className="flex-1 p-4 max-w-xl mx-auto w-full pb-24 space-y-4">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-5 text-white shadow-md relative overflow-hidden">
        <div className="relative z-10 flex items-center justify-between">
          <div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/20 text-white">
              <Trophy className="w-3 h-3 text-amber-200" />
              Community
            </span>
            <h2 className="text-xl font-extrabold mt-1.5">{t.leaderboardTitle}</h2>
            <p className="text-xs text-orange-100 max-w-xs mt-0.5">
              {language === 'hi'
                ? 'नियमित अभ्यास करें और शीर्ष रैंक प्राप्त करें!'
                : 'Solve daily quizzes and rise through the learning ranks!'}
            </p>
          </div>
          <div className="text-center bg-white/15 backdrop-blur-xs px-3.5 py-2.5 rounded-2xl border border-white/20">
            <span className="text-[10px] uppercase font-bold text-orange-100 block">{t.rank}</span>
            <span className="text-xl font-black text-white">#{userRank}</span>
          </div>
        </div>
      </div>

      {/* Safety Notice */}
      <div className="p-3 bg-white rounded-2xl border border-slate-200 text-slate-600 text-xs flex items-center gap-2">
        <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
        <span className="text-[11px] font-medium leading-relaxed">{t.leaderboardNotice}</span>
      </div>

      {/* Ranking List */}
      <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs divide-y divide-slate-100">
        {rankedList.map((entry) => {
          return (
            <div
              key={entry.rank}
              className={`p-3.5 flex items-center justify-between gap-3 transition ${
                entry.isUser
                  ? 'bg-orange-50/70 border-l-4 border-l-orange-500'
                  : 'hover:bg-slate-50/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 flex items-center justify-center text-center shrink-0">
                  {getRankBadge(entry.rank)}
                </div>

                <div className="w-9 h-9 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center shrink-0">
                  {entry.isUser ? (
                    <User className="w-5 h-5 text-orange-600" />
                  ) : (
                    <span className="text-xs font-bold text-slate-600">
                      {entry.name.charAt(0)}
                    </span>
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h4
                      className={`text-xs font-bold ${
                        entry.isUser ? 'text-orange-950 font-black' : 'text-slate-800'
                      }`}
                    >
                      {entry.name}
                    </h4>
                    {entry.isUser && (
                      <span className="text-[9px] uppercase font-extrabold bg-orange-200 text-orange-900 px-1.5 py-0.2 rounded-full">
                        YOU
                      </span>
                    )}
                  </div>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {entry.location}
                  </span>
                </div>
              </div>

              {/* Points & Streak */}
              <div className="text-right">
                <span className="text-xs font-black text-slate-900 block">
                  {entry.points} pts
                </span>
                <span className="text-[10px] font-semibold text-orange-600 flex items-center justify-end gap-0.5">
                  <Flame className="w-2.5 h-2.5 fill-orange-500" />
                  {entry.streak}d streak
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
