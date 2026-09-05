import { useState } from "react";
import {
  Cloud,
  LogOut,
  RefreshCw,
  Upload,
  Download,
  ShieldCheck,
} from "lucide-react";
import {
  recordSchema,
  type RecordData,
  type User,
  type CloudRecord,
  type Feedback,
} from "../shared/record";

async function api<T>(
  path: string,
  method = "GET",
  body?: unknown,
): Promise<T> {
  const response = await fetch(path, {
    method,
    headers: body ? { "content-type": "application/json" } : undefined,
    body: body ? JSON.stringify(body) : undefined,
    cache: "no-store",
  });
  if (!response.headers.get("content-type")?.includes("application/json"))
    throw new Error(
      "Cloud services are not available in this preview. Use the cloud development server or hosted app.",
    );
  const value = await response.json();
  if (!response.ok) throw new Error(value.error || "Request failed.");
  return value;
}
type Connection = {
  id: string;
  clientId: string;
  scope: string[];
  metadata?: { clientName?: string };
};
export function CloudPanel({
  record,
  onLoad,
  initialUser = null,
  onSession,
}: {
  initialUser?: User | null;
  onSession: (user: User | null) => void;
  record: RecordData;
  onLoad: (record: RecordData) => void;
}) {
  const [user, setUser] = useState<User | null>(initialUser);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cloud, setCloud] = useState<CloudRecord | null>(null);
  const [feedback, setFeedback] = useState<Feedback[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [review, setReview] = useState("");
  const [message, setMessage] = useState("");
  const [busy, setBusy] = useState(false);
  const [reviewId, setReviewId] = useState(() => crypto.randomUUID());
  async function action(fn: () => Promise<void>) {
    setBusy(true);
    setMessage("");
    try {
      await fn();
    } catch (e) {
      setMessage(
        e instanceof Error ? e.message : "Could not complete the request.",
      );
    } finally {
      setBusy(false);
    }
  }
  async function refresh() {
    const [saved, reviews, grants] = await Promise.all([
      api<CloudRecord>("/api/progress"),
      api<{ feedback: Feedback[] }>("/api/feedback"),
      api<{ items: Connection[] }>("/api/connections"),
    ]);
    if (cloud && saved.revision !== cloud.revision) {
      setReview("");
      setReviewId(crypto.randomUUID());
    }
    setCloud(saved);
    setFeedback(reviews.feedback);
    setConnections(grants.items || []);
  }
  return (
    <section className="card cloud-panel">
      <div className="section-heading">
        <div>
          <span className="eyebrow">YOUR CONNECTED WORKSPACE</span>
          <h2>
            <Cloud size={21} />{" "}
            {user
              ? `${user.name} · ${user.role === "creator" ? "Creator review" : "Cloud progress"}`
              : "Sign in to your course."}
          </h2>
        </div>
        {user && (
          <button
            disabled={busy}
            className="text-button"
            onClick={() =>
              action(async () => {
                await api("/api/logout", "POST");
                setUser(null);
                onSession(null);
                setCloud(null);
                setFeedback([]);
                setConnections([]);
                setReview("");
                setMessage(
                  "Signed out. Your local notebook remains on this device.",
                );
              })
            }
          >
            <LogOut size={15} /> Sign out
          </button>
        )}
      </div>
      {message && (
        <p className="notice" role="status">
          {message}
        </p>
      )}
      {!user ? (
        <form
          className="cloud-login"
          onSubmit={(e) => {
            e.preventDefault();
            void action(async () => {
              const value = await api<{ user: User }>("/api/login", "POST", {
                username: username.trim(),
                password,
              });
              setPassword("");
              setUser(value.user);
              onSession(value.user);
              setCloud(null);
              setMessage(
                "Signed in. Refresh cloud records to compare them with your local notebook.",
              );
            });
          }}
        >
          <p>
            Welcome back. Sign in once on this device to continue your design
            journey. You’ll stay signed in for 30 days, unless you sign out or
            clear browser data.
          </p>
          <label htmlFor="course-username">Username</label>
          <input
            id="course-username"
            autoComplete="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setPassword("");
            }}
            required
            maxLength={40}
          />
          <label htmlFor="course-password">Password</label>
          <input
            id="course-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={username.trim().toLowerCase() !== "test"}
            disabled={username.trim().toLowerCase() === "test"}
            maxLength={128}
          />
          <p className="muted">
            For testing, enter test and leave the password blank. This is a
            shared test workspace; use sample work only.
          </p>
          <button className="primary" disabled={busy}>
            {busy ? "Signing in…" : "Sign in"}
          </button>
        </form>
      ) : (
        <>
          {user.id === "test" && (
            <p className="notice">
              Shared test account · practice here is separate from Haru’s cloud
              records.
            </p>
          )}
          <p>
            {user.role === "creator"
              ? "Review Haru’s saved work and leave feedback against the exact version you read."
              : "Cloud saving is explicit: refresh, compare, then save. A newer version on another device will never be silently overwritten."}
          </p>
          <button
            className="secondary"
            disabled={busy}
            onClick={() => action(refresh)}
          >
            <RefreshCw size={15} />{" "}
            {busy ? "Working…" : "Refresh cloud records"}
          </button>
          {cloud && (
            <div className="cloud-grid">
              <div>
                <h3>
                  {cloud.record
                    ? `Cloud version ${cloud.revision}`
                    : "No cloud record yet"}
                </h3>
                {cloud.record && (
                  <>
                    <p>
                      <strong>{cloud.record.minutes} minutes</strong> ·{" "}
                      {cloud.record.status.replaceAll("-", " ")}
                    </p>
                    <p className="record-preview">
                      {cloud.record.notes || "No reflection yet."}
                    </p>
                    <p className="muted">
                      Work: {cloud.record.submission || "No reference"}
                      <br />
                      Saved: {cloud.record.updatedAt}
                    </p>
                  </>
                )}
                {user.role === "learner" && (
                  <div className="actions">
                    <button
                      className="primary"
                      disabled={busy}
                      onClick={() =>
                        action(async () => {
                          const parsed = recordSchema.safeParse(record);
                          if (!parsed.success)
                            throw new Error(
                              "Check your notebook: use whole minutes and add reflection/work reference before marking it ready.",
                            );
                          const result = await api<CloudRecord>(
                            "/api/progress",
                            "PUT",
                            {
                              record: parsed.data,
                              expectedRevision: cloud.revision,
                            },
                          );
                          setCloud(result);
                          setMessage(
                            `Saved cloud version ${result.revision}. Your local notebook is unchanged.`,
                          );
                        })
                      }
                    >
                      <Upload size={15} /> Save this draft to cloud
                    </button>
                    {cloud.record && (
                      <button
                        className="secondary"
                        disabled={busy}
                        onClick={() => {
                          onLoad(cloud.record!);
                          setMessage(
                            "Cloud copy loaded into your notebook. Your previous draft was downloaded first.",
                          );
                        }}
                      >
                        <Download size={15} /> Load cloud copy
                      </button>
                    )}
                  </div>
                )}
                {user.role === "creator" && cloud.revision > 0 && (
                  <form
                    className="review-form"
                    onSubmit={(e) => {
                      e.preventDefault();
                      void action(async () => {
                        await api("/api/feedback", "POST", {
                          revision: cloud.revision,
                          body: review,
                          id: reviewId,
                        });
                        setReview("");
                        setReviewId(crypto.randomUUID());
                        await refresh();
                        setMessage(
                          "Creator feedback saved. The learner can see it after refreshing.",
                        );
                      });
                    }}
                  >
                    <label htmlFor="creator-feedback">
                      Your review of version {cloud.revision}
                    </label>
                    <textarea
                      id="creator-feedback"
                      value={review}
                      onChange={(e) => {
                        setReview(e.target.value);
                        setReviewId(crypto.randomUUID());
                      }}
                      rows={5}
                      required
                      maxLength={12000}
                      placeholder="Evidence, specific issues, and the next revision exercise…"
                    />
                    <button disabled={busy} className="primary">
                      Save creator feedback
                    </button>
                  </form>
                )}
              </div>
              <div>
                <h3>Feedback history</h3>
                {feedback.length === 0 ? (
                  <p>No reviews yet. Assessment follows submitted evidence.</p>
                ) : (
                  feedback.map((f) => (
                    <article className="feedback-item" key={f.id}>
                      <span className="pill pale">
                        {f.source === "ai" ? "AI critique" : "Creator review"} ·
                        version {f.revision}
                      </span>
                      <p>{f.body}</p>
                      <small>{new Date(f.created_at).toLocaleString()}</small>
                    </article>
                  ))
                )}
              </div>
            </div>
          )}
          <div className="connections">
            <h3>
              <ShieldCheck size={18} /> Connect an AI app
            </h3>
            <p>
              Use this MCP server address in a compatible AI app. Sign in and
              approve the requested permissions in the browser. Model access
              depends on your AI account.
            </p>
            <code>{location.origin}/mcp</code>
            <p className="muted">
              Your AI can read the brief and work reference; attach actual
              design screenshots when needed. AI feedback cannot mark a skill as
              mastered.
            </p>
            {connections.map((c) => (
              <div className="connection" key={c.id}>
                <span>
                  {c.metadata?.clientName || c.clientId}
                  <small>{c.scope.join(", ")}</small>
                </span>
                <button
                  className="text-button"
                  disabled={busy}
                  onClick={() =>
                    action(async () => {
                      await api("/api/connections/revoke", "POST", {
                        id: c.id,
                      });
                      await refresh();
                      setMessage("AI connection revoked.");
                    })
                  }
                >
                  Revoke access
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
