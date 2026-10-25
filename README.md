# JIGNAN — PORTFOLIO

A cinematic portfolio for **Ambati Jignan** (Web Developer · Computer Science student).
Every section is a scene with smooth scroll animations.

## Run it

Requires Node.js 18+.

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/ (deploy to Vercel, Netlify, GitHub Pages…)
```

## Update your content

Everything lives in **`src/data/portfolio.ts`**:

| To change… | Edit |
| --- | --- |
| Name, intro, email, LinkedIn, GitHub | `profile` (add `email` to enable the "Let's Build" / Email buttons) |
| Projects (add `github: '…'` or more) | `projects` |
| Skills | `skillCategories`, `skillEvidence` |
| ▶ Play Intro slides | `introSlides` |
| Profile order | `viewerProfiles` |

## Add your photo

Your photo (`pic1.jpeg`) and its background-removed cutout (`pic.png`) are already included. To change them, replace both (same framing) and run:

```bash
npm run images
```

Until then, a placeholder silhouette is used.

## Stack

React 18 · TypeScript · Vite 6 · Tailwind CSS 4 · Framer Motion · Lenis
