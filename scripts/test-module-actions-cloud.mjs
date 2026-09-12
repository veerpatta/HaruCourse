import assert from 'node:assert/strict';
import {targets,completeFor} from './test-module-actions.mjs';
const {finishProblems}=await import('../shared/learning.ts');
const base=process.env.HARU_TEST_BASE || 'http://127.0.0.1:8791',live=process.argv.includes('--live');
if(!live&&!/^http:\/\/(127\.0\.0\.1|localhost):/.test(base))throw Error('Hosted QA needs --live; only the test account is used.');
const request=(path,method='GET',body,cookie)=>fetch(base+path,{method,headers:{origin:base,...(cookie?{cookie}:{}),...(body?{'content-type':'application/json'}:{})},body:body?JSON.stringify(body):undefined});
const login=await request('/api/login','POST',{username:'test',password:''});assert.equal(login.status,200);
const cookie=login.headers.get('set-cookie').split(';')[0];
let checked=0;
for(const lesson of targets){
 const path='/api/progress?lessonId='+lesson.id;
 const initial=await request(path,'GET',undefined,cookie);assert.equal(initial.status,200);
 const before=await initial.json();let revision=before.revision;
 // A legacy explicit completion can remain valid after new teaching is added.
 // Do not disturb it when the public API could not restore that exact old state.
 if(before.record?.learning?.finishedAt && finishProblems(lesson,before.record).length){console.log('Preserved legacy completion without test writes: '+lesson.id);continue;}
 const empty={version:1,notes:'',submission:'',minutes:0,status:'not-started',updatedAt:''};
 try{
  const incomplete=await request(path,'PUT',{expectedRevision:revision,record:{...empty,learning:{finishedAt:new Date().toISOString()}}},cookie);assert.equal(incomplete.status,400,lesson.id+' incomplete finish');
  const record=completeFor(lesson);record.learning.finishedAt=new Date().toISOString();record.status='ready-for-review';
  const save=await request(path,'PUT',{expectedRevision:revision,record},cookie);assert.equal(save.status,200,lesson.id+': '+await save.clone().text());revision=(await save.json()).revision;
  const read=await (await request(path,'GET',undefined,cookie)).json();assert.deepEqual(read.record.learning,record.learning);assert.deepEqual(read.record.worksheet,record.worksheet);
  assert.equal((await request(path,'PUT',{expectedRevision:revision-1,record},cookie)).status,409);
  const edit=await request(path,'PUT',{expectedRevision:revision,record:{...read.record,notes:'QA revision reopens the practice'}},cookie);assert.equal(edit.status,200);const edited=await edit.json();revision=edited.revision;assert.equal(edited.record.learning.finishedAt,undefined);
  checked++;
 }finally{
  const restore=await request(path,'PUT',{expectedRevision:revision,record:before.record || empty},cookie);assert.equal(restore.status,200,'Restore '+lesson.id);
  const restored=await restore.json();const strip=r=>{const{updatedAt,...rest}=r;return rest;};assert.deepEqual(strip(restored.record),strip(before.record || empty));
 }
}
console.log(`${live?'Hosted':'Local'}: ${checked} lesson records passed completion, saved-question round-trip, stale-write rejection and reopening; original test records restored (revisions/timestamps advanced).`);
