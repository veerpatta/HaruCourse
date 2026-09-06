import { z } from "zod";

export const recordSchema = z
  .object({
    version: z.literal(1),
    notes: z.string().max(20000),
    submission: z.string().max(2000),
    minutes: z.number().int().min(0).max(Number.MAX_SAFE_INTEGER),
    status: z.enum(["not-started", "practicing", "ready-for-review"]),
    updatedAt: z.string().max(40),
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
