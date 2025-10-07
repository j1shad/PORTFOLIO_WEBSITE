# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website showcasing data engineering, data science, and analytics work. Built with Astro, React, Shadcn and Tailwind CSS v4.

### Current Implementation Status

- Basic component structure in place (Hero, About, Projects, Contact, Footer, Header)
- Theme toggle system implemented with localStorage persistence
- React icons integration for skill badges
- Profile photo with animated decorative elements
- Contact form with client-side validation (needs email service integration)

### Planned Features

- Minimalist dark theme as default with professional light mode alternative
- Blog system with Astro content collections, MDX support, and RSS feed
- Email integration for contact form (Formspree/EmailJS)
- Project filtering by category (Data Engineering, Machine Learning, Analytics)
- Dynamic project detail pages with case studies
- Resume download functionality
- SEO optimization with meta tags and sitemap
- Image optimization with Astro Image component
- Back to top button

### Known Issues to Address

- Duplicate flex wrapper in About component (line 36-37)
- Generic placeholder content needs customization for data engineering focus
- Contact form needs actual email service integration
- Projects use placeholder images and generic content
- Theme colors need refinement for minimalist professional aesthetic
- Analytics component has placeholder GA_MEASUREMENT_ID

## Working Directory

All npm commands must be run from the `website/` subdirectory, not the repository root.

```bash
cd website
npm run dev
```

## Common Commands

```bash
# Development server (runs from website/)
npm run dev

# Build for production (output: website/dist/)
npm run build

# Preview production build locally
npm run preview
```

## Architecture

### Project Structure

- **Single-page application**: All sections (Hero, About, Projects, Contact) on one page (`src/pages/index.astro`)
- **Component hierarchy**:
  - `Layout.astro` - Base layout with theme system
  - `index.astro` - Main page composing all sections
  - Individual components in `src/components/` (Header, Hero, About, Projects, Contact, Footer, ThemeToggle, Analytics)

### Theme System

The dark/light theme is implemented with:
- CSS variables defined in `src/styles/global.css` for both `:root` and `.dark` selectors
- Inline script in `Layout.astro` that runs before page render to prevent flash
- localStorage persistence with key `'theme'`
- Fallback to system preference via `window.matchMedia('(prefers-color-scheme: dark)')`
- Theme toggle component that updates both DOM and localStorage

**Important**: The theme script must remain inline in `Layout.astro:26-45` to prevent FOUC (Flash of Unstyled Content).

### Styling System

- **Tailwind CSS v4** with `@tailwindcss/vite` plugin
- **Shadcn/ui** integration configured via `components.json`
- **CSS variables** for theming (see `src/styles/global.css`)
- **Path aliases** defined in `components.json`:
  - `@/components` → `src/components`
  - `@/lib` → `src/lib`
  - `@/ui` → `src/components/ui`

### Utility Functions

- `cn()` function in `src/lib/utils.ts` - Combines clsx and tailwind-merge for conditional className merging

### React Integration

- React components supported via `@astrojs/react` integration
- Used primarily for Shadcn/ui components
- Configuration in `astro.config.mjs:15`

## Branch Strategy & Deployment

- **dev branch**: Development and testing - push here first
- **main branch**: Production branch - automatically deploys to GitHub Pages via GitHub Actions
- **Workflow**: Always test changes on dev before merging to main
- **Deployment**: Triggered on push to main (see `.github/workflows/deploy_website.yaml`)
- **Build output**: `./dist/` directory is deployed to GitHub Pages

## Commit Guidelines

**Use `gh` CLI for all git operations, not standard git commands.**

### Commit Message Format

- Use conventional commits: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`, `chore:`
- **NO emojis** in commit messages
- **NO summaries or explanations** - commit message should be concise and complete on its own
- **NO Co-Authored-By or Generated with Claude Code trailers**

Examples:
```bash
# Good
gh repo sync
git add .
git commit -m "feat: add dark mode toggle to header"
git push

# Bad - has emoji and summary
git commit -m "feat: add dark mode toggle

Added a new toggle component that allows users to switch between light and dark themes.

Generated with Claude Code"
```

### What NOT to Commit

- Placeholder values (e.g., `GA_MEASUREMENT_ID` in Analytics.astro)
- API keys or sensitive credentials
- node_modules or build artifacts (already in .gitignore)

## Code Standards

### General Rules

- **NO emojis anywhere** in code, comments, documentation, or commit messages
- Maintain accessibility standards (semantic HTML, ARIA labels where needed)
- Optimize images before adding to `public/assets/`
- Use TypeScript for type safety where applicable

### Astro-Specific

- Keep inline scripts in `Layout.astro` for critical rendering (theme, etc.)
- Use Astro components (`.astro`) for static content
- Use React components only when interactivity is needed
- Import global CSS in both `Layout.astro` and `index.astro` (current pattern)

### Styling

- Use Tailwind utility classes with semantic color names from CSS variables
- Prefer CSS variables over hardcoded colors for theme consistency
- Mobile-first responsive design
- Maintain consistent spacing and typography scale

## Static Website Best Practices

### SEO

- Update meta tags in `Layout.astro` head section
- Use semantic HTML elements (`<header>`, `<main>`, `<section>`, `<footer>`)
- Ensure all images have alt text
- Keep page title descriptive and unique

### Performance

- Lazy load images where appropriate
- Minimize JavaScript bundle size
- Use Astro's build optimization (default)
- Test with `npm run preview` before deploying

### Accessibility

- Maintain keyboard navigation
- Ensure sufficient color contrast (check dark mode too)
- Use proper heading hierarchy (h1 → h2 → h3)
- Add ARIA labels for icon-only buttons

## MCP Server Usage

Available MCP servers to enhance development:

### Context7
Use for retrieving up-to-date documentation:
```
- Astro documentation: /withastro/astro
- React documentation: /facebook/react
- Tailwind CSS: /tailwindlabs/tailwindcss
```

### Playwright
Use for testing the site:
- Navigate to localhost during `npm run dev`
- Test responsive design at different viewport sizes
- Verify theme toggle functionality
- Test mobile menu interactions

### IDE Tools
- Use `getDiagnostics` to check for TypeScript/linting errors before committing
- Verify no errors in Astro, TypeScript, or CSS files

## GitHub Pages Configuration

If deploying to a repository that's not at the root of the GitHub Pages URL:
1. Uncomment and update `site` and `base` in `astro.config.mjs:12-13`
2. Update all asset paths to use the base path
3. Test locally with `npm run preview` to ensure paths work correctly
