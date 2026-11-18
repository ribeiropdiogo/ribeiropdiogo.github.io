// Research threads shown on the homepage. `items` are permalinks of publications or talks;
// the build fails if one doesn't exist, so a typo can't ship a broken link.
export const threads: { title: string; summary: string; items: string[] }[] = [
  {
    title: 'Truth discovery and reputation',
    summary:
      'Estimating how reliable each source is, keeping that reputation from one run to the next, and using it to fuse conflicting evidence, most recently in retrieval-augmented generation (RAG) pipelines.',
    items: ['/publication/2026-10-20-assia', '/talks/2026-10-22'],
  },
  {
    title: 'Digital identity',
    summary: 'Approaches to identity that include people without depending on a single central authority.',
    items: ['/publication/2026-07-28-access'],
  },
  {
    title: 'E-government and online public services',
    summary:
      'Measuring how online public services are run and secured, from the TLS and certificate setup of e-government sites worldwide to the online presence of Portuguese municipalities.',
    items: [
      '/publication/2025-04-30-giq',
      '/talks/2026-05-26',
      '/publication/2024-01-overview',
      '/publication/2026-04-20-ipic',
    ],
  },
];
