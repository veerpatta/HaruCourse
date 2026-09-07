import { contrastRatio } from './contrast';
import { useState } from 'react';
import type { Apprenticeship } from './teaching';
import { workspaceGuide, figmaGuide, milestones, projectPacks, projectStart, caseStudySections } from './journey';
import { modules } from './modules';

export function CopyMaterial({ title, text, label }: { title: string; text: string; label: string }) {
  const [status, setStatus] = useState('');
  async function copy() {
    try { await navigator.clipboard.writeText(text); setStatus('Copied. Paste into your own workspace.'); }
    catch { setStatus('Clipboard unavailable. Select the text below and copy it manually.'); }
  }
  return <details className="work-material"><summary>{title}</summary>
    <button className="secondary" onClick={copy}>{label}</button>
    <p role="status">{status}</p>
    <label>{title} — selectable text<textarea readOnly value={text} rows={10} onFocus={e => e.currentTarget.select()} /></label>
  </details>;
}

export function WorkspaceGuide() {
  return <details className="workspace-guide"><summary>Set up your workspace</summary>
    <ol>{workspaceGuide.map(s => <li key={s}>{s}</li>)}</ol>
    <p>You can read on a phone and do visual work on paper or a computer. No schedule, subscription or particular device is required.</p>
  </details>;
}

export function ApprenticeshipPanel({ activity, contrast = false, guided = false }: { activity: Apprenticeship; contrast?: boolean; guided?: boolean }) {
  const hints = <>
    {activity.hints.map((hint, i) => <details key={hint}><summary>Hint {i + 1}{i === 0 ? ' · a nudge' : ' · more help'}</summary><p>{hint}</p></details>)}
    {activity.ai && <details><summary>Optional AI rehearsal · try it yourself first</summary>
      <p>{activity.ai.purpose} Use any free text chatbot you already have access to. No uploads or paid features are needed.</p>
      <p><a href="https://chatgpt.com" target="_blank" rel="noreferrer">Open ChatGPT</a> · <a href="https://gemini.google.com/app" target="_blank" rel="noreferrer">Open Gemini</a></p>
      <ol>{activity.ai.setup.map(s => <li key={s}>{s}</li>)}</ol>
      <CopyMaterial title="Lesson AI prompt" label="Copy AI prompt" text={activity.ai.prompt} />
      <p>{activity.ai.followUp}</p><h4>Without AI, or if you hit a limit</h4><p>{activity.ai.alternative}</p>
    </details>}
  </>;
  // A guided lesson recommends the in-app worksheet, keeps the local-file
  // route one disclosure away, and moves hints below the steps so the first
  // thing a learner sees is the first thing to do.
  if (guided && activity.route) return <section className="apprenticeship" aria-label="Activity workspace">
    <h3>{activity.activity}</h3><p>{activity.mission}</p>
    <section className="practice-route" aria-label="Where to practise">
      <h4>Where to practise</h4>
      <p><strong>Recommended:</strong> {activity.route.recommended}</p>
      <details><summary>Work in a file on your computer instead</summary>
        <p>{activity.route.alternative}</p>
        <p><strong>Tools:</strong> {activity.workspace.tools}</p>
        <ol>{activity.workspace.setup.map(s => <li key={s}>{s}</li>)}</ol>
        <CopyMaterial title="Your starter template" label="Copy template" text={activity.starter} />
      </details>
    </section>
    {contrast && <ContrastCalculator />}
    <details className="guided-hints"><summary>Hints and optional rehearsal</summary>{hints}</details>
  </section>;
  return <section className="apprenticeship" aria-label="Activity workspace">
    <h3>{activity.activity}</h3><p>{activity.mission}</p>
    <h4>Where to work</h4><p>{activity.workspace.tools}</p>
    <ol>{activity.workspace.setup.map(s => <li key={s}>{s}</li>)}</ol>
    <CopyMaterial title="Your starter template" label="Copy template" text={activity.starter} />
    {activity.visual && <details><summary>Optional Figma Starter walkthrough</summary><ol>{figmaGuide.map(s => <li key={s}>{s}</li>)}</ol><a href="https://help.figma.com/hc/en-us/articles/13838684089751-Starter-plan-overview" target="_blank" rel="noreferrer">Starter plan documentation</a></details>}
    {contrast && <ContrastCalculator />}
    {hints}
  </section>;
}

export function SaveHandoff({ activity, practiceOnly }: { activity: Apprenticeship; practiceOnly: boolean }) {
  // A lesson with its own route-specific save block must not also print the
  // generic local-file steps here: the two contradicted each other, and the
  // learner could not tell which one applied. Those steps stay available
  // inside the "work in a file instead" disclosure.
  if (activity.saveRoute) return <section className="save-handoff">
    <p><strong>Adequate evidence:</strong> {activity.adequate}</p>
    <p><strong>Next use:</strong> {activity.handoff}</p>
    {practiceOnly && <p>Foundation work builds an evidence bank. A useful practice artifact is not automatically a finished portfolio case study.</p>}
  </section>;
  return <section className="save-handoff"><h3>Save and bring forward</h3>
    <ul>{activity.workspace.save.map(s => <li key={s}>{s}</li>)}</ul>
    <p><strong>Adequate evidence:</strong> {activity.adequate}</p>
    <p><strong>Next use:</strong> {activity.handoff}</p>
    {practiceOnly && <p>Foundation work builds an evidence bank. A useful practice artifact is not automatically a finished portfolio case study.</p>}
  </section>;
}

export function JourneyMilestone({ id }: { id: string }) {
  const m = milestones[id];
  if (!m) return null;
  return <dl className="journey-milestone">
    <dt>Starting evidence</dt><dd>{m.start}</dd><dt>Challenge</dt><dd>{m.challenge}</dd>
    <dt>Work with</dt><dd>{m.tools}</dd><dt>Save</dt><dd>{m.save}</dd><dt>Later use</dt><dd>{m.later}</dd>
  </dl>;
}

export function PortfolioPath() {
  return <details className="portfolio-path"><summary>Your three-project portfolio path</summary>
    <p>Briefs are ready to explore. {modules.filter(m => m.status === 'published').length} modules including the baseline are published; the Course map shows any remaining planned work. Foundation exercises remain practice.</p>
    <p>{projectStart}</p>
    {projectPacks.map(pack => <details key={pack.id}><summary>{pack.title} · {pack.modules}</summary>
      <p>Choose one of these two briefs. Keep the choice and your reasons in your external project notebook.</p>
      {pack.choices.map(c => <article key={c.title}><h3>{c.title}</h3><p>{c.context}</p><p><strong>People:</strong> {c.users}</p><p><strong>Participant access:</strong> {c.access}</p><p><strong>Constraints:</strong> {c.constraints}</p><h4>Investigate</h4><ul>{c.questions.map(q => <li key={q}>{q}</li>)}</ul></article>)}
      <h3>Build the case study as you go</h3><ol>{pack.milestones.map(m => <li key={m}>{m}</li>)}</ol>
    </details>)}
    <h3>Case-study sections</h3><ol>{caseStudySections.map(s => <li key={s}>{s}</li>)}</ol>
    <p>m19 edits and curates this accumulated work. Add a fourth project only if a specific evidence gap justifies it.</p>
  </details>;
}

function ContrastCalculator() {
  const [fg, setFg] = useState('#000000'), [bg, setBg] = useState('#ffffff');
  const ratio = contrastRatio(fg, bg);
  return <details><summary>Local contrast calculator · works offline</summary>
    <p>Enter six-digit hex colors from your proposed design. This calculates opaque sRGB pairs only; flatten transparency first and sample all relevant backgrounds separately.</p>
    <label>Foreground hex<input value={fg} maxLength={7} onChange={e => setFg(e.target.value)} /></label>
    <label>Background hex<input value={bg} maxLength={7} onChange={e => setBg(e.target.value)} /></label>
    <p role="status">{ratio === null ? 'Enter both colors as # followed by six hex digits.' : `Ratio: ${ratio.toFixed(3)}:1. Normal text at 4.5:1: ${ratio >= 4.5 ? 'meets' : 'below'}; large text at 3:1: ${ratio >= 3 ? 'meets' : 'below'}. Decisions use the unrounded ratio.`}</p>
    <p>Use the assigned W3C reading to determine text classification and exceptions. This is not an overall accessibility verdict.</p>
  </details>;
}
