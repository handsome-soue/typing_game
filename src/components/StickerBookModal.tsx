/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { STICKER_REWARDS, StickerReward } from '../utils/typingLogic';
import { X, Star, Award, Sparkles } from 'lucide-react';

interface StickerBookModalProps {
  isOpen: boolean;
  onClose: () => void;
  totalStars: number;
}

export const StickerBookModal: React.FC<StickerBookModalProps> = ({
  isOpen,
  onClose,
  totalStars,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border-4 border-yellow-300 overflow-hidden">
        {/* Header */}
        <div className="bg-linear-to-r from-yellow-400 via-amber-400 to-orange-400 p-4 sm:p-5 flex items-center justify-between text-white shadow-md">
          <div className="flex items-center gap-3">
            <Award className="w-7 h-7 text-yellow-100 animate-bounce" />
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-wide">
                ごほうび シールちょう
              </h2>
              <p className="text-xs text-yellow-100 font-bold">
                星をあつめて かわいいシールをコレクションしよう！
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="とじる"
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Total Stars Counter Banner */}
        <div className="bg-amber-100/70 border-b border-amber-200 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-6 h-6 text-amber-500 fill-amber-400 animate-spin" />
            <span className="text-sm font-bold text-amber-900">あつめた星の数:</span>
          </div>
          <span className="text-2xl sm:text-3xl font-black text-amber-600">
            {totalStars} <span className="text-base text-amber-500">こ ⭐</span>
          </span>
        </div>

        {/* Stickers Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 bg-amber-50/20">
          {STICKER_REWARDS.map((sticker: StickerReward) => {
            const isUnlocked = totalStars >= sticker.requiredStars;
            const remaining = sticker.requiredStars - totalStars;

            return (
              <div
                key={sticker.id}
                className={`p-3 rounded-2xl border-3 flex flex-col items-center text-center relative transition-transform ${
                  isUnlocked
                    ? 'bg-white border-amber-300 shadow-md transform hover:scale-105'
                    : 'bg-slate-50/90 border-dashed border-slate-300 opacity-60'
                }`}
              >
                {/* Badge Emoji */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-2 relative ${
                    isUnlocked ? 'bg-amber-100/60 shadow-inner' : 'bg-slate-200/70 grayscale'
                  }`}
                >
                  {isUnlocked ? sticker.emoji : '🔒'}
                  {isUnlocked && (
                    <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1 animate-ping" />
                  )}
                </div>

                <h3 className="text-sm font-black text-slate-800 leading-tight">
                  {sticker.name}
                </h3>

                <p className="text-[11px] font-bold text-slate-500 mt-1 line-clamp-2">
                  {sticker.description}
                </p>

                {/* Status Badge */}
                <div className="mt-2 w-full pt-1.5 border-t border-slate-100">
                  {isUnlocked ? (
                    <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full inline-block">
                      ✨ ゲット！
                    </span>
                  ) : (
                    <span className="text-[10px] font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full inline-block">
                      あと {remaining} ⭐
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-3 bg-white border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-700 font-bold text-sm cursor-pointer transition-colors"
          >
            とじる
          </button>
        </div>
      </div>
    </div>
  );
};
