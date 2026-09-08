import { registerHooks } from 'node:module';
import { writeFileSync } from 'node:fs';
registerHooks({ resolve(sp, c, next) { return next(sp.startsWith('.') && !/\.[a-z]+$/.test(sp) ? sp + '.ts' : sp, c); } });
const { publishedLessons } = await import('../src/lessons.ts');

const work = [];
for (const l of publishedLessons) {
  const a = l.apprenticeship;
  if (!a.checks?.length || l.id === 'week1-day1-v1') continue;
  const g = a.guide;
  const demoSteps = g.map((s, i) => (s.demo ? i + 1 : null)).filter(Boolean);
  const helpSteps = g.map((s, i) => (s.supported || s.sorter ? i + 1 : null)).filter(Boolean);
  const noTerms = g.map((s, i) => (s.terms?.length ? null : i + 1)).filter(Boolean);
  work.push({
    id: l.id,
    title: l.title,
    steps: l.steps.map((s, i) => `${i + 1}. ${s.title}`),
    demoOnStep: demoSteps,
    helpOnStep: helpSteps,
    needSecondDemoOn: g.map((s, i) => i + 1).filter((n) => !demoSteps.includes(n) && !helpSteps.includes(n)),
    stepsMissingTerms: noTerms,
    misconception: l.misconception || null,
    objective: l.objective || l.deliverable,
    stepExpect: g.map((s) => s.expect),
  });
}
writeFileSync('worklist.json', JSON.stringify(work, null, 2));
const totalDemos = work.length;
const totalTerms = work.reduce((n, w) => n + w.stepsMissingTerms.length, 0);
console.log('lessons needing a second demonstration:', totalDemos);
console.log('steps missing contextual terms       :', totalTerms, 'across', work.filter((w) => w.stepsMissingTerms.length).length, 'lessons');
const byModule = {};
for (const w of work) { const m = w.id.startsWith('week') ? 'week' : w.id.slice(0, 3); (byModule[m] ||= []).push(w.id); }
for (const [m, ids] of Object.entries(byModule)) console.log('  ' + m.padEnd(5), ids.length);
