# Erik Schwartz - AI Whisperer Docs

This project uses [MkDocs](https://www.mkdocs.org/) with the [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) theme.

## Quick Start

1. **Install dependencies:**
   ```sh
   pip install mkdocs-material
   ```
2. **Serve locally:**
   ```sh
   make serve
   ```
   This will ensure `docs/includes/convertkit-form.html` is always copied to `overrides/includes/convertkit-form.html` before starting the local server.

   I couldn't figure out how to use the same convert kit file in both places. Good enough for now.
   Visit [http://localhost:8000](http://localhost:8000) to view the docs.

3. **Build the site (for CI or production):**
   ```sh
   make build
   ```
   This will copy the form and then build the static site into the `site/` directory.

4. **Deploy to GitHub Pages:**
   Deployment is automated via GitHub Actions on push to `main` or `master`.

## Makefile Targets
- `make copy-form`: Copies the ConvertKit form HTML to the overrides directory.
- `make serve`: Copies the form and runs the local MkDocs server.
- `make build`: Copies the form and builds the static site (used in CI).

## More Information
- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material for MkDocs Documentation](https://squidfunk.github.io/mkdocs-material/) 