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
    if (scopes.includes("course:read")) {
      server.registerTool(
        "get_progress",
        {
          description:
            "Read the authorized learner’s current baseline and cloud revision.",
          inputSchema: {},
          annotations: { readOnlyHint: true },
        },
        () => safe(() => progress(this.env, user)),
      );
      server.registerTool(
        "get_lesson",
        {
          description:
            "Read the available baseline lesson and planned roadmap. Later lessons are not yet published.",
          inputSchema: {},
          annotations: { readOnlyHint: true },
        },
        async () => result({ baseline, levels }),
      );
      server.registerTool(
        "get_review_rubric",
        {
          description: "Read the assessment criteria before reviewing work.",
          inputSchema: {},
          annotations: { readOnlyHint: true },
        },
        async () => result({ lessonId: baseline.id, rubric: baseline.rubric }),
      );
      server.registerTool(
        "get_feedback",
        {
          description:
            "Read saved AI and creator feedback, with submission versions.",
          inputSchema: {},
          annotations: { readOnlyHint: true },
        },
        () => safe(() => listFeedback(this.env, user)),
      );
    }
    if (scopes.includes("course:write")) {
      server.registerTool(
        "save_feedback",
        {
          description:
            "Save AI-generated critique against an existing submission revision. Supply a new UUID id for each review; reuse it only for an exact retry. This does not award mastery.",
          inputSchema: feedbackSchema,
          annotations: {
            readOnlyHint: false,
            destructiveHint: false,
            idempotentHint: true,
          },
        },
        ({ revision, body, id }) =>
          safe(() => saveFeedback(this.env, user, revision, body, id, "ai")),
      );
      if (user.role === "learner")
        server.registerTool(
          "save_practice",
          {
            description:
              "Update the learner’s full practice record only when requested. Read progress first and supply expectedRevision; conflicts never overwrite a newer record. Minutes are the total for this exercise, not an increment.",
            inputSchema: saveSchema,
            annotations: {
              readOnlyHint: false,
              destructiveHint: false,
              idempotentHint: false,
            },
          },
          ({ record, expectedRevision }) =>
            safe(() => saveProgress(this.env, user, record, expectedRevision)),
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
