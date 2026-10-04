// Authoring aid: print every formative question and a short lesson summary for
// the named modules, with the length cue measured by check-questions.mjs.
// Run: node scripts/dump-questions.mjs m05 [--lesson m05-l03-v1] [--summary]
import { registerHooks } from 'node:module';
registerHooks({ resolve(s, c, next) { return next(s.startsWith('.') && !/\.[a-z]+$/.test(s) ? s + '.ts' : s, c); } });
const { publishedLessons } = await import('../src/lessons.ts');
const args = process.argv.slice(2);
const only = args.filter((a) => /^m\d\d$/.test(a));
const lessonArg = args.includes('--lesson') ? args[args.indexOf('--lesson') + 1] : null;
const summary = args.includes('--summary');
const moduleOf = (l) => l.module || `m0${l.week || 1}`;
function cue(options) {
  const c = options.find((o) => o.correct); const others = options.filter((o) => !o.correct).map((o) => o.label.length);
  const mean = others.reduce((a, b) => a + b, 0) / others.length; const max = Math.max(...others);
  const flags = [];
  if (c.label.length > max * 1.15) flags.push('LONGEST');
  const r = c.label.length / mean; if (r > 1.3) flags.push(`RATIO ${r.toFixed(2)}`); if (r < 0.7) flags.push(`SHORT ${r.toFixed(2)}`);
  return flags.length ? `  <-- length cue: ${flags.join(', ')}` : '  (no length cue)';
}
const print = (options) => options.map((o) => `    ${o.correct ? '[✓]' : '[ ]'} (${o.label.length}) ${o.label}\n        feedback: ${o.feedback}${o.was ? `\n        was: ${JSON.stringify(o.was)}` : ''}`).join('\n');
for (const l of publishedLessons) {
  if (only.length && !only.includes(moduleOf(l))) continue;
  if (lessonArg && l.id !== lessonArg) continue;
  const a = l.apprenticeship;
  console.log(`\n=== ${l.id} · ${l.title}`);
  if (summary) {
    console.log(`  objective: ${l.objective || l.why}`);
    if (l.misconception) console.log(`  misconception: ${l.misconception}`);
    const demo = a.guide?.find((g) => g.demo)?.demo;
    if (demo) console.log(`  demo: ${demo.scenario}`);
    console.log(`  route: ${a.route?.recommended || ''}`);
    const fields = (a.worksheet || []).flatMap((s) => s.fields);
    console.log(`  fields: ${fields.map((f) => `${f.id}${f.optional ? '?' : ''}${f.requiredWhen ? '(cond)' : ''}${f.sensitive ? '!' : ''}`).join(', ')}`);
    if (a.transfer) console.log(`  transfer: ${JSON.stringify(a.transfer)}`);
  }
  (a.checks || []).forEach((c, i) => console.log(`  CHECK ${i + 1}: ${c.question}${cue(c.options)}\n${print(c.options)}\n    repair: ${c.repair}`));
  (a.guide || []).forEach((g, i) => { if (g.supported) console.log(`  SUPPORTED (step ${i + 1}): ${g.supported.material}\n  Q: ${g.supported.question}${cue(g.supported.options)}\n${print(g.supported.options)}`); });
}
