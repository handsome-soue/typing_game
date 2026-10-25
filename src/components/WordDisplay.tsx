/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { WordItem } from '../utils/typingLogic';
import { Volume2 } from 'lucide-react';

interface WordDisplayProps {
  word: WordItem;
  typedSoFar: string;
  activeRomaji: string;
  currentIndex: number;
  totalInStage: number;
  onSpeak?: () => void;
  comboCount: number;
}

export const WordDisplay: React.FC<WordDisplayProps> = ({
  word,
  typedSoFar,
  activeRomaji,
  currentIndex,
  totalInStage,
  onSpeak,
  comboCount,
}) => {
  const currentKeyChar = activeRomaji[typedSoFar.length] || '';

  return (
    <div className="w-full bg-linear-to-b from-white to-amber-50/50 rounded-3xl p-3 sm:p-4 shadow-md border-2 border-amber-200 flex flex-col justify-between h-full">
      {/* Top Bar: Progress and Combo */}
      <div className="flex items-center justify-between text-xs font-bold text-amber-800 mb-1">
        <span className="bg-amber-100/90 text-amber-900 px-2.5 py-0.5 rounded-full border border-amber-300">
          もんだい {currentIndex + 1} / {totalInStage}
        </span>

        {comboCount > 1 && (
          <span className="bg-rose-100 text-rose-700 px-2.5 py-0.5 rounded-full border border-rose-300 flex items-center gap-1 animate-bounce text-xs font-black">
            <span>🔥</span>
            <span>{comboCount}れんぞく！</span>
          </span>
        )}
      </div>

      {/* Main Word Area: Emoji + Hiragana */}
      <div className="flex flex-col items-center justify-center my-2 gap-2">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-2xl shadow-sm border border-amber-100 flex items-center justify-center text-4xl sm:text-5xl transform hover:scale-105 transition-transform">
          {word.emoji}
        </div>

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-800 tracking-wider">
              {word.hiragana}
            </h2>
            {onSpeak && (
              <button
                type="button"
                onClick={onSpeak}
                aria-label="こえをきく"
                className="w-8 h-8 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-800 flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
                title="もういちど こえをきく"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            )}
          </div>
          {word.meaningJa && (
            <p className="text-xs sm:text-sm font-bold text-amber-700 mt-0.5">
              {word.meaningJa}
            </p>
          )}
        </div>
      </div>

      {/* Romaji Letters Progression */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 my-1">
        {activeRomaji.split('').map((char, index) => {
          const isTyped = index < typedSoFar.length;
          const isCurrent = index === typedSoFar.length;

          let cardStyle = 'bg-slate-100 text-slate-400 border-slate-200';
          if (isTyped) {
            cardStyle = 'bg-emerald-500 text-white border-emerald-600 shadow-sm scale-95';
          } else if (isCurrent) {
            cardStyle =
              'bg-linear-to-b from-amber-300 to-yellow-400 text-slate-900 border-amber-400 shadow-md scale-105 ring-3 ring-amber-300 ring-offset-1 animate-soft-pulse';
          }

          return (
            <div
              key={index}
              className={`w-10 sm:w-12 h-12 sm:h-14 rounded-xl flex flex-col items-center justify-center border-2 transition-all duration-200 font-black ${cardStyle}`}
            >
              <span className="text-xl sm:text-2xl leading-none">{char}</span>
              <span className={`text-[9px] uppercase mt-0.5 ${isCurrent ? 'text-slate-800 font-bold' : 'opacity-70'}`}>
                {char.toLowerCase()}
              </span>
            </div>
          );
        })}
      </div>

      {/* Guide Message Badge */}
      <div className="mt-2 bg-sky-50 border border-sky-200 px-3 py-1 rounded-full flex items-center justify-center gap-1.5 text-xs font-bold text-sky-800">
        <span>⭐</span>
        <span>
          いまうつキーは <strong className="text-sm font-black text-sky-950 underline decoration-amber-400 decoration-2">『{currentKeyChar}』</strong> だよ！
        </span>
      </div>
    </div>
  );
};
