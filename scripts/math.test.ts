import { test } from 'node:test';
import assert from 'node:assert/strict';
import { sineMeasure, piSeries, partitionCounts, partitionExamples } from '../src/lib/math.ts';
import { normalizeSearch } from '../src/lib/search.ts';

test('sine lengths, chords and endpoint degeneracies', () => {
  assert.equal(sineMeasure(0).sine, 0);
  assert.equal(sineMeasure(90).sine, 1);
  assert.equal(sineMeasure(90).chord, 2);
  assert.ok(Math.abs(sineMeasure(30, 2).sine - 1) < 1e-14);
  for (let angle = 0; angle <= 90; angle++) {
    const { sine, cosine, chord } = sineMeasure(angle, 3);
    assert.ok(Math.abs(sine ** 2 + cosine ** 2 - 9) < 1e-12);
    assert.equal(chord, 2 * sine);
  }
});

test('both series obey the next-term truncation bound within floating-point precision', () => {
  assert.equal(piSeries(1).value, 4);
  assert.ok(Math.abs(piSeries(2).value - 8 / 3) < 1e-14);
  assert.equal(piSeries(1, true).value, Math.sqrt(12));
  for (const fast of [false, true]) for (let terms = 1; terms <= 100; terms++) {
    const { value, bound, partials } = piSeries(terms, fast);
    assert.ok(Math.abs(value - Math.PI) <= bound + 4e-15);
    assert.equal(partials.length, terms);
  }
  assert.ok(Math.abs(piSeries(10, true).value - Math.PI) < Math.abs(piSeries(100).value - Math.PI));
});

test('partition counts match known exact values and distinct explicit enumeration', () => {
  const counts = partitionCounts(100);
  assert.equal(counts[0], 1n);
  assert.equal(counts[4], 5n);
  assert.equal(counts[9], 30n);
  assert.equal(counts[14], 135n);
  assert.equal(counts[19], 490n);
  assert.equal(counts[20], 627n);
  assert.equal(counts[100], 190569292n);
  for (let n = 1; n <= 20; n++) {
    const parts = partitionExamples(n, 1000);
    assert.equal(BigInt(parts.length), counts[n]);
    assert.equal(new Set(parts.map(p => p.join(','))).size, parts.length);
    for (const p of parts) {
      assert.equal(p.reduce((a, b) => a + b, 0), n);
      assert.ok(p.every((v, i) => v > 0 && (i === 0 || v <= p[i - 1])));
    }
  }
  for (let n = 4; n <= 99; n += 5) assert.equal(counts[n] % 5n, 0n);
});

test('invalid demonstration inputs fail rather than silently miscalculate', () => {
  for (const invalid of [-1, 91, NaN, Infinity]) assert.throws(() => sineMeasure(invalid), RangeError);
  for (const invalid of [0, -1, NaN]) assert.throws(() => sineMeasure(30, invalid), RangeError);
  for (const invalid of [0, 101, 1.5]) assert.throws(() => piSeries(invalid), RangeError);
  assert.throws(() => partitionCounts(-1), RangeError);
  assert.throws(() => partitionExamples(21), RangeError);
});

test('search normalizes Latin diacritics while preserving Hindi vowel signs', () => {
  assert.equal(normalizeSearch('Mādhava Āryabhaṭa GAṆITA'), 'madhava aryabhata ganita');
  assert.equal(normalizeSearch('गणित'), 'गणित');
  assert.notEqual(normalizeSearch('गणित'), normalizeSearch('गणत'));
});
