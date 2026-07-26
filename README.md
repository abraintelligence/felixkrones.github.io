# Aikvora landing page

Landing page for a start-up that uses smart glasses in production environments, for example to spot errors in assembly processes or detect misplaced items. Built with Jekyll and hosted on GitHub Pages at https://felixkrones.github.io/ (custom domain to follow).

Aikvora is a working name; see "Changing the company name or contact email" below for every place it appears.

## Structure

**Configuration**

- `_config.yml`: Site settings (title, url, contact email, languages)
- `Gemfile`: Ruby gems for local builds; uses the `github-pages` gem so local builds match what GitHub produces
- `.gitignore`: Keeps build output (`_site/`, caches) and system files out of the repository

**Content (all visible text)**

- `_data/i18n/en.yml`, `de.yml`, `pl.yml`: All text of the site, one file per language
- `_data/paths.yml`: Paths to the contact and legal pages per language, used by header and footer

**Templates**

- `_layouts/default.html`: Page skeleton (head, header, footer) used by every page
- `_layouts/page.html`: Simple text layout for the legal pages, builds on `default.html`
- `_includes/header.html`: Logo, navigation, language switcher and contact button
- `_includes/footer.html`: Copyright line plus links to imprint and privacy
- `_includes/landing.html`: The landing page sections (hero, demo videos, how it works, use cases, closing call to action)
- `_includes/contact-form.html`: The booking form used on the contact pages

**Pages**

- `index.html`, `de/index.html`, `pl/index.html`: One landing page per language (English at the root)
- `contact.html`, `de/kontakt.html`, `pl/kontakt.html`: Contact page with the booking form
- `legal/imprint-*.md`, `legal/privacy-*.md`: Imprint and privacy pages per language (placeholders, complete before going live)
- `404.html`: Shown when a visitor opens a page that does not exist

**Assets**

- `assets/css/style.css`: The single stylesheet for the whole site
- `assets/js/main.js`: Small script that shows the success note after the contact form was sent
- `assets/videos/`: The three compressed demo videos
- `assets/img/`: Favicon and the poster images shown before a video plays

## Editing content

All visible text lives in `_data/i18n/en.yml`, `de.yml` and `pl.yml`. Change the text there; the page structure stays untouched. To add a new language, copy one of the files, add the language code to `languages` in `_config.yml`, create a folder like `de/` and add the paths in `_data/legal.yml`.

## Changing the company name or contact email

Company name (currently Aikvora):

- `_config.yml` → `title`: Used in the browser tab and the footer copyright
- `_includes/header.html` → the wordmark text `aikvora` next to the logo
- `_data/i18n/en.yml`, `de.yml`, `pl.yml` → the name appears once in `hero.subtitle` in each file
- `legal/imprint-en.md`, `-de.md`, `-pl.md` → the real company name goes into the placeholders
- `README.md` → title and first paragraph

Contact email (currently info@felixkrones.de):

- `_config.yml` → `contact_email`: The only place. It feeds the contact form (FormSubmit address), the note under the form and the email links in the imprint pages.
- After changing it, activate the contact form again: send a test message and click the confirmation link FormSubmit sends to the new address.

## Contact form

The form posts to [FormSubmit](https://formsubmit.co/), a free service that forwards each submission as an email to `contact_email`. No account is needed. One-time activation: after the first submission, FormSubmit sends a confirmation email to that address; click the link once and all further messages arrive directly.

## Run locally

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000.

## Deploy

Push to the `main` branch of `felixkrones/felixkrones.github.io`. GitHub Pages builds and publishes the site automatically.

## Open points before go-live

- Replace the placeholder details in the imprint pages
- Activate the contact form once (see "Contact form" above)
- Decide on the final name and domain (Strato), then set `url` in `_config.yml`
