# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Static site powered by Astro with Tailwind CSS. Erik Schwartz's professional presence as a strategic AI partner for founders and leaders. Clean, minimal design (Inter + Newsreader fonts, stone color palette).

## Development Commands

```bash
# Install dependencies
npm ci

# Start local development server
npx astro dev

# Build for production
npx astro build

# Preview production build
npx astro preview
```

## Project Architecture

### Core Structure
- **Astro Config**: `astro.config.mjs` - Site config, Tailwind plugin
- **Pages**: `src/pages/` - Astro page components (index, calendar)
- **Layouts**: `src/layouts/Layout.astro` - Shared layout with nav/footer
- **Styles**: `src/styles/global.css` - Tailwind imports and theme config
- **Static Assets**: `public/` - Favicon, images

### Key Pages
- **Landing page**: `src/pages/index.astro` - Main marketing page
- **Calendar**: `src/pages/calendar.astro` - Booking links (cal.com)

### Design System
- **Fonts**: Inter (sans), Newsreader (serif) via Google Fonts
- **Colors**: Stone palette (warm grays), blue accent (#2563eb)
- **Layout**: Max-width 3xl (768px), generous whitespace
- **Components**: Cards with rounded-xl borders, blockquote testimonials with left border

### Legacy Files (from MkDocs era, kept for reference)
- `docs/` - Old markdown content including blog posts
- `mkdocs.yml` - Old MkDocs configuration
- `overrides/` - Old theme overrides
- `Makefile` - Old build commands

## Deployment

- Automated via GitHub Actions on push to main
- Builds with Node 22, deploys to GitHub Pages
- Output directory: `dist/`
- Site URL: https://www.erikschwartz.net

## Content Management

All content is in Astro components (`src/pages/*.astro`). Edit the HTML/Tailwind directly. No markdown processing for the main pages.
