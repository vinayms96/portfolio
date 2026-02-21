# Vinay MS — Portfolio

Personal portfolio website for Vinay MS, QA Engineer II.

**Live site:** https://vinayms96.github.io/portfolio/

## Tech Stack

- [Next.js 14](https://nextjs.org) (App Router, static export)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) — scroll animations
- [React Icons](https://react-icons.github.io/react-icons/) — skill badges
- Deployed via GitHub Actions → GitHub Pages

## Local Development

```bash
npm install
npm run dev
# Open http://localhost:3000/portfolio/
```

## Updating Content

All portfolio content lives in one file — **`lib/data.ts`**:

- `personalInfo` — name, bio, LinkedIn, email, location
- `skillCategories` — skills grouped by category
- `projects` — project cards with GitHub links
- `experiences` — work history timeline

Edit that file and the site updates automatically.

## Deployment

Pushing to `main` triggers the GitHub Actions workflow (`.github/workflows/deploy.yml`) which builds the static export and deploys to GitHub Pages.
