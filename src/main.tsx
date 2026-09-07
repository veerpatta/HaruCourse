import { navigate as navigateHistory, useNavigation } from './navigation';
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import { BookOpen, Map, PencilLine } from "lucide-react";
import { modules } from "./modules";
import { levels, baseline } from "./course";
import { publishedLessons as lessons } from "./lessons";
import { LearningStudio } from "./LearningStudio";
import { usePosition } from './usePosition';
import { CloudPanel } from "./CloudPanel";
import { AccountBackup } from "./AccountBackup";
import { WorkspaceGuide, PortfolioPath, JourneyMilestone } from './ApprenticeshipPanel';
import { emptyRecord as empty } from "./usePractice";
import { unsavedDrafts, updateMessage } from "./updates";
import type { User } from "../shared/record";
import "./style.css";

function App({
  user,
  onSession,
}: {
  user: User;
  onSession: (user: User | null) => void;
}) {
  const navigation = useNavigation();
  const bookmark = usePosition(user.id);
  const tab = navigation.tab;
  const [navigationVersion, setNavigationVersion] = useState(0);
  const target = navigation.lesson ? {id:navigation.lesson, section:navigation.section || "learn"} : undefined;
  const [message, setMessage] = useState("");
  // Set when a newer course version is installed and waiting. Holding the
  // activation function here is the whole point: without it the notice was
  // advice the learner could not act on.
  const [applyUpdate, setApplyUpdate] = useState<(() => void) | null>(null);
  const [updateNote, setUpdateNote] = useState("");
  const [online, setOnline] = useState(navigator.onLine);
  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    if (import.meta.env.PROD) {
      const updateSW = registerSW({
        onNeedRefresh: () => setApplyUpdate(() => () => void updateSW(true)),
        onRegisterError: () =>
          setMessage(
            "Offline setup failed. Continue online and try reloading later.",
          ),
      });
    }
    return () => {
      window.removeEventListener("online", update);
      window.removeEventListener("offline", update);
    };
  }, []);
  function navigate(name: string) {
    navigateHistory({tab:name,lesson:null,baseline:false});
    setNavigationVersion((v) => v + 1);
    window.scrollTo(0, 0);
  }
  function open(id: string) {
    navigateHistory({tab:"Learn",lesson:id,baseline:false,section:"learn"});
    window.scrollTo(0, 0);
  }
  return (
    <div className="shell">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <aside className="sidebar">
        <a className="brand" href="#main" onClick={() => navigate("Learn")}>
          <span className="brand-mark">h.</span>
          <span>
            haru<span className="brand-small">DESIGN APPRENTICESHIP</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          {[
            { name: "Learn", icon: BookOpen },
            { name: "Course map", icon: Map },
            { name: "My work", icon: PencilLine },
          ].map(({ name, icon: Icon }) => (
            <button
              key={name}
              aria-current={tab === name ? "page" : undefined}
              onClick={() => navigate(name)}
            >
              <Icon size={19} />
              {name}
            </button>
          ))}
        </nav>
      </aside>
      <div className="content">
        <header className="topbar">
          <span>{tab}</span>
          <div className="header-tools">
            <span className="device-status">
              {online ? "Online" : "Offline"}
            </span>
            <button
              className="text-button"
              aria-current={tab === "Account" ? "page" : undefined}
              onClick={() => navigate(tab === "Account" ? "Learn" : "Account")}
            >
              Account
            </button>
          </div>
        </header>
        <main id="main">
          {message && (
            <p className="notice" role="status">
              {message}
            </p>
          )}
          {applyUpdate && (
            <div className="notice update-notice" role="status">
              <p>{updateNote || updateMessage(unsavedDrafts(localStorage).length)}</p>
              <button
                className="primary"
                onClick={() => {
                  const pending = unsavedDrafts(localStorage);
                  if (pending.length) {
                    setUpdateNote(updateMessage(pending.length));
                    return;
                  }
                  setUpdateNote("Updating… the app will reload itself.");
                  applyUpdate();
                }}
              >
                Update now
              </button>
              <p className="muted">
                Nothing updates until you press this. Your saved work, notes and worksheets stay
                exactly as they are.
              </p>
            </div>
          )}
          {(tab === "Learn" || tab === "My work") && (
            <LearningStudio
              key={tab + ":" + (target?.id || "") + ":" + navigationVersion}
              user={user}
              bookmark={bookmark}
              mode={tab}
              target={target}
              clearTarget={() => navigateHistory({lesson:null,baseline:false})}
            />
          )}
          {tab === "Course map" && (
            <>
              <h1>Course map</h1>
              <p>Levels → Modules → Lessons. Study at your own pace.</p>
              <WorkspaceGuide />
              <PortfolioPath />
              <div className="course-map">
                {levels.map((level, i) => (
                  <details key={level.title}>
                    <summary>
                      Level {i} · {level.title}
                    </summary>
                    {modules
                      .filter((m) => m.level === i)
                      .map((m) => (
                        <details className="module-detail" key={m.id}>
                          <summary>
                            {m.title}{" "}
                            <span className="planned">
                              {m.status === "published"
                                ? "Published"
                                : "Planned"}
                            </span>
                          </summary>
                          <p>{m.output}</p>
                          <JourneyMilestone id={m.id} />
                          <p className="muted">
                            Bring:{" "}
                            {m.prerequisites
                              .map(
                                (id) => modules.find((x) => x.id === id)?.title,
                              )
                              .join(", ") || "No prior module"}
                          </p>
                          {m.id === "m00" ? (
                            <button
                              className="secondary"
                              onClick={() => open(baseline.id)}
                            >
                              Open baseline →
                            </button>
                          ) : m.status === "published" ? (
                            <div className="compact-list">
                              {lessons
                                .filter(
                                  (l) =>
                                    (l.week || 1) === Number(m.id.slice(1)),
                                )
                                .map((l) => (
                                  <button
                                    className="lesson-row"
                                    key={l.id}
                                    onClick={() => open(l.id)}
                                  >
                                    {l.title}
                                    {l.optional ? " · Optional" : ""} →
                                  </button>
                                ))}
                            </div>
                          ) : (
                            <p className="muted">
                              Lessons are not yet published.
                            </p>
                          )}
                          <details>
                            <summary>Optional effort</summary>
                            <p>
                              About {m.hours} hours including practice and
                              revision. No deadline.
                            </p>
                          </details>
                        </details>
                      ))}
                  </details>
                ))}
              </div>
            </>
          )}
          {tab === "Account" && (
            <>
              <h1>Account</h1>
              <CloudPanel
                accountOnly
                initialUser={user}
                record={empty}
                onLoad={() => {}}
                onSession={onSession}
              />
              <details className="account-detail">
                <summary>Backups and review export</summary>
                <AccountBackup user={user} />
              </details>
              <details className="account-detail">
                <summary>Install and offline access</summary>
                <ul>
                  <li>
                    Use your browser’s Install app or Add to Home Screen option.
                  </li>
                  <li>Open the course online once before studying offline.</li>
                  <li>
                    Keep this device’s browser data to retain offline drafts.
                  </li>
                </ul>
              </details>
            </>
          )}
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
            record={empty}
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
