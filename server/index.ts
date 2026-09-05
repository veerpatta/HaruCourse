import { lessons } from "../src/lessons";
import { baseline } from "../src/course";
import {
  OAuthProvider,
  AuthorizationError,
} from "@cloudflare/workers-oauth-provider";
import { z, ZodError } from "zod";
import { timingSafeEqual } from "node:crypto";
import { McpApi } from "./mcp";
import {
  HttpError,
  progress,
  saveProgress,
  listFeedback,
  saveFeedback,
} from "./data";
import {
  credentialsSchema,
  bodyJson,
  cookie,
  cookieName,
  cookieValue,
  hash,
  login,
  sameOrigin,
  session,
  token,
} from "./auth";
import { saveSchema, feedbackSchema } from "../shared/record";

const json = (data: unknown, status = 200, headers?: HeadersInit) =>
  Response.json(data, { status, headers });
const escapeHtml = (text: string) =>
  text.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
function formPage(title: string, content: string, headers?: HeadersInit) {
  return new Response(
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${escapeHtml(title)} · Haru Course</title><link rel="stylesheet" href="/auth.css"></head><body><main><p class="brand">haru / CONNECTED LEARNING</p><h1>${escapeHtml(title)}</h1>${content}</main></body></html>`,
    {
      headers: {
        "content-type": "text/html; charset=utf-8",
        ...Object.fromEntries(new Headers(headers)),
      },
    },
  );
}
async function authorize(request: Request, env: Env) {
  // Query parameters remain on the POST action; do not parse the consent form as OAuth input.
  const authRequest = await env.OAUTH_PROVIDER.parseAuthRequest(
    new Request(request.url),
  );
  if (!authRequest.codeChallenge || authRequest.codeChallengeMethod !== "S256")
    throw new HttpError(400, "PKCE S256 is required.");
  const allowed = ["course:read", "course:write"];
  if (authRequest.scope.some((s) => !allowed.includes(s)))
    throw new HttpError(400, "Unsupported permission requested.");
  const scopes = authRequest.scope.length ? authRequest.scope : ["course:read"];
  const client = await env.OAUTH_PROVIDER.lookupClient(authRequest.clientId);
  if (!client) throw new HttpError(400, "Unknown client.");
  let user = await session(request, env);
  const csrfName =
    new URL(request.url).protocol === "https:"
      ? "__Host-haru_consent"
      : "haru_local_consent";
  const secure = new URL(request.url).protocol === "https:" ? "; Secure" : "";
  if (request.method === "GET") {
    const csrf = token();
    // Bind the random form token to these exact OAuth parameters, preventing their substitution on POST.
    const bound = await hash(csrf + request.url);
    const content = `<p><strong>${escapeHtml(client.clientName || "Unnamed AI client")}</strong> is requesting access to your course.</p><p class="muted">Client: ${escapeHtml(authRequest.clientId)}</p><ul><li>Read lessons, progress, work references, and feedback.</li>${scopes.includes("course:write") ? "<li>Save AI feedback. A learner connection can also update practice when requested.</li>" : ""}</ul><p>${user ? `Signed in as <strong>${escapeHtml(user.name)}</strong>.` : "Sign in with your course username and password. The test account needs no password."}</p><form method="post" action="${escapeHtml(new URL(request.url).pathname + new URL(request.url).search)}"><input type="hidden" name="csrf" value="${csrf}">${user ? "" : '<label for="username">Username</label><input id="username" name="username" autocomplete="username" required maxlength="40"><label for="password">Password (leave blank for test)</label><input id="password" name="password" type="password" autocomplete="current-password" maxlength="128">'}<button name="decision" value="allow">Allow these permissions</button><button class="secondary" name="decision" value="deny" formnovalidate>Cancel</button></form><p class="muted">You can revoke AI connections from the course app. AI critique remains distinct from a creator assessment.</p>`;
    return formPage("Connect your course", content, {
      "set-cookie": `${csrfName}=${bound}; HttpOnly; SameSite=Lax; Path=/; Max-Age=600${secure}`,
    });
  }
  if (request.method !== "POST")
    throw new HttpError(405, "Method not allowed.");
  sameOrigin(request);
  const raw = await request.text(); // Consent form has a small required Content-Length bound enforced at entry.
  const form = new URLSearchParams(raw);
  const stored = cookieValue(request, csrfName);
  const expected = await hash((form.get("csrf") || "") + request.url);
  if (
    !stored ||
    stored.length !== expected.length ||
    !timingSafeEqual(
      new TextEncoder().encode(stored),
      new TextEncoder().encode(expected),
    )
  )
    throw new HttpError(403, "Consent expired. Restart the connection.");
  if (form.get("decision") !== "allow")
    return formPage(
      "Connection cancelled",
      '<p>No access was granted.</p><a href="/">Return to your course</a>',
    );
  let sessionRaw = "";
  if (!user) {
    const signed = await login(
      request,
      env,
      credentialsSchema.parse({
        username: form.get("username"),
        password: form.get("password") || "",
      }),
    );
    user = signed.user;
    sessionRaw = signed.raw;
  }
  const { redirectTo } = await env.OAUTH_PROVIDER.completeAuthorization({
    request: authRequest,
    userId: user.id,
    scope: scopes,
    metadata: { clientName: client.clientName || authRequest.clientId },
    props: { userId: user.id, scopes },
  });
  const headers = new Headers({ location: redirectTo });
  headers.append(
    "set-cookie",
    `${csrfName}=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0${secure}`,
  );
  if (sessionRaw) headers.append("set-cookie", cookie(request, sessionRaw));
  return new Response(null, { status: 302, headers });
}
const defaultHandler: ExportedHandler<Env> = {
  async fetch(request, env) {
    const path = new URL(request.url).pathname;
    if (path === "/authorize") return authorize(request, env);
    if (!path.startsWith("/api/")) return env.ASSETS.fetch(request);
    if (path === "/api/health" && request.method === "GET")
      return json({ ok: true, version: "0.2.0" });
    if (path === "/api/login" && request.method === "POST") {
      sameOrigin(request);
      const credentials = credentialsSchema.parse(await bodyJson(request));
      const signed = await login(request, env, credentials);
      return json({ user: signed.user }, 200, {
        "set-cookie": cookie(request, signed.raw),
      });
    }
    const user = await session(request, env);
    if (path === "/api/session" && request.method === "GET") {
      const saved = user
        ? await env.DB.prepare(
            "SELECT expires_at FROM sessions WHERE token_hash=?",
          )
            .bind(await hash(cookieValue(request, cookieName(request))))
            .first<{ expires_at: number }>()
        : null;
      return json({ user, expiresAt: saved?.expires_at || null });
    }
    if (!user) throw new HttpError(401, "Sign in to access cloud records.");
    if (!["GET", "HEAD"].includes(request.method)) sameOrigin(request);
    if (path === "/api/logout" && request.method === "POST") {
      await env.DB.prepare("DELETE FROM sessions WHERE token_hash=?")
        .bind(await hash(cookieValue(request, cookieName(request))))
        .run();
      return json({ ok: true }, 200, { "set-cookie": cookie(request, "", 0) });
    }
    const lessonId =
      new URL(request.url).searchParams.get("lessonId") || baseline.id;
    if (![baseline.id, ...lessons.map((l) => l.id)].includes(lessonId))
      throw new HttpError(404, "Lesson not found.");
    if (path === "/api/course-records" && request.method === "GET") {
      const rows = await env.DB.prepare(
        "SELECT lesson_id,revision,record_json FROM progress WHERE user_id=?",
      )
        .bind(user.role === "creator" ? "haru" : user.id)
        .all();
      return json({
        records: rows.results.map((row) => ({
          lessonId: row.lesson_id,
          revision: row.revision,
          record: JSON.parse(row.record_json as string),
        })),
      });
    }
    if (path === "/api/progress" && request.method === "GET")
      return json(await progress(env, user, lessonId));
    if (path === "/api/progress" && request.method === "PUT") {
      const value = saveSchema.parse(await bodyJson(request));
      return json(
        await saveProgress(
          env,
          user,
          value.record,
          value.expectedRevision,
          lessonId,
        ),
      );
    }
    if (path === "/api/feedback" && request.method === "GET")
      return json({ feedback: await listFeedback(env, user, lessonId) });
    if (path === "/api/feedback" && request.method === "POST") {
      const value = feedbackSchema.parse(await bodyJson(request));
      return json(
        await saveFeedback(
          env,
          user,
          value.revision,
          value.body,
          value.id,
          "creator",
          lessonId,
        ),
        201,
      );
    }
    if (path === "/api/connections" && request.method === "GET") {
      const grants = await env.OAUTH_PROVIDER.listUserGrants(user.id, {
        limit: 100,
      });
      return json(grants);
    }
    if (path === "/api/connections/revoke" && request.method === "POST") {
      const { id } = z
        .object({ id: z.string().min(1).max(200) })
        .strict()
        .parse(await bodyJson(request));
      await env.OAUTH_PROVIDER.revokeGrant(id, user.id);
      return json({ ok: true });
    }
    throw new HttpError(404, "Not found.");
  },
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext) {
    const url = new URL(request.url);
    let response: Response;
    try {
      // Keep inbound auth/MCP payloads bounded before SDK parsing.
      if (request.method === "POST" && !url.pathname.startsWith("/api/")) {
        const reader = request.body?.getReader();
        const chunks: Uint8Array[] = [];
        let size = 0;
        if (reader)
          while (true) {
            const part = await reader.read();
            if (part.done) break;
            size += part.value.byteLength;
            if (size > 65536) {
              await reader.cancel();
              throw new HttpError(413, "Request is too large.");
            }
            chunks.push(part.value);
          }
        const bytes = new Uint8Array(size);
        let pos = 0;
        for (const chunk of chunks) {
          bytes.set(chunk, pos);
          pos += chunk.length;
        }
        request = new Request(request, { body: bytes });
      }
      if (
        url.pathname.startsWith("/mcp") &&
        request.headers.has("origin") &&
        request.headers.get("origin") !== url.origin
      )
        throw new HttpError(403, "Origin not allowed.");
      const provider = new OAuthProvider<Env>({
        apiRoute: "/mcp",
        apiHandler: McpApi,
        defaultHandler,
        authorizeEndpoint: "/authorize",
        tokenEndpoint: "/oauth/token",
        clientRegistrationEndpoint: "/oauth/register",
        scopesSupported: ["course:read", "course:write"],
        accessTokenTTL: 3600,
        refreshTokenTTL: 2592000,
        tokenExchangeCallback: async ({ userId, requestedScope }) => ({
          accessTokenProps: { userId, scopes: requestedScope },
        }),
        clientIdMetadataDocumentEnabled: true,
        resourceMetadata: {
          resource: url.origin + "/mcp",
          ...(url.protocol === "https:"
            ? { authorization_servers: [url.origin] }
            : {}),
          scopes_supported: ["course:read", "course:write"],
          resource_name: "Haru Course",
        },
      });
      response = await provider.fetch(request, env, ctx);
    } catch (error) {
      const status =
        error instanceof HttpError
          ? error.status
          : error instanceof ZodError || error instanceof AuthorizationError
            ? 400
            : 500;
      if (status === 500)
        console.error(
          JSON.stringify({
            event: "request_failed",
            path: url.pathname,
            error: error instanceof Error ? error.name : "Unknown",
            ...(url.hostname === "127.0.0.1" && error instanceof Error
              ? { detail: error.message, stack: error.stack }
              : {}),
          }),
        );
      response = json(
        {
          error:
            status === 500
              ? "The server could not complete this request. Please retry."
              : error instanceof ZodError
                ? "Invalid input. Check field lengths, whole minutes, and required reflection."
                : (error as Error).message,
        },
        status,
      );
    }
    const headers = new Headers(response.headers);
    headers.set("cache-control", "no-store");
    headers.set("x-content-type-options", "nosniff");
    headers.set("referrer-policy", "no-referrer");
    headers.set(
      "content-security-policy",
      "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' data:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'",
    );
    return new Response(response.body, { status: response.status, headers });
  },
} satisfies ExportedHandler<Env>;
