import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { Lesson } from './teaching';
import type { RecordData } from '../shared/record';
import { actionDone, lessonWorkProgress, checkKey } from '../shared/learning';
import { Field, VideoActionBlock } from './PracticeGuide';
import { SavedQuestion, type SetPractice } from './LearningProgress';
import { lessonOneExample, suppliedWalkthrough, type LessonAction } from './lessonOneFlow';

export function currentAction(lesson: Lesson, record: RecordData, section: string) {
  const flow = lesson.flow ?? [];
  return flow.find(a => a.id === record.learning?.action && a.section === section)
    ?? flow.find(a => a.section === section && a.step === record.guide?.step)
    ?? flow.find(a => a.section === section) ?? flow[0];
}
export function LessonFlow({lesson, record, setRecord, section, go, readOnly, onStep, online}: {
  lesson: Lesson; record: RecordData; setRecord: SetPractice; section: string; go: (s: string) => void;
  readOnly: boolean; onStep: (n:number|null) => void; online: boolean;
}) {
  const flow = lesson.flow!;
  const [preview, setPreview] = useState<string>();
  const action = readOnly && preview ? flow.find(a => a.id === preview && a.section === section) ?? currentAction(lesson,record,section) : currentAction(lesson,record,section);
  const heading = useRef<HTMLHeadingElement>(null);
  useLayoutEffect(() => { heading.current?.focus({preventScroll:true}); heading.current?.scrollIntoView({block:'start'}); }, [action.id]);
  useEffect(() => { onStep(action.step); }, [action.id]);
  const index = flow.indexOf(action);
  const sectionActions = flow.filter(a => a.section === section);
  const fields = lesson.apprenticeship!.worksheet!.flatMap(s => s.fields);
  const fieldById = (id: string) => fields.find(f => f.id === id)!;
  function setField(id: string, value: string) { setRecord(r => ({...r, status:r.status === 'not-started' ? 'practicing' : r.status, worksheet:{...r.worksheet,[id]:value}})); }
  const sorter = lesson.apprenticeship!.guide!.find(g => g.sorter)!.sorter!;
  const sortItem = action.kind === 'sort' ? sorter.items[action.index!] : null;
  const check = action.kind === 'check' ? lesson.apprenticeship!.checks![action.index!] : null;
  const answerId = sortItem ? `sort-${sortItem.id}` : check ? checkKey(action.index!) : null;
  const done = (a: LessonAction) => actionDone(lesson,record,a);
  function move(a: LessonAction, complete = false) {
    if (readOnly) setPreview(a.id);
    else setRecord(r => ({...r, learning:{...r.learning, action:a.id,
      completed:complete ? [...new Set([...(r.learning?.completed ?? []),action.id])] : r.learning?.completed},
      guide:{...r.guide,step:a.step,done:r.guide?.done ?? []}}));
    go(a.section);
  }
  const work = lessonWorkProgress(lesson,record);
  const completed = work.done;
  const isReady = ['intro','example'].includes(action.kind) || done(action) || (record.learning?.route === 'external' && action.kind === 'field');
  const renderField = (id: string) => <Field key={id} field={fieldById(id)} value={record.worksheet?.[id] ?? ''} onChange={v => setField(id,v)} readOnly={readOnly}/>;
  const priorEntry = action.field?.match(/^entry-(\d+)-(label|goal|check)$/);
  return <section className="lesson-flow" aria-label="Guided lesson">
    <div className="flow-overview"><span>Lesson work · {work.percent}%</span><details><summary>Lesson overview</summary>
      <nav aria-label="All lesson actions">{flow.map(a => <button key={a.id} className="text-button" aria-current={a.id === action.id ? 'step' : undefined} onClick={() => move(a)}>{done(a) ? '✓ ' : ''}{a.title}</button>)}</nav>
    </details></div>
    <progress max={work.total} value={completed} aria-label="Required lesson actions completed"/>
    <div className="action-card" data-action={action.id}>
      <span className="eyebrow">{section === 'practice-plan' ? 'Do' : section === 'practice' ? 'Your work' : section} · {sectionActions.indexOf(action)+1} of {sectionActions.length}</span>
      <h2 tabIndex={-1} ref={heading}>{action.title}</h2><p className="action-instruction">{action.instruction}</p>
      {action.kind === 'intro' && <>
        <p><strong>You will keep:</strong> three definitions, one walkthrough, five evidence entries, two improvements, and a short reflection.</p>
        <p>Designers work with product managers, engineers and researchers. Today, you are practising how to ask useful questions before choosing a fix.</p>
        <p>Time is optional information. Active course use records automatically; work in another app or on paper can be added under Time details.</p>
        <details><summary>Prefer working in a file or on paper?</summary><p>Keep every output listed above in your file. You still answer the practice questions here. At the end, add a work reference and reflection; nothing is uploaded automatically.</p>
          <label htmlFor="flow-route">Practice destination</label><select id="flow-route" disabled={readOnly} value={record.learning?.route || 'worksheet'} onChange={e => setRecord(r => ({...r,learning:{...r.learning,route:e.target.value as 'worksheet'|'external'}}))}><option value="worksheet">Write in this worksheet</option><option value="external">Keep answers in a file or on paper</option></select>
        </details>
      </>}
      {action.kind === 'example' && <div className="flow-example">{lessonOneExample.map(p => <p key={p}>{p}</p>)}</div>}
      {action.field === 'app' && <details className="supplied-walkthrough"><summary>Use a supplied walkthrough instead</summary>{suppliedWalkthrough.map(p => <p key={p}>{p}</p>)}</details>}
      {priorEntry && <blockquote><strong>Your entry {priorEntry[1]}:</strong> {record.worksheet?.[`entry-${priorEntry[1]}-saw`] || 'No entry yet. Use Back to write it.'}</blockquote>}
      {action.kind === 'field' && <>{record.learning?.route === 'external' && <p>Write this answer in your file or on paper, then choose Next. The field below is optional for your chosen route.</p>}{renderField(action.field!)}</>}
      {sortItem && <SavedQuestion key={answerId} id={answerId!} question={sortItem.text} options={sorter.options.map(label => ({label,feedback:sortItem.feedback[label]}))} record={record} setRecord={setRecord} readOnly={readOnly}/>}
      {check && <SavedQuestion key={answerId} id={answerId!} question={check.question} options={check.options} record={record} setRecord={setRecord} readOnly={readOnly}>
        <p><strong>Check your work:</strong> {check.recheck}</p>
        {action.index === 0 ? renderField('user-goal') : <><p>Review your evidence labels. Change any claim that presents a guess as a fact.</p>{[1,2,3,4,5].map(n => <details key={n}><summary>Entry {n}: {record.worksheet?.[`entry-${n}-saw`] || 'Not filled yet'}</summary>{renderField(`entry-${n}-label`)}{renderField(`entry-${n}-check`)}</details>)}</>}
      </SavedQuestion>}
      {action.kind === 'field' && <p className="enough"><strong>Enough for now:</strong> one clear answer in your own words. You can improve it during Check.</p>}
      {action.kind !== 'review' && <div className="flow-actions"><button className="secondary" disabled={index === 0} onClick={() => move(flow[index-1])}>← Back</button>
        <button className="primary" disabled={!readOnly && !isReady} onClick={() => move(flow[index+1],true)}>Next →</button></div>}
      {action.kind === 'review' && <button className="text-button" onClick={() => move(flow[index-1])}>← Back to your next action</button>}
      {action.kind === 'field' && !isReady && !readOnly && <small>Write your answer to continue, or use Lesson overview to return to another action.</small>}
    </div>
    {section === 'learn' && <details className="teaching-detail"><summary>Optional reading, video and deeper explanation</summary>
      {lesson.explanation.map(t => <p key={t}>{t}</p>)}
      <a href={lesson.resource.url} target="_blank" rel="noreferrer">{lesson.resource.title}</a>
      {lesson.apprenticeship?.video && <VideoActionBlock video={lesson.apprenticeship.video} online={online}/>}</details>}
  </section>;
}
