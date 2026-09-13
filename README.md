# Ivyra Landing Page (Clone)

A pixel-close React + Tailwind recreation of the reference landing page, with a
premium animated testimonial carousel.

## Stack
- React 18 + Vite
- Tailwind CSS (custom `blush` / `ink` / `cream` tokens in `tailwind.config.js`)
- **Motion** (`motion/react`, formerly Framer Motion) for scroll reveals, hover/tap states, idle float, and orbit rotation
- **Embla Carousel** (`embla-carousel-react` + `embla-carousel-autoplay`) for the swipeable testimonials
- **Lucide React** for icons

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview
```

## Rebranding

Everything you're likely to want to change — headings, button labels, plan
prices, testimonial quotes, image URLs, footer links — lives in a single file:

```
src/data/content.js
```

Edit the values there; no component code needs to change. Section components
live in `src/components/` if you want to adjust layout or styling (colors and
type live in `tailwind.config.js` and `index.html`, which loads the
"General Sans" font from Fontshare — swap that link for your own brand font).

## Testimonials carousel behavior

- Drag-to-swipe on desktop, touch-swipe on mobile, plus prev/next arrows and
  dot indicators.
- Snaps center-aligned to one card at a time (`align: 'center'`, `containScroll: 'trimSnaps'`).
- Transitions run at ~350ms with an ease-out curve — fast enough to feel
  snappy, slow enough to read as it lands.
- The active card is full scale/opacity; neighboring cards are slightly
  scaled down and faded, so the focused testimonial feels lifted.
- Auto-advances every 5s and pauses on hover/drag.
- Respects `prefers-reduced-motion` globally (see `src/index.css`).

## Notes

- Images are placeholder Unsplash/randomuser URLs — swap them for your own
  brand photography and headshots in `src/data/content.js`.
- Font: swap the Fontshare link in `index.html` for a licensed/self-hosted
  version before shipping to production if required by your plan.
