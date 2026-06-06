# Velocity Garage 🏎️

> **Experience Automotive Excellence** — An ultra-premium luxury car collection website built with Next.js 15, React 19, and Tailwind CSS.

![Velocity Garage](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=for-the-badge&logo=tailwindcss)
![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker)

---

## ✨ Features

- **Ultra-premium dark design** inspired by Ferrari, Lamborghini, Porsche & Bugatti
- **Full-screen hero** with animated SVG car silhouette and headline reveal
- **Glassmorphism** — frosted-glass nav, cards, and overlays
- **Custom cursor** with magnetic ring effect
- **Animated counters** that trigger on scroll into view
- **Scroll-reveal system** — staggered entrance animations for every section
- **Marquee experience strip** — infinite scrolling ticker in gold
- **Featured car grid** — 2:1:1 asymmetric layout with hover effects
- **Brand partners grid** — 12 marques with hover gold-highlight
- **Statistics section** — large animated numbers with gold accent
- **Testimonials** — glassmorphism cards with author avatars
- **CTA section** — concentric ring decoration with location strip
- **Mobile-first responsive** — full breakpoint coverage
- **SEO-ready** — full OpenGraph, Twitter Card, and JSON-LD structured metadata
- **Docker ready** — multi-stage Dockerfile + Nginx reverse proxy

---

## 🗂️ Project Structure

```
velocity-garage/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout — fonts, metadata, viewport
│   │   ├── page.tsx            # Home page — composes all sections
│   │   └── globals.css         # Design system tokens, animations, utilities
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      # Fixed nav with scroll effect & mobile menu
│   │   │   └── Footer.tsx      # Four-column footer + bottom bar
│   │   │
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx         # Full-screen hero with SVG car
│   │   │   ├── ExperienceStrip.tsx     # Marquee gold ticker strip
│   │   │   ├── CollectionSection.tsx   # Asymmetric car card grid
│   │   │   ├── BrandsSection.tsx       # 12-brand partner grid
│   │   │   ├── StatsSection.tsx        # Animated stat counters
│   │   │   ├── TestimonialsSection.tsx # Client testimonials grid
│   │   │   └── CTASection.tsx          # Full-width CTA + locations
│   │   │
│   │   └── ui/
│   │       ├── CarCard.tsx     # Reusable car card with SVG silhouette
│   │       └── CustomCursor.tsx # Magnetic dot + ring cursor
│   │
│   ├── hooks/
│   │   ├── useScrollReveal.ts  # IntersectionObserver reveal hook
│   │   └── useCounter.ts       # Animated number counter hook
│   │
│   ├── lib/
│   │   ├── data.ts             # All static content — cars, brands, stats
│   │   └── utils.ts            # cn(), formatPrice(), SECTION_IDS
│   │
│   └── types/
│       └── index.ts            # Car, Brand, Testimonial, Stat interfaces
│
├── docker/
│   └── nginx.conf              # Nginx reverse proxy config
│
├── Dockerfile                  # Multi-stage production build
├── Dockerfile.dev              # Development with hot reload
├── docker-compose.yml          # Dev + prod + Nginx profiles
├── .dockerignore
├── .env.example
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+
- **npm** 10+ (or pnpm / yarn)
- **Docker** (optional, for containerized runs)

---

### Local Development

```bash
# 1. Clone the repo
git clone https://github.com/your-org/velocity-garage.git
cd velocity-garage

# 2. Install dependencies
npm install

# 3. Copy environment variables
cp .env.example .env.local

# 4. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — the page hot-reloads on save.

---

### Production Build

```bash
npm run build
npm run start
```

---

## 🐳 Docker

### Development (with hot reload)

```bash
docker compose --profile dev up --build
```

### Production

```bash
docker compose --profile prod up --build -d
```

This starts:
- **velocity-garage** — Next.js standalone server on port 3000
- **nginx** — reverse proxy on ports 80 / 443

> **TLS:** Place your `fullchain.pem` and `privkey.pem` inside `docker/certs/` before running production.

### Useful Docker commands

```bash
# View logs
docker logs -f velocity-garage

# Rebuild without cache
docker compose --profile prod build --no-cache

# Stop all containers
docker compose down
```

---

## 🎨 Design System

### Colors

| Token | Value | Usage |
|---|---|---|
| `--gold` | `#C9A84C` | Primary accent, CTAs, headings |
| `--gold-light` | `#E8C96A` | Hover states |
| `--gold-dim` | `#8A6E2F` | Subtle gold, gradients |
| `--void` | `#050505` | Primary background |
| `--deep` | `#0A0A0A` | Section alternating background |
| `--surface` | `#111111` | Card / footer backgrounds |
| `--text-primary` | `#F0EDE8` | Body text |
| `--text-secondary` | `#8A8680` | Secondary copy |
| `--text-muted` | `#4A4845` | Labels, captions |

### Typography

| Role | Font | Weights |
|---|---|---|
| Display / Headlines | Cormorant Garamond | 300, 400, 600, 700 (+ italic) |
| Body / UI | Barlow | 300, 400, 500, 600 |
| Labels / Caps | Barlow Condensed | 400, 500, 600 |

### Animations

| Name | Duration | Easing | Usage |
|---|---|---|---|
| `heroFadeUp` | 1s | ease | Hero label, sub, actions |
| `heroSlideUp` | 0.9s | cubic-bezier(0.16,1,0.3,1) | Hero headline lines |
| `heroFadeIn` | 1.5s | ease | Hero car visual |
| `marqueeScroll` | 20s | linear | Experience strip |
| `pulseGlow` | 6s | ease-in-out | Hero glow orbs |
| Scroll reveal | 0.8s | cubic-bezier(0.16,1,0.3,1) | All sections |
| Counter | 2.2s | cubic ease-out | Stats section |

---

## 📄 Pages Roadmap

| Page | Status | Route |
|---|---|---|
| Home | ✅ Complete | `/` |
| Collection | 🔜 Planned | `/collection` |
| Car Detail | 🔜 Planned | `/collection/[slug]` |
| Configurator | 🔜 Planned | `/configure/[slug]` |
| Brand Page | 🔜 Planned | `/brands/[brand]` |
| About | 🔜 Planned | `/about` |
| Contact | 🔜 Planned | `/contact` |

---

## 🧩 Adding a New Car

Edit `src/lib/data.ts` — add an entry to `FEATURED_CARS`:

```ts
{
  id: 'unique-id',
  name: 'Car Name',
  brand: 'Brand',
  model: 'Model',
  year: 2024,
  price: 500000,           // null for POA
  priceDisplay: 'From €500,000',
  specs: {
    power: '800 CV',
    acceleration: '2.8s 0–100',
    topSpeed: '350 km/h',
    engine: '4.0L V8 TT',
    transmission: '8-speed DCT',
  },
  badge: { text: 'Available Now', variant: 'available' },
  description: 'Short description...',
  isFeatured: false,
  accentColor: '#C9A84C',  // hex color for tinting
}
```

---

## 🔧 Scripts Reference

| Command | Description |
|---|---|
| `npm run dev` | Start Next.js dev server (http://localhost:3000) |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm run type-check` | TypeScript type check (no emit) |

---

## 📦 Key Dependencies

| Package | Version | Purpose |
|---|---|---|
| `next` | 15.0.0 | App Router, SSR, Image optimization |
| `react` | 19.0.0 | UI rendering |
| `framer-motion` | ^11.3.0 | Advanced animations (ready to use) |
| `lucide-react` | ^0.383.0 | SVG icon set |
| `tailwindcss` | ^3.4.7 | Utility CSS |
| `clsx` + `tailwind-merge` | latest | Conditional class merging |

---

## 📝 License

MIT © 2026 Velocity Garage S.r.l.

---

<div align="center">
  <strong>Velocity Garage</strong> — Where Engineering Meets Desire
  <br />
  <em>Built with obsessive attention to detail</em>
</div>
