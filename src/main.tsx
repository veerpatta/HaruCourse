import { navigate as navigateHistory, useNavigation } from './navigation';
import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { registerSW } from "virtual:pwa-register";
import { BookOpen, CircleUserRound, Map, PencilLine } from "lucide-react";
import { modules } from "./modules";
import { levels, baseline } from "./course";
import { publishedLessons as lessons } from "./lessons";
import { LearningStudio } from "./LearningStudio";
import { useCourseRecords } from './useCourseRecords';
import { ProgressOverview } from './LearningProgress';
import { usePosition } from './usePosition';
import { CloudPanel } from "./CloudPanel";
import { AccountBackup } from "./AccountBackup";
import { WorkspaceGuide, PortfolioPath, JourneyMilestone } from './ApprenticeshipPanel';
import { emptyRecord as empty } from "./usePractice";
import { unsavedDrafts, updateMessage } from "./updates";
import type { User } from "../shared/record";
import "./style.css";

type InstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

function installedDisplayMode() {
  return (
    window.matchMedia("(display-mode: standalone)").matches ||
    Boolean((navigator as Navigator & { standalone?: boolean }).standalone)
  );
}

function App({
  user,
  onSession,
}: {
  user: User;
  onSession: (user: User | null) => void;
}) {
  const navigation = useNavigation();
  const bookmark = usePosition(user.id);
  const course = useCourseRecords(user);
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
  const [standalone, setStandalone] = useState(installedDisplayMode);
  const [installPrompt, setInstallPrompt] = useState<InstallPromptEvent | null>(null);
  useEffect(() => {
    const update = () => setOnline(navigator.onLine);
    const displayMode = window.matchMedia("(display-mode: standalone)");
    const updateDisplayMode = () => setStandalone(installedDisplayMode());
    const offerInstall = (event: Event) => {
      event.preventDefault();
      setInstallPrompt(event as InstallPromptEvent);
    };
    const installed = () => {
      setStandalone(true);
      setInstallPrompt(null);
    };
    window.addEventListener("online", update);
    window.addEventListener("offline", update);
    window.addEventListener("beforeinstallprompt", offerInstall);
    window.addEventListener("appinstalled", installed);
    displayMode.addEventListener("change", updateDisplayMode);
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
      window.removeEventListener("beforeinstallprompt", offerInstall);
      window.removeEventListener("appinstalled", installed);
      displayMode.removeEventListener("change", updateDisplayMode);
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
    <div className={`shell${standalone ? " is-standalone" : ""}`}>
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
          <div className="mobile-app-title">
            <span className="mobile-brand-mark" aria-hidden>h.</span>
            <span>{navigation.lesson ? "Lesson" : tab}</span>
          </div>
          <div className="header-tools">
            <span className={`device-status ${online ? "is-online" : "is-offline"}`} role="status">
              {online ? "Online" : "Offline"}
            </span>
            <button
              className="text-button account-button"
              aria-label={tab === "Account" ? "Return to Learn" : "Open Account"}
              aria-current={tab === "Account" ? "page" : undefined}
              onClick={() => navigate(tab === "Account" ? "Learn" : "Account")}
            >
              <CircleUserRound size={19} aria-hidden />
              <span>Account</span>
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
              course={course}
              bookmark={bookmark}
              mode={tab}
              target={target}
              clearTarget={() => navigateHistory({lesson:null,baseline:false})}
            />
          )}
          {tab === "Course map" && (
            <>
              <h1>Course map</h1>
              <ProgressOverview records={course.records}/>
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
                          {m.id !== "m00" && <ProgressOverview records={course.records} module={Number(m.id.slice(1))}/>}
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
                <div className="pwa-install">
                  <p className="pwa-install-state">
                    <strong>{standalone ? "Installed on this device" : "Use Haru Course like an app"}</strong>
                    <span>{standalone ? "The course opens in its own window and keeps the learning interface ready for mobile." : "Install it for a focused, full-screen course experience and offline reopening."}</span>
                  </p>
                  {!standalone && installPrompt && (
                    <button className="primary" onClick={async () => {
                      await installPrompt.prompt();
                      const choice = await installPrompt.userChoice;
                      if (choice.outcome === "accepted") setInstallPrompt(null);
                    }}>Install Haru Course</button>
                  )}
                  {!standalone && !installPrompt && (
                    <ol>
                      <li>Open your browser menu.</li>
                      <li>Choose <strong>Install app</strong> or <strong>Add to Home Screen</strong>.</li>
                      <li>Open Haru Course once while online so lessons are available offline.</li>
                    </ol>
                  )}
                  <p className="muted">Keep this browser’s site data to retain offline drafts. Saved work syncs automatically when you reconnect.</p>
                </div>
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
