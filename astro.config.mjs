import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sportsbanquetguide.com',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
