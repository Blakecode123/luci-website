# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Static marketing site for **Anxi Gong Baths & Yoga** (sole practitioner: Lucinda). Pure HTML/CSS/JS — no build system, no package manager, no framework. Hosted as static files (Netlify-style: contact and private-event forms use `data-netlify="true"`).

## Local development

No install step. Open `index.html` directly, or serve the folder so relative `fetch`/iframe behavior matches production:

```
python -m http.server 8000
```

Then visit `http://localhost:8000`.

There is no lint, test, or build command — changes are validated by reloading in the browser.

## Architecture

### Page structure

Each `*.html` page is **self-contained** and duplicates the `<nav>` block and `<footer>` block inline. There is no templating, no partials, no SSI. When changing nav links, footer links, or the brand logo, the change must be applied to **every** page (`index.html`, `buy-tickets.html`, `private-events.html`, `about.html`, `testimonials.html`, `contact.html`). The `class="active"` on the menu link is what marks the current page.

All pages load the same two files:
- `styles.css` — single global stylesheet (`styles.css.bak.txt` is an old backup, ignore it)
- `app.js` — single global script

### app.js — feature-detection pattern

`app.js` is one IIFE. `init()` calls every feature unconditionally; each feature **detects its own DOM hooks** via `querySelector` and silently no-ops when the page doesn't include them. This is why the same script can be loaded on every page without per-page wiring. When adding a new behavior, follow the same pattern: gate on a `data-*` attribute or unique element id, return early if absent.

Page → feature mapping driven entirely by markup:
- `data-hero-slider` + `.hero-slide-layer` (`index.html`) → rotating hero background, 6s interval
- `data-nav-toggle` (all pages) → mobile menu open/close
- `.toggle-btn[data-price-type]` + `#modality-description` + `#eventTypeHidden` (`private-events.html`) → modality switcher

### Modality content (private-events.html)

The four modalities (`gong`, `yoga`, `singingbowls`, `breathwork`) and their descriptive copy live in the `MODALITY_CONTENT` object inside `app.js`. To add or edit a modality:
1. Add/update the entry in `MODALITY_CONTENT`.
2. Add/update the matching `<button class="toggle-btn" data-price-type="...">` in `private-events.html`.

The `data-price-type` value is also written into the hidden form input `#eventTypeHidden` so it submits with the booking request.

Note: `private-events.html` contains an empty `<div id="price-display">` — there is currently no JS that populates it. Treat it as a placeholder.

### Third-party embeds (do not refactor away)

- **Tickets** — `buy-tickets.html` embeds Humanitix via `<iframe data-collection="gong-bath-2026">` plus their `inline.js` widget script.
- **Mailing list** — `index.html` embeds a MailerLite form (form id `40394212`, action URL hardcoded). The success handler `ml_webform_success_40394212` and the `fetch(...)/takel` ping are part of MailerLite's expected boilerplate; keep them.
- **Forms** — `contact.html` and `private-events.html` use Netlify Forms (`data-netlify="true"` + hidden `form-name` input). Do not change these attributes unless migrating away from Netlify.

## Conventions

- Inline `style="..."` attributes are used liberally for one-off layout tweaks; class-based styling lives in `styles.css`. Both are accepted in this codebase.
- Every page ends with `<script>document.getElementById("year").textContent = new Date().getFullYear();</script>` to fill the footer copyright year.
- Image assets go in `assets/` (banners, logo) or `assets/uploads/` (user-supplied uploads).
