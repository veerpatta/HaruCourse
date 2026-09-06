import { registerHooks } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import assert from "node:assert/strict";
registerHooks({
  resolve(s, c, next) {
    return next(s.startsWith(".") && !/\.[a-z]+$/.test(s) ? s + ".ts" : s, c);
  },
});
const { modules } = await import("../src/modules.ts");
const { lessons } = await import("../src/lessons.ts");
const { baselineLesson } = await import("../src/course.ts");
const { readingSelections } = await import("../src/reading.ts");
const catalog = readFileSync("RESOURCE-LIBRARY.md", "utf8");
const ids = new Set([...catalog.matchAll(/^\| (R\d+) \|/gm)].map((m) => m[1]));
assert.equal(ids.size, 28);
const seen = new Set();
for (const m of modules) {
  assert(!seen.has(m.id));
  for (const pre of m.prerequisites)
    assert(seen.has(pre), `Missing/late prerequisite ${pre}`);
  seen.add(m.id);
  assert(ids.has(m.primary) && ids.has(m.alternative));
}
for (let area = 1; area <= 17; area++)
  assert(
    modules.some((m) => m.areas.includes(area)),
    `Missing area ${area}`,
  );
for (const l of lessons)
  assert(ids.has(l.resource.id), `Unknown lesson resource ${l.id}`);
assert.equal(new Set(lessons.map((l) => l.id)).size, lessons.length);
function output(path, text) {
  if (process.argv.includes("--check"))
    assert.equal(
      readFileSync(path, "utf8").replaceAll("\r\n", "\n"),
      text,
      `${path} is stale; run npm run docs:generate`,
    );
  else writeFileSync(path, text);
}
output(
  "COURSE-BLUEPRINT.md",
  `# Self-paced curriculum blueprint\n\nGenerated from src/modules.ts; edit that source, then run npm run docs:generate. See COURSE-REQUIREMENTS.md for the 17-area definitions and RESOURCE-LIBRARY.md for exact resources, verification and open gaps.\n\nLevels → Modules → Lessons. Learn → Do → Check → Your work uses concise instructions with optional detail. No completion deadline. Effort estimates are optional planning information, including iteration and project work. Two hours is a suggested session, not a daily commitment or gate. Navigation and readiness never establish mastery.\n\n| Module | Level | Title | Optional effort hours | Prerequisites | Areas | Primary / alternative | Status | Output |\n|---|---|---|---|---|---|---|---|---|\n${modules.map((m) => `| ${m.id} | ${m.level} | ${m.title} | ${m.hours} | ${m.prerequisites.join(", ") || "None"} | ${m.areas.join(", ")} | ${m.primary} / ${m.alternative} | ${m.status} | ${m.output} |`).join("\n")}\n\nTotal provisional effort: ${modules.reduce((n, m) => n + m.hours, 0)} hours. Published means available to study, not assessed complete. m00 is the baseline; m01/m02 contain twelve introductory lessons. Other modules are mapped, not yet authored.\n\nAt each module review, request artifacts, score the lesson criteria (0 absent, 1 needs help, 2 independent, 3 strong reasoning), identify a repair and recheck the revised artifact. Formal scored assessment software is still pending. No time-based lock is permitted. See docs/COURSE-AUTHORING.md for the full lesson contract and RESOURCE-LIBRARY.md for portfolio, tool, book, career and current-awareness programs.\n`,
);
function list(items) {
  return items.map((s) => "- " + s).join("\n");
}
function details(title, content) {
  return `<details>\n<summary>${title}</summary>\n\n${content}\n\n</details>`;
}
function lessonDoc(l) {
  const reading = readingSelections[l.resource.id];
  return `## ${l.id === "baseline-v1" ? "Baseline" : "Lesson " + l.day}: ${l.title}

Stable ID: ${l.id}. ${l.optional ? "Optional" : "Core"}.

${l.why}

### Learn

Bring: ${l.prerequisite}

${list(l.teach)}

${l.example ? details("Worked example", l.example) : ""}

${l.explanation.length ? details("Why this works", list(l.explanation)) : ""}

${reading ? details("Reading and free alternative", `[${l.resource.title}](${l.resource.url}) (${l.resource.id}).\n\nRead: ${reading.selection}. About ${reading.minutes} minutes.\n\nPublic reading checked 2026-09-06; no account, card or trial. If unavailable, complete the local exercise with this lesson’s concepts and example. Paper and local notes are sufficient. Catalog restrictions apply.`) : ""}

### Do

Make these:

${list(l.outputs)}

${l.steps.map((step, i) => `#### ${i + 1}. ${step.title}\n\n${list(step.instructions)}`).join("\n\n")}

Pause after any step. Save the artifact and next action in Your work.

${details("Optional effort and portfolio context", list(l.steps.map((s) => `${s.title}: about ${s.minutes} minutes`)) + "\n\nNo deadline; split work across sessions.\n\n" + l.portfolio)}

### Check

${l.check.map((q) => details(q.question, q.answer)).join("\n\n")}

Review criteria:

${list(l.rubric)}

${details("Need to revise?", list(l.repairs) + "\n\nShow the revised artifact and criterion at recheck.")}

${details("How review works", "0 absent · 1 needs support · 2 independently adequate · 3 strong reasoning and trade-offs. Ready for review is not assessed completion. Formal scored assessment is not implemented.")}

### Your work

- Save notes and your next action.
- Add a work reference; this does not upload the file.
- Record actual minutes if useful.
- Select Ready for review only after adding notes and a work reference.
- Read version-specific feedback and revise the artifact.
`;
}
// Prevent accidental loss of legacy identities or the new teaching contract.
assert.deepEqual(
  lessons.slice(0, 12).map((l) => l.id),
  [
    ...Array.from({ length: 7 }, (_, i) => `week1-day${i + 1}-v1`),
    ...Array.from({ length: 5 }, (_, i) => `week2-day${i + 1}-v1`),
  ],
);
for (const l of [baselineLesson, ...lessons]) {
  assert(l.prerequisite && l.outputs.length && l.repairs.length);
  assert(
    l.teach.every((t) => t.length <= 240),
    `Keep essential teaching concise: ${l.id}`,
  );
  for (const s of l.steps) {
    assert(s.instructions.length);
    assert(s.instructions.every((t) => t.length <= 240));
    assert.equal(s.text, s.instructions.join(" "));
  }
  assert.equal(l.deliverable, l.outputs.join("; "));
  if (l.id !== baselineLesson.id) assert(readingSelections[l.resource.id]);
}
output(
  "BASELINE-DIAGNOSTIC.md",
  "# Starting-point diagnostic\n\nGenerated from src/course.ts. No preparation, deadline or pass/fail grade.\n\n" +
    lessonDoc(baselineLesson),
);
for (const week of [1, 2]) {
  const module = modules.find((m) => m.id === `m0${week}`);
  output(
    `WEEK-0${week}.md`,
    `# ${module.title}\n\nGenerated from src/lessons.ts and src/week2.ts. Legacy filename retained for existing links. Level 1 · Module ${week}. No deadlines; split any lesson across sessions.\n\n` +
      lessons
        .filter((l) => (l.week || 1) === week)
        .map(lessonDoc)
        .join("\n"),
  );
}
console.log(
  "Course coverage, prerequisite order, resource IDs and generated documents checked.",
);
