# Discussion Log

This log records every decision that changes what we build or how the code works. Each entry links the discussion to the code change that implements it, so any reader can trace **why** the code is the way it is.

## How to add an entry

1. Add a new entry at the **top** of the log, using the template below.
2. Reference the pull request that implements it. A pull request that implements a decision must link back to its entry.
3. Never edit or delete a past entry. If a decision is reversed, add a new entry that supersedes it.

```markdown
### DL-000 · Short title
- **Date:** YYYY-MM-DD
- **Status:** Proposed | Accepted | Implemented | Superseded by DL-___
- **Raised by:** name (team)
- **Agreed with:** names, and the other team where the shared contract is affected
- **Context:** what problem or question prompted this
- **Decision:** what was decided, in one or two sentences
- **Code change:** what changes in the code (files, modules, settings, permissions)
- **Security and privacy impact:** none, or what changes and why it is acceptable
- **Pull request:** #___
```

---

## Entries

### DL-003 · Project timeline shortened to close on 9 December 2026
- **Date:** 2026-11-25
- **Status:** Accepted
- **Raised by:** Patience (Visual Accessibility team)
- **Context:** The project now closes on 9 December 2026 instead of 18 December.
- **Decision:** Work in three short sprints (26–29 Nov, 30 Nov–3 Dec, 4–8 Dec), with a feature freeze on 6 December and a release on 8 December. Voice navigation and AI image descriptions are moved to "Could" priority.
- **Code change:** None yet. Backlog and milestones updated.
- **Security and privacy impact:** None.
- **Pull request:** Initial repository setup

### DL-002 · Security-first development policy adopted
- **Date:** 2026-11-26
- **Status:** Accepted
- **Raised by:** Patience (Visual Accessibility team)
- **Context:** The plugin runs on pages that can hold student data.
- **Decision:** Adopt the rules in [SECURITY.md](../SECURITY.md): least-privilege permissions, local-only storage, no unsafe DOM APIs, validated messaging, keyless opt-in AI, and automated security checks on every pull request.
- **Code change:** Continuous integration workflow with type checking, tests, dependency audit, CodeQL and a manifest permission check. Pull request template with a security checklist.
- **Security and privacy impact:** Positive. Establishes the security baseline.
- **Pull request:** Initial repository setup

### DL-001 · One shared extension with the Cognitive and Hearing team
- **Date:** 2026-11-25
- **Status:** Proposed (awaiting joint agreement on decisions D1–D12)
- **Raised by:** Both teams
- **Agreed with:** Pending. Tracked in the Cognitive team's [issue #10](https://github.com/CompanyB-AUD/IIC-Cog-Plugin/issues/10)
- **Context:** The brief requires one plugin with a shared toolbar and shared preferences.
- **Decision:** Build one Chrome Manifest V3 extension. Our features are a module that plugs into the shared toolbar through the agreed `apiVersion: 1` module contract. Our position on each decision is in [INTEGRATION.md](INTEGRATION.md).
- **Code change:** To follow once the shared scaffold exists.
- **Security and privacy impact:** One extension means one permission set and one preference store, which is easier to secure and audit.
- **Pull request:** —
