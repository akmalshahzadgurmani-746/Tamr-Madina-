# Tamr Madina — Premium Dates, Pakistan

A frontend-only, portfolio-style marketing site for a premium dates brand.
Built with React + Vite + TypeScript + Tailwind CSS. No backend, database,
auth, or payment logic — all interactive elements (Add to Cart, Newsletter,
wishlist, weight selection) are local UI state only.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

This runs a TypeScript project check and outputs a static site to `dist/`.

```bash
npm run preview
```

Serves the `dist/` build locally so you can sanity-check the production
bundle before deploying.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. In Vercel, choose **Add New… → Project** and import the repository.
3. Vercel auto-detects the Vite framework preset:
   - Build command: `npm run build`
   - Output directory: `dist`
4. No environment variables are required.
5. Click **Deploy**.

Alternatively, from the project folder with the Vercel CLI installed:

```bash
npm i -g vercel
vercel
```

## Project structure

```
src/
  components/   Reusable UI primitives (Navbar, Footer, ProductCard, icons, etc.)
  sections/     Page sections composed from components (Hero, BestSellers, etc.)
  data/         Typed content: categories, products, testimonials, gallery
  App.tsx       Assembles the single-page layout
  main.tsx      React entry point
  index.css     Tailwind layers + shared utility classes
```

## Notes on imagery

All visuals are hand-built inline SVG/vector placeholders in the brand's
olive, cream, beige and gold palette (see `src/components/PlaceholderImage.tsx`
and `Motif.tsx`) — there are no external image URLs, so nothing can ever
appear as a broken image. Swap in real photography later by replacing
`PlaceholderImage` usages with an `<img>`/`<picture>` of the same aspect
ratio and class names.
