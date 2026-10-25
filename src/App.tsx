/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback, useRef } from 'react';
import confetti from 'canvas-confetti';
import {
  STAGES,
  Stage,
  WordItem,
  checkNextKey,
  getNextKeyInfo,
} from './utils/typingLogic';
import { sound } from './utils/audio';
import { Hand3DGuide } from './components/Hand3DGuide';
import { KeyboardGuide } from './components/KeyboardGuide';
import { WordDisplay } from './components/WordDisplay';
import { LevelSelectModal } from './components/LevelSelectModal';
import { StickerBookModal } from './components/StickerBookModal';
import { SettingsModal } from './components/SettingsModal';
import {
  Star,
  Award,
  Settings,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Trophy,
} from 'lucide-react';

const STORAGE_KEY = 'otete_pyon_typing_v1';

export default function App() {
  // Current active stage & word index
  const [currentStage, setCurrentStage] = useState<Stage>(STAGES[0]);
  const [wordIndex, setWordIndex] = useState<number>(0);
  const [typedSoFar, setTypedSoFar] = useState<string>('');
  const [activeRomaji, setActiveRomaji] = useState<string>(
    STAGES[0].words[0].defaultRomaji
  );

  // Score & Progression
  const [totalStars, setTotalStars] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.totalStars || 0;
      }
    } catch {
      // fallback
    }
    return 0;
  });

  const [stageStars, setStageStars] = useState<Record<number, number>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.stageStars || {};
      }
    } catch {
      // fallback
    }
    return {};
  });

  // Streak & Feedback
  const [comboCount, setComboCount] = useState<number>(0);
  const [lastPressedKey, setLastPressedKey] = useState<string | undefined>();
  const [isLastKeyCorrect, setIsLastKeyCorrect] = useState<boolean>(true);
  const [starEarnNotice, setStarEarnNotice] = useState<boolean>(false);

  // Modals
  const [isLevelModalOpen, setIsLevelModalOpen] = useState<boolean>(false);
  const [isStickerModalOpen, setIsStickerModalOpen] = useState<boolean>(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState<boolean>(false);
  const [isStageCompleteOpen, setIsStageCompleteOpen] = useState<boolean>(false);

  // Audio settings
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [voiceEnabled, setVoiceEnabled] = useState<boolean>(true);
  const [voiceSpeed, setVoiceSpeed] = useState<number>(0.85);

  const currentWord: WordItem = currentStage.words[wordIndex] || currentStage.words[0];

  // Ref to prevent double processing
  const isTransitioningRef = useRef<boolean>(false);

  // Sync audio singleton settings
  useEffect(() => {
    sound.enabled = soundEnabled;
    sound.voiceEnabled = voiceEnabled;
    sound.speechRate = voiceSpeed;
  }, [soundEnabled, voiceEnabled, voiceSpeed]);

  // Save progress
  useEffect(() => {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          totalStars,
          stageStars,
        })
      );
    } catch {
      // ignore
    }
  }, [totalStars, stageStars]);

  // Voice narration when new word or stage loads
  const announceCurrentWord = useCallback(
    (w: WordItem) => {
      if (!voiceEnabled) return;
      const targetLetter = w.defaultRomaji[0];
      const speakText = `${w.hiragana}。${targetLetter}をおしてみてね`;
      sound.speakJapanese(speakText);
    },
    [voiceEnabled]
  );

  // On stage or word index change
  useEffect(() => {
    setTypedSoFar('');
    setActiveRomaji(currentWord.defaultRomaji);
    isTransitioningRef.current = false;
    // Announce word softly
    announceCurrentWord(currentWord);
  }, [currentStage, wordIndex, announceCurrentWord, currentWord]);

  // Process typed key
  const handleKeyInput = useCallback(
    (inputKey: string) => {
      if (isTransitioningRef.current) return;
      const char = inputKey.toUpperCase();

      const result = checkNextKey(typedSoFar, char, currentWord.romajiOptions);
      setLastPressedKey(char);

      if (result.isValid) {
        setIsLastKeyCorrect(true);
        setTypedSoFar(result.updatedTyped);
        setActiveRomaji(result.activeRomaji);

        // Play feedback note
        sound.playLetterDing(result.updatedTyped.length);

        // Word Completed!
        if (result.isComplete) {
          isTransitioningRef.current = true;
          sound.playWordSuccess();
          sound.playStarSound();

          // Award Star
          setTotalStars((prev) => prev + 1);
          setComboCount((prev) => prev + 1);
          setStarEarnNotice(true);
          setTimeout(() => setStarEarnNotice(false), 1200);

          // Little celebration confetti
          try {
            confetti({
              particleCount: 35,
              spread: 60,
              origin: { y: 0.65 },
              colors: ['#F59E0B', '#10B981', '#3B82F6', '#EC4899', '#8B5CF6'],
            });
          } catch {
            // ignore
          }

          // Move to next word or stage complete
          setTimeout(() => {
            if (wordIndex + 1 < currentStage.words.length) {
              setWordIndex((prev) => prev + 1);
            } else {
              // STAGE COMPLETE!
              handleStageClear();
            }
          }, 650);
        }
      } else {
        // Mistake - gentle encouraging sound
        setIsLastKeyCorrect(false);
        sound.playEncouragingSound();
        setComboCount(0);
      }
    },
    [typedSoFar, currentWord, wordIndex, currentStage.words.length]
  );

  // Handle stage completion
  const handleStageClear = () => {
    sound.playStageClear();
    // Confetti blast
    try {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 0.5 },
      });
    } catch {
      // ignore
    }

    // Award bonus stars for stage completion
    const bonus = 3;
    setTotalStars((prev) => prev + bonus);
    setStageStars((prev) => ({
      ...prev,
      [currentStage.id]: Math.max(prev[currentStage.id] || 0, 3),
    }));

    setIsStageCompleteOpen(true);
  };

  // Keyboard Event Listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore functional hotkeys like F5, Ctrl, Alt, Meta
      if (e.ctrlKey || e.altKey || e.metaKey) return;
      if (
        isLevelModalOpen ||
        isStickerModalOpen ||
        isSettingsModalOpen ||
        isStageCompleteOpen
      ) {
        return;
      }

      const key = e.key;
      // Allow letters, numbers, space, hyphen
      if (/^[a-zA-Z0-9 -]$/.test(key)) {
        e.preventDefault();
        handleKeyInput(key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [
    handleKeyInput,
    isLevelModalOpen,
    isStickerModalOpen,
    isSettingsModalOpen,
    isStageCompleteOpen,
  ]);

  // Next expected letter info for the 3D hand and keyboard
  const nextInfo = getNextKeyInfo(typedSoFar, currentWord.romajiOptions);

  return (
    <div className="min-h-screen bg-linear-to-b from-sky-100 via-amber-50/40 to-indigo-100/60 flex flex-col items-center justify-between p-2 sm:p-4 selection:bg-amber-200">
      {/* Header Bar */}
      <header className="w-full max-w-4xl bg-white/95 backdrop-blur-md rounded-3xl p-3 sm:p-4 shadow-md border-2 border-amber-200 flex items-center justify-between gap-2">
        {/* Logo & Title */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-linear-to-br from-amber-400 to-orange-400 rounded-2xl flex items-center justify-center text-2xl shadow-sm border border-amber-300">
            🐱
          </div>
          <div>
            <h1 className="text-base sm:text-xl font-black text-slate-800 tracking-wide flex items-center gap-1.5">
              <span>おててぴょん！</span>
              <span className="hidden sm:inline text-xs font-bold bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full border border-amber-300">
                キッズ ローマ字タイピング
              </span>
            </h1>
            <p className="text-[11px] sm:text-xs font-bold text-slate-500">
              ６さいからの 正しい指づかいレッスン
            </p>
          </div>
        </div>

        {/* Action Controls & Counters */}
        <div className="flex items-center gap-1.5 sm:gap-3">
          {/* Level Select Button */}
          <button
            type="button"
            onClick={() => setIsLevelModalOpen(true)}
            aria-label="レベルをえらぶ"
            className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-amber-100 hover:bg-amber-200 text-amber-900 border-2 border-amber-300 font-black text-xs sm:text-sm transition-all shadow-xs cursor-pointer active:scale-95"
          >
            <span>{currentStage.badgeEmoji}</span>
            <span className="hidden md:inline">{currentStage.tag}</span>
            <span className="md:hidden">ステージ</span>
            <ChevronRight className="w-4 h-4 text-amber-700" />
          </button>

          {/* Star Counter */}
          <button
            type="button"
            onClick={() => setIsStickerModalOpen(true)}
            aria-label="ほしの数とシールちょうをみる"
            className="relative flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-2xl bg-yellow-400 hover:bg-yellow-300 text-amber-950 font-black text-xs sm:text-sm transition-all shadow-md border-2 border-yellow-200 cursor-pointer active:scale-95"
            title="クリックしてシールちょうをひらく"
          >
            <Star className="w-4 h-4 sm:w-5 sm:h-5 text-amber-900 fill-amber-900 animate-spin" />
            <span className="text-sm sm:text-base font-black">{totalStars}</span>
            {starEarnNotice && (
              <span className="absolute -top-3 -right-2 bg-rose-500 text-white font-black text-xs px-2 py-0.5 rounded-full animate-bounce shadow-md">
                +1 ⭐
              </span>
            )}
          </button>

          {/* Sticker Book Button */}
          <button
            type="button"
            onClick={() => setIsStickerModalOpen(true)}
            aria-label="シールちょうをひらく"
            className="p-2 sm:px-3 sm:py-2 rounded-2xl bg-pink-100 hover:bg-pink-200 text-pink-700 border-2 border-pink-300 font-bold text-xs sm:text-sm transition-all shadow-xs cursor-pointer flex items-center gap-1 active:scale-95"
            title="ごほうびシールちょう"
          >
            <Award className="w-5 h-5 text-pink-600" />
            <span className="hidden sm:inline">シール</span>
          </button>

          {/* Settings Button */}
          <button
            type="button"
            onClick={() => setIsSettingsModalOpen(true)}
            aria-label="せってい"
            className="p-2 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 transition-all shadow-xs cursor-pointer active:scale-95"
            title="せってい"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Main Workspace: 2-column top section + full-width keyboard */}
      <main className="w-full max-w-4xl flex-1 flex flex-col items-center justify-center my-2 sm:my-3 gap-3">
        {/* Top Split: Word Card & 3D Hands */}
        <div className="w-full grid grid-cols-1 md:grid-cols-12 gap-3 items-stretch">
          <div className="md:col-span-5 h-full">
            <WordDisplay
              word={currentWord}
              typedSoFar={typedSoFar}
              activeRomaji={nextInfo.activeRomaji}
              currentIndex={wordIndex}
              totalInStage={currentStage.words.length}
              onSpeak={() => announceCurrentWord(currentWord)}
              comboCount={comboCount}
            />
          </div>
          <div className="md:col-span-7 h-full">
            <Hand3DGuide
              currentKey={nextInfo.nextChar}
              fingerInfo={nextInfo.fingerInfo}
              hiraganaChar={currentWord.hiragana}
              showHomePositionHint={true}
            />
          </div>
        </div>

        {/* Interactive Keyboard: Color zones matching the 3D hands + active key focus */}
        <KeyboardGuide
          currentKey={nextInfo.nextChar}
          onKeyClick={handleKeyInput}
          lastPressedKey={lastPressedKey}
          isLastKeyCorrect={isLastKeyCorrect}
        />
      </main>

      {/* Footer Navigation Bar */}
      <footer className="w-full max-w-4xl bg-white/80 backdrop-blur-xs rounded-2xl px-4 py-2 border border-slate-200 flex flex-wrap items-center justify-between text-xs font-bold text-slate-600 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>キーボードをおすか、画面のキーをタッチしてね！</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => {
              setTypedSoFar('');
              announceCurrentWord(currentWord);
            }}
            className="flex items-center gap-1 text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>このもんだいをやりなおす</span>
          </button>
          <span className="text-slate-300">|</span>
          <button
            type="button"
            onClick={() => setIsLevelModalOpen(true)}
            className="text-amber-700 hover:underline cursor-pointer"
          >
            ほかのステージをえらぶ
          </button>
        </div>
      </footer>

      {/* Level Selection Modal */}
      <LevelSelectModal
        isOpen={isLevelModalOpen}
        onClose={() => setIsLevelModalOpen(false)}
        currentStageId={currentStage.id}
        onSelectStage={(stage) => {
          setCurrentStage(stage);
          setWordIndex(0);
          setTypedSoFar('');
          setComboCount(0);
        }}
        stageStars={stageStars}
      />

      {/* Sticker Book Modal */}
      <StickerBookModal
        isOpen={isStickerModalOpen}
        onClose={() => setIsStickerModalOpen(false)}
        totalStars={totalStars}
      />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        soundEnabled={soundEnabled}
        onToggleSound={setSoundEnabled}
        voiceEnabled={voiceEnabled}
        onToggleVoice={setVoiceEnabled}
        voiceSpeed={voiceSpeed}
        onChangeVoiceSpeed={setVoiceSpeed}
        onResetProgress={() => {
          setTotalStars(0);
          setStageStars({});
          localStorage.removeItem(STORAGE_KEY);
        }}
      />

      {/* Stage Complete Celebration Modal */}
      {isStageCompleteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border-4 border-amber-400 text-center flex flex-col items-center relative overflow-hidden">
            <div className="w-24 h-24 bg-linear-to-tr from-yellow-300 to-amber-400 rounded-3xl shadow-lg border-2 border-amber-200 flex items-center justify-center text-5xl mb-4 animate-bounce">
              <Trophy className="w-14 h-14 text-amber-900" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-800">
              ステージ クリア！
            </h2>
            <p className="text-sm font-bold text-amber-700 mt-1">
              {currentStage.title} を ぜんぶできたよ！
            </p>

            <div className="flex items-center justify-center gap-2 my-5">
              {[1, 2, 3].map((starIdx) => (
                <Star
                  key={starIdx}
                  className="w-10 h-10 text-amber-400 fill-amber-400 animate-spin"
                />
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-3 w-full mb-5">
              <p className="text-xs font-bold text-amber-800">
                ボーナス ⭐ 3つ ゲット！
              </p>
              <p className="text-xs text-amber-600 mt-0.5">
                合計: <strong className="text-sm font-black text-amber-900">{totalStars}</strong> 星になったよ！
              </p>
            </div>

            <div className="flex flex-col gap-2 w-full">
              {currentStage.id < STAGES.length ? (
                <button
                  type="button"
                  onClick={() => {
                    const nextStage = STAGES.find((s) => s.id === currentStage.id + 1) || STAGES[0];
                    setCurrentStage(nextStage);
                    setWordIndex(0);
                    setTypedSoFar('');
                    setIsStageCompleteOpen(false);
                  }}
                  className="w-full py-3 rounded-2xl bg-linear-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 text-white font-black text-base shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>つぎのステージへ すすむ！</span>
                </button>
              ) : null}

              <button
                type="button"
                onClick={() => {
                  setWordIndex(0);
                  setTypedSoFar('');
                  setIsStageCompleteOpen(false);
                }}
                className="w-full py-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors cursor-pointer"
              >
                もういちど このステージをあそぶ
              </button>

              <button
                type="button"
                onClick={() => {
                  setIsStageCompleteOpen(false);
                  setIsLevelModalOpen(true);
                }}
                className="w-full py-2 rounded-2xl text-amber-700 hover:bg-amber-50 font-bold text-xs transition-colors cursor-pointer"
              >
                ステージいちらんをみる
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
