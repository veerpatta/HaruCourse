import { registerHooks } from "node:module";
import { readFileSync, writeFileSync } from "node:fs";
import assert from "node:assert/strict";
registerHooks({
  resolve(s, c, next) {
    return next(s.startsWith(".") && !/\.[a-z]+$/.test(s) ? s + ".ts" : s, c);
  },
});
const { modules } = await import("../src/modules.ts");
const { lessons, publishedLessonIds, isPublishedLesson } = await import(
  "../src/lessons.ts"
);
const { baselineLesson } = await import('../src/course.ts');
const { readingSelections } = await import('../src/reading.ts');
const catalog = readFileSync("RESOURCE-LIBRARY.md", "utf8");
const ids = new Set([...catalog.matchAll(/^\| (R\d+) \|/gm)].map((m) => m[1]));
assert.equal(ids.size, 63);
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
// Lessons written against the m03/m04 contract carry a module, assigned
// resources and scored criteria. Legacy lessons carry none of that, so each
// rule below only applies where the richer field is present.
for (const l of lessons) {
  if (!l.module) continue;
  const owner = modules.find((m) => m.id === l.module);
  assert(owner, `Lesson ${l.id} names unknown module ${l.module}`);
  assert.equal(
    owner.status,
    "published",
    `Lesson ${l.id} belongs to unpublished module ${l.module}`,
  );
  for (const area of l.areas || [])
    assert(
      owner.areas.includes(area),
      `Lesson ${l.id} claims area ${area} outside module ${l.module}`,
    );
  assert(l.resources?.length, `Lesson ${l.id} has no assigned resources`);
  for (const r of l.resources) {
    assert(ids.has(r.id), `Lesson ${l.id} assigns unknown resource ${r.id}`);
    assert(
      ids.has(r.fallbackId),
      `Lesson ${l.id} names unknown fallback ${r.fallbackId}`,
    );
    assert(r.section && r.purpose && r.minutes && r.limits, `Lesson ${l.id} resource ${r.id} is missing contract fields`);
  }
  assert(
    l.resources.some((r) => r.id === l.resource.id),
    `Lesson ${l.id} primary resource is not in its assigned list`,
  );
  assert(l.objective && l.bringForward && l.misconception && l.freeToolPath, `Lesson ${l.id} is missing a contract field`);
  assert(l.criteria?.length, `Lesson ${l.id} has no scored criteria`);
  for (const c of l.criteria) {
    assert.equal(
      c.levels.length,
      4,
      `Lesson ${l.id} criterion "${c.criterion}" needs all four scores`,
    );
    assert(
      c.evidence && c.remediation && c.recheck,
      `Lesson ${l.id} criterion "${c.criterion}" is missing evidence, remediation or recheck`,
    );
  }
  // The flat rubric is what older readers and the app's check section render,
  // so it must stay the exact list of criterion names rather than drifting.
  assert.deepEqual(
    l.rubric,
    l.criteria.map((c) => c.criterion),
    `Lesson ${l.id} rubric does not match its criteria names`,
  );
}
// The API, the MCP tools and the studio all gate on publishedLessonIds
// rather than on a lesson merely existing. Prove that gate actually consults
// module status, using a synthetic catalog so nothing unpublished ships.
{
  const { baselineLesson } = await import('../src/course.ts');
const { readingSelections } = await import('../src/reading.ts');
const catalog = [
    { id: "m03", status: "published" },
    { id: "m99", status: "planned" },
  ];
  assert.equal(
    isPublishedLesson({ module: "m03" }, catalog),
    true,
    "a lesson in a published module must be exposed",
  );
  assert.equal(
    isPublishedLesson({ module: "m99" }, catalog),
    false,
    "a lesson in a planned module must never be exposed",
  );
  assert.equal(
    isPublishedLesson({ module: "m404" }, catalog),
    false,
    "a lesson naming an unknown module must never be exposed",
  );
  assert.equal(
    isPublishedLesson({ week: 1 }, catalog),
    false,
    "legacy week lessons must still be resolved through the catalog",
  );
  for (const l of lessons)
    assert(
      publishedLessonIds.has(l.id),
      `Lesson ${l.id} is authored but its module is not published; publish the module or remove the import`,
    );
}
function output(path, text) {
  if (process.argv.includes("--check"))
    assert.equal(
      readFileSync(path, "utf8").replaceAll("\r\n", "\n"),
      text,
      `${path} is stale; run npm run docs:generate`,
    );
  else writeFileSync(path, text);
}
const authored = modules.filter((m) =>
  lessons.some((l) => (l.module || `m0${l.week || 1}`) === m.id),
);
const authoredDetail = authored
  .map(
    (m) =>
      `${m.id} ${lessons.filter((l) => (l.module || `m0${l.week || 1}`) === m.id).length}`,
  )
  .join(", ");
output(
  "COURSE-BLUEPRINT.md",
  `# Self-paced curriculum blueprint\n\nGenerated from src/modules.ts; edit that source, then run npm run docs:generate. See COURSE-REQUIREMENTS.md for the 17-area definitions and RESOURCE-LIBRARY.md for exact resources, verification and open gaps.\n\nLevels → Modules → Lessons. Learn → Do → Check → Your work uses concise instructions with optional detail. No completion deadline. Effort estimates are optional planning information, including iteration and project work. Two hours is a suggested session, not a daily commitment or gate. Navigation and readiness never establish mastery.\n\n| Module | Level | Title | Optional effort hours | Prerequisites | Areas | Primary / alternative | Status | Output |\n|---|---|---|---|---|---|---|---|---|\n${modules.map((m) => `| ${m.id} | ${m.level} | ${m.title} | ${m.hours} | ${m.prerequisites.join(", ") || "None"} | ${m.areas.join(", ")} | ${m.primary} / ${m.alternative} | ${m.status} | ${m.output} |`).join("\n")}\n\nTotal provisional effort: ${modules.reduce((n, m) => n + m.hours, 0)} hours. Published means available to study, not assessed complete. m00 is the baseline exercise; ${authored.length} modules carry ${lessons.length} authored lessons (${authoredDetail}). The remaining ${modules.length - authored.length - 1} modules are mapped, not yet authored.\n\nAt each module review, request artifacts, score the lesson criteria (0 absent, 1 needs help, 2 independent, 3 strong reasoning), identify a repair and recheck the revised artifact. Every module authored under the lesson contract states those four scores and a bounded repair per criterion; m01 and m02 predate it and carry criteria names only. Formal scored assessment software is still pending, so no score recorded anywhere is produced or stored by the app. No time-based lock is permitted. See docs/COURSE-AUTHORING.md for the full lesson contract and RESOURCE-LIBRARY.md for portfolio, tool, book, career and current-awareness programs.\n`,
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
for (const l of [baselineLesson, ...lessons.filter(l => !l.module)]) {
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
// Modules authored directly in the guided shape hold themselves to the same
// concise standard as the rewritten legacy lessons. m03-m07 reach the app
// through adaptPublished and keep their longer prose in `explanation`, so they
// are exempt here by design rather than by oversight.
for (const l of lessons.filter((l) => l.guided)) {
  assert(
    l.prerequisite && l.outputs.length && l.repairs.length,
    `Guided lesson ${l.id} needs a prerequisite, outputs and repairs`,
  );
  assert(
    l.teach.every((t) => t.length <= 240),
    `Keep essential teaching concise: ${l.id}`,
  );
  assert(
    l.outputs.every((t) => t.length <= 240),
    `Keep each named output concise: ${l.id}`,
  );
  for (const s of l.steps) {
    assert(s.instructions.length, `Guided step needs instructions: ${l.id}`);
    assert(
      s.instructions.every((t) => t.length <= 240),
      `Keep each action concise: ${l.id} / ${s.title}`,
    );
  }
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
const scores = [
  "0 absent",
  "1 needs support",
  "2 independently adequate",
  "3 strong reasoning and tradeoffs",
];
for (const module of modules) {
  const own = lessons.filter((l) => l.module === module.id);
  if (!own.length) continue;
  const source = `src/module${Number(module.id.slice(1))}.ts`;
  // The module's hour estimate covers the fieldwork, waiting and iteration its
  // output needs, not only the lesson steps. Where the two differ, say so:
  // otherwise a reader divides hours by lessons and gets a per-lesson figure
  // that contradicts every lesson's own step total.
  const lessonHours =
    own.reduce((n, l) => n + l.steps.reduce((a, s) => a + s.minutes, 0), 0) / 60;
  const effort =
    lessonHours === module.hours
      ? `Optional effort ${module.hours} hours across ${own.length} lessons, which is the sum of the lesson steps themselves.`
      : lessonHours < module.hours
        ? `Optional effort ${module.hours} hours across ${own.length} lessons: ${lessonHours} hours of lesson steps, and the remainder for the fieldwork, waiting, recruitment and iteration this module's output needs outside them.`
        : `Optional effort ${module.hours} hours across ${own.length} lessons, but the lesson steps alone come to ${lessonHours} hours: the module estimate is low and should be re-set from real pace rather than trusted.`;
  output(
    `MODULE-${module.id.slice(1)}.md`,
    `# ${module.title}\n\nGenerated from ${source}; edit that source, then run npm run docs:generate. Level ${module.level} · Module ${module.id} · requirement areas ${module.areas.join(", ")}. ${effort} No deadlines; split any lesson across sessions and return to it without penalty.\n\nPrerequisite: ${module.prerequisites.join(", ") || "none"}. This is guidance for meaningful practice, not a lock. Module approved resource pair: ${module.primary} / ${module.alternative}. Every resource restriction in RESOURCE-LIBRARY.md applies; required exercises never depend on a candidate tool workflow.\n\nEach criterion below is scored ${scores.join(", ")}. A score is a review judgement about a submitted artifact; the app records practice and feedback but does not compute, store or display any score. Reading, navigation and elapsed time never establish mastery.\n\n` +
      own
        .map(
          (l) =>
            `## Lesson ${l.day}: ${l.title}\n\nStable ID: ${l.id}. ${l.optional ? "Optional" : "Core"}. Areas ${(l.areas || module.areas).join(", ")}. Optional effort ~${l.steps.reduce((n, s) => n + s.minutes, 0)} min.\n\n**Objective.** ${l.objective}\n\n**Bring forward.** ${l.bringForward}\n\n${l.why}\n\n### Learn\n\n${(l.explanation || l.teach).join("\n\n")}\n\n**Common misconception.** ${l.misconception}\n\n### Worked example\n\n${l.example}\n\n### Practice and pause points\n\n${l.steps.map((s) => `- ${s.title} (~${s.minutes} min): ${s.text}`).join("\n")}\n\nPause after any step; save the artifact and next action.\n\n**Free tool path.** ${l.freeToolPath}\n\n### Output\n\n${l.deliverable}\n\n### Checks\n\n${l.check.map((q) => `- ${q.question} Answer: ${q.answer}`).join("\n")}\n\n### Rubric and remediation\n\n${l.criteria.map((c) => `**${c.criterion}**\n\nAdequate evidence: ${c.evidence}\n\n${c.levels.map((text, score) => `- ${score} — ${text}`).join("\n")}\n\nIf below 2: ${c.remediation} Show at recheck: ${c.recheck}`).join("\n\n")}\n\n### Portfolio contribution\n\n${l.portfolio}\n\n### Assigned resources\n\n${l.resources.map((r) => `- ${r.id}: [${r.title}](${r.url}) — ${r.section} Purpose: ${r.purpose} Effort: ${r.minutes} min. ${r.limits} Fallback: ${r.fallbackId}.`).join("\n")}\n`,
        )
        .join("\n"),
  );
}
console.log(
  "Course coverage, prerequisite order, resource IDs, lesson contract fields and generated documents checked.",
);
