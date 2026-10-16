import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HomeScreen } from './components/HomeScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { ReviewScreen } from './components/ReviewScreen';
import { BadgesScreen } from './components/BadgesScreen';
import { LeaderboardScreen } from './components/LeaderboardScreen';
import { QuestionBankScreen } from './components/QuestionBankScreen';
import { AppInventorGuideScreen } from './components/AppInventorGuideScreen';
import { BottomNavigation, TabId } from './components/BottomNavigation';
import { AndroidFrame } from './components/AndroidFrame';
import { CategoryId, Difficulty, Language, Question, QuizSessionResult, UserStats } from './types/quiz';
import { loadSettings, loadUserStats, recordQuizCompletion, saveSettings } from './utils/storage';
import { getDailyQuizQuestions, getQuizQuestions } from './utils/quizEngine';

export default function App() {
  // Persistence state
  const [settings, setSettings] = useState(() => loadSettings());
  const [stats, setStats] = useState<UserStats>(() => loadUserStats());

  // Navigation & View state
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [viewMode, setViewMode] = useState<'main' | 'quiz' | 'result' | 'review'>('main');

  // Active quiz session state
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [quizCategory, setQuizCategory] = useState<CategoryId>('all');
  const [quizDifficulty, setQuizDifficulty] = useState<Difficulty>('all');
  const [isDailyQuiz, setIsDailyQuiz] = useState(false);
  const [latestResult, setLatestResult] = useState<QuizSessionResult | null>(null);
  const [latestNewBadges, setLatestNewBadges] = useState<string[]>([]);
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('all');

  // Keep settings synchronized
  const handleLanguageChange = (lang: Language) => {
    const updated = { ...settings, language: lang };
    setSettings(updated);
    saveSettings(updated);
  };

  const handleSoundToggle = () => {
    const updated = { ...settings, soundEnabled: !settings.soundEnabled };
    setSettings(updated);
    saveSettings(updated);
  };

  const handleFrameToggle = () => {
    const updated = { ...settings, isMobileDeviceFrame: !settings.isMobileDeviceFrame };
    setSettings(updated);
    saveSettings(updated);
  };

  // Start Quiz handler
  const handleStartQuiz = (category: CategoryId, difficulty: Difficulty, isDaily: boolean) => {
    const qList = isDaily ? getDailyQuizQuestions() : getQuizQuestions(category, difficulty, 10);
    setActiveQuestions(qList);
    setQuizCategory(category);
    setQuizDifficulty(difficulty);
    setIsDailyQuiz(isDaily);
    setViewMode('quiz');
  };

  // Handle Quiz completion
  const handleQuizComplete = (result: QuizSessionResult) => {
    const { updatedStats, newBadges } = recordQuizCompletion(result);
    setStats(updatedStats);
    setLatestResult(result);
    setLatestNewBadges(newBadges);
    setViewMode('result');
  };

  // Play again
  const handlePlayAgain = () => {
    handleStartQuiz(quizCategory, quizDifficulty, isDailyQuiz);
  };

  return (
    <AndroidFrame enabled={settings.isMobileDeviceFrame}>
      {/* Header bar only visible on main view tabs */}
      {viewMode === 'main' && (
        <Header
          language={settings.language}
          onLanguageChange={handleLanguageChange}
          soundEnabled={settings.soundEnabled}
          onSoundToggle={handleSoundToggle}
          isMobileDeviceFrame={settings.isMobileDeviceFrame}
          onFrameToggle={handleFrameToggle}
          streak={stats.currentStreak}
          points={stats.totalPoints}
        />
      )}

      {/* Main Container Views */}
      <main className="flex-1 flex flex-col">
        {viewMode === 'main' && (
          <>
            {activeTab === 'home' && (
              <HomeScreen
                language={settings.language}
                stats={stats}
                selectedDifficulty={selectedDifficulty}
                onDifficultyChange={setSelectedDifficulty}
                onStartQuiz={handleStartQuiz}
                onOpenLeaderboard={() => setActiveTab('leaderboard')}
                onOpenBadges={() => setActiveTab('badges')}
                onOpenStudy={() => setActiveTab('study')}
              />
            )}
            {activeTab === 'study' && (
              <QuestionBankScreen language={settings.language} />
            )}
            {activeTab === 'leaderboard' && (
              <LeaderboardScreen stats={stats} language={settings.language} />
            )}
            {activeTab === 'badges' && (
              <BadgesScreen stats={stats} language={settings.language} />
            )}
            {activeTab === 'guide' && (
              <AppInventorGuideScreen language={settings.language} />
            )}

            {/* Bottom Navigation */}
            <BottomNavigation
              activeTab={activeTab}
              onTabChange={setActiveTab}
              language={settings.language}
            />
          </>
        )}

        {viewMode === 'quiz' && (
          <QuizScreen
            questions={activeQuestions}
            category={quizCategory}
            difficulty={quizDifficulty}
            isDailyQuiz={isDailyQuiz}
            language={settings.language}
            soundEnabled={settings.soundEnabled}
            onExit={() => setViewMode('main')}
            onComplete={handleQuizComplete}
          />
        )}

        {viewMode === 'result' && latestResult && (
          <ResultScreen
            result={latestResult}
            stats={stats}
            newBadges={latestNewBadges}
            language={settings.language}
            onPlayAgain={handlePlayAgain}
            onReviewAnswers={() => setViewMode('review')}
            onHome={() => setViewMode('main')}
          />
        )}

        {viewMode === 'review' && latestResult && (
          <ReviewScreen
            result={latestResult}
            language={settings.language}
            onBack={() => setViewMode('result')}
          />
        )}
      </main>
    </AndroidFrame>
  );
}
