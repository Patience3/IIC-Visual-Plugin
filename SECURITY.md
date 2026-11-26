# Security Policy

IIC Visual Plugin runs inside students' browsers on learning pages that may contain personal information, assessments and grades. Security and privacy are therefore design requirements, not later additions. This policy applies to every contributor and every pull request.

## 1. Security principles

| Principle | What it means in this project |
|---|---|
| **Least privilege** | The extension requests only `storage`, `activeTab` and `scripting`, plus the agreed demo-site host. No `<all_urls>`, no `tabs`, no `history`, no `webRequest`, no microphone or tab-audio capture. Any new permission requires a written justification in the [Discussion Log](docs/DISCUSSION_LOG.md) and approval from both teams. |
| **No data leaves the device by default** | Preferences are stored in `chrome.storage.local` only. No analytics, telemetry, remote logging or user accounts. |
| **Data minimisation** | We never store names, email addresses, browsing history, page content or disability information. Presets are named by function (for example "High contrast"), never by diagnosis. |
| **Treat every web page as untrusted** | Page text, attributes and image data are untrusted input. They are never executed, never inserted as HTML without sanitisation, and never trusted to make security decisions. |
| **Safe DOM changes** | Use `textContent`, `setAttribute` and `createElement`. Do not use `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, `eval`, `new Function` or string-based `setTimeout`. If HTML must be rendered (for example a reading view), it is sanitised with DOMPurify using an agreed allowlist. |
| **Strict Content Security Policy** | Manifest V3 default CSP: no remote code, no inline scripts, no `unsafe-eval`. All code ships inside the extension package. |
| **Isolation** | The toolbar runs in a Shadow DOM inside the content script's isolated world. We never read or call the page's own JavaScript, and we ignore messages from the page unless they are explicitly validated. |
| **Validated messaging** | Every message between the content script and the service worker has a fixed type and a schema. Unknown or malformed messages are dropped. `chrome.runtime.onMessageExternal` is not used. |
| **Optional AI is opt-in and keyless** | AI features are off by default and require explicit consent. Only text or images the user selects are sent, through the shared proxy. **API keys are never placed in the extension or the repository.** |
| **Secrets** | No secrets, tokens or keys in code, commits, issues or screenshots. GitHub secret scanning and push protection are enabled. |
| **Dependencies** | Few, well-maintained dependencies, pinned in one lockfile. Dependabot and `npm audit` run on every pull request. A new dependency needs a one-line justification in the pull request. |

## 2. Required review checklist

Every pull request that changes code must confirm each item in the pull request template's security section. A reviewer must not approve a pull request with an unchecked security item unless the reason is written in the pull request.

## 3. Automated checks

Every pull request runs, through GitHub Actions:

- Type checking, linting and unit tests
- Dependency audit (`npm audit --audit-level=high`)
- CodeQL static analysis for JavaScript and TypeScript
- A manifest check that fails if a forbidden permission or a remote script is added

## 4. Reporting a vulnerability

Do not open a public issue for a security problem. Contact the repository owner directly through GitHub, describe the problem and how to reproduce it, and allow time for a fix before sharing details.

## 5. Known limitations

The plugin cannot make an insecure or inaccessible website safe or accessible. It changes how a page is presented in the student's browser only. It does not alter the website itself or its server.
