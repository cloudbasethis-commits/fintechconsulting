import rss from '@astrojs/rss';
import { getPosts, postSlug } from '../utils/blog';

export async function GET(context) {
  const posts = await getPosts('fr');
  return rss({
    title: 'Blog FinTech Consulting SA',
    description:
      'Analyses sur la finance digitale, la monétique, la cybersécurité, le cloud et la transformation numérique des entreprises en Côte d’Ivoire.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${postSlug(post.id)}/`,
    })),
    customData: `<language>fr-FR</language>`,
  });
}
