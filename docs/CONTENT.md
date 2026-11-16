# Editing the collection

Content is reviewed static material, not generated for visitors. Review the diff and local preview before committing. Do not invent source access, reviewers, credentials, or completed reviews.

## Paired article files

Each article has matching `src/content/articles/en/<slug>.md` and `hi/<slug>.md` files. Keep `slugKey`, category metadata, related slugs, source order/URLs, and mathematical examples consistent. Hindi must be a full treatment, not a summary. The language toggle depends on this pairing.

Example frontmatter (replace illustrative source fields with a source you have actually read):

```yaml
---
slugKey: zero
lang: en
title: "Zero: a place, a sign, a number"
summary: "A concise description."
kind: idea
period: classical
people: [Brahmagupta, Āryabhaṭa]
topics: [arithmetic, algebra, historiography]
texts: [Brāhmasphuṭasiddhānta]
related: [brahmagupta, aryabhata, transmission]
lastRevised: '2026-11-16'
sources:
  - id: stable-source-key
    author: "Actual author"
    title: "Actual title and edition"
    url: "https://example.org/replace-with-verified-source"
    locator: "Actual page, verse, or section checked"
    kind: primary
---
```

Article kinds: `person`, `text`, `idea`, `context`. Loose period guides: `early` (first millennium BCE onward), `classical` (c.500–1200 CE), `medieval` (c.1200–1700), `modern` (19th–20th centuries). Place a cross-period subject by its principal focus. These are editorial guides, not rigid boundaries.

Topic keys are in `src/content.config.ts`. Keep canonical transliterated names/titles consistent and add Hindi display labels to `src/lib/i18n.ts`. Taxonomy pages and bibliography are generated automatically. The bibliography deduplicates by exact URL while retaining each article's locator.

## Citations and mathematics

Place `[1](#ref-1)` beside the claim supported by source 1, and so on. The template supplies the reference list. Reordering sources requires renumbering citations. Cite a passage, not merely an institution's homepage. A publisher abstract/catalogue supports only its visible information, not an unseen book.

Use `##` headings for the automatic contents list and localized links such as `/hi/articles/ramanujan/`. Use Unicode notation or `<sup>` for simple mathematics; raw LaTeX `$...$` is not enabled. State assumptions and units. Mark modern examples and reconstructions; distinguish them from historical quotations or proofs. Test long formulas and tables on narrow screens.

Recalculate examples independently. A modern proof does not establish an ancient author's reasoning. Demonstrations are in `src/pages/[lang]/demonstrations.astro`; their tested functions are in `src/lib/math.ts`.

## Human review before release

1. Check every historical claim against its passage, edition, date, and locator. Separate author, translator, researcher, and later commentator.
2. Obtain human historical review and Hindi-language review. Neither independent review is claimed for this local edition. Check complete language parity and mathematical terminology.
3. Check approximate dates, attributed results, formula restrictions, and transmission claims. Do not turn a later witness into an author's original or an approximation into an exact equality.
4. Check quotations and rights. Future external images require creator, exact source, licence/public-domain basis, and modification notes on the credits page. This edition has no external images.
5. Test both languages, keyboard navigation, zoom, narrow layouts, citations, contact links, and demonstrations. Automated tests do not check historical source support or translation quality.
6. Record the real reviewer, actual date, scope, and unresolved limitations in the public history. Change review-copy labels only when the stated review actually happens: labels appear in Base.astro, article metadata, home, and editorial content.

## Validation and revisions

```sh
npm run check
npm test
npm run build
npm run test:site
npm run test:e2e
```

The build audit checks 24 paired articles, substance, metadata parity, citation numbering, links/fragments/assets, headings, and full-text indexes. If intentionally changing the article count, update expectations in `scripts/audit-build.mjs` and first-edition copy on home/search/editorial pages and README.

General project prose and public revision history are in `src/lib/editorial.ts`. Accepted corrections should update both languages, affected article dates, and substantive history entries. Research limitations are recorded in `docs/RESEARCH.md`.
