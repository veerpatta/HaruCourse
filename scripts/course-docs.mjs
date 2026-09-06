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
  `# Self-paced curriculum blueprint\n\nGenerated from src/modules.ts; edit that source, then run npm run docs:generate. See COURSE-REQUIREMENTS.md for the 17-area definitions and RESOURCE-LIBRARY.md for exact resources, verification and open gaps.\n\nLevels → Modules → Lessons. No completion deadline. Effort estimates are optional planning information, including iteration and project work. Two hours is a suggested session, not a daily commitment or gate. Navigation and readiness never establish mastery.\n\n| Module | Level | Title | Optional effort hours | Prerequisites | Areas | Primary / alternative | Status | Output |\n|---|---|---|---|---|---|---|---|---|\n${modules.map((m) => `| ${m.id} | ${m.level} | ${m.title} | ${m.hours} | ${m.prerequisites.join(", ") || "None"} | ${m.areas.join(", ")} | ${m.primary} / ${m.alternative} | ${m.status} | ${m.output} |`).join("\n")}\n\nTotal provisional effort: ${modules.reduce((n, m) => n + m.hours, 0)} hours. Published means available to study, not assessed complete. m00 is the baseline; m01/m02 contain twelve introductory lessons. Other modules are mapped, not yet authored.\n\nAt each module review, request artifacts, score the lesson criteria (0 absent, 1 needs help, 2 independent, 3 strong reasoning), identify a repair and recheck the revised artifact. Formal scored assessment software is still pending. No time-based lock is permitted. See docs/COURSE-AUTHORING.md for the full lesson contract and RESOURCE-LIBRARY.md for portfolio, tool, book, career and current-awareness programs.\n`,
);
for (const week of [1, 2]) {
  const module = modules.find((m) => m.id === `m0${week}`);
  output(
    `WEEK-0${week}.md`,
    `# ${module.title}\n\nGenerated from src/lessons.ts and src/week2.ts. Legacy filename retained for existing links. Level 1 · Module ${week}. No deadlines; split any lesson across sessions.\n\n` +
      lessons
        .filter((l) => (l.week || 1) === week)
        .map(
          (l) =>
            `## Lesson ${l.day}: ${l.title}\n\nStable ID: ${l.id}. ${l.optional ? "Optional" : "Core"}.\n\n${l.why}\n\n### Learn\n\n${l.teach.join("\n\n")}\n\n### Worked example\n\n${l.example}\n\n### Practice and pause points\n\n${l.steps.map((s) => `- ${s.title} (~${s.minutes} min): ${s.text}`).join("\n")}\n\nPause after any step; save the artifact and next action.\n\n### Output\n\n${l.deliverable}\n\n### Checks\n\n${l.check.map((q) => `- ${q.question} Answer: ${q.answer}`).join("\n")}\n\n### Rubric\n\n${l.rubric.map((r) => `- ${r}`).join("\n")}\n\nIf a criterion is missing, revise that part and request a recheck.\n\n### Portfolio contribution\n\n${l.portfolio}\n\nResource ${l.resource.id}: [${l.resource.title}](${l.resource.url}). Module approved pair: ${module.primary} / ${module.alternative}; catalog restrictions apply.\n`,
        )
        .join("\n"),
  );
}
console.log(
  "Course coverage, prerequisite order, resource IDs and generated documents checked.",
);
