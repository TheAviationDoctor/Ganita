# Gaṇita — Indian Mathematical Heritage

A static, bilingual reading room built with Astro 7, Markdown collections, TypeScript, and small browser scripts. Intended destination: **https://ganita.pellegr.in**.

**Status:** local first edition for review. Twelve substantial articles in **each** of English and Hindi, including Ramanujan; three demonstrations; full-text search; browsing by person, period, topic, and text; bibliography and article citations; editorial information and revision history. Source-checked with AI assistance; independent human historical and Hindi editorial review remains pending and is stated on the site. No deployment, DNS changes, Git push, or registrar communications have been performed.

## Setup and preview

Use **Node.js 24 LTS** and npm. Exact dependencies are in `package-lock.json`. No API keys or environment secrets are needed.

```sh
nvm use
npm ci
npm run dev
```

Open Astro's printed Local URL, normally [English](http://127.0.0.1:4321/en/) or [Hindi](http://127.0.0.1:4321/hi/). The root redirects to English; the language link preserves the current article or browse category.

```sh
npm run check
npm test
npm run build
npm run test:site
npm run preview
```

Astro may run the server in the background in this environment. Check `npm run preview -- status`; stop it with `npm run preview -- stop`. Development equivalents: `npm run dev -- status` and `npm run dev -- stop`. Preview serves `dist/`; rebuild and reload after edits. Local preview does not apply Cloudflare's `_headers` or `_redirects` rules.

Browser checks (desktop/mobile Chromium, including axe accessibility scans):

```sh
npx playwright install chromium
npm run test:e2e
```

Build first. The suite starts or reuses a loopback preview on port 4321. Run `npm run preview -- stop` afterwards if a background preview remains. Automated accessibility scans supplement keyboard and screen-reader review; they do not certify accessibility.

## Project map

| Location | Purpose |
| --- | --- |
| `src/content/articles/en/`, `hi/` | Twelve paired Markdown articles in each language |
| `src/content.config.ts` | Validated content schema |
| `src/pages/[lang]/` | Localized pages, articles, indexes, search |
| `src/lib/i18n.ts` | Interface labels and taxonomy translations |
| `src/lib/editorial.ts` | About, methodology, corrections, history, credits |
| `src/lib/math.ts` | Tested mathematical implementations |
| `src/styles/global.css` | Responsive typography and layout |
| `public/` | Original SVGs, font licences, Cloudflare headers and redirect |
| `scripts/`, `tests/` | Mathematical, content, link, browser and accessibility checks |
| `docs/CONTENT.md` | Editing and editorial review |
| `docs/DEPLOYMENT.md` | Future Cloudflare Pages / GitHub setup and domain plan |
| `docs/RESEARCH.md` | Source scope and remaining review work |

The articles cover Śulbasūtras, Āryabhaṭa, Brahmagupta, zero, Bhāskara II, Līlāvatī, kuṭṭaka, prosody, Mādhava, Yuktibhāṣā, Ramanujan, and transmission across languages. Each has source locators, numbered citation anchors, original worked examples, and related readings.

Demonstrations explain sine lengths/chords, convergence of two π series, and integer partitions. They use modern algorithms, exact integer counting, and explicit numerical limits. Initial examples and diagrams remain readable without JavaScript. Search needs JavaScript; reading and browsing do not. Latin search ignores accents while preserving Hindi vowel signs.

Fonts are self-hosted. There are no third-party runtime requests, database, accounts, live LLM, analytics, or contact form. Corrections use this repository's public GitHub issue tracker; no email or affiliation is invented. If Issues is disabled, enable it or replace the route with a verified contact before release.

## Deployment boundary

Target: **Cloudflare Pages with GitHub integration**, output `dist/`. No deployment workflow or secrets are included. GitHub Actions only validates. Follow [the deployment guide](docs/DEPLOYMENT.md) **only after explicit authorization to publish**. Connecting Pages and running its first build already publishes a `pages.dev` URL.

Domain plan: `ganita.pellegr.in` serves content; exact-host redirects from `pellegr.in` and `www.pellegr.in`; preserve other subdomains and email. Instructions describe a future plan, not the current DNS state. Registrar/registry acceptance is uncertain; the site does not guarantee .IN compliance.

## Licence

The existing [MIT licence](LICENSE) covers original code, prose, and drawings. Font notices are in [public/font-licenses.txt](public/font-licenses.txt) under SIL OFL 1.1. Linked works retain their own rights; a citation does not license their images or scans.
