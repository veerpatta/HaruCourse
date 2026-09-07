import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { randomUUID, randomBytes, createHash } from "node:crypto";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

// Integration tests intentionally run against local disposable data only.
// 8787 is held by an unrelated dev server on at least one development
// machine, so the port is overridable rather than hard-coded; probing the
// wrong server silently produced discarded evidence once already.
const base = process.env.HARU_TEST_BASE || "http://127.0.0.1:8787";
const keys = JSON.parse(
  readFileSync(".test-secrets/login-credentials.json", "utf8"),
);
const checks = [];
async function call(
  path,
  { method = "GET", body, cookie, origin = base } = {},
) {
  return fetch(base + path, {
    method,
    headers: {
      ...(cookie ? { cookie } : {}),
      ...(method !== "GET" ? { origin } : {}),
      ...(body ? { "content-type": "application/json" } : {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    redirect: "manual",
  });
}
async function signin(credentials) {
  const r = await call("/api/login", { method: "POST", body: credentials });
  assert.equal(r.status, 200, await r.clone().text());
  return r.headers.get("set-cookie").split(";")[0];
}
const learner = await signin(keys.haru);
const creator = await signin(keys.creator);
assert.equal((await call("/api/progress")).status, 401);
assert.equal((await call("/api/progress", { cookie: learner })).status, 200);
const tester = await signin(keys.test);
const haruPositionBefore = await (
  await call("/api/learning-position", { cookie: learner })
).json();
const testPositionBefore = await (
  await call("/api/learning-position", { cookie: tester })
).json();
assert.equal((await call("/api/learning-position")).status, 401);
const positionBody = {
  lessonId: "week2-day3-v1",
  sectionId: "check",
  expectedRevision: testPositionBefore.position?.revision || 0,
};
const savePosition = await call("/api/learning-position", {
  method: "PUT",
  cookie: tester,
  body: positionBody,
});
assert.equal(savePosition.status, 200);
const positionSaved = await savePosition.json();
assert.equal(
  positionSaved.position.revision,
  positionBody.expectedRevision + 1,
);
assert.equal(positionSaved.position.sectionId, "check");
assert.equal(
  (
    await call("/api/learning-position", {
      method: "PUT",
      cookie: tester,
      body: positionBody,
    })
  ).status,
  409,
);
assert.deepEqual(
  await (await call("/api/learning-position", { cookie: tester })).json(),
  positionSaved,
);
assert.equal(
  (
    await call("/api/learning-position", {
      method: "PUT",
      cookie: tester,
      body: { ...positionBody, lessonId: "removed" },
    })
  ).status,
  404,
);
assert.equal(
  (
    await call("/api/learning-position", {
      method: "PUT",
      cookie: tester,
      body: { ...positionBody, sectionId: "removed" },
    })
  ).status,
  400,
);
assert.equal(
  (
    await call("/api/learning-position", {
      method: "PUT",
      cookie: tester,
      origin: "https://evil.example",
      body: positionBody,
    })
  ).status,
  403,
);
const creatorPosition = await (
  await call("/api/learning-position", { cookie: creator })
).json();
assert.equal(
  (
    await call("/api/learning-position", {
      method: "PUT",
      cookie: creator,
      body: {
        ...positionBody,
        expectedRevision: creatorPosition.position?.revision || 0,
      },
    })
  ).status,
  200,
);
assert.deepEqual(
  await (await call("/api/learning-position", { cookie: learner })).json(),
  haruPositionBefore,
);
checks.push(
  "reading bookmark authentication, revision conflict, invalid targets, CSRF and creator/test isolation",
);
for (const username of ["haru", "itsme", "unknown"])
  assert.equal(
    (
      await call("/api/login", {
        method: "POST",
        body: { username, password: "" },
      })
    ).status,
    401,
  );
const testBefore = await (
  await call("/api/progress", { cookie: tester })
).json();
const haruBefore = await (
  await call("/api/progress", { cookie: learner })
).json();
assert.equal(
  (
    await call("/api/progress", {
      method: "PUT",
      cookie: tester,
      body: {
        expectedRevision: testBefore.revision,
        record: {
          version: 1,
          notes: "Isolated test workspace",
          submission: "",
          minutes: 1500,
          status: "practicing",
          updatedAt: "",
        },
      },
    })
  ).status,
  200,
);
assert.deepEqual(
  await (await call("/api/progress", { cookie: learner })).json(),
  haruBefore,
);
// The timer's optional fields: they round-trip, the old six-field shape is
// still accepted afterwards and comes back without them, and the bounds and
// strictness the schema promises are enforced server-side.
const timed = {
  version: 1,
  notes: "Isolated test workspace",
  submission: "",
  minutes: 1555,
  status: "practicing",
  updatedAt: "",
  sessions: [
    { startedAt: "2026-09-06T10:00:00.000Z", minutes: 25, step: 3 },
    { startedAt: "2026-09-06T11:00:00.000Z", minutes: 30, manual: true },
  ],
  confidence: 4,
};
let testNow = await (await call("/api/progress", { cookie: tester })).json();
assert.equal(
  (
    await call("/api/progress", {
      method: "PUT",
      cookie: tester,
      body: { expectedRevision: testNow.revision, record: timed },
    })
  ).status,
  200,
);
testNow = await (await call("/api/progress", { cookie: tester })).json();
assert.deepEqual(testNow.record.sessions, timed.sessions);
assert.equal(testNow.record.confidence, 4);
const summary = await (
  await call("/api/course-records", { cookie: tester })
).json();
const baselineRow = summary.records.find((r) => r.lessonId === "baseline-v1");
assert.deepEqual(baselineRow?.record.sessions, timed.sessions);
const rejects = async (patch) =>
  assert.equal(
    (
      await call("/api/progress", {
        method: "PUT",
        cookie: tester,
        body: { expectedRevision: testNow.revision, record: { ...timed, ...patch } },
      })
    ).status,
    400,
  );
await rejects({ sessions: [{ startedAt: "x", minutes: 1.5 }] });
await rejects({
  sessions: Array.from({ length: 51 }, () => ({ startedAt: "x", minutes: 1 })),
});
await rejects({ confidence: 6 });
await rejects({ sessions: [{ startedAt: "x", minutes: 1, extra: true }] });
const { sessions: _s, confidence: _c, ...plain } = timed;
assert.equal(
  (
    await call("/api/progress", {
      method: "PUT",
      cookie: tester,
      body: { expectedRevision: testNow.revision, record: plain },
    })
  ).status,
  200,
);
testNow = await (await call("/api/progress", { cookie: tester })).json();
assert(!("sessions" in testNow.record), "old shape must come back without sessions");
assert(!("confidence" in testNow.record), "old shape must come back without confidence");
assert.deepEqual(
  await (await call("/api/progress", { cookie: learner })).json(),
  haruBefore,
);
checks.push(
  "session log and confidence round-trip, old record shape still accepted, out-of-range and unknown fields rejected",
);
assert.equal(
  (
    await call("/api/feedback", {
      method: "POST",
      cookie: tester,
      body: { id: randomUUID(), revision: 1, body: "Cannot review Haru" },
    })
  ).status,
  403,
);
await call("/api/logout", { method: "POST", cookie: tester });
checks.push(
  "password rejection, password-free test login, isolated test writes and denied creator access",
);
checks.push("login and unauthenticated record denial");
let current = await (await call("/api/progress", { cookie: learner })).json();
const record = {
  version: 1,
  notes: "Integration QA: verify evidence and recovery.",
  submission: "qa-sketches.pdf",
  minutes: 120,
  status: "ready-for-review",
  updatedAt: "",
};
const write = () =>
  call("/api/progress", {
    method: "PUT",
    cookie: learner,
    body: { record, expectedRevision: current.revision },
  });
assert.equal(
  (
    await call("/api/progress", {
      method: "PUT",
      cookie: creator,
      body: { record, expectedRevision: current.revision },
    })
  ).status,
  403,
);
assert.equal(
  (
    await call("/api/progress", {
      method: "PUT",
      cookie: learner,
      origin: "https://untrusted.example",
      body: { record, expectedRevision: current.revision },
    })
  ).status,
  403,
);
assert.equal(
  (
    await call("/api/progress", {
      method: "PUT",
      cookie: learner,
      body: {
        record: { ...record, minutes: 1.2 },
        expectedRevision: current.revision,
      },
    })
  ).status,
  400,
);
const concurrent = await Promise.all([write(), write()]);
assert.deepEqual(concurrent.map((r) => r.status).sort(), [200, 409]);
current = await (await call("/api/progress", { cookie: learner })).json();
assert.equal(current.record.notes, record.notes);
checks.push("ownership, CSRF, validation, and concurrent-save conflict");
const feedback = {
  id: randomUUID(),
  revision: current.revision,
  body: "QA creator feedback: explain the recovery path.",
};
assert.equal(
  (
    await call("/api/feedback", {
      method: "POST",
      cookie: learner,
      body: feedback,
    })
  ).status,
  403,
);
assert.equal(
  (
    await call("/api/feedback", {
      method: "POST",
      cookie: creator,
      body: feedback,
    })
  ).status,
  201,
);
assert.equal(
  (
    await call("/api/feedback", {
      method: "POST",
      cookie: creator,
      body: feedback,
    })
  ).status,
  201,
);
assert.equal(
  (
    await call("/api/feedback", {
      method: "POST",
      cookie: creator,
      body: { ...feedback, body: "Different body" },
    })
  ).status,
  409,
);
const reviews = await (await call("/api/feedback", { cookie: learner })).json();
assert.equal(reviews.feedback.filter((f) => f.id === feedback.id).length, 1);
checks.push("versioned creator feedback and retry deduplication");
const lessonPath = "/api/progress?lessonId=week1-day5-v1";
const previousLesson = await (
  await call(lessonPath, { cookie: learner })
).json();
assert.equal(
  (
    await call(lessonPath, {
      method: "PUT",
      cookie: learner,
      body: {
        record: { ...record, notes: "Separate lesson evidence" },
        expectedRevision: previousLesson.revision,
      },
    })
  ).status,
  200,
);
assert.equal(
  (await (await call("/api/progress", { cookie: learner })).json()).revision,
  current.revision,
);
assert.equal(
  (await call("/api/progress?lessonId=unknown", { cookie: learner })).status,
  404,
);
assert.ok(
  (
    await (await call("/api/course-records", { cookie: learner })).json()
  ).records.some((r) => r.lessonId === "week1-day5-v1"),
);
checks.push(
  "per-lesson persistence, baseline isolation, catalog validation and course summary",
);
const week2Path = "/api/progress?lessonId=week2-day1-v1";
const week2Previous = await (await call(week2Path, { cookie: learner })).json();
assert.equal(
  (
    await call(week2Path, {
      method: "PUT",
      cookie: learner,
      body: {
        record: { ...record, notes: "Week 2 independent evidence" },
        expectedRevision: week2Previous.revision,
      },
    })
  ).status,
  200,
);
assert.equal(
  (await (await call(week2Path, { cookie: creator })).json()).record.notes,
  "Week 2 independent evidence",
);
assert.equal(
  (await (await call("/api/progress", { cookie: learner })).json()).revision,
  current.revision,
);
checks.push(
  "Week 2 persistence and creator visibility without changing baseline",
);
const unauth = await call("/mcp");
assert.equal(unauth.status, 401);
assert.match(
  unauth.headers.get("www-authenticate"),
  /oauth-protected-resource/,
);
const metadata = await (
  await call("/.well-known/oauth-authorization-server")
).json();
assert.equal(metadata.authorization_endpoint, base + "/authorize");

async function connect(scopes) {
  const registered = await call("/oauth/register", {
    method: "POST",
    body: {
      client_name: "Haru integration QA",
      redirect_uris: ["http://127.0.0.1:9911/callback"],
      grant_types: ["authorization_code", "refresh_token"],
      response_types: ["code"],
      token_endpoint_auth_method: "none",
    },
  });
  assert.equal(registered.status, 201, await registered.clone().text());
  const client = await registered.json();
  const verifier = randomBytes(32).toString("base64url");
  const params = new URLSearchParams({
    client_id: client.client_id,
    redirect_uri: "http://127.0.0.1:9911/callback",
    response_type: "code",
    scope: scopes,
    code_challenge: createHash("sha256").update(verifier).digest("base64url"),
    code_challenge_method: "S256",
    state: randomUUID(),
    resource: base + "/mcp",
  });
  const path = "/authorize?" + params;
  const consent = await call(path, { cookie: learner });
  assert.equal(consent.status, 200, await consent.clone().text());
  const html = await consent.text();
  const csrf = html.match(/name="csrf" value="([^"]+)"/)[1];
  const consentCookie = consent.headers.get("set-cookie").split(";")[0];
  const post = async (form) =>
    fetch(base + path, {
      method: "POST",
      headers: {
        origin: base,
        cookie: learner + "; " + consentCookie,
        "content-type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(form),
      redirect: "manual",
    });
  assert.equal((await post({ csrf: "wrong", decision: "allow" })).status, 403);
  const approved = await post({ csrf, decision: "allow" });
  assert.equal(approved.status, 302, await approved.clone().text());
  const callback = new URL(approved.headers.get("location"));
  assert.equal(callback.searchParams.get("state"), params.get("state"));
  const exchanged = await fetch(base + "/oauth/token", {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      code: callback.searchParams.get("code"),
      client_id: client.client_id,
      redirect_uri: params.get("redirect_uri"),
      code_verifier: verifier,
      resource: base + "/mcp",
    }),
  });
  assert.equal(exchanged.status, 200, await exchanged.clone().text());
  const tokens = await exchanged.json();
  const sdk = new Client({ name: "haru-qa", version: "1.0.0" });
  await sdk.connect(
    new StreamableHTTPClientTransport(new URL(base + "/mcp"), {
      requestInit: {
        headers: { Authorization: "Bearer " + tokens.access_token },
      },
    }),
  );
  return { sdk, tokens, client };
}
const readOnly = await connect("course:read");
const readTools = (await readOnly.sdk.listTools()).tools.map((t) => t.name);
assert.ok(readTools.includes("get_progress"));
assert.ok(!readTools.includes("save_feedback"));
assert.ok(!readTools.includes("save_practice"));
const data = await readOnly.sdk.callTool({
  name: "get_progress",
  arguments: {},
});
assert.ok(!data.isError, JSON.stringify(data));
assert.equal(JSON.parse(data.content[0].text).revision, current.revision);
const lessonResponse = await readOnly.sdk.callTool({name: 'get_lesson', arguments: {lessonId: 'week1-day1-v1'}});
assert.ok(!lessonResponse.isError);
const teaching = JSON.parse(lessonResponse.content[0].text);
assert.equal(teaching.lesson.apprenticeship.activity, 'Design detective');
assert.ok(teaching.lesson.apprenticeship.ai.prompt.includes('From screens to product problems'));
assert.equal(teaching.portfolio.projectPacks.length, 3);
assert.equal(Object.keys(teaching.milestones).length, 21);
const diagnosticResponse = await readOnly.sdk.callTool({name: 'get_lesson', arguments: {lessonId: 'baseline-v1'}});
assert.ok(!JSON.parse(diagnosticResponse.content[0].text).lesson.apprenticeship.ai);
checks.push('MCP shares activity templates, optional prompts, independent baseline and full portfolio path');
await readOnly.sdk.close();
checks.push(
  "OAuth discovery, PKCE exchange, consent CSRF, SDK initialization, read-only tools",
);
const writable = await connect("course:read course:write");
const aiId = randomUUID();
const aiReview = await writable.sdk.callTool({
  name: "save_feedback",
  arguments: {
    id: aiId,
    revision: current.revision,
    body: "QA AI critique: annotate your keyboard focus order.",
  },
});
assert.ok(!aiReview.isError, JSON.stringify(aiReview));
const aiSaved = (
  await (await call("/api/feedback", { cookie: learner })).json()
).feedback.find((f) => f.id === aiId);
assert.equal(aiSaved.source, "ai");
assert.equal(aiSaved.revision, current.revision);
// Refresh with fewer scopes: application permissions must use effective token scope.
const downscoped = await fetch(base + "/oauth/token", {
  method: "POST",
  headers: { "content-type": "application/x-www-form-urlencoded" },
  body: new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: writable.tokens.refresh_token,
    client_id: writable.client.client_id,
    scope: "course:read",
    resource: base + "/mcp",
  }),
});
assert.equal(downscoped.status, 200, await downscoped.clone().text());
const readToken = await downscoped.json();
const limited = new Client({ name: "haru-qa-downscope", version: "1.0.0" });
await limited.connect(
  new StreamableHTTPClientTransport(new URL(base + "/mcp"), {
    requestInit: {
      headers: { Authorization: "Bearer " + readToken.access_token },
    },
  }),
);
assert.ok(
  !(await limited.listTools()).tools.some((t) => t.name === "save_feedback"),
);
const grants = await (
  await call("/api/connections", { cookie: learner })
).json();
assert.ok(Array.isArray(grants.items), JSON.stringify(grants));
const grant = grants.items.find(
  (g) => g.clientId === writable.client.client_id,
);
assert.ok(grant);
assert.equal(
  (
    await call("/api/connections/revoke", {
      method: "POST",
      cookie: learner,
      body: { id: grant.id },
    })
  ).status,
  200,
);
const afterRevoke = await fetch(base + "/mcp", {
  headers: { Authorization: "Bearer " + readToken.access_token },
});
assert.equal(afterRevoke.status, 401);
await writable.sdk.close();
await limited.close();
checks.push(
  "MCP feedback visible through app API, token downscoping, connection revocation",
);
assert.equal(
  (await call("/api/logout", { method: "POST", cookie: learner })).status,
  200,
);
assert.equal((await call("/api/progress", { cookie: learner })).status, 401);
checks.push("logout revokes browser session");
console.log(JSON.stringify({ passed: checks }, null, 2));
