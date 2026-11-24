# Flip Deal — Deals Worth Flipping For

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-orange.svg)](LICENSE)
[![Status: Production Ready](https://img.shields.io/badge/Status-Active-brightgreen.svg)]()
[![Pure Vanilla](https://img.shields.io/badge/Tech-HTML5%20%7C%20CSS3%20%7C%20Vanilla%20JS-F07A22.svg)]()
[![Responsive](https://img.shields.io/badge/Design-Mobile--First%20%26%20Fluid-black.svg)]()

**A sleek, culinary mystery and restaurant flash-deals platform crafted with modern web standards, tactile animations, and an editorial design aesthetic.**

[Live Demo](#getting-started) • [Explore Pages](#pages-overview) • [Key Features](#core-features) • [Design System](#design-system) • [Architecture](#project-architecture)

</div>

---

## Overview

**Flip Deal** transforms dining out into an exciting daily discovery. Built specifically for the vibrant culinary landscape of **Riyadh, Saudi Arabia** (headquartered in Al Olaya), Flip Deal connects hungry food enthusiasts with curated restaurants, specialty coffee houses, and luxury grill rooms offering limited-quantity flash deals and daily mystery discounts up to **70% off**.

Unlike bloated discount aggregators, Flip Deal delivers an elevated, editorial-grade digital experience combining:
- **Interactive 3D isometric canvas art** that reacts dynamically to cursor motion.
- **Fluid SVG gooey search micro-interactions** with instantaneous keyboard shortcuts (`/`).
- **Interactive day-and-night storefront toggling** celebrating golden-hour dining.
- **Accessible, modal-driven deal redemption workflows** backed by animated toast notifications and persistent user preferences.
- **Zero heavy runtime dependencies**: 100% hand-crafted semantic HTML5, modern CSS3 variables/grid/flexbox, and modern ES6+ JavaScript.

---

## Pages Overview

| Page | File | Purpose |
| :--- | :--- | :--- |
| **Discover** | `index.html` | Hero mystery deal reveal, 3D animated canvas, live deals counter, cuisine quick-filters, and Al Olaya storefront showcase. |
| **Deals Catalog** | `deals.html` | Comprehensive filterable directory sorted by distance, discounts, ratings, and closing times. |
| **Flip Deal Premium** | `premium.html` | VIP membership landing page featuring 3x reward multipliers, early daily mystery access, and interactive pricing switchers. |
| **Partner Portal** | `partners.html` | Merchant acquisition page showcasing transparent 20% flat commission, weekly payouts, and partner signup form. |
| **Help Center** | `help.html` | Filterable FAQ knowledge base covering redemptions, vouchers, subscriptions, and merchant queries. |
| **Legal & Privacy** | `legal.html` | Plain-language terms of service, customer privacy protections, and merchant partner guidelines. |

---

## Core Features

### 1. Today's Mystery Deal
- Every day at dawn, a secret premier restaurant drop is featured with discounts reaching up to 70% off.
- Engaging reveal trigger with smooth entrance animations and contextual restaurant details.

### 2. 3D Isometric Canvas Scene
- Lightweight, zero-dependency HTML5 `<canvas>` rendering engine (`site.js` -> `initCubes`).
- Generates a dynamic matrix of stylized 3D isometric prisms that respond to user mouse coordinates with natural wave oscillations and subtle depth shifts.

### 3. Fluid Gooey Search Bar
- Powered by native SVG matrix filters (`feGaussianBlur` + `feColorMatrix` color thresholds).
- Supports instantaneous activation via `/` keyboard shortcut, clear button, and real-time live search query filtering across restaurant names, dishes, and cuisines.

### 4. Interactive Quick View Modal & Claim Workflow
- Clicking any deal card mounts an accessible native `<dialog>` modal without reloading the page.
- Displays deal expiration countdown, location distance, dine-in vs pickup conditions, and an instant redemption flow.
- Triggers non-intrusive bottom-screen toast notifications upon claim.

### 5. Al Olaya Atmospheric Storefront Switcher
- Highlights Flip Deal's physical flagship presence on King Fahd Road in Al Olaya, Riyadh.
- Interactive day-to-evening toggle smoothly transitions between golden-hour daylight and ambient evening illumination (`storefront-day-fd.webp` / `storefront-night-fd.webp`).

### 6. Premium Billing Interval Toggle
- Interactive monthly (49 SAR/mo) vs annual (399 SAR/yr) switch with real-time price updates and visual savings highlights.

### 7. Mobile Bottom Switcher & Responsive Ergonomics
- Adaptive navigation tailored for touch ergonomics on mobile displays with persistent bottom quick-action switcher.

---

## Design System

Flip Deal pairs a warm, sunlit desert palette with high-contrast typography and subtle textural grain.

### Color Palette
- **Warm Cream** (`#FBF2E7` / `#FFF9F2`): Grounding ambient substrate that reduces eye strain.
- **Deep Ink** (`#191713`): High-legibility editorial headings and crisp vector geometry.
- **Warm Charcoal** (`#565149` / `#6C6458`): Secondary metadata, fine print, and timestamps.
- **Sun Orange** (`#F07A22`): Vibrant primary brand accent representing appetite, vitality, and action.
- **Deep Sun** (`#BF5A12`): Hover and focus states ensuring WCAG AA contrast compliance.

### Typography
- **Primary Body & UI**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Weights: 400, 500, 600, 700, 800)
- **Editorial Accent**: [Sentient](https://www.fontshare.com/fonts/sentient) (Weights: 400, 500, 700)

---

## Project Architecture

```
flip-deal/
├── assets/
│   ├── grain.png                  # Subtle atmospheric noise texture
│   ├── storefront-day-fd.webp     # Al Olaya flagship storefront (Daylight)
│   └── storefront-night-fd.webp   # Al Olaya flagship storefront (Evening)
├── index.html                     # Main discovery & mystery deal portal
├── deals.html                     # Full filterable deals directory
├── premium.html                   # Flip Deal Premium VIP membership page
├── partners.html                  # Merchant acquisition & partner onboarding
├── help.html                      # Interactive FAQ & Help Center
├── legal.html                     # Privacy policy & terms of service
├── styles.css                     # Complete design system & responsive styling
├── site.js                        # Client-side reactivity, 3D engine & UX logic
├── .gitignore                     # Git ignore rules for clean repo hygiene
└── README.md                      # Comprehensive project documentation
```

---

## Getting Started

Flip Deal is built purely on native web standards with zero dependencies or complex build pipelines. You can run it instantly in any modern web browser.

### Option 1: Direct File Launch
Simply double-click `index.html` or open it with your browser of choice:
```bash
# Windows
start index.html

# macOS
open index.html

# Linux
xdg-open index.html
```

### Option 2: Local HTTP Server (Recommended)
Using Python's built-in server:
```bash
# Python 3
python -m http.server 8000
```
Or using Node.js `npx serve`:
```bash
npx serve .
```
Then navigate to `http://localhost:8000` in your browser.

---

## Keyboard Shortcuts

| Shortcut | Action |
| :---: | :--- |
| <kbd>/</kbd> | Open and focus global search bar |
| <kbd>Esc</kbd> | Close deal quick view modal or dismiss search |

---

## Web Interface & Accessibility Guidelines

- **Semantic HTML**: Fully built using `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks.
- **Accessible Controls**: Standard `aria-expanded`, `aria-pressed`, `aria-label`, and `role` attributes across all interactive triggers.
- **Smooth Focus States**: High-visibility focus indicators designed for full keyboard navigability.
- **Performance Optimized**: Sub-second initial load, lazy-loaded images, WebP image formats, and hardware-accelerated CSS transforms.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

<div align="center">
Crafted with passion by <a href="https://github.com/harshvishwakarma0"><strong>Harsh Vishwakarma</strong></a>
</div>
