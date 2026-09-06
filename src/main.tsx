import { modules } from "./modules";
import { LearningStudio } from "./LearningStudio";
import { navigate, useNavigation } from "./navigation";
import { emptyRecord, usePractice } from "./usePractice";
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Check,
  Clock3,
  Download,
  LayoutGrid,
  Leaf,
  Map,
  PencilLine,
  Sprout,
  TrendingUp,
} from "lucide-react";
import { registerSW } from "virtual:pwa-register";
import { baseline, levels } from "./course";
import { CloudPanel } from "./CloudPanel";
import { recordSchema, type RecordData, type User } from "../shared/record";
import { useTimer } from "./useTimer";
import {
  ConfidencePicker,
  PracticeSteps,
  SessionLog,
  SessionTimer,
  TimeAdjust,
} from "./SessionTimer";
import { practiceTotals, useCourseRecords } from "./useCourseRecords";
import { humanDate, humanDuration, statusLabel } from "./labels";
import { publishedLessons } from "./lessons";
import "./style.css";

type InstallPrompt = Event & {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: string }>;
};
const key = "harucourse:baseline:v1";
let loadProblem = false;
function readRecord(storageKey = key): RecordData {
  try {
    const raw =
      localStorage.getItem(storageKey) ||
      (storageKey === `${key}:haru` ? localStorage.getItem(key) : null);
    if (!raw) return emptyRecord;
    return recordSchema.parse(JSON.parse(raw));
  } catch {
    loadProblem = true;
    return emptyRecord;
  }
}
// The lesson a logged session belongs to, for the Progress page.
function lessonTitle(lessonId: string) {
  if (lessonId === baseline.id) return baseline.title;
  return publishedLessons.find((l) => l.id === lessonId)?.title ?? lessonId;
}
function download(name: string, text: string, type = "text/markdown") {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function App({
  user,
  onSession,
}: {
  user: User;
  onSession: (user: User | null) => void;
}) {
  const key = `harucourse:baseline:v1:${user.id}`;
  const {
    record,
    setRecord,
    status: syncStatus,
    conflict,
    resolve,
  } = usePractice(user, baseline.id, key);
  const { tab, baseline: lesson } = useNavigation();
  // The baseline timer lives here, beside its practice record, so it survives
  // switching between the baseline page and the My practice notebook. It
  // pauses itself whenever neither is on screen.
  const timer = useTimer({
    storageKey: `harucourse:timer:${user.id}:${baseline.id}`,
    enabled: user.role === "learner",
    active: lesson || tab === "My practice",
    setRecord,
  });
  const { records: courseRecords } = useCourseRecords(user);
  const totals = practiceTotals(courseRecords);
  const [message, setMessage] = useState(
    loadProblem
      ? "Saved work on this device could not be read. Nothing was overwritten — download a backup before saving again."
      : "",
  );
  const [prompt, setPrompt] = useState<InstallPrompt | null>(null);
  const [update, setUpdate] = useState(false);
  const [installDismissed, setInstallDismissed] = useState(false);
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    const install = (event: Event) => {
      event.preventDefault();
      setPrompt(event as InstallPrompt);
    };
    const connectivity = () => setOnline(navigator.onLine);
    window.addEventListener("beforeinstallprompt", install);
    window.addEventListener("online", connectivity);
    window.addEventListener("offline", connectivity);
    return () => {
      window.removeEventListener("beforeinstallprompt", install);
      window.removeEventListener("online", connectivity);
      window.removeEventListener("offline", connectivity);
    };
  }, []);
  useEffect(() => {
    if (import.meta.env.PROD)
      registerSW({
        onNeedRefresh: () => setUpdate(true),
        onRegisterError: () =>
          setMessage(
            "Offline mode isn’t ready yet. Everything works while you’re online; try reopening the app later.",
          ),
      });
  }, []);
  function save(status = record.status) {
    if (
      status === "ready-for-review" &&
      (!record.notes.trim() || !record.submission.trim())
    ) {
      setMessage(
        "Add your notes and a link to your work before marking it ready for review.",
      );
      return;
    }
    if (!recordSchema.safeParse({ ...record, status }).success) {
      setMessage(
        "Something in this record could not be saved. Check that the total time is whole minutes.",
      );
      return;
    }
    const next = { ...record, status, updatedAt: new Date().toISOString() };
    try {
      localStorage.setItem(key, JSON.stringify(next));
      setRecord(next);
      setMessage("Saved. It will upload automatically.");
    } catch {
      setMessage(
        "This browser could not save your work. Download a backup before leaving.",
      );
    }
  }
  function exportReview() {
    const sessions = (record.sessions ?? [])
      .map(
        (s) =>
          `- ${humanDate(s.startedAt)} · ${s.minutes} min${
            s.manual ? " (added by hand)" : s.step ? ` · step ${s.step}` : ""
          }`,
      )
      .join("\n");
    download(
      "haru-baseline-review.md",
      `# Haru Course — review package\n\nLesson: ${baseline.id}\nStatus: ${statusLabel(record.status)} (self-reported; not assessed)\nTime: ${record.minutes} minutes total${record.confidence ? `\nConfidence: ${record.confidence}/5 (self-rated)` : ""}\n\n## Sessions\n${sessions || "None logged"}\n\n## Brief\n${baseline.brief}\n\n## Expected work\n${baseline.deliverable}\n\n## Review rubric\n${baseline.rubric.map((r) => "- " + r).join("\n")}\n\n## Learner reflection\n${record.notes || "Not provided"}\n\n## Submission reference\n${record.submission || "Not provided"}\n\n## Instructions for reviewer\nAsk for actual screenshots or files if the reference is inaccessible. Do not infer visual quality from a URL. Identify strengths, specific issues, supporting evidence, and a bounded revision exercise. Label AI feedback. Do not claim this assessment has been saved to the course.\n`,
    );
    setMessage(
      "Review package downloaded. Attach your design files when asking for feedback.",
    );
  }
  const nav = [
    { name: "Lessons", icon: BookOpen },
    { name: "Dashboard", icon: LayoutGrid },
    { name: "Course map", icon: Map },
    { name: "My practice", icon: PencilLine },
    { name: "Progress", icon: TrendingUp },
  ];
  return (
    <div className="shell">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <aside className="sidebar">
        <a
          className="brand"
          href="#"
          onClick={(event) => {
            event.preventDefault();
            navigate({ tab: "Dashboard", baseline: false, lesson: null });
          }}
        >
          <span className="brand-mark">h.</span>
          <span>
            haru<span className="brand-small">DESIGN APPRENTICESHIP</span>
          </span>
        </a>
        <div className="workspace-label">YOUR LEARNING SPACE</div>
        <nav aria-label="Main navigation">
          {nav.map(({ name, icon: Icon }) => (
            <button
              key={name}
              aria-current={tab === name ? "page" : undefined}
              onClick={() => {
                navigate({ tab: name, baseline: false, lesson: null });
                setMessage("");
              }}
            >
              <Icon size={19} />
              {name}
              {tab === name && <span className="nav-dot" />}
            </button>
          ))}
        </nav>
        <div className="sidebar-note">
          <Sprout size={25} />
          <p>Good design takes practice.</p>
          <span>
            A little curiosity.
            <br />A little progress. Every day.
          </span>
        </div>
        <div className="profile">
          <span className="avatar">H</span>
          <div>
            Haru’s workspace<small>Personal learning journey</small>
          </div>
        </div>
      </aside>
      <div className="content">
        <header className="topbar">
          <span>
            My apprenticeship{" "}
            <span className="crumb">
              / {lesson ? "Baseline exercise" : tab}
            </span>
          </span>
          <span className="device-status">
            <span className={online ? "online-dot" : "offline-dot"} />
            {online ? "Online · saves automatically" : "Offline · saving on this device"}
          </span>
        </header>
        <main id="main">
          {(lesson || tab === "My practice") && (
            <p className="notice" role="status">
              {syncStatus}
            </p>
          )}
          {conflict && (
            <section className="card">
              <h2>Which version do you want to keep?</h2>
              <p>
                Your baseline was also edited on another device or tab. Nothing
                here has been lost.
              </p>
              <button className="secondary" onClick={() => resolve(true)}>
                Use the other version (a copy of this one is downloaded first)
              </button>
              <button className="secondary" onClick={() => resolve(false)}>
                Keep this device’s version
              </button>
            </section>
          )}
          {message && (
            <div className="notice" role="status">
              {message}
            </div>
          )}
          {update && (
            <div className="notice">
              A new course version is available. Save your work, then close and
              reopen the app to update.
            </div>
          )}
          {prompt && !installDismissed && (
            <div className="notice install-notice">
              <span>
                Install Haru Course for a full-screen app and offline lessons.
              </span>
              <span className="install-actions">
                <button
                  className="primary"
                  onClick={async () => {
                    await prompt.prompt();
                    await prompt.userChoice;
                    setPrompt(null);
                  }}
                >
                  <Download size={15} /> Install
                </button>
                <button
                  className="text-button"
                  onClick={() => setInstallDismissed(true)}
                >
                  Not now
                </button>
              </span>
            </div>
          )}
          {lesson ? (
            <>
              <button
                className="text-button"
                onClick={() => navigate({ baseline: false })}
              >
                ← Back to {tab.toLowerCase()}
              </button>
              <div className="eyebrow">LEVEL 0 · BASELINE · ABOUT 2 HOURS</div>
              <h1>{baseline.title}</h1>
              <p className="intro">{baseline.purpose}</p>
              <SessionTimer
                timer={timer}
                record={record}
                role={user.role}
                steps={baseline.steps}
              />
              <section className="card lesson-brief">
                <span className="eyebrow">YOUR BRIEF</span>
                <h2>A better workshop reservation</h2>
                <p>{baseline.brief}</p>
                <p>
                  <strong>Learn:</strong> how you currently frame, investigate,
                  and communicate a product problem. Use your existing
                  knowledge; no preparatory reading is required.
                </p>
              </section>
              <div className="lesson-layout">
                <section className="card">
                  <h2>Your session, step by step</h2>
                  {user.role === "learner" && (
                    <p className="muted">
                      Tap a step while the timer runs to record time against
                      it. Nothing here marks a step done.
                    </p>
                  )}
                  <PracticeSteps
                    steps={baseline.steps}
                    current={timer.snapshot.step}
                    canPick={user.role === "learner"}
                    onPick={timer.markStep}
                    sessions={record.sessions}
                  />
                  <p className="muted">
                    This diagnostic informs your learning plan. It is not a
                    final portfolio project.
                  </p>
                </section>
                <section className="card">
                  <h2>What to hand in</h2>
                  <p>{baseline.deliverable}</p>
                  <h3>Check your understanding</h3>
                  <ul className="rubric">
                    {baseline.rubric.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                  <p className="muted">
                    Self-rate each 0–3: absent, needs help, independent, or
                    strong transfer. Your mentor reviews the evidence before
                    deciding what you can skip.
                  </p>
                  <button
                    className="primary"
                    onClick={() =>
                      navigate({
                        tab: "My practice",
                        baseline: false,
                        lesson: null,
                      })
                    }
                  >
                    Save your practice <ArrowRight size={17} />
                  </button>
                </section>
              </div>
            </>
          ) : tab === "Lessons" ? (
            <LearningStudio user={user} />
          ) : tab === "Dashboard" ? (
            <>
              <div className="greeting">
                <div>
                  <div className="eyebrow">A LITTLE PROGRESS, EVERY DAY</div>
                  <h1>
                    Your next chapter
                    <br />
                    starts with curiosity.
                  </h1>
                  <p className="intro">
                    Welcome, Haru. Bring your eye for design.
                    <br />
                    We’ll build the product thinking, one practice at a time.
                  </p>
                </div>
                <div className="greeting-art" aria-hidden="true">
                  <span className="orbit one" />
                  <span className="orbit two" />
                  <div className="art-square" />
                  <div className="art-circle" />
                  <div className="art-caption">observe. make. refine.</div>
                </div>
              </div>
              <div className="stats">
                <div>
                  <span>PRACTICE SO FAR</span>
                  <strong>
                    {humanDuration(totals.minutes)}
                    {totals.sessions.length ? (
                      <small>
                        {" "}
                        / {totals.sessions.length} session
                        {totals.sessions.length === 1 ? "" : "s"}
                      </small>
                    ) : null}
                  </strong>
                </div>
                <div>
                  <span>THE APPROACH</span>
                  <strong>Learn → make → reflect</strong>
                </div>
                <div>
                  <span>YOUR DESTINATION</span>
                  <strong>A portfolio with purpose</strong>
                </div>
              </div>
              {totals.started > 0 && (
                <section className="card continue-card">
                  <span className="eyebrow">PICK UP WHERE YOU LEFT OFF</span>
                  <h2>Your lessons are waiting.</h2>
                  <p>
                    {totals.started} lesson{totals.started === 1 ? "" : "s"} in
                    progress. Your saved place is one tap away.
                  </p>
                  <button
                    className="primary"
                    onClick={() =>
                      navigate({ tab: "Lessons", baseline: false, lesson: null })
                    }
                  >
                    Continue learning →
                  </button>
                </section>
              )}
              <div className="section-heading">
                <h2>A good place to begin</h2>
                <span>LEVEL 0 · FIND YOUR STARTING POINT</span>
              </div>
              <div className="today-grid">
                <section className="feature-card">
                  <div className="pill">
                    <span /> YOUR FIRST PRACTICE
                  </div>
                  <h2>{baseline.title}</h2>
                  <p>
                    A small design challenge to discover your strengths.
                    <br />
                    No preparation. No perfect answers needed.
                  </p>
                  <div className="feature-bottom">
                    <button
                      className="light-button"
                      onClick={() => {
                        navigate({ baseline: true });
                        if (record.status === "not-started") save("practicing");
                      }}
                    >
                      Open baseline exercise <ArrowUpRight size={18} />
                    </button>
                    <span>
                      <Clock3 size={15} /> About 2 hours
                    </span>
                  </div>
                  <div className="feature-art" aria-hidden="true">
                    ✳
                  </div>
                </section>
                <section className="card rhythm">
                  <Leaf size={25} />
                  <h3>
                    Build a rhythm,
                    <br />
                    not a streak.
                  </h3>
                  <p>
                    Choose when to study. Pause after any step and return to
                    your saved section.
                  </p>
                  <small>
                    No completion deadline. Two hours is an optional session
                    guide.
                  </small>
                </section>
              </div>
              <div className="section-heading">
                <h2>The journey ahead</h2>
                <button
                  className="text-button"
                  onClick={() =>
                    navigate({
                      tab: "Course map",
                      baseline: false,
                      lesson: null,
                    })
                  }
                >
                  Explore the course <ArrowRight size={16} />
                </button>
              </div>
              <div className="preview-levels">
                {levels.slice(1, 4).map((level, i) => (
                  <article className="card" key={level.title}>
                    <span className="level-label">0{i + 1} / FOUNDATIONS</span>
                    <h3>{level.title}</h3>
                    <p>{level.description}</p>
                    <span className="muted">Planned · {level.hours} hours</span>
                  </article>
                ))}
              </div>
            </>
          ) : tab === "Course map" ? (
            <>
              <div className="eyebrow">THE BIG PICTURE</div>
              <h1>A practice that grows with you.</h1>
              <p className="intro">
                620 planned hours, built around real work and thoughtful
                iteration.
                <br />
                {modules.filter((m) => m.status === "published").length} modules
                are available in Lessons, including the baseline. The remaining{" "}
                {modules.filter((m) => m.status === "planned").length} are
                mapped and not yet authored.
              </p>
              <section className="card">
                <h2>Modules in order</h2>
                <ol>
                  {modules.map((m) => (
                    <li key={m.id}>
                      <strong>
                        Level {m.level} · {m.title}
                      </strong>{" "}
                      — {m.status}. {m.output}
                    </li>
                  ))}
                </ol>
              </section>
              <div className="level-list">
                {levels.map((level, i) => (
                  <article className="card level-row" key={level.title}>
                    <span className="level-number">0{i}</span>
                    <div>
                      <span className="eyebrow">
                        LEVEL {i} · {level.hours} HOURS
                      </span>
                      <h2>{level.title}</h2>
                      <p>{level.description}</p>
                    </div>
                    {i === 0 ? (
                      <button
                        className="secondary"
                        onClick={() => navigate({ baseline: true })}
                      >
                        Open baseline <ArrowRight size={16} />
                      </button>
                    ) : (
                      <span className="planned">In planning</span>
                    )}
                  </article>
                ))}
              </div>
              <p className="muted">
                Hours are provisional. Advancement depends on reviewed work, not
                elapsed time. Advanced practice continues beyond the job-ready
                stage.
              </p>
            </>
          ) : tab === "My practice" ? (
            <>
              <div className="eyebrow">MAKE YOUR THINKING VISIBLE</div>
              <h1>Your practice notebook.</h1>
              <p className="intro">
                Keep the work, the questions, and the decisions behind it.
              </p>
              <div className="lesson-layout">
                <form
                  className="card practice-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    save(
                      record.status === "not-started"
                        ? "practicing"
                        : record.status,
                    );
                  }}
                >
                  <div className="section-heading">
                    <h2>Baseline reflection</h2>
                    <span className="pill pale">
                      {statusLabel(record.status)}
                    </span>
                  </div>
                  <SessionTimer
                    timer={timer}
                    record={record}
                    role={user.role}
                    steps={baseline.steps}
                  />
                  <label htmlFor="notes">
                    What did you learn? What needs work?
                  </label>
                  <textarea
                    id="notes"
                    rows={7}
                    maxLength={20000}
                    value={record.notes}
                    disabled={user.role === "creator"}
                    onChange={(e) =>
                      setRecord((r) => ({ ...r, notes: e.target.value }))
                    }
                    placeholder="Capture your assumptions, decisions, and questions…"
                  />
                  <label htmlFor="submission">
                    Link to your work (Figma, Drive, or a file name)
                  </label>
                  <input
                    id="submission"
                    maxLength={2000}
                    value={record.submission}
                    disabled={user.role === "creator"}
                    onChange={(e) =>
                      setRecord((r) => ({ ...r, submission: e.target.value }))
                    }
                    placeholder="Figma link, shared file, or a local filename"
                  />
                  <small>
                    Files stay where you keep them. This app saves the link or
                    name, not the file.
                  </small>
                  {user.role === "learner" && (
                    <>
                      <TimeAdjust
                        minutes={record.minutes}
                        onAdd={timer.addMinutes}
                        onSetTotal={timer.setTotal}
                      />
                      <h3>How confident do you feel about this work?</h3>
                      <ConfidencePicker
                        value={record.confidence}
                        onChange={timer.setConfidence}
                      />
                      <small>
                        A note to yourself, not a grade. Your reviewer sees it
                        alongside your work.
                      </small>
                      <div className="actions">
                        <button className="primary" type="submit">
                          Save practice <Check size={17} />
                        </button>
                        <button
                          className="secondary"
                          type="button"
                          onClick={() => save("ready-for-review")}
                        >
                          Ready for review
                        </button>
                      </div>
                      <details>
                        <summary>How reviews work</summary>
                        <p>
                          Marking work ready tells your reviewer it is worth a
                          look. It does not grade it, send it anywhere, or mark
                          the exercise finished. Changes save automatically
                          either way.
                        </p>
                      </details>
                    </>
                  )}
                </form>
                <div>
                  <section className="card">
                    <BookOpen size={24} />
                    <h2>Get a useful critique.</h2>
                    <p>
                      Export the brief, rubric, and your reflection. Share the
                      package and your actual design files with your mentor or
                      an AI app.
                    </p>
                    <button className="secondary" onClick={exportReview}>
                      <Download size={16} /> Export review package
                    </button>
                    <p className="muted">
                      You can also connect a compatible AI app below. This
                      export works without connecting an account.
                    </p>
                  </section>
                  <details className="card backup-card">
                    <summary>Your work belongs to you — backups</summary>
                    <p>
                      Your work saves on this device and uploads automatically.
                      Wait for “Saved online” before clearing browser data. A
                      backup is an extra copy you keep yourself.
                    </p>
                    <button
                      className="text-button"
                      onClick={() =>
                        download(
                          "haru-progress.json",
                          JSON.stringify(record, null, 2),
                          "application/json",
                        )
                      }
                    >
                      Download a backup <Download size={16} />
                    </button>
                    <label className="import-label" htmlFor="backup-import">
                      Restore from a backup file
                    </label>
                    <input
                      id="backup-import"
                      type="file"
                      accept="application/json,.json"
                      onChange={async (e) => {
                        const file = e.target.files?.[0];
                        e.target.value = "";
                        if (!file) return;
                        try {
                          if (file.size > 65536)
                            throw new Error(
                              "Backup must be smaller than 64 KB.",
                            );
                          const imported = recordSchema.parse(
                            JSON.parse(await file.text()),
                          );
                          download(
                            "haru-before-import.json",
                            JSON.stringify(record, null, 2),
                            "application/json",
                          );
                          localStorage.setItem(key, JSON.stringify(imported));
                          setRecord(imported);
                          setMessage(
                            "Backup restored. A copy of what was here before was downloaded first; the restored work will upload automatically.",
                          );
                        } catch {
                          setMessage(
                            "Could not restore this backup. Check its format and size; existing work was preserved.",
                          );
                        }
                      }}
                    />
                  </details>
                </div>
              </div>
              <CloudPanel
                initialUser={user}
                onSession={onSession}
                record={record}
                onLoad={(next) => {
                  download(
                    "haru-before-cloud-load.json",
                    JSON.stringify(record, null, 2),
                    "application/json",
                  );
                  setRecord(next);
                  try {
                    localStorage.setItem(key, JSON.stringify(next));
                  } catch {
                    setMessage(
                      "Cloud record loaded in memory, but local storage failed. Download a backup before leaving.",
                    );
                  }
                }}
              />
            </>
          ) : (
            <>
              <div className="eyebrow">EVIDENCE OVER CHECKMARKS</div>
              <h1>Small steps. Real growth.</h1>
              <p className="intro">
                Time and confidence are what you recorded. Competency comes
                from reviewed work.
              </p>
              <div className="stats">
                <div>
                  <span>PRACTICE SO FAR</span>
                  <strong>{humanDuration(totals.minutes)}</strong>
                </div>
                <div>
                  <span>LESSONS IN PROGRESS</span>
                  <strong>
                    {totals.started}{" "}
                    <small>of {publishedLessons.length + 1}</small>
                  </strong>
                </div>
                <div>
                  <span>READY FOR REVIEW</span>
                  <strong>
                    {totals.ready}{" "}
                    <small>
                      {totals.ready === 1 ? "lesson" : "lessons"}
                    </small>
                  </strong>
                </div>
              </div>
              <section className="card">
                <div className="section-heading">
                  <h2>Your sessions</h2>
                  <span>
                    {totals.sessions.length
                      ? `${totals.sessions.length} recorded`
                      : "NONE YET"}
                  </span>
                </div>
                {totals.sessions.length ? (
                  <ol className="practice-steps session-log">
                    {totals.sessions.slice(0, 30).map((s, i) => (
                      <li
                        className="step session-row"
                        key={`${s.lessonId}-${s.startedAt}-${s.step ?? 0}-${i}`}
                      >
                        <span className="step-number">{s.step ?? "·"}</span>
                        <div>
                          <h3>
                            {humanDate(s.startedAt)}
                            <small>
                              {lessonTitle(s.lessonId)}
                              {s.manual
                                ? " · added by hand"
                                : s.step
                                  ? ` · step ${s.step}`
                                  : ""}
                            </small>
                          </h3>
                          <p>{humanDuration(s.minutes)}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p>
                    Start the timer on any lesson and your sessions will appear
                    here, with the date, the lesson and how long you spent.
                  </p>
                )}
                {totals.sessions.length > 30 && (
                  <details>
                    <summary>Show earlier sessions</summary>
                    <SessionLog sessions={totals.sessions.slice(30)} limit={200} />
                  </details>
                )}
              </section>
              <section className="card">
                <div className="section-heading">
                  <h2>How you felt about your work</h2>
                </div>
                {courseRecords.some((r) => r.record.confidence) ? (
                  <ul className="rubric">
                    {courseRecords
                      .filter((r) => r.record.confidence)
                      .map((r) => (
                        <li key={r.lessonId}>
                          {lessonTitle(r.lessonId)} — {r.record.confidence} of 5
                        </li>
                      ))}
                  </ul>
                ) : (
                  <p>
                    After a session, rate how confident you feel from 1 to 5.
                    It is a note to yourself, and it helps your reviewer know
                    where to look.
                  </p>
                )}
              </section>
              <section className="card">
                <div className="section-heading">
                  <h2>Your starting point</h2>
                  <span className="pill pale">{statusLabel(record.status)}</span>
                </div>
                <p>
                  {record.updatedAt
                    ? `Baseline last saved ${new Date(record.updatedAt).toLocaleString()}.`
                    : "Start your baseline exercise to begin a record of your practice."}
                </p>
                <button
                  className="primary"
                  onClick={() =>
                    navigate({
                      tab: "My practice",
                      baseline: false,
                      lesson: null,
                    })
                  }
                >
                  Open practice notebook <ArrowRight size={16} />
                </button>
              </section>
            </>
          )}
          <footer>
            <span>Made for a thoughtful design journey.</span>
            <button
              className="text-button"
              onClick={async () => {
                if (prompt) {
                  await prompt.prompt();
                  await prompt.userChoice;
                  setPrompt(null);
                } else
                  setMessage(
                    "Install from your browser menu: “Install app” on supported desktop/Android browsers, or “Add to Home Screen” on iPhone/iPad. The production app supports offline lessons after the first online visit.",
                  );
              }}
            >
              <Download size={14} /> Install course app
            </button>
          </footer>
        </main>
      </div>
    </div>
  );
}
function SessionGate() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const rememberedKey = "harucourse:remembered-session";
  function changeSession(next: User | null) {
    setUser(next);
    try {
      localStorage.removeItem(rememberedKey);
    } catch {}
    if (next) void restore();
  }
  async function restore() {
    let networkFailed = false;
    setLoading(true);
    setError("");
    try {
      const response = await fetch("/api/session", {
        cache: "no-store",
        credentials: "same-origin",
      }).catch((error) => {
        networkFailed = true;
        throw error;
      });
      if (!response.ok)
        throw new Error(
          "Could not check your session. Connect to the internet and try again.",
        );
      const value = await response.json();
      setUser(value.user);
      try {
        if (value.user)
          localStorage.setItem(
            rememberedKey,
            JSON.stringify({ user: value.user, expiresAt: value.expiresAt }),
          );
        else localStorage.removeItem(rememberedKey);
      } catch {}
    } catch {
      try {
        const cached = JSON.parse(
          localStorage.getItem(rememberedKey) || "null",
        );
        if (
          networkFailed &&
          cached?.expiresAt > Date.now() &&
          typeof cached.user?.id === "string" &&
          ["learner", "creator"].includes(cached.user.role)
        ) {
          setUser(cached.user);
          return;
        }
      } catch {}
      setError("Connect to the internet to restore your saved sign-in.");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    void restore();
  }, []);
  if (user) return <App key={user.id} user={user} onSession={changeSession} />;
  return (
    <main className="login-page">
      <div className="login-intro">
        <span className="eyebrow">HARU / DESIGN PRACTICE</span>
        <h1>
          A little practice.
          <br />A new perspective.
        </h1>
        <p>
          Your personal space to learn, make, and grow as a product designer.
        </p>
      </div>
      <div className="login-content">
        {loading ? (
          <section className="card" role="status">
            Restoring your session…
          </section>
        ) : error ? (
          <section className="card">
            <p role="alert">{error}</p>
            <button className="primary" onClick={() => void restore()}>
              Try again
            </button>
          </section>
        ) : (
          <CloudPanel
            record={emptyRecord}
            onLoad={() => {}}
            onSession={changeSession}
          />
        )}
      </div>
    </main>
  );
}
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SessionGate />
  </StrictMode>,
);
