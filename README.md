# Aikvora landing page

Landing page for a start-up that uses smart glasses in production environments, for example to spot errors in assembly processes or detect misplaced items. Built with Jekyll and hosted on GitHub Pages at https://felixkrones.github.io/ (custom domain to follow).

Aikvora is a working name and can be changed centrally in `_config.yml` (`title`) and in the header logo (`_includes/header.html`).

## Structure

- `_config.yml`: Site settings (title, contact email, languages)
- `_data/i18n/`: All text in English (`en.yml`), German (`de.yml`) and Polish (`pl.yml`)
- `_data/paths.yml`: Paths to the contact and legal pages per language
- `_layouts/`, `_includes/`: Page skeleton, header, footer, landing page sections and the contact form
- `index.html`, `de/`, `pl/`: One landing page per language (English at the root)
- `contact.html`, `de/kontakt.html`, `pl/kontakt.html`: Contact page with the booking form
- `legal/`: Imprint and privacy pages per language (placeholders, complete before going live)
- `assets/`: Stylesheet, JavaScript, videos and images

## Editing content

All visible text lives in `_data/i18n/en.yml`, `de.yml` and `pl.yml`. Change the text there; the page structure stays untouched. To add a new language, copy one of the files, add the language code to `languages` in `_config.yml`, create a folder like `de/` and add the paths in `_data/legal.yml`.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Deploy

Push to the `main` branch of `felixkrones/felixkrones.github.io`. GitHub Pages builds and publishes the site automatically.

## Open points before go-live

- Replace the placeholder details in the imprint and privacy pages
- Decide on the final name and domain (Strato), then set `url` in `_config.yml`
