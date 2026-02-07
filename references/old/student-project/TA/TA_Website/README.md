# TeilAuto Mössingen Website

The website is composed using the `tera` templating engine.
This allows for reusability, while not having to use a javascript framework.
Processed files are found in the `src` directory, which can use components of the `templates` directory. Unprocessed files like images are found in `public`.

## Prerequisites (Windows)

We rely on [Scoop](https://scoop.sh/) to keep the local toolchain consistent. Run the following once:

```powershell
# Install LTS Node.js + npm
scoop install nodejs-lts

# Install PowerShell 7 if you do not already have it
scoop install pwsh

# Install the Rust toolchain so we can compile tera-cli
scoop install rustup
rustup-init -y
rustup default stable

# Install tera CLI (templating engine)
cargo install tera-cli
```

Verify the setup:

```powershell
node --version
pwsh --version
tera --version
```

## Install dependencies

From `references/old/student-project/TA/TA_Website`:

```powershell
npm install
```

This installs the npm scripts only (there are no JavaScript runtime dependencies yet).

## Available npm scripts

| Command            | Description |
|--------------------|-------------|
| `npm run clean`    | Removes the `build/` directory. |
| `npm run build`    | Cleans and recompiles all templates using `tera`, then copies `public/` into `build/src`. |
| `npm run watch`    | Performs a clean build once, then rebuilds automatically whenever `src/`, `templates/`, or `public/` changes. |
| `npm run dev`      | Alias for `npm run watch`. |

## VS Code integration

- The repository contains `.vscode/tasks.json`, so running the **“npm: watch”** task will start the PowerShell watcher in the background.
- The Live Preview extension is configured via `.vscode/settings.json` to open `build/src/index.html`; start the watcher first, then run Live Preview to see instant updates on save.

## Deployment

`npm run build` produces the exact `build/src` output that GitHub Pages consumes today. See `.github/workflows/deploy.yml` for the GitHub Pages pipeline (still using this folder as the working directory).

> **Note:** sFTP deployment is not wired up yet. We will add a script and automation later once the hosting details are finalized.
