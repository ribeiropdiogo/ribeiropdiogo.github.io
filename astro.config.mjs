// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ribeiropdiogo.github.io',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [sitemap()],
  // Old Jekyll URLs that moved. Static builds emit a small HTML redirect page for each.
  redirects: {
    '/about': '/',
    '/resume': '/cv/',
    '/cv-json': '/cv/',
    // Four teaching entries shared this permalink on the old site.
    '/teaching/2014-spring-teaching': '/teaching/',
    '/teaching/2026-spring-teaching': '/teaching/',
    '/talkmap': '/talks/',
  },
});
