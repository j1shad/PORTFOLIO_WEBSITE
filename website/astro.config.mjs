import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jasonacquah.github.io',
  // Uncomment the line below and update if deploying to a subdirectory
  // base: '/portfolio-website',
  integrations: [
    react(),    // React components support, including Shadcn/ui
    mdx(),      // MDX support for blog posts
    sitemap(),  // Automatic sitemap generation
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});