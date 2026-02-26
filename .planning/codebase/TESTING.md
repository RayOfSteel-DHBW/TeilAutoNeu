# Testing

## Test Framework

**None.** No test framework is installed or configured.

- No test runner (Jest, Vitest, Mocha, Playwright, Cypress, etc.)
- No test-related dependencies in `package.json`
- No test scripts in `package.json`
- `package.json` contains only build/watch/clean scripts driven by PowerShell

## Test Structure

**No test files exist.** Searched patterns with zero results:
- `site/**/*.test.*`
- `site/**/*.spec.*`
- `site/**/jest*`
- `site/**/vitest*`

No `__tests__/`, `test/`, or `spec/` directories present.

## Coverage

### What Is NOT Tested (everything)

| Area | Files | Risk |
|------|-------|------|
| HTML structure | 8 page files + 3 templates | No validation of output markup |
| CSS rendering | 6 CSS files | No visual regression testing |
| Accordion JS | `accordion.html` inline script | No unit/interaction tests |
| Map JS | `map-parking.html` inline script | No unit/interaction tests |
| Nav hamburger | `base.html` inline onclick | No interaction tests |
| Tera template rendering | All `.html` files | No integration tests for template output |
| Build script | `build-site.ps1` (132 lines) | No automated verification of build output |
| Link integrity | Internal links across 8 pages | No broken-link checking |
| Accessibility | All pages | No a11y auditing (axe, pa11y, etc.) |
| Form validation | `mitglied-werden.html` contact form | No submission testing; `onsubmit` is placeholder `alert()` |

### What Could Benefit Most From Testing

1. **Build output validation** — Verify Tera produces valid HTML (no unresolved `{% %}` tags in output)
2. **Link checking** — Internal links use relative paths with known casing inconsistency (`Preise.html` vs `preise.html`)
3. **HTML validation** — W3C validator pass on built output
4. **Accessibility audit** — Automated a11y checks (missing alt text, ARIA, contrast)
5. **Visual regression** — Screenshot comparison for responsive breakpoints (portrait/landscape, <800px / ≥800px)

## Build Verification

### Build Script (`scripts/build-site.ps1`)

The build script provides basic error handling but no validation:

- **Error on Tera failure**: `$LASTEXITCODE -ne 0` check throws on template compilation errors
- **Strict mode**: `Set-StrictMode -Version Latest` + `$ErrorActionPreference = "Stop"` — catches undefined variables and non-zero exits
- **Directory existence check**: Verifies `src/` directory exists before building
- **No output validation**: Does not check that built HTML is well-formed
- **No link checking**: Does not verify internal links resolve
- **No CSS validation**: Processes CSS through Tera but does not lint or validate

### npm Scripts

| Script | Validation Level |
|--------|-----------------|
| `npm run clean` | Removes build dir — no checks |
| `npm run build` | Calls Tera with exit-code checking only |
| `npm run watch` | Same as build, re-runs on file changes |
| `npm run dev` | Alias for watch |

### Linting & Formatting

**None configured:**

- No `.eslintrc` / `eslint.config.*`
- No `.prettierrc` / `prettier.config.*`
- No `.stylelintrc` / `stylelint.config.*`
- No `.editorconfig`
- No `htmlhint` or `htmlvalidate` configuration
- No pre-commit hooks (`husky`, `lint-staged`, etc.)

### CI/CD

- GitHub Pages deployment via `.github/workflows/static.yml` (mentioned in README)
- Pipeline consumes `build/dist` output
- No test step in the pipeline (build-only)

### VS Code Integration

- `tasks.json` defines `npm: watch` as a background task
- `settings.json` points Live Preview to `/build/dist/index.html`
- No problem matchers configured for HTML/CSS validation
