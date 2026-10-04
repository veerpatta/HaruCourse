// Question and transfer-task quality checks from the 4 October 2026
// improvement plan. Run: node scripts/check-questions.mjs [m05 m06 ...] [--strict]
//
// A formative question teaches only if the answer cannot be found without
// reading it. Two cues are measured here: the defensible option's position on
// screen, and its length compared with the other options. Every teaching
// lesson also needs a "use it on a new case" transfer task.
import { registerHooks } from 'node:module';
import assert from 'node:assert/strict';
registerHooks({ resolve(s, c, next) { return next(s.startsWith('.') && !/\.[a-z]+$/.test(s) ? s + '.ts' : s, c); } });
const { publishedLessons } = await import('../src/lessons.ts');
const { displayOrder } = await import('../shared/choices.ts');

const strict = process.argv.includes('--strict');
const only = process.argv.slice(2).filter((a) => /^m\d\d$/.test(a));
const moduleOf = (l) => l.module || `m0${l.week || 1}`;
const lessons = publishedLessons.filter((l) => !only.length || only.includes(moduleOf(l)));

// A question carries a length cue when the defensible option is clearly the
// longest or clearly the odd one out. Thresholds are deliberately loose: the
// aim is no visible tell, not identical lengths.
export function lengthCue(options) {
  const correct = options.find((o) => o.correct);
  const others = options.filter((o) => !o.correct).map((o) => o.label.length);
  const len = correct.label.length;
  const mean = others.reduce((a, b) => a + b, 0) / others.length;
  const max = Math.max(...others);
  const ratio = len / mean;
  const problems = [];
  if (len > max * 1.15) problems.push(`defensible option is ${len} characters; longest alternative ${max}`);
  if (ratio > 1.3) problems.push(`defensible option is ${ratio.toFixed(2)}× the alternatives' mean length`);
  if (ratio < 0.7) problems.push(`defensible option is only ${ratio.toFixed(2)}× the alternatives' mean length`);
  return { problems, longest: len > max, ratio };
}

const violations = [];
const report = {};
const positions = {};
let questions = 0, longest = 0;
for (const l of lessons) {
  const a = l.apprenticeship;
  const m = moduleOf(l);
  report[m] ||= { questions: 0, cued: 0, longest: 0, transfers: 0, sensitive: 0, aliases: 0 };
  const items = [
    ...(a.checks || []).map((c, i) => ({ where: `${l.id} check ${i + 1}`, id: `check-${i + 1}`, options: c.options })),
    ...(a.guide || []).flatMap((g, i) => (g.supported ? [{ where: `${l.id} step ${i + 1} supported`, id: `try-${i + 1}`, options: g.supported.options }] : [])),
  ];
  for (const item of items) {
    questions++; report[m].questions++;
    const cue = lengthCue(item.options);
    if (cue.longest) { longest++; report[m].longest++; }
    if (cue.problems.length) { report[m].cued++; violations.push(`${item.where}: ${cue.problems.join('; ')}`); }
    const labels = new Set(item.options.map((o) => o.label));
    for (const o of item.options) for (const w of o.was || []) {
      report[m].aliases++;
      if (labels.has(w)) violations.push(`${item.where}: earlier wording "${w.slice(0, 40)}…" is still a current label`);
    }
    const shown = displayOrder(item.options, `${l.id}:${item.id}`);
    const at = shown.findIndex((o) => o.correct);
    const key = `${item.options.length} options`;
    positions[key] ||= Array(item.options.length).fill(0);
    positions[key][at]++;
  }
  for (const f of (a.worksheet || []).flatMap((s) => s.fields)) if (f.sensitive) report[m].sensitive++;
  const t = a.transfer;
  if (!t) { violations.push(`${l.id}: no transfer task`); continue; }
  report[m].transfers++;
  if (!/made.up|invented|fictional/i.test(t.scenario)) violations.push(`${l.id}: transfer scenario must say it is made up`);
  if (!t.prompt || !/why|reason|because|explain|justify/i.test(t.prompt)) violations.push(`${l.id}: transfer prompt must ask for a reason`);
  for (const k of ['weak', 'adequate', 'strong']) if (!t.anchors?.[k]) violations.push(`${l.id}: transfer anchor ${k} missing`);
  if (t.scenario.length > 700) violations.push(`${l.id}: transfer scenario over 700 characters`);
  if (t.prompt.length > 320) violations.push(`${l.id}: transfer prompt over 320 characters`);
  for (const k of ['weak', 'adequate', 'strong']) if ((t.anchors?.[k] || '').length > 360) violations.push(`${l.id}: transfer anchor ${k} over 360 characters`);
}

console.table(report);
console.log('Displayed position of the defensible option:', positions);
const share = questions ? longest / questions : 0;
console.log(`${questions} questions; defensible option is the longest in ${longest} (${(share * 100).toFixed(1)}%).`);
if (share > 0.5) violations.push(`The defensible option is the longest in ${(share * 100).toFixed(1)}% of questions; keep it at or below 50%.`);
for (const [key, counts] of Object.entries(positions)) {
  const total = counts.reduce((a, b) => a + b, 0);
  if (total >= 30) for (const [i, n] of counts.entries())
    if (n / total > 0.6) violations.push(`Position ${i + 1} holds the defensible option in ${n} of ${total} ${key} questions.`);
}
if (violations.length) {
  console.log(`\n${violations.length} issue(s):`);
  for (const v of violations.slice(0, 400)) console.log(' - ' + v);
}
if (strict) assert.equal(violations.length, 0, `${violations.length} question or transfer issue(s)`);
else console.log(violations.length ? '\nReport only. Pass --strict to fail on these.' : '\nNo question or transfer issues.');
