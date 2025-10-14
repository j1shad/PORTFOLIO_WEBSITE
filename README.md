# PORTFOLIO_WEBSITE
This is my personal portfolio showcasing my work in data engineering, data science, and analytics. Built with Astro, React, and Tailwind CSS v4, featuring modern animations and interactive components.

## Features

- Theme-aware dark/light mode with localStorage persistence
- Fluid animated background (LiquidEther) using Three.js WebGL
- Interactive navigation bar with particle effects (GooeyNav)
- Animated gradient role text with rotation effects
- 3D tilted profile image with mouse tracking
- Glassmorphic animated border buttons (StarBorder)
- Fully responsive design for desktop and mobile
- Blog system with MDX support
- Contact form integration with Formspree
- SEO optimized with sitemap generation

## Tech Stack

- Astro v5.12.8
- React 18 with Astro integration
- Tailwind CSS v4
- Three.js for WebGL animations
- Framer Motion for React animations
- TypeScript
- Shadcn-inspired animated components

## Animated Components

- **LiquidEther**: WebGL fluid simulation background with theme-aware colors
- **StarBorder**: Animated gradient border buttons with glassmorphic styling
- **GooeyNav**: Navigation bar with particle animation effects
- **TiltedCard**: 3D tilt effect for profile images
- **RotatingText**: Cycling text with stagger animations
- **GradientText**: Animated gradient text effects

## Getting Started

All commands must be run from the `website/` subdirectory:

```bash
cd website
npm install
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment

The site is deployed to GitHub Pages automatically via GitHub Actions when changes are pushed to the main branch.
