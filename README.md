# Jenan Y. AbuHasanein — Portfolio

> Just as the sea reflects the shifting skies, code is a reflection of our thoughts.

A bilingual (EN/AR) full-stack developer portfolio built with **Next.js 16**, featuring a terminal-first aesthetic, dual-audience project cards, and full RTL support for Arabic.


## Getting Started

```bash
# Install dependencies
pnpm install
# or
npm install

# Run dev server
npm run dev
# or
pnpm dev
```


## Project Structure

```
jenan-portfolio/
├── app/
│   ├── layout.jsx       # Root layout with metadata (SEO)
│   └── page.jsx         # Entry point → renders <Portfolio />
├── components/
│   └── Portfolio.jsx    # Main component (all sections + i18n)
├── public/              # Static assets (add favicon.ico here)
├── next.config.mjs
├── package.json
└── README.md
```


## Customization

All content lives in the `dict` object at the top of `components/Portfolio.jsx`:

| Key | What it controls |
|-----|-----------------|
| `heroGreeting` | Name in hero section |
| `heroQuote` | Personal philosophy quote |
| `heroTyped` | Typewriter terminal lines |
| `projects` | All project cards (both EN + AR) |
| `principles` | Engineering principles cards |

### Adding a Project

Add an entry to both `dict.en.projects` and `dict.ar.projects`:

```js
{
  id: "my-project",          // unique slug
  badge: "SAAS · LIVE",      // top badge label
  name: "My Project",        // display name
  tagline: "Short description",
  status: "shipped",         // "shipped" | "inprogress" | "capstone"
  plain: {
    summary: "...",
    motivation: "...",
    challenge: "...",
    outcome: "...",
  },
  tech: {
    summary: "...",
    motivation: "...",
    challenge: "...",
    architecture: "Step A → Step B → Step C",
    outcome: "...",
  },
  stack: ["Next.js", "TypeScript"],
  color: "#56CFE1",          // accent color for this card
  links: [
    { label: "linkLiveDemo", href: "https://...", primary: true },
    { label: "linkRepo", href: "https://github.com/...", primary: false },
  ],
}
```

### Available link labels

`linkLiveDemo` · `linkRepo` · `linkCaseStudy` · `linkLiveApp` · `linkDemoVideo` · `linkStaging`


## Deployment

### Vercel (recommended)

```bash
pnpm install -g vercel
vercel
```

### Manual Build

```bash
pnpm run build
pnpm start
```


## Features

- **Bilingual EN/AR** — full RTL layout when Arabic is active
- **Typewriter terminal** — animated hero with custom lines
- **Neofetch SVG** — updated with real info (traineeships, contact, stack)
- **Dual-audience project cards** — Plain English / Under the Hood toggle
- **6 projects** — Muraqib, Medki, Taskly, Rick & Morty Explorer, ShareSpace, LevelUp
- **Live links** — real URLs for Taskly, Rick & Morty, ShareSpace staging
- **Engineering principles** — Clean Architecture, SOLID, Scrum cards
- **Copy email** — clipboard button in contact section
- **Scroll-aware nav** — active section highlighting
- **Intersection observer animations** — fade-in on scroll
- **Responsive** — mobile-friendly grid breakpoints

---

Built with care Palestine. 🇵🇸
