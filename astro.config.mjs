// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: netlify(),
  site: 'https://locationdordognelerambert.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
});
