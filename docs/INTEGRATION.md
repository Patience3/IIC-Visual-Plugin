# Integration with the cognitive and hearing team

Both teams ship **one** Chrome extension, with **one** toolbar and **one** preference store. Their proposal is in their repository: [architecture and APIs](https://github.com/CompanyB-AUD/IIC-Cog-Plugin/blob/sprint-1/docs/sprint-1/04-architecture-and-apis.md), with decisions tracked in [their issue #10](https://github.com/CompanyB-AUD/IIC-Cog-Plugin/issues/10).

## Our position on their 12 decisions (draft for the team to confirm)

| # | Decision | Their proposal | Our draft answer |
|---|---|---|---|
| D1 | Target browser | Chrome stable, Edge best effort | Accept |
| D2 | Repository | One monorepo, folders per team | Accept if the lecturer confirms this counts as our repository. This repo then holds our backlog, Scrum evidence and docs |
| D3 | Language and UI | TypeScript strict, Preact in Shadow DOM | Accept Preact (not Web Components) |
| D4 | Module contract | `apiVersion: 1` as written | Accept, ask for a "currently reading" event so their guided reading can follow our text-to-speech |
| D5 | Preferences | One versioned object in `chrome.storage.local` | Accept |
| D6 | Style tokens | Font family owned by them | **Decide as a team.** Suggest accept: they own font family and spacing, we own size, colour and contrast |
| D7 | Toolbar groups | Reading / Focus / See / Hear / Tools | Accept. Our controls go under "See" and text-to-speech under "Reading" |
| D8 | Keyboard command | Alt+Shift+A, rebindable | Accept, test with NVDA for clashes |
| D9 | Demo site | Static LMS pages on GitHub Pages | Accept, we add pages with missing alt text and complex forms |
| D10 | Definition of Done | Their MVP scope §6 | Merge with ours |
| D11 | AI proxy | They host it, we may use it | Accept, only for opt-in image descriptions |
| D12 | Cadence | Weekly meeting, merge twice per sprint | **Ask for more:** joint checks Tue and Thu, merge at least every two days. The deadline is now 9 Dec |

## Joint dates to propose

- Fri 27 Nov: decisions recorded
- Sun 29 Nov: walking skeleton with both modules' controls in one toolbar
- Tue 1 Dec and Thu 3 Dec: integration checks
- Sun 6 Dec: joint feature freeze
- Tue 8 Dec: joint release and demo rehearsal
