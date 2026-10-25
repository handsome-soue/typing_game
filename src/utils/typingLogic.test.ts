/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import test from 'node:test';
import assert from 'node:assert/strict';
import {
  FINGER_MAPPINGS,
  STAGES,
  checkNextKey,
  getNextKeyInfo,
} from './typingLogic';

test('FINGER_MAPPINGS correctly maps standard Japanese touch typing finger rules', () => {
  // A: Left pinky
  const a = FINGER_MAPPINGS['A'];
  assert.equal(a.hand, 'left');
  assert.equal(a.finger, 'pinky');
  assert.equal(a.fingerJa, 'こゆび');

  // I: Right middle
  const i = FINGER_MAPPINGS['I'];
  assert.equal(i.hand, 'right');
  assert.equal(i.finger, 'middle');
  assert.equal(i.fingerJa, 'なかゆび');

  // U: Right index
  const u = FINGER_MAPPINGS['U'];
  assert.equal(u.hand, 'right');
  assert.equal(u.finger, 'index');
  assert.equal(u.fingerJa, 'ひとさしゆび');

  // E: Left middle
  const e = FINGER_MAPPINGS['E'];
  assert.equal(e.hand, 'left');
  assert.equal(e.finger, 'middle');
  assert.equal(e.fingerJa, 'なかゆび');

  // O: Right ring
  const o = FINGER_MAPPINGS['O'];
  assert.equal(o.hand, 'right');
  assert.equal(o.finger, 'ring');
  assert.equal(o.fingerJa, 'くすりゆび');

  // F and J have home notch
  assert.equal(FINGER_MAPPINGS['F'].fingerLabelJa.includes('ポッチ'), true);
  assert.equal(FINGER_MAPPINGS['J'].fingerLabelJa.includes('ポッチ'), true);
});

test('checkNextKey validates sequential character typing and completion', () => {
  // Test word 'AO'
  const step1 = checkNextKey('', 'A', ['AO']);
  assert.equal(step1.isValid, true);
  assert.equal(step1.updatedTyped, 'A');
  assert.equal(step1.isComplete, false);

  // Invalid key
  const invalid = checkNextKey('A', 'Z', ['AO']);
  assert.equal(invalid.isValid, false);
  assert.equal(invalid.updatedTyped, 'A');

  // Second key completes 'AO'
  const step2 = checkNextKey('A', 'O', ['AO']);
  assert.equal(step2.isValid, true);
  assert.equal(step2.updatedTyped, 'AO');
  assert.equal(step2.isComplete, true);
});

test('checkNextKey supports multi-path Romaji like "SI" or "SHI"', () => {
  // Candidate options for し: ['SI', 'SHI']
  const s = checkNextKey('', 'S', ['SI', 'SHI']);
  assert.equal(s.isValid, true);
  assert.equal(s.updatedTyped, 'S');

  // Typing 'H' next should be valid because of 'SHI'
  const sh = checkNextKey('S', 'H', ['SI', 'SHI']);
  assert.equal(sh.isValid, true);
  assert.equal(sh.updatedTyped, 'SH');

  const shi = checkNextKey('SH', 'I', ['SI', 'SHI']);
  assert.equal(shi.isValid, true);
  assert.equal(shi.updatedTyped, 'SHI');
  assert.equal(shi.isComplete, true);

  // Or alternatively typing 'I' directly after 'S' should complete 'SI'
  const si = checkNextKey('S', 'I', ['SI', 'SHI']);
  assert.equal(si.isValid, true);
  assert.equal(si.updatedTyped, 'SI');
  assert.equal(si.isComplete, true);
});

test('getNextKeyInfo returns correct next expected character and finger information', () => {
  const info1 = getNextKeyInfo('', ['AO']);
  assert.equal(info1.nextChar, 'A');
  assert.equal(info1.fingerInfo?.hand, 'left');
  assert.equal(info1.fingerInfo?.finger, 'pinky');

  const info2 = getNextKeyInfo('A', ['AO']);
  assert.equal(info2.nextChar, 'O');
  assert.equal(info2.fingerInfo?.hand, 'right');
  assert.equal(info2.fingerInfo?.finger, 'ring');
});

test('STAGES contains 12 progressive stages with words for 6yo children', () => {
  assert.equal(STAGES.length, 12);
  assert.equal(STAGES[0].words.length, 5); // A I U E O
  assert.equal(STAGES[1].words[0].hiragana, 'あお');
});
