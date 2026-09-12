import assert from 'node:assert/strict';
import {complete,base,lesson,segment} from './test-learning.mjs';
const baseUrl=process.env.HARU_TEST_BASE || 'http://127.0.0.1:8791';
const live=process.argv.includes('--live');
if(!live && !/^http:\/\/(127\.0\.0\.1|localhost):/.test(baseUrl)) throw Error('Local tests only; hosted test writes require --live.');
const call=async (path,method='GET',body,cookie)=>fetch(baseUrl+path,{method,headers:{origin:baseUrl,...(cookie?{cookie}:{}),...(body?{'content-type':'application/json'}:{})},body:body?JSON.stringify(body):undefined});
const login=await call('/api/login','POST',{username:'test',password:''});
assert.equal(login.status,200);
const cookie=login.headers.get('set-cookie').split(';')[0];
const path='/api/progress?lessonId='+lesson.id;
const before=await (await call(path,'GET',undefined,cookie)).json();
let revision=before.revision;
try {
  const rejected=await call(path,'PUT',{expectedRevision:revision,record:{...base,learning:{finishedAt:new Date().toISOString()}}},cookie);
  assert.equal(rejected.status,400,'Missing work cannot be marked finished through API');
  const r={...complete,status:'ready-for-review',minutes:1,sessions:[{...segment,elapsedMs:65000,minutes:1}],timingRemainderMs:5000,
    learning:{...complete.learning,action:'review-work',finishedAt:new Date().toISOString()}};
  const saved=await call(path,'PUT',{expectedRevision:revision,record:r},cookie);
  assert.equal(saved.status,200,await saved.clone().text()); revision=(await saved.json()).revision;
  const read=await (await call(path,'GET',undefined,cookie)).json();
  assert.deepEqual(read.record.learning,r.learning); assert.equal(read.record.status,'ready-for-review');
  assert.deepEqual(read.record.sessions,r.sessions); assert.equal(read.record.timingRemainderMs,5000);
  const stale=await call(path,'PUT',{expectedRevision:revision-1,record:r},cookie); assert.equal(stale.status,409);
  const second=await call('/api/login','POST',{username:'test',password:''});
  const secondCookie=second.headers.get('set-cookie').split(';')[0];
  const secondRead=await (await call(path,'GET',undefined,secondCookie)).json(); assert.deepEqual(secondRead.record,read.record);
  const changed={...read.record,worksheet:{...read.record.worksheet,app:'Revised supplied practice'}};
  const revised=await call(path,'PUT',{expectedRevision:revision,record:changed},cookie);
  assert.equal(revised.status,200); const revisionResult=await revised.json(); revision=revisionResult.revision;
  assert.equal(revisionResult.record.learning.finishedAt,undefined,'Substantive edits reopen practice server-side');
  const summary=await (await call('/api/course-records','GET',undefined,cookie)).json();
  assert.equal(summary.records.find(r=>r.lessonId===lesson.id).record.learning.finishedAt,undefined);
  console.log(`${live?'Hosted test account':'Local'}: full learning/timing round-trip, worksheet-only review, incomplete finish rejection, stale-write rejection, second session and reopening passed.`);
} finally {
  const restore=await call(path,'PUT',{expectedRevision:revision,record:before.record || base},cookie);
  assert.equal(restore.status,200,'Restore original test record');
  const restored=await (await call(path,'GET',undefined,cookie)).json();
  const strip=r=>{const {updatedAt,...other}=r;return other;};
  assert.deepEqual(strip(restored.record),strip(before.record || base));
  console.log('Original test record restored (server revision and timestamp advanced).');
}
