import { useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import { funnel, newcombeDifference, percent, wilson, type FunnelStep } from "./stats";

// Working examples and starters the improvement plan asks for, attached to the
// lessons that need them. Each one is optional, works offline (nothing loads
// from another site) and has a text equivalent, so the lesson never depends on
// seeing a picture or on one input method.

// ---------------------------------------------------------------------------
// Module 3 Lesson 7 — reflow versus clipping
export function ReflowDemo() {
  const [width, setWidth] = useState(390);
  const [mode, setMode] = useState<"reflow" | "clip">("reflow");
  const [large, setLarge] = useState(false);
  const frame = useRef<HTMLDivElement>(null);
  const [available, setAvailable] = useState(600);
  const sliderId = useId();
  useLayoutEffect(() => {
    const node = frame.current;
    if (!node) return;
    const measure = () => setAvailable(node.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  const scale = Math.min(1, available / width);
  const fixed = 1024;
  const hidden = mode === "clip" ? Math.max(0, fixed - width) : 0;
  return (
    <section className="lesson-tool reflow-demo" aria-labelledby={`${sliderId}-title`}>
      <span className="eyebrow">WORKING EXAMPLE · REFLOW OR CLIPPED</span>
      <h3 id={`${sliderId}-title`}>Watch the same content at different widths</h3>
      <p>Drag the width, switch between the two layouts and turn on larger text. A paper sketch can say what you intend; only a real page shows whether content reflows or gets cut off.</p>
      <div className="tool-controls">
        <label htmlFor={sliderId}>Screen width: <strong>{width} px</strong></label>
        <input id={sliderId} type="range" min={320} max={1280} step={10} value={width} onChange={(e) => setWidth(Number(e.target.value))} />
        <fieldset className="tool-choice">
          <legend>Layout</legend>
          <label className="choice-option"><input type="radio" name={`${sliderId}-mode`} checked={mode === "reflow"} onChange={() => setMode("reflow")} /><span>Reflows (wraps to fit)</span></label>
          <label className="choice-option"><input type="radio" name={`${sliderId}-mode`} checked={mode === "clip"} onChange={() => setMode("clip")} /><span>Clipped at a fixed 1024 px width</span></label>
        </fieldset>
        <label className="choice-option"><input type="checkbox" checked={large} onChange={(e) => setLarge(e.target.checked)} /><span>Text at 200%</span></label>
      </div>
      <p className="tool-readout" role="status">
        {mode === "reflow"
          ? `At ${width} px the cards ${width < 640 ? "stack in one column" : width < 960 ? "sit in two columns" : "sit in three columns"} and every word stays visible${large ? ", even at 200% text" : ""}.`
          : `At ${width} px, ${hidden ? `${hidden} px of the layout is cut off on the right` : "nothing is cut off yet"}${large ? "; larger text makes the clipping worse" : ""}. Clipping hides content; it does not adapt it.`}
      </p>
      <div className="reflow-frame" ref={frame}>
        <div className="reflow-viewport" style={{ width, transform: `scale(${scale})`, height: (large ? 520 : 380) }} aria-hidden="true">
          <div className={`reflow-page${mode === "clip" ? " is-clipped" : ""}${large ? " is-large" : ""}`} style={mode === "clip" ? { width: fixed } : undefined}>
            <p className="reflow-title">Saturday classes</p>
            <div className="reflow-cards">
              {["Pottery for beginners · Sat 10:00 · ₹800", "Watercolour basics · Sat 14:00 · ₹650", "Bookbinding · Sat 16:30 · ₹900"].map((t) => (
                <div className="reflow-card" key={t}><span>{t}</span><span className="reflow-button">Reserve</span></div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <details>
        <summary>What to write down</summary>
        <ul>
          <li>The width where the layout changes, and what changed (columns, order, what moved).</li>
          <li>Whether any content was cut off or needed sideways scrolling. That is clipping, not responsive design.</li>
          <li>What happened with text at 200%. Text that grows and still wraps passes; text that overflows its box does not.</li>
        </ul>
        <p className="muted">This demonstration uses a fictional page. For your own design, narrow a real browser window or use your browser's device emulation, and say which you used.</p>
      </details>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Module 9 — a working control with every state, cancellation and recovery
type SaveState = "idle" | "saving" | "saved" | "failed" | "cancelled";
export function StateExample() {
  const [state, setState] = useState<SaveState>("idle");
  const [outcome, setOutcome] = useState<"succeed" | "fail" | "slow">("succeed");
  const [reduce, setReduce] = useState(false);
  const [text, setText] = useState("Bring an apron");
  const [savedAt, setSavedAt] = useState("");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const id = useId();
  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);
  function save() {
    setState("saving");
    timer.current = setTimeout(() => {
      if (outcome === "fail") setState("failed");
      else {
        setState("saved");
        setSavedAt(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
      }
    }, outcome === "slow" ? 8000 : 1600);
  }
  function cancel() {
    if (timer.current) clearTimeout(timer.current);
    setState("cancelled");
  }
  const message = {
    idle: "Not saved yet.",
    saving: "Saving…",
    saved: `Saved at ${savedAt}.`,
    failed: "Couldn't save. Your text is still here. Check your connection, then try again.",
    cancelled: "Save cancelled. Nothing was changed; your text is still here.",
  }[state];
  return (
    <section className={`lesson-tool state-example${reduce ? " reduce-motion" : ""}`} aria-labelledby={`${id}-title`}>
      <span className="eyebrow">WORKING EXAMPLE · STATES</span>
      <h3 id={`${id}-title`}>Try a control in every state</h3>
      <p>Choose what the next save will do, then press Save. Notice the immediate acknowledgement, the waiting state, the result, how to cancel and how to recover. Turn on reduced motion: movement disappears but every state change stays visible in words.</p>
      <div className="tool-controls">
        <fieldset className="tool-choice">
          <legend>The next save will</legend>
          {(["succeed", "fail", "slow"] as const).map((o) => (
            <label className="choice-option" key={o}><input type="radio" name={`${id}-outcome`} checked={outcome === o} onChange={() => setOutcome(o)} /><span>{o === "succeed" ? "Succeed" : o === "fail" ? "Fail" : "Take eight seconds"}</span></label>
          ))}
        </fieldset>
        <label className="choice-option"><input type="checkbox" checked={reduce} onChange={(e) => setReduce(e.target.checked)} /><span>Reduce motion</span></label>
      </div>
      <div className="state-stage">
        <label htmlFor={`${id}-note`}>Class note</label>
        <input id={`${id}-note`} value={text} onChange={(e) => { setText(e.target.value); if (state === "saved") setState("idle"); }} disabled={state === "saving"} />
        <div className="state-actions">
          <button type="button" className="primary state-button" onClick={save} disabled={state === "saving"} aria-describedby={`${id}-status`}>
            {state === "saving" ? <><span className="state-spinner" aria-hidden="true" /> Saving…</> : state === "failed" ? "Retry" : "Save"}
          </button>
          {state === "saving" && <button type="button" className="secondary" onClick={cancel}>Cancel</button>}
        </div>
        <p id={`${id}-status`} className={`state-status is-${state}`} role="status">{message}</p>
      </div>
      <details>
        <summary>The state sequence, in words</summary>
        <ol>
          <li>Idle: the control is ready and says what it will do.</li>
          <li>Pressed: the button changes the moment it is pressed, before any result.</li>
          <li>Saving: the control cannot be pressed twice, says it is working and offers Cancel.</li>
          <li>Saved, failed or cancelled: the result is stated in words. A failure keeps the person's text and names the next step.</li>
          <li>Reduced motion removes the spinner's movement only. The words carry every state.</li>
        </ol>
      </details>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Module 9 Lesson 8 — reorder by drag, by keyboard and by single pointer
export function ReorderExample() {
  const initial = ["Wedge the clay", "Throw two bowls", "Trim and sign", "Glaze test tiles"];
  const [items, setItems] = useState(initial);
  const [history, setHistory] = useState<string[][]>([]);
  const [moving, setMoving] = useState<number | null>(null);
  const [dragging, setDragging] = useState<number | null>(null);
  const [announce, setAnnounce] = useState("");
  const id = useId();
  function move(from: number, to: number, how: string) {
    if (to < 0 || to >= items.length || from === to) return;
    const next = [...items];
    const [item] = next.splice(from, 1);
    next.splice(to, 0, item);
    setHistory((h) => [...h, items]);
    setItems(next);
    setMoving(null);
    setAnnounce(`${item} moved to position ${to + 1} of ${items.length} ${how}.`);
  }
  function undo() {
    const previous = history.at(-1);
    if (!previous) return;
    setItems(previous);
    setHistory((h) => h.slice(0, -1));
    setAnnounce("Last move undone.");
  }
  return (
    <section className="lesson-tool reorder-example" aria-labelledby={`${id}-title`}>
      <span className="eyebrow">WORKING EXAMPLE · THREE WAYS TO REORDER</span>
      <h3 id={`${id}-title`}>Put the class steps in order</h3>
      <p>Try all three routes and compare them: drag an item with a mouse; use the keyboard (focus a step, then press Alt and an arrow key, or use Move up and Move down); or, without dragging, press <strong>Move</strong> and then <strong>Place here</strong>. Undo reverses the last move.</p>
      <ol className="reorder-list">
        {items.map((item, index) => (
          <li key={item}>
            {moving !== null && moving !== index && moving !== index - 1 && (
              <button type="button" className="text-button place-here" onClick={() => move(moving, moving < index ? index - 1 : index, "without dragging")}>Place “{items[moving]}” here</button>
            )}
            <div
              className={`reorder-item${dragging === index ? " is-dragging" : ""}${moving === index ? " is-moving" : ""}`}
              draggable
              tabIndex={0}
              aria-label={`${item}, step ${index + 1} of ${items.length}`}
              onDragStart={() => setDragging(index)}
              onDragEnd={() => setDragging(null)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => { if (dragging !== null) move(dragging, index, "by dragging"); setDragging(null); }}
              onKeyDown={(e) => {
                if (e.altKey && e.key === "ArrowUp") { e.preventDefault(); move(index, index - 1, "with the keyboard"); }
                if (e.altKey && e.key === "ArrowDown") { e.preventDefault(); move(index, index + 1, "with the keyboard"); }
              }}
            >
              <span className="reorder-grip" aria-hidden="true">⋮⋮</span>
              <span className="reorder-label">{index + 1}. {item}</span>
              <span className="reorder-buttons">
                <button type="button" className="secondary" aria-label={`Move ${item} up`} disabled={index === 0} onClick={() => move(index, index - 1, "with Move up")}>Move up</button>
                <button type="button" className="secondary" aria-label={`Move ${item} down`} disabled={index === items.length - 1} onClick={() => move(index, index + 1, "with Move down")}>Move down</button>
                <button type="button" className="secondary" aria-pressed={moving === index} onClick={() => setMoving(moving === index ? null : index)}>{moving === index ? "Cancel move" : "Move"}</button>
              </span>
            </div>
            {moving !== null && index === items.length - 1 && moving !== index && (
              <button type="button" className="text-button place-here" onClick={() => move(moving, items.length - 1, "without dragging")}>Place “{items[moving]}” at the end</button>
            )}
          </li>
        ))}
      </ol>
      <div className="state-actions">
        <button type="button" className="secondary" onClick={undo} disabled={!history.length}>Undo last move</button>
        <button type="button" className="text-button" onClick={() => { setItems(initial); setHistory([]); setMoving(null); setAnnounce("Order reset."); }}>Reset</button>
      </div>
      <p className="tool-readout" role="status">{announce || "No moves yet."}</p>
      <p className="muted">Keyboard equivalence and a single-pointer route without dragging are separate requirements (WCAG 2.2, 2.5.7 Dragging Movements). Test both in your own design.</p>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Module 15 — funnel, one rate and two rates, all at 95%
const SYNTHETIC: FunnelStep[] = [
  { name: "Reach the class list", count: 1000 },
  { name: "Open a class", count: 420 },
  { name: "Begin booking", count: 180 },
  { name: "Reach payment", count: 96 },
  { name: "Complete", count: 71 },
];
function NumberField({ label, value, onChange }: { label: string; value: number; onChange: (n: number) => void }) {
  const id = useId();
  return (
    <span className="number-field">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" inputMode="numeric" min={0} step={1} value={Number.isFinite(value) ? value : ""} onChange={(e) => onChange(e.target.value === "" ? NaN : Math.floor(Number(e.target.value)))} />
    </span>
  );
}
export function UncertaintyCalculator() {
  const [tab, setTab] = useState<"funnel" | "one" | "two">("funnel");
  const [steps, setSteps] = useState<FunnelStep[]>(SYNTHETIC);
  const [one, setOne] = useState({ x: 7, n: 10 });
  const [two, setTwo] = useState({ x1: 56, n1: 70, x2: 48, n2: 80 });
  const id = useId();
  const f = useMemo(() => funnel(steps), [steps]);
  const oneResult = useMemo(() => { try { return wilson(one.x, one.n); } catch { return null; } }, [one]);
  const twoResult = useMemo(() => { try { return newcombeDifference(two.x1, two.n1, two.x2, two.n2); } catch { return null; } }, [two]);
  const tabs = [["funnel", "Funnel"], ["one", "One rate"], ["two", "Compare two rates"]] as const;
  return (
    <section className="lesson-tool uncertainty-calculator" aria-labelledby={`${id}-title`}>
      <span className="eyebrow">WORKED CALCULATOR · 95% INTERVALS</span>
      <h3 id={`${id}-title`}>Uncertainty calculator</h3>
      <p>Everything here runs on this device. The starting numbers are synthetic practice figures: they teach the method and cannot confirm anything about real people.</p>
      <div className="tool-tabs" role="group" aria-label="Calculator">
        {tabs.map(([key, label]) => (
          <button key={key} type="button" className={tab === key ? "primary" : "secondary"} aria-pressed={tab === key} onClick={() => setTab(key)}>{label}</button>
        ))}
      </div>
      {tab === "funnel" && (
        <div className="tool-panel">
          <p>Proportional drop at a step = people lost at that step ÷ people who reached the step before it.</p>
          <div className="funnel-inputs">
            {steps.map((s, i) => (
              <span key={i} className="funnel-step">
                <NumberField label={s.name} value={s.count} onChange={(n) => setSteps((all) => all.map((x, j) => (j === i ? { ...x, count: n } : x)))} />
              </span>
            ))}
          </div>
          {f.problem ? <p className="tool-warning" role="alert">{f.problem}</p> : (
            <div className="table-scroll" tabIndex={0} role="region" aria-label="Funnel results">
              <table className="tool-table">
                <thead><tr><th scope="col">Step</th><th scope="col">Reached</th><th scope="col">Lost from previous step</th><th scope="col">Proportional drop</th></tr></thead>
                <tbody>
                  {f.rows.map((r, i) => (
                    <tr key={i} className={i === f.largest ? "is-largest" : undefined}>
                      <th scope="row">{r.name}</th>
                      <td>{r.count.toLocaleString()}</td>
                      <td>{r.lost === null ? "—" : `${r.lost.toLocaleString()} of ${f.rows[i - 1].count.toLocaleString()}`}</td>
                      <td>{r.drop === null ? "—" : `${percent(r.drop, 2)}${i === f.largest ? " (largest)" : ""}`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <p className="muted">A funnel shows where people stop, never why. With the synthetic figures, the largest proportional drop is the first step (58.00%), just ahead of opening a class to beginning booking (57.14%).</p>
          <button type="button" className="text-button" onClick={() => setSteps(SYNTHETIC)}>Restore the synthetic example</button>
        </div>
      )}
      {tab === "one" && (
        <div className="tool-panel">
          <p>For a rate such as “7 of 10 people found the price”, the Wilson interval shows the range of underlying rates that fit those counts.</p>
          <div className="funnel-inputs">
            <NumberField label="People who did it (x)" value={one.x} onChange={(x) => setOne((v) => ({ ...v, x }))} />
            <NumberField label="People who tried (n)" value={one.n} onChange={(n) => setOne((v) => ({ ...v, n }))} />
          </div>
          {oneResult ? (
            <p className="tool-result" role="status">{one.x} of {one.n} is {percent(oneResult.estimate)}. 95% interval: {percent(oneResult.low)} to {percent(oneResult.high)}.{one.n < 30 ? " With so few people, report the count (“" + one.x + " of " + one.n + "”) rather than a percentage." : ""}</p>
          ) : <p className="tool-warning" role="alert">Enter whole numbers with 0 ≤ x ≤ n and n above 0.</p>}
        </div>
      )}
      {tab === "two" && (
        <div className="tool-panel">
          <p>Compare two groups by the difference itself. Two separate intervals that overlap do not show that there is no difference.</p>
          <div className="funnel-inputs">
            <NumberField label="Group A: did it" value={two.x1} onChange={(x1) => setTwo((v) => ({ ...v, x1 }))} />
            <NumberField label="Group A: tried" value={two.n1} onChange={(n1) => setTwo((v) => ({ ...v, n1 }))} />
            <NumberField label="Group B: did it" value={two.x2} onChange={(x2) => setTwo((v) => ({ ...v, x2 }))} />
            <NumberField label="Group B: tried" value={two.n2} onChange={(n2) => setTwo((v) => ({ ...v, n2 }))} />
          </div>
          {twoResult ? (
            <p className="tool-result" role="status">
              A is {percent(twoResult.p1)}, B is {percent(twoResult.p2)}. Difference A − B: {percent(twoResult.estimate)}, 95% interval {percent(twoResult.low)} to {percent(twoResult.high)}.{" "}
              {twoResult.low > 0 || twoResult.high < 0 ? "The interval excludes zero, so sampling alone is an unlikely explanation — not proof the design caused it." : "The interval includes zero, so these counts are consistent with no difference."}
            </p>
          ) : <p className="tool-warning" role="alert">Enter whole numbers with each “did it” between 0 and its “tried”, and both groups above 0.</p>}
          <p className="muted">Method: Newcombe (1998) hybrid score interval built from each group's Wilson interval. It assumes independent groups and says nothing about bias in who was sampled.</p>
        </div>
      )}
    </section>
  );
}

// ---------------------------------------------------------------------------
// Downloadable starters and practice pages (served from the course, cached for
// offline use). The plan asks for editable or runnable starting points where a
// task would otherwise depend on a missing file or hidden setup step.
export type StarterFile = { href: string; label: string; note: string };
export function StarterFiles({ files }: { files: StarterFile[] }) {
  if (!files.length) return null;
  return (
    <section className="lesson-tool starter-files" aria-label="Starter files">
      <span className="eyebrow">STARTER FILES · WORK OFFLINE</span>
      <h3>Start from a working file</h3>
      <ul>
        {files.map((f) => (
          <li key={f.href}>
            <strong>{f.label}</strong>
            <span>{f.note}</span>
            <span className="starter-links">
              <a href={f.href} target="_blank" rel="noreferrer">Open</a>
              <a href={f.href} download>Download</a>
            </span>
          </li>
        ))}
      </ul>
      <p className="muted">Save a copy in Documents\HaruCourse\Practice before editing, so the original stays untouched. Nothing you change in a downloaded file is uploaded.</p>
    </section>
  );
}
