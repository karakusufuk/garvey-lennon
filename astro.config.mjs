import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://garveylennon.ufuk.ie',
  server: { port: 4408, host: '127.0.0.1' },
  output: 'static',
  compressHTML: true,
  build: { inlineStylesheets: 'always' },
  devToolbar: { enabled: false },
});
