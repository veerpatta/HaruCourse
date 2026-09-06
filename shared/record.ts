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
  })
  .strict();
export type SessionEntry = z.infer<typeof sessionSchema>;
// The most recent entries kept on a record. Older ones are dropped, so the
// documented invariant is sum(sessions) <= minutes, never equality.
export const SESSION_CAP = 50;

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
  })
  .strict()
  .refine(
    (r) =>
      r.status !== "ready-for-review" ||
      (!!r.notes.trim() && !!r.submission.trim()),
    {
      message: "A reflection and work reference are required for review.",
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
