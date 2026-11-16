import { getCollection } from 'astro:content';
import type { Lang } from './i18n';

export async function articlesFor(lang: Lang) {
  return (await getCollection('articles')).filter(a => a.data.lang === lang).sort((a, b) => a.data.title.localeCompare(b.data.title, lang));
}
export const articleUrl = (lang: Lang, slug: string) => `/${lang}/articles/${slug}/`;
export const browseUrl = (lang: Lang, type: string, value: string) => `/${lang}/browse/${type}/${encodeURIComponent(value)}/`;
