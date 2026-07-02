import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://modapksoftcom-production.up.railway.app',
  integrations: [
    sitemap({
      canonicalURLs: true,
      lastmod: true,
      changefreq: 'weekly',
      priority: 0.7,
    }),
  ],
});
