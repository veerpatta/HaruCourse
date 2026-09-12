import { z } from "zod";

// One timed (or hand-added) stretch of practice. `step` is the 1-based index
// into the lesson's practice plan: steps carry no id and their titles repeat
// across lessons ("Learn", "Reflect"), and lesson ids are versioned, so a
// reordered plan is a content revision rather than a silent relabel.
export const sessionSchema = z
  .object({
    startedAt: z.string().max(40),
    minutes: z.number().int().min(0).max(1440),
    step: z.number().int().min(1).max(99).optional(),
    manual: z.literal(true).optional(),
    id: z.string().uuid().optional(),
    elapsedMs: z.number().int().min(0).max(86400000).optional(),
  })
  .strict();
export type SessionEntry = z.infer<typeof sessionSchema>;
// The most recent entries kept on a record. Older ones are dropped, so the
// documented invariant is sum(sessions) <= minutes, never equality.
export const SESSION_CAP = 50;

// In-app worksheet answers, keyed by the field ids the lesson's activity
// authority declares (src/apprenticeship.ts). Bounded so a record stays a
// small text row: at most WORKSHEET_FIELD_CAP fields, each at most
// WORKSHEET_VALUE_CAP characters, WORKSHEET_TOTAL_CAP characters in all. A
// field the lesson no longer declares is kept, never dropped, so an older
// answer survives a content revision until the learner clears it.
export const WORKSHEET_FIELD_CAP = 40;
export const WORKSHEET_VALUE_CAP = 2000;
export const WORKSHEET_TOTAL_CAP = 24000;
export const worksheetFieldId = z.string().regex(/^[a-z0-9][a-z0-9-]{0,39}$/);
export const worksheetSchema = z
  .record(worksheetFieldId, z.string().max(WORKSHEET_VALUE_CAP))
  .refine((w) => Object.keys(w).length <= WORKSHEET_FIELD_CAP, {
    message: `A worksheet holds at most ${WORKSHEET_FIELD_CAP} fields.`,
  })
  .refine(
    (w) =>
      Object.values(w).reduce((n, v) => n + v.length, 0) <= WORKSHEET_TOTAL_CAP,
    { message: `A worksheet holds at most ${WORKSHEET_TOTAL_CAP} characters.` },
  );
export type Worksheet = z.infer<typeof worksheetSchema>;
// Where the learner is in the guided practice steps. `step` is the 1-based
// step to reopen on return; `done` is the steps she has ticked. Both are a
// navigation aid only: nothing reads them as competence, completion or a
// score, and a ticked step can be unticked freely.
export const guideSchema = z
  .object({
    step: z.number().int().min(1).max(99).optional(),
    done: z.array(z.number().int().min(1).max(99)).max(99),
  })
  .strict();
export type GuideState = z.infer<typeof guideSchema>;
// Practice navigation and formative responses, never a score. Additive to v1.
export const learningSchema = z.object({
  action: worksheetFieldId.optional(),
  completed: z.array(worksheetFieldId).max(150).optional(),
  answers: z.record(worksheetFieldId, z.object({
    value: z.string().max(1000), shown: z.boolean(),
  }).strict()).refine(v => Object.keys(v).length <= 30).optional(),
  route: z.enum(["worksheet", "external"]).optional(),
  outputsConfirmed: z.boolean().optional(),
  repair: z.string().max(2000).optional(),
  finishedAt: z.string().datetime().optional(),
}).strict();
export const worksheetFilled = (w?: Worksheet | null) =>
  !!w && Object.values(w).some((v) => v.trim());

export const recordSchema = z
  .object({
    version: z.literal(1),
    notes: z.string().max(20000),
    submission: z.string().max(2000),
    // Authoritative total, cumulative across every session. The timer folds
    // whole minutes into it; it is never reduced when the log is trimmed.
    minutes: z.number().int().min(0).max(Number.MAX_SAFE_INTEGER),
    status: z.enum(["not-started", "practicing", "ready-for-review"]),
    updatedAt: z.string().max(40),
    // Both optional so every record saved before the timer existed still
    // parses on every load path, including the server's read of D1.
    sessions: z.array(sessionSchema).max(SESSION_CAP).optional(),
    confidence: z.number().int().min(1).max(5).optional(),
    // Added for the guided-practice pilot (7 September 2026). Optional for the
    // same reason: every record and backup written before them still parses to
    // exactly itself, and `version` stays 1 because nothing existing changed.
    worksheet: worksheetSchema.optional(),
    guide: guideSchema.optional(),
    learning: learningSchema.optional(),
    timingRemainderMs: z.number().int().min(0).max(59999).optional(),
  })
  .strict()
  .refine(
    (r) =>
      r.status !== "ready-for-review" ||
      ((!!r.notes.trim() || worksheetFilled(r.worksheet)) &&
        (!!r.submission.trim() || worksheetFilled(r.worksheet))),
    {
      message:
        "A reflection and either a work reference or a filled worksheet are required for review.",
    },
  );
export type RecordData = z.infer<typeof recordSchema>;
export type User = { id: string; name: string; role: "creator" | "learner" };
export type CloudRecord = { record: RecordData | null; revision: number };
export type Feedback = {
  id: string;
  revision: number;
  author_id: string;
  source: "creator" | "ai";
  body: string;
  created_at: string;
};
export const saveSchema = z
  .object({ record: recordSchema, expectedRevision: z.number().int().min(0) })
  .strict();
export const feedbackSchema = z
  .object({
    revision: z.number().int().min(1),
    body: z.string().trim().min(1).max(12000),
    id: z.string().uuid(),
  })
  .strict();
