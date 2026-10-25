/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FINGER_MAPPINGS, FingerInfo } from '../utils/typingLogic';

interface KeyboardGuideProps {
  currentKey: string;
  onKeyClick?: (char: string) => void;
  lastPressedKey?: string;
  isLastKeyCorrect?: boolean;
}

interface KeyConfig {
  char: string;
  label?: string;
  subLabel?: string;
  width?: string;
  hasNotch?: boolean;
}

const KEYBOARD_ROWS: KeyConfig[][] = [
  [
    { char: '1', label: '1' },
    { char: '2', label: '2' },
    { char: '3', label: '3' },
    { char: '4', label: '4' },
    { char: '5', label: '5' },
    { char: '6', label: '6' },
    { char: '7', label: '7' },
    { char: '8', label: '8' },
    { char: '9', label: '9' },
    { char: '0', label: '0' },
    { char: '-', label: 'ー' },
  ],
  [
    { char: 'Q', label: 'Q' },
    { char: 'W', label: 'W', subLabel: 'わ' },
    { char: 'E', label: 'E', subLabel: 'え' },
    { char: 'R', label: 'R', subLabel: 'ら' },
    { char: 'T', label: 'T', subLabel: 'た' },
    { char: 'Y', label: 'Y', subLabel: 'や' },
    { char: 'U', label: 'U', subLabel: 'う' },
    { char: 'I', label: 'I', subLabel: 'い' },
    { char: 'O', label: 'O', subLabel: 'お' },
    { char: 'P', label: 'P', subLabel: 'ぱ' },
  ],
  [
    { char: 'A', label: 'A', subLabel: 'あ' },
    { char: 'S', label: 'S', subLabel: 'さ' },
    { char: 'D', label: 'D', subLabel: 'だ' },
    { char: 'F', label: 'F', subLabel: 'ふ', hasNotch: true },
    { char: 'G', label: 'G', subLabel: 'が' },
    { char: 'H', label: 'H', subLabel: 'は' },
    { char: 'J', label: 'J', subLabel: 'じ', hasNotch: true },
    { char: 'K', label: 'K', subLabel: 'か' },
    { char: 'L', label: 'L' },
  ],
  [
    { char: 'Z', label: 'Z', subLabel: 'ざ' },
    { char: 'X', label: 'X' },
    { char: 'C', label: 'C' },
    { char: 'V', label: 'V' },
    { char: 'B', label: 'B', subLabel: 'ば' },
    { char: 'N', label: 'N', subLabel: 'な/ん' },
    { char: 'M', label: 'M', subLabel: 'ま' },
  ],
  [
    { char: ' ', label: 'スペース (Space)', width: 'w-48 sm:w-64' },
  ],
];

export const KeyboardGuide: React.FC<KeyboardGuideProps> = ({
  currentKey,
  onKeyClick,
  lastPressedKey,
  isLastKeyCorrect,
}) => {
  const normCurrentKey = currentKey.toUpperCase();

  return (
    <div className="w-full bg-slate-800 rounded-3xl p-2.5 sm:p-3.5 shadow-xl border-3 border-slate-700 max-w-4xl mx-auto">
      {/* Keyboard Header Legend */}
      <div className="flex flex-wrap items-center justify-between text-xs text-slate-300 mb-2 px-1 gap-2 border-b border-slate-700/60 pb-1.5">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
          <span className="font-bold text-[11px] sm:text-xs">キーボード ガイド</span>
        </div>
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-bold">
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-pink-400 inline-block"></span>
            <span>小指</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-purple-400 inline-block"></span>
            <span>薬指</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-400 inline-block"></span>
            <span>中指</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block"></span>
            <span>左人差し</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-orange-400 inline-block"></span>
            <span>右人差し</span>
          </span>
        </div>
      </div>

      {/* Keyboard Grid */}
      <div className="flex flex-col gap-1 sm:gap-1.5 items-center w-full overflow-x-auto py-0.5">
        {KEYBOARD_ROWS.map((row, rowIndex) => (
          <div key={rowIndex} className="flex gap-1 sm:gap-1.5 justify-center w-full min-w-max">
            {row.map((k) => {
              const isTarget = normCurrentKey === k.char;
              const fingerInfo: FingerInfo | undefined = FINGER_MAPPINGS[k.char];
              const isJustPressed = lastPressedKey === k.char;

              // Color styles based on finger
              let baseBg = 'bg-slate-700 text-slate-200 border-slate-600';
              let activeRing = '';

              if (fingerInfo) {
                switch (fingerInfo.finger) {
                  case 'pinky':
                    baseBg = fingerInfo.hand === 'left' ? 'bg-slate-700 border-pink-500/50 hover:bg-pink-900/40' : 'bg-slate-700 border-fuchsia-500/50 hover:bg-fuchsia-900/40';
                    break;
                  case 'ring':
                    baseBg = fingerInfo.hand === 'left' ? 'bg-slate-700 border-purple-500/50 hover:bg-purple-900/40' : 'bg-slate-700 border-rose-500/50 hover:bg-rose-900/40';
                    break;
                  case 'middle':
                    baseBg = fingerInfo.hand === 'left' ? 'bg-slate-700 border-blue-500/50 hover:bg-blue-900/40' : 'bg-slate-700 border-teal-500/50 hover:bg-teal-900/40';
                    break;
                  case 'index':
                    baseBg = fingerInfo.hand === 'left' ? 'bg-slate-700 border-emerald-500/50 hover:bg-emerald-900/40' : 'bg-slate-700 border-orange-500/50 hover:bg-orange-900/40';
                    break;
                  case 'thumb':
                    baseBg = 'bg-slate-700 border-yellow-500/50 hover:bg-yellow-900/40';
                    break;
                }
              }

              if (isTarget) {
                baseBg = 'bg-linear-to-b from-amber-300 to-yellow-400 text-slate-950 font-black border-amber-200 shadow-md shadow-amber-400/40 transform -translate-y-0.5 scale-105';
                activeRing = 'ring-3 ring-amber-300 ring-offset-2 ring-offset-slate-900 animate-soft-pulse';
              } else if (isJustPressed) {
                if (isLastKeyCorrect) {
                  baseBg = 'bg-emerald-500 text-white border-emerald-400 scale-95';
                } else {
                  baseBg = 'bg-rose-500 text-white border-rose-400 animate-shake';
                }
              }

              return (
                <button
                  key={k.char}
                  type="button"
                  onClick={() => onKeyClick?.(k.char)}
                  aria-label={`キー ${k.char}`}
                  className={`relative flex flex-col items-center justify-center rounded-xl font-bold transition-all duration-150 border-b-3 active:border-b-0 active:translate-y-0.5 cursor-pointer select-none ${
                    k.width || 'w-7 sm:w-10 md:w-11.5 h-9 sm:h-10.5 md:h-11.5 text-xs sm:text-sm'
                  } ${baseBg} ${activeRing}`}
                >
                  {/* Key Label */}
                  <span className={`leading-none ${isTarget ? 'text-slate-950 text-base sm:text-lg font-black' : ''}`}>
                    {k.label}
                  </span>

                  {/* Japanese Sound SubLabel */}
                  {k.subLabel && (
                    <span
                      className={`text-[9px] sm:text-[10px] leading-tight font-medium ${
                        isTarget ? 'text-amber-900 font-bold' : 'text-slate-400'
                      }`}
                    >
                      {k.subLabel}
                    </span>
                  )}

                  {/* Tactile Notch Indicator (on F and J) */}
                  {k.hasNotch && (
                    <span
                      className={`absolute bottom-1 w-3 sm:w-4 h-1 rounded-full ${
                        isTarget ? 'bg-amber-800' : 'bg-slate-400'
                      }`}
                      title="ホームポジションの目印（ポッチ）"
                    />
                  )}

                  {/* Target finger glow dot */}
                  {isTarget && fingerInfo && (
                    <span
                      className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full border-2 border-white shadow-xs"
                      style={{ backgroundColor: fingerInfo.color }}
                      title={`${fingerInfo.handJa}の${fingerInfo.fingerJa}`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
