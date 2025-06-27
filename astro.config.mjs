import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Configuration pour GitHub Pages
  site: 'https://villadesk-ribean.com',
  base: '/vilakarib-astro/', // Base path pour GitHub Pages
  build: {
    assets: '_astro'
  },
  output: 'static' // Assure que nous utilisons le mode statique
});