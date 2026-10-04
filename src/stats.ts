// Small, checked statistics for Module 15's uncertainty calculator. Every
// result is a 95% interval. These methods are standard and suitable for the
// small counts a self-directed learner holds; they describe uncertainty from
// sampling only, never bias, a non-random sample or a changed context.
export const Z95 = 1.959963984540054;

export type Interval = { estimate: number; low: number; high: number };

// Wilson score interval for one proportion x/n. Unlike the simple
// "p ± 1.96·√(p(1−p)/n)" it stays inside 0–1 and behaves at small n.
export function wilson(x: number, n: number, z = Z95): Interval {
  if (!Number.isFinite(x) || !Number.isFinite(n) || n <= 0 || x < 0 || x > n) throw new Error("Need 0 ≤ x ≤ n and n > 0.");
  const p = x / n;
  const z2 = z * z;
  const denominator = 1 + z2 / n;
  const centre = (p + z2 / (2 * n)) / denominator;
  const half = (z * Math.sqrt((p * (1 - p)) / n + z2 / (4 * n * n))) / denominator;
  return { estimate: p, low: Math.max(0, centre - half), high: Math.min(1, centre + half) };
}

// Difference between two independent proportions, p1 − p2, with Newcombe's
// hybrid score interval (Newcombe 1998, method 10). Compare the difference
// directly: two separate intervals that overlap do not show "no difference".
export function newcombeDifference(x1: number, n1: number, x2: number, n2: number, z = Z95): Interval & { p1: number; p2: number } {
  const a = wilson(x1, n1, z);
  const b = wilson(x2, n2, z);
  const d = a.estimate - b.estimate;
  const low = d - Math.sqrt((a.estimate - a.low) ** 2 + (b.high - b.estimate) ** 2);
  const high = d + Math.sqrt((a.high - a.estimate) ** 2 + (b.estimate - b.low) ** 2);
  return { estimate: d, low, high, p1: a.estimate, p2: b.estimate };
}

export type FunnelStep = { name: string; count: number };
export type FunnelRow = FunnelStep & { lost: number | null; drop: number | null };
// Proportional drop at a step = people lost at that step ÷ people who reached
// the step before it. Counts must not increase down the funnel.
export function funnel(steps: FunnelStep[]): { rows: FunnelRow[]; largest: number | null; problem: string | null } {
  const rows: FunnelRow[] = steps.map((s, i) => {
    if (i === 0) return { ...s, lost: null, drop: null };
    const before = steps[i - 1].count;
    return { ...s, lost: before - s.count, drop: before > 0 ? (before - s.count) / before : null };
  });
  const problem = steps.some((s) => !Number.isFinite(s.count) || s.count < 0)
    ? "Every count must be a whole number of people, zero or more."
    : steps.some((s, i) => i > 0 && s.count > steps[i - 1].count)
      ? "A later step has more people than the step before it. Check the counts or the step order."
      : null;
  let largest: number | null = null;
  rows.forEach((r, i) => {
    if (r.drop !== null && (largest === null || r.drop > (rows[largest].drop ?? -1))) largest = i;
  });
  return { rows, largest: problem ? null : largest, problem };
}

// Per-group sample size for a two-sided test of two proportions at the usual
// α = 0.05 and 80% power. Teaching aid only: real experiments also need a
// pre-registered stopping rule, a check on traffic split and guardrail metrics.
export function sampleSizePerGroup(p1: number, p2: number, zAlpha = Z95, zBeta = 0.8416212335729143) {
  if (!(p1 > 0 && p1 < 1 && p2 > 0 && p2 < 1) || p1 === p2) throw new Error("Need two different rates between 0 and 1.");
  const bar = (p1 + p2) / 2;
  const top = zAlpha * Math.sqrt(2 * bar * (1 - bar)) + zBeta * Math.sqrt(p1 * (1 - p1) + p2 * (1 - p2));
  return Math.ceil((top * top) / ((p1 - p2) ** 2));
}

export const percent = (value: number, digits = 1) => `${(value * 100).toFixed(digits)}%`;
