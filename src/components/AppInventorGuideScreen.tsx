import React, { useState } from 'react';
import { 
  Smartphone, 
  Code2, 
  Cpu, 
  DollarSign, 
  FileText, 
  Download, 
  HelpCircle, 
  Layers, 
  CheckCircle2, 
  AlertCircle,
  Copy,
  Check
} from 'lucide-react';
import { Language } from '../types/quiz';

interface AppInventorGuideProps {
  language: Language;
}

export const AppInventorGuideScreen: React.FC<AppInventorGuideProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<'components' | 'blocks' | 'apk' | 'monetization' | 'budget'>('components');
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copySnippet = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="flex-1 p-4 max-w-xl mx-auto w-full pb-24 space-y-4">
      {/* Header */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-9 h-9 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-slate-900">
              {language === 'hi' ? 'MIT App Inventor & APK निर्माण गाइड' : 'MIT App Inventor & APK Guide'}
            </h2>
            <p className="text-xs text-slate-500 font-medium">
              {language === 'hi'
                ? 'शून्य बजट (₹0) में संपूर्ण एंड्रॉइड ऐप निर्माण की तकनीकी रूपरेखा'
                : 'Complete zero-cost (₹0) technical blueprint & APK export guide'}
            </p>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 mt-3">
          {[
            { id: 'components' as const, label: language === 'hi' ? 'घटक (Components)' : 'Components' },
            { id: 'blocks' as const, label: language === 'hi' ? 'ब्लॉक्स लॉजिक' : 'Blocks Logic' },
            { id: 'apk' as const, label: language === 'hi' ? 'APK जनरेशन' : 'Generate APK' },
            { id: 'monetization' as const, label: language === 'hi' ? 'मुद्रीकरण (AdMob)' : 'Monetization' },
            { id: 'budget' as const, label: language === 'hi' ? 'लागत व सीमाएं' : 'Budget & Limits' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition ${
                activeTab === tab.id
                  ? 'bg-slate-900 text-white shadow-2xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab 1: Components */}
      {activeTab === 'components' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
            <h3 className="font-extrabold text-sm text-slate-900 mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4 text-orange-600" />
              <span>Exact MIT App Inventor Component Hierarchy</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              To build <strong>Daily Quiz India</strong> in MIT App Inventor (ai2.appinventor.mit.edu), drag and drop these exact components on <code>Screen1</code>:
            </p>

            <div className="space-y-2 text-xs font-mono">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800">1. Screen1 (Properties: Title="Daily Quiz India", Scrollable=True, AlignHorizontal=Center)</span>
                <ul className="pl-4 mt-2 space-y-1 text-slate-700 list-disc font-sans text-xs">
                  <li><strong>HeaderArrangement</strong> (HorizontalArrangement, Width=Fill Parent, AlignVertical=Center)
                    <ul className="pl-3 list-circle text-[11px] text-slate-600">
                      <li><code>LabelLogo</code>: Text="🇮🇳", FontSize=24</li>
                      <li><code>LabelTitle</code>: Text="Daily Quiz India", FontSize=18, Bold=True</li>
                      <li><code>ButtonLanguage</code>: Text="हिंदी / EN", Shape=Rounded, BackgroundColor=Orange</li>
                    </ul>
                  </li>
                  <li><strong>StatsArrangement</strong> (HorizontalArrangement, Width=Fill Parent)
                    <ul className="pl-3 list-circle text-[11px] text-slate-600">
                      <li><code>LabelStreak</code>: Text="🔥 Streak: 0d"</li>
                      <li><code>LabelBestScore</code>: Text="⭐ Best: 0/10"</li>
                    </ul>
                  </li>
                  <li><strong>QuizCardArrangement</strong> (VerticalArrangement, Width=Fill Parent, Elevation=4)
                    <ul className="pl-3 list-circle text-[11px] text-slate-600">
                      <li><code>LabelProgress</code>: Text="Question 1 of 10", FontSize=12</li>
                      <li><code>LabelQuestion</code>: Text="Loading Question...", FontSize=16, Bold=True</li>
                      <li><code>ButtonOptionA</code>: Text="Option A", Width=Fill Parent</li>
                      <li><code>ButtonOptionB</code>: Text="Option B", Width=Fill Parent</li>
                      <li><code>ButtonOptionC</code>: Text="Option C", Width=Fill Parent</li>
                      <li><code>ButtonOptionD</code>: Text="Option D", Width=Fill Parent</li>
                      <li><code>LabelExplanation</code>: Text="", Visible=False, BackgroundColor=LightYellow</li>
                      <li><code>ButtonNext</code>: Text="Next Question", Visible=False, BackgroundColor=Green</li>
                    </ul>
                  </li>
                  <li><strong>Non-Visible Components:</strong>
                    <ul className="pl-3 list-circle text-[11px] text-slate-600">
                      <li><code>TinyDB1</code>: Stores <code>bestScore</code>, <code>currentStreak</code>, <code>lastPlayedDate</code>, <code>savedLanguage</code></li>
                      <li><code>ClockTimer</code>: TimerInterval=1000, TimerEnabled=True</li>
                      <li><code>SoundPlayer</code>: Plays answer sound feedback</li>
                      <li><code>Notifier1</code>: Shows streak and completion dialogs</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Blocks Logic */}
      {activeTab === 'blocks' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
            <h3 className="font-extrabold text-sm text-slate-900 mb-2 flex items-center gap-2">
              <Code2 className="w-4 h-4 text-indigo-600" />
              <span>Complete MIT App Inventor Blocks Logic</span>
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-3">
              Implement these 5 core procedural blocks in MIT App Inventor:
            </p>

            <div className="space-y-3 text-xs">
              {/* Block 1 */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-800">Block 1: App Initialization (Screen1.Initialize)</span>
                  <button
                    onClick={() => copySnippet('b1', 'when Screen1.Initialize do:\n  set global currentLang to TinyDB1.GetValue(tag: "lang", valueIfTagNotThere: "en")\n  set global questionsList to Web1.JsonTextDecode(questionBankJson)\n  call Procedure_ShuffleAndPick10\n  call Procedure_DisplayQuestion(index: 1)')}
                    className="text-slate-500 hover:text-slate-800"
                  >
                    {copiedCode === 'b1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <pre className="bg-slate-900 text-slate-200 p-2.5 rounded-lg text-[11px] overflow-x-auto">
{`when Screen1.Initialize do:
  set global currentLang to call TinyDB1.GetValue(tag: "lang", "en")
  set global bestScore to call TinyDB1.GetValue(tag: "bestScore", 0)
  set global streak to call TinyDB1.GetValue(tag: "streak", 0)
  call Procedure_LoadQuestionBank
  call Procedure_DisplayQuestion(1)`}
                </pre>
              </div>

              {/* Block 2 */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-800">Block 2: Answer Checking (ButtonOption.Click)</span>
                  <button
                    onClick={() => copySnippet('b2', 'to Procedure_CheckAnswer(selectedIdx):\n  if global answered = false then:\n    set global answered to true\n    if selectedIdx = currentQuestion.correctIndex then:\n      set global score to global score + 1\n      call Sound_Play("correct.wav")\n      set ButtonOption.BackgroundColor to Green\n    else:\n      call Sound_Play("incorrect.wav")\n      set ButtonOption.BackgroundColor to Red\n    set LabelExplanation.Visible to true\n    set ButtonNext.Visible to true')}
                    className="text-slate-500 hover:text-slate-800"
                  >
                    {copiedCode === 'b2' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <pre className="bg-slate-900 text-slate-200 p-2.5 rounded-lg text-[11px] overflow-x-auto">
{`to Procedure_CheckAnswer (chosenIndex):
  if global hasAnswered = false then:
    set global hasAnswered to true
    if chosenIndex = global currentCorrectIndex then:
      set global currentScore to global currentScore + 1
      set ClickedButton.BackgroundColor to Green
    else:
      set ClickedButton.BackgroundColor to Red
    set CorrectButton.BackgroundColor to Green
    set LabelExplanation.Text to global currentExplanation
    set LabelExplanation.Visible to true
    set ButtonNext.Visible to true`}
                </pre>
              </div>

              {/* Block 3 */}
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-slate-800">Block 3: Next Question & Streak Saving</span>
                  <button
                    onClick={() => copySnippet('b3', 'when ButtonNext.Click do:\n  if global currentIndex < 10 then:\n    set global currentIndex to global currentIndex + 1\n    call Procedure_DisplayQuestion(global currentIndex)\n  else:\n    call Procedure_ShowFinalResult\n    call TinyDB1.StoreValue(tag: "bestScore", max(bestScore, score))\n    call Procedure_UpdateDailyStreak')}
                    className="text-slate-500 hover:text-slate-800"
                  >
                    {copiedCode === 'b3' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                <pre className="bg-slate-900 text-slate-200 p-2.5 rounded-lg text-[11px] overflow-x-auto">
{`when ButtonNext.Click do:
  if global currentIndex < 10 then:
    set global currentIndex to global currentIndex + 1
    call Procedure_DisplayQuestion(global currentIndex)
  else:
    call Procedure_ShowResultsScreen
    call TinyDB1.StoreValue(tag: "bestScore", max(bestScore, currentScore))
    call TinyDB1.StoreValue(tag: "lastDate", Clock1.FormatDate(Clock1.Now(), "yyyy-MM-dd"))`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: APK Generation */}
      {activeTab === 'apk' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
            <h3 className="font-extrabold text-sm text-slate-900 mb-2 flex items-center gap-2">
              <Download className="w-4 h-4 text-emerald-600" />
              <span>Step-by-Step Instructions to Generate Installable APK</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200">
                <span className="font-bold text-emerald-900 block mb-1">Method 1: MIT App Inventor (100% Free No-Code APK)</span>
                <ol className="list-decimal pl-4 space-y-1 text-emerald-800">
                  <li>Open <code>ai2.appinventor.mit.edu</code> and log in with your free Google account.</li>
                  <li>Click <strong>Projects &gt; Start new project</strong> called <code>DailyQuizIndia</code>.</li>
                  <li>Set up the component hierarchy and blocks as outlined in the previous tabs.</li>
                  <li>Click top menu <strong>Build &gt; Android App (.apk)</strong>.</li>
                  <li>Wait 60 seconds while MIT cloud compiles your application into an <code>.apk</code>.</li>
                  <li>Scan the QR code on your Android phone or click <strong>Download .apk to my computer</strong>.</li>
                  <li>On your Android phone, enable "Install unknown apps" for Chrome or Files app and tap install!</li>
                </ol>
              </div>

              <div className="p-3 bg-blue-50 rounded-xl border border-blue-200">
                <span className="font-bold text-blue-900 block mb-1">Method 2: Convert This Web App to APK via PWABuilder (₹0 Free)</span>
                <ol className="list-decimal pl-4 space-y-1 text-blue-800">
                  <li>This prototype already includes Progressive Web App (PWA) manifest and offline service worker.</li>
                  <li>Go to <code>pwabuilder.com</code> (Microsoft's open-source free tool).</li>
                  <li>Paste the app URL and click <strong>Start</strong>.</li>
                  <li>Click <strong>Package for Store &gt; Android</strong>.</li>
                  <li>PWABuilder will generate an Android Studio project or signed APK / AAB bundle with Trusted Web Activity (TWA) ready to install on Android without paying a penny!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Monetization */}
      {activeTab === 'monetization' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
            <h3 className="font-extrabold text-sm text-slate-900 mb-2 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-amber-600" />
              <span>Monetization & AdMob Policy Architecture</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <p>
                The app architecture is designed to support ethical, policy-compliant monetization in future phases without modifying core quiz logic:
              </p>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1">1. AdMob Placement Hooks</span>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
                  <li><strong>Banner Ads:</strong> Anchor only at the very bottom of the screen (underneath navigation) or inside ResultScreen. Do NOT place banners directly above or below MCQ option buttons to prevent accidental clicks.</li>
                  <li><strong>Interstitial Ads:</strong> Show an interstitial only after completing every 2nd or 3rd full quiz session on the ResultScreen before "Play Again". Never show interstitials during active question answering.</li>
                  <li><strong>Rewarded Video:</strong> Optional rewarded ads allowing users to unlock an extra streak save or premium question pack.</li>
                </ul>
              </div>

              <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-amber-900">
                <span className="font-bold block mb-1">2. Strict Compliance & Anti-Misleading Disclosures</span>
                <p className="text-[11px] leading-relaxed">
                  Under Google Play & AdMob policies:
                  <br />• <strong>No Real Money / Cash Promises:</strong> App points and XP are strictly educational gaming scores. The app prominently displays this notice on the home screen and result screen.
                  <br />• <strong>No Forced Clicks:</strong> Users are never coerced or incentivized to tap advertisements.
                  <br />• <strong>Kid & Family Friendly:</strong> Content rating should be configured for 3+ / Everyone since questions are general educational knowledge.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Budget & Limits */}
      {activeTab === 'budget' && (
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs">
            <h3 className="font-extrabold text-sm text-slate-900 mb-2 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-blue-600" />
              <span>Budget Analysis, Known Limitations & Roadmap</span>
            </h3>

            <div className="space-y-3 text-xs text-slate-700 leading-relaxed">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1">Budget Breakdown: Exactly ₹0 Development Cost</span>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
                  <li><strong>App Development Tool:</strong> MIT App Inventor (Free Open Source by MIT).</li>
                  <li><strong>Database & Storage:</strong> Android Local TinyDB / LocalStorage (₹0, offline, no servers needed).</li>
                  <li><strong>Audio Effects:</strong> Synthesized Web Audio / built-in sounds (₹0, no licensing).</li>
                  <li><strong>Optional Google Play Store Account:</strong> One-time $25 USD registration fee if publishing to Google Play Store (direct APK distribution via website / WhatsApp / GitHub is 100% free with ₹0 cost).</li>
                </ul>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-800 block mb-1">Known Limitations of Current Prototype & Future Steps:</span>
                <ul className="list-disc pl-4 space-y-1 text-slate-600 text-[11px]">
                  <li><strong>Current Question Count:</strong> 61 verified bilingual questions included. Next step: expand to 500+ questions using the structured JSON importer.</li>
                  <li><strong>Leaderboard:</strong> Currently simulates local community peers to avoid paid server costs. Next step for multi-user: free tier Firebase Firestore / Cloud SQL sync.</li>
                  <li><strong>Sound:</strong> Zero external dependencies using Web Audio API synthesis.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
