import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  ArrowRight,
  BookOpen,
  Check,
  Circle,
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
import "./style.css";

type RecordData = {
  version: 1;
  notes: string;
  submission: string;
  minutes: number;
  status: "not-started" | "practicing" | "ready-for-review";
  updatedAt: string;
};
type InstallPrompt = Event & {
  prompt(): Promise<void>;
  userChoice: Promise<{ outcome: string }>;
};
const key = "harucourse:baseline:v1";
const empty: RecordData = {
  version: 1,
  notes: "",
  submission: "",
  minutes: 0,
  status: "not-started",
  updatedAt: "",
};
let loadProblem = false;
function readRecord(): RecordData {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return empty;
    const value = JSON.parse(raw);
    if (
      value.version !== 1 ||
      typeof value.notes !== "string" ||
      typeof value.submission !== "string" ||
      !Number.isFinite(value.minutes) ||
      value.minutes < 0 ||
      !["not-started", "practicing", "ready-for-review"].includes(
        value.status,
      ) ||
      typeof value.updatedAt !== "string"
    )
      throw new Error("Invalid record");
    return value;
  } catch {
    loadProblem = true;
    return empty;
  }
}
function download(name: string, text: string, type = "text/markdown") {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
function App() {
  const [record, setRecord] = useState(readRecord);
  const [tab, setTab] = useState("Today");
  const [lesson, setLesson] = useState(false);
  const [message, setMessage] = useState(
    loadProblem
      ? "Saved data could not be read. Existing storage has not been overwritten. Export any recoverable work before saving again."
      : "",
  );
  const [prompt, setPrompt] = useState<InstallPrompt | null>(null);
  const [update, setUpdate] = useState(false);
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
            "Offline setup did not finish. You can continue online and try reloading later.",
          ),
      });
  }, []);
  function save(status = record.status) {
    if (
      status === "ready-for-review" &&
      (!record.notes.trim() || !record.submission.trim())
    ) {
      setMessage(
        "Add a reflection and a reference to your work before marking it ready for review.",
      );
      return;
    }
    const next = { ...record, status, updatedAt: new Date().toISOString() };
    try {
      localStorage.setItem(key, JSON.stringify(next));
      setRecord(next);
      setMessage("Saved on this device.");
    } catch {
      setMessage(
        "This browser could not save your work. Download a backup before leaving.",
      );
    }
  }
  const statusLabel = {
    "not-started": "Not started",
    practicing: "In practice",
    "ready-for-review": "Ready for review",
  }[record.status];
  function exportReview() {
    download(
      "haru-baseline-review.md",
      `# Haru Course — review package\n\nLesson: ${baseline.id}\nStatus: ${statusLabel} (self-reported; not assessed)\nTime: ${record.minutes} minutes\n\n## Brief\n${baseline.brief}\n\n## Expected work\n${baseline.deliverable}\n\n## Review rubric\n${baseline.rubric.map((r) => "- " + r).join("\n")}\n\n## Learner reflection\n${record.notes || "Not provided"}\n\n## Submission reference\n${record.submission || "Not provided"}\n\n## Instructions for reviewer\nAsk for actual screenshots or files if the reference is inaccessible. Do not infer visual quality from a URL. Identify strengths, specific issues, supporting evidence, and a bounded revision exercise. Label AI feedback. Do not claim this assessment has been saved to the course.\n`,
    );
    setMessage(
      "Review package downloaded. Attach your design files when asking for feedback.",
    );
  }
  const nav = [
    { name: "Today", icon: LayoutGrid },
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
          onClick={() => {
            setTab("Today");
            setLesson(false);
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
                setTab(name);
                setLesson(false);
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
            {online ? "On-device storage" : "Offline · local practice"}
          </span>
        </header>
        <main id="main">
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
          {lesson ? (
            <>
              <button className="text-button" onClick={() => setLesson(false)}>
                ← Back to {tab.toLowerCase()}
              </button>
              <div className="eyebrow">LEVEL 0 · BASELINE · 120 MINUTES</div>
              <h1>{baseline.title}</h1>
              <p className="intro">{baseline.purpose}</p>
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
                  <h2>Your two-hour session</h2>
                  {baseline.steps.map((step, i) => (
                    <div className="step" key={step.title}>
                      <span className="step-number">{i + 1}</span>
                      <div>
                        <h3>
                          {step.title}
                          <small>{step.minutes} min</small>
                        </h3>
                        <p>{step.text}</p>
                      </div>
                    </div>
                  ))}
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
                    onClick={() => {
                      setTab("My practice");
                      setLesson(false);
                    }}
                  >
                    Save your practice <ArrowRight size={17} />
                  </button>
                </section>
              </div>
            </>
          ) : tab === "Today" ? (
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
                  <span>YOUR PACE</span>
                  <strong>
                    2 hours <small>/ session</small>
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
                        setLesson(true);
                        if (record.status === "not-started") save("practicing");
                      }}
                    >
                      Open baseline exercise <ArrowUpRight size={18} />
                    </button>
                    <span>
                      <Clock3 size={15} /> 120 min
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
                    Five focused sessions a week. Room to catch up. Permission
                    to rest.
                  </p>
                  <div
                    className="week"
                    aria-label="Suggested schedule: five practice days, one flexible day, one rest day"
                  >
                    {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
                      <span key={i} className={i < 5 ? "study-day" : ""}>
                        {d}
                      </span>
                    ))}
                  </div>
                  <small>10 core hours · flexible weekends</small>
                </section>
              </div>
              <div className="section-heading">
                <h2>The journey ahead</h2>
                <button
                  className="text-button"
                  onClick={() => setTab("Course map")}
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
                The baseline is available now. Later lessons are being
                developed.
              </p>
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
                        onClick={() => setLesson(true)}
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
                    <span className="pill pale">{statusLabel}</span>
                  </div>
                  <label htmlFor="notes">
                    What did you learn? What needs work?
                  </label>
                  <textarea
                    id="notes"
                    rows={7}
                    maxLength={20000}
                    value={record.notes}
                    onChange={(e) =>
                      setRecord({ ...record, notes: e.target.value })
                    }
                    placeholder="Capture your assumptions, decisions, and questions…"
                  />
                  <label htmlFor="submission">
                    Link or reference to your work
                  </label>
                  <input
                    id="submission"
                    maxLength={2000}
                    value={record.submission}
                    onChange={(e) =>
                      setRecord({ ...record, submission: e.target.value })
                    }
                    placeholder="Figma link, shared file, or a local filename"
                  />
                  <small>
                    Files stay where you keep them. This app saves the
                    reference, not the file.
                  </small>
                  <label htmlFor="minutes">
                    Actual practice time (minutes)
                  </label>
                  <input
                    id="minutes"
                    type="number"
                    min="0"
                    max="1440"
                    step="1"
                    value={record.minutes}
                    onChange={(e) =>
                      setRecord({
                        ...record,
                        minutes: Math.min(
                          1440,
                          Math.max(0, Number(e.target.value)),
                        ),
                      })
                    }
                  />
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
                  <p className="muted">
                    Marking work ready does not grade it or send it to a mentor.
                    Save again after any changes.
                  </p>
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
                      Direct AI connections are planned. This export works
                      without connecting an account.
                    </p>
                  </section>
                  <section className="card backup-card">
                    <h3>Your work belongs to you.</h3>
                    <p>
                      Progress is stored in this browser. Download a backup
                      before clearing browser data or switching devices.
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
                      Download progress backup <Download size={16} />
                    </button>
                  </section>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="eyebrow">EVIDENCE OVER CHECKMARKS</div>
              <h1>Small steps. Real growth.</h1>
              <p className="intro">
                Practice is self-reported. Competency comes from reviewed work.
              </p>
              <div className="stats">
                <div>
                  <span>RECORDED PRACTICE</span>
                  <strong>
                    {record.minutes} <small>minutes</small>
                  </strong>
                </div>
                <div>
                  <span>AWAITING REVIEW</span>
                  <strong>
                    {record.status === "ready-for-review" ? 1 : 0}{" "}
                    <small>assignment</small>
                  </strong>
                </div>
                <div>
                  <span>ASSESSED MODULES</span>
                  <strong>
                    0 <small>so far</small>
                  </strong>
                </div>
              </div>
              <section className="card">
                <div className="section-heading">
                  <h2>Your starting point</h2>
                  <span className="pill pale">{statusLabel}</span>
                </div>
                <p>
                  {record.updatedAt
                    ? `Last saved ${new Date(record.updatedAt).toLocaleString()}.`
                    : "Start your baseline exercise to begin a record of your practice."}
                </p>
                <ul className="rubric">
                  {baseline.rubric.map((r) => (
                    <li key={r}>
                      <Circle size={13} /> {r} — not assessed
                    </li>
                  ))}
                </ul>
                <button
                  className="primary"
                  onClick={() => {
                    setTab("My practice");
                  }}
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
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
