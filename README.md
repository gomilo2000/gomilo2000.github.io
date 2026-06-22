# Goran Milosevic — Portfolio

A personal portfolio site built with **React + TypeScript + Vite**.

## Run locally

Requires [Node.js](https://nodejs.org/) 18+.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default http://localhost:5173).

## Other commands

```bash
npm run build     # type-check + production build into /dist
npm run preview   # preview the production build locally
```

## Project structure

```
portfolio-react/
├─ index.html              # Vite entry HTML
├─ public/
│  ├─ goran.jpg            # profile photo (served at /goran.jpg)
│  └─ Goran_Milosevic_CV.pdf
└─ src/
   ├─ main.tsx             # React entry point
   ├─ App.tsx              # page shell + section composition
   ├─ index.css            # global resets, keyframes, hover/focus states
   ├─ theme.tsx            # ACCENT colour + shared icons
   └─ components/
      ├─ Nav.tsx
      ├─ Hero.tsx          # headline + tech stack
      ├─ PhoneScroller.tsx # infinite phone belt (placeholder screens)
      ├─ About.tsx
      ├─ Projects.tsx      # "under construction" panel
      ├─ Skills.tsx
      ├─ Contact.tsx       # contact form (opens mail client on submit)
      └─ Footer.tsx
```

## Customising

- **Accent colour:** change `ACCENT` in `src/theme.tsx`. It is exposed as the
  CSS variable `--accent` and used everywhere (including hover states).
- **Project previews:** `PhoneScroller.tsx` renders empty placeholder phones.
  When real designs are ready, drop their screenshots into the phone screens —
  this is also where the planned interactive carousel will live.
- **Contact form:** `Contact.tsx` currently opens the visitor's mail client via
  `mailto:`. Swap `onSubmit` for a real backend / form service when you want.

Styling is done with inline style objects (no CSS framework) so each component
is self-contained and easy to tweak.
