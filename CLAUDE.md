# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Local Development

No build process. Serve locally with:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`. All changes take effect on page reload.

## Architecture

Pure static site — HTML, CSS, and vanilla JS. No framework, no bundler, no package manager.

### Shared Nav/Footer via Component Injection

[components.js](components.js) is the only JavaScript file. It's an IIFE that runs on every page, injecting the shared nav, footer, and floating WhatsApp button into placeholder divs:

```html
<div id="nav-placeholder"></div>
<!-- page content -->
<div id="footer-placeholder"></div>
<script src="components.js"></script>
```

The nav, footer, and WhatsApp button are defined as template strings inside the IIFE. When adding new pages or nav links, edit the templates in `components.js` — not individual HTML files.

The IIFE guards against double execution with `window.__campusNavLoaded`. Active nav link highlighting is done by matching `location.pathname` against link `href`s.

### CSS Design System

All styles live in [styles.css](styles.css). Design tokens are CSS custom properties on `:root`:

| Variable | Value | Use |
|---|---|---|
| `--blue` | `#0d1b5e` | Primary brand color |
| `--yellow` | `#f0c040` | Accent / CTA color |
| `--bg` | `#f4f6fb` | Page background |
| `--radius` | `12px` | Border radius |
| `--shadow` | `0 4px 24px rgba(13,27,94,.10)` | Card shadows |

Key layout classes: `.container` (90% width, max 1180px), `.section` (80px vertical padding), `.card-grid`.

Button variants: `.btn.btn-primary` (yellow fill), `.btn.btn-outline` (blue outline), `.btn.btn-sm`.

Typography uses `clamp()` on headings for fluid responsiveness. Font: Inter via Google Fonts.

### SVG Logo

The logo is generated inline by `logoSVG()` in `components.js` — a neural-network-in-hexagon SVG with gradient fills. It's used in both nav and footer with unique gradient ID prefixes to avoid SVG ID collisions. The wordmark is "Campus" (white) + "To" (light blue) + "AI" (gold).

### Page Pattern

Every page has the same shell:
1. `<head>` — meta/OG tags, Schema.org JSON-LD, Google Fonts, `styles.css`, favicon
2. Nav placeholder
3. Hero with breadcrumb
4. Content sections using `.section` + `.container`
5. Footer placeholder
6. `<script src="components.js"></script>`

When creating a new page, copy an existing page's head and placeholder structure.

### Exceptions to the Page Pattern

`course-brochure.html` is a standalone print document — it does **not** follow the standard pattern:
- No `components.js`, no nav/footer placeholders
- All CSS is inlined in a `<style>` block (print-optimised, A4 pages)
- Has its own copy of `logoSVG()` with the slogan rendered as SVG `<text>` rather than an HTML span
- A "← Home" link and "Save as PDF" button are in a fixed `.print-bar` that is hidden on print

When editing the logo or slogan, update **both** `components.js` and `course-brochure.html`.

### Razorpay Payment

Enrollment payment goes to `https://pages.razorpay.com/campustoai-enrolment`. This URL appears in `enroll.html` (two buttons). Fee is ₹49,999 all-inclusive, GST included.

## Deployment

Hosted on GitHub Pages. The [CNAME](CNAME) file maps to `www.campustoai.com`. Pushing to the repository deploys automatically.