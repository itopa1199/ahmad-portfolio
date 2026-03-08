# Ahmad Muneer — Portfolio

Personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Google Fonts (Bebas Neue, Instrument Serif, DM Sans)

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
npm start
```

### Deploy to Vercel (recommended)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import the repo — zero config needed, Vercel auto-detects Next.js
4. Hit Deploy ✓

## Customise

| File | What to change |
|------|---------------|
| `app/components/Hero.tsx` | Headline, GitHub link, tagline |
| `app/components/About.tsx` | Bio text, experience timeline |
| `app/components/Skills.tsx` | Tech stack grid |
| `app/components/Contact.tsx` | Contact links |
| `app/components/Footer.tsx` | Social links |
| `app/globals.css` | Colors, fonts, animations |
| `app/layout.tsx` | SEO metadata |

## Notes
- Swap `https://github.com/Ahmad-Muneer` with your actual GitHub profile URL
- The custom cursor hides on touch devices automatically via CSS
