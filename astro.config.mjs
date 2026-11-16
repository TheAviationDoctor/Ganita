import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ganita.pellegr.in',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'directory' },
  markdown: { shikiConfig: { theme: 'github-light' } },
  devToolbar: { enabled: false },
});
