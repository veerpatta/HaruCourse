// Local UI regression: fictional records, intercepted API; never a live account.
// UI_QA_PLAYWRIGHT_MODULE can point to an existing Playwright installation.
// UI_QA_BROWSER_EXECUTABLE can select an installed Chrome/Edge binary.
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { registerHooks } from 'node:module';
const tsHook=registerHooks({resolve(s,c,next){return next(s.startsWith('.')&&!/\.[a-z]+$/.test(s)?s+'.ts':s,c);}});
const { publishedLessons } = await import('../src/lessons.ts');
tsHook.deregister();
const { chromium } = await import(process.env.UI_QA_PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.UI_QA_URL || 'http://127.0.0.1:5192';
assert.equal(new URL(base).hostname, '127.0.0.1', 'Local QA only');
const before = process.argv.includes('--capture-before');
const output = resolve('output/minimal-ui');
await mkdir(output, { recursive: true });
const browser = await chromium.launch({headless:true, executablePath:process.env.UI_QA_BROWSER_EXECUTABLE});
const report = {phase:before?'before':'after', passed:false, checks:[], screenshots:[], accessibility:[], errors:[], externalRequests:[]};
const empty = () => ({version:1,notes:'',submission:'',minutes:0,status:'not-started',updatedAt:''});
const records = new Map();
let position = null, offline = false, conflict = false, failRead = false;
const context = await browser.newContext({viewport:{width:1440,height:1000},reducedMotion:'reduce'});
await context.route('**/*', async route => {
 const url = new URL(route.request().url());
 if(url.origin!==base){report.externalRequests.push(url.origin);return route.abort();}
 if(!url.pathname.startsWith('/api/'))return route.continue();
 if(offline)return route.abort();
 const send=(body,status=200)=>route.fulfill({status,contentType:'application/json',body:JSON.stringify(body)});
 const body=route.request().postDataJSON();
 if(url.pathname==='/api/session')return send({user:{id:'ui-qa-fictional',name:'Local UI sample',role:'learner'},expiresAt:Date.now()+86400000});
 if(url.pathname==='/api/review-settings')return send({settings:null});
 if(url.pathname==='/api/course-records')return send({records:[...records].map(([lessonId,data])=>({lessonId,...data})),reviews:[],version:1});
 if(url.pathname==='/api/feedback')return send({feedback:[],version:1});
 if(url.pathname==='/api/learning-position'){
  if(body)position={lessonId:body.lessonId,sectionId:body.sectionId,revision:(position?.revision||0)+1,updatedAt:new Date().toISOString()};
  return send({position});
 }
 if(url.pathname==='/api/progress'){
  const id=url.searchParams.get('lessonId'), current=records.get(id)||{record:empty(),revision:0};
  if(body){
   if(conflict){conflict=false;const newer={record:{...current.record,notes:'Fictional concurrent draft'},revision:current.revision+1};records.set(id,newer);return send(newer,409);}
   const saved={record:body.record,revision:current.revision+1};records.set(id,saved);return send(saved);
  }
  if(failRead)return send({error:'Fictional unavailable server'},503);
  return send(current);
 }
 throw Error('Unexpected local API: '+url.pathname);
});
const page=await context.newPage();
page.setDefaultTimeout(10000);
page.on('pageerror',error=>report.errors.push(error.message));
async function visit(lesson,section='learn'){
 if(page.url().startsWith(base))await page.evaluate(()=>history.replaceState({'harucourse:nav':true,tab:'Learn',baseline:false,lesson:null,section:'learn',scrollY:0},''));
 await page.goto(base);
 await page.waitForSelector('.studio-page');
 if(lesson){
  await page.evaluate(({lesson,section})=>{history.replaceState({'harucourse:nav':true,tab:'Learn',baseline:false,lesson,section,scrollY:0},'');}, {lesson,section});
  await page.reload();await page.waitForSelector('.lesson-reader');
  if(failRead)await page.waitForFunction(()=>/server|device/.test(document.querySelector('.lesson-toolbar .save-status')?.textContent||''));
  else await page.getByText('Saved online',{exact:true}).first().waitFor();
 }
}
async function capture(name){
 await page.screenshot({path:resolve(output,`${report.phase}-${name}.png`),fullPage:true});
 report.screenshots.push(`${report.phase}-${name}.png`);
 console.log('Captured '+report.phase+'-'+name);
}
async function noOverflow(name){
 const width=await page.evaluate(()=>({actual:document.documentElement.scrollWidth,viewport:innerWidth}));
 assert.ok(width.actual<=width.viewport+1,`${name}: ${JSON.stringify(width)}`);
 report.checks.push(name+' reflows');
}
try {
 for(const [name,width,height] of [['desktop',1440,1000],['mobile',390,844]]){
  await page.setViewportSize({width,height});await visit();await capture(`learn-${name}`);
  await visit('week1-day1-v1');await capture(`intro-${name}`);
  if(!before){
   await page.addScriptTag({path:resolve('node_modules/axe-core/axe.min.js')});
   const result=await page.evaluate(async()=>{
    const r=await axe.run('.lesson-reader',{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}});
    return r.violations.map(v=>({id:v.id,impact:v.impact,description:v.description,nodes:v.nodes.map(n=>n.target)}));
   });
   report.accessibility.push({view:name,violations:result});
  }
 }
 if(!before){
  for(const width of [320,360,390,768,1440,1920]){
   await page.setViewportSize({width,height:900});await visit('week1-day1-v1');await noOverflow(`${width}px intro`);
   await page.locator('.flow-overview > details > summary').click();
   await page.locator('.flow-outline-group').filter({has:page.locator('summary').filter({hasText:/^Do ·/})}).locator('summary').click();
   await page.getByRole('button',{name:'Choose somewhere to practise',exact:false}).click();
   await page.locator('.action-card .worksheet-field').first().waitFor();await noOverflow(`${width}px answer`);
   console.log('Checked width '+width);
  }
  await page.setViewportSize({width:390,height:844});
  const input=page.locator('.action-card .worksheet-field input, .action-card .worksheet-field textarea').first();
  const answer='Fictional local UI draft — '+ 'A long label and a bounded answer. '.repeat(35);
  await input.fill(answer);await page.waitForTimeout(1200);
  const action=await page.locator('.action-card').getAttribute('data-action');
  await page.reload();await input.waitFor();assert.equal(await input.inputValue(),answer);
  assert.equal(await page.locator('.action-card').getAttribute('data-action'),action);
  assert.ok(await page.getByText('Welcome back.',{exact:true}).isVisible());
  report.checks.push('long answer, exact action and saved draft survive reload');
  await capture('answer-mobile');
  await page.setViewportSize({width:1440,height:1000});await capture('answer-desktop');
  await page.getByRole('button',{name:'Continue from here',exact:true}).click();
  await page.locator('.flow-actions .primary').click();
  assert.equal(await page.locator('.action-card h2').evaluate(el=>el===document.activeElement),true);
  const headingBox=await page.locator('.action-card h2').boundingBox(), tabsBox=await page.locator('.section-tabs').boundingBox();
  assert.ok(headingBox.y>=tabsBox.y+tabsBox.height,'Sticky sections must not cover the focused heading');
  report.checks.push('Next focuses the new action heading');
  await page.getByRole('button',{name:'Check',exact:true}).click();await page.goBack();
  await page.waitForFunction(()=>document.querySelector('.section-tabs [aria-current="step"]')?.textContent.includes('Do'));
  assert.ok(await page.getByRole('button',{name:'Do',exact:true}).getAttribute('aria-current'));
  report.checks.push('browser Back restores lesson section');
  // Simulated loss of API access while the course remains cached in the tab.
  offline=true;await page.evaluate(()=>{Object.defineProperty(navigator,'onLine',{configurable:true,get:()=>false});dispatchEvent(new Event('offline'));});
  const offlineInput=page.locator('.action-card .worksheet-field input, .action-card .worksheet-field textarea').first();
  await offlineInput.fill('Fictional offline answer');await page.waitForTimeout(1000);
  assert.match(await page.locator('.lesson-toolbar .save-status').innerText(),/device/);
  await page.reload();await offlineInput.waitFor();assert.equal(await offlineInput.inputValue(),'Fictional offline answer');
  offline=false;await page.evaluate(()=>{Object.defineProperty(navigator,'onLine',{configurable:true,get:()=>true});dispatchEvent(new Event('online'));});
  await page.getByText('Saved online',{exact:true}).first().waitFor();report.checks.push('offline draft, reload and reconnect');
  conflict=true;await offlineInput.fill('Fictional conflicting answer');
  await page.getByRole('heading',{name:'Two versions need your choice',exact:true}).waitFor();
  assert.equal(await offlineInput.inputValue(),'Fictional conflicting answer');
  await page.getByRole('button',{name:'Keep my draft and save it',exact:true}).click();
  await page.getByText('Saved online',{exact:true}).first().waitFor();report.checks.push('conflict stays visible and preserves local draft');
  // Keyboard outline, disclosure and large text. No mouse required for reveal.
  await page.locator('.flow-overview > details > summary').focus();await page.keyboard.press('Enter');
  assert.equal(await page.locator('.flow-overview > details').evaluate(el=>el.open),true);
  await page.keyboard.press('Tab');assert.ok(await page.evaluate(()=>document.activeElement!==document.body));
  await page.addStyleTag({content:'html{font-size:200%}'});await page.setViewportSize({width:360,height:900});await noOverflow('200% text at 360px');
  await capture('large-text-mobile');report.checks.push('keyboard disclosure and tab access');
  await visit('week1-day1-v1','learn');
  await page.locator('.flow-overview > details > summary').click();
  await page.getByRole('button',{name:'Look at two booking screens',exact:false}).click();
  assert.ok(await page.locator('.annotated-screens').count() || (await page.locator('.action-card').innerText()).includes('Screen A'));
  report.checks.push('worked visual example stays visible');
  // Optional AI follows feedback, with a complete non-AI path and a return.
  await page.locator('.flow-actions .primary').click();
  await page.getByRole('radio').first().check();await page.getByRole('button',{name:'Show me why',exact:true}).click();
  await page.locator('.optional-ai > summary').waitFor();
  assert.equal(await page.locator('.optional-ai').evaluate(el=>el.open),false);
  await page.locator('.optional-ai > summary').focus();await page.keyboard.press('Enter');
  assert.ok(await page.getByText('Continue without AI:',{exact:true}).isVisible());
  await page.getByRole('button',{name:/Return to that course answer/}).click();
  assert.ok(await page.locator('.action-card .worksheet-field').isVisible());report.checks.push('optional AI is keyboard discoverable and returns to the saved answer');
  // A full plan is lossless, while the visible introduction retains teaching.
  await visit('m11-l01-v1');await page.locator('.lesson-full-plan > summary').click();
  assert.ok(await page.getByRole('heading',{name:'Your plan for this lesson',exact:true}).isVisible());
  report.checks.push('complete lesson orientation remains available');
  const sensitiveLesson=publishedLessons.find(l=>l.id.startsWith('m05-')&&l.apprenticeship.worksheet.some(s=>s.fields.some(f=>f.sensitive&&f.kind==='long')));
  const sensitiveField=sensitiveLesson.apprenticeship.worksheet.flatMap(s=>s.fields).find(f=>f.sensitive&&f.kind==='long');
  const sensitiveAction=sensitiveLesson.flow.find(a=>a.field===sensitiveField.id||a.fields?.includes(sensitiveField.id));
  records.set(sensitiveLesson.id,{record:{...empty(),learning:{action:sensitiveAction.id}},revision:1});
  await visit(sensitiveLesson.id,sensitiveAction.section);
  await page.getByRole('textbox',{name:sensitiveField.label,exact:true}).fill('Fictional participant: participant@example.invalid');
  await page.waitForTimeout(1000);
  assert.ok(await page.getByRole('alert').filter({hasText:'stays on this device'}).isVisible());
  assert.match(await page.locator('.lesson-toolbar .save-status').innerText(),/device only/);
  assert.equal(records.get(sensitiveLesson.id).record.worksheet?.[sensitiveField.id],undefined);
  report.checks.push('participant notice and upload hold remain visible beside the answer');
  failRead=true;await visit('m11-l01-v1');assert.match(await page.locator('.lesson-toolbar .save-status').innerText(),/server|device/);failRead=false;
  report.checks.push('unavailable record still shows recovery feedback');
  await visit('baseline-v1');assert.equal(await page.locator('.ai-learning').count(),0);report.checks.push('diagnostic remains uncoached');
  assert.deepEqual(report.errors,[]);assert.deepEqual(report.externalRequests,[]);
 }
 report.passed=true;
} finally {
 await writeFile(resolve(output,`${report.phase}-report.json`),JSON.stringify(report,null,2));
 await browser.close();
 console.log(JSON.stringify(report,null,2));
}
