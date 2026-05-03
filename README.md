# Marlone Troy Dominguiano Portfolio

Personal portfolio built with Vite, React, TypeScript, shadcn/ui, and Tailwind CSS.

## Local Development

```sh
npm install
npm run dev
```

## Quality Checks

```sh
npm run lint
npm run test
npm run build
```

## Vercel Deployment

This project is ready for Vercel with the standard Vite settings:

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

The included `vercel.json` rewrites all app routes to `index.html` so React Router works on direct visits and page refreshes.
