# Ashish Prajapati Portfolio Website

Static portfolio website for GitHub Pages. No build step is required.

## Files

- `index.html` - main page
- `styles.css` - responsive styling
- `script.js` - metrics, project cards, filters, and animations
- `assets/Ashish_Prajapati_Resume.pdf` - placeholder resume file; replace it with the real resume PDF
- `.nojekyll` - helps GitHub Pages serve static assets directly
- `CNAME.example` - optional custom-domain example

## Publish on GitHub Pages

1. Create a new GitHub repository, for example `ashish-portfolio`.
2. Upload all files from this folder to the repository root.
3. Replace `assets/Ashish_Prajapati_Resume.pdf` with your real resume PDF using the same filename.
4. Go to repository `Settings` > `Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Select branch `main` and folder `/root`, then save.
7. Your site will be published at `https://<your-github-username>.github.io/ashish-portfolio/`.

## Before publishing publicly

Review any company-sensitive metrics before making the repository public. The PDF source suggested confirming whether to publish cost optimization, operational leakage numbers, CEO reporting, team size, and whether to mention Newjaisa directly.

## Customization

- Edit contact links in `index.html`.
- Edit metrics, projects, and skill groups in `script.js`.
- Edit colors and layout in `styles.css`.
- Add a profile photo by placing an image in `assets/` and replacing the AP profile orb in the hero card.
