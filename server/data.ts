import { baseline } from "../src/course";
import { publishedLessons } from '../src/lessons';
import { finishProblems, prepareRecord } from '../shared/learning';
import {
  recordSchema,
  type RecordData,
  type User,
  type CloudRecord,
  type Feedback,
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
  return user.role === "creator" ? "haru" : user.id;
}
export async function activeUser(env: Env, id: string): Promise<User> {
  const user = await env.DB.prepare(
    "SELECT id,name,role FROM users WHERE id=? AND active=1",
  )
    .bind(id)
    .first<User>();
  if (!user) throw new HttpError(401, "Please sign in again.");
  return user;
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
  if (prepared.learning?.finishedAt) {
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
export async function listFeedback(
  env: Env,
  user: User,
  lessonId = baseline.id,
): Promise<Feedback[]> {
  return (
    await env.DB.prepare(
      "SELECT id,revision,author_id,source,body,created_at FROM feedback WHERE user_id=? AND lesson_id=? ORDER BY created_at DESC LIMIT 100",
    )
      .bind(learnerId(user), lessonId)
      .all<Feedback>()
  ).results;
}
export async function saveFeedback(
  env: Env,
  user: User,
  revision: number,
  body: string,
  id: string,
  source: "creator" | "ai",
  lessonId = baseline.id,
) {
  if (source === "creator" && user.role !== "creator")
    throw new HttpError(403, "Creator access is required for a mentor review.");
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
  await env.DB.prepare(
    "INSERT INTO feedback(id,user_id,lesson_id,revision,author_id,source,body,created_at) VALUES (?,?,?,?,?,?,?,?) ON CONFLICT(id) DO NOTHING",
  )
    .bind(id, target, lessonId, revision, user.id, source, body, createdAt)
    .run();
  const result = await env.DB.prepare(
    "SELECT id,revision,author_id,source,body,created_at FROM feedback WHERE id=? AND user_id=? AND author_id=? AND source=? AND revision=? AND body=?",
  )
    .bind(id, target, user.id, source, revision, body)
    .first<Feedback>();
  if (!result)
    throw new HttpError(
      409,
      "This feedback ID has already been used for a different review.",
    );
  return result;
}
