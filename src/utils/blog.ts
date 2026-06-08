import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

/** Nombre d'articles par page de blog (modifiable). */
export const POSTS_PER_PAGE = 4;

export function totalBlogPages(count: number): number {
  return Math.max(1, Math.ceil(count / POSTS_PER_PAGE));
}

/** Renvoie les articles d'une page donnée (1-indexé). */
export function pageSlice<T>(items: T[], page: number): T[] {
  const start = (page - 1) * POSTS_PER_PAGE;
  return items.slice(start, start + POSTS_PER_PAGE);
}

/** Articles publiés d'une langue, triés du plus récent au plus ancien. */
export async function getPosts(lang: Lang): Promise<Post[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft && data.lang === lang);
  return posts.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

/** Retire le préfixe de langue de l'id glob (ex: "fr/mon-article" -> "mon-article"). */
export function postSlug(id: string): string {
  return id.replace(/^(fr|en)\//, '');
}

/** Estimation du temps de lecture en minutes. */
export function readingTime(body: string | undefined): number {
  if (!body) return 1;
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

/** Formatage de date localisé. */
export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-FR' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
