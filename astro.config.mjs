// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// User site: served at the domain root, so `base` stays '/'.
// A custom domain later only needs `site` changed.
export default defineConfig({
  site: 'https://byun11.github.io',
  base: '/',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
});
