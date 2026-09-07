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
const { readingSelections, videoSelections } = await import('../src/reading.ts');
const { activities } = await import('../src/apprenticeship.ts');
const { WORKSHEET_FIELD_CAP, worksheetFieldId } = await import('../shared/record.ts');
const { contrastRatio } = await import('../src/contrast.ts');
const beginnerAudit = readFileSync('docs/BEGINNER-LESSON-AUDIT.md', 'utf8');
assert.equal(contrastRatio('#000000', '#ffffff'), 21);
assert.equal(contrastRatio('#123456', '#123456'), 1);
assert.equal(contrastRatio('#ffffff', '#000000'), 21);
assert.equal(contrastRatio('#xyzxyz', '#ffffff'), null);
assert.equal(contrastRatio('#fff', '#ffffff'), null);
assert(contrastRatio('#777777', '#ffffff') < 4.5, 'Do not round a failing ratio up to a pass');
assert(contrastRatio('#767676', '#ffffff') >= 4.5);
const { workspaceGuide, figmaGuide, milestones, projectPacks, projectStart, caseStudySections } = await import('../src/journey.ts');
const catalog = readFileSync("RESOURCE-LIBRARY.md", "utf8");
const ids = new Set([...catalog.matchAll(/^\| (R\d+) \|/gm)].map((m) => m[1]));
assert.equal(ids.size, 69);
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
const auditedLessonIds = [...beginnerAudit.matchAll(/^\| ([a-z0-9-]+-v1) \|/gm)].map(m => m[1]);
assert.equal(new Set(auditedLessonIds).size, auditedLessonIds.length, 'Beginner audit has a duplicate lesson row');
assert.equal(auditedLessonIds.length, lessons.length, 'Beginner audit must contain one row per published lesson');
for (const l of lessons)
  assert(auditedLessonIds.includes(l.id), `Beginner audit is missing ${l.id}`);
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
  // Keep generated course views connected to the plan without rewriting teaching.
  const titleEnd = text.indexOf("\n");
  const planNote = "\n\n> Beginner teaching refinement is tracked lesson by lesson. See [the all-course beginner audit](docs/BEGINNER-LESSON-AUDIT.md) for every lesson's gap and [the learning-experience plan](docs/LEARNING-EXPERIENCE-PLAN.md) for implementation and verification. Published, worksheet-enabled, teaching-refined, learner-validated and assessed are separate states.";
  text = text.slice(0, titleEnd) + planNote + text.slice(titleEnd);
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
// m00, the baseline diagnostic, is deliberately outside the lesson files, so
// it is excluded from the authored count rather than reported as a gap.
const remaining = modules.length - authored.length - 1;
output(
  "COURSE-BLUEPRINT.md",
  `# Self-paced curriculum blueprint\n\nGenerated from src/modules.ts; edit that source, then run npm run docs:generate. See COURSE-REQUIREMENTS.md for the 17-area definitions and RESOURCE-LIBRARY.md for exact resources, verification and open gaps.\n\nLevels → Modules → Lessons. Learn → Do → Check → Your work uses concise instructions with optional detail. No completion deadline. Effort estimates are optional planning information, including iteration and project work. Two hours is a suggested session, not a daily commitment or gate. Navigation and readiness never establish mastery.\n\n| Module | Level | Title | Optional effort hours | Prerequisites | Areas | Primary / alternative | Status | Output |\n|---|---|---|---|---|---|---|---|---|\n${modules.map((m) => `| ${m.id} | ${m.level} | ${m.title} | ${m.hours} | ${m.prerequisites.join(", ") || "None"} | ${m.areas.join(", ")} | ${m.primary} / ${m.alternative} | ${m.status} | ${m.output} |`).join("\n")}\n\nTotal provisional effort: ${modules.reduce((n, m) => n + m.hours, 0)} hours. Published means available to study, not assessed complete. m00 is the baseline exercise; ${authored.length} modules carry ${lessons.length} authored lessons (${authoredDetail}). ${remaining === 0 ? "Every mapped module is now authored." : `The remaining ${remaining} ${remaining === 1 ? "module is" : "modules are"} mapped, not yet authored.`}\n\nAt each module review, request artifacts, score the lesson criteria (0 absent, 1 needs help, 2 independent, 3 strong reasoning), identify a repair and recheck the revised artifact. Every module authored under the lesson contract states those four scores and a bounded repair per criterion; m01 and m02 predate it and carry criteria names only. Formal scored assessment software is still pending, so no score recorded anywhere is produced or stored by the app. No time-based lock is permitted. See docs/COURSE-AUTHORING.md for the full lesson contract and RESOURCE-LIBRARY.md for portfolio, tool, book, career and current-awareness programs.\n`,
);
function list(items) {
  return items.map((s) => "- " + s).join("\n");
}
function details(title, content) {
  return `<details>\n<summary>${title}</summary>\n\n${content}\n\n</details>`;
}
// Guided practice (docs/LEARNING-EXPERIENCE-PLAN.md): the same route,
// worksheet, step guidance and video-action pair the app renders, so the
// generated document and the MCP lesson stay one source.
function guidedDoc(l) {
  const a = l.apprenticeship;
  if (!a.guide) return "";
  const video = a.video
    ? `${details(
        `Optional video paired with step ${a.guide.findIndex((g) => g.video === a.video.id) + 1}`,
        `[${a.video.title}](${a.video.url}) — ${a.video.publisher}, ${a.video.duration}, ${a.video.language}, ${a.video.captions}. ${a.video.segment}\n\nWhat to notice:\n\n${list(a.video.notice)}\n\n**Then:** ${a.video.then}\n\n**Without the video:** ${a.video.written}\n\n${a.video.differences} ${a.video.access} Checked ${a.video.checked}.`,
      )}\n\n`
    : "";
  const demoDoc = (d) =>
    `**See it first.** ${d.scenario}\n\n${d.beats.map((b) => `- **${b.label}:** ${b.text}`).join("\n")}\n\n**The wrong turn:** ${d.wrongTurn}\n\n**What it costs:** ${d.tradeoff}\n\n**Still unknown:** ${d.uncertainty}\n\n`;
  const supportedDoc = (s) =>
    `**Try it with help.** ${s.material}\n\n${s.question}\n\n${s.options.map((o) => `- ${o.correct ? "**" + o.label + "**" : o.label} — ${o.feedback}`).join("\n")}\n\n**Then:** ${s.then}\n\n`;
  const steps = l.steps
    .map((s, i) => {
      const g = a.guide[i];
      const fields = (g.fields || []).map((id) => {
        const f = a.worksheet.flatMap((w) => w.fields).find((f) => f.id === id);
        return `- ${f.label}${f.kind === "choice" ? ` (${f.options.join(" / ")})` : ""}${f.hint ? ` — ${f.hint}` : ""}`;
      });
      return `#### ${i + 1}. ${s.title}\n\n${g.demo ? demoDoc(g.demo) : ""}${list(s.instructions)}\n\n**You should end up with:** ${g.expect}\n\n${g.supported ? supportedDoc(g.supported) : ""}${g.fields?.length ? `Worksheet fields for this step${g.reveal ? ", revealed a few at a time in the app" : ""}:\n\n${fields.join("\n")}\n\n` : ""}${g.example ? details("Example", g.example) + "\n\n" : ""}${g.terms?.length || g.start || g.enough ? details("Help with this step", (g.terms || []).map((t) => `- **${t.term}:** ${t.meaning}`).join("\n") + (g.start ? `\n\nStuck starting? ${g.start}` : "") + (g.enough ? `\n\nIs it enough? ${g.enough}` : "")) : ""}`;
    })
    .join("\n\n");
  const save = a.saveRoute
    ? `\n**Save and continue.** Saved for you: ${a.saveRoute.auto} Kept outside the app: ${a.saveRoute.external} What your creator sees: ${a.saveRoute.creator} Your next action: ${a.saveRoute.next}\n`
    : "";
  return `**Where to practise:** ${a.route.recommended}\n\n${details("Work in a file on your computer instead", a.route.alternative + "\n\nTools: " + a.workspace.tools + "\n\n" + list(a.workspace.setup))}\n\n${video}${steps}\n${save}\nA ticked step marks where you are; it is not a mark of competence, and any step can be unticked or revisited. Download a plain-text copy of the worksheet from the Do section at any time.\n\n`;
}
function activityDoc(l) {
  const a = l.apprenticeship;
  assert(a, `Missing activity ${l.id}`);
  const guided = !!a.guide;
  const setup = guided ? "" : `**Where to work:** ${a.workspace.tools}\n\n${list(a.workspace.setup)}\n\n${details('Copyable starter template', '```text\n' + a.starter + '\n```')}\n\n`;
  return `#### ${a.activity}\n\n${a.mission}\n\n${setup}${guidedDoc(l)}${a.visual ? details('Optional Figma Starter route (workflow not authenticated)', list(figmaGuide)) : ''}\n\n${l.id === 'm03-l04-v1' ? 'Use the offline contrast calculator in this lesson’s Do section. It accepts opaque six-digit sRGB colors; classification and exceptions come from R30. Record exact input values and the unrounded-threshold result, not only the displayed ratio.' : ''}\n\n${a.hints.map((h, i) => details('Hint ' + (i + 1), h)).join('\n\n')}\n\n${a.ai ? details('Optional AI rehearsal', a.ai.purpose + '\n\n' + list(a.ai.setup) + '\n\n```text\n' + a.ai.prompt + '\n```\n\n' + a.ai.followUp + '\n\nWithout AI or at a usage limit: ' + a.ai.alternative) : ''}\n\n**Save:**\n\n${list(a.workspace.save)}\n\n**Adequate evidence:** ${a.adequate}\n\n**Bring forward:** ${a.handoff}\n`;
}
function lessonDoc(l) {
  const reading = readingSelections[l.resource.id];
  return `## ${l.id === "baseline-v1" ? "Baseline" : "Lesson " + l.day}: ${l.title}

Stable ID: ${l.id}. ${l.optional ? "Optional" : "Core"}.

${l.why}

### Learn

Bring: ${l.prerequisite}

${list(l.teach)}
${l.apprenticeship?.guide ? `\nHow this lesson works: Do has ${l.steps.length} short steps with an in-app worksheet that saves as you type; Learn remembers which step you were on.\n` : ""}
${l.example ? details("Worked example", l.example) : ""}

${l.explanation.length ? details("Why this works", list(l.explanation)) : ""}

${reading ? details("Reading and free alternative", `[${l.resource.title}](${l.resource.url}) (${l.resource.id}).\n\nRead: ${reading.selection}. About ${reading.minutes} minutes.\n\nPublic reading checked 2026-09-06; no account, card or trial. If unavailable, complete the local exercise with this lesson’s concepts and example. Paper and local notes are sufficient. Catalog restrictions apply.`) : ""}

### Do

${activityDoc(l)}

Make these:

${list(l.outputs)}

${l.steps.map((step, i) => `#### ${i + 1}. ${step.title}\n\n${list(step.instructions)}`).join("\n\n")}

Pause after any step. Save the artifact and next action in Your work.

${details("Optional effort and portfolio context", list(l.steps.map((s) => `${s.title}: about ${s.minutes} minutes`)) + "\n\nNo deadline; split work across sessions.\n\n" + l.portfolio)}

### Check

${(l.apprenticeship?.checks || []).map((c) => `**${c.question}**\n\n${c.options.map((o) => `- ${o.correct ? "**" + o.label + "**" : o.label} — ${o.feedback}`).join("\n")}\n\nImprove your work: ${c.repair}\n\nAt recheck: ${c.recheck}`).join("\n\n")}${l.apprenticeship?.checks?.length ? "\n\nAnswer each question in the app before its explanation appears. Answers are not saved or scored.\n\n" : ""}${l.check.map((q) => details(q.question, q.answer)).join("\n\n")}

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
            `## Lesson ${l.day}: ${l.title}\n\nStable ID: ${l.id}. ${l.optional ? "Optional" : "Core"}. Areas ${(l.areas || module.areas).join(", ")}. Optional effort ~${l.steps.reduce((n, s) => n + s.minutes, 0)} min.\n\n**Objective.** ${l.objective}\n\n**Bring forward.** ${l.bringForward}\n\n${l.why}\n\n### Learn\n\n${(l.explanation.length ? l.explanation : l.teach).join("\n\n")}\n\n**Common misconception.** ${l.misconception}\n\n### Worked example\n\n${l.example}\n\n${activityDoc(l)}\n\n### Practice and pause points\n\n${l.steps.map((s) => `- ${s.title} (~${s.minutes} min): ${s.text}`).join("\n")}\n\nPause after any step; save the artifact and next action.\n\n**Free tool path.** ${l.freeToolPath}\n\n### Output\n\n${l.deliverable}\n\n### Checks\n\n${l.check.map((q) => `- ${q.question} Answer: ${q.answer}`).join("\n")}\n\n### Rubric and remediation\n\n${l.criteria.map((c) => `**${c.criterion}**\n\nAdequate evidence: ${c.evidence}\n\n${c.levels.map((text, score) => `- ${score} — ${text}`).join("\n")}\n\nIf below 2: ${c.remediation} Show at recheck: ${c.recheck}`).join("\n\n")}\n\n### Portfolio contribution\n\n${l.portfolio}\n\n### Assigned resources\n\n${l.resources.map((r) => `- ${r.id}: [${r.title}](${r.url}) — ${r.section} Purpose: ${r.purpose} Effort: ${r.minutes} min. ${r.limits} Fallback: ${r.fallbackId}.`).join("\n")}\n`,
        )
        .join("\n"),
  );
}
// All published lessons, including the diagnostic, must have a usable handoff.
for (const id of Object.keys(activities)) assert(lessons.some(l => l.id === id), `Orphan authored activity ${id}`);
for (const l of [baselineLesson, ...lessons]) {
  const a = l.apprenticeship;
  assert(a?.mission && a.activity && a.adequate && a.handoff, `Incomplete activity ${l.id}`);
  assert(a.workspace.tools && a.workspace.setup.length >= 2 && a.workspace.save.length >= 2);
  assert(a.workspace.file.includes(l.id), `Unstable artifact path ${l.id}`);
  assert(a.starter.includes('Next action'));
  if (l.id === baselineLesson.id) { assert(!a.ai); assert.equal(a.hints.length, 0); assert(!a.guide && !a.worksheet && !a.video && !a.route, 'The diagnostic gets no guided coaching'); }
  else { assert.equal(a.hints.length, 2); assert(a.starter.includes('Output checklist')); }
  if (a.ai) assert(a.ai.prompt.includes(l.title) && a.ai.followUp && a.ai.alternative && a.ai.setup.length);
}
// Guided-practice contract for refined lessons (docs/LEARNING-EXPERIENCE-PLAN.md).
// Worksheet ids are record keys, so they must be stable, unique and bounded;
// every step names only fields that exist; examples say they are made up;
// a video is assigned only from the catalog's verified video table.
const videoIds = new Set([...catalog.matchAll(/^\| (VID\d+) \|/gm)].map((m) => m[1]));
for (const l of lessons) {
  const a = l.apprenticeship;
  if (!a.guide && !a.worksheet && !a.video && !a.route) continue;
  assert(a.guide && a.worksheet && a.route, `Guided lesson ${l.id} needs route, worksheet and guide together`);
  assert.equal(a.guide.length, l.steps.length, `Guide for ${l.id} must align with its steps`);
  const fields = a.worksheet.flatMap((s) => s.fields);
  const ids = fields.map((f) => f.id);
  assert.equal(new Set(ids).size, ids.length, `Duplicate worksheet field id in ${l.id}`);
  assert(ids.length <= WORKSHEET_FIELD_CAP, `${l.id} declares more than ${WORKSHEET_FIELD_CAP} worksheet fields`);
  for (const f of fields) {
    assert(worksheetFieldId.safeParse(f.id).success, `Bad worksheet id ${f.id} in ${l.id}`);
    assert(f.label && f.label.length <= 240, `Worksheet label too long: ${l.id} / ${f.id}`);
    assert(["short", "long", "choice"].includes(f.kind) && (f.kind !== "choice" || f.options?.length), `Bad field kind ${l.id} / ${f.id}`);
    if (f.example) assert(/made up/.test(f.example), `Label synthetic example as made up: ${l.id} / ${f.id}`);
  }
  const named = new Set();
  for (const g of a.guide) {
    assert(g.expect && g.expect.length <= 240, `Guide step in ${l.id} needs a concise expected output`);
    for (const id of g.fields || []) { assert(ids.includes(id), `Guide in ${l.id} names unknown field ${id}`); named.add(id); }
    if (g.example) assert(/made up/.test(g.example), `Label synthetic example as made up: ${l.id}`);
    if (g.video) assert(a.video && a.video.id === g.video, `Guide in ${l.id} names a video the lesson does not carry`);
  }
  for (const id of ids) assert(named.has(id), `Worksheet field ${id} in ${l.id} belongs to no step`);
  if (a.video) {
    assert(videoIds.has(a.video.id), `${l.id} assigns video ${a.video.id} that RESOURCE-LIBRARY.md does not record`);
    assert(a.video.url && a.video.embedUrl && a.video.segment && a.video.notice.length && a.video.then && a.video.written && a.video.captions && a.video.checked, `Video ${a.video.id} is missing verification fields`);
    assert(a.guide.some((g) => g.video === a.video.id), `Video ${a.video.id} in ${l.id} is not paired with a step`);
  }
}
for (const id of Object.keys(videoSelections)) assert(videoIds.has(id), `Video selection ${id} has no catalog row`);
// Beginner teaching contract (docs/BEGINNER-LESSON-AUDIT.md). A demonstration
// must show reasoning and be labelled invented; a supported case and a check
// must be answerable with exactly one defensible option and must explain every
// option, including the plausible wrong ones; a repair must send the learner
// back to their own artefact; save instructions must cover all four questions.
const oneCorrect = (options, where) => {
  assert(options.length >= 2, `${where} needs at least two options`);
  assert.equal(options.filter((o) => o.correct).length, 1, `${where} needs exactly one defensible option`);
  for (const o of options) {
    assert(o.label && o.feedback, `${where} option "${o.label}" needs a label and an explanation`);
    // The interface already says whether the answer held up, so feedback that
    // opens with its own verdict reads as a stutter ("That one holds up. Yes.").
    assert(
      !/^(yes|no|right|correct|wrong|not quite|not yet|nearly|almost)\b[.,]/i.test(o.feedback),
      `${where} option "${o.label}" should explain rather than repeat the verdict the interface already shows`,
    );
  }
};
for (const l of lessons) {
  const a = l.apprenticeship;
  if (!a.guide) continue;
  for (const [i, g] of a.guide.entries()) {
    const where = `${l.id} step ${i + 1}`;
    if (g.demo) {
      assert(/made.up|Made.up|invented/.test(g.demo.scenario), `${where} demonstration must say it is made up`);
      assert(g.demo.beats.length >= 3, `${where} demonstration needs at least three reasoning beats`);
      for (const b of g.demo.beats) assert(b.label && b.text, `${where} demonstration beat needs a label and text`);
      assert(g.demo.wrongTurn && g.demo.tradeoff && g.demo.uncertainty, `${where} demonstration needs a wrong turn, a trade-off and what stays unknown`);
    }
    if (g.supported) {
      assert(g.supported.material && g.supported.question && g.supported.then, `${where} supported practice needs supplied material, a question and a next move`);
      oneCorrect(g.supported.options, `${where} supported practice`);
    }
    if (g.reveal) {
      assert(g.fields?.length, `${where} cannot reveal fields it does not have`);
      assert(g.reveal.first >= 1 && g.reveal.group >= 1, `${where} reveal needs a positive first group`);
      assert((g.reveal.count ?? g.fields.length) <= g.fields.length, `${where} reveal count exceeds its fields`);
      assert(g.reveal.addLabel && g.reveal.note, `${where} reveal needs a button label and a note`);
    }
  }
  for (const c of a.checks || []) {
    oneCorrect(c.options, `${l.id} check "${c.question}"`);
    assert(c.repair && c.recheck, `${l.id} check "${c.question}" needs a bounded repair and a recheck line`);
  }
  if (a.saveRoute)
    for (const key of ['auto', 'external', 'creator', 'next'])
      assert(a.saveRoute[key], `${l.id} save route is missing ${key}`);
  // A lesson carrying active checks must not leave the learner with only the
  // reveal-style questions; both may exist, the active ones lead.
  if (a.checks?.length) assert(a.route && a.worksheet, `${l.id} checks require the guided contract`);
}
{
  const a = baselineLesson.apprenticeship;
  assert(!a.checks && !a.saveRoute, 'The diagnostic gets no guided checks or route coaching');
  assert(!(a.guide || []).some((g) => g.demo || g.supported), 'The diagnostic gets no worked demonstration');
}
for (const m of modules) assert(milestones[m.id]?.start && milestones[m.id]?.later);
assert.equal(projectPacks.length, 3);
for (const p of projectPacks) {
  assert.equal(p.choices.length, 2);
  for (const c of p.choices) assert(c.context && c.users && c.access && c.constraints && c.questions.length);
}
output('WORKSPACE-GUIDE.md', '# Set up your workspace\n\nGenerated from src/journey.ts.\n\n' + list(workspaceGuide) + '\n\n## Optional Figma Starter route\n\n' + list(figmaGuide) + '\n');
output('PORTFOLIO-PATH.md', '# Practical learning and portfolio path\n\nGenerated from src/journey.ts. Briefs are available. Publication status is derived from the current module catalog below; published does not mean assessed.\n\n' + projectStart + '\n\n' + projectPacks.map(p => `## ${p.title} (${p.modules})\n\n${p.choices.map(c => `### ${c.title}\n\n${c.context}\n\nPeople: ${c.users}\n\nAccess: ${c.access}\n\nConstraints: ${c.constraints}\n\n${list(c.questions)}`).join('\n\n')}\n\n### Milestone fragments\n\n${list(p.milestones)}`).join('\n\n') + '\n\n## Case-study sections\n\n' + list(caseStudySections) + '\n\n## Full module handoffs\n\n' + modules.map(m => { const j = milestones[m.id]; return `### ${m.id}: ${m.title} (${m.status})\n\nStart: ${j.start}\n\nChallenge: ${j.challenge}\n\nTools: ${j.tools}\n\nSave: ${j.save}\n\nLater use: ${j.later}`; }).join('\n\n') + '\n');
console.log(
  "Course coverage, prerequisite order, resource IDs, lesson contract fields and generated documents checked.",
);
