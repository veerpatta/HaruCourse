import { baseline } from "../src/course";
import { publishedLessons } from '../src/lessons';
import { finishProblems, prepareRecord } from '../shared/learning';
import { skippableLessons } from '../src/corePath';
import {
  recordSchema,
  reviewSettingsSchema,
  type RecordData,
  type User,
  type CloudRecord,
  type Feedback,
  type ReviewOutcome,
  type ReviewSettings,
  type ReviewSummary,
} from "../shared/record";

export class HttpError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}
export function learnerId(user: User) {
  return user.role === "creator" ? user.viewing?.id || "haru" : user.id;
}
export const VIEWING_COOKIE = "haru_viewing";
// records_version arrives with the session's user row at no extra read; it
// is absent (and treated as 0) until migration 0004 has been applied.
export type SessionUser = User & { recordsVersion: number };
export async function activeUser(env: Env, id: string, viewing = ""): Promise<SessionUser> {
  const row = await env.DB.prepare(
    "SELECT * FROM users WHERE id=? AND active=1",
  )
    .bind(id)
    .first<User & { records_version?: number }>();
  if (!row) throw new HttpError(401, "Please sign in again.");
  const user: SessionUser = { id: row.id, name: row.name, role: row.role, recordsVersion: row.records_version ?? 0 };
  // The creator chooses which learner workspace to read (a pilot has several);
  // only an active learner can be chosen, and Haru stays the default.
  if (row.role === "creator") {
    const chosen = /^[a-z0-9-]{1,40}$/.test(viewing) && viewing !== "haru"
      ? await env.DB.prepare("SELECT id,name FROM users WHERE id=? AND role='learner' AND active=1").bind(viewing).first<{ id: string; name: string }>()
      : null;
    user.viewing = chosen ? { id: chosen.id, name: chosen.name } : { id: "haru", name: "Haru" };
  }
  return user;
}
export async function listLearners(env: Env, user: User) {
  if (user.role !== "creator") throw new HttpError(403, "Only the course creator can choose a learner workspace.");
  const rows = await env.DB.prepare("SELECT id,name FROM users WHERE role='learner' AND active=1 ORDER BY id<>'haru', id='test', name").all<{ id: string; name: string }>();
  return rows.results.map((r) => ({ id: r.id, name: r.name, test: r.id === "test" }));
}
// The version that changes whenever the records a user reads change: their
// own for a learner, Haru's for the creator.
export async function readableVersion(env: Env, user: SessionUser) {
  if (user.role !== "creator") return user.recordsVersion;
  const row = await env.DB.prepare("SELECT * FROM users WHERE id=?")
    .bind(learnerId(user))
    .first<{ records_version?: number }>();
  return row?.records_version ?? 0;
}

// Course records are the largest read in the app. An isolate keeps the last
// encoded answer per learner, keyed by version, so repeated polls — including
// those from clients still running the previous release — read one users row
// instead of every progress row. A stale version is never served because the
// version is read from D1 on every request.
const recordsCache = new Map<string, { version: number; body: string }>();
export async function courseRecords(env: Env, user: SessionUser, since?: number) {
  const version = await readableVersion(env, user);
  if (since !== undefined && since === version) return { unchanged: true as const, version };
  const target = learnerId(user);
  const cached = recordsCache.get(target);
  if (cached && cached.version === version) return { body: cached.body, version };
  const rows = await env.DB.prepare(
    "SELECT lesson_id,revision,record_json FROM progress WHERE user_id=?",
  )
    .bind(target)
    .all();
  const reviews = await reviewSummaries(env, target);
  const body = JSON.stringify({
    version,
    records: rows.results.map((row) => ({
      lessonId: row.lesson_id,
      revision: row.revision,
      record: JSON.parse(row.record_json as string),
    })),
    reviews,
  });
  if (recordsCache.size > 50) recordsCache.clear();
  recordsCache.set(target, { version, body });
  return { body, version };
}
async function reviewSummaries(env: Env, target: string): Promise<ReviewSummary[]> {
  try {
    return (
      await env.DB.prepare(
        "SELECT lesson_id AS lessonId, revision, criterion, outcome, created_at AS createdAt FROM feedback WHERE user_id=? AND source='creator' AND outcome IS NOT NULL ORDER BY created_at",
      )
        .bind(target)
        .all<ReviewSummary>()
    ).results;
  } catch {
    // Before migration 0004 the outcome column does not exist.
    return [];
  }
}
// One earlier saved version, for the before-and-after repair trail.
export async function progressVersion(env: Env, user: User, lessonId: string, revision: number) {
  const row = await env.DB.prepare(
    "SELECT record_json,revision,created_at FROM submission_history WHERE user_id=? AND lesson_id=? AND revision=?",
  )
    .bind(learnerId(user), lessonId, revision)
    .first<{ record_json: string; revision: number; created_at: string }>();
  if (!row) throw new HttpError(404, "That saved version does not exist.");
  return { record: recordSchema.parse(JSON.parse(row.record_json)), revision: row.revision, createdAt: row.created_at };
}
// Review destination. Every learner workspace shares the creator's reviewer
// (Haru and any pilot learners); the shared test identity is told plainly
// that none exists.
const REVIEW_SETTINGS_KEY = "review-destination";
export async function reviewSettings(env: Env, user: User): Promise<ReviewSettings | null> {
  if (user.role === "learner" && user.id === "test") return null;
  const creator = await env.DB.prepare("SELECT name FROM users WHERE role='creator' AND active=1 LIMIT 1").first<{ name: string }>();
  let stored: { value: string; updated_at: string } | null = null;
  try {
    stored = await env.DB.prepare("SELECT value,updated_at FROM course_settings WHERE key=?").bind(REVIEW_SETTINGS_KEY).first();
  } catch {
    stored = null;
  }
  const parsed = stored ? reviewSettingsSchema.safeParse(JSON.parse(stored.value)) : null;
  if (parsed?.success) return { ...parsed.data, updatedAt: stored!.updated_at, configured: true };
  return { reviewerName: creator?.name || "Your course creator", responseWindow: "", contactNote: "", updatedAt: null, configured: false };
}
export async function saveReviewSettings(env: Env, user: User, value: unknown) {
  if (user.role !== "creator") throw new HttpError(403, "Only the course creator can set the review destination.");
  const settings = reviewSettingsSchema.parse(value);
  const now = new Date().toISOString();
  await env.DB.prepare(
    "INSERT INTO course_settings(key,value,updated_at,updated_by) VALUES (?,?,?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value,updated_at=excluded.updated_at,updated_by=excluded.updated_by",
  )
    .bind(REVIEW_SETTINGS_KEY, JSON.stringify(settings), now, user.id)
    .run();
  return { ...settings, updatedAt: now, configured: true };
}
export async function progress(
  env: Env,
  user: User,
  lessonId = baseline.id,
): Promise<CloudRecord> {
  const row = await env.DB.prepare(
    "SELECT record_json,revision FROM progress WHERE user_id=? AND lesson_id=?",
  )
    .bind(learnerId(user), lessonId)
    .first<{ record_json: string; revision: number }>();
  return row
    ? {
        record: recordSchema.parse(JSON.parse(row.record_json)),
        revision: row.revision,
      }
    : { record: null, revision: 0 };
}
export async function saveProgress(
  env: Env,
  user: User,
  value: RecordData,
  expectedRevision: number,
  lessonId = baseline.id,
): Promise<CloudRecord> {
  if (user.role !== "learner")
    throw new HttpError(
      403,
      "Only the learner can update her practice record.",
    );
  const previous = await progress(env, user, lessonId);
  if (previous.revision !== expectedRevision) throw new HttpError(409, 'A newer cloud version exists. Refresh before saving.');
  const parsed = recordSchema.parse(value);
  const prepared = previous.record ? prepareRecord(previous.record, parsed) : parsed;
  // A previously explicit finish survives a teaching expansion. New finishes
  // are checked against today's contract; edits already reopen via prepareRecord.
  // Existing skill may stand in for practice only on the visual-refresh
  // lessons the core path names as skippable.
  if (prepared.learning?.demonstrated && !previous.record?.learning?.demonstrated && !skippableLessons.has(lessonId))
    throw new HttpError(400, 'This lesson cannot be skipped with existing work; it covers a skill the core path keeps.');
  if (prepared.learning?.finishedAt && prepared.learning.finishedAt !== previous.record?.learning?.finishedAt) {
    const lesson = publishedLessons.find(l => l.id === lessonId);
    if (!lesson) throw new HttpError(400, 'The diagnostic is separate from finished course practice.');
    const problems = finishProblems(lesson, prepared);
    if (problems.length) throw new HttpError(400, problems.join(' '));
  }
  const record = {
    ...prepared,
    updatedAt: new Date().toISOString(),
  };
  const encoded = JSON.stringify(record);
  const result =
    expectedRevision === 0
      ? await env.DB.prepare(
          "INSERT INTO progress(user_id,lesson_id,revision,record_json,updated_at) VALUES (?,?,1,?,?) ON CONFLICT DO NOTHING RETURNING revision",
        )
          .bind(user.id, lessonId, encoded, record.updatedAt)
          .first<{ revision: number }>()
      : await env.DB.prepare(
          "UPDATE progress SET revision=revision+1,record_json=?,updated_at=? WHERE user_id=? AND lesson_id=? AND revision=? RETURNING revision",
        )
          .bind(encoded, record.updatedAt, user.id, lessonId, expectedRevision)
          .first<{ revision: number }>();
  if (!result)
    throw new HttpError(
      409,
      "A newer cloud version exists. Refresh and compare it before saving. Your draft has not been overwritten.",
    );
  return { record, revision: expectedRevision + 1 };
}
type FeedbackRow = Feedback & { next_action?: string | null };
const feedbackOut = ({ next_action, ...row }: FeedbackRow): Feedback => ({
  id: row.id,
  revision: row.revision,
  author_id: row.author_id,
  source: row.source,
  body: row.body,
  created_at: row.created_at,
  criterion: row.criterion ?? null,
  outcome: row.outcome ?? null,
  evidence: row.evidence ?? null,
  nextAction: next_action ?? null,
});
export async function listFeedback(
  env: Env,
  user: User,
  lessonId = baseline.id,
): Promise<Feedback[]> {
  return (
    await env.DB.prepare(
      "SELECT * FROM feedback WHERE user_id=? AND lesson_id=? ORDER BY created_at DESC LIMIT 100",
    )
      .bind(learnerId(user), lessonId)
      .all<FeedbackRow>()
  ).results.map(feedbackOut);
}
export type ReviewStructure = {
  criterion?: string;
  outcome?: ReviewOutcome;
  evidence?: string;
  nextAction?: string;
};
export async function saveFeedback(
  env: Env,
  user: User,
  revision: number,
  body: string,
  id: string,
  source: "creator" | "ai",
  lessonId = baseline.id,
  structure: ReviewStructure = {},
) {
  if (source === "creator" && user.role !== "creator")
    throw new HttpError(403, "Creator access is required for a mentor review.");
  // AI critique is useful practice and never a recorded review outcome.
  if (source === "ai") structure = {};
  const target = learnerId(user);
  const submission = await env.DB.prepare(
    "SELECT revision FROM submission_history WHERE user_id=? AND lesson_id=? AND revision=?",
  )
    .bind(target, lessonId, revision)
    .first();
  if (!submission)
    throw new HttpError(
      409,
      "That submission version does not exist. Refresh progress before reviewing.",
    );
  const createdAt = new Date().toISOString();
  const structured = !!(structure.criterion || structure.outcome || structure.evidence || structure.nextAction);
  if (structure.outcome && !structure.criterion)
    throw new HttpError(400, "Name the criterion a review outcome refers to.");
  await (structured
    ? env.DB.prepare(
        "INSERT INTO feedback(id,user_id,lesson_id,revision,author_id,source,body,created_at,criterion,outcome,evidence,next_action) VALUES (?,?,?,?,?,?,?,?,?,?,?,?) ON CONFLICT(id) DO NOTHING",
      ).bind(
        id, target, lessonId, revision, user.id, source, body, createdAt,
        structure.criterion || null, structure.outcome || null, structure.evidence || null, structure.nextAction || null,
      )
    : env.DB.prepare(
        "INSERT INTO feedback(id,user_id,lesson_id,revision,author_id,source,body,created_at) VALUES (?,?,?,?,?,?,?,?) ON CONFLICT(id) DO NOTHING",
      ).bind(id, target, lessonId, revision, user.id, source, body, createdAt)
  ).run();
  const result = await env.DB.prepare(
    "SELECT * FROM feedback WHERE id=? AND user_id=? AND author_id=? AND source=? AND revision=? AND body=?",
  )
    .bind(id, target, user.id, source, revision, body)
    .first<FeedbackRow>();
  if (!result)
    throw new HttpError(
      409,
      "This feedback ID has already been used for a different review.",
    );
  return feedbackOut(result);
}
