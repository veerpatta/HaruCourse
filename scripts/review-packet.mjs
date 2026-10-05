// Compact review packets for independent content review: one Markdown block
// per lesson with everything a reviewer needs to judge agreement between the
// objective, starter, example, fields, checks, rubric and finish gate.
// Run: node scripts/review-packet.mjs m05 m06 > packet.md
import { registerHooks } from 'node:module';
registerHooks({ resolve(s, c, n) { return n(s.startsWith('.') && !/\.[a-z]+$/.test(s) ? s + '.ts' : s, c); } });
const { publishedLessons } = await import('../src/lessons.ts');
const { lessonTrack } = await import('../src/corePath.ts');
const { fieldRequired } = await import('../src/lessonActions.ts');
const only = process.argv.slice(2).filter((a) => /^(m\d\d|week[12])$/.test(a));
const moduleOf = (l) => l.module || `m0${l.week || 1}`;
const keep = (l) => !only.length || only.includes(moduleOf(l)) || only.some((o) => l.id.startsWith(o));
const out = [];
for (const l of publishedLessons.filter(keep)) {
  const a = l.apprenticeship;
  const track = lessonTrack(l.id);
  const fields = a.worksheet.flatMap((s) => s.fields);
  const empty = { version: 1, notes: '', submission: '', minutes: 0, status: 'practicing', updatedAt: '', worksheet: {} };
  out.push(`\n## ${l.id} · ${l.title} (${track.kind}${track.kind === 'core' ? ` stage ${track.stageNumber}` : ''})`);
  out.push(`Objective: ${l.objective || l.why}`);
  out.push(`Bring: ${l.prerequisite}`);
  if (l.actionPlan?.start) out.push(`Starting route: ${l.actionPlan.start}`);
  if (a.route) out.push(`Route: ${a.route.recommended}`);
  if (l.actionPlan?.material?.length) out.push(`Supplied material:\n${l.actionPlan.material.map((m) => '  - ' + m).join('\n')}`);
  out.push(`Teach:\n${l.teach.map((t) => '  - ' + t).join('\n')}`);
  out.push(`Example: ${l.example}`);
  if (l.misconception) out.push(`Misconception: ${l.misconception}`);
  l.steps.forEach((s, i) => {
    const g = a.guide[i];
    out.push(`Step ${i + 1} · ${s.title}: ${s.instructions.join(' ')}\n  expect: ${g.expect}${g.enough ? `\n  enough: ${g.enough}` : ''}`);
    if (g.demo) out.push(`  demo: ${g.demo.scenario} | ${g.demo.beats.map((b) => b.label + ': ' + b.text).join(' | ')} | wrong turn: ${g.demo.wrongTurn}`);
    if (g.supported) out.push(`  supported: ${g.supported.material}\n  Q: ${g.supported.question}\n${g.supported.options.map((o) => `    ${o.correct ? '[✓]' : '[ ]'} ${o.label} — ${o.feedback}`).join('\n')}`);
    if (g.sorter) out.push(`  sorter (${g.sorter.options.join('/')}): ${g.sorter.intro}\n${g.sorter.items.map((it) => `    - ${it.text} → ${it.answer}`).join('\n')}`);
    for (const id of g.fields || []) {
      const f = fields.find((x) => x.id === id);
      out.push(`  field ${f.id}${fieldRequired(f, empty) ? '' : f.requiredWhen ? ` (required when ${f.requiredWhen.field} = ${f.requiredWhen.values.join(' or ')})` : ' (optional)'}${f.sensitive ? ' [sensitive]' : ''}: ${f.label}${f.options ? ` {${f.options.join(' | ')}}` : ''}${f.hint ? ` — hint: ${f.hint}` : ''}`);
    }
  });
  (a.checks || []).forEach((c, i) => out.push(`Check ${i + 1}: ${c.question}\n${c.options.map((o) => `    ${o.correct ? '[✓]' : '[ ]'} ${o.label} — ${o.feedback}`).join('\n')}\n  repair: ${c.repair}\n  recheck: ${c.recheck}`));
  (l.criteria || []).forEach((c) => out.push(`Criterion: ${c.criterion}\n  evidence: ${c.evidence}\n  levels: ${c.levels.map((t, i) => `${i}) ${t}`).join(' ')}\n  remediation: ${c.remediation}`));
  if (a.transfer) out.push(`Transfer: ${a.transfer.scenario}\n  prompt: ${a.transfer.prompt}\n  weak: ${a.transfer.anchors.weak}\n  adequate: ${a.transfer.anchors.adequate}\n  strong: ${a.transfer.anchors.strong}`);
  out.push(`Save/next: ${a.saveRoute?.next || a.handoff}`);
}
console.log(out.join('\n'));
