# Deployment Notes (GitHub Pages Preview)

These notes cover the preview pipeline and local build steps used by the team.

## GitHub Pages Preview Pipeline

- **Trigger branch:** Pushes to `dhbw/publish` start the "Deploy marketing site to Pages" workflow.
- **Manual trigger:** GitHub -> Actions -> "Deploy marketing site to Pages" -> Run workflow.
- **What it does:** Builds the site from `site/` and deploys `site/build/dist` to GitHub Pages.
- **Preview URL:** Share the Pages URL with reviewers. It updates on every push to `dhbw/publish`.

## Where To Find the Pages URL

1. GitHub -> Actions -> latest "Deploy marketing site to Pages" run.
2. Open the "Deploy to GitHub Pages" step and click the `page_url` output.

Alternate: GitHub -> Settings -> Pages (shows the live URL).

## Local Build (Windows / PowerShell)

From the repo root:

1. `cd site`
2. `npm ci` (first time or after dependency changes)
3. `npm run build`

**Build output:** `site/build/dist`

## Common Failure Modes

- **Missing `tera` CLI:** Build fails with "tera: command not found".
  - Fix: `cargo install --git https://github.com/chevdor/tera-cli --locked`
- **Node version mismatch:** Build fails or exits with engine warnings.
  - Fix: Use Node 18+ (workflow uses Node 20).
- **PowerShell not available:** The build script uses `pwsh`.
  - Fix: Install PowerShell 7 and ensure `pwsh` is on PATH.
