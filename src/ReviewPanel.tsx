import { useEffect, useId, useState } from "react";
import type { Feedback, RecordData, ReviewOutcome, ReviewSettings, ReviewSummary, User } from "../shared/record";
import { hasReviewWork, progressStates } from "../shared/learning";
import type { Lesson } from "./teaching";
import type { SetPractice } from "./LearningProgress";
import { humanDate } from "./labels";

// The review loop from the improvement plan (4 October 2026): attempt → review
// against a named criterion → revise or justify keeping it → recheck the same
// criterion → apply it to a new case. Nothing here sends a message; every
// label says so, and only a creator review on a saved version records
// "reviewed" or "demonstrated independently".

export const outcomeLabels: Record<ReviewOutcome, string> = {
  "needs-revision": "Needs revision",
  "meets-criterion": "Meets the criterion",
  "demonstrated-independently": "Demonstrated independently",
};

const genericLevels = [
  "Absent: the work does not show this yet.",
  "Needs support: partly shown, or only with help.",
  "Independently adequate: clearly shown in the saved work.",
  "Strong: shown with reasons, trade-offs and honest limits.",
];
export function criteriaFor(lesson: Lesson) {
  return lesson.criteria?.length
    ? lesson.criteria.map((c) => ({ name: c.criterion, levels: c.levels, evidence: c.evidence }))
    : lesson.rubric.map((name) => ({ name, levels: genericLevels as [string, string, string, string], evidence: "" }));
}

const settingsKey = (userId: string) => `harucourse:review-settings:${userId}`;
// undefined while loading; null when no reviewer is linked to this workspace.
export function useReviewSettings(user: User) {
  const [settings, setSettings] = useState<ReviewSettings | null | undefined>(() => {
    try {
      const cached = localStorage.getItem(settingsKey(user.id));
      return cached ? (JSON.parse(cached) as ReviewSettings | null) : undefined;
    } catch {
      return undefined;
    }
  });
  useEffect(() => {
    let active = true;
    fetch("/api/review-settings", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((v: { settings: ReviewSettings | null }) => {
        if (!active) return;
        setSettings(v.settings);
        try { localStorage.setItem(settingsKey(user.id), JSON.stringify(v.settings)); } catch {}
      })
      .catch(() => {});
    return () => { active = false; };
  }, [user.id]);
  return [settings, setSettings] as const;
}

export function ProgressStatesRow({ record, reviews }: { record: RecordData; reviews: ReviewSummary[] }) {
  const s = progressStates(record, reviews);
  const latest = reviews.at(-1);
  const items: [boolean, string, string][] = [
    [s.saved, "Work saved", "Your answers and work reference are stored."],
    [s.finished, "Practice finished", "You finished the required practice for your route."],
    [s.reviewed, "Reviewed against criteria", latest ? `Version ${latest.revision} · ${latest.criterion || "criterion not named"} · ${outcomeLabels[latest.outcome]}` : "A reviewer has not recorded findings on a saved version yet."],
    [s.demonstrated, "Demonstrated independently", "A reviewer judged an unfamiliar task met the criterion with the allowed support."],
  ];
  return (
    <section className="progress-states" aria-label="Four kinds of progress for this lesson">
      <h3>Where this lesson stands</h3>
      <ul>
        {items.map(([done, label, detail]) => (
          <li key={label} className={done ? "is-done" : ""}>
            <span aria-hidden="true">{done ? "✓" : "○"}</span>
            <span><strong>{label}</strong>{done ? "" : " · not yet"}<small>{detail}</small></span>
          </li>
        ))}
      </ul>
      {(s.selfReviewed || s.skillShown || s.reviewRequested) && (
        <p className="muted">
          {s.reviewRequested ? "Review requested. " : ""}
          {s.selfReviewed ? "Self-review recorded (your own judgement, external check pending). " : ""}
          {s.skillShown ? "Existing skill shown for the core path (pending review). " : ""}
          None of these count as reviewed or demonstrated.
        </p>
      )}
    </section>
  );
}

export function RequestReview({ lesson, record, setRecord, revision, pending, readOnly, settings, latest }: {
  lesson: Lesson; record: RecordData; setRecord: SetPractice; revision: number; pending: boolean; readOnly: boolean;
  settings: ReviewSettings | null | undefined; latest?: Feedback;
}) {
  const id = useId();
  const criteria = criteriaFor(lesson);
  const request = record.status === "ready-for-review" ? record.learning?.review : undefined;
  const recheck = latest?.source === "creator" && latest.criterion ? latest : undefined;
  const [criterion, setCriterion] = useState(request?.criterion || recheck?.criterion || criteria[0]?.name || "");
  const [question, setQuestion] = useState(request?.question || "");
  const [change, setChange] = useState(request?.change || "");
  const hasWork = hasReviewWork(record);
  if (settings === undefined) return <section className="review-request card"><p role="status">Loading who reviews this work…</p></section>;
  return (
    <section className="review-request card" aria-labelledby={`${id}-title`}>
      <h3 id={`${id}-title`}>{request ? "Review requested" : recheck ? "Ask for a recheck" : "Ask for a review"}</h3>
      {settings === null ? (
        <p className="tool-warning">No reviewer is linked to this workspace. Use self-review below; it is labelled as your own judgement and does not count as a review.</p>
      ) : (
        <dl className="review-destination">
          <div><dt>Who reviews</dt><dd>{settings.reviewerName}</dd></div>
          <div><dt>Expected response</dt><dd>{settings.responseWindow || "Not agreed yet. Ask your reviewer how long to expect, or use self-review while you wait."}</dd></div>
          {settings.contactNote && <div><dt>If it is urgent</dt><dd>{settings.contactNote}</dd></div>}
          <div><dt>What they will see</dt><dd>The saved version of this lesson: your answers, notes, work reference, the criterion and your question. Files on your computer are not uploaded; if your work lives in a file, put a link you are happy to share in “Work reference”. Never attach raw participant notes.</dd></div>
        </dl>
      )}
      {request && (
        <div className="review-status" role="status">
          <p><strong>Requested {humanDate(request.requestedAt)}</strong> · {pending ? "saving this version…" : `version ${revision}`} · criterion: {request.criterion}</p>
          <p>Your question: {request.question}</p>
          <p className="muted">No message was sent. Your reviewer sees this request in their review list the next time they open the course. Tell them yourself if you need a reply sooner. Editing your work after asking means they will read the newer version.</p>
          {!readOnly && <button type="button" className="text-button" onClick={() => setRecord((r) => ({ ...r, status: "practicing", learning: { ...r.learning, review: undefined } }))}>Withdraw the request</button>}
        </div>
      )}
      {!request && settings !== null && !readOnly && (
        <form className="review-form" onSubmit={(e) => {
          e.preventDefault();
          if (!hasWork || !question.trim() || !criterion) return;
          setRecord((r) => ({ ...r, status: "ready-for-review", learning: { ...r.learning, review: { criterion, question: question.trim(), requestedAt: new Date().toISOString(), ...(recheck && change.trim() ? { change: change.trim() } : {}) } } }));
        }}>
          {recheck && <p className="muted">Last review: version {recheck.revision}, {recheck.criterion}, {recheck.outcome ? outcomeLabels[recheck.outcome] : "comments only"}. Ask for the same criterion to be checked again.</p>}
          <label htmlFor={`${id}-criterion`}>Which criterion should they check?</label>
          <select id={`${id}-criterion`} value={criterion} onChange={(e) => setCriterion(e.target.value)}>
            {criteria.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
          <label htmlFor={`${id}-question`}>Your question for the reviewer</label>
          <textarea id={`${id}-question`} maxLength={1000} rows={3} value={question} onChange={(e) => setQuestion(e.target.value)} placeholder="For example: is my second entry really observed, or is it a guess?" />
          {recheck && <>
            <label htmlFor={`${id}-change`}>What you changed since version {recheck.revision}, or why you kept it</label>
            <textarea id={`${id}-change`} maxLength={2000} rows={3} value={change} onChange={(e) => setChange(e.target.value)} />
          </>}
          {!hasWork && <p className="muted">Add a reflection and either a work reference or worksheet answers first.</p>}
          <button className="primary" disabled={!hasWork || !question.trim() || pending}>Mark this version for review</button>
          <p className="muted">This saves a request with your work. It does not email or message anyone.</p>
        </form>
      )}
    </section>
  );
}

export function SelfReview({ lesson, record, setRecord, readOnly }: { lesson: Lesson; record: RecordData; setRecord: SetPractice; readOnly: boolean }) {
  const id = useId();
  const criteria = criteriaFor(lesson);
  const saved = record.learning?.selfReview;
  const [criterion, setCriterion] = useState(saved?.criterion || criteria[0]?.name || "");
  const [level, setLevel] = useState<number | null>(saved?.level ?? null);
  const [evidence, setEvidence] = useState(saved?.evidence || "");
  const levels = criteria.find((c) => c.name === criterion)?.levels || genericLevels;
  return (
    <details className="self-review card" open={!!saved}>
      <summary>Self-review against a criterion{saved ? " · recorded" : ""}</summary>
      <p>Use this when no reviewer is available, or to check before asking. It is your own judgement: labelled as self-review, it never counts as reviewed or demonstrated.</p>
      {saved && <p className="review-status" role="status">Saved {humanDate(saved.at)} · {saved.criterion} · level {saved.level}: {(criteria.find((c) => c.name === saved.criterion)?.levels || genericLevels)[saved.level]} · external check pending.</p>}
      {!readOnly && (
        <form className="review-form" onSubmit={(e) => {
          e.preventDefault();
          if (level === null || !evidence.trim()) return;
          setRecord((r) => ({ ...r, learning: { ...r.learning, selfReview: { criterion, level, evidence: evidence.trim(), at: new Date().toISOString() } } }));
        }}>
          <label htmlFor={`${id}-criterion`}>Criterion</label>
          <select id={`${id}-criterion`} value={criterion} onChange={(e) => { setCriterion(e.target.value); setLevel(null); }}>
            {criteria.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
          </select>
          <fieldset className="level-choice">
            <legend>Which description matches your saved work?</legend>
            {levels.map((text, i) => (
              <label key={i} className="choice-option"><input type="radio" name={`${id}-level`} checked={level === i} onChange={() => setLevel(i)} /><span><strong>{i}</strong> {text}</span></label>
            ))}
          </fieldset>
          <label htmlFor={`${id}-evidence`}>Where your work shows it (name the answer or file)</label>
          <textarea id={`${id}-evidence`} rows={3} maxLength={2000} value={evidence} onChange={(e) => setEvidence(e.target.value)} />
          <button className="secondary" disabled={level === null || !evidence.trim()}>Save self-review</button>
        </form>
      )}
    </details>
  );
}

type Changed = { label: string; before: string; now: string };
function changesSince(lesson: Lesson, before: RecordData, now: RecordData): Changed[] {
  const fields = lesson.apprenticeship?.worksheet?.flatMap((s) => s.fields) || [];
  const rows: Changed[] = fields
    .filter((f) => (before.worksheet?.[f.id] || "") !== (now.worksheet?.[f.id] || ""))
    .map((f) => ({ label: f.label, before: before.worksheet?.[f.id] || "(empty)", now: now.worksheet?.[f.id] || "(empty)" }));
  if (before.notes !== now.notes) rows.push({ label: "Notes and next action", before: before.notes || "(empty)", now: now.notes || "(empty)" });
  if (before.submission !== now.submission) rows.push({ label: "Work reference", before: before.submission || "(empty)", now: now.submission || "(empty)" });
  return rows;
}

// Before and after: what changed in the saved work since the version a
// reviewer read. The earlier version is kept by the server; nothing is lost.
function RepairTrail({ lesson, review, record }: { lesson: Lesson; review: Feedback; record: RecordData }) {
  const [state, setState] = useState<{ changes?: Changed[]; error?: string; loading?: boolean }>({});
  async function load() {
    setState({ loading: true });
    try {
      const r = await fetch(`/api/progress/history?lessonId=${encodeURIComponent(lesson.id)}&revision=${review.revision}`, { cache: "no-store" });
      if (!r.ok) throw Error();
      const v: { record: RecordData } = await r.json();
      setState({ changes: changesSince(lesson, v.record, record) });
    } catch {
      setState({ error: "The reviewed version could not be loaded. Reconnect and try again." });
    }
  }
  return (
    <div className="repair-trail">
      {!state.changes && <button type="button" className="secondary" onClick={load} disabled={state.loading}>{state.loading ? "Loading version " + review.revision + "…" : `Compare with version ${review.revision}`}</button>}
      {state.error && <p role="alert">{state.error}</p>}
      {state.changes && (state.changes.length ? (
        <div className="table-scroll" tabIndex={0} role="region" aria-label={`Changes since version ${review.revision}`}>
          <table className="tool-table">
            <thead><tr><th scope="col">Answer</th><th scope="col">Version {review.revision}</th><th scope="col">Now</th></tr></thead>
            <tbody>{state.changes.map((c) => <tr key={c.label}><th scope="row">{c.label}</th><td>{c.before}</td><td>{c.now}</td></tr>)}</tbody>
          </table>
        </div>
      ) : <p role="status">Nothing has changed since version {review.revision}. If you are keeping the work as it is, explain why in your recheck request.</p>)}
    </div>
  );
}

export function FeedbackList({ lesson, feedback, record, error }: { lesson: Lesson; feedback: Feedback[]; record: RecordData; error: string }) {
  const latestCreator = feedback.find((f) => f.source === "creator");
  return (
    <section className="feedback-list" aria-label="Feedback">
      <h3>Feedback</h3>
      {error && <p role="status">{error}</p>}
      {!feedback.length && <p>No feedback yet.</p>}
      {feedback.map((f) => (
        <article key={f.id} className={`feedback-item is-${f.source}`}>
          <p className="feedback-head">
            <strong>{f.source === "ai" ? "AI critique" : "Creator review"}</strong> · version {f.revision} · {humanDate(f.created_at)}
            {f.criterion && <> · {f.criterion}</>}
            {f.outcome && <span className={`outcome-badge is-${f.outcome}`}>{outcomeLabels[f.outcome]}</span>}
          </p>
          {f.source === "ai" && <p className="muted">Practice feedback from an AI tool. It is not a review outcome and does not mark any skill as shown.</p>}
          {f.evidence && <p><strong>Evidence looked at:</strong> {f.evidence}</p>}
          <p>{f.body}</p>
          {f.nextAction && <p><strong>Next action:</strong> {f.nextAction}</p>}
          {f === latestCreator && <RepairTrail lesson={lesson} review={f} record={record} />}
        </article>
      ))}
    </section>
  );
}

export function CreatorReviewForm({ lesson, record, endpoint, onSaved }: {
  lesson: Lesson; record: RecordData; endpoint: string; onSaved: (f: Feedback) => void;
}) {
  const id = useId();
  const criteria = criteriaFor(lesson);
  const request = record.learning?.review;
  const [criterion, setCriterion] = useState(request?.criterion || criteria[0]?.name || "");
  const [outcome, setOutcome] = useState<ReviewOutcome | "">("");
  const [evidence, setEvidence] = useState("");
  const [body, setBody] = useState("");
  const [nextAction, setNextAction] = useState("");
  const [message, setMessage] = useState("");
  const transfer = (record.worksheet?.["transfer-decision"] || "").trim();
  const levels = criteria.find((c) => c.name === criterion)?.levels;
  return (
    <form className="creator-review card" onSubmit={async (e) => {
      e.preventDefault();
      try {
        const latest = await fetch("/api/progress?lessonId=" + lesson.id, { cache: "no-store" }).then((r) => r.json());
        if (JSON.stringify(latest.record) !== JSON.stringify(record)) throw Error("Haru saved a newer version. Reopen the lesson before reviewing.");
        const r = await fetch(endpoint, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ id: crypto.randomUUID(), revision: latest.revision, body, criterion, ...(outcome ? { outcome } : {}), ...(evidence.trim() ? { evidence } : {}), ...(nextAction.trim() ? { nextAction } : {}) }),
        });
        if (!r.ok) throw Error((await r.json().catch(() => ({}))).error || "Could not save the review. A saved submission is required.");
        onSaved(await r.json());
        setBody(""); setEvidence(""); setNextAction(""); setOutcome("");
        setMessage("Review saved against the version you read. The learner sees it the next time their app checks for feedback; nothing is sent.");
      } catch (err) {
        setMessage(err instanceof Error ? err.message : "Review failed");
      }
    }}>
      <h3>Review this version</h3>
      {request ? (
        <div className="review-status"><p><strong>Requested {humanDate(request.requestedAt)}</strong> · criterion: {request.criterion}</p><p>Question: {request.question}</p>{request.change && <p>What changed or why it was kept: {request.change}</p>}</div>
      ) : <p className="muted">No review was requested for this version. You can still leave a review.</p>}
      <label htmlFor={`${id}-criterion`}>Criterion checked</label>
      <select id={`${id}-criterion`} value={criterion} onChange={(e) => setCriterion(e.target.value)}>
        {criteria.map((c) => <option key={c.name} value={c.name}>{c.name}</option>)}
      </select>
      {levels && <details><summary>Anchors for this criterion</summary><ol start={0}>{levels.map((t, i) => <li key={i}>{t}</li>)}</ol></details>}
      <fieldset className="level-choice">
        <legend>Outcome (optional)</legend>
        <label className="choice-option"><input type="radio" name={`${id}-outcome`} checked={outcome === ""} onChange={() => setOutcome("")} /><span>Comments only — no outcome recorded</span></label>
        <label className="choice-option"><input type="radio" name={`${id}-outcome`} checked={outcome === "needs-revision"} onChange={() => setOutcome("needs-revision")} /><span>Needs revision</span></label>
        <label className="choice-option"><input type="radio" name={`${id}-outcome`} checked={outcome === "meets-criterion"} onChange={() => setOutcome("meets-criterion")} /><span>Meets the criterion</span></label>
        <label className="choice-option"><input type="radio" name={`${id}-outcome`} disabled={!transfer} checked={outcome === "demonstrated-independently"} onChange={() => setOutcome("demonstrated-independently")} /><span>Demonstrated independently {transfer ? "— the new-case answer met the criterion with the allowed support" : "— needs the learner's answer on a new case first"}</span></label>
      </fieldset>
      {transfer && <details><summary>The learner's answer on a new case</summary><p>{transfer}</p></details>}
      <label htmlFor={`${id}-evidence`}>Evidence you looked at</label>
      <textarea id={`${id}-evidence`} rows={2} maxLength={2000} value={evidence} onChange={(e) => setEvidence(e.target.value)} placeholder="Name the answers or files you read." />
      <label htmlFor={`${id}-body`}>One or two important issues</label>
      <textarea id={`${id}-body`} rows={4} required maxLength={12000} value={body} onChange={(e) => setBody(e.target.value)} />
      <label htmlFor={`${id}-next`}>Next action for the learner</label>
      <input id={`${id}-next`} maxLength={1000} value={nextAction} onChange={(e) => setNextAction(e.target.value)} />
      <details>
        <summary>What a useful review looks like</summary>
        <p>“You labelled ‘the button is blue’ as observed correctly. ‘New users miss it’ still needs evidence. Revise that sentence into a hypothesis, then name an observation that could support or challenge it.”</p>
        <p className="muted">Name the evidence, one or two important issues and the next action. Keeping a decision with a good reason is a valid result.</p>
      </details>
      <button className="primary">Save review</button>
      {message && <p role="status">{message}</p>}
    </form>
  );
}

export type QueueItem = { lesson: Lesson; record: RecordData; revision?: number };
export function ReviewQueue({ items, reviews, open }: { items: QueueItem[]; reviews: ReviewSummary[]; open: (id: string) => void }) {
  const pending = items.filter(({ lesson, record, revision }) =>
    record.status === "ready-for-review" && !reviews.some((r) => r.lessonId === lesson.id && revision !== undefined && r.revision >= revision));
  return (
    <section className="review-queue card" aria-labelledby="review-queue-title">
      <h2 id="review-queue-title">Review requests</h2>
      {!pending.length && <p>No versions are waiting for review.</p>}
      <div className="compact-list">
        {pending.map(({ lesson, record, revision }) => (
          <button key={lesson.id} className="lesson-row" onClick={() => open(lesson.id)}>
            <strong className="lesson-title">{lesson.title}</strong>
            <span className="lesson-status">Version {revision ?? "?"}{record.learning?.review ? ` · ${record.learning.review.criterion}` : ""} <span aria-hidden>→</span></span>
            {record.learning?.review && <span className="lesson-description">“{record.learning.review.question}” · asked {humanDate(record.learning.review.requestedAt)}</span>}
          </button>
        ))}
      </div>
      <p className="muted">Requests appear here when Haru marks a version for review. Nobody is notified automatically.</p>
    </section>
  );
}

export function ReviewSettingsEditor({ settings, onSaved }: { settings: ReviewSettings | null | undefined; onSaved: (s: ReviewSettings) => void }) {
  const id = useId();
  const [name, setName] = useState(settings?.reviewerName || "");
  const [windowText, setWindowText] = useState(settings?.responseWindow || "");
  const [note, setNote] = useState(settings?.contactNote || "");
  const [message, setMessage] = useState("");
  useEffect(() => { if (settings) { setName(settings.reviewerName); setWindowText(settings.responseWindow); setNote(settings.contactNote); } }, [settings?.updatedAt]);
  return (
    <form className="review-form" onSubmit={async (e) => {
      e.preventDefault();
      try {
        const r = await fetch("/api/review-settings", { method: "PUT", headers: { "content-type": "application/json" }, body: JSON.stringify({ reviewerName: name, responseWindow: windowText, contactNote: note }) });
        if (!r.ok) throw Error((await r.json().catch(() => ({}))).error || "Could not save.");
        const v = await r.json();
        onSaved(v.settings);
        setMessage("Saved. Haru sees this beside every review request.");
      } catch (err) {
        setMessage(err instanceof Error ? err.message : "Could not save.");
      }
    }}>
      <p>Tell Haru who reviews her work and how long to expect. This is shown beside every review request; nothing is sent automatically.</p>
      <label htmlFor={`${id}-name`}>Reviewer name</label>
      <input id={`${id}-name`} required maxLength={80} value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor={`${id}-window`}>Expected response time</label>
      <input id={`${id}-window`} maxLength={120} value={windowText} onChange={(e) => setWindowText(e.target.value)} placeholder="For example: within five days" />
      <label htmlFor={`${id}-note`}>How to reach you if it is urgent</label>
      <input id={`${id}-note`} maxLength={300} value={note} onChange={(e) => setNote(e.target.value)} placeholder="For example: message me on the usual chat" />
      <button className="primary">Save review destination</button>
      {message && <p role="status">{message}</p>}
    </form>
  );
}
