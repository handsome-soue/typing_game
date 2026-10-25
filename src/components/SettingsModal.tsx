/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Volume2, VolumeX, Mic, MicOff, RefreshCw } from 'lucide-react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  soundEnabled: boolean;
  onToggleSound: (enabled: boolean) => void;
  voiceEnabled: boolean;
  onToggleVoice: (enabled: boolean) => void;
  voiceSpeed: number;
  onChangeVoiceSpeed: (speed: number) => void;
  onResetProgress: () => void;
}

export const SettingsModal: React.FC<SettingsModalProps> = ({
  isOpen,
  onClose,
  soundEnabled,
  onToggleSound,
  voiceEnabled,
  onToggleVoice,
  voiceSpeed,
  onChangeVoiceSpeed,
  onResetProgress,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl border-4 border-slate-300 overflow-hidden">
        {/* Header */}
        <div className="bg-slate-700 p-4 flex items-center justify-between text-white">
          <h2 className="text-lg font-black tracking-wide">せってい（保護者・設定）</h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="とじる"
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col gap-4 text-slate-800">
          {/* Sound Effects Toggle */}
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-3">
              {soundEnabled ? (
                <Volume2 className="w-6 h-6 text-emerald-600" />
              ) : (
                <VolumeX className="w-6 h-6 text-slate-400" />
              )}
              <div>
                <p className="text-sm font-black">こうかおん（音）</p>
                <p className="text-xs text-slate-500">タイピング音や ファンファーレ</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onToggleSound(!soundEnabled)}
              className={`w-14 h-8 rounded-full transition-colors relative cursor-pointer ${
                soundEnabled ? 'bg-emerald-500' : 'bg-slate-300'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full bg-white absolute top-1 transition-transform shadow-xs ${
                  soundEnabled ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>

          {/* Voice Narration Toggle */}
          <div className="flex items-center justify-between p-3 bg-slate-50 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-3">
              {voiceEnabled ? (
                <Mic className="w-6 h-6 text-sky-600" />
              ) : (
                <MicOff className="w-6 h-6 text-slate-400" />
              )}
              <div>
                <p className="text-sm font-black">こえのよみあげ（音声）</p>
                <p className="text-xs text-slate-500">言葉や キーをやさしく案内</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => onToggleVoice(!voiceEnabled)}
              className={`w-14 h-8 rounded-full transition-colors relative cursor-pointer ${
                voiceEnabled ? 'bg-sky-500' : 'bg-slate-300'
              }`}
            >
              <span
                className={`w-6 h-6 rounded-full bg-white absolute top-1 transition-transform shadow-xs ${
                  voiceEnabled ? 'right-1' : 'left-1'
                }`}
              />
            </button>
          </div>

          {/* Voice Speed */}
          {voiceEnabled && (
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col gap-2">
              <label htmlFor="voice-speed" className="text-xs font-black text-slate-700">こえの はやさ</label>
              <div className="flex gap-2">
                {[
                  { label: 'ゆっくり', val: 0.75 },
                  { label: 'ふつう', val: 0.9 },
                  { label: 'すこしはやい', val: 1.1 },
                ].map((opt) => (
                  <button
                    key={opt.val}
                    type="button"
                    onClick={() => onChangeVoiceSpeed(opt.val)}
                    className={`flex-1 py-1.5 rounded-xl text-xs font-black border transition-all cursor-pointer ${
                      voiceSpeed === opt.val
                        ? 'bg-sky-500 text-white border-sky-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Reset progress */}
          <div className="pt-2 border-t border-slate-200">
            <button
              type="button"
              onClick={() => {
                if (window.confirm('これまでの星やシールをリセットしますか？')) {
                  onResetProgress();
                  onClose();
                }
              }}
              className="w-full flex items-center justify-center gap-2 py-2 text-xs font-bold text-rose-600 hover:bg-rose-50 rounded-xl transition-colors cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" />
              <span>星と記録を最初からやり直す</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 bg-slate-100 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-300 hover:bg-slate-400 text-slate-800 font-bold text-sm cursor-pointer transition-colors"
          >
            とじる
          </button>
        </div>
      </div>
    </div>
  );
};
