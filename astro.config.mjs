import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Configuration pour GitHub Pages avec domaine personnalisé
  site: 'https://villadesk-ribean.com',
  base: '/', // Racine du domaine personnalisé
  build: {
    assets: '_astro'
  },
  output: 'static' // Assure que nous utilisons le mode statique
});