// Single source of truth for profile data (migrated from the Jekyll _config.yml).
export const SITE = {
  url: 'https://ribeiropdiogo.github.io',
  name: 'Diogo Ribeiro',
  description:
    'Diogo Ribeiro: PhD student at the University of Minho and Research Assistant at HasLab INESC TEC, working on truth discovery and reputation systems.',
  avatar: '/images/8500.jpg',
  location: 'Braga, Portugal',
  email: 'diogo.p.ribeiro@inesctec.pt',
  roles: [
    { title: 'PhD Student', org: 'University of Minho' },
    { title: 'Research Assistant', org: 'HasLab INESC TEC' },
    { title: 'Invited Assistant', org: 'University of Minho' },
  ],
  umamiId: '8d21b738-1f1b-46fc-9d29-4cf88136ca21',
} as const;

export const LINKS = [
  { label: 'Google Scholar', href: 'https://scholar.google.com/citations?user=2KMdJkMAAAAJ&hl=en' },
  { label: 'ORCID', href: 'http://orcid.org/0009-0005-0713-5842' },
  { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Diogo-Ribeiro-32' },
  { label: 'Scopus', href: 'https://www.scopus.com/authid/detail.uri?authorId=58711153100' },
  { label: 'GitHub', href: 'https://github.com/ribeiropdiogo' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ribeiropdiogo' },
  { label: 'Instagram', href: 'https://www.instagram.com/ribeiropdiogo' },
] as const;

export const NAV = [
  { label: 'About', href: '/' },
  { label: 'Publications', href: '/publications/' },
  { label: 'Talks', href: '/talks/' },
  { label: 'Teaching', href: '/teaching/' },
  { label: 'CV', href: '/cv/' },
] as const;
