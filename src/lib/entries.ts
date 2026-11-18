import { getCollection, type CollectionEntry } from 'astro:content';

export type Publication = CollectionEntry<'publications'>;
export type Talk = CollectionEntry<'talks'>;
export type Course = CollectionEntry<'teaching'>;

export const CATEGORY_LABELS: Record<Publication['data']['category'], string> = {
  manuscripts: 'Journal articles',
  conferences: 'Conference papers',
  books: 'Books',
  reports: 'Technical reports',
};

/** "/publication/2022-11-chatbot" -> "2022-11-chatbot" */
export const slugFromPermalink = (permalink: string) => permalink.split('/').filter(Boolean).pop()!;

const byDateDesc = <T extends { data: { date: Date } }>(a: T, b: T) =>
  b.data.date.getTime() - a.data.date.getTime();

export async function getPublications() {
  return (await getCollection('publications')).sort(byDateDesc);
}
export async function getTalks() {
  return (await getCollection('talks')).sort(byDateDesc);
}
export async function getCourses() {
  return (await getCollection('teaching')).sort(byDateDesc);
}

/** The course name is the first line of a teaching entry's body. */
export function courseName(course: Course) {
  const first = (course.body ?? '').split('\n').find((l) => l.trim() !== '');
  return first?.replace(/^[*\-#\s]+/, '').trim() ?? course.data.title;
}

/** Topics are the bullet list under the course name. */
export function courseTopics(course: Course) {
  return (course.body ?? '')
    .split('\n')
    .filter((l) => /^\s*[*-]\s+/.test(l))
    .map((l) => l.replace(/^\s*[*-]\s+/, '').trim());
}

const monthYear = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
const fullDate = new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
export const formatMonth = (d: Date) => monthYear.format(d);
export const formatDay = (d: Date) => fullDate.format(d);
export const isoDate = (d: Date) => d.toISOString().slice(0, 10);

/** Bold my name inside an author/citation string (display only; text unchanged). */
export function highlightMe(citation: string) {
  return citation.replace(
    /(Ribeiro, Diogo(?: Pinto)?|Ribeiro, D\.(?: P\.)?|D\. Ribeiro)/g,
    '<strong>$1</strong>',
  );
}

export type TimelineItem = {
  date: Date;
  kind: 'Paper' | 'Report' | 'Talk' | 'Course';
  title: string;
  href?: string;
  meta: string;
};

export async function getTimeline(): Promise<TimelineItem[]> {
  const [pubs, talks, courses] = await Promise.all([getPublications(), getTalks(), getCourses()]);
  const items: TimelineItem[] = [
    ...pubs.map((p) => ({
      date: p.data.date,
      kind: (p.data.category === 'reports' ? 'Report' : 'Paper') as TimelineItem['kind'],
      title: p.data.title,
      href: p.data.permalink + '/',
      meta: p.data.venue,
    })),
    ...talks.map((t) => ({
      date: t.data.date,
      kind: 'Talk' as const,
      title: t.data.title,
      href: t.data.permalink + '/',
      meta: [t.data.venue, t.data.location].filter(Boolean).join(', '),
    })),
    ...courses.map((c) => ({
      date: c.data.date,
      kind: 'Course' as const,
      title: courseName(c),
      href: '/teaching/',
      meta: `${c.data.title}, ${c.data.venue}`,
    })),
  ];
  return items.sort((a, b) => b.date.getTime() - a.date.getTime());
}
