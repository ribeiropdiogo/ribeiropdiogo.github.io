import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPublications, getTalks } from '../lib/entries';
import { SITE } from '../site';

export async function GET(context: APIContext) {
  const [pubs, talks] = await Promise.all([getPublications(), getTalks()]);
  const items = [
    ...pubs.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      link: p.data.permalink + '/',
      description: p.data.venue,
      categories: ['Publication'],
    })),
    ...talks.map((t) => ({
      title: `Talk: ${t.data.title}`,
      pubDate: t.data.date,
      link: t.data.permalink + '/',
      description: [t.data.venue, t.data.location].filter(Boolean).join(', '),
      categories: ['Talk'],
    })),
  ].sort((a, b) => b.pubDate.getTime() - a.pubDate.getTime());

  return rss({
    title: `${SITE.name}: publications and talks`,
    description: SITE.description,
    site: context.site!,
    items,
  });
}
