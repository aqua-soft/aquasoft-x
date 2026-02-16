# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (localhost:3000)
npm run build      # Build static export to /out
npm run lint       # Run ESLint
```

No test runner is configured.

## Architecture

This is a static marketing site for AquaSoft, built with Next.js 16 (App Router, `output: "export"`), React 19, Tailwind CSS v4, and Framer Motion. It deploys to GitHub Pages via `.github/workflows/deploy.yml` on push to main.

### Pages

- `/` — Under construction page with interactive canvas particle network (`"use client"`)
- `/luckydraw` — Product page for LuckyDraw Microsoft Teams Bot

### Styling

Tailwind v4 is configured entirely in `src/app/globals.css` using `@theme` — there is no `tailwind.config` file. Theme colors are CSS custom properties (e.g. `--color-accent-purple`, `--color-ld-red`) usable as Tailwind classes (`bg-accent-purple`, `text-ld-red`).

Reusable CSS classes in globals.css: `.gradient-blob`, `.glass-card`, `.gradient-text`.

The LuckyDraw page defines `.ld-gradient-text` via inline `<style jsx global>`.

Light theme only. Color palette: accent purple/cyan/orange/green/pink for main site; red/gold for LuckyDraw branding.

### Key Patterns

- All page components use `"use client"` with Framer Motion animations
- Path alias: `@/*` maps to `src/*`
- Images are unoptimized (`next.config.ts`) as required for static export
- `src/_backup/` holds the previous main page components for potential future use
- `src/components/` has shared components (Navbar, Hero, Features, etc.) currently only used by backup/LuckyDraw pages

## Git

- Do not include "Co-Authored-By" lines in commit messages
