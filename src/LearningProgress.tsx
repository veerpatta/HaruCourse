import { useId, type SetStateAction } from 'react';
import type { RecordData } from '../shared/record';
import { actionDone, checkKey, courseProgress, finishProblems, lessonWorkProgress } from '../shared/learning';
import type { Choice, Lesson } from './teaching';
import { publishedLessons } from './lessons';
import type { CourseRecord } from './useCourseRecords';
import { worksheetCompletion } from './orientation';
export type SetPractice = (v: SetStateAction<RecordData>) => void;

export function SavedQuestion({id, question, options, record, setRecord, readOnly = false, children}: {
  id: string; question: string; options: Choice[]; record: RecordData; setRecord: SetPractice; readOnly?: boolean; children?: React.ReactNode;
}) {
  const name = useId();
  const answer = record.learning?.answers?.[id];
  const chosen = options.find(o => o.label === answer?.value);
  const update = (value: string, shown: boolean) => setRecord(r => ({...r, learning:{...r.learning,
    answers:{...r.learning?.answers,[id]:{value,shown}}}}));
  return <div className="saved-question">
    <fieldset disabled={readOnly}><legend>{question}</legend>{options.map(o => <label className="choice-option" key={o.label}>
      <input type="radio" name={name} checked={answer?.value === o.label} onChange={() => update(o.label,false)}/><span>{o.label}</span>
    </label>)}</fieldset>
    {!readOnly && <button className="secondary" disabled={!chosen} onClick={() => update(chosen!.label,true)}>Show me why</button>}
    {answer?.shown && chosen && <div className="choice-feedback" role="status"><p>{chosen.feedback}</p>{children}</div>}
    <small>Saved so you can return. Practice only; no score.</small>
  </div>;
}
export function ProgressOverview({records, module}: {records: CourseRecord[]; module?: number}) {
  const p = courseProgress(publishedLessons,records,module);
  const label = module ? `Module ${module} progress` : 'Course progress';
  return <section className={`work-progress ${module ? 'module-progress' : 'course-progress'}`} aria-label={label}>
    <div className="work-progress-head">
      <div><span className="progress-label">{label}</span><strong>{p.percent}%</strong></div>
      <span className="progress-count">{p.finished} / {p.total} lessons</span>
    </div>
    <progress value={p.finished} max={p.total || 1} aria-label={module ? 'Module practice finished' : 'Course practice finished'}/>
    <small>You control this number by finishing lesson practice. Time and review are tracked separately.</small>
  </section>;
}
export function FinishPractice({lesson, record, setRecord, readOnly, blocked}: {
  lesson: Lesson; record: RecordData; setRecord: SetPractice; readOnly: boolean; blocked?: boolean;
}) {
  if (lesson.id === 'baseline-v1') return null;
  const problems = finishProblems(lesson,record);
  const fields = lesson.apprenticeship?.worksheet?.flatMap(s => s.fields) ?? [];
  const checks = lesson.apprenticeship?.checks ?? [];
  const external = record.learning?.route === 'external';
  const {done,total,percent} = lessonWorkProgress(lesson,record);
  const worksheet = worksheetCompletion(lesson,record);
  const checkedReasons = checks.filter((_,index) => !!record.learning?.answers?.[checkKey(index)]?.shown).length;
  const suppliedActions = lesson.flow?.filter(action => action.kind === 'supported' || action.kind === 'sort') || [];
  const suppliedDone = suppliedActions.filter(action => actionDone(lesson,record,action)).length;
  const improvementDone = !!(record.worksheet?.['improvement-made'] || record.learning?.repair || '').trim();
  return <section className="finish-practice card">
    <h3>{record.learning?.finishedAt ? 'Practice finished' : 'Finish your practice'}</h3>
    <p>Lesson work · {percent}%</p>
    <progress max={total} value={done} aria-label="Lesson work progress"/>
    <div className="finish-checklist" aria-label="What is needed to finish">
      <h4>What you need to finish</h4>
      <ul>
        <li className={external || worksheet.requiredFilled === worksheet.requiredTotal ? 'is-done' : ''}>{external ? 'Keep every required output in your own file or paper.' : `${worksheet.requiredFilled} of ${worksheet.requiredTotal} required worksheet answers filled.`}</li>
        <li className={suppliedDone === suppliedActions.length ? 'is-done' : ''}>{suppliedDone} of {suppliedActions.length} supplied practice questions checked.</li>
        <li className={checkedReasons === checks.length ? 'is-done' : ''}>{checkedReasons} of {checks.length} reasoning checks answered and explained.</li>
        <li className={improvementDone ? 'is-done' : ''}>{improvementDone ? 'One improvement or checked decision recorded.' : 'Record one improvement, or explain why no change was needed.'}</li>
      </ul>
    </div>
    {!readOnly && <>
      <label htmlFor="practice-route">Where did you keep your work?</label>
      <select id="practice-route" value={record.learning?.route || 'worksheet'} onChange={e => setRecord(r => ({...r, learning:{...r.learning,route:e.target.value as 'worksheet'|'external'}}))}>
        <option value="worksheet">In this worksheet</option><option value="external">In a file or on paper</option>
      </select>
      {external && <label className="choice-option"><input type="checkbox" checked={!!record.learning?.outputsConfirmed} onChange={e => setRecord(r => ({...r,learning:{...r.learning,outputsConfirmed:e.target.checked}}))}/><span>My external work contains every required output listed in this lesson.</span></label>}
      {(external || !fields.some(f => f.id === 'improvement-made')) && <><label htmlFor="practice-repair">What did you improve, or why was no change needed?</label><textarea id="practice-repair" maxLength={2000} value={record.learning?.repair || ''} onChange={e => setRecord(r => ({...r,learning:{...r.learning,repair:e.target.value}}))}/></>}
      {!!problems.length && <div><p>Still to do:</p><ul>{problems.map(p => <li key={p}>{p}</li>)}</ul></div>}
      <button className="primary" disabled={!!problems.length || blocked || !!record.learning?.finishedAt} onClick={() => setRecord(r => ({...r,learning:{...r.learning,finishedAt:new Date().toISOString()}}))}>
        {record.learning?.finishedAt ? 'Practice finished ✓' : 'Finish practice'}
      </button>
    </>}
    <p className="muted">This records that you finished the work, not that you mastered the skill. Editing your answers reopens practice. Request feedback separately below.</p>
  </section>;
}
