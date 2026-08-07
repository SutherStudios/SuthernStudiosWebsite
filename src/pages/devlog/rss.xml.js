import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../../config';

export async function GET(context) {
  const posts = (await getCollection('devlog', ({ data }) => !data.draft)).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: `${SITE.name} — Devlog`,
    description: 'Build logs from Suthern Studios. Development happens in the open.',
    site: context.site ?? SITE.url,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: post.data.date,
      categories: [post.data.tag],
      link: `/devlog/${post.id}/`,
    })),
    customData: '<language>en-us</language>',
  });
}
