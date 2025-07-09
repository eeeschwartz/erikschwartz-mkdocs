# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a static site powered by MkDocs using the Material theme. The site serves as Erik Schwartz's professional presence focused on helping management teams unlock revenue potential through systematic AI implementation. Features include blog posts about AI and business strategy, and an interactive JavaScript-powered Revenue Growth Efficiency Assessment that identifies where administrative burden constrains management focus on revenue generation.

## Development Commands

### Local Development
```bash
# Start local development server (includes form copying)
make serve

# Copy ConvertKit form to overrides (standalone)
make copy-form
```

### Building
```bash
# Build for production/CI (includes form copying)
make build
```

### Package Management
```bash
# Install dependencies (choose one approach)
pip install -r requirements-doc.txt
# OR using pyproject.toml
pip install -e .
```

## Project Architecture

### Core Structure
- **MkDocs Configuration**: `mkdocs.yml` - Main site configuration with Material theme
- **Content**: `docs/` - All markdown content including blog posts and static pages
- **Templates**: `overrides/` - Custom MkDocs theme overrides and templates
- **Build System**: `Makefile` - Handles form copying and build commands

### Key Components

#### Blog System
- Blog posts in `docs/writing/posts/` with date-based naming (YYYY-MM-DD-title.md)
- Blog index at `docs/writing/index.md`
- Uses `mkdocs-blog-plugin` for blog functionality
- Posts are only enabled in CI environment (`enabled: !ENV CI`)

#### Assessment Tool
- **Revenue Growth Efficiency Assessment**: `docs/javascripts/assessment-data.js` - Contains 8 sequential questions from system prompt
- **Assessment Engine**: `docs/javascripts/assessment-engine.js` - Handles UI flow, progress tracking, and personalized report generation
- **Features**: Progress tracking, localStorage persistence, personalized insights, and lead capture integration
- ConvertKit integration for lead capture

#### Template System
- Custom blog post template: `overrides/blog-post.html`
- ConvertKit form integration: `overrides/includes/convertkit-form.html`
- Form must be copied from `docs/includes/` to `overrides/includes/` before building

#### Styling
- Custom CSS in `docs/stylesheets/extra.css`
- Material theme with custom color scheme (indigo primary/accent)
- Dark/light mode toggle configured

### Dependencies
- **Core**: `mkdocs-material` - Main theme and functionality
- **Plugins**: `mkdocs-blog-plugin`, `mkdocs-macros-plugin`
- **External**: ConvertKit for email capture, native JavaScript for assessment

## Content Management

### Blog Posts
- Use date-based naming: `YYYY-MM-DD-title.md`
- Place in `docs/writing/posts/`
- Include frontmatter for metadata
- Blog builds are CI-only (disabled in local development)

### Static Pages
- Main landing page: `docs/index.md`
- Other pages can be added directly to `docs/`

## Build Process

1. **Form Copying**: ConvertKit form HTML is copied from `docs/includes/` to `overrides/includes/`
2. **MkDocs Build**: Standard MkDocs build process with Material theme
3. **Deployment**: Automated via GitHub Actions on push to main branch

## Special Considerations

### ConvertKit Integration
- Form HTML exists in two locations due to MkDocs limitations
- Must run `make copy-form` or use `make serve`/`make build` to sync
- Form is included in blog post template automatically

### Revenue Growth Efficiency Assessment
- **Assessment Flow**: 8 sequential questions identifying where management teams get trapped in admin work vs. revenue generation
- **Question Types**: Multiple choice, text input, email capture, with optional revenue question
- **Features**: Progress tracking, personalized insights, localStorage persistence, revenue unlock potential calculation
- **Data Structure**: Questions defined in `assessment-data.js`, logic in `assessment-engine.js`
- **Value Proposition**: Helps companies discover trapped revenue potential when management teams focus on growth instead of administrative burden
- **Integration**: ConvertKit for lead capture, scheduling CTA for strategy sessions

## Testing and Validation

No formal test suite - validation is through:
- Local development server (`make serve`)
- Build validation (`make build`)
- Visual inspection of generated site