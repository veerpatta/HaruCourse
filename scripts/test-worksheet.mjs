// Browser-free checks of the worksheet helpers and record gating. Run: node scripts/test-worksheet.mjs
import { registerHooks } from "node:module";
import assert from "node:assert/strict";
registerHooks({ resolve(s, c, next) { return next(s.startsWith(".") && !/\.[a-z]+$/.test(s) ? s + ".ts" : s, c); } });
const { publishedLessons } = await import("../src/lessons.ts");
const { worksheetMarkdown, worksheetBody, resumeStep, filledCount } = await import("../src/worksheet.ts");
const { recordSchema } = await import("../shared/record.ts");
const lesson = publishedLessons.find(l => l.id === "week1-day1-v1");
const base = { version: 1, notes: "", submission: "", minutes: 0, status: "practicing", updatedAt: "" };
assert.equal(resumeStep(lesson, undefined), 1);
assert.equal(resumeStep(lesson, { ...base, guide: { done: [1, 2] } }), 3);
assert.equal(resumeStep(lesson, { ...base, guide: { step: 4, done: [] } }), 4);
assert.equal(resumeStep(lesson, { ...base, guide: { step: 99, done: [1,2,3,4,5] } }), 5, "an out-of-range saved step falls back to the last step");
const rec = { ...base, worksheet: { "define-ux": "QA line one\nline two", "entry-1-label": "observed" }, guide: { step: 2, done: [1] } };
assert.ok(recordSchema.safeParse(rec).success);
const md = worksheetMarkdown(lesson, rec);
assert.ok(md.startsWith("# From screens to product problems"));
assert.ok(md.includes("**UX is…**\nQA line one\nline two"));
assert.ok(md.includes("**Entry 1 · Observed, inferred or unknown?**\nobserved"));
assert.ok(md.includes("(not filled yet)"));
assert.ok(md.includes("Steps ticked as a navigation aid: 1"));
assert.ok(md.includes("(worksheet kept in the app)"));
assert.ok(!md.includes("|"), "no table syntax in the downloadable copy");
assert.deepEqual(filledCount(lesson, rec.worksheet), { filled: 2, total: 36 });
assert.ok(worksheetBody(lesson, base).includes("## Reflect"));
// A record whose worksheet field the lesson no longer declares still parses and is kept.
const stale = recordSchema.parse({ ...base, worksheet: { "retired-field": "kept" } });
assert.equal(stale.worksheet["retired-field"], "kept");
// Ready-for-review gating in the shared schema.
assert.ok(!recordSchema.safeParse({ ...base, status: "ready-for-review" }).success);
assert.ok(recordSchema.safeParse({ ...base, status: "ready-for-review", worksheet: { "next-action": "x" } }).success);
assert.ok(recordSchema.safeParse({ ...base, status: "ready-for-review", notes: "n", submission: "s" }).success);
console.log("worksheet helpers and schema gating: ok");

// Shipped worksheet field ids are record keys: a rename silently orphans a
// learner's saved answer. These 35 ids went out with the week1-day1-v1 pilot
// on 7 September 2026 and must keep existing exactly as written.
const shipped = [
  "define-product-design", "define-ux", "define-ui",
  "app", "task", "start", "actions",
  ...[1, 2, 3, 4, 5].flatMap((n) => [`entry-${n}-saw`, `entry-${n}-label`, `entry-${n}-goal`, `entry-${n}-check`]),
  "user-goal", "business-goal",
  "visual-improvement", "visual-check", "behavior-improvement", "behavior-check",
  "open-question", "next-action",
];
const present = new Set(lesson.apprenticeship.worksheet.flatMap(s => s.fields).map(f => f.id));
for (const id of shipped) assert.ok(present.has(id), `shipped worksheet field ${id} must not be renamed or removed`);
assert.equal(shipped.length, 35);
// Every field a step names must exist, and every field must belong to a step.
const stepFields = new Set(lesson.apprenticeship.guide.flatMap(g => g.fields || []));
for (const id of present) assert.ok(stepFields.has(id), `field ${id} belongs to no step`);
// Progressive reveal must never hide an answer the learner already wrote.
const step3 = lesson.apprenticeship.guide[2];
assert.ok(step3.reveal && step3.reveal.count === 20 && step3.reveal.first === 4);
console.log("shipped field ids preserved and reveal bounded: ok");
