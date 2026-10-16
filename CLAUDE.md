# Big Bang — master website design

## The design system of record

`Pages/Design-system-body.dc.html` (Prototype settings → "View design system") together with
the tokens in `styles.css` **is** this project's design system — it is the single source of
truth for colours, type, spacing, radii, buttons, inputs, badges, icons and shared
components. If an attached/bound design system, an external brand doc or an older screenshot
disagrees with it, **this page wins**; never "correct" a value to match an outside source.

Concretely: the **only dark blue is navy `#002D73`** (nav bars, filled CTA fill, dark chips)
— do not introduce `#171C51` or any other near-navy. Brand blue is `#0050A0`, turquoise
`#10DFBA` (always with navy text/icons). The **dark support/contact band** at the bottom of
every info page (Načini plaćanja, Načini dostave, Uvjeti kupnje, Kontakt) uses the footer
blue **`#00337A`**, not `#002D73`.

**Bento boxes and cards never have a shadow or a border — not even on hover.** They separate
from the page by fill only (white on `#F1F1F4`, `#F7F8FA` on white); hover may only scale/lift
or recolour text. Shadows are reserved for floating layers (dropdowns, modals, flyouts).

When a token or shared pattern changes, update the design system page in the same turn so it
stays accurate.

This project is the **master design for the Big Bang webshop** (bigbang.hr / bigbang.si).

It is a **single-page app shell**: `Main.dc.html` is the one file you open. It
owns the header, the mega menu, the footer, the viewport tweak and a `page` state, and
switches between page bodies in `Pages/` — so the header never remounts and moving between
pages is instant. New pages (category / listing, cart, checkout, account, marketplace,
store locator, …) are added as body DCs in `Pages/` plus one branch in the shell.

Every page must reuse the shared components and the shared stylesheet below — do not
re-implement a header, footer, menu or product carousel inside a page.

## Canvas setup (since 14.10.2026.)

The project lives on a Claude Design canvas. Its files sit under `project/`; `canvas.json`
lists every `.dc.html` as an artboard (`Main.dc.html` first, then the Pages row, then the
Components row). Differences from the original project archive:

- `index.dc.html` is now **`Main.dc.html`**, and page bodies use hyphens instead of spaces
  (`Pages/Homepage-body.dc.html`, imported as `name="Pages/Homepage-body"`).
- **Every image and video is a canvas asset**, referenced as `/_blob/<id>`. The canvas renders
  the shell in a sandboxed copy (because it loads pages from `Pages/` and `Components/`), and
  that copy cannot load image files by relative path — only from the asset store. So:
  - all `images/…` paths in the code were replaced by their asset URLs (14.10.2026.); the
    name → asset list is "Image assets" at the end of this file. The `images/` folder stays in
    the project as the original files, but nothing loads from it;
  - the 749 category thumbnails (`images/c/`) are mapped by file name in `images-c-assets.js`
    (`window.BB_CIMG_URL`, loaded by the shell right after `catimg.js`); code that builds an
    `images/c/` path looks the name up there first;
  - two data files keep readable file names and look the asset up instead: `category-products.js`
    (map `A`, file name → asset URL) and `images-c-assets.js` (category thumbnails);
  - **a new image** = upload it as an asset, use the `/_blob/<id>` URL it returns in the code,
    and add a row to "Image assets" (a new category thumbnail goes into `images-c-assets.js`).
- `.jsx` files are served as `text/plain` (the runtime fetches and compiles them itself).
- The canvas supplies the DC runtime, so there is no `support.js` in the project.
- Page bodies and components also show as standalone artboards, but their relative paths
  (`styles.css`, data scripts, `./Components/pdp/PDPBody.jsx`) resolve from the shell's root
  folder, so they are only complete inside `Main.dc.html` — e.g. the standalone
  `Pages/Product-body` artboard reports "PDPBody: failed to load: HTTP 404". Review pages
  through the shell.
- **Exporting for git / outside the canvas:** `/_blob/…` URLs only load inside the canvas. A
  portable export swaps every `/_blob/<id>` back to its `images/…` path using "Image assets"
  below and `images-c-assets.js` (whose values become `images/c/<name>`), and adds the
  `images/` folder including `images/c/`. Re-importing a portable copy means uploading the
  images as assets again and swapping the paths back.
- Not carried over: `export/`, `screenshots/`, `_ds/`, `export-head.txt`,
  `export-assets.json`, `robots.txt`.
- **The canvas can't fetch `.md` files.** The Export for CMS button therefore uses `cmsSpec` in `Main.dc.html`, a
  generated copy of the Export for CMS section below — regenerate it whenever that section changes.
- **Iframes can't load project `.html` files by relative path** on the canvas ("not found"). A
  plain-HTML widget is shipped as a JS string and loaded with `srcdoc` (see `tv-size-finder.js`).
- Keep this file current: when a file, convention or shared pattern changes, update the
  matching section here in the same publish.

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
- Section titles: 24px / 600 desktop, 17px / 600 mobile. Product card prices are 800 (extra bold); "Uštedi" badge 12px / 600 desktop (10px mobile vertical/minimal, 11px mobile list); labels (Besplatna dostava …) 600.
- Mobile is previewed in a 412×915 phone frame; the `viewport` tweak switches it. Opened on a real phone (window ≤ 600px wide) the
  Mobile view drops the grey stage and the rounded frame and fills the browser (100% × 100dvh), header at the top.
  On a phone the prototype also **opens in Mobile by default** (the Prikaz switch can still go to Desktop).

## Files

```
Main.dc.html                  THE APP — header, menu, footer, page switch, tweaks
Pages/Homepage-body.dc.html    homepage content only (no header/footer)
Pages/Product-body.dc.html     PDP content only
Pages/Cart-body.dc.html        cart content only (seller-grouped boxes + summary)
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
Components/ProductCard.dc.html     THE product card — layout vertical (category grid, natural height 594 desktop / 499 mobile),
                                   minimal (all carousels, natural height 456 desktop (451 wishlist) / 406 mobile) and horizontal (category
                                   list view, full width × 321, × 295 when ≥1320px wide / 372 mobile); never hand-roll a card
Components/ProductCarousel.dc.html product row (desktop + mobile)
Components/PromoCard.dc.html     THE promotion card — layout vertical | side | side-rev, size md | lg;
                                   used on Akcije i promocije and category "Istraži promocije"
Pages/Promotions-body.dc.html  "Akcije i promocije" (header nav) — category circles filter, featured bento,
                               full grid with sort + load more
Components/Breadcrumbs.dc.html     global breadcrumb
Components/CategoryTiles.dc.html   category tile grid (homepage, empty cart, empty wishlist)
Pages/Wishlist-body.dc.html        wishlist content only
Pages/Payment-methods-body.dc.html "Načini plaćanja" — first "Usluge i uvjeti" footer page
Pages/Delivery-methods-body.dc.html "Načini dostave" — second "Usluge i uvjeti" footer page
Pages/Terms-body.dc.html        "Uvjeti kupnje" — legal text, rendered from terms-data.js
Pages/Legal-guarantee-body.dc.html "Vaša prava na zakonsko jamstvo" — EU notice, how to
                               claim, EU GARAN label, three-guarantee comparison
terms-data.js                  Uvjeti kupnje legal text as data (chapters + blocks)
Components/InfoPageHead.dc.html    white intro block for every "Usluge i uvjeti" page
Components/InfoAnchorNav.dc.html   left column: the page's own section anchors (sticky)
Pages/Kitchens-body.dc.html    "Kuhinje" campaign landing (header nav link) — own sticky in-page
                               anchor bar, booking form, giveaway countdown; photos in images/kuhinje/
Pages/Kitchen-style-body.dc.html  Kitchen style showcase (prop kitchenStyle: klasicne|rusticne|moderne) — collections
                               data in its logic class (STYLES), images in images/kuhinje/stili/; opened from the
                               Kuhinje landing "Poglej primere" (shell openKStyle)
Components/KitchenBooking.dc.html  shared "Rezervacija termina" form block (desktop / mobile)
Pages/Brands-body.dc.html     "Brendovi" (header ••• dropdown) — featured logo tiles, searchable A–Ž brand directory
                               with category chips, letter jump and A–Ž / popularity sort; data in brands-data.js
brands-data.js                 brand list + categories + featured (window.BB_BRANDS); logos in images/brands/
Pages/Stores-body.dc.html      "Prodajna mjesta" (header nav) — InfoPageHead with city filter tabs,
                               StoreLocator (city + onShowStore props), store detail panel
Pages/Contact-body.dc.html     "Kontakt" — support block, department cards, store locator,
                               company data (one column; opened from the header nav)
Components/StoreLocator.dc.html    GLOBAL "Prodajna mjesta" widget — Leaflet map + scrollable
                               store list (scrollbar on the left), "Prikaži trgovinu" link,
                               two-way select (list ⇄ pin)
Components/SupportBand.dc.html     GLOBAL dark support/contact band (#00337A) — eyebrow,
                               title, text, phone + e-mail pills; bottom of every info page
Components/store-map.html      plain-HTML Leaflet map the widget embeds in an iframe
                               (maps must NOT be .dc.html — script timing)
tv-geo-data.js                 GEO content for the TV tree (window.BB_TVGEO): intros, tile counts/prices, guides,
                               setup steps, VESA table, diagonal + technology tables, "najbolji po namjeni", FAQs,
                               "O kategoriji" facts — HR copy; SI is written separately, never machine-translated
Components/TvGeo.dc.html       GEO sections for TV i audio (L1) → Televizori i dodaci (L2) → Televizori (L3, below
                               the grid). Mounted by Category body ONLY for those three pages (all other categories
                               keep the generic layout); emits BreadcrumbList / ItemList / Organization JSON-LD
Components/tv-size-finder.html plain-HTML "Pronađi savršenu veličinu TV-a" widget (team's original code, iframe in
                               TvGeo L3; Prototype settings → Vodič za dijagonalu → Kalkulator). Posts size → grid filter.
tv-size-finder.js              the same widget as a string (window.BB_TVSIZE_HTML); TvGeo puts it into its iframe with
                               srcdoc, because the canvas can't open an .html file by relative path in an iframe. After
                               editing tv-size-finder.html, regenerate this file from it.
Components/GeoFaq.dc.html      GLOBAL FAQ block (desktop sticky intro + accordion / mobile accordion). Answers are
                               always in the HTML (collapsed visually only) and it emits FAQPage JSON-LD.
                               40–80 words per answer. Use it for every new GEO category page.
category-products.js           category → product pool (window.BBCatProducts.forCat / forSearch / forBrand) —
                               the category listing and its carousels only show products of the clicked category
energy-rule.js                 window.BBEnergy.allowed(name) — energy label only for phones, TVs + white goods
scroll-rail.js                 GLOBAL (loaded by the shell): scroll indicators — a `data-thumb` bar inside a rail
                               slides with the nearest preceding horizontal track (no React state, never fills);
                               mouse-drag on every horizontal scroller. Tracks pad right to the 1480 wrapper edge.
stores-data.js                 store list (window.BB_STORES) shared by both
changelog.js                   prototype change log — MUST be updated every working day
                               (see "Change log" below)
Pages/Design-system-body.dc.html  THE DESIGN SYSTEM PAGE — colours, type, spacing,
                                  radii, buttons, inputs, controls, badges, icons and
                                  the list of global components. Central reference:
                                  when a token or shared pattern changes, update it here
                                  too. Opened from Prototype settings → "View design system".
styles.css                     global stylesheet — all shared CSS lives here
catalog.js / catimg.js         category tree + artwork mapping (menu data)
images-c-assets.js             window.BB_CIMG_URL: images/c/<file> → canvas asset url (see "Canvas setup")
images/                        original artwork files (not loaded — see "Canvas setup")
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
| `.bbsearch` | header search inputs (`type="search"`): hides the browser's own clear ✕ / search decorations |

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
Mobile search focus (variant `mobile` only, since 16.10.2026.): focusing the field turns the header
into a full-screen search screen — the top row (hamburger, logo, icons) goes away, the search bar lifts to
the top of the screen at ~80% width with a white "Zatvori" text button on its right (closes the screen),
and a 100%-height white sheet replaces the old dark backdrop; popular terms / results (SearchPanel) fill
the screen below the bar (the list scrolls; "Prikaži sve rezultate" is its last row). Desktop search is unchanged.
All header search inputs are marked as search fields (`type="search"`, `name="q"`, `role="searchbox"`,
`inputmode`/`enterkeyhint="search"`, `autocomplete="off"`, password-manager ignore flags) so phone autofill
doesn't offer saved passwords or cards; keep these attributes on any new search field.

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

### PromoCard
```html
&lt;dc-import name="Components/PromoCard" variant="desktop" layout="vertical" promo="{{ pr }}"
  on-open="{{ openPromo }}" hint-size="100%,470px"&gt;&lt;/dc-import&gt;
```
`promo`: `{ img (960×676), title, text, cat, date, urgency? }` — `urgency` ("Još 2 dana") shows a red chip on the
image. `layout="side"` / `"side-rev"` puts the image (58%) left / right and fills the parent height; `size="lg"`
enlarges the title. Mobile is always vertical and clips the text. Never hand-roll a promo card.

### Breadcrumbs
```html
<dc-import name="Components/Breadcrumbs" variant="desktop" items="{{ crumbs }}" hint-size="100%,18px" style="margin-bottom:12px"></dc-import>
```
The one breadcrumb used on every page that has one (category, search, cart, wishlist, PDP).
Pass `items: [{ label, onClick? }]` — last item is the current page (dark, 600); the rest are
brand-blue links. Desktop starts with "Big Bang", mobile with "Početna". Never hand-roll a
`<nav>` breadcrumb inside a page.

### ProductCard
```html
<dc-import name="Components/ProductCard" variant="desktop" layout="vertical" card="{{ p.card }}"
  on-open="{{ p.onOpen }}" hint-size="100%,568px"></dc-import>
```
FINAL DESIGN (08.10.2026., spacing / type re-measured 13.10.2026. from the designer's screenshots — match exactly). `layout`:
- `vertical` — category grid. Image zone 200 / 151px with stickers (cashback circle, warranty) top-left and
  wishlist + compare (36px, #E0E0E0 ring) top-right; labels in ONE row at the image bottom, directly above the title
  (the FIRST one whole, the SECOND ellipsised, overflow collapses into a "+N" chip; on hover (`.bbpl` in styles.css) the first label ellipsises and the second shows in full; hovering "+N" slides the visible labels off left and reveals the hidden ones); title 15/23 / 500 (mobile 14/20);
  stars (13px, mobile 12px) + "4.0(218)" 12px (mobile 11); "Dostupno još N opcija →" 12px (mobile 11); availability; "Prodaje: …";
  red "Uštedi 400 €" badge (12/600 × 21px, mobile 10/600 × 20px); price 20/800 (mobile 17/800, mobile list 18/800, letter-spacing -0.04em)
  with the old price (15px, mobile 12px) struck through to its right (#545F71), vertically centred on the price; dashed green promo box (-20% chip, saving,
  "uz kod CODE", copy button #E6F5EC); "ili 25,99 € / 12 rata" (mobile without "ili"); energy label + "Informacijski
  list" (#888); "Cijena na <date> <anchor>" (#545F71). Every slot keeps its height so rows line up.
- `minimal` — every ProductCarousel: title, seller, Uštedi badge, price, promo box, energy, anchor line. No rating,
  options, availability or rate line. `wish` shows only the trash button.
- `horizontal` — category list view: stickers column (cashback, warranty, gift), image with dot gallery
  (`card.gallery`), title 16/22, rating + options, labels (below; at ≥1320px card width inline between rating and options), `card.spec` (2 lines), price row (price · old · Uštedi · rate),
  promo box, anchor; right column with availability, seller, energy, Usporedi / Spremi and outline "Dodaj u košaricu"
  (BBCart). Mobile: labels stacked above the image, stickers top-right, no buttons, square corners, full width.
PROTOTYPE TEST: prop `promoVar` (1–30) swaps the vertical promo box (VD / VM only) for one of thirty test designs
(`codeV1`…`codeV30`; 21–30 also restyle or hide the red Uštedi badge via `saveStd` / `svNN`); 0 / unset = the final dashed box above. Only Stolna računala passes it (Main → Category body
→ card cell), from Prototype settings → „Promo kod (kartica)”. Do not use it elsewhere until a design is chosen.
LEGAL: never show the price after a promo code is applied (no "cijena s kodom", no final/basket price). Show only
the nominal saving ("-103,80 €") and/or the percentage.
Radii 12 desktop / 8 mobile. `card`: `{ img, gallery?, name, spec?, price, old?, disc?, rate?, cashback?, warranty?, gift?,
energy?, pills?: [{ label, tone: 'navy'|'orange'|'lime'|'red'|'blue' }], rating?, reviews?, options?, avail, availTone?:
'in'|'wait'|'out', seller?, codePct?, promoCode?, renewedSave?, priceTag?, priceTagTone?, anchor?, anchorDate?, noAnchor? }`.

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

## GEO category pages (TV)

Each level has one job so the pages don't compete in search: **L1 TV i audio** routes to subcategories,
**L2 Televizori i dodaci** covers everything around a TV (mount, sound, cables, setup), **L3 Televizori** is
the buying guide. Category body detects the three pages (`geo` = l1 / l2 / l3), swaps in the GEO intro and
tile meta ("214 modela · od 129 €") and mounts `Components/TvGeo` in place of its generic blocks. On L3 the
diagonal / technology / namjena links apply the grid filter and scroll up to the grid (`onFilter`).
Every fact on these pages is plain text in the HTML (tables are real `<table>`s, FAQ answers stay in the DOM).

## Energy label

Shown **only for phones, televisions and white goods** (fridges, freezers, air-cons, stoves/ovens/hobs, hoods, washers, dryers, boilers). The rule lives in `energy-rule.js` (`window.BBEnergy.allowed(name)`); ProductCard and the PDP info list both use it — never show an energy label without it. Every television in a carousel carries a label (E–G).

## Anchored price

**Anchored price ("sidrena cijena") — legally required from 1.10.2026.** Every product
price display (cards, PDP, cart flyout, cross-sell) shows the regular price on the reference
day as the last line of the price block — on product cards **below the promo-code label**, on the
PDP under the instalment line: `MPC na 10.09.2026. 1.099,00 €` (cards: `Cijena na 10.09.2026. 749,00 €`, last line, 10px / 9px mobile, `#545F71`), `#8B95A5` on the PDP,
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

1. New `Pages/Page-name-body.dc.html` — content only, **no header, menu or footer**. File and folder
   names never contain spaces (the canvas refuses them); use hyphens, and list the new file in
   `canvas.json` as an artboard.
2. `<helmet>`: Inter links + `<link rel="stylesheet" href="styles.css">` (bare paths —
   a child DC's helmet injects into the shell's document at the project root).
3. Props: `variant` (`desktop` / `mobile`) driving `isDesktop` / `isMobile` branches, plus
   `onOpenProduct` if it shows product cards. No `menuOpen` — that is the shell's.
4. In the shell, add `<sc-if value="{{ isYourPage }}">` branches (desktop + mobile) with the
   `<dc-import>` wrapped in `<div class="pgin">`, and a `page` value + navigation method.


## Export for CMS (Prototype settings → "Export for CMS")

This section is the **single source of truth** for exporting a page into the Big Bang custom CMS.
Nothing in the app duplicates it: the "Export for CMS" button only copies this section verbatim
into a prompt together with the open page's key, body file path, state, active tweaks and imported
files — not the page source; Claude reads the files from the project itself. **Claude performs the export** — the user pastes the prompt into Claude's chat in
this project; the app itself has no export engine.

### What to export
- Only the **page body** currently open in the shell (the `Pages/…-body.dc.html` named in the
  prompt) — never the header, menu, footer, Prototype settings, page skeletons, flyouts or modals
  that belong to the shell.
- Export the variant the given prototype tweaks/state select. The page has a desktop and a mobile
  variant: produce **one responsive markup** (desktop styles first, mobile overrides in
  `@media (max-width: 767px)`), not two copies. Read the source, render the page in the prototype
  when helpful, and read every imported file needed to resolve the real markup, text and images.
- Use the real content (text, images, links) — never placeholders or invented copy.

### HTML structure
- A standalone HTML **fragment**, not a document: no `<!DOCTYPE>`, `<html>`, `<head>` or `<body>`.
- File order: one `<style>` block first, then the HTML markup, then one `<script>` block (only if
  JavaScript is required).
- Clean, semantic, well-formatted vanilla HTML (`section`, `h1`–`h3`, `p`, `ul`, `a`, `button`,
  `img` with `alt`, `picture`/`video` where used). No React, runtime or editor attributes
  (`data-dc-*`, `data-cc-id`, `sc-*`, inline event handlers), no inline `style` attributes.
- Export **section by section**: each top-level `<section>` is fully closed before the next one
  begins. Keep sections structurally independent; no needless wrappers or nesting.
- Preserve the original design, content, responsive behaviour and intended functionality.

### CSS
- All page-specific CSS in the single `<style>` tag at the top.
- Every class uses the page prefix `bb-<page-key>-` (the page key is given in the prompt, e.g.
  `bb-kitchens-hero`, `bb-pay-card`) with descriptive, consistent names. Scope every rule to these
  classes so nothing leaks into the CMS; no bare element, `body`, `html`, `:root` or id selectors.
- No universal `*` resets, no `@import`, `@font-face`, Google Fonts links or other font loading,
  no global typography — the CMS provides Inter and global styles.
- Resolve `styles.css` variables (`--bb-*`) and shared classes (`.bbcta`, `.imz`, `.nsb`, `.arw` …)
  into prefixed rules, and only for what the export actually uses. Keep hover/focus states.

### JavaScript
- Vanilla only, in one `<script>` after the markup, wrapped in an IIFE; no globals, no libraries.
- Query only inside the exported page root (prefixed classes / `data-bb-<page-key>-*` hooks); never
  attach handlers to `document`/`window` that could affect other CMS content beyond what the
  interaction needs (e.g. a scoped resize/scroll listener is fine).
- Preserve intended interactions (tabs, accordions, sliders, carousels of non-product content,
  galleries/lightboxes, in-page anchor navigation, countdowns, hover panels). Skip prototype-only
  behaviour (navigation between prototype pages, cart flyout, wishlist, Prototype settings).
- No functionality for global CMS components that are replaced by shortcodes.

### Global CMS components → shortcodes
The CMS renders these itself. Never export their markup, CSS, JS or assets:
- store locators (`StoreLocator`, maps);
- forms (booking/contact/newsletter forms, inputs with a submit action — e.g. `KitchenBooking`);
- product carousels (`ProductCarousel`);
- product grids, listings, dynamic product cards (`ProductCard`), recommendations and any other
  product-related content.

Replace each one with exactly this placeholder, on its own line:

```
[SHORTCODE=""]
```

- It must sit **outside all HTML elements**: close every open element (section/div/main) before it;
  reopen a wrapper after it only if content follows that needs it. Never inside any tag.
- One placeholder per component, in the original order. A heading, "Prikaži sve" link or scroll
  rail that belongs to the component goes with it.
- Do not invent shortcode names or parameters — the value stays empty.

### Assets and deliverable
- Write the package to `export/cms/<page-key>/`: exactly **one** HTML file
  (`<page-key>.html`) and **one** `assets/` directory — nothing else — then deliver that folder to
  the user as a ZIP download.
- Copy every image and video the exported page uses (HTML `src`/`srcset`/`poster`, `<picture>`
  sources and CSS `url()`) from `images/…` into `assets/`, keeping original files and names
  (prefix with the subfolder name if two files would collide). Reference them relatively:
  `assets/image-name.webp`.
- Do not include assets used only by omitted global components or by the shell.
- If an asset cannot be found or copied, say so explicitly in the reply (path + reason) — never
  silently drop or substitute it.

### Validation (before delivering)
Check and report briefly that:
- no `<html>`, `<head>` or `<body>` tags; order is `<style>` → HTML → `<script>`;
- all tags are properly nested and closed, and each section closes before the next begins;
- every class uses the `bb-<page-key>-` prefix; no font imports, universal resets or global styles;
- every global component is a standalone `[SHORTCODE=""]` line outside the HTML structure, with no
  leftover markup, CSS, JS or assets of it;
- all required local assets are in `assets/` and every reference resolves;
- the export matches the original page's appearance and functionality (open the exported HTML and
  compare desktop and mobile widths with the prototype);
- the ZIP holds exactly one HTML file and one `assets/` directory.

## Image assets

Original file → asset URL used in the code (category thumbnails: `images-c-assets.js`; the TV size
finder's three scene images were bigbang.hr URLs in the original widget).

```
images/b2b-meeting.png  /_blob/c8c2a0ae3d12621d8efedb672bfb7515
images/blog-oled-vs-miniled.png  /_blob/de06642a46e1abe85b38f7e32e26d3f1
images/blog-soundbar.png  /_blob/d582146b7a07799a74cc7a93a28e45e0
images/blog-tv-watching.png  /_blob/fc31137b649e6812dd0c44fc6e9ded46
images/brands/samsung.png  /_blob/c41ac38bd8b6cd718d3b0693c3575814
images/cat-audio.webp  /_blob/1c234b09876a3957e47d3928cd801b11
images/cat-banner.png  /_blob/d31dd0524b909e3a1dcb16ed7c716001
images/cat-gaming.webp  /_blob/a30880833e27391bb2f5d67ecf9d6bdc
images/cat-hladnjaci.webp  /_blob/b20c02bc324499dab0687aa817e20803
images/cat-kamere.webp  /_blob/b09125f968aec77bfb233f6fa73e352e
images/cat-klima.webp  /_blob/2e36b0bbf59bdc059070f4fc5ddc23cd
images/cat-laptopi.webp  /_blob/0435f39a8ab23d661935754c08abf515
images/cat-mali-aparati.webp  /_blob/65975913d7ccfbe4644a4c723ff92186
images/cat-mobiteli.webp  /_blob/031c6913d467905ad205b261d39bced7
images/cat-osobna-njega.webp  /_blob/8ed78cbec0a9336b604afd4a1deb00ce
images/cat-pametni-satovi.webp  /_blob/450eee11466c7005e609b10921f507dc
images/cat-pecnice.webp  /_blob/a27f51e06bee81471f704570c8e3feb1
images/cat-perilice.webp  /_blob/67e6ef8db632fed1d3d6e2fad4e7a9ae
images/cat-ploce-kuhanje.webp  /_blob/6889e3a474cb69c9a6b121c058d0037c
images/cat-pranje-posuda.webp  /_blob/cb51f921b7f5f39bd7fe0004a903e55c
images/cat-stolna-racunala.webp  /_blob/15a17ff27bef728067acaaa9be6e5efb
images/cat-televizori.webp  /_blob/f60b88bac738bf74b3c03046df647b5b
images/energy-a.png  /_blob/efe3dc60ffec1c2b60b1fa081bcd5c78
images/energy-g.png  /_blob/5ded656a62167c16ebed0e5936def446
images/eu/charger-included.svg  /_blob/6328227571ab313460047172952de5e9
images/eu/charger-not-included.svg  /_blob/fbc5407356e44a31fb8f3beb9489d6db
images/eu/eu-guarantee-emblem.png  /_blob/74e82f553e0640ff033966650195dab4
images/eu/garan-badge-5.png  /_blob/ed4e48db80aca3a183c1de85640cb8e7
images/eu/garan-full-4.svg  /_blob/8daf9811691dd96f6cdd201b32345310
images/eu/garan-label-colour.svg  /_blob/cb901d26e4f91fb71518dcafc16e86e8
images/eu/garan-label-nested.svg  /_blob/682320bf197b741b96bb2b23b4ec9936
images/eu/legal-guarantee-notice-hr.svg  /_blob/685c6df92d2a93188fa5e44419d0bb03
images/featured-card-1.webp  /_blob/97aa1ff7771a6d15fea52e5cce60ce71
images/featured-card-10.webp  /_blob/f4b8a237765e238703eb50c94a5a5caf
images/featured-card-2.webp  /_blob/810b8df883f70dc5f2859d26cca27902
images/featured-card-3.webp  /_blob/add4066e244dc41e00239bc9a07e071c
images/featured-card-4.webp  /_blob/a78f8cb282116580475bf9dfb4907252
images/featured-card-5.webp  /_blob/05f811ce0fd1a94042c7e92a7bea7557
images/featured-card-6.webp  /_blob/6a3c48b13326939b39890d0dc918b0a7
images/featured-card-7.webp  /_blob/2a9467109dcd0e47af16e441c1795b4f
images/featured-card-8.webp  /_blob/196ccb43dcfe5a57c220e78be275b081
images/featured-card-9.webp  /_blob/76b0c6b7df68fbf24382b27619f04e00
images/guide-projektor.png  /_blob/b544e43fc228e5b1d7ca8c66de064b6e
images/guide-slusalice.png  /_blob/316e36206bddb9a3f1b13cf338951204
images/guide-tv.png  /_blob/e96e9ef4db62fe068f994b14f13605cd
images/hero-1-premium-visa.webp  /_blob/760ea732b9e08e2cd3dbb28d9113ecff
images/hero-2-epic-deals.webp  /_blob/0a7a6112b089e874ea25a9818898c60f
images/hero-3-brand-week.webp  /_blob/8d73f905a8c18d498b175a591495dd25
images/hero-4-tv.webp  /_blob/5245f9869b94e604e87025125d0b333d
images/hero-5-end-of-school.webp  /_blob/0f419f1244385c7c5c98f301176ca233
images/hero-6-summer.webp  /_blob/41eaffd3d7d3fa6ca26d99ecdc61dc41
images/hero-7-desktop-pc.webp  /_blob/2cbf273800d9e3fac1c7f64f92e5b270
images/hero-8-hisense.webp  /_blob/2394e3a775dccf4260cbfe45a3126efa
images/hero-9-flexstrike.webp  /_blob/e2184cd90014fc69807711b603f09136
images/hero-m-1.jpg  /_blob/6b222c28492d75ae6d28670ba295367f
images/hero-m-2.jpg  /_blob/b63c3cfe39488262441ed261137cf441
images/hero-m-3.jpg  /_blob/2c1ebbe24d2627a67993b6803c110b30
images/hero-m-4.jpg  /_blob/91a2d00535509c6fd417265d7aa0b096
images/hero-m-5.jpg  /_blob/ad0fc730e77e672d4a119af556116e1f
images/hero-m-6.jpg  /_blob/4bbc5aab1924dcebb1aaa8031435154d
images/hero-m-7.jpg  /_blob/6ba9925dd4f39aa4d777bc36f8d8feeb
images/icon-code.svg  /_blob/52fa7dbaef3f1d62148aa7c650c9df8b
images/icon-instal.svg  /_blob/36d19c7caacf3bb68f69bf885ea70d67
images/icons/promo-tag.svg  /_blob/0b1e5e6fef1ef1a0bc722250de03d3a9
images/kuhinje/kitchen-bright.jpg  /_blob/99e262d2d40b0c264d1bee0f2b248097
images/kuhinje/kitchen-dark.jpg  /_blob/94df5209cc6ddba323d34f76c7dd8961
images/kuhinje/kitchen-hero-2.mp4  /_blob/ba9b35de4a266ddbc585cd04b02d0dfb
images/kuhinje/kitchen-hero.jpg  /_blob/925a0fc208eecaa97da953280e84bf66
images/kuhinje/kitchen-hero.mp4  /_blob/b2e3169c600b5d806202c89a5c78653e
images/kuhinje/kitchen-sink.jpg  /_blob/ebbce1cc7d5cf66ecccaffb7c3accb37
images/kuhinje/kitchen-tv.jpg  /_blob/b05aa99bba68cfab82e41e4b5f522157
images/kuhinje/razstavne/btc-glasgow-tloris.png  /_blob/9002b40c9c37def8666bd4ca8f777ec7
images/kuhinje/razstavne/btc-glasgow.jpg  /_blob/78bcbbf93cf810ddabb5517f6cf466e0
images/kuhinje/razstavne/btc-porto-tloris.png  /_blob/83adc71a894ddb0345ecb3338e2de73c
images/kuhinje/razstavne/btc-porto.jpg  /_blob/b8f9c8a1e247a30f4367e978c7878f98
images/kuhinje/razstavne/btc-susann-tloris.png  /_blob/41c11b626e573fb3e55ccf2519f46a8a
images/kuhinje/razstavne/btc-susann.jpg  /_blob/3217094c53c4b1ef71713fd01f546e19
images/kuhinje/razstavne/celje-amelie-tloris.png  /_blob/559e7ad7d89aa8b2332faf858fd119cf
images/kuhinje/razstavne/celje-amelie.jpg  /_blob/4b0f43ceab65ad2b140c24bebb557535
images/kuhinje/razstavne/celje-cora-tloris.png  /_blob/fad48f462b878429125a537c03e35d28
images/kuhinje/razstavne/celje-cora.jpg  /_blob/54f4eaae494095c6a59c2e90309b7b54
images/kuhinje/razstavne/celje-paris-tloris.png  /_blob/46a2a47d5f32ffb3dbef576152ede6c6
images/kuhinje/razstavne/celje-paris.jpg  /_blob/94a8386512471926c0ef347becd9e78e
images/kuhinje/razstavne/celje-susann.jpg  /_blob/44409b2a0d910531fabd5405b2efba8d
images/kuhinje/razstavne/koper-amelie-tloris.png  /_blob/aa4ef6722e63c6f0476819f090252ca6
images/kuhinje/razstavne/koper-amelie.jpg  /_blob/483d78944e273f3ce22a86dc8b3237ed
images/kuhinje/razstavne/koper-bali-tloris.png  /_blob/6a92d3ceed9c39aff3f616777d5a34f5
images/kuhinje/razstavne/koper-bali.jpg  /_blob/def7508924e310ba6d2131d0a468657c
images/kuhinje/razstavne/koper-cora-tloris.png  /_blob/1af1ba9190659fdf13496c929c7f2fca
images/kuhinje/razstavne/koper-cora.jpg  /_blob/89b75490d689163a5400a5bca2d16d8b
images/kuhinje/razstavne/kranj-amelie-tloris.png  /_blob/a7fd2cf7bb9140065516a73e689fa113
images/kuhinje/razstavne/kranj-amelie.jpg  /_blob/548878239797288ebb7e4d8a09a445d0
images/kuhinje/razstavne/kranj-bali-tloris.png  /_blob/a7610c8f5eca6c51a059853d631f5848
images/kuhinje/razstavne/kranj-bali.jpg  /_blob/60832267b4cad5ad805e6397637463a3
images/kuhinje/razstavne/kranj-cora-tloris.png  /_blob/b98288f2b697f4fde0f8b35cb630a748
images/kuhinje/razstavne/kranj-cora.jpg  /_blob/f4e458ca3f85239776f8a6c37f07f66f
images/kuhinje/razstavne/kranj-paula-tloris.png  /_blob/47da175a205e7f9ce3276a26ac27e8a0
images/kuhinje/razstavne/kranj-paula.jpg  /_blob/dc2db45a03115f43df2d77214404656c
images/kuhinje/razstavne/maribor-amelie-tloris.png  /_blob/2f1665e978ca9410f80493dfb7187bdf
images/kuhinje/razstavne/maribor-amelie.jpg  /_blob/5037ceea63d2d7bb5cbb4aeef42f3dd0
images/kuhinje/razstavne/maribor-bali-tloris.png  /_blob/e401a3b73218501b28c454ad2c2aadf1
images/kuhinje/razstavne/maribor-bali.jpg  /_blob/d3da249e8bc77062c5bde29d1b28f039
images/kuhinje/razstavne/maribor-cora-tloris.png  /_blob/35cf37dccc46cb195573a52aae789aec
images/kuhinje/razstavne/maribor-cora.jpg  /_blob/483a84175408aeed0f652b5a138c0bc3
images/kuhinje/razstavne/maribor-paula-tloris.png  /_blob/4160ac73ac4bcb15e44f9a91b53789ca
images/kuhinje/razstavne/maribor-paula.jpg  /_blob/4d563d832146f40b6b4f8cadbd676078
images/kuhinje/razstavne/rudnik-amelie-tloris.png  /_blob/139fcd6ba5be8595d1ef4f707b951d99
images/kuhinje/razstavne/rudnik-amelie.jpg  /_blob/fa2ee2ca8b8c0d093f477d589d3ff346
images/kuhinje/razstavne/rudnik-bali-tloris.png  /_blob/97a7d96a5aa51dfeee9a1e9eb26d3443
images/kuhinje/razstavne/rudnik-bali.jpg  /_blob/591dcc3b966b7eaad39312b078a750a8
images/kuhinje/razstavne/rudnik-utility-tloris.png  /_blob/0b0024dd282223e24b2b4a0a795886ba
images/kuhinje/razstavne/rudnik-utility.jpg  /_blob/b4842734b4f755c0ca631ac4bdd2731b
images/kuhinje/stili/cambridge-hero.png  /_blob/dc7bf734060da7d8478a5e109db5dd64
images/kuhinje/stili/cambridge-otok.png  /_blob/a90f7640ae15d4633f8e6b50a0fd2a7e
images/kuhinje/stili/cambridge-police.png  /_blob/6b77f34526f76f587919d7011a50eeb9
images/kuhinje/stili/cambridge-predali.png  /_blob/c2bdedcb1ec47c88310121f8375088cf
images/kuhinje/stili/cambridge-temna.png  /_blob/2da6c14c5e67587fe93b4d907e18d877
images/kuhinje/stili/cambridge-vitrina.png  /_blob/e5b5a97e38b426317f2907519e96edbd
images/kuhinje/stili/cora-susann-beton.png  /_blob/1f05b79a2bf7fb956ce0304b014256ac
images/kuhinje/stili/cora-susann-hero.png  /_blob/795e58fc0fb643bda3137d331656335f
images/kuhinje/stili/cora-susann-otok.png  /_blob/66fd547a4c96356276d31ef14d04050f
images/kuhinje/stili/cora-susann-reling.png  /_blob/d3d22cefb57d2c92a4da78ed32d42bbc
images/kuhinje/stili/cora-susann-vitrina.png  /_blob/cb6f122054613725a2854df052c169be
images/kuhinje/stili/leni-188-189.png  /_blob/a552529b53fe373f52514668ade6412c
images/kuhinje/stili/leni-paula-hero.png  /_blob/ede7763344967cbf0240b9ec7378c479
images/kuhinje/stili/leni-paula-organizator.png  /_blob/b21a5388ba31d924edafbedf6fade2e6
images/kuhinje/stili/leni-paula-predali.png  /_blob/37575117ac6116fa4acca54fa36231ba
images/kuhinje/stili/leni-paula-svetla.png  /_blob/dad92da587db82e06dd9c360d11fd1d8
images/kuhinje/stili/leni-tekstura.png  /_blob/3feb4a9d510057361b72ac7247caee09
images/kuhinje/stili/mara-hero.png  /_blob/3aba2d2214faed62ed381c5c83c8e3ef
images/kuhinje/stili/mara-otok.png  /_blob/f2697ed1205b08125590a938194b8582
images/kuhinje/stili/mara-predal.png  /_blob/f0f1bd3be27067bd8035b14dff5aae8d
images/kuhinje/stili/mara-space-corner.png  /_blob/de6b0a3adaf10929b67c446f52cba8a5
images/kuhinje/stili/mara-vitrina.png  /_blob/9b13d487862b07cd8ffc6633510b6da7
images/kuhinje/stili/paris-porto-hero.png  /_blob/4b71914ae68147f7279286d17a0221e3
images/kuhinje/stili/paris-porto-omare.png  /_blob/ebe1ee8ac9498bdf040f57f7d9c25301
images/kuhinje/stili/paris-porto-otok.png  /_blob/e415cb06c5207df635f86d9afe53a6a3
images/kuhinje/stili/rhodos-bali-delovni-kotick.png  /_blob/00549d7bac704f033ced210ed12d842e
images/kuhinje/stili/rhodos-bali-hero.png  /_blob/25b5110edcf45ce3e217cb6250a37613
images/kuhinje/stili/rhodos-bali-korito.png  /_blob/5025b8c882f8e44aa4df04c61db8c8ef
images/kuhinje/stili/rhodos-bali-omara.png  /_blob/99e03c9fbfcae063234878c4306b66e4
images/kuhinje/stili/rhodos-bali-plosca.png  /_blob/aba1cb8d77dde2dfbce7040df210a4ce
images/kuhinje/stili/salzburg-paris-hero.png  /_blob/f10dcddd921a125c7c64a14f83b25fbe
images/kuhinje/stili/salzburg-paris-korito.png  /_blob/c761a94fc2495944c1add11d38e7d0c3
images/kuhinje/stili/salzburg-paris-omare.png  /_blob/529b3251083571151cb8d0d06cb38dcd
images/kuhinje/stili/salzburg-paris-pomivalni.png  /_blob/2e7ee20ff5ad448b1837e0d7aa747411
images/kuhinje/stili/salzburg-paris-regal.png  /_blob/c464710226935a81e0ccf3afe2d1cb49
images/kuhinje/stili/sophie-hero.png  /_blob/1a0fdda39f4a2690afcc01baf38b707b
images/kuhinje/stili/sophie-kos.png  /_blob/db74ba4fb8a091a8551f454ecb131728
images/kuhinje/stili/sophie-opaz.png  /_blob/bb1a6edd5cc524c530f1f946fed2e0e9
images/kuhinje/stili/sophie-vitrine.png  /_blob/e5e18b44db800a834338d7c03c004473
images/l3-hladnjak-samsung.png  /_blob/73a1b432417f85d7026acaa113c41f69
images/l3-perilica-samsung.png  /_blob/b827d7b6f017f98ba323fbf6aa8cba68
images/l3-ploca-indukcija.png  /_blob/c64c1b61ddc9e719a867f189b185a36d
images/logo-dark.svg  /_blob/848e55eb25f4194696b460b05f50cd4d
images/logo-white.svg  /_blob/4c12a966ca931e932c5dd80bc36cb2ca
images/map-placeholder.png  /_blob/e10b8add015214771fcc91f0289c8a71
images/offer-best-1.webp  /_blob/8b80cf8cd49abfdbc5daa743d25e5cc4
images/offer-best-2.webp  /_blob/f483d1faa604a8238f8008e6fe1ef04f
images/offer-best-3.webp  /_blob/02d5f0c804097462e4c949c264619dd2
images/offer-best-4.webp  /_blob/1a5d6e25fc3eb85983eb4eb63f7f9f22
images/offer-best-5.webp  /_blob/b795512cc5cbcc47ddea8d8ef789cca2
images/offer-best-6.webp  /_blob/cf7239a9f3cc268a95764f76a6a24e5f
images/offer-best-7.webp  /_blob/7e8a1aa1ee80a2f6f3fc2d1dec5bf99f
images/offer-best-8.webp  /_blob/b42565d363976f27ad21b1b4fc2eb86d
images/pay-diners.png  /_blob/fa8a03e96335265ed4c6c6fd3c67fcd8
images/pay-keks.svg  /_blob/e93a09dd599ba7450b614475b270aac0
images/pay-maestro.png  /_blob/c35718e0dd44b6ec4486ceeebdd76592
images/pay-mastercard.png  /_blob/5dcbf2f65feb638a67a8c3c0ddf9cba7
images/pay-visa.png  /_blob/a30113e52c64a3067bf16390b9d18f02
images/pdp/main/galaxy-s24-yellow.png  /_blob/e5b9ac6de1058b6041f122707b5c7284
images/pdp/main/ps5-bundle.png  /_blob/b6b1d1fb411fbcf49e628acd0f2a7f83
images/pdp/similar/iphone-16.png  /_blob/eba3ace54f3d3e1ab772f474c83c231e
images/pdp/similar/oneplus-13.png  /_blob/c1b8f062584d07dc954040836bdb9517
images/pdp/similar/pixel-9-pro.png  /_blob/69b7a4ac07b78e03a2ea0e7c0a7fc89f
images/pdp/similar/s24-fe.png  /_blob/b45adb81d9949703f2242fb36ff75013
images/pdp/similar/s24-ultra.png  /_blob/c0c99816cf4664e0c35164c18728fb11
images/pdp/similar/sony-xperia-1-vi.png  /_blob/4c4589ce86503354c737a2121cdbd2b0
images/pdp/similar/xiaomi-14-pro.png  /_blob/3a9796ca88c89311a4b3e87a1aca7399
images/prod-bosch-perilica.webp  /_blob/654d13024985631393c1d5c3a73982f8
images/prod-gaming-pc.webp  /_blob/ce57f728c43a3702b28f16ddbcc0ceca
images/prod-gorenje-perilica.webp  /_blob/253ea3f08d180ac8e603b39b6ce00633
images/prod-hisense-klima.webp  /_blob/e92d3ce6d743cf2168f74b12d338dc7c
images/prod-huawei-watch.webp  /_blob/e4313120d6033684941888ee88df2e32
images/prod-krups-kava.webp  /_blob/6c951835d603261df9cbdf527d03a89d
images/prod-laptop-acer-aspire-lite1.webp  /_blob/2778bdad1e949e796e1ce4207c7c3b31
images/prod-laptop-acer-aspire-lite2.webp  /_blob/78f220fce68a29b8c7b04b0eaf3aeadf
images/prod-laptop-asus-tuf.webp  /_blob/8a014b03fb77c05a01a6ef7b5684871a
images/prod-laptop-hp-omnibook5-16.webp  /_blob/7e2993a11de662612e36c5fe1b449b41
images/prod-laptop-hp-omnibook5-ai.webp  /_blob/b843eb1bea66a6bc448cba66efcae2cb
images/prod-laptop-hp-omnibook5-flip.webp  /_blob/e04d0cc7511413f2c39b2b8f2ef52731
images/prod-laptop-hp-omnibook7.webp  /_blob/930266c71e8f7e266391dda35e1c72ce
images/prod-laptop-hp-victus.webp  /_blob/bc4e84d4725dbeea9651ef945a197143
images/prod-laptop-lenovo-ideapad-slim3.webp  /_blob/5eb86bc12096e43d321617d94c310017
images/prod-laptop-lenovo-legion5.webp  /_blob/011ef89131e4d83198660ddc21528c21
images/prod-laptop-lenovo-slim5.webp  /_blob/0c2cc25c7a2034c5adf527cff2eb6a60
images/prod-laptop-lenovo-yoga7.webp  /_blob/e0a35d41947957b35d7a905155034af0
images/prod-nutribullet.webp  /_blob/b1311b6bc2ded705f57a2906761462b6
images/prod-philips-brijac.webp  /_blob/488d5efb15b9d4f715f03b85cbfe559d
images/prod-philips-mop.webp  /_blob/5d62fc073083a18f90262057e67b79ab
images/prod-samsung-a16.webp  /_blob/ce9a83c17d7bb5efaaaa64b374f86ab3
images/prod-samsung-s24.webp  /_blob/dda064f21dffa2c998b21470db363fe9
images/profile/bg-uau-wide.png  /_blob/8aae0c6e5651428c182ce5d34b3f98f9
images/profile/bg-uau.png  /_blob/6ddc0c624aecdd97fc38c2ba305a3bb8
images/profile/dev-dyson-v8.png  /_blob/d928f1a7a5d96c765befb83f57b50b2a
images/profile/dev-huawei-gt6.png  /_blob/18191ac77961cc00dcdf08262c290c72
images/profile/dev-philips-xd.png  /_blob/ed516e63afd7bbf5c71515b3e4c9c21b
images/profile/dev-samsung-a16.png  /_blob/83413a516f0b9de28561ca0998029c2f
images/profile/prod-fridge.png  /_blob/e7db26f7bbf9609311e96b6804de1dc2
images/profile/prod-switch.png  /_blob/54389bc1ac1a7c1eb72ef78bbc26e834
images/promo-audio-uau.png  /_blob/f811e1d55a832627bee1d9facf4a3b42
images/promo-hisense.png  /_blob/54952c47a7028950d27cb79898284422
images/promo-laptop-portrait.webp  /_blob/3c3ef92130b962ca274c1705cf5f83fb
images/promo-marketplace-portrait.webp  /_blob/37c93e9dee7cdad6d3f68436af9bd546
images/promo-philips-tv.png  /_blob/ed0e9af9442c83c320ee6a3b7673fd03
images/promo-smeg.png  /_blob/c657853c957a5abeb75b63da4311938e
images/promo-tv-hisense.png  /_blob/0cad22dd284b18f1989a32e332a389cc
images/promo-tv-portrait.webp  /_blob/fe38f6cedff4c3d837918f7417bd40e3
images/promo-tv-samsung.png  /_blob/1a549fa5cdd4abe4a3d52962ad49038a
images/promo-tv-uau.png  /_blob/e3600f0e5fd2ac2a26b09b54eb415a1e
images/setup-kabeli.png  /_blob/5e4b02fe131ff4ead21dea3b191807c4
images/setup-nosac.png  /_blob/4307550843db2d5cc36ca7f472940777
images/setup-soundbar.png  /_blob/8cbed28f38fa8e9e1945497fddb78d64
images/tile-dvoriste.webp  /_blob/ac75ef9567e79132c0afdfb483e750f9
images/tile-ebicikli.webp  /_blob/945e8a43886f0d363cc6d478963639de
images/tile-ev-punjaci.webp  /_blob/161e922b46c9acfeb7cd549732385455
images/tile-fitness.webp  /_blob/b6dd1187df453c8719d1dc429b4191ae
images/tile-fotoaparati.webp  /_blob/6256834b98cc10d111a7ddfa5beca684
images/tile-gaming-racunala.webp  /_blob/74e9d5b2cf82565e135e6b96c4b73f3c
images/tile-gaming-setovi.webp  /_blob/5a9259b1325c115c76745d02f0be9f94
images/tile-madraci.webp  /_blob/3b60511cc10c2ec9e474d00675881466
images/tile-projektori.webp  /_blob/44c0c149593651adf29ea9db33b79928
images/tile-trake-trcanje.webp  /_blob/e1e772e3b1c2c60fbaa266564f18ac77
images/tile-trampolini.webp  /_blob/d70826befe673a6c6ae24825a8797939
images/tile-visokotle-cni.webp  /_blob/dd26508146ec9fe2c0838184e58f5671
images/tv-size/sofa.png  /_blob/db6ad74868edc89e3afa09696f7ccb30
images/tv-size/stand.png  /_blob/337ea8285a1a7f95c6b8186d3d08abb9
images/tv-size/tv.png  /_blob/66405aa8c2d3c752c6a401a28443df9e
images/tv/hisense-qled-e7s.png  /_blob/d2411c3a40260d54c9f7b8bdbc4607c5
images/tv/hisense-uled-u7.png  /_blob/f1d34de070da3676276ad83af5bb2540
images/tv/hisense-uled-u8.png  /_blob/0c6bf94041665aea429bf6f9adb705c9
images/tv/lg-nano-2026.png  /_blob/ed5fd1f42cb95b1199d3c8d78c57663d
images/tv/lg-oled-c5.png  /_blob/9f30c2acc54f7cd793b88e6052123897
images/tv/philips-ambilight-qled.png  /_blob/655775ad13c825c2ae95e80775fb5bef
images/tv/philips-compact-hd.png  /_blob/6551969596e596457f785226c764b1fc
images/tv/samsung-crystal-uhd.png  /_blob/34b636e1852dc17ca2a8085755ba9150
images/tv/samsung-mini-led.png  /_blob/2bf8b2433147da7bd5e3a96a6e53037d
images/tv/samsung-neo-qled.png  /_blob/dad094b4ef6c07170c0cb90d22852580
images/usp-dostava.svg  /_blob/fcd43fca9995492bac817f2829365f63
images/usp-povrat.svg  /_blob/8a31e4b7054bbdf8c6897351a50bd4ce
images/usp-preuzimanje.svg  /_blob/e1283c943efc7a030747b259507f5575
images/usp-rate.svg  /_blob/ff6ff10c1f1719f6ab93f5eb2b5d16e4
https://www.bigbang.hr/upload/2026/05/stand_69f9917539e9d.png  /_blob/337ea8285a1a7f95c6b8186d3d08abb9
https://www.bigbang.hr/upload/2026/05/tv_69f991754139b.png  /_blob/66405aa8c2d3c752c6a401a28443df9e
https://www.bigbang.hr/upload/2026/05/sofa_69f9917531744.png  /_blob/db6ad74868edc89e3afa09696f7ccb30
```
