// Production PWA client test on loopback with a fictional in-memory API.
// No live provider, real identity, database, credentials or browser profile.
import assert from 'node:assert/strict';
import { createServer } from 'node:http';
import { readFile, mkdir, writeFile } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
const { chromium }=await import(process.env.UI_QA_PLAYWRIGHT_MODULE||'playwright');
const root=resolve('dist'), records=new Map();let position=null;
const base='http://127.0.0.1:5193', report={passed:false,checks:[],errors:[],externalRequests:[]};
const empty={version:1,notes:'',submission:'',minutes:0,status:'not-started',updatedAt:''};
const mime={'.html':'text/html','.js':'text/javascript','.css':'text/css','.png':'image/png','.svg':'image/svg+xml','.webmanifest':'application/manifest+json'};
const server=createServer(async(req,res)=>{
 try{
  const url=new URL(req.url,base);
  const send=(data,status=200)=>{res.writeHead(status,{'content-type':'application/json'});res.end(JSON.stringify(data));};
  if(url.pathname.startsWith('/api/')){
   let text='';for await(const chunk of req)text+=chunk;const body=text?JSON.parse(text):null;
   if(url.pathname==='/api/session')return send({user:{id:'ui-pwa-fictional',name:'Local PWA sample',role:'learner'},expiresAt:Date.now()+86400000});
   if(url.pathname==='/api/course-records')return send({records:[...records].map(([lessonId,data])=>({lessonId,...data})),reviews:[],version:1});
   if(url.pathname==='/api/review-settings')return send({settings:null});
   if(url.pathname==='/api/feedback')return send({feedback:[],version:1});
   if(url.pathname==='/api/learning-position'){
    if(body)position={lessonId:body.lessonId,sectionId:body.sectionId,revision:(position?.revision||0)+1,updatedAt:new Date().toISOString()};return send({position});
   }
   if(url.pathname==='/api/progress'){
    const id=url.searchParams.get('lessonId'),old=records.get(id)||{record:empty,revision:0};
    if(body)records.set(id,{record:body.record,revision:old.revision+1});return send(records.get(id)||old);
   }
   return send({error:'Unknown fictional endpoint'},404);
  }
  const path=resolve(root,'.'+decodeURIComponent(url.pathname==='/'?'/index.html':url.pathname));
  if(!path.startsWith(root+sep))throw Error('Outside local dist');
  const data=await readFile(path);res.writeHead(200,{'content-type':mime[extname(path)]||'application/octet-stream'});res.end(data);
 }catch{res.writeHead(404);res.end('Not found');}
});
await new Promise((yes,no)=>server.once('error',no).listen(5193,'127.0.0.1',yes));
let browser;
try{
 browser=await chromium.launch({headless:true,executablePath:process.env.UI_QA_BROWSER_EXECUTABLE});
 const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'});
 await context.route('**/*',route=>{
  if(new URL(route.request().url()).origin!==base){report.externalRequests.push(route.request().url());return route.abort();}return route.continue();
 });
 const page=await context.newPage();page.setDefaultTimeout(15000);page.on('pageerror',e=>report.errors.push(e.message));
 await page.goto(base);await page.getByRole('button',{name:/Start this lesson/}).click();
 await page.evaluate(()=>navigator.serviceWorker.ready.then(r=>r.active?.state));
 await page.reload();await page.waitForFunction(()=>!!navigator.serviceWorker.controller);
 report.checks.push('production service worker activated and controls the app');
 await page.locator('.flow-overview > details > summary').click();
 await page.locator('.flow-outline-group').filter({has:page.locator('summary').filter({hasText:/^Do ·/})}).locator('summary').click();
 await page.getByRole('button',{name:/Choose somewhere to practise/}).click();
 const input=page.getByRole('textbox',{name:'The app',exact:true});
 await input.fill('Fictional online rehearsal');await page.getByText('Saved online',{exact:true}).first().waitFor();
 const action=await page.locator('.action-card').getAttribute('data-action');
 await context.setOffline(true);await input.fill('Fictional draft written with the network disabled');
 await page.waitForTimeout(1000);await page.reload();
  await input.waitFor();assert.equal(await input.inputValue(),'Fictional draft written with the network disabled');
  assert.equal(await page.locator('.action-card').getAttribute('data-action'),action);
  await page.waitForFunction(()=>/device|reconnect/.test(document.querySelector('.lesson-toolbar .save-status')?.textContent||''));
 assert.match(await page.locator('.lesson-toolbar .save-status').innerText(),/device|reconnect/);
 report.checks.push('network-disabled production reload restores sign-in, full course, exact action and offline draft');
 await context.setOffline(false);await page.getByText('Saved online',{exact:true}).first().waitFor();
 assert.equal(records.get('week1-day1-v1').record.worksheet.app,'Fictional draft written with the network disabled');
 report.checks.push('reconnect saves the offline draft to the fictional API');
 await page.evaluate(()=>window.scrollTo(0,document.documentElement.scrollHeight));
 const next=await page.locator('.flow-actions .primary').boundingBox(),nav=await page.locator('.main-nav').boundingBox();
 assert.ok(next.y+next.height<=nav.y,'Bottom navigation must not cover Next');
 report.checks.push('Next stays clear of bottom navigation');
 await page.addStyleTag({content:'body{zoom:2}'});await page.setViewportSize({width:1440,height:1000});
 assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
 report.checks.push('200% CSS zoom reflows at 1440px (browser zoom and physical keyboard remain separate)');
 assert.deepEqual(report.errors,[]);assert.deepEqual(report.externalRequests,[]);report.passed=true;
}finally{
 await browser?.close();await new Promise(yes=>server.close(yes));
 await mkdir('output/minimal-ui',{recursive:true});await writeFile('output/minimal-ui/offline-report.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
}
