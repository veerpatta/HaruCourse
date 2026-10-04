import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import type { Lesson, WorksheetField } from './teaching';
import type { RecordData } from '../shared/record';
import { actionDone, lessonWorkProgress, requiredAction } from '../shared/learning';
import { TRANSFER_COMPARE, actionQuestion, fieldRequired } from './lessonActions';
import { Field, SeeIt, VideoActionBlock } from './PracticeGuide';
import { ContrastCalculator } from './ApprenticeshipPanel';
import { SavedQuestion, type SetPractice } from './LearningProgress';
import { lessonOneAliases, lessonOneExample, lessonOneSessions, suppliedWalkthrough, type LessonAction } from './lessonOneFlow';
import { displayModuleReferences } from './orientation';
import { lessonSessions, sessionOf } from './sessions';
import { contactDetails } from './privacy';
import { lessonToolsFor, LessonTools } from './lessonToolRegistry';
import { AnnotatedBookingScreens, TransferScreen } from './lessonOneVisuals';

const sections = [{id:'learn',label:'Learn'},{id:'practice-plan',label:'Do'},{id:'check',label:'Check'},{id:'practice',label:'Your work'}];
export function currentAction(lesson: Lesson, record: RecordData, section: string) {
 const flow=lesson.flow ?? [];
 // Lesson 1 merged some single answers into rows; an older saved position
 // still reopens on the row that now holds that answer.
 const saved=record.learning?.action;
 const id=(lesson.id==='week1-day1-v1' && saved && lessonOneAliases[saved]) || saved;
 return flow.find(a=>a.id===id && a.section===section)
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

function AiLearningActivity({ai,onReturn}: {ai: NonNullable<NonNullable<Lesson['apprenticeship']>['ai']>;onReturn?:()=>void}) {
 const [copyState,setCopyState]=useState('Copy prompt');
 async function copy(){
  try { await navigator.clipboard.writeText(ai.prompt); setCopyState('Copied — paste it in your AI chat'); }
  catch { setCopyState('Select the prompt and copy it'); }
 }
 return <section className="ai-learning" aria-labelledby="ai-learning-title">
  <span className="eyebrow">OPTIONAL · LEARN WITH AN AI APP</span>
  <h3 id="ai-learning-title">Practise this idea through a short conversation</h3>
  <p>{ai.purpose}</p>
  <ol>{ai.setup.map(item=><li key={item}>{item}</li>)}</ol>
  <label htmlFor="ai-learning-prompt"><strong>Prompt to copy</strong></label>
  <textarea id="ai-learning-prompt" readOnly value={ai.prompt} rows={12} onFocus={event=>event.currentTarget.select()}/>
  <button type="button" className="secondary" onClick={copy}>{copyState}</button>
  <p><strong>Come back to the course:</strong> {ai.followUp}</p>
  {onReturn && <button type="button" className="text-button ai-return" onClick={onReturn}>Return to that course answer →</button>}
  <div className="ai-alternative"><strong>Continue without AI:</strong> {ai.alternative}</div>
 </section>;
}

// Shown beside any answer that could describe another real person.
function ParticipantNotice({value}: {value: string}) {
 const found=contactDetails(value);
 return <div className="participant-notice">
  <p><strong>Who can read this answer:</strong> you and your reviewer. It saves to this device and then to the course server.</p>
  <p>Write a de-identified summary using codes such as P1. Leave out names, contact details, exact places, health details and recordings; removing a name alone does not make notes anonymous. Keep raw notes in a private file or on paper with a date to delete them.</p>
  {!!found.length && <p className="tool-warning" role="alert">This answer contains what looks like {found.join(' and ')}. It stays on this device and will not save online until you remove it.</p>}
 </div>;
}

// "Use it on a new case": write first, then compare with the anchors.
function TransferTaskBlock({lesson,record,setRecord,readOnly}: {lesson:Lesson;record:RecordData;setRecord:SetPractice;readOnly:boolean}) {
 const t=lesson.apprenticeship?.transfer;
 if(!t) return null;
 const written=(record.worksheet?.['transfer-decision'] || '').trim();
 const compared=!!record.learning?.answers?.[TRANSFER_COMPARE]?.shown;
 const ready=written.length>=40;
 return <section className="transfer-task" aria-labelledby="transfer-title">
  <span className="eyebrow">USE IT ON A NEW CASE · OPTIONAL</span>
  <h3 id="transfer-title">Apply the idea without the lesson's cues</h3>
  {lesson.id==='week1-day1-v1' && <TransferScreen/>}
  <p className="supplied-material">{t.scenario}</p>
  <p><strong>Your task:</strong> {t.prompt}</p>
  <p className="muted">Write your decision and reason below first. The example answers appear only after you have written at least a few sentences, so they cannot do the thinking for you.</p>
  {compared && <div className="transfer-anchors" role="status">
   <h4>Compare your answer</h4>
   <dl>
    <div><dt>Weak</dt><dd>{t.anchors.weak}</dd></div>
    <div><dt>Adequate</dt><dd>{t.anchors.adequate}</dd></div>
    <div><dt>Strong</dt><dd>{t.anchors.strong}</dd></div>
   </dl>
   <p>Which is closest to yours? Revise your answer if you want; a reviewer uses this answer, and these descriptions, to judge whether you can use the skill on your own.</p>
  </div>}
  {!compared && !readOnly && <button type="button" className="secondary" disabled={!ready} onClick={()=>setRecord(r=>({...r,learning:{...r.learning,answers:{...r.learning?.answers,[TRANSFER_COMPARE]:{value:'compared',shown:true}}}}))}>{ready?'Compare with example answers':'Write a little more to compare'}</button>}
 </section>;
}

export function LessonFlow({lesson, record, setRecord, section, go, readOnly, onStep, online, onPause, jumpTo}: {
 lesson:Lesson;record:RecordData;setRecord:SetPractice;section:string;go:(s:string)=>void;
 readOnly:boolean;onStep:(n:number|null)=>void;online:boolean;onPause?:()=>void;jumpTo?:string;
}) {
 const flow=lesson.flow!;
 const [preview,setPreview]=useState<string>();
 const action=readOnly && preview ? flow.find(a=>a.id===preview && a.section===section) ?? currentAction(lesson,record,section) : currentAction(lesson,record,section);
 const heading=useRef<HTMLHeadingElement>(null);
 const overview=useRef<HTMLDetailsElement>(null);
 const firstActionPaint=useRef(true);
 // A returning learner sees where they were before anything else.
 const [welcome,setWelcome]=useState(()=>!readOnly && !!record.learning?.action && flow.findIndex(a=>a.id===record.learning?.action)>0);
 useLayoutEffect(()=>{
  if(firstActionPaint.current){firstActionPaint.current=false;return;}
  heading.current?.focus({preventScroll:true});
  heading.current?.scrollIntoView({block:'start',behavior:'instant'});
 },[action.id]);
 useEffect(()=>{onStep(action.step);},[action.id]);
 const jumped=useRef(false);
 useEffect(()=>{
  // Opened from a "revisit" suggestion: go straight to that action once.
  if(jumped.current || !jumpTo) return;
  const target=flow.find(a=>a.id===jumpTo);
  jumped.current=true;
  if(target && target.id!==action.id) move(target);
 },[jumpTo]);
 const index=flow.indexOf(action), sectionActions=flow.filter(a=>a.section===section);
 const sessions=lessonSessions(lesson, lesson.id==='week1-day1-v1' ? lessonOneSessions : undefined);
 const session=sessionOf(sessions,index);
 const a=lesson.apprenticeship!;
 const fields=a.worksheet!.flatMap(s=>s.fields);
 const field=fields.find(f=>f.id===action.field);
 const rowFields=action.kind==='fields' ? (action.fields || []).map(id=>fields.find(f=>f.id===id)!).filter(Boolean) : [];
 const guide=action.guideIndex===undefined ? undefined : a.guide?.[action.guideIndex];
 const currentFields=guide?.fields?.map(id=>fields.find(f=>f.id===id)!).filter(Boolean) || [];
 const question=actionQuestion(lesson,action);
 const check=action.kind==='check' ? a.checks?.[action.index!] : null;
 const work=lessonWorkProgress(lesson,record);
 const external=record.learning?.route==='external';
 const done=(item:LessonAction)=>actionDone(lesson,record,item);
 const transferField=field?.id==='transfer-decision';
 const tools=lessonToolsFor(lesson);
 const sorter=action.kind==='sort' ? (action.guideIndex===undefined ? a.guide?.find(g=>g.sorter)?.sorter : guide?.sorter) : undefined;
 function setField(id:string,value:string){setRecord(r=>({...r,status:r.status==='not-started'?'practicing':r.status,worksheet:{...r.worksheet,[id]:value}}));}
 function move(next:LessonAction,complete=false){
  if(readOnly)setPreview(next.id);
  else setRecord(r=>({...r,learning:{...r.learning,action:next.id,completed:complete?[...new Set([...(r.learning?.completed || []),action.id])]:r.learning?.completed},guide:{...r.guide,step:next.step,done:r.guide?.done || []}}));
  if(overview.current)overview.current.open=false;
  setWelcome(false);
  go(next.section);
 }
 const passive=['intro','example','teach','setup','demo'].includes(action.kind);
 const optionalField=!!field && !fieldRequired(field,record);
 const rowOptional=action.kind==='fields' && !requiredAction(action,fields,record);
 const ready=passive || done(action) || (external && (action.kind==='field' || action.kind==='fields')) || optionalField || rowOptional;
 const priorEntry=action.field?.match(/^entry-(\d+)-(label|goal|check)$/);
 const repairIds=action.repairFields || (action.index===0 ? ['user-goal'] : [1,2,3,4,5].flatMap(n=>[`entry-${n}-saw`,`entry-${n}-label`,`entry-${n}-check`]));
 const relevantTerms=guide?.terms?.filter(term=>`${action.title} ${action.instruction}`.toLowerCase().includes(term.term.toLowerCase()))
  || [];
 const visibleTerms=relevantTerms.length ? relevantTerms : (guide && (currentFields[0]?.id===field?.id || currentFields[0]?.id===rowFields[0]?.id) ? guide.terms?.slice(0,2) || [] : []);
 const aiAnchor=flow.find(item=>item.kind==='supported'||item.kind==='sort');
 const aiAnswer=question && record.learning?.answers?.[question.id];
 const showAiHere=!!a.beginner && !!a.ai && action.id===aiAnchor?.id;
 const aiReturnField=fields.find(item=>item.label===a.beginner?.returnLabel);
 const aiReturnAction=flow.find(item=>item.field===aiReturnField?.id || item.fields?.includes(aiReturnField?.id || ''));
 const isRequired=(item:LessonAction)=>requiredAction(item,fields,record);
 const relatedAnswers=currentFields.filter(f=>f.id!==field?.id && !rowFields.includes(f) && record.worksheet?.[f.id]?.trim()).slice(-3);
 const overviewContent=<nav aria-label="All lesson actions">{sections.map(s=>{const items=flow.filter(a=>a.section===s.id), required=items.filter(isRequired), complete=required.filter(done).length;return <details key={s.id} className="flow-outline-group" open={s.id===section}><summary>{s.label} · {complete} of {required.length} required</summary>{items.map(item=>{const at=flow.indexOf(item), starts=sessions.find(x=>x.start===at);return <div key={item.id} className="outline-item">{starts && <span className="outline-session">Session {starts.number} · {starts.title}</span>}<button className="text-button" aria-current={item.id===action.id?'step':undefined} onClick={()=>move(item)}><span aria-hidden>{done(item)?'✓':isRequired(item)?'○':'–'}</span><span>{item.title}{!isRequired(item)?' · Optional':''}</span></button></div>;})}</details>;})}</nav>;
 const pausePoint=!!session && session.number>1 && index===session.start;
 const previousSession=session && session.number>1 ? sessions[session.number-2] : undefined;
 const previousComplete=!!previousSession && flow.slice(previousSession.start,previousSession.end+1).filter(isRequired).every(done);
 const lastSaved=[...flow.slice(session?.start ?? 0, index+1)].reverse().map(item=>item.field || item.fields?.[0]).find(id=>id && record.worksheet?.[id]?.trim());
 return <section className="lesson-flow" aria-label="Guided lesson">
  <div className="flow-overview"><div><span className="progress-label">Lesson practice</span><strong>{work.done} of {work.total} required actions complete</strong><small>{work.percent}% of required work. This is not a score or proof of mastery.</small></div><details ref={overview}><summary>All actions</summary>{overviewContent}</details></div>
  <progress max={work.total} value={work.done} aria-label="Required lesson actions completed"/>
  {sessions.length>1 && <ol className="session-strip" aria-label="Sessions in this lesson">{sessions.map(s=><li key={s.number} aria-current={s===session?'step':undefined} className={flow.slice(s.start,s.end+1).filter(isRequired).every(done)?'is-done':''}><span>Session {s.number}</span><strong>{s.title}</strong></li>)}</ol>}
  {welcome && session && <div className="welcome-back" role="status">
   <p><strong>Welcome back.</strong> You were in session {session.number} of {sessions.length}, “{session.title}”, at: {action.title}.</p>
   {lastSaved && <p className="muted">Your last saved answer here — {fields.find(f=>f.id===lastSaved)?.label}: “{(record.worksheet?.[lastSaved] || '').slice(0,160)}{(record.worksheet?.[lastSaved] || '').length>160?'…':''}”</p>}
   <button type="button" className="text-button" onClick={()=>setWelcome(false)}>Continue from here</button>
  </div>}
  <div className="flow-layout"><div className="flow-main">
   {pausePoint && <div className="pause-point" role="note">
    <p><strong>Good place to pause.</strong> Session {session!.number-1} is saved{previousComplete?' and complete':''}. If you stop now, this lesson reopens right here.</p>
    <p className="muted">Next: session {session!.number}, {session!.title}. {session!.purpose}</p>
    {onPause && !readOnly && <button type="button" className="secondary" onClick={onPause}>Pause and return to lessons</button>}
   </div>}
   <div className="action-card" data-action={action.id}>
    <span className="eyebrow">{session && sessions.length>1 ? `Session ${session.number} of ${sessions.length} · ` : ''}{sections.find(s=>s.id===section)?.label} · {sectionActions.indexOf(action)+1} of {sectionActions.length}</span>
    <h2 tabIndex={-1} ref={heading}>{displayModuleReferences(action.title)}</h2><p className="action-instruction">{displayModuleReferences(action.instruction)}</p>
    {action.kind==='intro' && <>
     {a.beginner && <section className="beginner-brief" aria-labelledby="beginner-brief-title"><span className="eyebrow">START HERE</span><h3 id="beginner-brief-title">First, in everyday words</h3><p>{a.beginner.plain}</p>{!!a.beginner.terms.length && <><h4>Words you will use</h4><dl className="action-terms">{a.beginner.terms.map(term=><div key={term.term}><dt>{term.term}</dt><dd>{term.meaning}</dd></div>)}</dl></>}<h4>A quick example</h4><p>{a.beginner.example}</p><p><strong>Your first answer later:</strong> “{a.beginner.returnLabel}”. The course will show you what to do before asking for it.</p></section>}
     {sessions.length>1 && <section className="session-plan" aria-label="Sessions"><h3>This lesson in {sessions.length} short sessions</h3><ol>{sessions.map(s=><li key={s.number}><strong>{s.title}.</strong> {s.purpose}</li>)}</ol><p className="muted">Stop at any pause point, or after any answer. Your place saves as you go.</p></section>}
     {lesson.actionPlan ? <><p><strong>You will keep:</strong></p><ul>{lesson.outputs.map(o=><li key={o}>{displayModuleReferences(o)}</li>)}</ul><p>{displayModuleReferences(lesson.prerequisite)}</p></> : <><p><strong>You will keep:</strong> three definitions, one walkthrough, five evidence entries, two improvements and a short reflection, plus an optional answer on a new case.</p><p>Designers work with product managers, engineers and researchers. Today, you are practising how to ask useful questions before choosing a fix.</p></>}
     {lesson.actionPlan && <p><strong>Your starting route:</strong> {displayModuleReferences(lesson.actionPlan.start)}</p>}
     <div className="starter-route"><p><strong>If you do not have earlier work:</strong> use the ready-made starter below, label the result as rehearsal and keep the missing evidence visible.</p><details><summary>Copy the ready-made starter</summary><pre>{a.starter}</pre></details></div>
     <p>Answer one action at a time. Your place saves as you go. Time is optional information; add work in another app or on paper under Time details.</p>
     <div className="route-choice"><label htmlFor="flow-route">Choose where you will keep your answers</label><select id="flow-route" disabled={readOnly} value={record.learning?.route || 'worksheet'} onChange={e=>setRecord(r=>({...r,learning:{...r.learning,route:e.target.value as 'worksheet'|'external'}}))}><option value="worksheet">Write in this course worksheet</option><option value="external">Keep answers in my own file or on paper</option></select><p className="muted">If you choose a file or paper, keep every required output there. You will still answer the supplied practice questions here and add the file location at the end. Nothing uploads automatically.</p></div>
    </>}
    {action.body?.length && <ol className="action-directions">{action.body.map((p,i)=><li key={i}>{displayModuleReferences(p)}</li>)}</ol>}
    {action.kind==='example' && lesson.id==='week1-day1-v1' && action.id==='see-example' && <AnnotatedBookingScreens/>}
    {action.kind==='example' && lesson.id==='week1-day1-v1' && action.id==='pottery-example' && <div className="flow-example">{lessonOneExample.map(p=><p key={p}>{p}</p>)}</div>}
    {action.kind==='demo' && guide?.demo && <SeeIt demo={guide.demo}/>}
    {action.kind==='setup' && guide && <>
     {guide.start && <p><strong>Start here:</strong> {guide.start}</p>}
     {guide.enough && <p><strong>Enough for this task:</strong> {guide.enough}</p>}
     {!!guide.terms?.length && <dl className="action-terms">{guide.terms.map(t=><div key={t.term}><dt>{t.term}</dt><dd>{t.meaning}</dd></div>)}</dl>}
     {lesson.actionPlan && <details><summary>Starting material or missing earlier work</summary><p>{displayModuleReferences(lesson.actionPlan.start)}</p>{lesson.actionPlan.material?.map(p=><p key={p}>{displayModuleReferences(p)}</p>)}</details>}
     <section className="resource-brief" aria-label="Reading support"><h3>Optional reading support</h3><p>The lesson instructions and supplied examples are enough to continue. Use this source when you want another explanation:</p><a href={lesson.resource.url} target="_blank" rel="noreferrer">{lesson.resource.title} ↗</a><p>{lesson.resources?.find(r=>r.id===lesson.resource.id)?.section}</p><p className="muted">If the page is unavailable, continue here and state any source detail you could not verify.</p></section>
    </>}
    {action.id==='workspace' && <LessonTools tools={tools} open/>}
    {action.field==='app' && lesson.id==='week1-day1-v1' && <details><summary>Use a supplied walkthrough instead</summary>{suppliedWalkthrough.map(p=><p key={p}>{p}</p>)}</details>}
    {priorEntry && <blockquote><strong>Your entry {priorEntry[1]}:</strong> {record.worksheet?.[`entry-${priorEntry[1]}-saw`] || 'No entry yet. Use Back to write it.'}</blockquote>}
    {transferField && <TransferTaskBlock lesson={lesson} record={record} setRecord={setRecord} readOnly={readOnly}/>}
    {(field || rowFields.length>0) && <>
     {external && <p>Write this answer in your file or on paper, then choose Next. The field below is optional for your chosen route.</p>}
     {(optionalField || rowOptional) && !transferField && <p className="optional-answer">{field?.optional?'Optional answer.':'This answer is not required for your selected practice route.'} You can leave it empty and continue.{(field?.requiredWhen || rowFields.some(f=>f.requiredWhen)) && ' Keep participant evidence empty when no session took place.'}</p>}
     {[field, ...rowFields].some(f=>f?.sensitive) && <ParticipantNotice value={[field, ...rowFields].filter(f=>f?.sensitive).map(f=>record.worksheet?.[f!.id] || '').join('\n')}/>}
     {!!visibleTerms.length && <div className="words-for-action"><strong>Words for this action</strong><dl className="action-terms">{visibleTerms.map(term=><div key={term.term}><dt>{term.term}</dt><dd>{term.meaning}</dd></div>)}</dl></div>}
     {!!relatedAnswers.length && !transferField && <div className="related-answers"><strong>Your answers so far in this step</strong>{relatedAnswers.map(f=><p key={f.id}><span>{f.label}:</span> {(record.worksheet?.[f.id] || '').slice(0,200)}</p>)}</div>}
     {field && <Field field={field} value={record.worksheet?.[field.id] || ''} onChange={v=>setField(field.id,v)} readOnly={readOnly}/>}
     {rowFields.length>0 && <div className="answer-row">{rowFields.map(f=><Field key={f.id} field={f} value={record.worksheet?.[f.id] || ''} onChange={v=>setField(f.id,v)} readOnly={readOnly}/>)}</div>}
     {guide && !transferField && <div className="action-context"><p><strong>What to produce:</strong> {displayModuleReferences(guide.expect)}</p>{guide.start && <p><strong>How to start:</strong> {displayModuleReferences(guide.start)}</p>}{guide.example && <p><strong>Example:</strong> {displayModuleReferences(guide.example)}</p>}<details><summary>Full step instructions</summary><ol>{lesson.steps[action.step-1].instructions.map((t,i)=><li key={i}>{displayModuleReferences(t)}</li>)}</ol></details>{lesson.actionPlan?.material && <details><summary>Supplied practice notes</summary>{lesson.actionPlan.material.map(p=><p key={p}>{displayModuleReferences(p)}</p>)}</details>}</div>}
     {lesson.id==='m03-l04-v1' && field && (field.id.startsWith('row-') || field.id==='repairs') && <div className="action-tool"><ContrastCalculator/></div>}
     {!transferField && <LessonTools tools={tools}/>}
    </>}
    {question && <SavedQuestion key={question.id} {...question} seed={`${lesson.id}:${question.id}`} shuffle={action.kind!=='sort'} record={record} setRecord={setRecord} readOnly={readOnly}>
     {action.kind==='supported' && <p>{guide?.supported?.then}</p>}
     {sorter && <p>{sorter.then}</p>}
     {check && <><p><strong>Improve your answer:</strong> {check.repair}</p><p><strong>Check again:</strong> {check.recheck}</p><p className="muted">If your answer already meets this, say so in your improvement record and explain why. That is a valid result; you do not need to invent a mistake.</p>{external?<p>Make the repair in your file or on paper. Record the change in Your work.</p>:<RepairAnswer key={question.id} fields={repairIds.map(id=>fields.find(f=>f.id===id)!).filter(Boolean)} record={record} setField={setField} readOnly={readOnly}/>}</>}
    </SavedQuestion>}
    {showAiHere && (!question || aiAnswer?.shown) && <AiLearningActivity ai={a.ai!} onReturn={aiReturnAction?()=>move(aiReturnAction):undefined}/>}
    {showAiHere && question && !aiAnswer?.shown && <p className="ai-coming-up"><strong>Optional AI activity:</strong> answer the supplied question above and choose “Show me why”. The copy-and-paste activity will appear here next.</p>}
    {(field || rowFields.length>0) && !transferField && <p className="enough"><strong>Enough for now:</strong> {optionalField || rowOptional?'Skip this when it does not apply.':guide?.enough || 'One clear answer in your own words. You can improve it during Check.'} If something did not happen or could not be checked, say so rather than inventing it.</p>}
    {action.kind!=='review' && <div className="flow-actions"><button className="secondary" disabled={index===0} onClick={()=>move(flow[index-1])}>← Back</button><button className="primary" disabled={!readOnly && !ready} onClick={()=>move(flow[index+1],true)}>{optionalField || rowOptional?'Skip or continue →':'Next →'}</button></div>}
    {action.kind==='review' && <button className="text-button" onClick={()=>move(flow[index-1])}>← Back to your last answer</button>}
    {!ready && !readOnly && <small>{field || rowFields.length?'Write your answer to continue.':'Choose an answer and select Show me why to continue.'} You can revisit any action from Lesson overview.</small>}
   </div>
   {section==='learn' && <details className="teaching-detail"><summary>Reading, video and deeper explanation</summary>{lesson.explanation.map(t=><p key={t}>{t}</p>)}<a href={lesson.resource.url} target="_blank" rel="noreferrer">{lesson.resource.title}</a>{a.video && <VideoActionBlock video={a.video} online={online}/>}</details>}
   {section==='practice' && action.kind==='review' && <div className="action-handoff"><p><strong>Keep for later:</strong> {a.saveRoute?.next || a.handoff}</p><details><summary>Review criteria</summary><ul>{lesson.rubric.map(r=><li key={r}>{r}</li>)}</ul></details></div>}
  </div><aside className="flow-sidebar" aria-label="Lesson task context"><span className="eyebrow">YOUR CURRENT TASK</span><p>{guide?.expect || action.title}</p>{session && sessions.length>1 && <p className="muted">Session {session.number} of {sessions.length}: {session.title}</p>}<p className="muted">Use Lesson overview above to jump to any answer. Your place saves automatically.</p>{lesson.actionPlan && <details><summary>Practice setup</summary><p>{lesson.actionPlan.start}</p></details>}<p><strong>{sectionActions.indexOf(action)+1}</strong> of {sectionActions.length} actions in {sections.find(s=>s.id===section)?.label}</p></aside></div>
 </section>;
}
