import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// ---------------------------------------------------------------------------
// DEPLOY TARGET
// ---------------------------------------------------------------------------
// Currently configured for the custom domain (see public/CNAME).
//
// If you'd rather publish to the default GitHub Pages URL
// (https://sutherstudios.github.io/SuthernStudiosWebsite), then:
//   1. set  site: 'https://sutherstudios.github.io'
//   2. add  base: '/SuthernStudiosWebsite'
//   3. delete public/CNAME
// Everything else — links, assets — resolves through Astro and will follow.
// ---------------------------------------------------------------------------

export default defineConfig({
  site: 'https://suthernstudios.com',
  integrations: [sitemap()],
  build: {
    // Emit /about/index.html rather than /about.html so URLs stay extensionless
    // on GitHub Pages, which has no rewrite layer.
    format: 'directory',
  },
});
