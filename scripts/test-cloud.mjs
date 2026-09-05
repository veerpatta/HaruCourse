import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { randomUUID, randomBytes, createHash } from "node:crypto";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

// Integration tests intentionally run against local disposable data only.
const base = "http://127.0.0.1:8787";
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
          minutes: 0,
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
