import { timingSafeEqual } from "node:crypto";
import { z } from "zod";
import { HttpError, activeUser } from "./data";
import type { User } from "../shared/record";

export async function hash(value: string) {
  return Array.from(
    new Uint8Array(
      await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)),
    ),
  )
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
export function token() {
  return Array.from(crypto.getRandomValues(new Uint8Array(32)))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
export function cookieName(request: Request) {
  return new URL(request.url).protocol === "https:"
    ? "__Host-haru_session"
    : "haru_local_session";
}
export function cookieValue(request: Request, name: string) {
  return (
    request.headers
      .get("cookie")
      ?.split(";")
      .map((s) => s.trim())
      .find((s) => s.startsWith(name + "="))
      ?.slice(name.length + 1) || ""
  );
}
export function cookie(request: Request, value: string, maxAge = 2592000) {
  return `${cookieName(request)}=${value}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${new URL(request.url).protocol === "https:" ? "; Secure" : ""}`;
}
export function sameOrigin(request: Request) {
  if (request.headers.get("origin") !== new URL(request.url).origin)
    throw new HttpError(403, "This action must originate in the course app.");
}
export async function bodyJson(request: Request): Promise<unknown> {
  if (!request.headers.get("content-type")?.includes("application/json"))
    throw new HttpError(415, "JSON is required.");
  // Bound streaming input even when Content-Length is absent or untrustworthy.
  const reader = request.body?.getReader();
  if (!reader) throw new HttpError(400, "Request body is required.");
  const chunks: Uint8Array[] = [];
  let size = 0;
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
  const combined = new Uint8Array(size);
  let at = 0;
  for (const part of chunks) {
    combined.set(part, at);
    at += part.length;
  }
  try {
    return JSON.parse(new TextDecoder().decode(combined));
  } catch {
    throw new HttpError(400, "Invalid JSON.");
  }
}
export async function session(
  request: Request,
  env: Env,
): Promise<User | null> {
  const raw = cookieValue(request, cookieName(request));
  if (!/^[a-f0-9]{64}$/.test(raw)) return null;
  const row = await env.DB.prepare(
    "SELECT user_id FROM sessions WHERE token_hash=? AND expires_at>?",
  )
    .bind(await hash(raw), Date.now())
    .first<{ user_id: string }>();
  return row ? activeUser(env, row.user_id) : null;
}
export const credentialsSchema = z
  .object({
    username: z.string().trim().toLowerCase().min(1).max(40),
    password: z.string().max(128).default(""),
  })
  .strict();
export async function passwordHash(password: string, salt: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt: new TextEncoder().encode(salt),
      iterations: 100000,
    },
    key,
    256,
  );
  return Array.from(new Uint8Array(bits))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
export async function login(
  request: Request,
  env: Env,
  credentials: z.infer<typeof credentialsSchema>,
) {
  const now = Date.now();
  const bucket = await hash(
    (request.headers.get("CF-Connecting-IP") || "local") +
      ":" +
      Math.floor(now / 600000),
  );
  const attempt = await env.DB.prepare(
    "INSERT INTO login_attempts(bucket,attempts,expires_at) VALUES (?,1,?) ON CONFLICT(bucket) DO UPDATE SET attempts=attempts+1 RETURNING attempts",
  )
    .bind(bucket, now + 600000)
    .first<{ attempts: number }>();
  if ((attempt?.attempts || 0) > 10)
    throw new HttpError(
      429,
      "Too many sign-in attempts. Try again in ten minutes.",
    );
  const row = await env.DB.prepare(
    "SELECT id,name,role,password_hash,password_salt FROM users WHERE username=? AND active=1",
  )
    .bind(credentials.username)
    .first<
      User & { password_hash: string | null; password_salt: string | null }
    >();
  // Only the explicitly provisioned test learner may sign in without a password.
  const testLogin =
    row?.id === "test" &&
    row.role === "learner" &&
    credentials.username === "test" &&
    credentials.password === "";
  const actual = await passwordHash(
    credentials.password,
    row?.password_salt || "unknown-user-dummy-salt",
  );
  const expected = row?.password_hash || "0".repeat(64);
  const valid =
    expected.length === actual.length &&
    timingSafeEqual(
      new TextEncoder().encode(expected),
      new TextEncoder().encode(actual),
    );
  if (!row || (!testLogin && !valid))
    throw new HttpError(401, "Username or password is incorrect.");
  const user: User = { id: row.id, name: row.name, role: row.role };
  const raw = token();
  await env.DB.batch([
    env.DB.prepare(
      "INSERT INTO sessions(token_hash,user_id,expires_at) VALUES (?,?,?)",
    ).bind(await hash(raw), user.id, now + 2592000000),
    env.DB.prepare("DELETE FROM sessions WHERE expires_at<?").bind(now),
    env.DB.prepare("DELETE FROM login_attempts WHERE expires_at<?").bind(now),
  ]);
  return { user, raw };
}
