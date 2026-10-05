// Pilot report from saved records (docs/PILOT-TEST-SCRIPT.md). It reads only
// the pilot learners' rows and reports what the records can show: start,
// first saved answer, finish, active minutes, days used, transfer answer,
// checks, self-review, review requests and reviewer outcomes. What only an
// observer can see (help used, interventions, first misunderstanding, quotes)
// belongs on the observation sheet; this report never infers it.
//
//   node scripts/pilot-report.mjs --remote            (all pilot-N learners)
//   node scripts/pilot-report.mjs --local --learners pilot-1,pilot-2
//
// Output goes to .secrets/pilot-report.md (ignored) and stdout. Read-only.
import { execFileSync } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { registerHooks } from "node:module";
registerHooks({ resolve(s, c, n) { return n(s.startsWith(".") && !/\.[a-z]+$/.test(s) ? s + ".ts" : s, c); } });
const { publishedLessons } = await import("../src/lessons.ts");
const { fieldRequired } = await import("../src/lessonActions.ts");

const where = process.argv.includes("--local") ? "--local" : "--remote";
const pick = process.argv.indexOf("--learners");
const tasks = ["week1-day1-v1", "m05-l05-v1", "m07-l07-v1", "m10-l08-v1", "m12-l02-v1"];
const query = (sql) => {
  const out = execFileSync(process.execPath, ["node_modules/wrangler/bin/wrangler.js", "d1", "execute", "harucourse", where, "--json", "--command", sql], { encoding: "utf8", stdio: ["ignore", "pipe", "ignore"], maxBuffer: 64 * 1024 * 1024 });
  return JSON.parse(out.slice(out.indexOf("[")))[0].results;
};
const ids = pick > 0 ? process.argv[pick + 1].split(",") : query("SELECT id FROM users WHERE id LIKE 'pilot-%' ORDER BY id").map((r) => r.id);
if (!ids.length || ids.some((id) => !/^pilot-\d+$/.test(id))) throw new Error("Name pilot learners as pilot-N; Haru, creator and test records are never read by this report.");
const list = ids.map((id) => `'${id}'`).join(",");
const lessonList = tasks.map((t) => `'${t}'`).join(",");
const progress = query(`SELECT user_id, lesson_id, revision, record_json FROM progress WHERE user_id IN (${list}) AND lesson_id IN (${lessonList})`);
const history = query(`SELECT user_id, lesson_id, revision, record_json, created_at FROM submission_history WHERE user_id IN (${list}) AND lesson_id IN (${lessonList}) ORDER BY created_at`);
const feedback = query(`SELECT user_id, lesson_id, revision, criterion, outcome, created_at FROM feedback WHERE user_id IN (${list}) AND lesson_id IN (${lessonList}) AND source='creator' ORDER BY created_at`);

const minutesBetween = (a, b) => (a && b ? Math.round((Date.parse(b) - Date.parse(a)) / 60000) : null);
const answered = (r) => Object.values(r.worksheet || {}).some((v) => v.trim()) || Object.keys(r.learning?.answers || {}).length > 0;
const rows = [];
for (const user of ids) for (const lessonId of tasks) {
  const row = progress.find((p) => p.user_id === user && p.lesson_id === lessonId);
  if (!row) { rows.push({ user, lessonId, started: false }); continue; }
  const record = JSON.parse(row.record_json);
  const lesson = publishedLessons.find((l) => l.id === lessonId);
  const fields = lesson.apprenticeship.worksheet.flatMap((s) => s.fields).filter((f) => fieldRequired(f, record));
  const filled = fields.filter((f) => (record.worksheet?.[f.id] || "").trim()).length;
  const sessions = record.sessions || [];
  const startedAt = sessions.map((s) => s.startedAt).sort()[0] || null;
  const firstAnswer = history.find((h) => h.user_id === user && h.lesson_id === lessonId && answered(JSON.parse(h.record_json)))?.created_at || null;
  const answers = record.learning?.answers || {};
  const reviews = feedback.filter((f) => f.user_id === user && f.lesson_id === lessonId);
  rows.push({
    user, lessonId, started: true,
    startedAt,
    firstAnswerMinutes: minutesBetween(startedAt, firstAnswer),
    finished: !!record.learning?.finishedAt,
    activeMinutes: Math.round(sessions.reduce((t, s) => t + (s.elapsedMs ?? s.minutes * 60000), 0) / 60000),
    days: new Set(sessions.map((s) => s.startedAt.slice(0, 10))).size,
    required: `${filled}/${fields.length}`,
    checks: Object.keys(answers).filter((k) => k.startsWith("check-")).length,
    transferChars: (record.worksheet?.["transfer-decision"] || "").trim().length,
    transferCompared: !!answers["transfer-compare"],
    selfReview: record.learning?.selfReview?.level ?? null,
    reviewRequested: !!record.learning?.review,
    outcomes: reviews.map((f) => `${f.outcome || "comment"}${f.criterion ? ` (${f.criterion.slice(0, 40)})` : ""}`),
  });
}

const lines = [`# Pilot report — ${new Date().toISOString().slice(0, 10)}`, "", `Learners: ${ids.join(", ")}. Source: saved records only (${where.slice(2)} database). Observer measures (help used, interventions, first misunderstanding, quotes) are on the observation sheets and are not inferred here.`, ""];
lines.push("| Learner | Lesson | Finished | Required answers | Minutes active | Days used | First saved answer (min after start) | Checks answered | Transfer answer (chars) | Compared with anchors | Self-review level | Review asked | Reviewer outcomes |", "|---|---|---|---|---|---|---|---|---|---|---|---|---|");
for (const r of rows) lines.push(r.started
  ? `| ${r.user} | ${r.lessonId} | ${r.finished ? "yes" : "no"} | ${r.required} | ${r.activeMinutes} | ${r.days} | ${r.firstAnswerMinutes ?? "—"} | ${r.checks} | ${r.transferChars} | ${r.transferCompared ? "yes" : "no"} | ${r.selfReview ?? "—"} | ${r.reviewRequested ? "yes" : "no"} | ${r.outcomes.join("; ") || "—"} |`
  : `| ${r.user} | ${r.lessonId} | not started | | | | | | | | | | |`);

// The plan's gate, as far as records can show it. The reviewer's outcome on
// the Lesson 1 transfer answer is the "meets criteria on an unfamiliar brief"
// evidence; resumed on another day comes from session dates.
lines.push("", "## Starter-journey gate (records part)", "");
let meeting = 0;
for (const user of ids) {
  const r = rows.find((x) => x.user === user && x.lessonId === "week1-day1-v1");
  const ok = { finished: !!r?.finished, resumed: (r?.days || 0) >= 2, transfer: (r?.transferChars || 0) >= 40, reviewed: (r?.outcomes || []).some((o) => /^(meets-criterion|demonstrated-independently)/.test(o)) };
  const all = Object.values(ok).every(Boolean);
  if (all) meeting++;
  lines.push(`- ${user}: finished ${ok.finished ? "✓" : "✗"} · resumed another day ${ok.resumed ? "✓" : "✗"} · transfer written ${ok.transfer ? "✓" : "✗"} · reviewer outcome meets/demonstrated ${ok.reviewed ? "✓" : "✗"}${all ? " → records part met; confirm on the observation sheet that no coaching was given" : ""}`);
}
lines.push("", ids.length >= 5
  ? `${meeting} of ${ids.length} learners meet the records part of the gate (plan: at least 4 of 5, each confirmed uncoached on the observation sheet).`
  : `${meeting} of ${ids.length} learners meet the records part. With fewer than five participants, report individual results, not a percentage.`);
const text = lines.join("\n");
mkdirSync(".secrets", { recursive: true });
writeFileSync(".secrets/pilot-report.md", text + "\n", { mode: 0o600 });
console.log(text);
