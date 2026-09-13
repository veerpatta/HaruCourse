# Mobile PWA optimization — 13 September 2026

## What changed

The phone UI now uses a safe-area aware app shell. The header is sticky and shows the Haru mark, current context, connection state and Account. Learn, Course map and My work remain in a fixed bottom tab bar above the home indicator. The same layout reflows at narrow widths and at browser zoom without horizontal scrolling.

Learn now leads with one compact course-progress card and a full-width continue action. Module selection, module progress and lesson choices form one browse section. Lesson rows are separate cards with a consistent lesson number, title and status. My work uses the same progress language and card pattern.

The lesson reader now keeps Back and automatic-save status on one toolbar, shortens the mobile breadcrumb and moves the full lesson purpose into an accessible About this lesson disclosure. The four Learn → Do → Check → Your work controls stay immediately below the app header. The timer uses a compact elapsed-time row with icon controls, while its disclosure still explains automatic active-course time, the five-minute idle pause, manually added external time and why time cannot finish practice. Action Back and Next controls remain above the bottom tabs and return to normal document flow when an input receives focus, leaving room for a software keyboard.

Course progress still counts only required lessons that the learner explicitly marks finished. The mobile copy identifies the denominator as lessons and says that time and review are separate. Lesson progress counts required actions with saved evidence and labels the percentage as practice rather than a score. No progress calculation, API, record schema or completion gate changed.

Account listens for the browser's native install event and presents an Install Haru Course button when the browser offers one. Installed display mode is recognized on Android-compatible browsers and iOS. When a prompt is unavailable, the page gives short Install app / Add to Home Screen steps. The manifest also exposes Continue learning and My work shortcuts, and shortcut URLs resolve into the matching in-app tab.

Modules 3–20 build into stable course chunks. The JavaScript entry changed from 5,744.90 kB (1,627.76 kB gzip) to 3,877.73 kB (1,093.11 kB gzip), a 32.5% raw and 32.8% gzip reduction in the largest parse unit. The 18 module chunks range from 71.65 to 151.15 kB raw. The full authored course still totals about 5.67 MB in the service-worker precache, so offline coverage is unchanged; this split primarily improves update reuse, cache granularity and the largest parsing unit.

## Local validation

- `npm.cmd run docs:generate` and `npm.cmd run test:content` passed generated-document, coverage, prerequisite, resource-ID and lesson-contract checks.
- `npm.cmd run test:worksheet` preserved all 2,866 worksheet field IDs and passed reveal bounds.
- `npm.cmd run test:actions` passed all 224 lessons, 7,974 actions, 1,601 saved questions, conditional routes and finish/reopen gates.
- `npm.cmd run test:learning` passed learning-progress and timer regressions.
- `npm.cmd run audit:guided` reported no problems.
- `npm.cmd run test:cloud` passed all 13 local backend groups, including authentication, account isolation, per-lesson persistence, concurrent conflicts, guided worksheet round-trip, feedback, OAuth/MCP and logout.
- `npm.cmd run build` passed both TypeScript projects and produced the PWA with 27 precache entries. `npm.cmd run check:deploy` passed the production build and Wrangler dry run with the existing D1, KV and Assets bindings.
- `git diff --check` passed.

Browser QA used the local disposable `test` workspace. At 320 × 700, 390 × 844 and 430 × 932, document width equaled viewport width and every visible button, link, summary and select measured at least 44 px in both dimensions where applicable. The header and bottom navigation stayed within the viewport. Learn showed course progress and the next lesson in the first screen. A lesson showed its title, timer, section controls, lesson-action progress and current action in the first screen.

A temporary answer in Module 2 Lesson 1 changed lesson work from 4 to 5 saved actions, reached Saved online, survived reload in the same `write-decision` action and returned to 4 after the answer was removed. Input focus changed both sticky action regions to normal flow, preventing a mobile keyboard overlap. The PWA reopened Learn with five lesson cards while Chrome network emulation was offline. The Update now flow activated the final per-module split build, and its browser console had no errors. The generated My work shortcut opened My work and selected its bottom tab.

The temporary local answer was removed. Haru's records were not used.

## Release and hosted verification

Release is pending. Add the implementation commit, Cloudflare version, live asset hashes and hosted `test`-account smoke evidence here after deployment.

Physical iOS and Android installation, native keyboard behavior, screen-reader output and Haru's uncoached use remain unverified. Browser emulation does not replace those checks. Formal scored assessment remains unimplemented.
