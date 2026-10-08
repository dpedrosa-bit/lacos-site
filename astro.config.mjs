import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lacos.tec.br',
  trailingSlash: 'never',
  build: { inlineStylesheets: 'auto' },
  integrations: [sitemap()],
});
