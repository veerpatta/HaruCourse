# Mobile usability verification — 6 September 2026

Local production build at http://127.0.0.1:8787 with the disposable test account. Browser plugin not available; Playwright CLI with Chromium used. Flow: Learn → Do → start timer → scroll to Next → Check → Your work → focus notes → Do → Course map → Account backups.

| Check | Result |
|---|---|
| Page identity and meaningful UI | Correct course title and rendered controls; no framework overlay |
| Console health | No JavaScript page exceptions; protected bookmark HTTP 409 responses during rapid account navigation |
| Phone header and idle state | Compact header; idle timer in normal flow |
| Active timer and Next | Timer above bottom nav; measured Next button bottom above timer top |
| Section navigation | Sticky tabs at viewport top after scrolling; Next opens Check |
| Keyboard focus | Focusing notes hides floating timer; choosing Do restores it |
| Responsive layout | No horizontal overflow in lesson at 320, 390, 768 and 1440px; expanded map and Account backups checked at 320px |
| Touch controls | Sections and Back/Next minimum 48px height; confidence minimum 44px |
| Screenshots | Idle phone, active phone and desktop evidence retained in ignored output/playwright/mobile-pass-*.png |
| Build | TypeScript and Vite/PWA pass; existing large-chunk and Workbox warnings |

Browser command: playwright-cli run-code --filename=output/playwright/verify-mobile-pass.js. Initial map locator matched a collapsed level; corrected to the visible summary and reran successfully.

This follow-up is not deployed. No migration or hosted writes. No synchronization code changed; earlier backend/offline evidence remains in VERIFICATION-MINIMAL.md. Native iOS/Android keyboards, safe-area hardware, installation and full assistive-technology audit remain untested. Keyboard checks describe browser focus only.
