# Pavan Sandeep — Animated Portfolio

A modern, highly animated personal portfolio for **Nidubrolu Pavan Sandeep** — Frontend Developer, UI/UX Designer, GenAI & Prompt Engineer.

Built with **React + TypeScript + Vite**, animated with **Framer Motion**, and styled with **Tailwind CSS**.

## ✨ Features

- **Animated hero** with word-by-word title reveal and rotating role titles
- **Custom dual-layer cursor** (auto-disabled on touch devices)
- **Animated ambient background** — drifting gradient blobs, faint grid, cursor-following glow
- **Scroll progress bar** and scroll-spy navbar with an animated active pill
- **3D tilt cards** with a moving sheen on skills, projects & education
- **Magnetic buttons** that follow the cursor
- **Scroll-reveal animations** on every section
- **Animated timeline** for work experience
- Fully **responsive** + honours `prefers-reduced-motion`

## 🧱 Tech Stack

| Area        | Tech                                            |
| ----------- | ----------------------------------------------- |
| Framework   | React 18, TypeScript                            |
| Build tool  | Vite 5                                          |
| Animation   | Framer Motion                                   |
| Styling     | Tailwind CSS                                    |
| Icons       | react-icons                                     |

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/        # Navbar, Footer
│   ├── sections/      # Hero, About, Skills, Experience, Projects, Education, Contact
│   └── ui/            # Reusable animated primitives (AnimatedText, TiltCard, etc.)
├── data/
│   └── portfolio.ts   # All résumé content (single source of truth)
├── hooks/             # useMousePosition, useActiveSection
├── types/             # Shared TypeScript interfaces
├── App.tsx            # Composition root
├── main.tsx           # Entry point
└── index.css          # Tailwind layers + global styles
```

> **Tip:** all personal content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts).
> Edit that one file to update text, skills, experience, projects or education — the UI updates automatically.

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start the dev server (http://localhost:5173)
npm run dev

# type-check + production build
npm run build

# preview the production build locally
npm run preview
```

## 📦 Deployment

The app is a static site — deploy the `dist/` folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

```bash
npm run build   # outputs to dist/
```

---

Designed & built with ❤️ using React, TypeScript & Framer Motion.
