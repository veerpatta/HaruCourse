import {registerHooks} from 'node:module';
import assert from 'node:assert/strict';
registerHooks({resolve(s,c,next){return next(s.startsWith('.')&&!/\.[a-z]+$/.test(s)?s+'.ts':s,c);}});
const {publishedLessons}=await import('../src/lessons.ts');
const {baselineLesson}=await import('../src/course.ts');
const {actionQuestion,fieldRequired}=await import('../src/lessonActions.ts');
const {finishProblems,lessonWorkProgress,prepareRecord}=await import('../shared/learning.ts');
const {recordSchema,worksheetFieldId}=await import('../shared/record.ts');
export const targets=publishedLessons.filter(l=>(l.week||1)<=5);
export function completeFor(l){
 const fields=l.apprenticeship.worksheet.flatMap(s=>s.fields);
 const r={version:1,notes:'QA sample reflection',submission:'QA paper folder',minutes:0,status:'practicing',updatedAt:'',worksheet:Object.fromEntries(fields.map(f=>[f.id,f.options?.at(-1)||'QA: a bounded answer with source and limitation.'])),learning:{action:'review-work',completed:l.flow.map(a=>a.id),answers:{}}};
 for(const f of fields) if(!fieldRequired(f,r))delete r.worksheet[f.id];
 for(const a of l.flow){const q=actionQuestion(l,a);if(q)r.learning.answers[q.id]={value:q.options.at(-1).label,shown:true};}
 return r;
}
assert.equal(targets.length,43);assert.equal(publishedLessons.filter(l=>l.flow).length,43);assert.equal(baselineLesson.flow,undefined);
let fieldCount=0,actionCount=0,questionCount=0;
for(const l of targets){
 assert.equal(lessonWorkProgress(l,{version:1,notes:'',submission:'',minutes:0,status:'not-started',updatedAt:''}).percent,0,l.id+' empty optional fields must not create progress');
 const fields=l.apprenticeship.worksheet.flatMap(s=>s.fields);fieldCount+=fields.length;actionCount+=l.flow.length;
 assert.equal(new Set(l.flow.map(a=>a.id)).size,l.flow.length,l.id+' duplicate action');
 assert.deepEqual(l.flow.filter(a=>a.kind==='field').map(a=>a.field).sort(),fields.map(f=>f.id).sort(),l.id+' every field exactly once');
 for(const a of l.flow){assert.ok(worksheetFieldId.safeParse(a.id).success,l.id+': '+a.id);assert.ok(a.step>=1&&a.step<=5);assert.ok(a.title&&a.instruction);for(const id of a.repairFields||[])assert.ok(fields.some(f=>f.id===id),l.id+' repair '+id);}
 if(l.actionPlan){
  assert.equal(l.flow.filter(a=>a.kind==='demo').length,l.apprenticeship.guide.filter(g=>g.demo).length,l.id+' demonstrations retained');
  assert.equal(l.flow.filter(a=>a.kind==='supported').length,l.apprenticeship.guide.filter(g=>g.supported).length,l.id+' supported attempts retained');
  assert.ok(l.flow.some(a=>a.kind==='supported'||a.kind==='sort'));
 }
 const r=completeFor(l);questionCount+=Object.keys(r.learning.answers).length;
 assert.ok(recordSchema.safeParse(r).success,l.id+' bounded record');
 assert.deepEqual(finishProblems(l,r),[],l.id+' honest rehearsal/optional route can finish');
 const finished={...r,learning:{...r.learning,finishedAt:new Date().toISOString()}};
 assert.equal(lessonWorkProgress(l,finished).percent,100,l.id);
 assert.equal(lessonWorkProgress(l,finished).done,lessonWorkProgress(l,finished).total,l.id+' bar full');
 const firstQ=l.flow.find(a=>a.kind==='supported'||a.kind==='sort'); const q=actionQuestion(l,firstQ);
 assert.ok(finishProblems(l,{...r,learning:{...r.learning,answers:{...r.learning.answers,[q.id]:{value:'not-an-option',shown:true}}}}).length,l.id+' invalid practice answer rejected');
 assert.equal(prepareRecord(finished,{...finished,worksheet:{...finished.worksheet,[fields[0].id]:'Changed work'}}).learning.finishedAt,undefined);
}
const interview=targets.find(l=>l.id==='m05-l06-v1'), rehearsal=completeFor(interview);
assert.equal(rehearsal.worksheet.said,undefined);
assert.ok(finishProblems(interview,{...rehearsal,worksheet:{...rehearsal.worksheet,'session-status':'A consented interview took place'}}).some(p=>p.includes('Said')),'Real interview needs its evidence');
const old={version:1,notes:'Old notes',submission:'',minutes:7,status:'practicing',updatedAt:'',worksheet:{'old-field':'Preserved'}};
assert.deepEqual(recordSchema.parse(old),old);
console.log(`All ${targets.length} lesson flows passed: ${fieldCount} preserved fields, ${actionCount} actions, ${questionCount} saved questions; conditional routes and finish/reopen gates passed.`);
