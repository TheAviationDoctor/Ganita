# Future deployment: Cloudflare Pages and GitHub

**Instructions only. No publication, Git push, DNS change, or outside contact has been performed. Obtain the owner's explicit instruction before these actions.** A Pages build publishes a `pages.dev` URL even without a custom domain. Complete the editorial review in `CONTENT.md` before public release.

## Build settings

This is static Astro. No adapter, Functions, Worker, database, environment secret, or API key is needed.

| Setting | Value |
| --- | --- |
| Repository | `TheAviationDoctor/Ganita`; verify remote and chosen branch |
| Framework preset | Astro |
| Root directory | Repository root |
| Production branch | Owner's reviewed branch, normally `main` |
| Build command | `npm run check && npm test && npm run build && npm run test:site` |
| Output | `dist` |
| Node | `NODE_VERSION=24`; `.nvmrc` also specifies 24 |

Commit `package-lock.json`. Package scripts disable Astro telemetry. Canonical origin is in `astro.config.mjs`, `public/robots.txt`, and `src/pages/sitemap.xml.ts`; update them together if it changes.

Cloudflare's [Astro guide](https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/) documents `npm run build` / `dist`. The longer command adds project checks. See [build configuration](https://developers.cloudflare.com/pages/configuration/build-configuration/) for environment settings.

## GitHub integration, when authorized

1. Review and commit local files; push only on the owner's request. Confirm release status and corrections route.
2. In **Workers & Pages**, create a **Pages** project with Git integration (not a Worker or Direct Upload project). Connect GitHub, restrict access to this repository, and choose the production branch and settings above.
3. Start the build. **This is publication.** Check its log and assigned `pages.dev` URL: both languages, fonts, deep links, sources, demonstrations, search, 404, and headers.
4. Configure branch deployment controls deliberately. Future pushes may automatically deploy; preview branches can also become publicly reachable. No integration was configured by this work. The included GitHub Actions workflow only checks the site.

See [GitHub integration](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/) for branch controls and preview behaviour.

## Custom domain, after deployment and DNS authorization

1. Export the existing Cloudflare zone. Record apex/`www`/`ganita`, other subdomains, MX, SPF, DKIM, DMARC, CAA, and verification records. This work has not inspected the live zone. Check existing wildcard rules and any current use of `ganita`.
2. In Pages **Custom domains**, add `ganita.pellegr.in` and follow validation. Associate the hostname in Pages before adding only a CNAME manually; an unassociated CNAME can fail.
3. Accept/create **only** the `ganita` record, using the target actually supplied by Pages, normally `<project>.pages.dev`. Never guess the project name. Leave Squarespace registrar nameservers alone; DNS already resides at Cloudflare.
4. Wait for activation and TLS. Test `/en/`, `/hi/`, and a deep article before root redirects.

See [Pages custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/). Do not replace the zone or add a wildcard CNAME.

## Redirect the apex and `www` only

Create a Cloudflare **Single Redirect**, custom filter:

```text
(http.host eq "pellegr.in") or (http.host eq "www.pellegr.in")
```

Dynamic target preserving the path:

```text
concat("https://ganita.pellegr.in", http.request.uri.path)
```

Use permanent status **301** and enable **Preserve query string**. The target hostname does not match, avoiding a loop. `/` then follows the site's language redirect to `/en/`. Unmapped old paths return the site's 404; add specific legacy mappings only when needed.

Single Redirects require proxied incoming HTTP traffic. Inspect current A/AAAA/CNAME records and dependencies before changing their targets or proxy status; retain existing records where appropriate. Do not blindly replace apex addresses with placeholders. If MX points to the apex, or SPF uses an apex-dependent `a` mechanism, resolve that dependency with the owner before changing its address/proxy state. Exact DNS changes depend on the actual zone, which has not been assumed here.

`public/_redirects` only implements `/ /en/ 302` inside the site. It does not implement zone-level host redirects. Do not add a catch-all redirect for other subdomains.

See [Single Redirect setup](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/) and [settings](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/settings/).

## Preserve services and verify

Leave unrelated DNS records and proxy states unchanged, including mail hosts, autodiscover, MX, SPF, DKIM selectors, DMARC, and verification TXT. Check mail's dependencies on the apex. Never replace the zone or registrar nameservers.

After authorized changes, compare the zone export and verify other subdomains still resolve as before. Verify mail delivery through the existing provider without sending anything on the owner's behalf unless separately authorized.

Test HTTP/HTTPS for both redirect hosts, paths, query strings, and absence of loops. Check deployed `_headers`, CSP, fonts, search, demonstrations, and 404 status. Local preview does not apply Cloudflare headers. The CSP permits local scripts/assets; external bibliography links are ordinary navigation.

For a faulty build, roll back to the previous successful Pages deployment. For faulty routing, disable the new redirect and restore only changed web records from the export, preserving mail.

This project does not guarantee .IN registry or registrar acceptance. No compliance declaration is implied by these instructions.
