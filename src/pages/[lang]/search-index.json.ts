import type { APIRoute } from 'astro';
import { articlesFor, articleUrl } from '../../lib/articles';
import { languages, type Lang } from '../../lib/i18n';
export const getStaticPaths = () => languages.map(lang => ({ params: { lang } }));
export const GET: APIRoute = async ({ params }) => {
  const lang = params.lang as Lang;
  return new Response(JSON.stringify((await articlesFor(lang)).map(article => ({
    slug: article.data.slugKey,
    title: article.data.title,
    summary: article.data.summary,
    url: articleUrl(lang, article.data.slugKey),
    text: [article.data.title, article.data.summary, article.body, ...article.data.people, ...article.data.texts, ...article.data.topics].join(' '),
  }))), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
};
