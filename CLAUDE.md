# Salvation Temple - Engineering Guide

## Project Overview
Church website for **Salvation Temple** (Храм Спасения) — an evangelical church in Riga, Latvia. Trilingual (RU/EN/LV), two themes (light cream / dark bordeaux).

**Domain**: `https://salvation-temple.lovable.app`

## Tech Stack
- **Framework**: React 18 + TypeScript + Vite 5
- **Styling**: Tailwind CSS 3.4 + custom design system in `src/index.css`
- **Routing**: React Router DOM 6 (6 pages + NotFound)
- **i18n**: Custom context-based system (`src/i18n/` JSON files + `LanguageContext.tsx`)
- **UI Components**: shadcn/ui (copy-paste, only `collapsible` and `tooltip` are used)
- **Fonts**: Montserrat (Google Fonts, loaded in index.css)
- **Path alias**: `@/` maps to `./src/`

## Commands
```bash
npm run dev          # Vite dev server on port 8080
npm run build        # Production build
npm run preview      # Preview production build on port 4173
npm run lint         # ESLint
npm run test         # Vitest
npx playwright test  # Visual regression tests (36 screenshots)
```

## Architecture

### Pages (`src/pages/`)
| Route | Page | Description |
|-------|------|-------------|
| `/` | Index.tsx | Home — hero, about, stats, ministries, events, contacts |
| `/training` | Training.tsx | Wholesome Life training program |
| `/history` | History.tsx | Church history timeline |
| `/donations` | Donations.tsx | Bank details + project cards |
| `/gallery` | Gallery.tsx | Photo masonry grid |
| `/testimonies` | Testimonies.tsx | Before/after testimonies |

### Section Components (`src/components/sections/`)
26 section components compose the pages. Each page wraps content in `<LanguageProvider>` + `<ChurchHeader>` + `<ChurchFooter>`.

### Shared Styles (`src/styles/bordeaux.ts`)
The dark bordeaux card pattern is used across 7 components. Import from `@/styles/bordeaux`:
- `bordeauxCardStyle` — CSS-in-JS background gradient
- `BordeauxOverlay` — texture overlay component (`src/components/ui/bordeaux-overlay.tsx`)
- `.bg-shine` CSS class — hover shine gradient overlay (replaces inline styles)

### i18n (`src/i18n/`)
- `ru.json`, `en.json`, `lv.json` — ~490 keys each
- `index.ts` — aggregates translations
- `LanguageContext.tsx` — React context provider (~40 lines)
- Translation key convention: `section.subsection.item` (e.g., `about.values.christ.title`)

## Design System

### Color Palette (CSS custom properties in `index.css`)
- **Light theme**: Warm cream background (`30 25% 97%`), chocolate foreground
- **Dark theme**: Bordeaux background (`350 35% 8%`), cream foreground
- **Extended palette**: cashmere, sunset, terracotta, amber, chocolate, coral, cream, burnt

### Gradient Text Classes
- `.text-gradient-sunset` / `.text-gradient-amber` / `.text-gradient-earth` / `.text-gradient-coral` / `.text-gradient-warm`
- Dark mode overrides exist for all gradient classes

### Card Patterns
- **Bordeaux cards**: Dark `hsl(350 35% 18%)` gradient + texture overlay. Used for premium content cards.
- **Glass cards**: `.glass`, `.glass-sunset`, `.glass-amber`, `.glass-coral`, `.glass-cashmere`
- **Warm cards**: `.card-warm`, `.card-glass`

### Spacing Convention
- Section padding: `py-12 md:py-16 lg:py-24`
- Container: `container mx-auto px-4 md:px-6 lg:px-8`

## Key Conventions
- All section components are named exports (`export const SectionName`)
- Page components are default exports wrapping `<LanguageProvider>`
- Gallery page uses `import.meta.glob('@/assets/gallery-*.jpg')` — new images auto-appear
- Other components import specific images via `@/assets/` path alias
- Bordeaux card styles imported from `@/styles/bordeaux`
- Route-level code splitting via `React.lazy()` + `<Suspense>`
- `ErrorBoundary` wraps the app root in `App.tsx`
- `loading="lazy"` on all images except hero slideshow and header logo

## Testing
- **Visual regression**: Playwright with 36 baselines (6 pages x 2 themes x 3 viewports)
- **Viewports**: Desktop 1280x720, iPad Mini 768x1024, iPhone 14 390x844
- **Theme toggle**: Click the ThemeToggle button (sun/moon icon in header)
- Run `npx playwright test` to verify no visual regressions
- Run `npx playwright test --update-snapshots` to update baselines after intentional changes
