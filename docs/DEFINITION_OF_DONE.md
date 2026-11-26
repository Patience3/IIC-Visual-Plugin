# Definition of Done

A task is done only when **every** box applies. If one can't be met, write why in the issue before closing.

## Every task
- [ ] Meets the acceptance criteria written in the issue
- [ ] Reviewed and approved by at least one teammate who did not write it
- [ ] Merged to `main`, and the build still passes (type check, lint, tests)
- [ ] Issue closed with evidence: a screenshot, short GIF or test output

## Features that touch the page or the toolbar
- [ ] Works with the keyboard only (Tab, Shift+Tab, Enter, Space, Escape), with a visible focus outline
- [ ] Checked with NVDA (or VoiceOver): every control announces a clear name, role and state
- [ ] No serious or critical axe-core issues on the toolbar
- [ ] The setting is saved, survives a page reload, and **Reset** puts the page back exactly as it was
- [ ] Changing the setting does not move the reader's place on the page (FR12)
- [ ] Works on the shared demo site, and fails gracefully (clear message, no crash) on an unsupported page
- [ ] Tested together with the other team's module switched on
- [ ] No personal data collected or stored

## Security (see [SECURITY.md](../SECURITY.md))
- [ ] CI passes, including the dependency audit, CodeQL scan and manifest permission check
- [ ] No new permission, or the permission is approved and recorded in the [Discussion Log](DISCUSSION_LOG.md)
- [ ] No unsafe DOM or code APIs (`innerHTML`, `eval`, `new Function`)
- [ ] Page content treated as untrusted input

## Documentation
- [ ] User-facing behaviour described in the user guide
- [ ] Any change to the shared contract agreed with the other team first
- [ ] Decisions that change the code are recorded in the [Discussion Log](DISCUSSION_LOG.md) and linked from the pull request

## Sprint is done when
- [ ] The sprint goal checkpoint in [TIMELINE.md](TIMELINE.md) can be demonstrated live
- [ ] Sprint review and retrospective notes are written in `docs/scrum/`
- [ ] The burndown chart is updated
