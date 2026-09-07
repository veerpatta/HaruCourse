// Run with playwright-cli run-code --filename against the local test account only.
async (page) => {
  if (!page.url().startsWith('http://127.0.0.1:8787/')) throw Error('Local QA only');
  const checked=[];
  const conflicts=[];
  const response = r => { if(r.url().includes('/api/learning-position') && r.status()===409) conflicts.push(r.url()); };
  page.on('response',response);
  const session = await page.evaluate(async () => (await fetch('/api/session')).json());
  if (session.user?.id !== 'test') throw Error('Use the isolated test account');
  await page.getByRole('button',{name:'Learn',exact:true}).click();
  for(const mod of ['1','2','3','4']) {
    await page.getByRole('combobox',{name:'Browse a module',exact:true}).selectOption(mod);
    const count=await page.locator('.compact-list .lesson-row').count();
    for(let i=0;i<count;i++) {
      await page.getByRole('combobox',{name:'Browse a module',exact:true}).selectOption(mod);
      const title=await page.locator('.compact-list .lesson-row').nth(i).innerText();
      await page.locator('.compact-list .lesson-row').nth(i).click();
      await page.getByRole('button',{name:'2. Do',exact:true}).click();
      await page.getByText('Your starter template',{exact:true}).click();
      const starter=await page.getByRole('textbox',{name:'Your starter template — selectable text',exact:true}).inputValue();
      if(!starter.includes('Next action') || !starter.includes('Output checklist')) throw Error('Missing material: '+title);
      if(!await page.getByRole('heading',{name:'Save and bring forward',exact:true}).isVisible()) throw Error('Missing handoff');
      if(mod==='3' && i===3) {
        await page.getByText('Local contrast calculator · works offline',{exact:true}).click();
        await page.getByRole('textbox',{name:'Foreground hex',exact:true}).fill('#777777');
        if(!await page.getByText('Normal text at 4.5:1: below',{exact:false}).isVisible()) throw Error('Rounded contrast false pass');
        await page.getByRole('textbox',{name:'Foreground hex',exact:true}).fill('#767676');
        if(!await page.getByText('Normal text at 4.5:1: meets',{exact:false}).isVisible()) throw Error('Contrast valid pass');
        await page.getByRole('textbox',{name:'Foreground hex',exact:true}).fill('invalid');
        if(!await page.getByText('Enter both colors as # followed by six hex digits.',{exact:true}).isVisible()) throw Error('Invalid color accepted');
      }
      checked.push(title);
      await page.getByRole('button',{name:'← All lessons',exact:true}).click();
    }
  }
  await page.getByRole('button',{name:'Open starting-point diagnostic →',exact:true}).click();
  await page.getByRole('button',{name:'2. Do',exact:true}).click();
  if(await page.getByText('Optional AI rehearsal · try it yourself first',{exact:true}).count()) throw Error('Diagnostic coaching leaked');
  if(await page.getByText('Hint 1 · a nudge',{exact:true}).count()) throw Error('Diagnostic hint leaked');
  await page.getByText('Your starter template',{exact:true}).click();
  if(!(await page.getByRole('textbox',{name:'Your starter template — selectable text',exact:true}).inputValue()).includes('Baseline work inventory')) throw Error('Diagnostic inventory missing');
  await page.getByRole('button',{name:'3. Check',exact:true}).click();
  await page.goBack();
  if(!await page.getByRole('heading',{name:'Independent starting-point diagnostic',exact:true}).isVisible()) throw Error('Browser Back did not restore Do');
  await page.getByRole('button',{name:'4. Your work',exact:true}).click();
  await page.reload();
  if(!await page.getByRole('button',{name:'4. Your work',exact:true}).getAttribute('aria-current')) throw Error('Baseline section lost on reload');
  page.off('response',response);
  if(conflicts.length) throw Error('Self-conflicting bookmark writes: '+conflicts.length);
  return {lessonCount:checked.length,checked,bookmarkConflicts:conflicts.length,baseline:'Independent inventory; no AI or hints; Back and reload passed',contrast:'Borderline, passing and invalid input passed'};
}
