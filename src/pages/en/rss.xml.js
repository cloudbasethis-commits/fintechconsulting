import rss from '@astrojs/rss';
import { getPosts, postSlug } from '../../utils/blog';

export async function GET(context) {
  const posts = await getPosts('en');
  return rss({
    title: 'FinTech Consulting SA Blog',
    description:
      'Insights on digital finance, monetics, cybersecurity, cloud and the digital transformation of enterprises in Côte d’Ivoire.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/en/blog/${postSlug(post.id)}/`,
    })),
    customData: `<language>en</language>`,
  });
}
