import type { Lesson, WorksheetField } from './teaching';
import type { LessonAction } from './lessonOneFlow';
import { actionPlans } from './moduleActionPlans';

const conditional: Record<string, {field:string; value:string; answers:string[]}[]> = {
 'week1-day3-v1': [{field:'session-status',value:'Real conversation with a consenting adult',answers:['observations','interpretations']}],
 'week2-day5-v1': [{field:'session-status',value:'A consenting adult is taking part',answers:['consent-confirmed']}],
 'm05-l06-v1': [{field:'session-status',value:'A consented interview took place',answers:['said']}],
 'm05-l07-v1': [{field:'session-status',value:'A consented observation took place',answers:['actions','environment','workarounds','unsaid-1','unsaid-2','unsaid-3']}],
 'm05-l08-v1': [{field:'run-status',value:'No participant: protocol submitted with a dated gap',answers:['gap-note']}],
};

export function withLessonActions(input: Lesson): Lesson {
 const plan = actionPlans[input.id];
 if (!plan) return input; // Lesson 1's permanent action IDs remain untouched.
 const field = (f: WorksheetField): WorksheetField => {
   const rule=conditional[input.id]?.find(c=>c.answers.includes(f.id));
   return {...f, ...(plan.optional?.includes(f.id) ? {optional:true} : {}),
     ...(rule ? {requiredWhen:{field:rule.field,values:[rule.value]}} : {}),
     ...(/photo-reference|sheet-reference|state-table-reference/.test(f.id) ? {hint:'Write a file location, or describe where you keep the paper version. A photo is optional; nothing is uploaded here.'} : {}),
     ...(input.id==='m05-l02-v1' && f.id==='will-run' ? {label:'The two feasible methods for your next study'} : {}),
     ...(input.id==='m05-l06-v1' && ['inferred','worked','failed','wish','reconstructed'].includes(f.id) ? {hint:'After a real interview, describe what happened. For rehearsal, describe only your guide wording, where you stumbled and what you would revise. Label it rehearsal; do not invent a participant response. If nothing failed or was reconstructed, say so.'} : {}),
     ...(f.id==='improvement-made' ? {hint:'Name one answer you improved and why. If no repair was needed, name the answer you checked and explain why it already meets the criterion.'} : {})};
 };
 const a={...input.apprenticeship!,worksheet:input.apprenticeship!.worksheet!.map(s=>({...s,fields:s.fields.map(field)}))};
 if(input.id==='m05-l06-v1') a.guide=a.guide!.map((g,i)=>i===2?{...g,enough:'For an interview, keep their words separate from your interpretation. For rehearsal, leave Said empty and record only guide wording risks and the missing access.'}:g);
 // The action route replaces the earlier optional-code invitation before web foundations.
 const l:Lesson={...input,apprenticeship:a,actionPlan:plan,freeToolPath:plan.start,
   ...(input.id==='week2-day2-v1'?{prerequisite:'Bring consented notes, or use the six explicitly simulated notes in this lesson.'}:{})};
 const flow:LessonAction[]=[{id:'welcome',section:'learn',step:1,kind:'intro',title:'Start with a clear task',instruction:input.objective || a.mission}];
 input.teach.forEach((text,index)=>flow.push({id:`learn-${index+1}`,section:'learn',step:1,kind:'teach',index,title:`Understand the idea · ${index+1}`,instruction:text}));
 flow.push({id:'worked-example',section:'learn',step:1,kind:'teach',title:'Connect the idea to an example',instruction:'Illustrative teaching example. This is not research you conducted or evidence about your own design.',body:[input.example]});
 flow.push({id:'workspace',section:'learn',step:1,kind:'setup',title:'Get your practice ready',instruction:plan.start,body:['Write answers in this course. Keep drawings in your own paper folder or file and record their location. You can stop and resume after any action.']});
 if(plan.material)flow.push({id:'supplied-material',section:'learn',step:1,kind:'teach',title:'Keep these source notes beside you',instruction:'Use your own consented notes, or the labelled training notes below. Do not mix their source labels.',body:plan.material});
 const fields=a.worksheet!.flatMap(s=>s.fields);
 function step(index:number,section:LessonAction['section']) {
   const g=a.guide![index];
   flow.push({id:`step-${index+1}-brief`,section,step:index+1,guideIndex:index,kind:'setup',title:input.steps[index].title,instruction:g.expect,body:input.steps[index].instructions});
   if(g.demo) flow.push({id:`step-${index+1}-demo`,section,step:index+1,guideIndex:index,kind:'demo',title:'See the decision being made',instruction:g.demo.scenario});
   if(g.supported) flow.push({id:`step-${index+1}-try`,answerId:`try-${index+1}`,section,step:index+1,guideIndex:index,kind:'supported',title:'Try a supplied example',instruction:g.supported.material});
   g.sorter?.items.forEach((item,i)=>flow.push({id:`step-${index+1}-sort-${i+1}`,answerId:`sort-${index+1}-${item.id}`,section,step:index+1,guideIndex:index,kind:'sort',index:i,title:`Try the distinction · ${i+1} of ${g.sorter!.items.length}`,instruction:g.sorter!.intro}));
   (g.fields || []).forEach(id=>{
     const f=fields.find(f=>f.id===id)!;
     flow.push({id:`write-${id}`,section,step:index+1,guideIndex:index,kind:'field',field:id,title:f.label,instruction:f.kind==='choice' ? 'Choose the option that honestly describes your work.' : (f.hint || `Write your answer for “${f.label}”. Use the task instructions below to decide what to include.`)});
   });
 }
 for(let i=0;i<4;i++) step(i,'practice-plan');
 a.checks!.forEach((c,index)=>flow.push({id:`reason-${index+1}`,section:'check',step:5,kind:'check',index,title:`Check your reasoning · ${index+1} of ${a.checks!.length}`,instruction:'Choose the reason you believe, read the feedback, then improve the relevant answer if needed.',repairFields:plan.repairs[index]}));
 step(4,'practice');
 flow.push({id:'review-work',section:'practice',step:5,kind:'review',title:'Review and finish your practice',instruction:a.saveRoute!.next});
 return {...l,flow};
}

export function actionQuestion(l:Lesson,a:LessonAction) {
 const guide=l.apprenticeship?.guide;
 if(a.kind==='check') { const q=l.apprenticeship?.checks?.[a.index!]; return q && {id:a.answerId || `check-${a.index!+1}`,question:q.question,options:q.options}; }
 if(a.kind==='supported') { const q=guide?.[a.guideIndex!]?.supported; return q && {id:a.answerId!,question:q.question,options:q.options}; }
 if(a.kind==='sort') {
   const sorter=a.guideIndex===undefined ? guide?.find(g=>g.sorter)?.sorter : guide?.[a.guideIndex]?.sorter;
   const item=sorter?.items[a.index!];
   return sorter && item && {id:a.answerId || `sort-${item.id}`,question:item.text,options:sorter.options.map(label=>({label,feedback:item.feedback[label]}))};
 }
}

export function fieldRequired(field: WorksheetField, record: {worksheet?: Record<string,string>}) {
 if(field.optional) return false;
 return !field.requiredWhen || field.requiredWhen.values.includes(record.worksheet?.[field.requiredWhen.field] || '');
}
