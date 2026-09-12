import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { Lesson, WorksheetField } from './teaching';
import type { RecordData } from '../shared/record';
import { actionDone, lessonWorkProgress } from '../shared/learning';
import { actionQuestion, fieldRequired } from './lessonActions';
import { Field, SeeIt, VideoActionBlock } from './PracticeGuide';
import { ContrastCalculator } from './ApprenticeshipPanel';
import { SavedQuestion, type SetPractice } from './LearningProgress';
import { lessonOneExample, suppliedWalkthrough, type LessonAction } from './lessonOneFlow';

const sections = [{id:'learn',label:'Learn'},{id:'practice-plan',label:'Do'},{id:'check',label:'Check'},{id:'practice',label:'Your work'}];
export function currentAction(lesson: Lesson, record: RecordData, section: string) {
 const flow=lesson.flow ?? [];
 return flow.find(a=>a.id===record.learning?.action && a.section===section)
  ?? flow.find(a=>a.section===section && a.step===record.guide?.step)
  ?? flow.find(a=>a.section===section) ?? flow[0];
}

function RepairAnswer({fields,record,setField,readOnly}: {fields:WorksheetField[];record:RecordData;setField:(id:string,value:string)=>void;readOnly:boolean}) {
 const [selected,setSelected]=useState(fields[0]?.id);
 const current=fields.find(f=>f.id===selected) || fields[0];
 if(!current) return null;
 return <div className="inline-repair">
  {fields.length>1 && <label>Choose an answer to review<select value={current.id} onChange={e=>setSelected(e.target.value)}>{fields.map(f=><option key={f.id} value={f.id}>{f.label}</option>)}</select></label>}
  <Field field={current} value={record.worksheet?.[current.id] || ''} onChange={value=>setField(current.id,value)} readOnly={readOnly}/>
 </div>;
}

export function LessonFlow({lesson, record, setRecord, section, go, readOnly, onStep, online}: {
 lesson:Lesson;record:RecordData;setRecord:SetPractice;section:string;go:(s:string)=>void;
 readOnly:boolean;onStep:(n:number|null)=>void;online:boolean;
}) {
 const flow=lesson.flow!;
 const [preview,setPreview]=useState<string>();
 const action=readOnly && preview ? flow.find(a=>a.id===preview && a.section===section) ?? currentAction(lesson,record,section) : currentAction(lesson,record,section);
 const heading=useRef<HTMLHeadingElement>(null);
 const overview=useRef<HTMLDetailsElement>(null);
 useLayoutEffect(()=>{heading.current?.focus({preventScroll:true});heading.current?.scrollIntoView({block:'start',behavior:'instant'});},[action.id]);
 useEffect(()=>{onStep(action.step);},[action.id]);
 const index=flow.indexOf(action), sectionActions=flow.filter(a=>a.section===section);
 const a=lesson.apprenticeship!;
 const fields=a.worksheet!.flatMap(s=>s.fields);
 const field=fields.find(f=>f.id===action.field);
 const guide=action.guideIndex===undefined ? undefined : a.guide?.[action.guideIndex];
 const currentFields=guide?.fields?.map(id=>fields.find(f=>f.id===id)!).filter(Boolean) || [];
 const question=actionQuestion(lesson,action);
 const check=action.kind==='check' ? a.checks?.[action.index!] : null;
 const work=lessonWorkProgress(lesson,record);
 const external=record.learning?.route==='external';
 const done=(item:LessonAction)=>actionDone(lesson,record,item);
 function setField(id:string,value:string){setRecord(r=>({...r,status:r.status==='not-started'?'practicing':r.status,worksheet:{...r.worksheet,[id]:value}}));}
 function move(next:LessonAction,complete=false){
  if(readOnly)setPreview(next.id);
  else setRecord(r=>({...r,learning:{...r.learning,action:next.id,completed:complete?[...new Set([...(r.learning?.completed || []),action.id])]:r.learning?.completed},guide:{...r.guide,step:next.step,done:r.guide?.done || []}}));
  if(overview.current)overview.current.open=false;
  go(next.section);
 }
 const passive=['intro','example','teach','setup','demo'].includes(action.kind);
 const ready=passive || done(action) || (external && action.kind==='field') || (!!field && !fieldRequired(field,record));
 const priorEntry=action.field?.match(/^entry-(\d+)-(label|goal|check)$/);
 const repairIds=action.repairFields || (action.index===0 ? ['user-goal'] : [1,2,3,4,5].flatMap(n=>[`entry-${n}-label`,`entry-${n}-check`]));
 const optional=field && !fieldRequired(field,record);
 const overviewContent=<nav aria-label="All lesson actions">{sections.map(s=><div key={s.id} className="flow-outline-group"><h3>{s.label}</h3>{flow.filter(a=>a.section===s.id).map(item=><button key={item.id} className="text-button" aria-current={item.id===action.id?'step':undefined} onClick={()=>move(item)}><span aria-hidden>{done(item)?'✓':'○'}</span><span>{item.title}</span></button>)}</div>)}</nav>;
 return <section className="lesson-flow" aria-label="Guided lesson">
  <div className="flow-overview"><span>Lesson work · {work.percent}%</span><details ref={overview}><summary>Lesson overview</summary>{overviewContent}</details></div>
  <progress max={work.total} value={work.done} aria-label="Required lesson actions completed"/>
  <div className="flow-layout"><div className="flow-main">
   <div className="action-card" data-action={action.id}>
    <span className="eyebrow">{sections.find(s=>s.id===section)?.label} · {sectionActions.indexOf(action)+1} of {sectionActions.length}</span>
    <h2 tabIndex={-1} ref={heading}>{action.title}</h2><p className="action-instruction">{action.instruction}</p>
    {action.kind==='intro' && <>
     {lesson.actionPlan ? <><p><strong>You will keep:</strong></p><ul>{lesson.outputs.map(o=><li key={o}>{o}</li>)}</ul><p>{lesson.prerequisite}</p></> : <><p><strong>You will keep:</strong> three definitions, one walkthrough, five evidence entries, two improvements, and a short reflection.</p><p>Designers work with product managers, engineers and researchers. Today, you are practising how to ask useful questions before choosing a fix.</p></>}
     {lesson.actionPlan && <p><strong>Your starting route:</strong> {lesson.actionPlan.start}</p>}
     <p>Answer one action at a time. Your place saves as you go. Time is optional information; add work in another app or on paper under Time details.</p>
     <details><summary>Prefer working in a file or on paper?</summary><p>Keep every required output in your file. Answer the practice questions here, then add a reflection and work reference at the end. Nothing uploads automatically.</p><label htmlFor="flow-route">Practice destination</label><select id="flow-route" disabled={readOnly} value={record.learning?.route || 'worksheet'} onChange={e=>setRecord(r=>({...r,learning:{...r.learning,route:e.target.value as 'worksheet'|'external'}}))}><option value="worksheet">Write in this worksheet</option><option value="external">Keep answers in a file or on paper</option></select></details>
    </>}
    {action.body?.length && <ol className="action-directions">{action.body.map((p,i)=><li key={i}>{p}</li>)}</ol>}
    {action.kind==='example' && <div className="flow-example">{lessonOneExample.map(p=><p key={p}>{p}</p>)}</div>}
    {action.kind==='demo' && guide?.demo && <SeeIt demo={guide.demo}/>}
    {action.kind==='setup' && guide && <>
     {guide.start && <p><strong>Start here:</strong> {guide.start}</p>}
     {guide.enough && <p><strong>Enough for this task:</strong> {guide.enough}</p>}
     {!!guide.terms?.length && <dl className="action-terms">{guide.terms.map(t=><div key={t.term}><dt>{t.term}</dt><dd>{t.meaning}</dd></div>)}</dl>}
     {lesson.actionPlan && <details><summary>Starting material or missing earlier work</summary><p>{lesson.actionPlan.start}</p>{lesson.actionPlan.material?.map(p=><p key={p}>{p}</p>)}</details>}
     <details><summary>Reading for this task</summary><a href={lesson.resource.url} target="_blank" rel="noreferrer">{lesson.resource.title} ↗</a><p>{lesson.resources?.find(r=>r.id===lesson.resource.id)?.section}</p><p>Use the teaching and examples here if the page is unavailable. State any source detail you could not verify.</p></details>
    </>}
    {action.field==='app' && lesson.id==='week1-day1-v1' && <details><summary>Use a supplied walkthrough instead</summary>{suppliedWalkthrough.map(p=><p key={p}>{p}</p>)}</details>}
    {priorEntry && <blockquote><strong>Your entry {priorEntry[1]}:</strong> {record.worksheet?.[`entry-${priorEntry[1]}-saw`] || 'No entry yet. Use Back to write it.'}</blockquote>}
    {field && <>
     {external && <p>Write this answer in your file or on paper, then choose Next. The field below is optional for your chosen route.</p>}
     {optional && <p className="optional-answer">{field.optional?'Optional answer.':'This answer is not required for your selected practice route.'} You can leave it empty and continue.{field.requiredWhen && ' Keep participant evidence empty when no session took place.'}</p>}
     <Field field={field} value={record.worksheet?.[field.id] || ''} onChange={v=>setField(field.id,v)} readOnly={readOnly}/>
     {guide && <div className="action-context"><p><strong>For this task:</strong> {guide.expect}</p>{guide.start && <p>{guide.start}</p>}<details><summary>Task instructions and your related answers</summary><ol>{lesson.steps[action.step-1].instructions.map((t,i)=><li key={i}>{t}</li>)}</ol>{currentFields.filter(f=>f.id!==field.id && record.worksheet?.[f.id]?.trim()).map(f=><blockquote key={f.id}><strong>{f.label}</strong><br/>{record.worksheet?.[f.id]}</blockquote>)}{guide.example && <p>{guide.example}</p>}{guide.terms?.map(t=><p key={t.term}><strong>{t.term}:</strong> {t.meaning}</p>)}</details>{lesson.actionPlan?.material && <details><summary>Supplied practice notes</summary>{lesson.actionPlan.material.map(p=><p key={p}>{p}</p>)}</details>}</div>}
     {lesson.id==='m03-l04-v1' && (field.id.startsWith('row-') || field.id==='repairs') && <div className="action-tool"><ContrastCalculator/></div>}
    </>}
    {question && <SavedQuestion key={question.id} {...question} record={record} setRecord={setRecord} readOnly={readOnly}>
     {action.kind==='supported' && <p>{guide?.supported?.then}</p>}
     {action.kind==='sort' && guide?.sorter && <p>{guide.sorter.then}</p>}
     {check && <><p><strong>Improve your answer:</strong> {check.repair}</p><p><strong>Check again:</strong> {check.recheck}</p>{external?<p>Make the repair in your file or on paper. Record the change in Your work.</p>:<RepairAnswer key={question.id} fields={repairIds.map(id=>fields.find(f=>f.id===id)!).filter(Boolean)} record={record} setField={setField} readOnly={readOnly}/>}</>}
    </SavedQuestion>}
    {field && <p className="enough"><strong>Enough for now:</strong> {optional?'Skip this when it does not apply.':guide?.enough || 'One clear answer in your own words. You can improve it during Check.'} If something did not happen or could not be checked, say so rather than inventing it.</p>}
    {action.kind!=='review' && <div className="flow-actions"><button className="secondary" disabled={index===0} onClick={()=>move(flow[index-1])}>← Back</button><button className="primary" disabled={!readOnly && !ready} onClick={()=>move(flow[index+1],true)}>{optional?'Skip or continue →':'Next →'}</button></div>}
    {action.kind==='review' && <button className="text-button" onClick={()=>move(flow[index-1])}>← Back to your last answer</button>}
    {!ready && !readOnly && <small>{field?'Write your answer to continue.':'Choose an answer and select Show me why to continue.'} You can revisit any action from Lesson overview.</small>}
   </div>
   {section==='learn' && <details className="teaching-detail"><summary>Reading, video and deeper explanation</summary>{lesson.explanation.map(t=><p key={t}>{t}</p>)}<a href={lesson.resource.url} target="_blank" rel="noreferrer">{lesson.resource.title}</a>{a.video && <VideoActionBlock video={a.video} online={online}/>}</details>}
   {section==='practice' && action.kind==='review' && <div className="action-handoff"><p><strong>Keep for later:</strong> {a.saveRoute?.next || a.handoff}</p><details><summary>Review criteria</summary><ul>{lesson.rubric.map(r=><li key={r}>{r}</li>)}</ul></details></div>}
  </div><aside className="flow-sidebar" aria-label="Lesson task context"><span className="eyebrow">YOUR CURRENT TASK</span><p>{guide?.expect || action.title}</p><p className="muted">Use Lesson overview above to jump to any answer. Your place saves automatically.</p>{lesson.actionPlan && <details><summary>Practice setup</summary><p>{lesson.actionPlan.start}</p></details>}<p><strong>{sectionActions.indexOf(action)+1}</strong> of {sectionActions.length} actions in {sections.find(s=>s.id===section)?.label}</p></aside></div>
 </section>;
}
