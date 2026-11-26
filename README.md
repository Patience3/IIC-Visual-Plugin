# IIC Visual Plugin

Visual accessibility module for the **Intelligent and Inclusive Classroom (IIC)** browser plugin. It adds text-to-speech, screen-reader-friendly controls, keyboard navigation, text magnification, contrast modes and image-description support to browser-based learning at Ashesi University.

This module plugs into one shared Chrome extension and toolbar, built together with the cognitive and hearing team ([IIC-Cog-Plugin](https://github.com/CompanyB-AUD/IIC-Cog-Plugin)). ICS 525 Accessibility & Universal Design, 2026.

## Project at a glance

| | |
|---|---|
| Project closes | **Wednesday 9 December 2026** |
| Sprints | 3 short sprints, see [Timeline](docs/TIMELINE.md) |
| Backlog | [Product backlog](docs/PRODUCT_BACKLOG.md) and the GitHub Issues / Project board |
| Quality bar | [Definition of Done](docs/DEFINITION_OF_DONE.md) |
| Who does what | [Team and groups](docs/TEAM.md) |
| Working with the other team | [Integration plan](docs/INTEGRATION.md) |
| Decisions and code changes | [Discussion Log](docs/DISCUSSION_LOG.md) |
| Security rules | [Security Policy](SECURITY.md) |
| Build, run and test | [Development Guide](docs/DEVELOPMENT.md) |

## What this module does (MVP)

| Feature | Requirement | Priority |
|---|---|---|
| Text-to-speech with adjustable rate and voice | FR05 | Must |
| Screen-reader-compatible toolbar controls | FR05, FR04 | Must |
| Text enlargement | FR06 | Must |
| Contrast and colour modes | FR06 | Must |
| Visible focus indicators and keyboard access | FR04 | Must |
| Missing alt-text detection and image description display | FR07 | Must |
| Magnifier | FR06 | Should |
| AI image descriptions (opt-in) | FR07 | Could |
| Voice navigation | brief §3 | Could |

The plugin does **not** claim to make every website accessible. Where a barrier can only be fixed by the page author (for example an image with no description), the plugin says so and points the lecturer to the fix.

## Tech stack (proposed, pending agreement with the other team)

Chrome Manifest V3, TypeScript (strict), Vite, Preact toolbar in Shadow DOM, `chrome.storage.local` for preferences, Web Speech API for text-to-speech, Vitest + Playwright + axe-core for tests, manual NVDA testing.

## Getting started

See the [Development Guide](docs/DEVELOPMENT.md) to load the latest preview build into Chrome or to run the plugin from source. The code scaffold is added in Sprint 1.

## Security

This project follows a security-first approach: minimal permissions, no data leaving the device by default, and automated security checks on every pull request. See [SECURITY.md](SECURITY.md).
