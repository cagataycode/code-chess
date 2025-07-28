# CODE Chess Club Website

Website for CODE Chess Club.

## What it does

- **6 sections**: Home, Contact, Rules, League Info, Fixtures, Leaderboard
- **Horizontal scrolling** between sections
- **Parallax background** with moving tiles
- **Mobile responsive** - works on phones too
- **Chess themed** design throughout

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see it.

## Tech stuff

- Next.js 15
- TypeScript
- Tailwind CSS 4
- React 19

## Project structure

```
src/app/
├── components/
│   ├── layout/     # Header, NavBar
│   ├── pages/      # Main page stuff
│   ├── sections/   # Content sections
│   └── ui/         # Card, ParallaxBackground
├── data/           # Content data
├── globals.css     # Styles
├── layout.tsx      # Root layout
└── page.tsx        # Main page
```

## Development

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check code
```
