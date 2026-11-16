import { readFile, readdir, stat } from 'node:fs/promises';
import { resolve, join, extname } from 'node:path';
import assert from 'node:assert/strict';
import { parse } from 'yaml';

const root = resolve('dist');
async function filesIn(dir) {
  const items = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(items.map(item => item.isDirectory() ? filesIn(join(dir, item.name)) : [join(dir, item.name)]))).flat();
}
const files = await filesIn(root);
const htmlFiles = files.filter(file => file.endsWith('.html'));
const htmlCache = new Map(await Promise.all(htmlFiles.map(async file => [file, await readFile(file, 'utf8')])));
const failures = [];
let checkedLinks = 0;
for (const [file, html] of htmlCache) {
  if (file !== join(root, 'index.html')) {
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `One h1 required: ${file}`);
    assert.match(html, /<html lang="(?:en|hi)"/);
    assert.match(html, /hreflang="(?:en|hi)"/);
  }
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length, `Duplicate IDs: ${file}`);
  for (const match of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    const ref = match[1].replace(/&amp;/g, '&');
    if (/^(?:https?:|mailto:|data:|tel:)/.test(ref)) continue;
    const basePath = '/' + file.slice(root.length + 1).replace(/index\.html$/, '');
    const url = new URL(ref, `https://audit.local${basePath}`);
    let destination = resolve(root, '.' + decodeURIComponent(url.pathname));
    if (!destination.startsWith(root)) { failures.push(`${file}: outside output ${ref}`); continue; }
    try {
      const info = await stat(destination);
      if (info.isDirectory()) destination = join(destination, 'index.html');
      await stat(destination);
      if (url.hash && extname(destination) === '.html') {
        const target = htmlCache.get(destination) || await readFile(destination, 'utf8');
        const anchor = decodeURIComponent(url.hash.slice(1));
        if (!target.includes(`id="${anchor}"`)) failures.push(`${file}: missing fragment ${ref}`);
      }
      checkedLinks++;
    } catch { failures.push(`${file}: missing target ${ref}`); }
  }
}

const articleDir = resolve('src/content/articles');
const articleFiles = (await filesIn(articleDir)).filter(file => file.endsWith('.md'));
assert.equal(articleFiles.length, 24, 'Twelve articles in two languages');
const articles = [];
for (const file of articleFiles) {
  const raw = await readFile(file, 'utf8');
  const [, frontmatter, body] = raw.split(/^---\s*$/m);
  const data = parse(frontmatter);
  articles.push({ ...data, body, file });
  assert.ok(body.trim().split(/\s+/).length >= 450, `Substantial article: ${file}`);
  const refs = [...body.matchAll(/\]\(#ref-(\d+)\)/g)].map(match => Number(match[1]));
  for (let i = 1; i <= data.sources.length; i++) assert.ok(refs.includes(i), `Source ${i} cited: ${file}`);
  assert.ok(refs.every(ref => ref <= data.sources.length), `Valid source numbers: ${file}`);
  assert.ok((body.match(/^## /gm) || []).length >= 3, `Article sections: ${file}`);
  assert.ok((body.match(new RegExp(`/${data.lang}/articles/`, 'g')) || []).length >= 2, `Connected article: ${file}`);
}
for (const article of articles) {
  const pair = articles.find(other => other.slugKey === article.slugKey && other.lang !== article.lang);
  assert.ok(pair, `Translation exists: ${article.slugKey}`);
  for (const field of ['kind', 'period', 'topics', 'texts', 'people', 'related']) assert.deepEqual(article[field], pair[field], `Paired ${field}: ${article.slugKey}`);
  assert.deepEqual(article.sources.map(s => s.url), pair.sources.map(s => s.url), `Paired sources: ${article.slugKey}`);
  for (const slug of article.related) assert.ok(articles.some(a => a.slugKey === slug && a.lang === article.lang), `Related article exists: ${slug}`);
}
for (const lang of ['en', 'hi']) {
  const index = JSON.parse(await readFile(join(root, lang, 'search-index.json'), 'utf8'));
  assert.equal(index.length, 12);
  assert.ok(index.every(article => article.text.length > 1500));
}
assert.deepEqual(failures, [], failures.join('\n'));
console.log(`Checked ${htmlFiles.length} HTML pages, ${checkedLinks} internal links/assets, 24 articles, paired metadata, citation anchors, and full-text indexes.`);
