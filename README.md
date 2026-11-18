# ribeiropdiogo.github.io

Personal academic website of Diogo Ribeiro, built with [Astro](https://astro.build) and deployed to GitHub Pages.

## Run it locally

Requires Node 22.23.4 or newer.

```bash
npm install
npm run dev        # http://localhost:4321, reloads on save
npm run build      # production build into dist/
npm run preview    # serve the production build
```

## Where things live

| What | Where |
| --- | --- |
| Name, roles, email, profile links, nav | `src/site.ts` |
| About text (homepage) | `src/content/pages/about.md` |
| CV (education, work, skills, peer review) | `src/data/cv.ts` |
| Publications | `src/content/publications/*.md` |
| Talks | `src/content/talks/*.md` |
| Teaching | `src/content/teaching/*.md` |
| BibTeX files, slides, PDFs | `public/files/` (served at `/files/...`) |
| Avatar and favicons | `public/images/` |
| Colors, type scale, spacing | `src/styles/global.css` |
| Old-URL redirects | `redirects` in `astro.config.mjs` |

The talks map, the homepage "Recent" timeline, the CV's publication and teaching lists, and the RSS feed (`/feed.xml`) are generated from the content files, so adding a file updates all of them.

## Add a publication

Create `src/content/publications/YYYY-MM-DD-short-name.md`:

```markdown
---
title: "Paper title"
category: conferences          # manuscripts | conferences | books | reports
permalink: /publication/YYYY-MM-DD-short-name
date: YYYY-MM-DD
venue: 'Conference or journal name'
paperurl: 'https://doi.org/...'                 # optional
bibtexurl: '/files/short-name.bib'              # optional, put the file in public/files/
slidesurl: '/files/short-name-slides.pdf'       # optional
citation: 'Ribeiro, D., ... (YYYY). "Paper title." Venue.'
---
```

Your name is highlighted in citations automatically. If a talk has the same title, the paper and talk pages link to each other, and the paper also shows the talk's slides.

## Add a talk

Create `src/content/talks/YYYY-MM-DD-short-name.md`:

```markdown
---
title: "Talk title"
type: "Talk"
permalink: /talks/YYYY-MM-DD
venue: "Event name"
date: YYYY-MM-DD
location: "City, Country"
coordinates: [41.1579, -8.6291]  # [latitude, longitude], places the talk on the map
slidesurl: '/files/slides.pdf'   # optional, put the file in public/files/
---

Abstract in markdown.
```

## Add a course

Create `src/content/teaching/YYYY-term-teaching.md`. The first line of the body is the course name and the bullet list is its topics:

```markdown
---
title: "1st Semester 26/27"
type: "Undergraduate Course"
venue: "University of Minho, Department of Informatics"
date: YYYY-MM-DD
---

Course name
* Topic one
* Topic two
```

A typo in any frontmatter field fails the build with a message saying which file and field, so mistakes don't reach the live site.

## Deploy

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to GitHub Pages. Pull requests run the build as a check. The repository's Pages source must be set to **GitHub Actions** (Settings → Pages → Build and deployment → Source).
