# Big Bang Design System

## Company Overview

**Big Bang** is a major Croatian/Slovenian consumer electronics and home appliances e-commerce retailer. The brand operates across Croatia (HR) and Slovenia (SI), with a full-featured webshop covering product browsing, search, cart, checkout, seller marketplace, and user profiles.

The webshop is a **marketplace model** (similar to Mirakl-based platforms) with multiple third-party sellers listed alongside Big Bang's own inventory. Products include smartphones, laptops, TVs, kitchen appliances, and more.

**Source files provided:**
- Figma: `Big Bang Web.fig` — 31 pages, 1,344 frames covering the full webshop design system and all major flows

---

## CONTENT FUNDAMENTALS

### Language & Tone
- Copy is in **Croatian (HR)** and **Slovenian (SI)** — the two primary markets
- Tone is **direct, practical, and deal-focused** — no fluff
- Casing: **Sentence case** throughout (not title case), except for brand-specific labels
- No emoji used in UI copy or navigation
- Prices and savings are prominently featured ("Bang Cijena", "Dodatnih 20% uz kod")
- CTA copy is action-oriented: "Dodaj u košaricu" (Add to cart), "Kupi odmah" (Buy now)
- Error messages use plain language: "Obavezno" (Required)
- Feature labels (delivery, warranty) use short phrases: "Besplatna dostava" (Free delivery), "Besplatno vraćanje" (Free returns)

### Key Croatian UI Strings
| Croatian | Meaning |
|----------|---------|
| Dodaj u košaricu | Add to cart |
| Kupi odmah | Buy now |
| Besplatna dostava | Free shipping |
| Bang Cijena | "Bang Price" — special promo price |
| Akcije i promocije | Sales & promotions |
| Proizvodi | Products / Categories |
| Prodajna mjesta | Store locations |
| Prodavatelji | Sellers |
| Košarica | Cart |
| Popis želja | Wishlist |

---

## VISUAL FOUNDATIONS

### Colors
- **Primary Blue** `#0050A0` — main CTA buttons, links, interactive highlights
- **Dark Blue** `#002D73` — hover states on primary blue
- **Navy** `#171C51` — main navigation bar background
- **Mid Blue** `#2A307A` — secondary nav elements
- **Turquoise** `#10DFBA` — promo highlights, accent streaks
- **Orange Bang** `#F65F04` — "Bang Cijena" price labels, maximum urgency pricing
- **Orange** `#E07842` — secondary warm accent
- **Alert Red** `#DA0D00` — errors, out-of-stock
- **Success Green** `#1FB549` — in-stock, promo codes, confirmation
- **Page Background** `#F1F1F4` — light gray used for all page backgrounds
- **Card Background** `#FFFFFF`
- **Primary Text** `#101117` — near-black
- **Secondary Text** `#545F71` — subdued body, labels, borders

### Typography
- **Primary font**: Inter (all weights: Light 300, Regular 400, Medium 500, SemiBold 600, Bold 700, Black 900)
- **No display/serif** — entirely Inter-based system
- Heading hierarchy: H1 36px Bold → H2 24px SemiBold → H3 22px Bold → H4 18px SemiBold
- Body: 16px Regular, line-height 22px, letter-spacing -0.02em
- Small: 14px Regular; Caption: 12px; Micro: 10–11px
- Letter spacing consistently tight (-0.01em to -0.02em)
- ⚠️ **Font substitution**: Inter is available on Google Fonts. The Figma file also references Gotham Book, Silka SemiBold, Gilroy Bold in minor instances — these are substituted with Inter in this design system.

### Backgrounds & Layout
- All pages: `#F1F1F4` background (light grayish-white)
- Content width: **1920px** max, with **240px horizontal padding** on desktop (content lives in a 1440px column)
- Cards: white backgrounds on the gray page bg — creates gentle lift without heavy shadows
- No full-bleed illustrations or textures — clean, e-commerce utilitarian

### Cards
- Border-radius: **12px**
- Background: white
- Shadow: subtle `0 2px 8px rgba(0,0,0,0.10)`
- Hover: scale to 1.02, shadow deepens — `cubic-bezier(0,0,.5,1)` easing, 0.3s duration
- Product images sit in a square image well at top of card

### Buttons
- Shape: **pill** (border-radius 24px) — primary interaction style
- Height: 48px (regular), 36px (small)
- Primary: `#0050A0` fill, white text, 16px Bold
- Secondary: white fill, `#0050A0` border/text
- Outline: transparent, `#545F71` border
- Disabled: 40% opacity
- Hover: darker background (`#002D73`)
- Press: scale(0.98)

### Inputs
- Border-radius: **6px** (rectangular, not pill — distinct from buttons)
- Border: 1px solid `#545F71`
- Height: 48px
- Focus: border becomes `#0050A0`
- Placeholder: `#C7C7CD`
- Font: 16px Inter Regular

### Search Bar (Header)
- Pill shape: border-radius 22px
- White background on colored header
- Placeholder: italic gray text
- Search icon right-aligned inside pill

### Navigation / Header
- Two-tier header:
  1. **Top bar** (88px, white bg): Logo left, search center, icons right (wishlist, account, cart)
  2. **Nav bar** (44px, `#171C51` navy): Categories (hamburger), Promotions, B2B, Store locations, Sellers
- Sticky header uses gradient `#0050A0 → #2A307A`
- White icons and text throughout header/nav

### Animations
- Card hover: `transform: scale(1.02)`, `cubic-bezier(0,0,.5,1)`, `0.3s`
- Arrow/scroll: opacity 0→1, custom easing
- Carousel slides: smooth scroll, no bounce
- No decorative animations — all motion is functional/feedback

### Badges & Labels
- Pill-shaped with flat colors (no gradients)
- Discount: red pill `#DA0D00`
- Promo code: green strip `#1FB549`, left edge flush to card
- "Bang Cijena": orange `#F65F04` — signature price label
- Custom stickers: configurable color + text, max 3 per card
- Energy label: standard EU format

### Iconography
- See ICONOGRAPHY section below

### Borders & Shadows
- Default border: 1px solid `#545F71`
- Subtle border: 1px solid `#C7C7CD`
- Card shadow: `0 2px 8px rgba(0,0,0,0.10)`
- Dropdowns/modals: `0 8px 32px rgba(0,0,0,0.20)`
- No inner shadows used

### Corner Radii System
- `4px` — checkboxes, small tags
- `6px` — inputs, small cards
- `12px` — product cards, panels, image wells
- `22–24px` — pill buttons, search bar
- `50%` — avatar circles, toggle knobs

---

## ICONOGRAPHY

Big Bang uses **two icon libraries**:

### 1. HeroIcons (primary)
- Outline style, 24×24px stroke icons
- Used for navigation, actions, UI controls
- Available at: https://heroicons.com / CDN via unpkg
- Key icons: search, heart, shopping-cart, user, chevron-right, arrow-right, check-circle, information-circle, plus-circle, shield-check, location-marker, fire, library, cog, truck, plus, minus

### 2. Tabler Icons (supplementary)
- Stroke icons, consistent with HeroIcons weight
- Used in specific product/feature contexts

### Social Icons
- Custom SVGs for: Google, Apple, Facebook, Twitter/X, YouTube, WhatsApp, Instagram
- Stored in `/assets/icons/`

### Usage Rules
- Icons in nav/header: 18–20px, white color
- Icons in cards/UI: 24px, `#545F71` or `#101117`
- Icons never filled with brand colors (except social)
- No emoji in UI; unicode characters not used as icons

---

## FILE INDEX

```
/
├── README.md                     ← This file
├── SKILL.md                      ← Agent skill definition
├── colors_and_type.css           ← Full CSS variables + utility classes
├── assets/
│   ├── logo.svg                  ← Big Bang logo (dark version)
│   ├── logo-white.svg            ← Big Bang logo (white version for dark bg)
│   └── icons/
│       ├── search.svg
│       ├── heart.svg
│       ├── shopping-cart.svg
│       └── truck.svg
├── preview/
│   ├── colors-brand.html         ← Brand color swatches
│   ├── colors-neutral.html       ← Neutral + semantic colors
│   ├── typography.html           ← Type scale specimen
│   ├── buttons.html              ← Button variants
│   ├── inputs.html               ← Form input states
│   ├── controls.html             ← Checkbox, radio, toggle, slider
│   ├── badges.html               ← Labels, badges, price tags
│   ├── cards.html                ← Product card anatomy
│   └── spacing.html              ← Spacing & radius tokens
└── ui_kits/
    └── webshop/
        ├── README.md
        ├── index.html            ← Interactive webshop prototype
        ├── Header.jsx
        ├── ProductCard.jsx
        ├── Footer.jsx
        └── (more components)
```
