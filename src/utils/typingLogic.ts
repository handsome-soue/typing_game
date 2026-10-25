/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type HandSide = 'left' | 'right';
export type FingerType = 'pinky' | 'ring' | 'middle' | 'index' | 'thumb';

export interface FingerInfo {
  hand: HandSide;
  finger: FingerType;
  handJa: string;
  fingerJa: string;
  fingerLabelJa: string;
  color: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

export const FINGER_MAPPINGS: Record<string, FingerInfo> = {
  // Left Pinky
  Q: { hand: 'left', finger: 'pinky', handJa: 'ひだりて', fingerJa: 'こゆび', fingerLabelJa: 'ひだりての こゆび', color: '#EC4899', bgColor: 'bg-pink-100', borderColor: 'border-pink-400', textColor: 'text-pink-600' },
  A: { hand: 'left', finger: 'pinky', handJa: 'ひだりて', fingerJa: 'こゆび', fingerLabelJa: 'ひだりての こゆび', color: '#EC4899', bgColor: 'bg-pink-100', borderColor: 'border-pink-400', textColor: 'text-pink-600' },
  Z: { hand: 'left', finger: 'pinky', handJa: 'ひだりて', fingerJa: 'こゆび', fingerLabelJa: 'ひだりての こゆび', color: '#EC4899', bgColor: 'bg-pink-100', borderColor: 'border-pink-400', textColor: 'text-pink-600' },
  1: { hand: 'left', finger: 'pinky', handJa: 'ひだりて', fingerJa: 'こゆび', fingerLabelJa: 'ひだりての こゆび', color: '#EC4899', bgColor: 'bg-pink-100', borderColor: 'border-pink-400', textColor: 'text-pink-600' },

  // Left Ring
  W: { hand: 'left', finger: 'ring', handJa: 'ひだりて', fingerJa: 'くすりゆび', fingerLabelJa: 'ひだりての くすりゆび', color: '#8B5CF6', bgColor: 'bg-purple-100', borderColor: 'border-purple-400', textColor: 'text-purple-600' },
  S: { hand: 'left', finger: 'ring', handJa: 'ひだりて', fingerJa: 'くすりゆび', fingerLabelJa: 'ひだりての くすりゆび', color: '#8B5CF6', bgColor: 'bg-purple-100', borderColor: 'border-purple-400', textColor: 'text-purple-600' },
  X: { hand: 'left', finger: 'ring', handJa: 'ひだりて', fingerJa: 'くすりゆび', fingerLabelJa: 'ひだりての くすりゆび', color: '#8B5CF6', bgColor: 'bg-purple-100', borderColor: 'border-purple-400', textColor: 'text-purple-600' },
  2: { hand: 'left', finger: 'ring', handJa: 'ひだりて', fingerJa: 'くすりゆび', fingerLabelJa: 'ひだりての くすりゆび', color: '#8B5CF6', bgColor: 'bg-purple-100', borderColor: 'border-purple-400', textColor: 'text-purple-600' },

  // Left Middle
  E: { hand: 'left', finger: 'middle', handJa: 'ひだりて', fingerJa: 'なかゆび', fingerLabelJa: 'ひだりての なかゆび', color: '#3B82F6', bgColor: 'bg-blue-100', borderColor: 'border-blue-400', textColor: 'text-blue-600' },
  D: { hand: 'left', finger: 'middle', handJa: 'ひだりて', fingerJa: 'なかゆび', fingerLabelJa: 'ひだりての なかゆび', color: '#3B82F6', bgColor: 'bg-blue-100', borderColor: 'border-blue-400', textColor: 'text-blue-600' },
  C: { hand: 'left', finger: 'middle', handJa: 'ひだりて', fingerJa: 'なかゆび', fingerLabelJa: 'ひだりての なかゆび', color: '#3B82F6', bgColor: 'bg-blue-100', borderColor: 'border-blue-400', textColor: 'text-blue-600' },
  3: { hand: 'left', finger: 'middle', handJa: 'ひだりて', fingerJa: 'なかゆび', fingerLabelJa: 'ひだりての なかゆび', color: '#3B82F6', bgColor: 'bg-blue-100', borderColor: 'border-blue-400', textColor: 'text-blue-600' },

  // Left Index
  R: { hand: 'left', finger: 'index', handJa: 'ひだりて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'ひだりての ひとさしゆび', color: '#10B981', bgColor: 'bg-emerald-100', borderColor: 'border-emerald-400', textColor: 'text-emerald-600' },
  T: { hand: 'left', finger: 'index', handJa: 'ひだりて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'ひだりての ひとさしゆび', color: '#10B981', bgColor: 'bg-emerald-100', borderColor: 'border-emerald-400', textColor: 'text-emerald-600' },
  F: { hand: 'left', finger: 'index', handJa: 'ひだりて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'ひだりての ひとさしゆび（ポッチのキー）', color: '#10B981', bgColor: 'bg-emerald-100', borderColor: 'border-emerald-400', textColor: 'text-emerald-600' },
  G: { hand: 'left', finger: 'index', handJa: 'ひだりて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'ひだりての ひとさしゆび', color: '#10B981', bgColor: 'bg-emerald-100', borderColor: 'border-emerald-400', textColor: 'text-emerald-600' },
  V: { hand: 'left', finger: 'index', handJa: 'ひだりて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'ひだりての ひとさしゆび', color: '#10B981', bgColor: 'bg-emerald-100', borderColor: 'border-emerald-400', textColor: 'text-emerald-600' },
  B: { hand: 'left', finger: 'index', handJa: 'ひだりて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'ひだりての ひとさしゆび', color: '#10B981', bgColor: 'bg-emerald-100', borderColor: 'border-emerald-400', textColor: 'text-emerald-600' },
  4: { hand: 'left', finger: 'index', handJa: 'ひだりて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'ひだりての ひとさしゆび', color: '#10B981', bgColor: 'bg-emerald-100', borderColor: 'border-emerald-400', textColor: 'text-emerald-600' },
  5: { hand: 'left', finger: 'index', handJa: 'ひだりて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'ひだりての ひとさしゆび', color: '#10B981', bgColor: 'bg-emerald-100', borderColor: 'border-emerald-400', textColor: 'text-emerald-600' },

  // Right Index
  Y: { hand: 'right', finger: 'index', handJa: 'みぎて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'みぎての ひとさしゆび', color: '#F97316', bgColor: 'bg-orange-100', borderColor: 'border-orange-400', textColor: 'text-orange-600' },
  U: { hand: 'right', finger: 'index', handJa: 'みぎて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'みぎての ひとさしゆび', color: '#F97316', bgColor: 'bg-orange-100', borderColor: 'border-orange-400', textColor: 'text-orange-600' },
  H: { hand: 'right', finger: 'index', handJa: 'みぎて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'みぎての ひとさしゆび', color: '#F97316', bgColor: 'bg-orange-100', borderColor: 'border-orange-400', textColor: 'text-orange-600' },
  J: { hand: 'right', finger: 'index', handJa: 'みぎて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'みぎての ひとさしゆび（ポッチのキー）', color: '#F97316', bgColor: 'bg-orange-100', borderColor: 'border-orange-400', textColor: 'text-orange-600' },
  N: { hand: 'right', finger: 'index', handJa: 'みぎて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'みぎての ひとさしゆび', color: '#F97316', bgColor: 'bg-orange-100', borderColor: 'border-orange-400', textColor: 'text-orange-600' },
  M: { hand: 'right', finger: 'index', handJa: 'みぎて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'みぎての ひとさしゆび', color: '#F97316', bgColor: 'bg-orange-100', borderColor: 'border-orange-400', textColor: 'text-orange-600' },
  6: { hand: 'right', finger: 'index', handJa: 'みぎて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'みぎての ひとさしゆび', color: '#F97316', bgColor: 'bg-orange-100', borderColor: 'border-orange-400', textColor: 'text-orange-600' },
  7: { hand: 'right', finger: 'index', handJa: 'みぎて', fingerJa: 'ひとさしゆび', fingerLabelJa: 'みぎての ひとさしゆび', color: '#F97316', bgColor: 'bg-orange-100', borderColor: 'border-orange-400', textColor: 'text-orange-600' },

  // Right Middle
  I: { hand: 'right', finger: 'middle', handJa: 'みぎて', fingerJa: 'なかゆび', fingerLabelJa: 'みぎての なかゆび', color: '#14B8A6', bgColor: 'bg-teal-100', borderColor: 'border-teal-400', textColor: 'text-teal-600' },
  K: { hand: 'right', finger: 'middle', handJa: 'みぎて', fingerJa: 'なかゆび', fingerLabelJa: 'みぎての なかゆび', color: '#14B8A6', bgColor: 'bg-teal-100', borderColor: 'border-teal-400', textColor: 'text-teal-600' },
  8: { hand: 'right', finger: 'middle', handJa: 'みぎて', fingerJa: 'なかゆび', fingerLabelJa: 'みぎての なかゆび', color: '#14B8A6', bgColor: 'bg-teal-100', borderColor: 'border-teal-400', textColor: 'text-teal-600' },

  // Right Ring
  O: { hand: 'right', finger: 'ring', handJa: 'みぎて', fingerJa: 'くすりゆび', fingerLabelJa: 'みぎての くすりゆび', color: '#F43F5E', bgColor: 'bg-rose-100', borderColor: 'border-rose-400', textColor: 'text-rose-600' },
  L: { hand: 'right', finger: 'ring', handJa: 'みぎて', fingerJa: 'くすりゆび', fingerLabelJa: 'みぎての くすりゆび', color: '#F43F5E', bgColor: 'bg-rose-100', borderColor: 'border-rose-400', textColor: 'text-rose-600' },
  9: { hand: 'right', finger: 'ring', handJa: 'みぎて', fingerJa: 'くすりゆび', fingerLabelJa: 'みぎての くすりゆび', color: '#F43F5E', bgColor: 'bg-rose-100', borderColor: 'border-rose-400', textColor: 'text-rose-600' },

  // Right Pinky
  P: { hand: 'right', finger: 'pinky', handJa: 'みぎて', fingerJa: 'こゆび', fingerLabelJa: 'みぎての こゆび', color: '#D946EF', bgColor: 'bg-fuchsia-100', borderColor: 'border-fuchsia-400', textColor: 'text-fuchsia-600' },
  0: { hand: 'right', finger: 'pinky', handJa: 'みぎて', fingerJa: 'こゆび', fingerLabelJa: 'みぎての こゆび', color: '#D946EF', bgColor: 'bg-fuchsia-100', borderColor: 'border-fuchsia-400', textColor: 'text-fuchsia-600' },
  '-': { hand: 'right', finger: 'pinky', handJa: 'みぎて', fingerJa: 'こゆび', fingerLabelJa: 'みぎての こゆび', color: '#D946EF', bgColor: 'bg-fuchsia-100', borderColor: 'border-fuchsia-400', textColor: 'text-fuchsia-600' },

  // Thumbs
  ' ': { hand: 'right', finger: 'thumb', handJa: 'りょうて', fingerJa: 'おやゆび', fingerLabelJa: 'おやゆび（スペースキー）', color: '#EAB308', bgColor: 'bg-yellow-100', borderColor: 'border-yellow-400', textColor: 'text-yellow-600' },
};

export interface WordItem {
  id: string;
  hiragana: string; // The text to read (e.g. 「あお」)
  meaningJa?: string; // Meaning / hint
  emoji: string; // Visual picture for the 6yo child
  romajiOptions: string[]; // Standard Romaji sequences e.g. ["AO"] or for し ["SI", "SHI"]
  defaultRomaji: string; // Display default romaji e.g. "AO"
}

export interface Stage {
  id: number;
  title: string; // e.g. "ステージ1: あ・い・う・え・お"
  subtitle: string; // "母音（ぼいん）のきほんをおぼえよう！"
  tag: string; // "あ行のきほん"
  color: string;
  badgeEmoji: string;
  words: WordItem[];
}

export const STAGES: Stage[] = [
  {
    id: 1,
    title: 'ステージ１: あ・い・う・え・お',
    subtitle: 'すべての基本！５つの母音（ぼいん）をおぼえよう',
    tag: 'あいうえお',
    color: 'from-amber-400 to-orange-400',
    badgeEmoji: '🐣',
    words: [
      { id: '1-1', hiragana: 'あ', meaningJa: 'あひるの「あ」', emoji: '🦆', romajiOptions: ['A'], defaultRomaji: 'A' },
      { id: '1-2', hiragana: 'い', meaningJa: 'いちごの「い」', emoji: '🍓', romajiOptions: ['I'], defaultRomaji: 'I' },
      { id: '1-3', hiragana: 'う', meaningJa: 'うさぎの「う」', emoji: '🐰', romajiOptions: ['U'], defaultRomaji: 'U' },
      { id: '1-4', hiragana: 'え', meaningJa: 'えんぴつの「え」', emoji: '✏️', romajiOptions: ['E'], defaultRomaji: 'E' },
      { id: '1-5', hiragana: 'お', meaningJa: 'おにぎりの「お」', emoji: '🍙', romajiOptions: ['O'], defaultRomaji: 'O' },
    ],
  },
  {
    id: 2,
    title: 'ステージ２: あ行だけの ことば',
    subtitle: 'あ・い・う・え・お だけでできる 楽しいことば！',
    tag: 'あ行のことば',
    color: 'from-pink-400 to-rose-400',
    badgeEmoji: '🌊',
    words: [
      { id: '2-1', hiragana: 'あお', meaningJa: 'あおぞらの「あお」', emoji: '🔵', romajiOptions: ['AO'], defaultRomaji: 'AO' },
      { id: '2-2', hiragana: 'いえ', meaningJa: 'かわいい おうち', emoji: '🏠', romajiOptions: ['IE'], defaultRomaji: 'IE' },
      { id: '2-3', hiragana: 'うえ', meaningJa: 'うえを むこう！', emoji: '⬆️', romajiOptions: ['UE'], defaultRomaji: 'UE' },
      { id: '2-4', hiragana: 'あい', meaningJa: 'だいすきな ハート', emoji: '💖', romajiOptions: ['AI'], defaultRomaji: 'AI' },
      { id: '2-5', hiragana: 'おおい', meaningJa: 'たくさん あるよ', emoji: '✨', romajiOptions: ['OOI'], defaultRomaji: 'OOI' },
      { id: '2-6', hiragana: 'おう', meaningJa: 'おうさま！王様', emoji: '👑', romajiOptions: ['OU'], defaultRomaji: 'OU' },
      { id: '2-7', hiragana: 'え', meaningJa: 'おえかき・えほん', emoji: '🎨', romajiOptions: ['E'], defaultRomaji: 'E' },
    ],
  },
  {
    id: 3,
    title: 'ステージ３: か・き・く・け・こ',
    subtitle: 'Kのキーと あいうえお を くっつけよう！',
    tag: 'かきくけこ',
    color: 'from-blue-400 to-cyan-400',
    badgeEmoji: '🦀',
    words: [
      { id: '3-1', hiragana: 'か', meaningJa: 'かにの「か」', emoji: '🦀', romajiOptions: ['KA'], defaultRomaji: 'KA' },
      { id: '3-2', hiragana: 'き', meaningJa: 'きいろの「き」', emoji: '🌳', romajiOptions: ['KI'], defaultRomaji: 'KI' },
      { id: '3-3', hiragana: 'く', meaningJa: 'くるまの「く」', emoji: '🚗', romajiOptions: ['KU'], defaultRomaji: 'KU' },
      { id: '3-4', hiragana: 'け', meaningJa: 'けいとの「け」', emoji: '🧶', romajiOptions: ['KE'], defaultRomaji: 'KE' },
      { id: '3-5', hiragana: 'こ', meaningJa: 'こいぬの「こ」', emoji: '🐶', romajiOptions: ['KO'], defaultRomaji: 'KO' },
    ],
  },
  {
    id: 4,
    title: 'ステージ４: か行＋あ行の ことば',
    subtitle: '覚えた か行 と あ行 を 組み合わせてみよう！',
    tag: 'か行のことば',
    color: 'from-emerald-400 to-teal-400',
    badgeEmoji: '🍂',
    words: [
      { id: '4-1', hiragana: 'かお', meaningJa: 'にこにこ笑顔のかお', emoji: '😊', romajiOptions: ['KAO'], defaultRomaji: 'KAO' },
      { id: '4-2', hiragana: 'あき', meaningJa: 'もみじの 秋', emoji: '🍁', romajiOptions: ['AKI'], defaultRomaji: 'AKI' },
      { id: '4-3', hiragana: 'いけ', meaningJa: 'お魚がいる 池', emoji: '🪷', romajiOptions: ['IKE'], defaultRomaji: 'IKE' },
      { id: '4-4', hiragana: 'こえ', meaningJa: '元気な お返事のこえ', emoji: '🗣️', romajiOptions: ['KOE'], defaultRomaji: 'KOE' },
      { id: '4-5', hiragana: 'きく', meaningJa: 'きれいなお花・聴く', emoji: '🌼', romajiOptions: ['KIKU'], defaultRomaji: 'KIKU' },
      { id: '4-6', hiragana: 'あか', meaningJa: 'あかい リンゴ', emoji: '🍎', romajiOptions: ['AKA'], defaultRomaji: 'AKA' },
      { id: '4-7', hiragana: 'かい', meaningJa: 'うみべの 貝がら', emoji: '🐚', romajiOptions: ['KAI'], defaultRomaji: 'KAI' },
    ],
  },
  {
    id: 5,
    title: 'ステージ５: さ・し・す・せ・そ',
    subtitle: 'Sのキーと あいうえお！すきなことばをうとう',
    tag: 'さしすせそ',
    color: 'from-violet-400 to-purple-400',
    badgeEmoji: '🍣',
    words: [
      { id: '5-1', hiragana: 'さ', meaningJa: 'さくらの「さ」', emoji: '🌸', romajiOptions: ['SA'], defaultRomaji: 'SA' },
      { id: '5-2', hiragana: 'し', meaningJa: 'しかの「し」', emoji: '🦌', romajiOptions: ['SI', 'SHI'], defaultRomaji: 'SI' },
      { id: '5-3', hiragana: 'す', meaningJa: 'すずめの「す」', emoji: '🐦', romajiOptions: ['SU'], defaultRomaji: 'SU' },
      { id: '5-4', hiragana: 'あさ', meaningJa: 'おはようの 朝', emoji: '🌅', romajiOptions: ['ASA'], defaultRomaji: 'ASA' },
      { id: '5-5', hiragana: 'すし', meaningJa: 'おいしい おすし', emoji: '🍣', romajiOptions: ['SUSI', 'SUSHI'], defaultRomaji: 'SUSI' },
      { id: '5-6', hiragana: 'そこ', meaningJa: 'あっちと そこ', emoji: '📍', romajiOptions: ['SOKO'], defaultRomaji: 'SOKO' },
      { id: '5-7', hiragana: 'すいか', meaningJa: 'あまい スイカ', emoji: '🍉', romajiOptions: ['SUIKA'], defaultRomaji: 'SUIKA' },
      { id: '5-8', hiragana: 'うし', meaningJa: 'もーもー 牛さん', emoji: '🐄', romajiOptions: ['USI', 'USHI'], defaultRomaji: 'USI' },
    ],
  },
  {
    id: 6,
    title: 'ステージ６: た・ち・つ・て・と',
    subtitle: 'Tのキーと リズムよくタイピングしよう！',
    tag: 'たちつてと',
    color: 'from-amber-500 to-yellow-400',
    badgeEmoji: '🥁',
    words: [
      { id: '6-1', hiragana: 'うた', meaningJa: 'たのしい おうた', emoji: '🎵', romajiOptions: ['UTA'], defaultRomaji: 'UTA' },
      { id: '6-2', hiragana: 'て', meaningJa: 'みんなの おてて', emoji: '✋', romajiOptions: ['TE'], defaultRomaji: 'TE' },
      { id: '6-3', hiragana: 'とり', meaningJa: 'お空を飛ぶ 鳥さん', emoji: '🕊️', romajiOptions: ['TORI'], defaultRomaji: 'TORI' },
      { id: '6-4', hiragana: 'たいこ', meaningJa: 'ドンドン 太鼓', emoji: '🥁', romajiOptions: ['TAIKO'], defaultRomaji: 'TAIKO' },
      { id: '6-5', hiragana: 'つくえ', meaningJa: 'お勉強の 机', emoji: '🪑', romajiOptions: ['TUKUE', 'TSUKUE'], defaultRomaji: 'TUKUE' },
      { id: '6-6', hiragana: 'けいと', meaningJa: 'ふわふわ 毛糸', emoji: '🧶', romajiOptions: ['KEITO'], defaultRomaji: 'KEITO' },
      { id: '6-7', hiragana: 'ちち', meaningJa: 'おとうさん（父）', emoji: '👨', romajiOptions: ['TITI', 'CHICHI'], defaultRomaji: 'TITI' },
    ],
  },
  {
    id: 7,
    title: 'ステージ７: な・に・ぬ・ね・の',
    subtitle: 'Nのキーをおぼえて かわいい生き物をうとう！',
    tag: 'なにぬねの',
    color: 'from-green-400 to-emerald-500',
    badgeEmoji: '🐕',
    words: [
      { id: '7-1', hiragana: 'いぬ', meaningJa: 'わんわん 子犬', emoji: '🐕', romajiOptions: ['INU'], defaultRomaji: 'INU' },
      { id: '7-2', hiragana: 'ねこ', meaningJa: 'にゃんにゃん 猫', emoji: '🐱', romajiOptions: ['NEKO'], defaultRomaji: 'NEKO' },
      { id: '7-3', hiragana: 'なし', meaningJa: 'みずみずしい 梨', emoji: '🍐', romajiOptions: ['NASI', 'NASHI'], defaultRomaji: 'NASI' },
      { id: '7-4', hiragana: 'なつ', meaningJa: 'ひまわりの 夏', emoji: '🌻', romajiOptions: ['NATU', 'NATSU'], defaultRomaji: 'NATU' },
      { id: '7-5', hiragana: 'きのこ', meaningJa: 'もりの キノコ', emoji: '🍄', romajiOptions: ['KINOKO'], defaultRomaji: 'KINOKO' },
      { id: '7-6', hiragana: 'たぬき', meaningJa: 'ぽんぽこ タヌキ', emoji: '🦝', romajiOptions: ['TANUKI'], defaultRomaji: 'TANUKI' },
    ],
  },
  {
    id: 8,
    title: 'ステージ８: は・ひ・ふ・へ・ほ',
    subtitle: 'Hのキーをつかって ほしや はなをうとう！',
    tag: 'はひふへほ',
    color: 'from-sky-400 to-blue-500',
    badgeEmoji: '⭐',
    words: [
      { id: '8-1', hiragana: 'はな', meaningJa: 'きれいな お花', emoji: '🌸', romajiOptions: ['HANA'], defaultRomaji: 'HANA' },
      { id: '8-2', hiragana: 'ほし', meaningJa: 'きらきら お星さま', emoji: '⭐', romajiOptions: ['HOSI', 'HOSHI'], defaultRomaji: 'HOSI' },
      { id: '8-3', hiragana: 'ふね', meaningJa: 'うみをすすむ 船', emoji: '🚢', romajiOptions: ['HUNE', 'FUNE'], defaultRomaji: 'HUNE' },
      { id: '8-4', hiragana: 'はこ', meaningJa: 'たからものの 箱', emoji: '📦', romajiOptions: ['HAKO'], defaultRomaji: 'HAKO' },
      { id: '8-5', hiragana: 'ひと', meaningJa: 'やさしい 人', emoji: '🧑', romajiOptions: ['HITO'], defaultRomaji: 'HITO' },
      { id: '8-6', hiragana: 'へび', meaningJa: 'にょろにょろ ヘビ', emoji: '🐍', romajiOptions: ['HEBI'], defaultRomaji: 'HEBI' },
    ],
  },
  {
    id: 9,
    title: 'ステージ９: ま・み・む・め・も',
    subtitle: 'Mのキー！おいしい たべものがいっぱい！',
    tag: 'まみむめも',
    color: 'from-rose-400 to-red-400',
    badgeEmoji: '🍑',
    words: [
      { id: '9-1', hiragana: 'あめ', meaningJa: 'あまい キャンディ', emoji: '🍬', romajiOptions: ['AME'], defaultRomaji: 'AME' },
      { id: '9-2', hiragana: 'うみ', meaningJa: 'ひろい 海', emoji: '🌊', romajiOptions: ['UMI'], defaultRomaji: 'UMI' },
      { id: '9-3', hiragana: 'もも', meaningJa: 'ピンクの 桃', emoji: '🍑', romajiOptions: ['MOMO'], defaultRomaji: 'MOMO' },
      { id: '9-4', hiragana: 'くま', meaningJa: 'もこもこ クマさん', emoji: '🐻', romajiOptions: ['KUMA'], defaultRomaji: 'KUMA' },
      { id: '9-5', hiragana: 'たまご', meaningJa: 'まるい タマゴ', emoji: '🥚', romajiOptions: ['TAMAGO'], defaultRomaji: 'TAMAGO' },
      { id: '9-6', hiragana: 'まど', meaningJa: 'おへやの 窓', emoji: '🪟', romajiOptions: ['MADO'], defaultRomaji: 'MADO' },
    ],
  },
  {
    id: 10,
    title: 'ステージ１０: や・ゆ・よ・わ・を・ん',
    subtitle: 'Y と W のキー！「ん」はNNだよ',
    tag: 'やゆよ・わをん',
    color: 'from-teal-400 to-cyan-500',
    badgeEmoji: '🦁',
    words: [
      { id: '10-1', hiragana: 'やま', meaningJa: 'みどりの お山', emoji: '⛰️', romajiOptions: ['YAMA'], defaultRomaji: 'YAMA' },
      { id: '10-2', hiragana: 'ゆき', meaningJa: 'しろい 雪だるま', emoji: '⛄', romajiOptions: ['YUKI'], defaultRomaji: 'YUKI' },
      { id: '10-3', hiragana: 'わに', meaningJa: 'おおきな ワニ', emoji: '🐊', romajiOptions: ['WANI'], defaultRomaji: 'WANI' },
      { id: '10-4', hiragana: 'ほん', meaningJa: 'たのしい 絵本', emoji: '📖', romajiOptions: ['HONN', 'HON'], defaultRomaji: 'HONN' },
      { id: '10-5', hiragana: 'きりん', meaningJa: '首のながい キリン', emoji: '🦒', romajiOptions: ['KIRINN', 'KIRIN'], defaultRomaji: 'KIRINN' },
      { id: '10-6', hiragana: 'らいおん', meaningJa: '百獣の王 ライオン', emoji: '🦁', romajiOptions: ['RAIONN', 'RAION'], defaultRomaji: 'RAIONN' },
    ],
  },
  {
    id: 11,
    title: 'ステージ１１: てんてん（濁音）と まる（半濁音）',
    subtitle: 'が・ざ・だ・ば・ぱ に ちょうせん！',
    tag: 'だくおん・ぱ',
    color: 'from-indigo-400 to-purple-500',
    badgeEmoji: '🐼',
    words: [
      { id: '11-1', hiragana: 'りんご', meaningJa: 'まっかな リンゴ', emoji: '🍎', romajiOptions: ['RINGO'], defaultRomaji: 'RINGO' },
      { id: '11-2', hiragana: 'ぱんだ', meaningJa: '白黒 パンダ', emoji: '🐼', romajiOptions: ['PANDA'], defaultRomaji: 'PANDA' },
      { id: '11-3', hiragana: 'ぶどう', meaningJa: 'むらさきの 葡萄', emoji: '🍇', romajiOptions: ['BUDOU'], defaultRomaji: 'BUDOU' },
      { id: '11-4', hiragana: 'くるま', meaningJa: 'かっこいい 車', emoji: '🚗', romajiOptions: ['KURUMA'], defaultRomaji: 'KURUMA' },
      { id: '11-5', hiragana: 'ごはん', meaningJa: 'おいしい ご飯', emoji: '🍚', romajiOptions: ['GOHANN', 'GOHAN'], defaultRomaji: 'GOHANN' },
    ],
  },
  {
    id: 12,
    title: 'ステージ１２: マスター！どうぶつランド',
    subtitle: 'ぜんぶできるかな？すてきな タイピング名人へ！',
    tag: '総合チャレンジ',
    color: 'from-amber-400 via-pink-400 to-purple-500',
    badgeEmoji: '👑',
    words: [
      { id: '12-1', hiragana: 'うさぎ', meaningJa: 'ぴょんぴょん うさぎ', emoji: '🐰', romajiOptions: ['USAGI'], defaultRomaji: 'USAGI' },
      { id: '12-2', hiragana: 'ぞう', meaningJa: 'お鼻のながい ゾウ', emoji: '🐘', romajiOptions: ['ZOU'], defaultRomaji: 'ZOU' },
      { id: '12-3', hiragana: 'ことり', meaningJa: 'かわいい 小鳥', emoji: '🐤', romajiOptions: ['KOTORI'], defaultRomaji: 'KOTORI' },
      { id: '12-4', hiragana: 'さかな', meaningJa: 'すいすい お魚', emoji: '🐟', romajiOptions: ['SAKANA'], defaultRomaji: 'SAKANA' },
      { id: '12-5', hiragana: 'ひまわり', meaningJa: '太陽の 向日葵', emoji: '🌻', romajiOptions: ['HIMAWARI'], defaultRomaji: 'HIMAWARI' },
      { id: '12-6', hiragana: 'たいよう', meaningJa: 'あたたかい 太陽', emoji: '☀️', romajiOptions: ['TAIYOU'], defaultRomaji: 'TAIYOU' },
    ],
  },
];

export interface StickerReward {
  id: string;
  name: string;
  emoji: string;
  requiredStars: number;
  description: string;
}

export const STICKER_REWARDS: StickerReward[] = [
  { id: 's1', name: 'ぴよぴよ ヒヨコ', emoji: '🐣', requiredStars: 3, description: 'はじめてのタイピング！一歩ふみだしたね' },
  { id: 's2', name: 'にこにこ コネコ', emoji: '🐱', requiredStars: 7, description: 'あいうえお を マスターしたよ！' },
  { id: 's3', name: 'げんきな コイヌ', emoji: '🐶', requiredStars: 15, description: 'か行のことばも バッチリ！' },
  { id: 's4', name: 'ぴょんぴょん ウサギ', emoji: '🐰', requiredStars: 25, description: 'ホームポジションの めいじん！' },
  { id: 's5', name: 'まんぷく パンダ', emoji: '🐼', requiredStars: 40, description: '両手のおててを じょうずに使えてるよ！' },
  { id: 's6', name: 'おっとり コアラ', emoji: '🐨', requiredStars: 55, description: 'た行とな行も すらすら！' },
  { id: 's7', name: 'きらきら ライオン', emoji: '🦁', requiredStars: 70, description: 'たくさんはなまる！すごい集中力！' },
  { id: 's8', name: 'おしゃれな フラミンゴ', emoji: '🦩', requiredStars: 90, description: '指のうごきが とってもきれい！' },
  { id: 's9', name: 'すいすい イルカ', emoji: '🐬', requiredStars: 110, description: 'リズムにのって スピードアップ！' },
  { id: 's10', name: 'てっぺん キリン', emoji: '🦒', requiredStars: 135, description: 'むずかしい ことばも ぜんぶクリア！' },
  { id: 's11', name: 'ゆうしゃの ドラゴン', emoji: '🐲', requiredStars: 160, description: 'スーパータイピング マスター！' },
  { id: 's12', name: 'にじいろ ユニコーン', emoji: '🦄', requiredStars: 190, description: '伝説の タイピング・キングダム！' },
];

/**
 * Checks if a typed character matches any of the remaining romaji options
 */
export function checkNextKey(
  typedSoFar: string,
  keyToTest: string,
  romajiOptions: string[]
): { isValid: boolean; updatedTyped: string; isComplete: boolean; activeRomaji: string } {
  const candidate = (typedSoFar + keyToTest).toUpperCase();

  // Find all options that start with this candidate
  const matching = romajiOptions.filter((opt) => opt.toUpperCase().startsWith(candidate));
  if (matching.length === 0) {
    return {
      isValid: false,
      updatedTyped: typedSoFar,
      isComplete: false,
      activeRomaji: romajiOptions[0],
    };
  }

  // Exact complete match?
  const completeMatch = matching.find((opt) => opt.toUpperCase() === candidate);
  const bestRomaji = matching[0].toUpperCase();

  return {
    isValid: true,
    updatedTyped: candidate,
    isComplete: !!completeMatch,
    activeRomaji: bestRomaji,
  };
}

/**
 * Gets the finger information for the next expected key
 */
export function getNextKeyInfo(typedSoFar: string, romajiOptions: string[]): {
  nextChar: string;
  fingerInfo?: FingerInfo;
  activeRomaji: string;
} {
  // Find the first option that starts with typedSoFar, or fallback to first option
  const active = romajiOptions.find((opt) => opt.toUpperCase().startsWith(typedSoFar.toUpperCase())) || romajiOptions[0];
  const nextChar = active[typedSoFar.length]?.toUpperCase() || '';
  const fingerInfo = FINGER_MAPPINGS[nextChar];

  return {
    nextChar,
    fingerInfo,
    activeRomaji: active.toUpperCase(),
  };
}
