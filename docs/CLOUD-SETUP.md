# Cloud setup

The full app runs locally without a paid service. Node/npm and Wrangler are installed through the project dependencies. Local keys below are test credentials only.

```powershell
npm.cmd ci
npm.cmd run build
npm.cmd run db:local
node scripts/create-access.mjs .test-secrets
npx.cmd wrangler d1 execute harucourse --local --file .test-secrets/seed.sql
npm.cmd run dev:cloud
```

Open http://127.0.0.1:8787 and select My practice. Read `.test-secrets/access-keys.json` privately to sign in as `haru` or `creator`. The generator refuses to overwrite existing keys; skip generation/seeding when reusing an initialized database. With the server running, `npm.cmd run test:cloud` exercises authentication, ownership, concurrent saves, versioned feedback, OAuth, the real MCP SDK, token downscoping, and revocation. It writes synthetic practice records into the local test database.

## Data and access

The browser keeps an offline draft. Refresh cloud records before saving; a conflicting newer revision returns an error instead of overwriting it. Loading a cloud copy or importing a valid backup first downloads the existing local draft. Cloud APIs are online-only and excluded from service-worker caching.

Two private random access keys represent the creator and learner. D1 stores hashes, never the keys. Session cookies are HttpOnly, SameSite=Lax, and Secure on HTTPS. There is no public registration or email recovery. Keep production keys in a password manager and provide the learner key privately. Signing out ends the session but leaves the local notebook on that device.

Creators review a specific saved revision and cannot overwrite learner progress. MCP uses browser consent, PKCE S256, and read/write scopes. AI feedback is visibly labelled and cannot establish mastery. Revoke AI connections from My practice. Work references do not upload images; attach actual design evidence in the AI client.

## Hosted deployment

Deployed with the user-authorized CLI on 6 September 2026 to https://harucourse.raj-39e.workers.dev in account raj@vpps.co.in. No plan upgrade was performed. CLI billing access is unavailable, so the account plan and zero billing have not been independently certified. Free allowances are bounded and service can be unavailable when exhausted. No custom domain or paid model API is required.

For recreation in a different verified account (the current account already has these resources):

1. Create a D1 database named `harucourse` and KV namespace for OAuth in the verified account.
2. Replace the placeholder database/namespace IDs in `wrangler.jsonc` with those returned IDs.
3. Apply `migrations/` remotely. Generate fresh production credentials with `node scripts/create-access.mjs .secrets`; seed their hashes remotely using `.secrets/seed.sql`. Never reuse local test keys.
4. Run `npm.cmd run check:deploy`, then deploy only to the confirmed Free-plan account.
5. Verify HTTPS login, a learner save, creator review, and OAuth MCP consent on the hosted URL. Connect the learner’s actual AI client and perform a progress read plus feedback write. Client/model availability depends on that account.

The MCP address is the hosted origin followed by `/mcp`. Localhost is suitable for local SDK tests, but a remote AI service cannot reach this machine’s localhost. Production secrets, seed files, `.wrangler` state, and QA data are Git-ignored.

Key rotation/recovery is currently an administrator database operation: replace the user’s access hash, delete their sessions, and revoke their OAuth grants. Disabling the user (`active = 0`) immediately prevents API/MCP access, including existing tokens. A self-service recovery screen and content publishing editor are future work.
