# Animated Sky Portfolio

A 3D animated portfolio built with Next.js, React Three Fiber, DREI, GSAP, and Zustand.

> Based on [Mohit Virli's Portfolio](https://www.awwwards.com/sites/mohit-virlis-portfolio) (Awwwards Honorable Mention) — a revamped portfolio concept that showcases work experience and hobbies as a Frontend Engineer.

## Getting Started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
# -> http://localhost:3000 (or the next available port)

# production build
npm run build
npm run start

# lint
npm run lint
```

## Tech Stack

- Next.js 16 (Turbopack, App Router)
- React 19
- @react-three/fiber + @react-three/drei + three
- GSAP (@gsap/react)
- Zustand
- Tailwind CSS 4
- react-device-detect

## Project Structure

```
app/
├── constants/          # editable content (profile, work, projects, footer)
├── components/
│   ├── common/         # Preloader, ThemeSwitcher, ScrollHint, etc.
│   ├── hero/           # intro hero + TextWindow
│   ├── experience/     # 3D experience scene (Work, Projects, Timeline, GridTile)
│   ├── models/         # GLB models (Window, Cloud, Stars, Memory, Wanderer)
│   └── footer/         # 3D footer links
├── stores/             # zustand stores (theme, scroll, portal)
└── types/              # TS types
public/
├── *.glb               # 3D models (window, dalithe, wanderer)
├── *.ttf / *.woff      # fonts
└── icons/              # SVG icons
```

## Editing Content

All site content lives in `app/constants/` — no component code needed:

| File | What it controls |
| ---- | ---------------- |
| `profile.ts` | Name, title, intro text, social links |
| `work.ts` | Work experience / education entries (shown as timeline) |
| `projects.ts` | Side projects shown in the 3D carousel |
| `footer.ts` | Footer links (name, url, icon, hover text) |

Themes/colors are managed through `app/stores/themeStore.ts` and rendered via `ThemeSwitcher`.

3D models are loaded from `/public/*.glb` — replace the files to swap models.

## Deployment

Push to GitHub and enable GitHub Pages (or deploy to Vercel).

> Note: this repository is also used as a template. If you want to deploy your own custom domain, set `GH_PAGES_CUSTOM_DOMAIN` in the workflow and the build will generate `public/CNAME` automatically. Use `NEXT_PUBLIC_GA_ID` to enable Google Analytics tracking. Otherwise, leave the custom domain env unset and the repo will continue to work as a GitHub Pages site.