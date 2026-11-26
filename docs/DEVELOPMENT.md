# Development Guide

This guide explains how to build, run and test the plugin while it is being developed.

## 1. What the plugin is

The product is a **Chrome extension**: a small program installed into the Chrome browser. Once installed, it adds an accessibility button to every learning page the student opens. Selecting the button opens a toolbar with controls such as "Read aloud", "Larger text" and "High contrast". The controls change how the page looks or sounds for that student only. The website itself is not changed.

The extension has two parts:

| Part | What it is | Examples |
|---|---|---|
| **Front end** | Everything the student sees and interacts with | The accessibility button, the toolbar panel, its buttons and sliders, and the visible changes on the page (larger text, contrast colours, highlighted sentence while reading) |
| **Background logic** | Code the student does not see | Saving preferences, keyboard shortcuts, text-to-speech engine control, checking images for missing descriptions |

There is no server to host. Everything runs in the student's browser.

## 2. Does it need to be deployed?

Not to a server. During development it is **loaded into Chrome directly** from a build folder. For the final submission it is shared as a **packaged `.zip` file** attached to a GitHub Release. Publishing to the Chrome Web Store is not required and is out of scope because review can take several days.

## 3. Viewing progress during development

There are two ways to see the current state of the plugin at any time.

**Option A: Download a preview build (no coding tools needed)**
1. Open the repository on GitHub and select the **Actions** tab.
2. Open the most recent successful run on `main` (or on a pull request you want to review).
3. Under **Artifacts**, download `iic-visual-plugin-<commit>.zip` and unzip it.
4. In Chrome, open `chrome://extensions`, switch on **Developer mode** (top right), select **Load unpacked**, and choose the unzipped folder.
5. Open the demo site and select the accessibility button.

**Option B: Run from source (developers)**
1. Install Node.js (LTS) and pnpm.
2. `pnpm install --frozen-lockfile`
3. `pnpm dev` builds the extension and rebuilds on every change.
4. Load the output folder through **Load unpacked** as above. Chrome reloads the extension after each rebuild.

## 4. Continuous integration and delivery

| Workflow | When it runs | What it does |
|---|---|---|
| **CI** (`.github/workflows/ci.yml`) | Every pull request and every push to `main` | Installs dependencies from the lockfile, type checks, lints, runs unit tests, audits dependencies, checks the manifest permissions, builds the extension and uploads it as a downloadable preview |
| **CodeQL** (`.github/workflows/codeql.yml`) | Every pull request, push to `main`, and weekly | Scans the code for security vulnerabilities |
| **Release** (`.github/workflows/release.yml`) | When a version tag such as `v1.0.0` is pushed | Builds the extension and attaches the `.zip` to a GitHub Release |

A pull request may only be merged when CI passes and one reviewer has approved it.

## 5. Branches and pull requests

- `main` always holds working code. Nobody pushes to `main` directly.
- Create a branch per issue: `feature/<issue-number>-short-name` or `fix/<issue-number>-short-name`.
- Open a pull request that includes `Closes #<issue-number>`, complete the template, and request a review.
- If the change implements a decision, add or update the entry in the [Discussion Log](DISCUSSION_LOG.md).
