import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { languages } from '../lib/i18n';
import { editorialPages } from '../lib/editorial';
import { browseUrl } from '../lib/articles';
export const GET: APIRoute = async () => {
  const paths = new Set<string>();
  const all = await getCollection('articles');
  for (const lang of languages) {
    for (const page of ['', 'explore/', 'demonstrations/', 'bibliography/', 'search/', ...editorialPages.map(p => `${p}/`)]) paths.add(`/${lang}/${page}`);
    for (const article of all.filter(a => a.data.lang === lang)) {
      paths.add(`/${lang}/articles/${article.data.slugKey}/`);
      for (const [type, values] of [['person', article.data.people], ['period', [article.data.period]], ['topic', article.data.topics], ['text', article.data.texts]] as [string, string[]][]) for (const value of values) paths.add(browseUrl(lang, type, value));
    }
  }
  const escapeXml = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${[...paths].map(path => `<url><loc>${escapeXml(new URL(path, 'https://ganita.pellegr.in').href)}</loc></url>`).join('')}</urlset>`, { headers: { 'Content-Type': 'application/xml' } });
};
