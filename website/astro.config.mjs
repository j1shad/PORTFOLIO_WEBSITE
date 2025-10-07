import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // The official Astro integrations are the best way to add features.
  // We'll use both the Tailwind and React integrations here.
  // These settings are crucial for deploying your project to GitHub Pages
  // with a custom base path.
  // site: 'https://yourusername.github.io',
  // base: '/portfolio-website',
  integrations: [
    react(),    // This is required to use React components, including Shadcn/ui.
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});