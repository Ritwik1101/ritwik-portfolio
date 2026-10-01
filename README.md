# Ritwik Sarade — Portfolio

Single-page portfolio built with React, Vite, Tailwind CSS, Framer Motion and Lucide.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run lint
```

## Updating content

- `src/config.js` — GitHub, LinkedIn, resume and email. Empty values are hidden automatically.
- `src/data/portfolio.js` — all copy: hero, about, experience, skills, technical stack and projects (including case studies).
- `public/og-image.png` — social share preview image.

To add a resume, put the PDF in `public/` and set `RESUME_URL` to its path, e.g. `'/Ritwik_Sarade_Resume.pdf'`.

Once the site has a domain, change `og:image` and `twitter:image` in `index.html` to absolute URLs (e.g. `https://your-domain/og-image.png`) so link previews work everywhere.
