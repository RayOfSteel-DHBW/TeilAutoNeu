---
phase: quick-1
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - .github/workflows/static.yml
  - site/build/dist/v0/ (assembled from gsd/v1.0-claudesdesigns)
  - site/build/dist/v1/ (assembled from design/a)
  - site/build/dist/v2/ (assembled from design/b)
  - site/build/dist/v3/ (assembled from design/c)
  - site/build/dist/index.html (landing page)
autonomous: false
requirements: [REV-01]

must_haves:
  truths:
    - "A review/all-designs branch exists containing pre-built dist files for all 4 versions"
    - "GitHub Pages (dhbw/publish) serves a landing page at / with links to /v0/, /v1/, /v2/, /v3/"
    - "Each versioned path loads a fully functional version of that design"
  artifacts:
    - path: "site/build/dist/index.html"
      provides: "Landing page with links to all 4 designs"
    - path: "site/build/dist/v0/index.html"
      provides: "Original design (gsd/v1.0-claudesdesigns)"
    - path: "site/build/dist/v1/index.html"
      provides: "Design A"
    - path: "site/build/dist/v2/index.html"
      provides: "Design B"
    - path: "site/build/dist/v3/index.html"
      provides: "Design C"
    - path: ".github/workflows/static.yml"
      provides: "Static-only deploy workflow (no build step)"
  key_links:
    - from: "site/build/dist/index.html"
      to: "/v0/, /v1/, /v2/, /v3/"
      via: "href links"
    - from: "dhbw/publish branch"
      to: "GitHub Pages"
      via: "static.yml workflow"
---

<objective>
Create a `review/all-designs` branch that hosts all 4 design versions under a single GitHub Pages deployment at /v0/, /v1/, /v2/, /v3/ with a comparison landing page.

Purpose: Enables Phase 24 Joint Review — the user can visit one URL and navigate between all 4 designs.
Output: Live GitHub Pages deployment at the existing Pages URL with versioned design paths.
</objective>

<execution_context>
@./.claude/get-shit-done/workflows/execute-plan.md
@./.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@.planning/STATE.md
@.planning/ROADMAP.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Build all 4 design versions and assemble review branch</name>
  <files>
    site/build/dist/v0/
    site/build/dist/v1/
    site/build/dist/v2/
    site/build/dist/v3/
  </files>
  <action>
    This task builds each design from its source branch and assembles them into a new `review/all-designs` branch. All steps run as git + PowerShell commands from the repo root (C:/Dev/Repos/TeilAuto).

    **Step 1: Save current position**
    Record current branch name: `git branch --show-current` — should be `design/c`.

    **Step 2: Build v0 (gsd/v1.0-claudesdesigns)**
    ```
    git stash  # stash any uncommitted changes
    git checkout gsd/v1.0-claudesdesigns
    cd site && npm ci && npm run build
    # dist output is at site/build/dist/
    # copy dist contents to a temp location
    cp -r site/build/dist /tmp/dist-v0
    ```
    On Windows with PowerShell:
    ```powershell
    git stash
    git checkout gsd/v1.0-claudesdesigns
    Push-Location site; npm ci; npm run build; Pop-Location
    Copy-Item -Recurse -Force site/build/dist C:/tmp/dist-v0
    ```

    **Step 3: Build v1 (design/a)**
    ```powershell
    git checkout design/a
    Push-Location site; npm ci; npm run build; Pop-Location
    Copy-Item -Recurse -Force site/build/dist C:/tmp/dist-v1
    ```

    **Step 4: Build v2 (design/b)**
    ```powershell
    git checkout design/b
    Push-Location site; npm ci; npm run build; Pop-Location
    Copy-Item -Recurse -Force site/build/dist C:/tmp/dist-v2
    ```

    **Step 5: Build v3 (design/c)**
    ```powershell
    git checkout design/c
    Push-Location site; npm ci; npm run build; Pop-Location
    Copy-Item -Recurse -Force site/build/dist C:/tmp/dist-v3
    ```

    **Step 6: Create review/all-designs branch from gsd/v1.0-claudesdesigns**
    Start from a clean base so review branch does not carry any single design's full history overhead:
    ```
    git checkout gsd/v1.0-claudesdesigns
    git checkout -b review/all-designs
    ```

    **Step 7: Assemble versioned dist**
    Clear the existing dist and copy all 4 versions into versioned subdirs:
    ```powershell
    Remove-Item -Recurse -Force site/build/dist/*
    New-Item -ItemType Directory site/build/dist/v0
    New-Item -ItemType Directory site/build/dist/v1
    New-Item -ItemType Directory site/build/dist/v2
    New-Item -ItemType Directory site/build/dist/v3
    Copy-Item -Recurse C:/tmp/dist-v0/* site/build/dist/v0/
    Copy-Item -Recurse C:/tmp/dist-v1/* site/build/dist/v1/
    Copy-Item -Recurse C:/tmp/dist-v2/* site/build/dist/v2/
    Copy-Item -Recurse C:/tmp/dist-v3/* site/build/dist/v3/
    ```

    **IMPORTANT — CSS path handling:** Each design uses relative CSS paths (e.g., `href="tailwind.css"`). When served from `/v0/`, those relative paths resolve correctly if the HTML files are in the subdirectory root and CSS is also in that subdirectory. The copy preserves the flat dist structure inside each versioned dir, so this works without changes.

    **IMPORTANT — img/ and js/ paths:** Same reasoning — these are relative to each version's root and copy correctly.

    After this task, `site/build/dist/` contains: `v0/`, `v1/`, `v2/`, `v3/` — no root `index.html` yet (added in Task 2).
  </action>
  <verify>
    Check that all 4 version directories exist with content:
    `ls site/build/dist/v0/index.html site/build/dist/v1/index.html site/build/dist/v2/index.html site/build/dist/v3/index.html`
    Each should return the file path (not "not found").
  </verify>
  <done>
    Four versioned directories exist in site/build/dist/ — v0 through v3 — each containing a complete copy of that design's built output (index.html, tailwind.css, base.css, data/, img/, js/, all page HTMLs).
  </done>
</task>

<task type="auto">
  <name>Task 2: Create landing page and update GitHub Actions workflow for static deploy</name>
  <files>
    site/build/dist/index.html
    .github/workflows/static.yml
  </files>
  <action>
    **Part A — Landing page (site/build/dist/index.html)**

    Create a minimal, functional HTML landing page that links to all 4 design versions. This file is committed directly to the review branch as a pre-built artifact (not generated by the build).

    Content requirements:
    - Title: "teilAuto Design Review — All Versions"
    - Brief intro: "Side-by-side design comparison for joint review"
    - 4 large cards / links, one per version:
      - v0: "Original (Produktionsversion)" → href="v0/index.html"
      - v1: "Design A — Editorial Broadsheet" → href="v1/index.html"
      - v2: "Design B — Nordic Signal" → href="v2/index.html"
      - v3: "Design C — Nachbarschaftlich" → href="v3/index.html"
    - Each card shows the design name, a one-line description, and a "Anzeigen →" link
    - Style inline (no external CSS dependency — this is a standalone review tool):
      - White background, dark text, system font stack
      - Cards in a 2x2 grid on desktop (CSS grid), stacked on mobile
      - Each card has a border, padding, and hover highlight
    - No JavaScript required

    HTML structure:
    ```html
    <!DOCTYPE html>
    <html lang="de">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>teilAuto – Design Review</title>
      <style>
        /* inline styles — grid of 4 version cards */
      </style>
    </head>
    <body>
      <header>...</header>
      <main>
        <div class="grid">
          <!-- 4 cards -->
        </div>
      </main>
    </body>
    </html>
    ```

    **Part B — Update .github/workflows/static.yml**

    The current workflow installs Rust, builds tera CLI, installs npm, and runs `npm run build`. For the review branch we want to SKIP the build entirely — the files are pre-built and committed. We need a workflow that just uploads `site/build/dist/` as the Pages artifact.

    Replace the `build` job steps in `static.yml` with a minimal version:
    ```yaml
    jobs:
      build:
        runs-on: ubuntu-latest
        steps:
          - uses: actions/checkout@v4
          - name: Setup Pages
            uses: actions/configure-pages@v5
          - name: Upload pre-built files as artifact
            uses: actions/upload-pages-artifact@v3
            with:
              path: ${{ env.SITE_DIR }}/${{ env.BUILD_OUTPUT_DIR }}
    ```

    The trigger (`on: push: branches: ["dhbw/publish"]`) stays the same. The `deploy` job stays the same. Only the `build` job steps change — removing Rust, tera, npm install, and `npm run build`.

    **IMPORTANT:** This modified workflow stays on the `review/all-designs` branch — it will be pushed to `dhbw/publish` in Task 3, replacing the existing workflow there. The `design/c` branch (and other design branches) retain the original workflow because they don't push to `dhbw/publish`.

    **Part C — Commit everything to review/all-designs**

    ```
    git add site/build/dist/ .github/workflows/static.yml
    git commit -m "feat(review): assemble all 4 design versions for side-by-side review"
    ```

    Note: `site/build/dist/` is normally gitignored. Check `.gitignore` — if `build/` or `dist/` is ignored, add a `.gitignore` exception or use `git add -f` to force-add the dist files. Use `git add -f site/build/dist/` if needed.
  </action>
  <verify>
    1. `ls site/build/dist/index.html` — landing page exists
    2. Landing page contains all 4 links: `grep -c 'v[0-3]/index.html' site/build/dist/index.html` returns 4
    3. `.github/workflows/static.yml` does NOT contain `cargo install` (Rust removed)
    4. `git log --oneline -1` shows the review commit
  </verify>
  <done>
    The `review/all-designs` branch has: landing page at dist/index.html, 4 versioned design dirs, and a simplified static.yml workflow. One commit containing all pre-built files.
  </done>
</task>

<task type="checkpoint:human-verify" gate="blocking">
  <name>Task 3: Verify GitHub Pages deployment — all 4 designs live</name>
  <what-built>
    review/all-designs branch assembled with 4 versioned designs + landing page. Claude will push this branch to dhbw/publish to trigger GitHub Pages deployment.

    Before pushing: Claude will push review/all-designs to dhbw/publish using:
    ```
    git push publish review/all-designs:dhbw/publish --force
    ```
    (The `publish` remote points to the GitHub Pages repo. Force push is required to replace dhbw/publish content with the review branch.)

    After push, GitHub Actions will run the simplified workflow and deploy the pre-built files.
  </what-built>
  <how-to-verify>
    1. Check GitHub Actions at https://github.com/[repo]/actions — confirm the workflow ran successfully (green checkmark, no Rust/tera build step errors)
    2. Visit the GitHub Pages URL (same URL as before — check Settings > Pages for the exact URL)
    3. Confirm landing page loads at the root URL with 4 design cards
    4. Click each card and confirm the design loads correctly:
       - /v0/ = Original/production site
       - /v1/ = Design A (Playfair Display, navy/amber)
       - /v2/ = Design B (Outfit, teal)
       - /v3/ = Design C (Nunito+DM Sans, terracotta)
    5. On each design, navigate to at least 2 pages (e.g., Preise, Fahrzeuge) to confirm internal links work
  </how-to-verify>
  <resume-signal>
    Type "approved" if all 4 designs load correctly and the landing page works.
    Or describe any issues (broken links, wrong CSS, workflow failures).
  </resume-signal>
  <action>Push review/all-designs branch to dhbw/publish remote to trigger GitHub Pages deployment: git push publish review/all-designs:dhbw/publish --force</action>
  <verify>GitHub Actions workflow completes without error; Pages URL loads landing page with 4 design links</verify>
  <done>All 4 designs accessible at versioned paths from the live GitHub Pages URL; user confirms each design loads correctly</done>
</task>

</tasks>

<verification>
- `review/all-designs` branch exists locally and is pushed to origin
- `dhbw/publish` branch updated to serve the review content
- GitHub Pages deployment succeeded (no build errors)
- All 4 designs accessible at /v0/, /v1/, /v2/, /v3/ from the Pages URL
- Landing page at root URL links to all 4 versions
- The design/c, design/a, design/b branches are unchanged (no modifications to them)
- main branch is unchanged
</verification>

<success_criteria>
- User can visit one GitHub Pages URL and navigate between all 4 designs
- Each design is visually distinct and fully functional (CSS loads, images load, page navigation works)
- The review branch exists as a separate git branch — production branches (design/a, b, c) untouched
- Phase 24 Joint Review can proceed without any further setup
</success_criteria>

<output>
After completion, create `.planning/quick/1-multi-design-github-pages-with-v0-v1-v2-/1-SUMMARY.md` documenting:
- The branch name created (review/all-designs)
- The GitHub Pages URL where the review is live
- Any issues encountered (gitignore overrides, CSS path fixes, etc.)
- Confirmation that all 4 designs are accessible
</output>
