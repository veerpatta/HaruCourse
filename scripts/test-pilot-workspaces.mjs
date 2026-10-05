// Local integration checks for pilot learner workspaces: the creator chooses a
// learner to read, reviews land on that learner only, and learners can never
// read another workspace. Needs a local worker (npm run dev:cloud or the
// "worker" launch entry) and local accounts from:
//   node scripts/create-pilot-learners.mjs 3 --dir .test-secrets/pilot
//   npx wrangler d1 execute harucourse --local --file .test-secrets/pilot/pilot-seed.sql
// Never run against the live site: it signs in as the creator.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { randomUUID } from "node:crypto";
const base = process.env.HARU_TEST_BASE || "http://127.0.0.1:8788";
if (!/^http:\/\/(127\.0\.0\.1|localhost):/.test(base)) throw Error("Local only: this test signs in as the creator.");
const secrets = JSON.parse(readFileSync(".test-secrets/login-credentials.json", "utf8"));
const pilots = JSON.parse(readFileSync(".test-secrets/pilot/pilot-credentials.json", "utf8"));
const call = (path, { method = "GET", body, cookie } = {}) => fetch(base + path, {
  method, headers: { origin: base, ...(cookie ? { cookie } : {}), ...(body ? { "content-type": "application/json" } : {}) },
  body: body ? JSON.stringify(body) : undefined,
});
async function signin(credentials) {
  const r = await call("/api/login", { method: "POST", body: { username: credentials.username, password: credentials.password } });
  assert.equal(r.status, 200, await r.clone().text());
  return r.headers.get("set-cookie").split(";")[0];
}
const passed = [];
const creator = await signin(secrets.creator);
const pilot = await signin(pilots["pilot-1"]);
const other = await signin(pilots["pilot-2"]);
const viewing = (id) => `${creator}; haru_viewing=${id}`;
const lessonId = "m03-l01-v1";
const path = "/api/progress?lessonId=" + lessonId;
const empty = { version: 1, notes: "", submission: "", minutes: 0, status: "not-started", updatedAt: "" };

// Learner list and default.
const list = await (await call("/api/learners", { cookie: creator })).json();
assert.ok(list.learners.some((l) => l.id === "pilot-1") && list.learners[0].id === "haru", "Haru first, pilots listed");
assert.equal(list.viewing.id, "haru", "Haru is the default workspace");
assert.equal((await call("/api/learners", { cookie: pilot })).status, 403, "Learners cannot list workspaces");
for (const bad of ["creator", "nobody", "../haru", "PILOT-1"]) {
  const s = await (await call("/api/session", { cookie: viewing(bad) })).json();
  assert.equal(s.user.viewing.id, "haru", `Unknown or non-learner choice ${bad} falls back to Haru`);
}
passed.push("learner list for the creator only; Haru default; invalid choices fall back");

// A pilot saves; the creator reads it only while viewing that pilot.
const before = await (await call(path, { cookie: pilot })).json();
const work = { ...empty, notes: "Pilot QA", submission: "Pilot folder", status: "practicing", worksheet: { "sizes-found": "6" } };
let r = await call(path, { method: "PUT", cookie: pilot, body: { expectedRevision: before.revision, record: work } });
assert.equal(r.status, 200, await r.clone().text());
const saved = await r.json();
const asPilot = await (await call(path, { cookie: viewing("pilot-1") })).json();
assert.equal(asPilot.record.worksheet["sizes-found"], "6");
assert.equal(asPilot.revision, saved.revision);
const asHaru = await (await call(path, { cookie: viewing("haru") })).json();
assert.notEqual(asHaru.record?.notes, "Pilot QA", "Haru's workspace does not show the pilot's work");
const records = await (await call("/api/course-records", { cookie: viewing("pilot-1") })).json();
assert.ok(records.records.some((x) => x.lessonId === lessonId && x.record.notes === "Pilot QA"));
passed.push("creator reads the chosen pilot's records and course list, not Haru's");

// Learners ignore the cookie and cannot read each other.
const sneaky = await (await call(path, { cookie: `${other}; haru_viewing=pilot-1` })).json();
assert.notEqual(sneaky.record?.notes, "Pilot QA", "A learner's viewing cookie is ignored");
const otherSession = await (await call("/api/session", { cookie: `${other}; haru_viewing=pilot-1` })).json();
assert.equal(otherSession.user.viewing, undefined);
passed.push("a learner's viewing cookie is ignored; workspaces stay isolated");

// The creator cannot write a pilot's practice, but can review it.
r = await call(path, { method: "PUT", cookie: viewing("pilot-1"), body: { expectedRevision: saved.revision, record: work } });
assert.equal(r.status, 403, "Creator cannot edit learner practice");
const review = { id: randomUUID(), revision: saved.revision, body: "Clear sizes; add where each appears.", criterion: "Names each size", outcome: "needs-revision", evidence: "Step 1 lists 6 sizes", nextAction: "Add the screen for each" };
r = await call("/api/feedback?lessonId=" + lessonId, { method: "POST", cookie: viewing("pilot-1"), body: review });
assert.ok(r.ok, await r.clone().text());
const seen = await (await call("/api/feedback?lessonId=" + lessonId, { cookie: pilot })).json();
assert.ok(seen.feedback.some((f) => f.id === review.id && f.outcome === "needs-revision" && f.nextAction === review.nextAction), "The pilot sees the structured review");
const notOther = await (await call("/api/feedback?lessonId=" + lessonId, { cookie: other })).json();
assert.ok(!notOther.feedback.some((f) => f.id === review.id), "Another pilot does not");
const haruFeedback = await (await call("/api/feedback?lessonId=" + lessonId, { cookie: viewing("haru") })).json();
assert.ok(!haruFeedback.feedback.some((f) => f.id === review.id), "Haru's workspace does not");
passed.push("structured review lands on the chosen pilot only; creator cannot edit practice");

// Pilots have the shared reviewer; the test workspace does not.
const settings = await (await call("/api/review-settings", { cookie: pilot })).json();
assert.ok(settings.settings && typeof settings.settings.reviewerName === "string");
const test = await signin({ username: "test", password: "" });
assert.equal((await (await call("/api/review-settings", { cookie: test })).json()).settings, null);
passed.push("pilot workspaces show the review destination; the shared test workspace does not");

console.log(`Pilot workspace checks passed (${passed.length}):\n- ${passed.join("\n- ")}`);
