# Calvin1127XD.github.io

Calvin Wong's academic website, published at [calvin1127xd.github.io](https://calvin1127xd.github.io/) using the existing GitHub Pages build from `main` at the repository root.

## Editing

- The shared Computational design lives in `_layouts/default.html`, `_includes/navigation.html`, `_includes/academic-footer.html`, and `assets/css/academic*.css`.
- Navigation entries are in `_data/navigation.yml`. Internal links use Jekyll's `relative_url` filter.
- The homepage is `index.md`. Complete research, teaching, GitHub Exposé, book, CV, support, and privacy content remains in `_pages/` under the original permalinks.
- `_pages/texmacgic.html` contains the product page. Its icon and screenshot are unchanged assets from the public [Mac App Store listing](https://apps.apple.com/us/app/texmacgic/id6804365513). Agent feature descriptions are based on that listing; no local app version is presented as a public release.
- The original 41-slide Agentic Coding presentation and all its assets remain in `talks/agentic-coding/`. The wrapper uses the shared layout; the deck itself is unchanged.
- Existing publications, honors, teaching feedback, legal prose, repository links, and CV files are retained. Projects and Publications compatibility routes remain available.

## Local build

Install a Ruby version compatible with the existing Gemfile, then run `bundle install` and `bundle exec jekyll build`. Use `bundle exec jekyll serve` for a local preview. GitHub Pages continues to use its existing publishing configuration; no new service, JavaScript framework, or custom build workflow is required.
