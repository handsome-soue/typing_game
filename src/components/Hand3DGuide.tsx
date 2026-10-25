/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FingerInfo, HandSide, FingerType } from '../utils/typingLogic';

interface Hand3DGuideProps {
  currentKey: string;
  fingerInfo?: FingerInfo;
  hiraganaChar?: string;
  showHomePositionHint?: boolean;
}

export const Hand3DGuide: React.FC<Hand3DGuideProps> = ({
  currentKey,
  fingerInfo,
  showHomePositionHint = true,
}) => {
  const activeHand: HandSide | null = fingerInfo ? fingerInfo.hand : null;
  const activeFinger: FingerType | null = fingerInfo ? fingerInfo.finger : null;

  return (
    <div className="w-full bg-white/95 backdrop-blur-md rounded-3xl p-3 sm:p-4 shadow-md border-2 border-indigo-100 flex flex-col justify-between h-full">
      {/* Top Banner: Real-time action instruction */}
      <div className="flex items-center justify-between gap-2 mb-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xl animate-bounce">👉</span>
          {fingerInfo ? (
            <div className="flex items-center gap-1.5 flex-wrap">
              <span
                className={`px-2.5 py-0.5 rounded-full text-xs sm:text-sm font-black shadow-xs border-2 ${fingerInfo.bgColor} ${fingerInfo.borderColor} ${fingerInfo.textColor}`}
              >
                {fingerInfo.handJa}の {fingerInfo.fingerJa}
              </span>
              <span className="text-gray-700 text-xs sm:text-sm font-bold">
                で <span className="text-base sm:text-lg font-black text-indigo-700 underline decoration-amber-400 decoration-2">『{currentKey}』</span> を ポン！
              </span>
            </div>
          ) : (
            <span className="text-gray-600 text-xs sm:text-sm font-bold">
              キーをおしてみよう！
            </span>
          )}
        </div>

        {fingerInfo && (
          <span className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${activeHand === 'left' ? 'bg-pink-100 text-pink-700' : 'bg-orange-100 text-orange-700'}`}>
            {activeHand === 'left' ? '左手' : '右手'}をつかうよ
          </span>
        )}
      </div>

      {/* 3D Hands Visual Frame */}
      <div className="relative bg-linear-to-b from-sky-50/60 via-indigo-50/30 to-amber-50/40 rounded-2xl p-2 sm:p-3 border border-indigo-100/70 shadow-inner flex flex-col justify-center flex-1">
        {/* Subtle home-row guide line */}
        <div className="absolute top-1/2 left-3 right-3 h-0.5 border-t border-dashed border-indigo-200/80 pointer-events-none -translate-y-5 flex justify-between text-[10px] text-indigo-400 font-bold px-2">
          <span>← ひだりて (A S D F)</span>
          <span>(J K L ;) みぎて →</span>
        </div>

        {/* Hands Container */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 relative z-10">
          {/* LEFT HAND (ひだりて) */}
          <div
            className={`flex flex-col items-center transition-all duration-200 ${
              activeHand === 'left' ? 'scale-102' : 'opacity-85'
            }`}
          >
            <div className="flex items-center gap-1 mb-1">
              <span className="w-2 h-2 rounded-full bg-pink-400 inline-block"></span>
              <span className="text-xs font-black text-gray-700">ひだりて</span>
              {activeHand === 'left' && (
                <span className="text-[10px] bg-pink-500 text-white font-bold px-1.5 py-0.2 rounded-full animate-pulse">
                  つかう！
                </span>
              )}
            </div>

            {/* Left Hand 3D SVG */}
            <div className="w-full max-w-[190px] aspect-4/3 relative">
              <svg
                viewBox="0 0 240 180"
                className="w-full h-full drop-shadow-md select-none overflow-visible"
              >
                <defs>
                  <linearGradient id="skinBaseL" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFE0B2" />
                    <stop offset="70%" stopColor="#FFCC80" />
                    <stop offset="100%" stopColor="#FFA726" />
                  </linearGradient>
                  <filter id="handShadowL" x="-10%" y="-10%" width="130%" height="130%">
                    <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodOpacity="0.2" />
                  </filter>
                </defs>

                {/* Wrist & Palm Base */}
                <ellipse cx="120" cy="165" rx="50" ry="10" fill="#D1D5DB" opacity="0.35" />
                <path
                  d="M 95 135 Q 85 170 95 175 Q 120 178 145 175 Q 155 170 145 135 Z"
                  fill="url(#skinBaseL)"
                  stroke="#FB8C00"
                  strokeWidth="2"
                />
                <path
                  d="M 65 110 C 55 80 85 75 115 77 C 145 75 175 80 165 115 C 160 142 140 148 115 148 C 90 148 70 142 65 110 Z"
                  fill="url(#skinBaseL)"
                  stroke="#FB8C00"
                  strokeWidth="2.5"
                  filter="url(#handShadowL)"
                />

                {/* Left Pinky (小指 - A, Q, Z) */}
                <g className={activeHand === 'left' && activeFinger === 'pinky' ? 'animate-finger-bounce' : ''}>
                  <rect
                    x="56"
                    y="50"
                    width="17"
                    height="45"
                    rx="8.5"
                    fill={activeHand === 'left' && activeFinger === 'pinky' ? '#EC4899' : '#FFE082'}
                    stroke={activeHand === 'left' && activeFinger === 'pinky' ? '#BE185D' : '#F57C00'}
                    strokeWidth="2.5"
                  />
                  <ellipse cx="64.5" cy="57" rx="5" ry="4" fill={activeHand === 'left' && activeFinger === 'pinky' ? '#FDF2F8' : '#FFF8E1'} />
                  {activeHand === 'left' && activeFinger === 'pinky' && (
                    <circle cx="64.5" cy="57" r="12" fill="none" stroke="#EC4899" strokeWidth="2.5" className="animate-ping" />
                  )}
                </g>

                {/* Left Ring (薬指 - S, W, X) */}
                <g className={activeHand === 'left' && activeFinger === 'ring' ? 'animate-finger-bounce' : ''}>
                  <rect
                    x="79"
                    y="32"
                    width="18"
                    height="58"
                    rx="9"
                    fill={activeHand === 'left' && activeFinger === 'ring' ? '#8B5CF6' : '#FFE082'}
                    stroke={activeHand === 'left' && activeFinger === 'ring' ? '#6D28D9' : '#F57C00'}
                    strokeWidth="2.5"
                  />
                  <ellipse cx="88" cy="39" rx="5.5" ry="4.5" fill={activeHand === 'left' && activeFinger === 'ring' ? '#F5F3FF' : '#FFF8E1'} />
                  {activeHand === 'left' && activeFinger === 'ring' && (
                    <circle cx="88" cy="39" r="13" fill="none" stroke="#8B5CF6" strokeWidth="2.5" className="animate-ping" />
                  )}
                </g>

                {/* Left Middle (中指 - D, E, C) */}
                <g className={activeHand === 'left' && activeFinger === 'middle' ? 'animate-finger-bounce' : ''}>
                  <rect
                    x="103"
                    y="20"
                    width="19"
                    height="68"
                    rx="9.5"
                    fill={activeHand === 'left' && activeFinger === 'middle' ? '#3B82F6' : '#FFE082'}
                    stroke={activeHand === 'left' && activeFinger === 'middle' ? '#1D4ED8' : '#F57C00'}
                    strokeWidth="2.5"
                  />
                  <ellipse cx="112.5" cy="27" rx="6" ry="4.5" fill={activeHand === 'left' && activeFinger === 'middle' ? '#EFF6FF' : '#FFF8E1'} />
                  {activeHand === 'left' && activeFinger === 'middle' && (
                    <circle cx="112.5" cy="27" r="14" fill="none" stroke="#3B82F6" strokeWidth="2.5" className="animate-ping" />
                  )}
                </g>

                {/* Left Index (人差し指 - F, R, T, G, V, B) */}
                <g className={activeHand === 'left' && activeFinger === 'index' ? 'animate-finger-bounce' : ''}>
                  <rect
                    x="128"
                    y="29"
                    width="18"
                    height="62"
                    rx="9"
                    fill={activeHand === 'left' && activeFinger === 'index' ? '#10B981' : '#FFE082'}
                    stroke={activeHand === 'left' && activeFinger === 'index' ? '#047857' : '#F57C00'}
                    strokeWidth="2.5"
                  />
                  {/* F tactile notch dot */}
                  <circle cx="137" cy="36" r="3.5" fill="#047857" />
                  <ellipse cx="137" cy="36" rx="5.5" ry="4.5" fill={activeHand === 'left' && activeFinger === 'index' ? '#ECFDF5' : '#FFF8E1'} opacity="0.8" />
                  {activeHand === 'left' && activeFinger === 'index' && (
                    <circle cx="137" cy="36" r="13" fill="none" stroke="#10B981" strokeWidth="2.5" className="animate-ping" />
                  )}
                </g>

                {/* Left Thumb (親指 - Space) */}
                <g className={activeHand === 'left' && activeFinger === 'thumb' ? 'animate-finger-bounce' : ''}>
                  <path
                    d="M 148 100 C 165 96 178 104 178 118 C 178 128 160 132 146 126 Z"
                    fill={activeHand === 'left' && activeFinger === 'thumb' ? '#FBBF24' : '#FFE082'}
                    stroke={activeHand === 'left' && activeFinger === 'thumb' ? '#B45309' : '#F57C00'}
                    strokeWidth="2.5"
                  />
                </g>

                {/* Gentle palm creases */}
                <path d="M 88 100 Q 115 118 135 105" stroke="#FFA726" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Clear Finger Labels under Left Hand */}
            <div className="flex gap-1 text-[10px] font-bold text-gray-500 mt-1">
              <span className={`px-1 rounded ${activeHand === 'left' && activeFinger === 'pinky' ? 'bg-pink-100 text-pink-700 font-black' : ''}`}>小指</span>
              <span className={`px-1 rounded ${activeHand === 'left' && activeFinger === 'ring' ? 'bg-purple-100 text-purple-700 font-black' : ''}`}>薬指</span>
              <span className={`px-1 rounded ${activeHand === 'left' && activeFinger === 'middle' ? 'bg-blue-100 text-blue-700 font-black' : ''}`}>中指</span>
              <span className={`px-1 rounded ${activeHand === 'left' && activeFinger === 'index' ? 'bg-emerald-100 text-emerald-700 font-black' : ''}`}>人指(F)</span>
            </div>
          </div>

          {/* RIGHT HAND (みぎて) */}
          <div
            className={`flex flex-col items-center transition-all duration-200 ${
              activeHand === 'right' ? 'scale-102' : 'opacity-85'
            }`}
          >
            <div className="flex items-center gap-1 mb-1">
              <span className="w-2 h-2 rounded-full bg-orange-400 inline-block"></span>
              <span className="text-xs font-black text-gray-700">みぎて</span>
              {activeHand === 'right' && (
                <span className="text-[10px] bg-orange-500 text-white font-bold px-1.5 py-0.2 rounded-full animate-pulse">
                  つかう！
                </span>
              )}
            </div>

            {/* Right Hand 3D SVG */}
            <div className="w-full max-w-[190px] aspect-4/3 relative">
              <svg
                viewBox="0 0 240 180"
                className="w-full h-full drop-shadow-md select-none overflow-visible"
              >
                <defs>
                  <linearGradient id="skinBaseR" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFE0B2" />
                    <stop offset="70%" stopColor="#FFCC80" />
                    <stop offset="100%" stopColor="#FFA726" />
                  </linearGradient>
                  <filter id="handShadowR" x="-10%" y="-10%" width="130%" height="130%">
                    <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodOpacity="0.2" />
                  </filter>
                </defs>

                {/* Wrist & Palm Base */}
                <ellipse cx="120" cy="165" rx="50" ry="10" fill="#D1D5DB" opacity="0.35" />
                <path
                  d="M 95 135 Q 85 170 95 175 Q 120 178 145 175 Q 155 170 145 135 Z"
                  fill="url(#skinBaseR)"
                  stroke="#FB8C00"
                  strokeWidth="2"
                />
                <path
                  d="M 75 115 C 65 80 95 75 125 77 C 155 75 185 80 175 110 C 170 142 150 148 125 148 C 100 148 80 142 75 115 Z"
                  fill="url(#skinBaseR)"
                  stroke="#FB8C00"
                  strokeWidth="2.5"
                  filter="url(#handShadowR)"
                />

                {/* Right Thumb (親指 - Space) */}
                <g className={activeHand === 'right' && activeFinger === 'thumb' ? 'animate-finger-bounce' : ''}>
                  <path
                    d="M 92 100 C 75 96 62 104 62 118 C 62 128 80 132 94 126 Z"
                    fill={activeHand === 'right' && activeFinger === 'thumb' ? '#FBBF24' : '#FFE082'}
                    stroke={activeHand === 'right' && activeFinger === 'thumb' ? '#B45309' : '#F57C00'}
                    strokeWidth="2.5"
                  />
                </g>

                {/* Right Index (人差し指 - J, U, Y, H, N, M) */}
                <g className={activeHand === 'right' && activeFinger === 'index' ? 'animate-finger-bounce' : ''}>
                  <rect
                    x="94"
                    y="29"
                    width="18"
                    height="62"
                    rx="9"
                    fill={activeHand === 'right' && activeFinger === 'index' ? '#FB923C' : '#FFE082'}
                    stroke={activeHand === 'right' && activeFinger === 'index' ? '#C2410C' : '#F57C00'}
                    strokeWidth="2.5"
                  />
                  {/* J tactile notch dot */}
                  <circle cx="103" cy="36" r="3.5" fill="#9A3412" />
                  <ellipse cx="103" cy="36" rx="5.5" ry="4.5" fill={activeHand === 'right' && activeFinger === 'index' ? '#FFF7ED' : '#FFF8E1'} opacity="0.8" />
                  {activeHand === 'right' && activeFinger === 'index' && (
                    <circle cx="103" cy="36" r="13" fill="none" stroke="#FB923C" strokeWidth="2.5" className="animate-ping" />
                  )}
                </g>

                {/* Right Middle (中指 - K, I) */}
                <g className={activeHand === 'right' && activeFinger === 'middle' ? 'animate-finger-bounce' : ''}>
                  <rect
                    x="118"
                    y="20"
                    width="19"
                    height="68"
                    rx="9.5"
                    fill={activeHand === 'right' && activeFinger === 'middle' ? '#14B8A6' : '#FFE082'}
                    stroke={activeHand === 'right' && activeFinger === 'middle' ? '#0F766E' : '#F57C00'}
                    strokeWidth="2.5"
                  />
                  <ellipse cx="127.5" cy="27" rx="6" ry="4.5" fill={activeHand === 'right' && activeFinger === 'middle' ? '#F0FDFA' : '#FFF8E1'} />
                  {activeHand === 'right' && activeFinger === 'middle' && (
                    <circle cx="127.5" cy="27" r="14" fill="none" stroke="#14B8A6" strokeWidth="2.5" className="animate-ping" />
                  )}
                </g>

                {/* Right Ring (薬指 - L, O) */}
                <g className={activeHand === 'right' && activeFinger === 'ring' ? 'animate-finger-bounce' : ''}>
                  <rect
                    x="143"
                    y="32"
                    width="18"
                    height="58"
                    rx="9"
                    fill={activeHand === 'right' && activeFinger === 'ring' ? '#F43F5E' : '#FFE082'}
                    stroke={activeHand === 'right' && activeFinger === 'ring' ? '#BE123C' : '#F57C00'}
                    strokeWidth="2.5"
                  />
                  <ellipse cx="152" cy="39" rx="5.5" ry="4.5" fill={activeHand === 'right' && activeFinger === 'ring' ? '#FFF1F2' : '#FFF8E1'} />
                  {activeHand === 'right' && activeFinger === 'ring' && (
                    <circle cx="152" cy="39" r="13" fill="none" stroke="#F43F5E" strokeWidth="2.5" className="animate-ping" />
                  )}
                </g>

                {/* Right Pinky (小指 - P, -) */}
                <g className={activeHand === 'right' && activeFinger === 'pinky' ? 'animate-finger-bounce' : ''}>
                  <rect
                    x="167"
                    y="50"
                    width="17"
                    height="45"
                    rx="8.5"
                    fill={activeHand === 'right' && activeFinger === 'pinky' ? '#D946EF' : '#FFE082'}
                    stroke={activeHand === 'right' && activeFinger === 'pinky' ? '#A21CAF' : '#F57C00'}
                    strokeWidth="2.5"
                  />
                  <ellipse cx="175.5" cy="57" rx="5" ry="4" fill={activeHand === 'right' && activeFinger === 'pinky' ? '#FDF4FF' : '#FFF8E1'} />
                  {activeHand === 'right' && activeFinger === 'pinky' && (
                    <circle cx="175.5" cy="57" r="12" fill="none" stroke="#D946EF" strokeWidth="2.5" className="animate-ping" />
                  )}
                </g>

                {/* Gentle palm creases */}
                <path d="M 105 105 Q 125 118 152 100" stroke="#FFA726" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            </div>

            {/* Clear Finger Labels under Right Hand */}
            <div className="flex gap-1 text-[10px] font-bold text-gray-500 mt-1">
              <span className={`px-1 rounded ${activeHand === 'right' && activeFinger === 'index' ? 'bg-orange-100 text-orange-700 font-black' : ''}`}>人指(J)</span>
              <span className={`px-1 rounded ${activeHand === 'right' && activeFinger === 'middle' ? 'bg-teal-100 text-teal-700 font-black' : ''}`}>中指</span>
              <span className={`px-1 rounded ${activeHand === 'right' && activeFinger === 'ring' ? 'bg-rose-100 text-rose-700 font-black' : ''}`}>薬指</span>
              <span className={`px-1 rounded ${activeHand === 'right' && activeFinger === 'pinky' ? 'bg-fuchsia-100 text-fuchsia-700 font-black' : ''}`}>小指</span>
            </div>
          </div>
        </div>

        {/* Home Row Notice */}
        {showHomePositionHint && (
          <div className="mt-2 bg-white/90 border border-amber-200 px-2.5 py-1 rounded-full flex items-center justify-center gap-1.5 shadow-2xs text-[11px] font-bold text-amber-800">
            <span>💡</span>
            <span>
              <strong className="text-emerald-700">F</strong> と <strong className="text-orange-700">J</strong> の「ポッチ」に左右の 人差し指 を おいてね！
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
