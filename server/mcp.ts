import { z } from "zod";
import { publishedLessons, publishedLessonIds } from "../src/lessons";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { WebStandardStreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/webStandardStreamableHttp.js";
import { WorkerEntrypoint } from "cloudflare:workers";
import { baseline, levels } from "../src/course";
import { feedbackSchema, saveSchema } from "../shared/record";
import {
  activeUser,
  progress,
  saveProgress,
  listFeedback,
  saveFeedback,
} from "./data";

export type AuthProps = { userId: string; scopes: string[] };
export class McpApi extends WorkerEntrypoint<Env, AuthProps> {
  async fetch(request: Request) {
    const user = await activeUser(this.env, this.ctx.props.userId);
    const scopes = this.ctx.props.scopes || [];
    const server = new McpServer(
      { name: "Haru Course", version: "0.2.0" },
      {
        instructions:
          "Read the lesson, rubric, and current submission before critique. Work references are not image evidence: ask for screenshots if inaccessible. Mark all model-generated feedback as AI. Do not claim mastery or overwrite progress without learner intent. No tool fetches arbitrary links.",
      },
    );
    const result = (value: unknown) => ({
      content: [{ type: "text" as const, text: JSON.stringify(value) }],
    });
    const safe = async (fn: () => Promise<unknown>) => {
      try {
        return result(await fn());
      } catch (e) {
        return {
          ...result({
            error: e instanceof Error ? e.message : "Operation failed",
          }),
          isError: true,
        };
      }
    };
    const lessonIdSchema = z
      .string()
      .refine(
        (id) => id === baseline.id || publishedLessonIds.has(id),
        "Unknown lesson",
      )
      .default(baseline.id);
    const inputSchema = { lessonId: lessonIdSchema };
    const findLesson = (id: string) =>
      publishedLessons.find((l) => l.id === id) || baseline;
    if (scopes.includes("course:read")) {
      server.registerTool(
        "get_progress",
        {
          description:
            "Read the authorized learner’s record and revision for a lesson. Defaults to baseline.",
          inputSchema,
          annotations: { readOnlyHint: true },
        },
        ({ lessonId }) => safe(() => progress(this.env, user, lessonId)),
      );
      server.registerTool(
        "get_lesson",
        {
          description:
            "Read a published lesson and the available lesson catalog.",
          inputSchema,
          annotations: { readOnlyHint: true },
        },
        async ({ lessonId }) =>
          result({
            lesson: findLesson(lessonId),
            publishedLessons: publishedLessons.map((l) => ({
              id: l.id,
              title: l.title,
              lessonNumber: l.day,
              moduleId: l.module || `m0${l.week || 1}`,
            })),
            levels,
          }),
      );
      server.registerTool(
        "get_review_rubric",
        {
          description: "Read the assessment criteria before reviewing work.",
          inputSchema,
          annotations: { readOnlyHint: true },
        },
        async ({ lessonId }) =>
          result({
            lessonId,
            rubric: findLesson(lessonId).rubric,
            // Lessons authored under the m03/m04 contract also carry what each
            // score means and the bounded repair for a criterion below 2. A
            // reviewer that only sees the names cannot assign a score.
            criteria: publishedLessons.find((l) => l.id === lessonId)
              ?.criteria,
            scores: [
              "0 absent",
              "1 needs support",
              "2 independently adequate",
              "3 strong reasoning and tradeoffs",
            ],
            note: "Scores are the reviewer’s judgement about submitted work. This service does not compute, store or return any score, and reading a lesson never establishes mastery.",
          }),
      );
      server.registerTool(
        "get_feedback",
        {
          description:
            "Read saved AI and creator feedback, with submission versions.",
          inputSchema,
          annotations: { readOnlyHint: true },
        },
        ({ lessonId }) => safe(() => listFeedback(this.env, user, lessonId)),
      );
    }
    if (scopes.includes("course:write")) {
      server.registerTool(
        "save_feedback",
        {
          description:
            "Save AI-generated critique against an existing submission revision. Supply a new UUID id for each review; reuse it only for an exact retry. This does not award mastery.",
          inputSchema: feedbackSchema.extend(inputSchema),
          annotations: {
            readOnlyHint: false,
            destructiveHint: false,
            idempotentHint: true,
          },
        },
        ({ revision, body, id, lessonId }) =>
          safe(() =>
            saveFeedback(this.env, user, revision, body, id, "ai", lessonId),
          ),
      );
      if (user.role === "learner")
        server.registerTool(
          "save_practice",
          {
            description:
              "Update the learner’s full practice record only when requested. Read progress first and supply expectedRevision; conflicts never overwrite a newer record. Minutes are the total for this exercise, not an increment. Preserve the optional sessions log and confidence rating from get_progress when writing back; the app’s timer maintains them and omitting them erases them.",
            inputSchema: saveSchema.extend(inputSchema),
            annotations: {
              readOnlyHint: false,
              destructiveHint: false,
              idempotentHint: false,
            },
          },
          ({ record, expectedRevision, lessonId }) =>
            safe(() =>
              saveProgress(this.env, user, record, expectedRevision, lessonId),
            ),
        );
    }
    const transport = new WebStandardStreamableHTTPServerTransport({
      enableJsonResponse: true,
    });
    await server.connect(transport);
    try {
      return await transport.handleRequest(request);
    } finally {
      await server.close();
    }
  }
}
