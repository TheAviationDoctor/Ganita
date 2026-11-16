/** Modern implementations. These are teaching aids, not historical code. */
export function sineMeasure(degrees: number, radius = 1) {
  if (!Number.isFinite(degrees) || degrees < 0 || degrees > 90 || !Number.isFinite(radius) || radius <= 0) throw new RangeError('Angle must be 0–90 degrees and radius positive.');
  const radians = degrees * Math.PI / 180;
  return { sine: radius * Math.sin(radians), cosine: radius * Math.cos(radians), chord: 2 * radius * Math.sin(radians) };
}

export function piSeries(terms: number, fast = false) {
  if (!Number.isInteger(terms) || terms < 1 || terms > 100) throw new RangeError('Use 1–100 terms.');
  const factor = fast ? Math.sqrt(12) : 4;
  let sum = 0;
  const partials: number[] = [];
  for (let k = 0; k < terms; k++) {
    sum += (k % 2 === 0 ? 1 : -1) / ((2 * k + 1) * (fast ? 3 ** k : 1));
    partials.push(factor * sum);
  }
  // Alternating-series bound on the truncation error, not on floating-point rounding.
  return { value: factor * sum, bound: factor / ((2 * terms + 1) * (fast ? 3 ** terms : 1)), partials };
}

export function partitionCounts(n: number) {
  if (!Number.isInteger(n) || n < 0 || n > 100) throw new RangeError('Use an integer from 0 to 100.');
  const counts = Array<bigint>(n + 1).fill(0n);
  counts[0] = 1n;
  for (let part = 1; part <= n; part++) {
    for (let total = part; total <= n; total++) counts[total] += counts[total - part];
  }
  return counts;
}

export function partitionExamples(n: number, limit = 32) {
  if (!Number.isInteger(n) || n < 1 || n > 20) throw new RangeError('Use an integer from 1 to 20.');
  const result: number[][] = [];
  function visit(remaining: number, max: number, parts: number[]) {
    if (result.length >= limit) return;
    if (remaining === 0) { result.push(parts); return; }
    for (let part = Math.min(max, remaining); part >= 1; part--) visit(remaining - part, part, [...parts, part]);
  }
  visit(n, n, []);
  return result;
}
