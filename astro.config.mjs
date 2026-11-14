// @ts-check
import { readdirSync, readFileSync } from 'node:fs';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// lastmod für die Sitemap: Slug -> updatedDate, sonst pubDate aus dem Blog-Frontmatter.
// Statische Seiten haben keine verlässliche Datumsquelle und bleiben bewusst ohne
// lastmod, statt ein Build-Datum zu erfinden (Google entwertet unglaubwürdige Werte).
const blogDir = new URL('./src/content/blog/', import.meta.url);
const postDates = new Map();
for (const file of readdirSync(blogDir)) {
  if (!file.endsWith('.md')) continue;
  const src = readFileSync(new URL(file, blogDir), 'utf8');
  const date = src.match(/^updatedDate:\s*"?([\d-]+)"?/m) ?? src.match(/^pubDate:\s*"?([\d-]+)"?/m);
  if (date) postDates.set(file.replace(/\.md$/, ''), date[1]);
}

// https://astro.build/config
export default defineConfig({
  site: 'https://wolfsknigge.de',
  trailingSlash: 'always',
  integrations: [
    sitemap({
      filter: (page) =>
        !/\/(danke|thanks-formular|404)\/?$/.test(page),
      serialize: (item) => {
        const slug = new URL(item.url).pathname.replaceAll('/', '');
        const pubDate = postDates.get(slug);
        return pubDate ? { ...item, lastmod: new Date(pubDate).toISOString() } : item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()]
  }
});
