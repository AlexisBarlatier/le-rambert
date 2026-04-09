// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  site: 'https://locationdordognelerambert.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en'],
  },
});
