/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { STAGES, Stage } from '../utils/typingLogic';
import { X, Star, Sparkles } from 'lucide-react';

interface LevelSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStageId: number;
  onSelectStage: (stage: Stage) => void;
  stageStars: Record<number, number>; // stageId -> stars earned (0 to 3)
}

export const LevelSelectModal: React.FC<LevelSelectModalProps> = ({
  isOpen,
  onClose,
  currentStageId,
  onSelectStage,
  stageStars,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border-4 border-amber-300 overflow-hidden">
        {/* Modal Header */}
        <div className="bg-linear-to-r from-amber-400 via-orange-400 to-pink-400 p-4 sm:p-5 flex items-center justify-between text-white shadow-md">
          <div className="flex items-center gap-2">
            <Sparkles className="w-6 h-6 animate-spin text-yellow-200" />
            <h2 className="text-xl sm:text-2xl font-black tracking-wide">
              ステージを えらぼう！
            </h2>
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

        {/* Stages Grid */}
        <div className="p-4 sm:p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 bg-amber-50/30">
          {STAGES.map((stage) => {
            const isCurrent = stage.id === currentStageId;
            const stars = stageStars[stage.id] || 0;

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => {
                  onSelectStage(stage);
                  onClose();
                }}
                className={`text-left p-4 rounded-2xl border-3 transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between ${
                  isCurrent
                    ? 'bg-amber-100/90 border-amber-400 shadow-lg ring-3 ring-amber-300'
                    : 'bg-white border-slate-200 hover:border-amber-300 hover:shadow-md'
                }`}
              >
                {/* Header: Badge Emoji + Title */}
                <div className="flex items-start gap-2.5">
                  <span className="text-2xl sm:text-3xl p-1.5 sm:p-2 bg-amber-50 rounded-2xl border border-amber-200 shrink-0">
                    {stage.badgeEmoji}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className="text-[11px] font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full shrink-0">
                        {stage.tag}
                      </span>
                      {isCurrent && (
                        <span className="text-[10px] bg-rose-500 text-white font-bold px-2 py-0.5 rounded-full shrink-0 animate-pulse">
                          いまここ！
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm sm:text-base font-black text-slate-800 leading-snug break-words">
                      {stage.title}
                    </h3>
                  </div>
                </div>

                <p className="text-[11px] font-medium text-slate-600 mt-1.5 line-clamp-1">
                  {stage.subtitle}
                </p>

                {/* Stars Row */}
                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-bold">
                    もんだい数: {stage.words.length}もん
                  </span>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3].map((starNum) => (
                      <Star
                        key={starNum}
                        className={`w-4 h-4 ${
                          starNum <= stars
                            ? 'text-amber-400 fill-amber-400 drop-shadow-xs'
                            : 'text-slate-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </button>
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
