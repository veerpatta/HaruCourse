// Integration checks for the 4 October 2026 improvements: records-version
// change detection, structured creator reviews, review destination, the
// before/after history endpoint and the existing-skill guard.
// Local by default (disposable data). Hosted runs need --live and touch only
// the test identity: creator and Haru checks are skipped there.
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { randomUUID } from 'node:crypto';
const base = process.env.HARU_TEST_BASE || 'http://127.0.0.1:8788';
const live = process.argv.includes('--live');
if (!live && !/^http:\/\/(127\.0\.0\.1|localhost):/.test(base)) throw Error('Hosted QA needs --live; only the test account is used there.');
const call = (path, { method = 'GET', body, cookie } = {}) => fetch(base + path, {
  method, headers: { origin: base, ...(cookie ? { cookie } : {}), ...(body ? { 'content-type': 'application/json' } : {}) },
  body: body ? JSON.stringify(body) : undefined,
});
async function signin(credentials) {
  const r = await call('/api/login', { method: 'POST', body: credentials });
  assert.equal(r.status, 200, await r.clone().text());
  return r.headers.get('set-cookie').split(';')[0];
}
const passed = [];
const test = await signin({ username: 'test', password: '' });
const empty = { version: 1, notes: '', submission: '', minutes: 0, status: 'not-started', updatedAt: '' };
const strip = (r) => { const { updatedAt, ...rest } = r; return rest; };

// 1. Change detection.
const first = await (await call('/api/course-records', { cookie: test })).json();
assert.equal(typeof first.version, 'number');
assert.ok(Array.isArray(first.records) && Array.isArray(first.reviews));
const same = await (await call(`/api/course-records?since=${first.version}`, { cookie: test })).json();
assert.deepEqual(same, { unchanged: true, version: first.version }, 'An unchanged version answers without records');
const lessonId = 'm03-l01-v1';
const path = '/api/progress?lessonId=' + lessonId;
const before = await (await call(path, { cookie: test })).json();
let revision = before.revision;
try {
  const work = { ...empty, notes: 'QA reflection', submission: 'QA folder', status: 'practicing', worksheet: { 'sizes-found': '7' } };
  let r = await call(path, { method: 'PUT', cookie: test, body: { expectedRevision: revision, record: work } });
  assert.equal(r.status, 200, await r.clone().text()); revision = (await r.json()).revision;
  const moved = await (await call(`/api/course-records?since=${first.version}`, { cookie: test })).json();
  assert.ok(moved.version > first.version && Array.isArray(moved.records), 'A save moves the version and returns records');
  const fb = await (await call(`/api/feedback?lessonId=${lessonId}&since=${moved.version}`, { cookie: test })).json();
  assert.equal(fb.unchanged, true);
  passed.push('records version: unchanged answer, save bumps version, feedback since');

  // 2. History endpoint for the repair trail.
  const v1 = revision;
  r = await call(path, { method: 'PUT', cookie: test, body: { expectedRevision: revision, record: { ...work, worksheet: { 'sizes-found': '5' } } } });
  revision = (await r.json()).revision;
  const old = await (await call(`/api/progress/history?lessonId=${lessonId}&revision=${v1}`, { cookie: test })).json();
  assert.equal(old.record.worksheet['sizes-found'], '7');
  assert.equal((await call(`/api/progress/history?lessonId=${lessonId}&revision=999999`, { cookie: test })).status, 404);
  assert.equal((await call(`/api/progress/history?lessonId=${lessonId}&revision=0`, { cookie: test })).status, 400);
  passed.push('saved-version history for before/after comparison');

  // 3. Review request, self-review and existing skill.
  const requested = { ...work, worksheet: { 'sizes-found': '5' }, status: 'ready-for-review', learning: {
    review: { criterion: 'A criterion', question: 'Is this enough?', requestedAt: new Date().toISOString() },
    selfReview: { criterion: 'A criterion', level: 2, evidence: 'Step 1 answer', at: new Date().toISOString() },
    demonstrated: { reference: 'portfolio link', evidence: 'Criterion 1 is shown on page 3 of my existing type specimen.', at: new Date().toISOString() },
  } };
  r = await call(path, { method: 'PUT', cookie: test, body: { expectedRevision: revision, record: requested } });
  assert.equal(r.status, 200, await r.clone().text()); revision = (await r.json()).revision;
  const read = await (await call(path, { cookie: test })).json();
  assert.deepEqual(read.record.learning, requested.learning);
  const keptId = 'm03-l04-v1', keptPath = '/api/progress?lessonId=' + keptId;
  const kept = await (await call(keptPath, { cookie: test })).json();
  const refused = await call(keptPath, { method: 'PUT', cookie: test, body: { expectedRevision: kept.revision, record: { ...empty, learning: { demonstrated: requested.learning.demonstrated } } } });
  assert.equal(refused.status, 400, 'Contrast cannot be skipped with existing work');
  passed.push('review request, self-review and skippable-lesson guard round-trip');

  // 4. Review destination.
  const settings = await (await call('/api/review-settings', { cookie: test })).json();
  assert.equal(settings.settings, null, 'The test workspace has no linked reviewer');
  assert.equal((await call('/api/review-settings', { method: 'PUT', cookie: test, body: { reviewerName: 'x', responseWindow: '', contactNote: '' } })).status, 403);
  passed.push('test workspace: no reviewer, cannot set destination');
} finally {
  const restore = await call(path, { method: 'PUT', cookie: test, body: { expectedRevision: revision, record: before.record || empty } });
  assert.equal(restore.status, 200, 'Restore test record');
  assert.deepEqual(strip((await restore.json()).record), strip(before.record || empty));
}

if (!live) {
  const keys = JSON.parse(readFileSync('.test-secrets/login-credentials.json', 'utf8'));
  const haru = await signin(keys.haru), creator = await signin(keys.creator);
  const put = await call('/api/review-settings', { method: 'PUT', cookie: creator, body: { reviewerName: 'Local reviewer', responseWindow: 'within five days', contactNote: 'Message me' } });
  assert.equal(put.status, 200, await put.clone().text());
  const seen = await (await call('/api/review-settings', { cookie: haru })).json();
  assert.equal(seen.settings.reviewerName, 'Local reviewer');
  assert.equal(seen.settings.configured, true);
  assert.equal((await call('/api/review-settings', { method: 'PUT', cookie: haru, body: { reviewerName: 'x', responseWindow: '', contactNote: '' } })).status, 403);
  const hp = '/api/progress?lessonId=week1-day1-v1';
  const cur = await (await call(hp, { cookie: haru })).json();
  const saved = await call(hp, { method: 'PUT', cookie: haru, body: { expectedRevision: cur.revision, record: { ...(cur.record || empty), notes: 'Local review QA', submission: 'paper', status: 'ready-for-review' } } });
  assert.equal(saved.status, 200, await saved.clone().text());
  const rev = (await saved.json()).revision;
  const bad = await call('/api/feedback?lessonId=week1-day1-v1', { method: 'POST', cookie: creator, body: { id: randomUUID(), revision: rev, body: 'x', outcome: 'meets-criterion' } });
  assert.equal(bad.status, 400, 'An outcome needs a criterion');
  assert.equal((await call('/api/feedback?lessonId=week1-day1-v1', { method: 'POST', cookie: haru, body: { id: randomUUID(), revision: rev, body: 'x' } })).status, 403);
  const good = await call('/api/feedback?lessonId=week1-day1-v1', { method: 'POST', cookie: creator, body: { id: randomUUID(), revision: rev, body: 'Entry 2 is a guess.', criterion: 'What you saw kept apart from what you guessed', outcome: 'needs-revision', evidence: 'Entries 1-5', nextAction: 'Relabel entry 2' } });
  assert.equal(good.status, 201, await good.clone().text());
  const f = await good.json();
  assert.equal(f.outcome, 'needs-revision'); assert.equal(f.nextAction, 'Relabel entry 2');
  const list = await (await call('/api/feedback?lessonId=week1-day1-v1', { cookie: haru })).json();
  assert.equal(list.feedback[0].criterion, 'What you saw kept apart from what you guessed');
  const summary = await (await call('/api/course-records', { cookie: haru })).json();
  assert.ok(summary.reviews.some((r) => r.lessonId === 'week1-day1-v1' && r.revision === rev && r.outcome === 'needs-revision'));
  const creatorView = await (await call('/api/course-records', { cookie: creator })).json();
  assert.equal(creatorView.version, summary.version, 'Creator reads Haru\'s records version');
  passed.push('creator review destination, structured review outcome and review summaries (local only)');
}
console.log(JSON.stringify({ base, live, passed }, null, 2));
