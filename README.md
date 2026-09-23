# Garibook Homepage Recreation

A responsive React recreation of the Garibook homepage for the Endow Tech Frontend Intern Technical Assessment.

## Stack

- React + JavaScript
- Vite
- Tailwind CSS v4
- GSAP + ScrollTrigger
- pnpm

## Implemented Homepage Areas

- Responsive header and mobile navigation drawer
- Animated hero headline and app CTA
- Car rental and airport rental booking interactions
- Animated statistics counter
- Services tabs, Freedom, travel cards, app experience, Smart Driver, news, testimonials, blogs, download banner, footer, and floating controls

## GSAP Usage

- Header and hero entrance motion
- Reusable ScrollTrigger reveal system: content fades in and rises from below; image cards grow from a reduced scale
- Stats values count from zero when their section is entered
- Service-tab and news-carousel transitions

All scroll reveals reverse/reset after leaving the section so they can play again when scrolling back.

## Run Locally

    pnpm install
    pnpm dev

Open the local URL printed by Vite, normally `http://localhost:5173`.

## Production Build

    pnpm build
    pnpm preview

## Project Structure

    src/
    ├── assets/          # Local brand and service assets
    ├── components/
    │   ├── layout/      # Header, footer, and floating controls
    │   ├── sections/    # Homepage sections
    │   └── ui/          # Shared buttons, icons, and image wrapper
    ├── hooks/           # Shared GSAP reveal hook
    ├── lib/             # GSAP and ScrollTrigger registration
    ├── App.jsx          # Homepage composition
    ├── main.jsx         # React entry point
    └── index.css        # Tailwind import and theme tokens

## Assessment Video Outline

1. Show desktop and mobile layouts, booking tabs, service tabs, and news controls.
2. Show the section-based React component structure.
3. Explain the hero/typewriter, ScrollTrigger reveal, and stats counter animations.
4. Mention the responsive booking layout and reusable reveal hook as the main technical decisions.

## Notes

The project does not include `node_modules`, environment files, credentials, or API keys. Some reference imagery is served from Garibook’s public asset paths; sections without a supplied source use a clearly defined fallback image.
