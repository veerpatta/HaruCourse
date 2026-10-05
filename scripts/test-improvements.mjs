// Unit checks for the 4 October 2026 improvements. Run: node scripts/test-improvements.mjs
import { registerHooks } from 'node:module';
import assert from 'node:assert/strict';
registerHooks({ resolve(s, c, next) { return next(s.startsWith('.') && !/\.[a-z]+$/.test(s) ? s + '.ts' : s, c); } });
const { matchChoice, displayOrder } = await import('../shared/choices.ts');
const { wilson, newcombeDifference, funnel, sampleSizePerGroup } = await import('../src/stats.ts');
const { contactDetails, privacyIssues } = await import('../src/privacy.ts');
const { coreStages, corePathIds, coreProgress, nextCoreLesson, lessonTrack, skippableLessons, technicalExtension } = await import('../src/corePath.ts');
const { lessonSessions } = await import('../src/sessions.ts');
const { lessonOneSessions, lessonOneAliases } = await import('../src/lessonOneFlow.ts');
const { publishedLessons } = await import('../src/lessons.ts');
const { prepareRecord, progressStates, finishProblems } = await import('../shared/learning.ts');
const { actionQuestion } = await import('../src/lessonActions.ts');
const { recordSchema } = await import('../shared/record.ts');

// Saved answers survive relabelling; display order is stable and not authored.
const options = [{ label: 'New', was: ['Old'], correct: true, feedback: 'x' }, { label: 'B', feedback: 'y' }, { label: 'C', feedback: 'z' }];
assert.equal(matchChoice(options, 'Old'), options[0]);
assert.equal(matchChoice(options, 'New'), options[0]);
assert.equal(matchChoice(options, 'nope'), undefined);
assert.deepEqual(displayOrder(options, 'seed'), displayOrder(options, 'seed'));
assert.deepEqual(displayOrder(options, 'seed').map((o) => o.label).sort(), ['B', 'C', 'New']);
let first = 0, total = 0;
for (const l of publishedLessons) for (const [i, c] of (l.apprenticeship.checks || []).entries()) { total++; if (displayOrder(c.options, `${l.id}:check-${i + 1}`)[0].correct) first++; }
assert.ok(first / total < 0.5, `Defensible option shown first in ${first} of ${total}`);
// A finished lesson whose saved answers used earlier wordings still finishes.
for (const l of publishedLessons) for (const a of l.flow) {
  const q = actionQuestion(l, a); if (!q) continue;
  for (const o of q.options) for (const w of o.was || []) assert.equal(matchChoice(q.options, w), o, `${l.id} ${q.id} alias`);
}

// Every option label a learner could have saved before 4 October 2026 still
// selects an option today, so no earlier answer reopens as unanswered.
{
  const { readFileSync } = await import('node:fs');
  const legacy = JSON.parse(readFileSync(new URL('./fixtures/option-labels-2026-10-04.json', import.meta.url), 'utf8'));
  const unmapped = [];
  for (const l of publishedLessons) for (const a of l.flow) {
    const q = actionQuestion(l, a); if (!q) continue;
    for (const label of legacy[l.id]?.[q.id] || []) if (!matchChoice(q.options, label)) unmapped.push(`${l.id} ${q.id}: ${label.slice(0, 60)}`);
  }
  assert.deepEqual(unmapped, [], `Earlier answers without a current option:\n${unmapped.join('\n')}`);
}

// Statistics reproduce published values.
const w = wilson(7, 10); assert.ok(Math.abs(w.low - 0.3968) < 1e-4 && Math.abs(w.high - 0.8922) < 1e-4);
const d = newcombeDifference(56, 70, 48, 80); assert.ok(Math.abs(d.low - 0.0524) < 1e-4 && Math.abs(d.high - 0.3339) < 1e-4, 'Newcombe 1998 example');
const f = funnel([{ name: 'a', count: 1000 }, { name: 'b', count: 420 }, { name: 'c', count: 180 }]);
assert.equal(f.largest, 1); assert.equal(f.rows[1].drop.toFixed(4), '0.5800'); assert.equal(f.rows[2].drop.toFixed(4), '0.5714');
assert.ok(funnel([{ name: 'a', count: 10 }, { name: 'b', count: 12 }]).problem);
assert.equal(sampleSizePerGroup(0.10, 0.12), 3841);

// Contact details in sensitive answers are detected; course figures are not.
assert.deepEqual(contactDetails('Call 98765 43210'), ['phone number']);
assert.deepEqual(contactDetails('asha@example.co.in'), ['email address']);
assert.deepEqual(contactDetails('1,000 reach the list, 420 open, 180 begin'), []);
assert.deepEqual(contactDetails('P1 checks with her sister first'), []);
const sensitiveLesson = publishedLessons.find((l) => l.apprenticeship.worksheet.flatMap((s) => s.fields).some((f) => f.sensitive));
const sField = sensitiveLesson.apprenticeship.worksheet.flatMap((s) => s.fields).find((f) => f.sensitive);
const base = { version: 1, notes: '', submission: '', minutes: 0, status: 'practicing', updatedAt: '' };
assert.equal(privacyIssues(sensitiveLesson, { ...base, worksheet: { [sField.id]: 'reach P2 on 98765 43210' } }).length, 1);
assert.equal(privacyIssues(sensitiveLesson, { ...base, worksheet: { [sField.id]: 'P2 hesitated at the price' } }).length, 0);

// Core path: every lesson exists once, in prerequisite-respecting module order per stage.
const ids = new Set(publishedLessons.map((l) => l.id));
assert.equal(new Set(corePathIds).size, corePathIds.length, 'No lesson appears twice on the core path');
for (const id of corePathIds) assert.ok(ids.has(id), `Core path names unknown lesson ${id}`);
for (const id of [...skippableLessons]) assert.ok(corePathIds.includes(id));
for (const id of technicalExtension) assert.ok(ids.has(id) && !corePathIds.includes(id));
assert.equal(coreStages.length, 6);
for (const s of coreStages) for (const l of s.lessons) assert.ok(l.why.length > 20 && l.why.length < 160, `Reason for ${l.id}`);
assert.equal(lessonTrack('m12-l03-v1').kind, 'extension');
assert.equal(lessonTrack('week1-day3-v1').kind, 'library');
const done = { ...base, learning: { finishedAt: new Date().toISOString() } };
const shown = { ...base, learning: { demonstrated: { reference: 'x', evidence: 'y'.repeat(50), at: new Date().toISOString() } } };
assert.equal(nextCoreLesson([]), corePathIds[0]);
assert.equal(nextCoreLesson([{ lessonId: corePathIds[0], record: done }]), corePathIds[1]);
const p = coreProgress([{ lessonId: 'm03-l01-v1', record: shown }, { lessonId: 'm03-l04-v1', record: shown }]);
assert.equal(p.shown, 1, 'Existing skill counts only on skippable lessons');

// Sessions: three per lesson, contiguous and covering every action.
for (const l of publishedLessons) {
  const s = lessonSessions(l, l.id === 'week1-day1-v1' ? lessonOneSessions : undefined);
  assert.ok(s.length >= 2 && s.length <= 3, `${l.id} sessions`);
  assert.equal(s[0].start, 0); assert.equal(s.at(-1).end, l.flow.length - 1);
  for (let i = 1; i < s.length; i++) assert.equal(s[i].start, s[i - 1].end + 1);
}
const one = publishedLessons.find((l) => l.id === 'week1-day1-v1');
for (const target of Object.values(lessonOneAliases)) assert.ok(one.flow.some((a) => a.id === target));

// Transfer answers and review requests never reopen finished practice.
const fin = { ...base, worksheet: { a: 'x' }, learning: { finishedAt: '2026-10-04T10:00:00.000Z', answers: {} } };
assert.equal(prepareRecord(fin, { ...fin, worksheet: { ...fin.worksheet, 'transfer-decision': 'new case' } }).learning.finishedAt, fin.learning.finishedAt);
assert.equal(prepareRecord(fin, { ...fin, learning: { ...fin.learning, answers: { 'transfer-compare': { value: 'compared', shown: true } } } }).learning.finishedAt, fin.learning.finishedAt);
assert.equal(prepareRecord(fin, { ...fin, worksheet: { a: 'changed' } }).learning.finishedAt, undefined);
const reviewed = progressStates(fin, [{ lessonId: 'x', revision: 3, criterion: 'c', outcome: 'meets-criterion', createdAt: '' }]);
assert.deepEqual([reviewed.finished, reviewed.reviewed, reviewed.demonstrated], [true, true, false]);
assert.equal(progressStates({ ...fin, learning: { ...fin.learning, selfReview: { criterion: 'c', level: 3, evidence: 'e', at: '2026-10-04T10:00:00.000Z' } } }).reviewed, false, 'Self-review never counts as reviewed');
assert.ok(recordSchema.safeParse({ ...fin, learning: { ...fin.learning, review: { criterion: 'c', question: 'q', requestedAt: '2026-10-04T10:00:00.000Z' } } }).success);
assert.ok(!recordSchema.safeParse({ ...fin, learning: { ...fin.learning, selfReview: { criterion: 'c', level: 5, evidence: 'e', at: '2026-10-04T10:00:00.000Z' } } }).success);
// Every lesson has a transfer task, and the transfer answer stays optional.
for (const l of publishedLessons) {
  assert.ok(l.apprenticeship.transfer, `${l.id} transfer`);
  assert.ok(l.apprenticeship.worksheet.flatMap((s) => s.fields).find((f) => f.id === 'transfer-decision')?.optional, `${l.id} transfer optional`);
}
assert.ok(finishProblems(one, base).length);
console.log(`Improvement checks passed: ${corePathIds.length} core lessons, ${total} checks (defensible shown first in ${first}), statistics, privacy, sessions and progress states.`);
