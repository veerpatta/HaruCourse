// Run with playwright-cli run-code --filename against the local test account only.
async (page) => {
  if (!page.url().startsWith('http://127.0.0.1:8787/')) throw Error('Local QA only');
  const checks = [];
  const assert = (ok, message) => { if (!ok) throw new Error(message); checks.push(message); };
  if (await page.getByRole('textbox', {name:'Username',exact:true}).isVisible()) {
    await page.getByRole('textbox', {name:'Username',exact:true}).fill('test');
    await page.getByRole('button', {name:'Sign in',exact:true}).click();
  }
  await page.getByRole('button', {name:'Learn',exact:true}).waitFor();
  const session = await page.evaluate(async () => (await fetch('/api/session')).json());
  if (session.user?.id !== 'test') throw Error('Use the isolated test account');
  await page.getByRole('button', {name:'Learn',exact:true}).click();
  await page.getByRole('combobox', {name:'Browse a module',exact:true}).selectOption('1');
  await page.getByRole('button', {name:'Lesson 1 From screens to product problems',exact:true}).click();
  await page.getByRole('button', {name:'2. Do',exact:true}).click();
  await page.getByText('Your starter template', {exact:true}).click();
  await page.context().grantPermissions(['clipboard-read','clipboard-write']);
  await page.getByRole('button', {name:'Copy template',exact:true}).click();
  const copied = await page.evaluate(() => navigator.clipboard.readText());
  assert(copied.includes('What I saw or did') && copied.includes('Output checklist'), 'Template copies actual lesson-specific material');
  await page.getByText('Optional AI rehearsal · try it yourself first', {exact:true}).click();
  await page.getByText('Lesson AI prompt', {exact:true}).click();
  await page.getByRole('button', {name:'Copy AI prompt',exact:true}).click();
  const prompt = await page.evaluate(() => navigator.clipboard.readText());
  assert(prompt.includes('From screens to product problems') && prompt.includes('Never invent participants'), 'AI prompt contains lesson context and evidence boundaries');
  assert(await page.getByText('Cover the label column.',{exact:false}).isVisible(), 'Non-AI alternative is visible beside optional prompt');
  await page.evaluate(() => Object.defineProperty(navigator.clipboard,'writeText',{configurable:true,value:async()=>{throw Error('QA denied')}}));
  await page.getByRole('button', {name:'Copy template',exact:true}).click();
  assert(await page.getByText('Clipboard unavailable. Select the text below and copy it manually.',{exact:true}).isVisible(), 'Denied clipboard provides manual-copy fallback');
  const text = page.getByRole('textbox',{name:'Your starter template — selectable text',exact:true});
  await text.focus();
  assert(await text.evaluate(el => el.selectionEnd === el.value.length), 'Fallback text can be selected with keyboard focus');
  const dimensions=[];
  for(const width of [320,390,1280]) {
    await page.setViewportSize({width,height:900});
    const sizes=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth}));
    assert(sizes.scroll <= sizes.width, `Open template and AI prompt have no horizontal page overflow at ${width}px`);
    dimensions.push(sizes);
  }
  await page.setViewportSize({width:390,height:844});
  await page.getByRole('heading',{name:'Design detective',exact:true}).scrollIntoViewIfNeeded();
  await page.screenshot({path:'output/playwright/apprenticeship-mobile.png'});
  const before=await page.evaluate(async()=>{ const r=await fetch('/api/progress?lessonId=week1-day1-v1'); return await r.json(); });
  await page.reload();
  await page.getByRole('heading',{name:'Design detective',exact:true}).waitFor();
  const after=await page.evaluate(async()=>{ const r=await fetch('/api/progress?lessonId=week1-day1-v1'); return await r.json(); });
  assert(JSON.stringify(before)===JSON.stringify(after),'Reading and copying leave existing practice record unchanged through reload');
  assert(await page.getByRole('heading',{name:'Design detective',exact:true}).isVisible(),'Reload restores selected lesson and Do section');
  await page.evaluate(()=>navigator.serviceWorker.ready.then(()=>true));
  await page.reload();
  await page.getByRole('heading',{name:'Design detective',exact:true}).waitFor();
  await page.context().setOffline(true);
  await page.reload();
  await page.getByRole('heading',{name:'Design detective',exact:true}).waitFor();
  await page.getByText('Your starter template',{exact:true}).click();
  assert((await page.getByRole('textbox',{name:'Your starter template — selectable text',exact:true}).inputValue()).includes('What I saw or did'),'Cached lesson and template survive an offline reload');
  await page.context().setOffline(false);
  await page.getByRole('button',{name:'Course map',exact:true}).click();
  await page.getByText('Your three-project portfolio path',{exact:true}).click();
  assert(await page.getByText('Briefs are ready to explore.', {exact:false}).isVisible(),'Portfolio map explains current publication and practice status');
  for(const width of [320,390,1280]) {
    await page.setViewportSize({width,height:900});
    await page.locator('.portfolio-path details').evaluateAll(nodes=>nodes.forEach(n=>n.open=true));
    assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Expanded portfolio briefs fit ${width}px`);
  }
  await page.screenshot({path:'output/playwright/apprenticeship-map-desktop.png'});
  return {checks,dimensions};
}
