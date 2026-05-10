# Ashish Prajapati Portfolio Website

Static portfolio website for GitHub Pages. No build step is required.

## Files

- `index.html` - semantic portfolio page and recruiter-facing content
- `styles.css` - responsive styling, layout, buttons, cards, and accessibility states
- `script.js` - mobile navigation, case study filters, and reveal interactions
- `assets/Ashish_Prajapati_Resume.pdf` - downloadable resume PDF
- `assets/resume/Ashish_Prajapati_Resume.tex` - Overleaf-compatible resume source
- `assets/favicon.svg` - site favicon
- `assets/og-preview.svg` - social preview image
- `.nojekyll` - helps GitHub Pages serve static assets directly
- `CNAME.example` - optional custom-domain example

## Live Site

The site is published with GitHub Pages:

https://itsmeashish2108.github.io/ashish-portfolio-site/

## Customization

- Edit contact links and page copy in `index.html`.
- Edit colors, spacing, and layout rules in `styles.css`.
- Edit menu behavior, filters, and reveal effects in `script.js`.
- Edit the resume source in `assets/resume/Ashish_Prajapati_Resume.tex`.
- Render the `.tex` file in Overleaf and replace `assets/Ashish_Prajapati_Resume.pdf` with the exported PDF.
- Add sanitized artifact samples under `assets/` and link them from the Documents & Artifacts section.

## Resume Build Note

GitHub Pages is a static host, so the browser cannot safely compile LaTeX into a PDF at click time without adding a large client-side LaTeX compiler or a backend service. The site therefore keeps the editable LaTeX source in the repo and serves a compiled PDF from `assets/Ashish_Prajapati_Resume.pdf` when visitors click "Download Resume".
