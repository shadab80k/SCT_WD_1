# Project README

## Project info

This project is a web application built with modern technologies.

## How can I edit this code?

There are several ways of editing your application.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
# SCT Web Design — Vite + React + shadcn-ui

Professional single-page marketing site built with Vite, React, TypeScript and shadcn-ui components.

**Quick summary**

- **Stack:** Vite, React, TypeScript, Tailwind CSS, shadcn-ui (Radix + utility components)
- **Features:** Responsive layout, theme toggle, reusable UI primitives, accessible components

**Repository layout (important paths)**

- `src/` — application source
- `src/components/` — page sections and reusable components
- `src/components/ui/` — low-level UI primitives (shadcn-inspired)
- `src/pages/` — top-level routes (`Index.tsx`, `NotFound.tsx`)
- `public/` — static assets

## Requirements

- Node.js (18+ recommended)
- npm or a compatible package manager

## Local setup

1. Clone the repository:

```bash
git clone <YOUR_GIT_URL>
cd SCT_WD_1-main
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

The site will be available at the address shown by Vite (usually `http://localhost:5173`).

## Available scripts

- **`npm run dev`**: Start the Vite dev server
- **`npm run build`**: Build a production bundle
- **`npm run build:dev`**: Build with development mode
- **`npm run preview`**: Preview the production build locally
- **`npm run lint`**: Run ESLint over the project

These scripts are defined in `package.json`.

## Build & deployment

1. Build the app:

```bash
npm run build
```

2. Preview locally (optional):

```bash
npm run preview
```

3. Deploy the generated `dist/` folder to your static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.). Vercel works with zero-config for Vite projects.

## Code structure & conventions

- Components are implemented in `src/components/` and split into page sections (e.g., `HeroSection`, `AboutSection`, `ServicesSection`) and UI primitives in `src/components/ui/`.
- Tailwind CSS is used for styling; configuration is in `tailwind.config.ts`.
- Routes are defined using React Router in the `src/pages/` folder.

## Contributing

- Create a feature branch from `main`.
- Open a clear PR with description and screenshots if applicable.
- Run `npm run lint` and ensure no ESLint errors before requesting review.

## Troubleshooting

- If the dev server fails to start, ensure Node.js and npm are up to date and reinstall dependencies (`rm -rf node_modules && npm install`).
- For Tailwind-related styling issues, check `tailwind.config.ts` and ensure PostCSS is installed.

## License & Contact

Specify the license for the project here (e.g., MIT) and provide a contact or maintainer email.

---

If you want, I can:

- add a short project description and logo to the top of the README
- add CI / GitHub Actions workflow for linting + builds
- create a `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md`

File updated: `README.md`
