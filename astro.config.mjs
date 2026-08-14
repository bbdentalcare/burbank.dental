import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://burbank.dental',
  output: 'static',
  build: {
    format: 'file'
  }
});
