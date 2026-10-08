import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://lacos.tec.br',
  trailingSlash: 'never',
  // format 'file' gera /en.html em vez de /en/index.html: o Pages serve /en sem
  // redirecionar para /en/, e a URL bate com a canonical.
  build: { inlineStylesheets: 'auto', format: 'file' },
  integrations: [sitemap()],
});
