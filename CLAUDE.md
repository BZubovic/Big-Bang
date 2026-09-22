# Big Bang — master website design

## The design system of record

`Pages/Design system body.dc.html` (Prototype settings → "View design system") together with
the tokens in `styles.css` **is** this project's design system — it is the single source of
truth for colours, type, spacing, radii, buttons, inputs, badges, icons and shared
components. If an attached/bound design system, an external brand doc or an older screenshot
disagrees with it, **this page wins**; never "correct" a value to match an outside source.

Concretely: the **only dark blue is navy `#002D73`** (nav bars, filled CTA fill, dark chips)
— do not introduce `#171C51` or any other near-navy. Brand blue is `#0050A0`, turquoise
`#10DFBA` (always with navy text/icons). The **dark support/contact band** at the bottom of
every info page (Načini plaćanja, Načini dostave, Uvjeti kupnje, Kontakt) uses the footer
blue **`#00337A`**, not `#002D73`.

When a token or shared pattern changes, update the design system page in the same turn so it
stays accurate.

This project is the **master design for the Big Bang webshop** (bigbang.hr / bigbang.si).

It is a **single-page app shell**: `Big Bang Site.dc.html` is the one file you open. It
owns the header, the mega menu, the footer, the viewport tweak and a `page` state, and
switches between page bodies in `Pages/` — so the header never remounts and moving between
pages is instant. New pages (category / listing, cart, checkout, account, marketplace,
store locator, …) are added as body DCs in `Pages/` plus one branch in the shell.

Every page must reuse the shared components and the shared stylesheet below — do not
re-implement a header, footer, menu or product carousel inside a page.

## Layout rules

- Content column: **1440px**, inside a **1480px** max-width wrapper (20px side padding).
- Carousels **bleed** off the right edge: the track gets
  `padding-left: max(20px, calc((100% - 1480px) / 2 + 20px))` and no right bound;
  headings, arrows and the scroll progress bar stay inside the 1480 wrapper.
- Desktop product card: **269px** wide, 24px gap → 5 fit the content column.
  Mobile product card: **216px**, 12px gap, 12px side padding → 1.8 cards visible
  (ProductCarousel; other mobile card grids keep their own widths).
- Double-row widgets (TV promo, "Široka ponuda") are **477px** tall: portrait banner
  269×477, two card rows of 226.5px with a 24px gap.
- Section titles: 24px / 600 desktop, 17px / 600 mobile. Prices are 700, never 800.
- Mobile is previewed in a 412×915 phone frame; the `viewport` tweak switches it.

## Files

```
Big Bang Site.dc.html          THE APP — header, menu, footer, page switch, tweaks
Pages/Homepage body.dc.html    homepage content only (no header/footer)
Pages/Product body.dc.html     PDP content only
Pages/Cart body.dc.html        cart content only (seller-grouped boxes + summary)
cart-flyout.js                 global "Dodano u košaricu" flyout — window.BBCart.open(p)
eu-guarantee.js                GLOBAL EU guarantee module — window.BBEU: the harmonised
                               legal-guarantee notice modal, the full EU GARAN label modal
                               and nested-label data URIs. Official EU artwork is used
                               verbatim from images/eu/ — only the GARAN label's three
                               editable fields (years, brand, model) are filled in.
garan-data.js                  producer-supplied GARAN data (window.BB_GARAN.forProduct)
images/eu/                     official EU artwork: legal-guarantee-notice-hr.svg,
                               garan-label-colour.svg, garan-label-nested.svg
Components/pdp/PDPBody.jsx         PDP desktop body (imported React, not a DC)
Components/pdp/PDPBodyMobile.jsx   PDP mobile body + sticky CTA
Components/SiteHeader.dc.html      header bars
Components/SiteMenu.dc.html        hamburger / mega menu + mobile drawer
Components/SiteFooter.dc.html      footer
Components/ProductCarousel.dc.html product row (desktop + mobile)
Components/Breadcrumbs.dc.html     global breadcrumb
Components/CategoryTiles.dc.html   category tile grid (homepage, empty cart, empty wishlist)
Pages/Wishlist body.dc.html        wishlist content only
Pages/Payment methods body.dc.html "Načini plaćanja" — first "Usluge i uvjeti" footer page
Pages/Delivery methods body.dc.html "Načini dostave" — second "Usluge i uvjeti" footer page
Pages/Terms body.dc.html        "Uvjeti kupnje" — legal text, rendered from terms-data.js
Pages/Legal guarantee body.dc.html "Vaša prava na zakonsko jamstvo" — EU notice, how to
                               claim, EU GARAN label, three-guarantee comparison
terms-data.js                  Uvjeti kupnje legal text as data (chapters + blocks)
Components/InfoPageHead.dc.html    white intro block for every "Usluge i uvjeti" page
Components/InfoAnchorNav.dc.html   left column: the page's own section anchors (sticky)
Pages/Contact body.dc.html     "Kontakt" — support block, department cards, store locator,
                               company data (one column; opened from the header nav)
Components/StoreLocator.dc.html    GLOBAL "Prodajna mjesta" widget — Leaflet map + scrollable
                               store list (scrollbar on the left), "Prikaži trgovinu" link,
                               two-way select (list ⇄ pin)
Components/SupportBand.dc.html     GLOBAL dark support/contact band (#00337A) — eyebrow,
                               title, text, phone + e-mail pills; bottom of every info page
store-map.html                 plain-HTML Leaflet map the widget embeds in an iframe
                               (maps must NOT be .dc.html — script timing)
stores-data.js                 store list (window.BB_STORES) shared by both
changelog.js                   prototype change log — MUST be updated every working day
                               (see "Change log" below)
Pages/Design system body.dc.html  THE DESIGN SYSTEM PAGE — colours, type, spacing,
                                  radii, buttons, inputs, controls, badges, icons and
                                  the list of global components. Central reference:
                                  when a token or shared pattern changes, update it here
                                  too. Opened from Prototype settings → "View design system".
styles.css                     global stylesheet — all shared CSS lives here
catalog.js / catimg.js         category tree + artwork mapping (menu data)
images/                        all artwork
```

## Change log (changelog.js) — update it every time

`changelog.js` (`window.BB_CHANGELOG`) is shown in Prototype settings → "View logs".
**Add or extend an entry in the same turn as the work** — never leave it for later:

- One entry per piece of work (a new page, a new global component, a redesign of a
  section, a round of fixes), **not** one per prompt.
- Newest entry goes **first** in the array. Shape:
  `{ date: 'DD.MM.YYYY.', title: 'short Croatian title', changes: ['…', '…'] }`.
- `date` is the real current date; several entries may share a date.
- Further edits **on the same day to the same piece of work** extend that day's entry
  (add bullets / adjust the title) instead of creating a second one. A different day, a
  new page, or a different area of the site = a new entry.
- Bullets are Croatian, user-facing, one change each — what changed on the site, not how
  it is implemented.
- Also applies to global components, `styles.css` tokens and shell/navigation changes.

## styles.css

Every page and component links it from `<helmet>`:

```html
<link rel="stylesheet" href="styles.css">          <!-- from a page at the root -->
<link rel="stylesheet" href="../styles.css">       <!-- from Components/ -->
```

It carries brand tokens (`--bb-blue`, `--bb-navy`, `--bb-footer`, `--bb-red`,
`--bb-green`, `--bb-ink*`, `--bb-content`, …), the reset, the Inter base, and the
class-based behaviours that inline styles cannot express:

| class | what it does |
|---|---|
| `.nsb` | hides the scrollbar (all carousel tracks) |
| `.bbsb` | thin blue scrollbar (menu panels) |
| `.imz` | image zooms 1.03 on card hover |
| `body[data-cardhover="card"]` | whole card scales 1.02 instead of the image |
| `.bbcta` | **every filled CTA button**: navy `#002D73` fill, brand blue `#0050A0` on hover |
| `.arw` | nudges the arrow inside "Prikaži sve" links 2px right |

**Filled CTA buttons are always navy `#002D73` and brand blue `#0050A0` on hover** — add
`class="bbcta"` (`className="bbcta"` in JSX) to every solid primary button anywhere on the
site instead of hand-rolling the colours. Secondary buttons stay white with a `#0050A0`
border and text. Brand blue keeps its other jobs (header bars, links, badges, selected states).

**Turquoise `#10DFBA` always carries navy `#002D73` text/icons, never white** — applies to
badges (MARKETPLACE, NOVO), icon tiles and any other turquoise-filled label.

Layout, colour and type on individual elements stay **inline** — only shared or
state/descendant-based rules belong in styles.css.

## Components

Mount them with `<dc-import>`; the path prefix `Components/` is part of the name.

### SiteHeader
```html
<dc-import name="Components/SiteHeader" variant="desktop"
  menu-open="{{ menuOpen }}" on-toggle-menu="{{ toggleMenu }}"
  hint-size="100%,116px" style="position:sticky;top:0;z-index:300"></dc-import>
```
`variant`: `desktop` (white top bar + navy nav), `mobile` (blue bar + search + nav
strip), `mobile-bar` (55px condensed bar that slides in from the top once the mobile
page is scrolled past 120px — pass `scrolled="{{ mobScrolled }}"`).
Also takes `cart-count`.

### SiteMenu
```html
<dc-import name="Components/SiteMenu" variant="desktop"
  open="{{ menuOpen }}" on-close="{{ closeMenu }}" hint-size="100%,0px"></dc-import>
```
Owns the full category tree (`catalog.js`), the artwork mapping (`catimg.js`), image
prefetching and level navigation. `variant="mobile"` renders the sliding drawer.
The page only holds the `menuOpen` boolean.

### SiteFooter
```html
<dc-import name="Components/SiteFooter" variant="desktop" hint-size="100%,620px"></dc-import>
```
Owns its link columns, payment logos and (mobile) accordion state. The "Usluge i uvjeti"
column is wired: pass `on-page="{{ goInfo }}"` and each link calls it with its page key
(`pay`, `delivery`, `terms`, `privacy`, `cookies`, `ee`, `dsa`).

### InfoPageHead / InfoAnchorNav ("Usluge i uvjeti" pages)
```html
<dc-import name="Components/InfoPageHead" variant="desktop" heading="Načini plaćanja"
  intro="…" tabs="{{ tabs }}" active-tab="{{ tab }}" on-tab="{{ setTab }}"
  on-home="{{ onHome }}" hint-size="100%,260px"></dc-import>
<dc-import name="Components/InfoAnchorNav" variant="desktop" items="{{ navItems }}"
  active="{{ sec }}" on-select="{{ selectSec }}" hint-size="100%,340px"></dc-import>
```
Every footer page from that column uses both: **InfoPageHead** is the shared white intro
(breadcrumb + H1 + lead + optional rounded-rect tab switcher; only the text changes per
page), **InfoAnchorNav** is the 224px left column holding **that page's own section
anchors** (white card, no border, sticky; numbered rows, active row highlighted). Items are
`[{ id, num, label }]`, `active` is the current section id and `on-select` gets the id
(page then scrolls to `[data-sec="id"]`); `heading` renames the label (default "NA OVOJ
STRANICI"), `note` adds a small line under the list (e.g. "Zadnja izmjena: …").
`variant="mobile"` renders the same items as a horizontally scrolling chip row.
Navigation between the footer pages lives in the footer column itself — there is no
page-to-page side nav.

### Breadcrumbs
```html
<dc-import name="Components/Breadcrumbs" variant="desktop" items="{{ crumbs }}" hint-size="100%,18px" style="margin-bottom:12px"></dc-import>
```
The one breadcrumb used on every page that has one (category, search, cart, wishlist, PDP).
Pass `items: [{ label, onClick? }]` — last item is the current page (dark, 600); the rest are
brand-blue links. Desktop starts with "Big Bang", mobile with "Početna". Never hand-roll a
`<nav>` breadcrumb inside a page.

### ProductCarousel
```html
<dc-import name="Components/ProductCarousel" variant="desktop"
  title="UAU hot deals tjedna!" products="{{ hotList }}" hint-size="100%,560px"></dc-import>
```
Pass a plain product array; the component decorates it (pills, stars, cashback badge,
energy label, price split, monthly rate, promo code), renders the track, the arrows
and the scroll progress bar. `step` sets the arrow scroll distance.

Product shape:
```js
{ img, name, price: '519,00 €', old?: '659,00 €', disc?: '140,00 €', rate?: '43,25 € / 12 rata',
  anchor?: '659,00 €', anchorDate?: '10.09.2026.' }
```

## EU guarantee elements (Implementing Regulation (EU) 2025/1960, from 27.09.2026.)

Two official EU artworks live in `images/eu/` and are **exempt from this project's colour,
badge and type rules**. Use them verbatim: never recolour to navy/turquoise, never crop,
stretch, re-typeset or resize the QR code, never add elements. Only the EU GARAN label's
three editable fields may be filled: duration in years, producer brand/trademark, model
identifier (keep models under ~12 characters — the field is fixed width).

All display goes through `eu-guarantee.js` (`window.BBEU`):

- `BBEU.openNotice()` — harmonised legal-guarantee notice modal + the mandatory clickable
  link to `europa.eu/youreurope/jamstva_hr`. Triggered from a sentence informing the user of
  their rights ("Vaša prava na zakonsko jamstvo") in: footer "Usluge i uvjeti",
  the info page, below the listing grid, the PDP buy box, the cart summary.
- `BBEU.nestedURI(years)` / `BBEU.alt(years)` — nested GARAN label as an `<img>` src plus its
  accessible text. Digital only, never printed. Shown on the PDP buy box only — **not** on
  product cards in carousels or category grid/list, and not in the cart or cart flyout.
  Height 24–26px. Never on the product photo.
- `BBEU.openLabel(garan)` — full label + producer's guarantee statement + link.
- `BBEU.qualifies(p)` / `BB_GARAN.forProduct(p)` — the label appears only when the producer's
  durability guarantee is free, covers the whole product and runs over 2 years. That data is
  producer-supplied (`garan-data.js`) and is never derived from our own warranty offers.

In multi-product layouts the label belongs to the individual product, never to the banner.
Big Bang's own paid warranty services must be named and described so they cannot be confused
with the EU GARAN label.

## Anchored price

**Anchored price ("sidrena cijena") — legally required from 1.10.2026.** Every product
price display (cards, PDP, cart flyout, cross-sell) shows the regular price on the reference
day under the instalment line: `MPC na 10.09.2026. 1.099,00 €` — 11px, `#8B95A5`,
never struck through (strike-through stays reserved for the 30-day lowest price). Cards fall
back to `old || price` when no explicit `anchor` is given; `anchorDate` overrides the date.

## Navigation between pages

All navigation is state in the shell — no document reloads, so the header, the menu and
the mobile scroll position survive every switch.

- **Logo** → `onLogo` prop on SiteHeader → shell `goHome()`.
- **Product card** (ProductCarousel, or a body's own card markup) → `onOpenProduct` prop
  → shell `openProduct(p)`, which stores `{ img, name, price, old }` (price without ` €`)
  in state and switches `page` to `product`. The PDP bodies read it through their
  `product` prop and feed the gallery, title, breadcrumb, buy box and sticky bar,
  falling back to the Galaxy S24+ demo product when absent.
- **Cart**: header cart icon (any variant) → `onCart` → shell `goCart()`; the flyout's
  "Pregled košarice" reaches the same method through `window.BBCart.setCartHandler`.
- **Add to cart**: any add-to-cart button calls `window.BBCart.open({ img, name, price, old, qty })`
  — one shared flyout (summary, services/protection, cross-sell, 2 CTAs) for the whole site.
- Every page body gets `.pgin` (opacity fade in styles.css) on mount. Keep it
  **opacity-only** — an animated transform makes `.pgin` a containing block and breaks
  `position: fixed` children like the mobile sticky CTA.

## Adding a new page

1. New `Pages/Page name body.dc.html` — content only, **no header, menu or footer**.
2. `<helmet>`: Inter links + `<link rel="stylesheet" href="styles.css">` (bare paths —
   a child DC's helmet injects into the shell's document at the project root).
3. Props: `variant` (`desktop` / `mobile`) driving `isDesktop` / `isMobile` branches, plus
   `onOpenProduct` if it shows product cards. No `menuOpen` — that is the shell's.
4. In the shell, add `<sc-if value="{{ isYourPage }}">` branches (desktop + mobile) with the
   `<dc-import>` wrapped in `<div class="pgin">`, and a `page` value + navigation method.
