/* Big Bang — profile + account (auth) app.
   Ported from the standalone "User profile" prototype. Mount once per page instance. */
window.BBAccountMount = function (ROOT, opts, HOOKS) {
/* ============================================================
   Order data + thumbnail SVGs
   ============================================================ */
const THUMBS = {
  fridge: `<img src="images/profile/prod-fridge.png" alt="Hladilnik">`,
  switch: `<img src="images/profile/prod-switch.png" alt="Nintendo Switch">`,
  _fridge_svg: `<svg width="56" height="68" viewBox="0 0 56 68" fill="none">
    <rect x="6" y="2" width="44" height="64" rx="4" fill="#1A1A1F"/>
    <rect x="9" y="5" width="38" height="22" rx="2" fill="#0E0E13"/>
    <rect x="13" y="9" width="11" height="14" rx="1" fill="#2A2A33"/>
    <rect x="26" y="9" width="17" height="14" rx="1" fill="#3A3A45"/>
    <line x1="9" y1="29" x2="47" y2="29" stroke="#0A0A0F" stroke-width="1.2"/>
    <rect x="9" y="32" width="38" height="32" rx="2" fill="#0E0E13"/>
    <rect x="11" y="44" width="14" height="3.5" rx="1.4" fill="#2A2A33"/>
  </svg>`,
  _switch_svg: `<svg width="74" height="48" viewBox="0 0 74 48" fill="none">
    <rect x="14" y="6" width="46" height="36" rx="4" fill="#1A1A1F"/>
    <rect x="17" y="9" width="40" height="30" rx="2" fill="#0E1A2B"/>
    <rect x="0" y="6" width="18" height="36" rx="5" fill="#E8E8EC" stroke="#C7C7CD"/>
    <rect x="56" y="6" width="18" height="36" rx="5" fill="#E8E8EC" stroke="#C7C7CD"/>
    <circle cx="6" cy="14" r="1.6" fill="#2A2A33"/>
    <circle cx="9" cy="34" r="2" fill="#2A2A33"/>
    <circle cx="67" cy="34" r="1.6" fill="#2A2A33"/>
    <circle cx="64" cy="14" r="2" fill="#2A2A33"/>
    <circle cx="68" cy="14" r="1" fill="#2A2A33"/>
  </svg>`,
  tv: `<svg width="80" height="56" viewBox="0 0 80 56" fill="none">
    <rect x="4" y="4" width="72" height="40" rx="3" fill="#1A1A1F"/>
    <rect x="7" y="7" width="66" height="34" rx="1.5" fill="url(#tvScreen)"/>
    <rect x="32" y="44" width="16" height="3" fill="#1A1A1F"/>
    <rect x="22" y="47" width="36" height="3" rx="1" fill="#2A2A33"/>
    <defs><linearGradient id="tvScreen" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1A4FA5"/><stop offset="1" stop-color="#0A2A6B"/></linearGradient></defs>
  </svg>`,
  airpods: `<svg width="60" height="60" viewBox="0 0 60 60" fill="none">
    <rect x="10" y="20" width="40" height="28" rx="14" fill="#FFFFFF" stroke="#C7C7CD" stroke-width="1.2"/>
    <line x1="30" y1="22" x2="30" y2="46" stroke="#E0E0E5"/>
    <circle cx="44" cy="34" r="2" fill="#D2D2D7"/>
  </svg>`,
  laptop: `<svg width="80" height="56" viewBox="0 0 80 56" fill="none">
    <rect x="10" y="8" width="60" height="36" rx="2" fill="#2A2A33"/>
    <rect x="12.5" y="10.5" width="55" height="31" rx="1" fill="#0E1A2B"/>
    <rect x="4" y="44" width="72" height="5" rx="1.5" fill="#1A1A1F"/>
    <rect x="32" y="44" width="16" height="2" rx="1" fill="#2A2A33"/>
  </svg>`,
  phone: `<svg width="44" height="68" viewBox="0 0 44 68" fill="none">
    <rect x="4" y="2" width="36" height="64" rx="6" fill="#1A1A1F"/>
    <rect x="6.5" y="4.5" width="31" height="59" rx="4" fill="#0E1A2B"/>
    <rect x="18" y="6.5" width="8" height="2.2" rx="1.1" fill="#0A0A0F"/>
  </svg>`,
  vacuum: `<svg width="68" height="60" viewBox="0 0 68 60" fill="none">
    <circle cx="34" cy="36" r="22" fill="#2A2A33"/>
    <circle cx="34" cy="36" r="14" fill="#1A1A1F"/>
    <circle cx="34" cy="36" r="6" fill="#0050A0"/>
    <rect x="20" y="14" width="28" height="6" rx="2" fill="#1A1A1F"/>
  </svg>`,
  more: '+',
};

const ORDERS = [
  {
    date: '16.06.2025',
    id: 'ayhr-637-173702717',
    status: 'U tranzitu',
    items: [
      { name: 'Samsung Smart Side-by-Side hladilnik RS68A88', type: 'fridge', price: 1599.00, qty: 1 },
      { name: 'Nintendo Switch OLED, bela', type: 'switch', price: 379.99, qty: 1 },
      { name: 'Apple AirPods Pro (2. generacija)', type: 'airpods', price: 269.00, qty: 1 },
      { name: 'LG OLED55C3 4K Smart TV', type: 'tv', price: 1299.00, qty: 1 },
    ],
    payment: 'Kartično plačilo',
    delivery: 'Dostava na dom — 16.06.2025',
  },
  {
    date: '12.02.2025',
    id: 'ayhr-637-173702715',
    status: 'Dostavljeno',
    items: [
      { name: 'Samsung Smart Side-by-Side hladilnik RS68A88', type: 'fridge', price: 1599.00, qty: 1 },
    ],
    payment: 'Kartično plačilo',
    delivery: 'Dostava na dom — 14.02.2025',
  },
  {
    date: '10.01.2025',
    id: 'ayhr-637-173702713',
    status: 'Dostavljeno',
    items: [
      { name: 'Samsung Smart Side-by-Side hladilnik RS68A88', type: 'fridge', price: 1599.00, qty: 1 },
      { name: 'Nintendo Switch OLED, bela', type: 'switch', price: 379.99, qty: 1 },
      { name: 'Apple AirPods Pro (2. generacija)', type: 'airpods', price: 269.00, qty: 1 },
    ],
    payment: 'Plačilo po povzetju',
    delivery: 'Dostava na dom — 12.01.2025',
  },
  {
    date: '22.11.2024',
    id: 'ayhr-637-173702701',
    status: 'Dostavljeno',
    items: [
      { name: 'MacBook Air 13" M3, 16GB / 512GB', type: 'laptop', price: 1499.00, qty: 1 },
      { name: 'Logitech MX Master 3S, grafit', type: 'more', price: 109.00, qty: 1 },
    ],
    payment: 'Kartično plačilo',
    delivery: 'Prevzem v poslovalnici — 23.11.2024',
  },
  {
    date: '03.10.2024',
    id: 'ayhr-637-173702699',
    status: 'Dostavljeno',
    items: [
      { name: 'iPhone 15 Pro 256GB, naravni titan', type: 'phone', price: 1349.00, qty: 1 },
      { name: 'Apple AirPods Pro (2. generacija)', type: 'airpods', price: 269.00, qty: 1 },
      { name: 'Apple ovitek za iPhone 15 Pro', type: 'more', price: 59.00, qty: 1 },
    ],
    payment: 'Kartično plačilo',
    delivery: 'Dostava na dom — 05.10.2024',
  },
  {
    date: '18.08.2024',
    id: 'ayhr-637-173702691',
    status: 'Otkazano',
    items: [
      { name: 'Roborock S8 Pro Ultra robotski sesalnik', type: 'vacuum', price: 1199.00, qty: 1 },
    ],
    payment: 'Kartično plačilo',
    delivery: '—',
  },
  {
    date: '04.07.2024',
    id: 'ayhr-637-173702683',
    status: 'Dostavljeno',
    items: [
      { name: 'LG OLED55C3 4K Smart TV', type: 'tv', price: 1299.00, qty: 1 },
      { name: 'Sonos Beam (Gen 2) zvočna letev', type: 'more', price: 499.00, qty: 1 },
    ],
    payment: 'Kartično plačilo',
    delivery: 'Dostava na dom — 06.07.2024',
  },
  {
    date: '15.05.2024',
    id: 'ayhr-637-173702671',
    status: 'Dostavljeno',
    items: [
      { name: 'Samsung Galaxy S24 Ultra 512GB', type: 'phone', price: 1499.00, qty: 1 },
      { name: 'Samsung Galaxy Buds3 Pro', type: 'airpods', price: 249.00, qty: 1 },
    ],
    payment: 'Plačilo na obroke',
    delivery: 'Dostava na dom — 17.05.2024',
  },
  {
    date: '28.02.2024',
    id: 'ayhr-637-173702659',
    status: 'Dostavljeno',
    items: [
      { name: 'Bosch Serie 6 indukcijska kuhalna plošča', type: 'more', price: 729.00, qty: 1 },
    ],
    payment: 'Kartično plačilo',
    delivery: 'Prevzem v poslovalnici — 01.03.2024',
  },
];

const PAGE_SIZE = 3;
const TOTAL_PAGES = 24;  // visual total for pagination
const REAL_PAGES = Math.ceil(ORDERS.length / PAGE_SIZE);

let state = { view: 'pregled', page: 1, orderIdx: null };
let ordersFilter = { status: 'all', q: '' };

/* Tweakable defaults (persisted by host) */
const TWEAKS = Object.assign({ klubMember: true, layout: 'desktop', newUser: false, mode: 'profile' }, opts || {});
  function syncTweaksUI() {}
  function persistTweaks() {}

/* ============================================================
   Helpers
   ============================================================ */
function fmtPrice(n) {
  const neg = n < 0;
  const [int, dec] = Math.abs(n).toFixed(2).split('.');
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  return (neg ? '-' : '') + grouped + ',' + dec + ' €';
}

function thumbHTML(type) {
  if (type === 'more') return `<span class="bb-thumb-more">+</span>`;
  return THUMBS[type] || '';
}

function orderTotal(o) {
  return o.items.reduce((s, i) => s + i.price * i.qty, 0);
}

/* ============================================================
   Render: list view
   ============================================================ */
function renderList() {
  state.view = 'list';
  setActiveSidebar('orders');
  if (TWEAKS.newUser) {
    document.getElementById('bb-content').innerHTML = `
      <div class="bb-orders-bar"><h1>Moja naročila</h1></div>
      ${emptyStateHTML('Nimate še nobenega naročila', 'Ko boste oddali prvo naročilo, ga boste lahko spremljali tukaj.', EMPTY_ICONS.bag)}
    `;
    return;
  }
  document.getElementById('bb-content').innerHTML = `
    <div class="bb-orders-bar">
      <h1>Moja naročila</h1>
      <div class="bb-orders-tools">
        <div class="bb-select-wrap">
          <select class="bb-status-select" id="bb-status-filter">
            <option value="all">Vsi statusi</option>
            <option value="U tranzitu">U tranzitu</option>
            <option value="Dostavljeno">Dostavljeno</option>
            <option value="Otkazano">Otkazano</option>
          </select>
          <span class="chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>
        </div>
        <div class="bb-order-search">
          <input type="text" id="bb-order-q" placeholder="Št. naročila" />
          <span class="s-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.5" y2="16.5"/></svg></span>
        </div>
      </div>
    </div>
    <div id="bb-orders-body"></div>
  `;

  const sel = document.getElementById('bb-status-filter');
  sel.value = ordersFilter.status;
  sel.addEventListener('change', () => { ordersFilter.status = sel.value; state.page = 1; renderOrdersList(); });

  const q = document.getElementById('bb-order-q');
  q.value = ordersFilter.q;
  q.addEventListener('input', () => { ordersFilter.q = q.value; state.page = 1; renderOrdersList(); });

  renderOrdersList();
}

function statusPillClass(s) {
  if (s === 'Dostavljeno') return 'green';
  if (s === 'U tranzitu') return 'blue';
  if (s === 'Otkazano') return 'red';
  return 'amber';
}

function renderOrdersList() {
  const list = ORDERS.filter(o => {
    const okS = ordersFilter.status === 'all' || o.status === ordersFilter.status;
    const okQ = !ordersFilter.q || o.id.toLowerCase().includes(ordersFilter.q.trim().toLowerCase());
    return okS && okQ;
  });
  const LIST_PAGE_SIZE = 4;
  const realPages = Math.max(1, Math.ceil(list.length / LIST_PAGE_SIZE));
  const start = ((state.page - 1) % realPages) * LIST_PAGE_SIZE;
  const pageOrders = list.slice(start, start + LIST_PAGE_SIZE);

  const cards = pageOrders.map(o => {
    const realIdx = ORDERS.indexOf(o);
    const visible = o.items.slice(0, 2);
    const extra = o.items.length - visible.length;
    const thumbs = visible.map(it => `<div class="bb-thumb bb-ao-thumb">${thumbHTML(it.type)}</div>`).join('');
    const moreThumb = extra > 0 ? `<div class="bb-thumb bb-ao-thumb"><span class="bb-thumb-more">+${extra}</span></div>` : '';
    return `
      <article class="bb-bento-card" data-screen-label="Order ${o.date}">
        <div class="bb-active-order" style="padding:0">
          <div>
            <div class="bb-ao-title">Narudžba od ${o.date}</div>
            <div class="bb-ao-id">id: ${o.id}</div>
            <div class="bb-ao-actions">
              <span class="bb-pill ${statusPillClass(o.status)}">${o.status}</span>
              <button class="bb-bento-btn sm" data-noop>Podrobnosti ${EXTLINK}</button>
            </div>
          </div>
          <div class="bb-thumbs">${thumbs}${moreThumb}</div>
        </div>
      </article>
    `;
  }).join('');

  const body = document.getElementById('bb-orders-body');
  body.innerHTML = list.length
    ? `<div class="bb-orders">${cards}</div>${paginationHTML()}`
    : `<div class="bb-orders-empty">Ni naročil za izbrane filtre.</div>`;

  body.querySelectorAll('[data-open]').forEach(btn => {
    btn.addEventListener('click', () => openDetail(parseInt(btn.dataset.open, 10)));
  });
  body.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.page;
      if (v === 'prev') state.page = Math.max(1, state.page - 1);
      else if (v === 'next') state.page = Math.min(TOTAL_PAGES, state.page + 1);
      else state.page = parseInt(v, 10);
      renderOrdersList();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

function paginationHTML() {
  const p = state.page;
  const last = TOTAL_PAGES;
  // pattern: < 1 2 3 ... last > (with current highlighted, sliding window)
  const pages = [];
  pages.push({ kind: 'prev', disabled: p <= 1 });
  // window of pages around current
  const items = new Set([1, 2, 3, p - 1, p, p + 1, last]);
  const ordered = [...items].filter(n => n >= 1 && n <= last).sort((a, b) => a - b);
  let prev = 0;
  for (const n of ordered) {
    if (n - prev > 1) pages.push({ kind: 'dots' });
    pages.push({ kind: 'num', n, active: n === p });
    prev = n;
  }
  pages.push({ kind: 'next', disabled: p >= last });

  return `<nav class="bb-pagination">${pages.map(p => {
    if (p.kind === 'prev') return `<button class="bb-page nav" data-page="prev"${p.disabled ? ' disabled style="opacity:0.4;cursor:not-allowed"' : ''}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 6 9 12 15 18"/></svg></button>`;
    if (p.kind === 'next') return `<button class="bb-page nav" data-page="next"${p.disabled ? ' disabled style="opacity:0.4;cursor:not-allowed"' : ''}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></button>`;
    if (p.kind === 'dots') return `<span class="bb-page dots">...</span>`;
    return `<button class="bb-page${p.active ? ' active' : ''}" data-page="${p.n}">${p.n}</button>`;
  }).join('')}</nav>`;
}

function wirePagination() {
  document.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      const v = btn.dataset.page;
      if (v === 'prev') state.page = Math.max(1, state.page - 1);
      else if (v === 'next') state.page = Math.min(TOTAL_PAGES, state.page + 1);
      else state.page = parseInt(v, 10);
      renderList();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });
}

/* ============================================================
   Render: detail view
   ============================================================ */
function openDetail(idx) {
  state.view = 'detail';
  state.orderIdx = idx;
  renderDetail();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDetail() {
  const o = ORDERS[state.orderIdx];
  const subtotal = orderTotal(o);
  const shipping = o.status === 'Otkazano' ? 0 : (subtotal >= 100 ? 0 : 9.90);
  const total = subtotal + shipping;

  const itemsHTML = o.items.map(it => `
    <div class="bb-item">
      <div class="bb-item-thumb">${thumbHTML(it.type)}</div>
      <div>
        <div class="bb-item-name">${it.name}</div>
        <div class="bb-item-qty">Količina: ${it.qty}</div>
      </div>
      <div class="bb-item-price">${fmtPrice(it.price * it.qty)}</div>
    </div>
  `).join('');

  document.getElementById('bb-content').innerHTML = `
    <div class="bb-content-header">
      <button class="bb-back" data-back aria-label="Nazaj">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 6 9 12 15 18"/></svg>
      </button>
      <h1>Narudžba od ${o.date}</h1>
    </div>

    <div class="bb-detail-meta">
      <div class="bb-meta-card">
        <div class="bb-meta-label">ID narudžbe</div>
        <div class="bb-meta-value">${o.id}</div>
      </div>
      <div class="bb-meta-card">
        <div class="bb-meta-label">Status</div>
        <div class="bb-meta-value"><span class="bb-status">${o.status}</span></div>
      </div>
      <div class="bb-meta-card">
        <div class="bb-meta-label">Način plačila</div>
        <div class="bb-meta-value">${o.payment}</div>
      </div>
    </div>

    <div class="bb-section-title">Izdelki (${o.items.length})</div>
    <div class="bb-items">${itemsHTML}</div>

    <div class="bb-summary">
      <div class="bb-summary-card">
        <h3>Povzetek naročila</h3>
        <div class="bb-summary-row"><span>Skupaj izdelki</span><span>${fmtPrice(subtotal)}</span></div>
        <div class="bb-summary-row"><span>Dostava</span><span>${shipping === 0 ? 'Brezplačno' : fmtPrice(shipping)}</span></div>
        <div class="bb-summary-row total"><span>Za plačilo</span><span>${fmtPrice(total)}</span></div>
      </div>
      <div class="bb-summary-card">
        <h3>Dostava</h3>
        <div class="bb-addr-line"><strong>Janez Novak</strong></div>
        <div class="bb-addr-line">Prešernova ulica 21</div>
        <div class="bb-addr-line">1000 Ljubljana, Slovenija</div>
        <div class="bb-addr-line" style="margin-top:10px;color:#6D6D6D">${o.delivery}</div>
      </div>
    </div>
  `;

  document.querySelector('[data-back]').addEventListener('click', () => {
    state.view = 'list';
    state.orderIdx = null;
    renderList();
  });
}

/* ============================================================
   Render: Klubska kartica
   ============================================================ */
const KLUB = {
  member: {
    name: 'Janez Novak',
    cardNo: '2901 0000 0063 6365',
    email: 'janez.novak@gmail.com',
    phone: '+386 41 234 567',
    addr1: 'Prešernova ulica 21',
    addr2: '1000 Ljubljana',
    points: 1284,
    lifetimePoints: 1284,
    memberSince: '22. 11. 2024',
  },
  tiers: [
    {
      key: 'bronz', name: 'Bronz', threshold: 0,
      benefits: [
        '1 točka za vsak nakup',
        'Rojstnodnevni popust 5 %',
        'Dostop do članskih ponudb',
      ],
    },
    {
      key: 'srebrni', name: 'Srebrni', threshold: 500,
      benefits: [
        'Vse iz Bronz nivoja',
        'Brezplačna dostava nad 50 €',
        'Mesečni ekskluzivni kuponi',
        'Podaljšana 14-dnevna garancija',
      ],
    },
    {
      key: 'zlati', name: 'Zlati', threshold: 2000,
      benefits: [
        'Vse iz Srebrnega nivoja',
        'Zgodnji dostop do akcij (24 h prej)',
        'VIP podpora 24/7',
        'Brezplačno podaljšanje garancije',
        'Letni darilni bon 30 €',
        'Dvojne točke ob rojstnem dnevu',
      ],
    },
  ],
  offers: [
    // Available to all members (Bronz+) - currently active promotions
    { id: 'spring-25', tag: '25%', sub: 'Pomladna akcija', title: 'Mali kuhinjski aparati', validFrom: '2026-05-12', validTo: '2026-05-22', requiredTier: 'bronz', color: 'linear-gradient(135deg, #10DFBA 0%, #088696 100%)' },
    { id: 'game-week', tag: '15%', sub: 'Weekend deal', title: 'Gaming oprema', validFrom: '2026-05-15', validTo: '2026-05-24', requiredTier: 'bronz', color: 'linear-gradient(135deg, #088696 0%, #0050A0 100%)' },
    { id: 'tv-mega', tag: '−100 €', sub: 'Mega kupon', title: 'TV pri nakupu nad 999 €', validFrom: '2026-05-10', validTo: '2026-06-15', requiredTier: 'bronz', color: 'linear-gradient(135deg, #C1292E 0%, #7A1418 100%)' },
    { id: 'dom-10', tag: '10%', sub: 'Vsi člani', title: 'Bela tehnika', validFrom: '2026-05-01', validTo: '2026-06-30', requiredTier: 'bronz', color: 'linear-gradient(135deg, #002D73 0%, #0050A0 100%)' },

    // Srebrni+ exclusive promotions
    { id: 'fathers', tag: '20%', sub: 'Očetov dan', title: 'Pametna ura ali zapestnica', validFrom: '2026-05-15', validTo: '2026-06-15', requiredTier: 'srebrni', color: 'linear-gradient(135deg, #0050A0 0%, #002D73 100%)' },
    { id: 'audio-may', tag: '25%', sub: 'Slušaj glasno', title: 'Slušalke in zvočniki', validFrom: '2026-05-01', validTo: '2026-06-30', requiredTier: 'srebrni', color: 'linear-gradient(135deg, #002D73 0%, #002D73 100%)' },
    { id: 'kupon-50', tag: '−50 €', sub: 'Lojalnostni kupon', title: 'Pri nakupu nad 500 €', validFrom: '2026-04-01', validTo: '2026-07-31', requiredTier: 'srebrni', color: 'linear-gradient(135deg, #F65F04 0%, #C1292E 100%)' },
    { id: 'srebrni-foto', tag: '15%', sub: 'Srebrni nivo', title: 'Foto in video oprema', validFrom: '2026-05-05', validTo: '2026-05-24', requiredTier: 'srebrni', color: 'linear-gradient(135deg, #088696 0%, #002D73 100%)' },

    // Zlati exclusive — locked for user (motivational)
    { id: 'vip-30', tag: '30%', sub: 'VIP cena', title: 'Premium bela tehnika', validFrom: '2026-05-01', validTo: '2026-06-30', requiredTier: 'zlati', color: 'linear-gradient(135deg, #E8C56B 0%, #C99A2D 100%)' },
    { id: 'vip-foto', tag: '35%', sub: 'VIP foto', title: 'Profesionalni fotoaparati', validFrom: '2026-05-10', validTo: '2026-06-10', requiredTier: 'zlati', color: 'linear-gradient(135deg, #C99A2D 0%, #8A5A12 100%)' },
    { id: 'early-bf',  tag: '24h', sub: 'Zgodnji dostop', title: 'Black Friday — 24 h prej', validFrom: '2026-11-26', validTo: '2026-11-27', requiredTier: 'zlati', color: 'linear-gradient(135deg, #002D73 0%, #E8C56B 100%)' },
    { id: 'vip-bon',   tag: '30 €', sub: 'Letni bon', title: 'Darilni bon za nakup', validFrom: '2026-01-01', validTo: '2026-12-31', requiredTier: 'zlati', color: 'linear-gradient(135deg, #C99A2D 0%, #002D73 100%)' },
  ],
  activity: [
    { kind: 'plus', title: 'Nakup — Naročilo ayhr-...717', date: '16.06.2025', points: 128 },
    { kind: 'plus', title: 'Ocena izdelka — Samsung RS68A88', date: '20.02.2025', points: 20 },
    { kind: 'plus', title: 'Nakup — Naročilo ayhr-...715', date: '12.02.2025', points: 159 },
    { kind: 'minus', title: 'Unovčen kupon −20 €', date: '12.02.2025', points: -200 },
    { kind: 'plus', title: 'Nakup — Naročilo ayhr-...713', date: '10.01.2025', points: 224 },
    { kind: 'plus', title: 'Nakup — Naročilo ayhr-...701', date: '22.11.2024', points: 161 },
    { kind: 'plus', title: 'Nakup — Naročilo ayhr-...699', date: '03.10.2024', points: 167 },
    { kind: 'plus', title: 'Nakup — Naročilo ayhr-...683', date: '04.07.2024', points: 180 },
    { kind: 'plus', title: 'Nakup — Naročilo ayhr-...671', date: '15.05.2024', points: 175 },
    { kind: 'plus', title: 'Nakup — Naročilo ayhr-...659', date: '28.02.2024', points: 72 },
    { kind: 'plus', title: 'Pridružitev UAU klubu', date: '22.11.2024', points: 100 },
  ],
};

function currentTier() {
  const t = KLUB.tiers;
  const p = KLUB.member.lifetimePoints;
  if (p >= t[2].threshold) return t[2];
  if (p >= t[1].threshold) return t[1];
  return t[0];
}

function nextTier() {
  const t = KLUB.tiers;
  const p = KLUB.member.lifetimePoints;
  if (p < t[1].threshold) return t[1];
  if (p < t[2].threshold) return t[2];
  return null;
}

/* Offer time + tier helpers */
const NOW = new Date(2026, 4, 19); // May 19, 2026
const TIER_RANK = { bronz: 0, srebrni: 1, zlati: 2 };
function tierByKey(key) { return KLUB.tiers.find(t => t.key === key); }
function daysUntil(iso) { return Math.ceil((new Date(iso) - NOW) / 86400000); }
function isExpired(o) { return daysUntil(o.validTo) < 0; }
function isUpcoming(o) { return new Date(o.validFrom) > NOW; }
function isOfferAccessible(o, userTierKey) {
  return TIER_RANK[o.requiredTier] <= TIER_RANK[userTierKey];
}
function fmtOfferDate(iso) {
  const d = new Date(iso);
  return `${String(d.getDate()).padStart(2,'0')}.${String(d.getMonth()+1).padStart(2,'0')}.${d.getFullYear()}`;
}
function timeRemainingLabel(iso) {
  const d = daysUntil(iso);
  if (d < 0)  return { text: 'Poteklo', urgent: false };
  if (d === 0) return { text: 'Konča se danes', urgent: true };
  if (d === 1) return { text: 'Še 1 dan', urgent: true };
  if (d < 7)  return { text: `Še ${d} dni`, urgent: true };
  if (d < 14) return { text: 'Še 1 teden', urgent: false };
  if (d < 30) return { text: `Še ${Math.floor(d/7)} tednov`, urgent: false };
  const m = Math.floor(d/30);
  return { text: `Še ${m} ${m === 1 ? 'mesec' : (m < 5 ? 'mesece' : 'mesecev')}`, urgent: false };
}
function sortOffers(list) {
  // not expired & not upcoming first, then by validTo asc
  return [...list]
    .filter(o => !isExpired(o))
    .sort((a, b) => new Date(a.validTo) - new Date(b.validTo));
}

/* Featured offers shown on the Klubska kartica overview (matches both states) */
const KLUB_FEATURED = [
  { id: 'free-ship',    tierName: 'Bronze', tierCls: 'bronz',   lines: ['BESPLATNA', 'DOSTAVA'], title: 'Besplatna dostava',      color: 'linear-gradient(135deg,#13D3B0 0%,#0E8C8E 100%)' },
  { id: 'small-kitchen',tierName: 'Silver', tierCls: 'srebrni', big: '25%',  sub: 'POPUSTA',     title: 'Mali kuhinjski aparati', color: 'linear-gradient(135deg,#F0760C 0%,#C24A06 100%)' },
  { id: 'tv-mega',      tierName: 'Silver', tierCls: 'srebrni', big: '−100€',sub: 'MEGA KUPON',  title: 'TV pri nakupu nad 999€', color: 'linear-gradient(135deg,#1E4FA6 0%,#0A2A6B 100%)' },
  { id: 'phones',       tierName: 'Gold',   tierCls: 'zlati',   lines: ['RAZREZANA', 'CENA'],    title: 'Mobiteli',               color: 'linear-gradient(135deg,#13D3B0 0%,#0E8C8E 100%)' },
  { id: 'tvs',          tierName: 'Gold',   tierCls: 'zlati',   big: '25%',  sub: 'POPUSTA',     title: 'Televizori',             color: 'linear-gradient(135deg,#C7A050 0%,#A37C2C 100%)', locked: true },
  { id: 'white-goods',  tierName: 'Gold',   tierCls: 'zlati',   big: '25%',  sub: 'POPUSTA',     title: 'Bijela tehnika',         color: 'linear-gradient(135deg,#C7A050 0%,#A37C2C 100%)', locked: true },
];

function klubFeaturedCardHTML(o, isMember) {
  const locked = isMember ? !!o.locked : true;
  const head = o.big
    ? `<span class="lg">${o.big}</span><span class="sm2">${o.sub}</span>`
    : o.lines.map(l => `<span class="md">${l}</span>`).join('');
  const lockNote = isMember ? 'Odkleni z zlatnim nivojem' : 'Postani član za dostop do ponudbe';
  const overlay = `<div class="bb-offer-lock-overlay"><span class="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span><span class="txt">${lockNote}</span></div>`;
  return `
    <article class="bb-offer${locked ? ' is-locked' : ''}">
      <div class="bb-offer-thumb" style="background:${o.color}">
        <span class="bb-offer-tier-pill ${o.tierCls}">${o.tierName}</span>
        <div class="bb-foffer-head">${head}</div>
      </div>
      <div class="bb-offer-body">
        <div class="bb-offer-title">${o.title}</div>
        <div class="bb-offer-sub">Velja do 22.05.2026.</div>
        <button class="bb-foffer-redeem"${locked ? ' disabled' : ` data-fredeem="${o.id}"`}>Iskoristi <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></button>
      </div>
      ${locked ? overlay : ''}
    </article>
  `;
}

const KLUB_CHEV = '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>';

function renderKlub() {
  state.view = 'klub';
  setActiveSidebar('klub');

  const featured = KLUB_FEATURED.map(o => klubFeaturedCardHTML(o, TWEAKS.klubMember)).join('');
  const offersBlock = `
    <div class="bb-section-bar">
      <h2>Ekskluzivne ponude samo za tebe</h2>
      <span class="bb-section-link" data-goto="offers">Vse ponudbe ${KLUB_CHEV}</span>
    </div>
    <div class="bb-offer-grid featured">${featured}</div>
  `;

  document.getElementById('bb-content').innerHTML = TWEAKS.klubMember
    ? klubMemberHTML(offersBlock)
    : klubNonMemberHTML(offersBlock);

  wireKlubLinks();
}

function klubMemberHTML(offersBlock) {
  const k = KLUB.member;
  const tier = currentTier();
  const next = nextTier();
  const progress = next ? Math.min(100, Math.round((k.lifetimePoints / next.threshold) * 100)) : 100;
  const toGo = next ? next.threshold - k.lifetimePoints : 0;
  const visibleActivity = KLUB.activity.slice(0, 4).map(activityRowHTML).join('');

  return `
    <div class="bb-content-header">
      <h1>Klubska kartica</h1>
    </div>

    <div class="bb-klub-grid">
      <div class="bb-card-visual">
        <div class="bb-card-top">
          <span class="bb-card-brand">Big Bang Klub</span>
          <span class="bb-card-tier">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.1 8.6 22 9.6 17 14.5 18.2 21.5 12 18.2 5.8 21.5 7 14.5 2 9.6 8.9 8.6 12 2"/></svg>
            ${tier.name} član
          </span>
        </div>
        <div class="bb-card-uau">UAU<small>Klub</small></div>
        <div>
          <div class="bb-card-num-label">Številka kartice</div>
          <div class="bb-card-num">${k.cardNo}</div>
          <div class="bb-card-bottom" style="margin-top:14px">
            <span class="bb-card-name">${k.name}</span>
            <span class="bb-card-since">Član od: ${k.memberSince}</span>
          </div>
        </div>
      </div>

      <div class="bb-points-card">
        <div class="bb-points-value">${k.points.toLocaleString('sl-SI')}</div>
        <div class="bb-points-label">Zbranih točk</div>

        <div class="bb-tier-row" style="margin-top:24px">
          <span><strong>${tier.name}</strong> nivo</span>
          ${next ? `<span>${k.lifetimePoints.toLocaleString('sl-SI')} / ${next.threshold.toLocaleString('sl-SI')} točk</span>` : '<span>Najvišji nivo</span>'}
        </div>
        <div class="bb-tier-bar"><div class="bb-tier-bar-fill" style="width:${progress}%"></div></div>
        <div class="bb-tier-hint">${next ? `Še <strong>${toGo.toLocaleString('sl-SI')} točk</strong> za napredovanje na <strong>${next.name}</strong> nivo.` : 'Dosegel si najvišji nivo!'}</div>

        <div class="bb-barcode" aria-hidden="true"></div>
      </div>
    </div>

    ${offersBlock}

    <div class="bb-section-bar">
      <h2>Zgodovina točk</h2>
      <span class="bb-section-link" data-goto="activity">Vse aktivnosti ${KLUB_CHEV}</span>
    </div>
    <div class="bb-activity cards">${visibleActivity}</div>
  `;
}

function klubNonMemberHTML(offersBlock) {
  return `
    <div class="bb-content-header">
      <h1>Klubska kartica</h1>
    </div>

    <div class="bb-klub-hero">
      <div>
        <div class="bb-klub-hero-brand">UAU<span>Klub</span></div>
        <h2>Ekskluzivne ponude samo za člane UAU Kluba</h2>
        <p>Zbiraj točke z vsakim nakupom in oceno izdelka. Več kot zbereš, više se vzpneš in odkleneš več ugodnosti.</p>
        <div class="bb-klub-hero-actions">
          <button class="bb-klub-join" data-join>Postani član</button>
          <button class="bb-klub-hero-cta outline">Več o klubu</button>
        </div>
      </div>
      <div class="bb-klub-hero-art" aria-hidden="true">
        <svg width="84" height="84" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:#fff;opacity:0.9">
          <polygon points="12 2 15.1 8.6 22 9.6 17 14.5 18.2 21.5 12 18.2 5.8 21.5 7 14.5 2 9.6 8.9 8.6 12 2"/>
        </svg>
      </div>
    </div>

    ${offersBlock}
  `;
}

function offerCardHTML(o, userTierKey) {
  const tierInfo = tierByKey(o.requiredTier);
  const TIER_EN = { bronz: 'Bronze', srebrni: 'Silver', zlati: 'Gold' };
  const tierLabel = TIER_EN[o.requiredTier] || tierInfo.name;
  const locked = !isOfferAccessible(o, userTierKey);
  const upcoming = isUpcoming(o);
  const remain = timeRemainingLabel(o.validTo);
  const overlay = `<div class="bb-offer-lock-overlay"><span class="ic"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg></span><span class="txt">Odkleni z ${tierLabel} nivojem</span></div>`;

  return `
    <article class="bb-offer${locked ? ' is-locked' : ''}">
      <div class="bb-offer-thumb" style="background:${o.color}">
        <span class="bb-offer-tier-pill ${o.requiredTier}">${tierLabel}</span>
        ${!locked && remain.urgent ? '<span class="bb-offer-urgent">Konča se kmalu</span>' : ''}
        <div style="text-align:center;position:relative;z-index:0">${o.tag}<small>${o.sub}</small></div>
      </div>
      <div class="bb-offer-body">
        <div class="bb-offer-title">${o.title}</div>
        <div class="bb-offer-sub">
          ${upcoming
            ? `Na voljo od ${fmtOfferDate(o.validFrom)}`
            : `Velja do ${fmtOfferDate(o.validTo)} · <span class="${remain.urgent ? 'urgent-text' : ''}">${remain.text}</span>`}
        </div>
        ${locked
          ? ''
          : `<button class="bb-offer-cta" data-redeem="${o.id}">Unovči <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></button>`}
      </div>
      ${locked ? overlay : ''}
    </article>
  `;
}

function activityRowHTML(a) {
  const pos = a.points >= 0;
  return `
    <div class="bb-activity-row">
      <div class="bb-activity-icon${pos ? '' : ' neg'}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
          ${pos ? '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>' : '<line x1="5" y1="12" x2="19" y2="12"/>'}
        </svg>
      </div>
      <div>
        <div class="bb-activity-title">${a.title}</div>
        <div class="bb-activity-date">${a.date}</div>
      </div>
      <div class="bb-activity-points${pos ? '' : ' neg'}">${pos ? '+' : ''}${a.points} točk</div>
    </div>
  `;
}

function wireKlubLinks() {
  document.querySelectorAll('[data-goto]').forEach(el => {
    el.addEventListener('click', () => {
      const target = el.dataset.goto;
      if (target === 'offers') renderOffers();
      else if (target === 'activity') renderActivityFull();
    });
  });
  document.querySelectorAll('[data-redeem]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const id = el.dataset.redeem;
      const offer = KLUB.offers.find(o => o.id === id);
      if (offer) openRedeem(offer);
    });
  });
  document.querySelectorAll('[data-fredeem]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const f = KLUB_FEATURED.find(o => o.id === el.dataset.fredeem);
      if (f) openRedeem({ id: f.id, title: f.title, tag: f.big || f.title, sub: f.sub || '', requiredTier: f.tierCls, color: f.color, validFrom: '2026-05-01', validTo: '2026-05-22' });
    });
  });
  const join = document.querySelector('[data-join]');
  if (join) join.addEventListener('click', openKlubJoinFlyout);
}

function openKlubJoinFlyout() {
  document.querySelectorAll('.bb-flyout-overlay').forEach(o => o.remove());
  const cons = [
    ['Obveščanje o naših storitvah, novostih in posebnih ugodnostih', 'Na vaš e-poštni naslov vam bomo občasno poslali novice o izdelkih, storitvah, akcijah in posebnih ugodnostih, prilagojenih vašim zanimanjem.', true],
    ['Obveščanje o posebnih ugodnostih preko mobilnega telefona', 'Najboljše časovno omejene akcije in vaše osebne ugodnosti vam pošljemo tudi po SMS ali v mobilno aplikacijo — samo takrat, ko se res splača.', false],
    ['Obveščanje o aktualnih nagradnih igrah', 'Kot član UAU kluba sodelujete v ekskluzivnih nagradnih igrah. Obvestili vas bomo, ko se začne nova in ko boste med nagrajenci.', false],
  ];
  const overlay = document.createElement('div');
  overlay.className = 'bb-flyout-overlay show';
  overlay.innerHTML = `
    <aside class="bb-flyout" role="dialog" aria-label="Včlanitev v UAU klub">
      <div class="bb-flyout-head">
        ${STAR}
        <span class="ttl">Včlanitev v UAU klub</span>
        <button class="bb-flyout-close" aria-label="Zapri">${DEV_ICONS.x}</button>
      </div>
      <div class="bb-flyout-body bb-fly-form">
        <p class="bb-form-intro">Potrebujemo še nekaj podatkov, da vam lahko pošiljamo ugodnosti in vas obveščamo o novostih. Privolitve so prostovoljne in jih lahko kadar koli prekličete.</p>
        <div class="bb-fly-form-group">
          <div class="bb-field-row">
            <div class="bb-field"><label for="kj-ime">Ime</label><div class="bb-input-wrap"><input class="bb-input-field" id="kj-ime" type="text" value="Janez"></div></div>
            <div class="bb-field"><label for="kj-priimek">Priimek</label><div class="bb-input-wrap"><input class="bb-input-field" id="kj-priimek" type="text" value="Novak"></div></div>
          </div>
          <div class="bb-field"><label for="kj-phone">Telefon</label><div class="bb-input-wrap"><input class="bb-input-field" id="kj-phone" type="tel" placeholder="031 123 456" value="031 123 456"></div></div>
          <div class="bb-field"><label for="kj-dob">Datum rojstva <span style="font-weight:400;color:#8A8F9A">(neobvezno)</span></label><div class="bb-input-wrap"><input class="bb-input-field" id="kj-dob" type="text" inputmode="numeric" placeholder="dd/mm/yyyy" maxlength="10"><span class="bb-date-ic" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2.2"/><line x1="3.5" y1="9.5" x2="20.5" y2="9.5"/><line x1="8" y1="3" x2="8" y2="6.5"/><line x1="16" y1="3" x2="16" y2="6.5"/></svg></span></div></div>
        </div>
        <div class="bb-podatki-section" style="margin-top:26px">Soglasja</div>
        <label class="bb-reg-all"><input type="checkbox" class="bb-reg-chk" id="kj-allcon"> <span>Soglasje za vse spodaj navedene namene</span></label>
        ${cons.map(([t, more, on], i) => `
          <div class="bb-reg-con">
            <label class="top"><input type="checkbox" class="bb-reg-chk kj-onecon"${on ? ' checked' : ''}> <span>${t} <button class="bb-reg-more" data-kjmore="${i}">Prikaži več</button></span></label>
            <p class="bb-reg-moretxt" data-kjmoretxt="${i}">${more}</p>
          </div>`).join('')}
        <p class="bb-reg-note">Podatke obdelujemo v skladu s <a href="#">politiko zasebnosti</a> in <a href="#">pravili UAU kluba</a>.</p>
      </div>
      <div class="bb-flyout-foot">
        <button class="bb-bento-btn" id="kj-cancel">Prekliči</button>
        <button class="bb-bento-btn primary" id="kj-save">Včlani se</button>
      </div>
    </aside>
  `;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.querySelector('.bb-flyout-close').addEventListener('click', close);
  overlay.querySelector('#kj-cancel').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function escK(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escK); } });

  const dob = overlay.querySelector('#kj-dob');
  dob.addEventListener('input', () => {
    const d = dob.value.replace(/\D/g, '').slice(0, 8);
    let out = d.slice(0, 2);
    if (d.length > 2) out += '/' + d.slice(2, 4);
    if (d.length > 4) out += '/' + d.slice(4, 8);
    dob.value = out;
  });

  const all = overlay.querySelector('#kj-allcon');
  const ones = [...overlay.querySelectorAll('.kj-onecon')];
  const syncAll = () => { all.checked = ones.every(c => c.checked); };
  all.addEventListener('change', () => ones.forEach(c => { c.checked = all.checked; }));
  ones.forEach(c => c.addEventListener('change', syncAll));
  syncAll();

  overlay.querySelectorAll('[data-kjmore]').forEach(b => b.addEventListener('click', e => {
    e.preventDefault();
    const t = overlay.querySelector(`[data-kjmoretxt="${b.dataset.kjmore}"]`);
    b.textContent = t.classList.toggle('show') ? 'Prikaži manj' : 'Prikaži več';
  }));

  overlay.querySelector('#kj-save').addEventListener('click', () => {
    close();
    TWEAKS.klubMember = true;
    persistTweaks({ klubMember: true });
    syncTweaksUI();
    renderKlub();
    showToast('Dobrodošli v UAU Klub!');
  });
}

/* ============================================================
   Render: Vse ponude
   ============================================================ */
const OFFER_FILTERS = [
  { key: 'all',    label: 'Vse ponude' },
  { key: 'mine',   label: 'Dostopne zame' },
  { key: 'ending', label: 'Konča se kmalu' },
  { key: 'bronz',  label: 'Bronz nivo' },
  { key: 'srebrni',label: 'Srebrni nivo' },
  { key: 'zlati',  label: 'Zlati nivo' },
];
let offerFilter = 'all';

function renderOffers() {
  state.view = 'offers';
  setActiveSidebar('klub');

  const tier = currentTier();
  let list = sortOffers(KLUB.offers);

  if (offerFilter === 'mine')        list = list.filter(o => isOfferAccessible(o, tier.key));
  else if (offerFilter === 'ending') list = list.filter(o => timeRemainingLabel(o.validTo).urgent);
  else if (['bronz','srebrni','zlati'].includes(offerFilter))
                                     list = list.filter(o => o.requiredTier === offerFilter);

  const offerCards = list.map(o => offerCardHTML(o, tier.key)).join('');

  const chips = OFFER_FILTERS.map(f =>
    `<button class="bb-chip${f.key === offerFilter ? ' active' : ''}" data-filter="${f.key}">${f.label}</button>`
  ).join('');

  document.getElementById('bb-content').innerHTML = `
    <div class="bb-content-header">
      <button class="bb-back" data-back-klub aria-label="Nazaj">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 6 9 12 15 18"/></svg>
      </button>
      <h1>Vse ponude</h1>
    </div>

    <div class="bb-chips">${chips}</div>

    ${list.length
      ? `<div class="bb-offer-grid lg">${offerCards}</div>`
      : `<div style="padding:60px 20px;text-align:center;color:#6D6D6D;font-size:14px;">V tej kategoriji trenutno ni ponudb.</div>`}
  `;

  document.querySelector('[data-back-klub]').addEventListener('click', renderKlub);
  if (ROOT.classList.contains('mobile')) showMobileDetail('Vse ponude', () => { renderKlub(); showMobileDetail('Klubska kartica'); });
  document.querySelectorAll('[data-filter]').forEach(b => {
    b.addEventListener('click', () => {
      offerFilter = b.dataset.filter;
      renderOffers();
    });
  });
  document.querySelectorAll('[data-redeem]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const id = el.dataset.redeem;
      const offer = KLUB.offers.find(o => o.id === id);
      if (offer) openRedeem(offer);
    });
  });
}

/* ============================================================
   Render: Vse aktivnosti
   ============================================================ */
function renderActivityFull() {
  state.view = 'activity';
  setActiveSidebar('klub');

  // group by month-year
  const groups = {};
  KLUB.activity.forEach(a => {
    const parts = a.date.split('.');
    const key = `${parts[1]}.${parts[2]}`;
    (groups[key] = groups[key] || []).push(a);
  });
  const MONTHS = ['', 'januar', 'februar', 'marec', 'april', 'maj', 'junij', 'julij', 'avgust', 'september', 'oktober', 'november', 'december'];

  const groupsHTML = Object.entries(groups).map(([key, items]) => {
    const [m, y] = key.split('.');
    const label = `${MONTHS[parseInt(m, 10)]} ${y}`;
    return `
      <div class="bb-activity-day">${label}</div>
      <div class="bb-activity cards">${items.map(activityRowHTML).join('')}</div>
    `;
  }).join('');

  const totalEarned = KLUB.activity.filter(a => a.points > 0).reduce((s, a) => s + a.points, 0);
  const totalSpent = KLUB.activity.filter(a => a.points < 0).reduce((s, a) => s + a.points, 0);

  document.getElementById('bb-content').innerHTML = `
    <div class="bb-content-header">
      <button class="bb-back" data-back-klub aria-label="Nazaj">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 6 9 12 15 18"/></svg>
      </button>
      <h1>Zgodovina točk</h1>
    </div>

    <div class="bb-pts-summary">
      <div class="bb-pts-card">
        <div class="bb-pts-label">Trenutno stanje</div>
        <div class="bb-pts-value" style="color:var(--bb-blue-primary)">${KLUB.member.points.toLocaleString('sl-SI')} točk</div>
      </div>
      <div class="bb-pts-card">
        <div class="bb-pts-label">Skupaj zbrano</div>
        <div class="bb-pts-value" style="color:var(--bb-success)">+${totalEarned.toLocaleString('sl-SI')} točk</div>
      </div>
      <div class="bb-pts-card">
        <div class="bb-pts-label">Skupaj porabljeno</div>
        <div class="bb-pts-value" style="color:var(--bb-orange-bang)">${totalSpent.toLocaleString('sl-SI').replace('-', '−')} točk</div>
      </div>
    </div>

    ${groupsHTML}
  `;

  document.querySelector('[data-back-klub]').addEventListener('click', renderKlub);
  if (ROOT.classList.contains('mobile')) showMobileDetail('Zgodovina točk', () => { renderKlub(); showMobileDetail('Klubska kartica'); });
}

/* ============================================================
   Modal: Unovči
   ============================================================ */
function openRedeem(offer) {
  // generate readable code
  const rand = () => Math.random().toString(36).slice(2, 6).toUpperCase();
  const prefix = 'UAU-' + offer.id.toUpperCase().replace(/[^A-Z0-9]/g, '');
  const fullCode = `${prefix}-${rand()}`;

  const overlay = document.createElement('div');
  overlay.className = 'bb-modal-overlay';
  overlay.innerHTML = `
    <div class="bb-modal" role="dialog">
      <div class="bb-modal-head">
        <button class="bb-modal-close" aria-label="Zapri">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>
        </button>
        <div class="bb-modal-check">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 8"/></svg>
        </div>
        <h2>Ponuda je unovčena!</h2>
        <p class="bb-modal-sub">${offer.title}<br><strong style="color:var(--bb-text-primary)">${offer.tag} ${offer.sub.toLowerCase()}</strong></p>
      </div>
      <div class="bb-modal-body">
        <div class="bb-code-box">
          <span class="bb-code">${fullCode}</span>
          <button class="bb-copy-btn" data-copy="${fullCode}">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg>
            Kopiraj
          </button>
        </div>
        <p class="bb-modal-hint">Kodo vnesi v košarici ali jo pokaži na blagajni v poslovalnici.<br>Velja do <strong>${fmtOfferDate(offer.validTo)}</strong>.</p>
      </div>
    </div>
  `;
  document.body.appendChild(overlay);

  const close = () => overlay.remove();
  overlay.querySelector('.bb-modal-close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function esc(e) {
    if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
  });

  const copyBtn = overlay.querySelector('[data-copy]');
  copyBtn.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(fullCode); } catch (e) {}
    copyBtn.classList.add('ok');
    copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 8"/></svg> Kopirano';
    setTimeout(() => {
      copyBtn.classList.remove('ok');
      copyBtn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/></svg> Kopiraj';
    }, 1800);
  });
}

/* ============================================================
   Pregled (bento home) + placeholders
   ============================================================ */
const CHEVR = '<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg>';
const EXTLINK = '<svg width="14" height="14" viewBox="0 0 14 14" fill="none" ><path d="M5.83301 3.49967H3.49967C2.85534 3.49967 2.33301 4.02201 2.33301 4.66634V10.4997C2.33301 11.144 2.85534 11.6663 3.49967 11.6663H9.33301C9.97734 11.6663 10.4997 11.144 10.4997 10.4997V8.16634M11.6663 5.83301V2.33301H8.16634M11.6663 2.33301L5.83301 8.16634" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
const CART = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h2l2.2 11a1.5 1.5 0 0 0 1.5 1.2h8a1.5 1.5 0 0 0 1.5-1.2L20 7H6.2"/><circle cx="9" cy="20" r="1.2"/><circle cx="17" cy="20" r="1.2"/></svg>';
const STAR = '<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.1 8.6 22 9.6 17 14.5 18.2 21.5 12 18.2 5.8 21.5 7 14.5 2 9.6 8.9 8.6 12 2"/></svg>';

const PLACE_LABELS = {
  postopki: 'Aktivni postopki', naprave: 'Moje naprave', narocnine: 'Moje naročnine',
  mojikuponi: 'Moji kuponi', naslovi: 'Moji naslovi', arhiva: 'Arhiva kupnje',
  podatki: 'Moji podatki', kuponi: 'Kuponi', pomocnik: 'UAU pomoćnik',
};

function klubBentoCard() {
  const inner = TWEAKS.klubMember
    ? `<div class="bb-klub-lvl">
         <span class="bb-klub-lvl-name"><strong>Srebrni</strong> nivo</span>
         <span class="bb-klub-lvl-pts">1284 / 2000 točk</span>
       </div>
       <div class="bb-klub-bar"><div class="bb-klub-bar-fill" style="width:64.2%"></div></div>
       <div class="bb-klub-next">Še <b>716 točk</b> za napredovanje na <b>Zlati</b> nivo.</div>
       <button class="bb-bento-btn foot" data-go="klub">Odpri kartico ${CHEVR}</button>`
    : `<div class="bb-club-pill" style="background:#FBEAD4;color:#C57A12">${STAR} Niste član kluba</div>
       <div class="bb-muted">Včlanite se brezplačno in zbirajte ugodnosti ob nakupih.</div>
       <button class="bb-bento-btn primary foot" data-go="klub">Včlani se ${CHEVR}</button>`;
  return `<section class="bb-bento-card bb-span-2" data-screen-label="Klubska kartica">
    <div class="bb-bento-title">Klubska kartica</div>
    ${inner}
  </section>`;
}

function renderPregled() {
  state.view = 'pregled';
  setActiveSidebar('pregled');
  if (TWEAKS.newUser) {
    const content = document.getElementById('bb-content');
    content.innerHTML = `
      <h1 class="bb-greet">Pozdravljeni, Janez</h1>
      <div class="bb-bento-grid">
        <section class="bb-bento-card bb-span-6 bb-empty-state" data-screen-label="Prazen pregled">
          <div class="bb-empty-ic">${EMPTY_ICONS.box}</div>
          <div class="bb-empty-title">Vaš pregled je še prazen</div>
          <div class="bb-empty-msg">Ko boste opravili prvi nakup, bodo tukaj zbrana vaša naročila, postopki, naprave in jamstva na enem mestu.</div>
        </section>

        <section class="bb-bento-card bb-span-2" data-screen-label="Moji kuponi">
          <div class="bb-bento-title">Moji kuponi</div>
          <div class="bb-big-num">1</div>
          <div class="bb-muted">aktivni kupon</div>
          <button class="bb-bento-btn foot" data-go="mojikuponi">Poglej sve ${CHEVR}</button>
        </section>

        ${klubBentoCard()}

        <section class="bb-bento-card bb-span-2" data-screen-label="Košarica prodajalca">
          <div class="bb-bento-title">Košarica prodajalca</div>
          <div class="bb-cart-strong">Pripravljena košarica:</div>
          <div class="bb-muted">2 izdelka · svetovalec Maks</div>
          <button class="bb-bento-btn primary foot" data-go="trgovina">${CART} Odpri v trgovini ${CHEVR}</button>
        </section>
      </div>
    `;
    content.querySelectorAll('[data-go]').forEach(b => {
      b.addEventListener('click', () => {
        const t = b.dataset.go;
        if (t === 'klub') goKlub();
        else if (t === 'trgovina') { /* demo */ }
        else { renderPlaceholder(PLACE_LABELS[t] || 'Razdelek', t); window.scrollTo({ top: 0, behavior: 'smooth' }); }
      });
    });
    return;
  }
  const fridge = THUMBS.fridge, sw = THUMBS.switch;
  const content = document.getElementById('bb-content');
  content.innerHTML = `
    <h1 class="bb-greet">Pozdravljeni, Janez</h1>
    <div class="bb-bento-grid">

      <section class="bb-bento-card bb-span-3" data-screen-label="Jamstva">
        <div class="bb-bento-head">
          <div class="bb-bento-title">Jamstva</div>
          <span class="bb-count-badge">3</span>
        </div>
        <div class="bb-mini-list">
          <div class="bb-mini-row"><span class="bb-mini-name">TV SAMSUNG QE65QN990FTXXH...</span><span class="bb-pill green">Garancija aktivna</span></div>
          <div class="bb-mini-row"><span class="bb-mini-name">Blender Nutribullet NB907CP 900W</span><span class="bb-pill amber">Garancija poteče čez 41 dni</span></div>
          <div class="bb-mini-row"><span class="bb-mini-name">Mobitel Samsung Galaxy A16 4GB...</span><span class="bb-pill red">Potekla</span></div>
        </div>
        <button class="bb-bento-btn foot" data-go="naprave">Odpri naprave ${CHEVR}</button>
      </section>

      <section class="bb-bento-card bb-span-3" data-screen-label="Aktivni postopki">
        <div class="bb-bento-head">
          <div class="bb-bento-title">Aktivni postopki</div>
        </div>
        <div class="bb-mini-list">
          <div class="bb-mini-row"><span class="bb-mini-name"><strong>Reklamacija:</strong> Mobitel Samsung Galaxy A16 4GB...</span><span class="bb-pill amber">V obravnavi</span></div>
          <div class="bb-mini-row"><span class="bb-mini-name"><strong>Vračilo:</strong> Nutribullet NB907CP 900W</span><span class="bb-pill blue">Čaka prevzem</span></div>
        </div>
        <button class="bb-bento-btn foot" data-go="postopki">Odpri postopke ${CHEVR}</button>
      </section>

      <section class="bb-bento-card bb-span-6" data-screen-label="Aktivna naročila">
        <div class="bb-bento-head">
          <div class="bb-bento-title">Aktivna naročila</div>
          <button class="bb-bento-btn sm" data-go="orders">Vsa naročila ${CHEVR}</button>
        </div>
        <div class="bb-active-order ov">
          <div>
            <div class="bb-ao-title">Narudžba od 16.06.2025</div>
            <div class="bb-ao-id">id: ayhr-637-173702717</div>
            <div class="bb-ao-actions">
              <span class="bb-pill blue">U tranzitu</span>
              <button class="bb-bento-btn sm" data-noop>Podrobnosti ${EXTLINK}</button>
            </div>
          </div>
          <div class="bb-thumbs">
            <div class="bb-thumb bb-ao-thumb">${fridge}</div>
            <div class="bb-thumb bb-ao-thumb">${sw}</div>
            <div class="bb-thumb bb-ao-thumb"><span class="bb-thumb-more">+2</span></div>
          </div>
        </div>
        <div class="bb-active-order ov">
          <div>
            <div class="bb-ao-title">Narudžba od 12.02.2025</div>
            <div class="bb-ao-id">id: ayhr-637-173702717</div>
            <div class="bb-ao-actions">
              <span class="bb-pill green">Dostavljeno</span>
              <button class="bb-bento-btn sm" data-noop>Podrobnosti ${EXTLINK}</button>
            </div>
          </div>
          <div class="bb-thumbs">
            <div class="bb-thumb bb-ao-thumb">${fridge}</div>
          </div>
        </div>
      </section>

      <section class="bb-bento-card bb-span-2" data-screen-label="Moji kuponi">
        <div class="bb-bento-title">Moji kuponi</div>
        <div class="bb-big-num">3</div>
        <div class="bb-muted">aktivna kupona</div>
        <button class="bb-bento-btn foot" data-go="mojikuponi">Poglej sve ${CHEVR}</button>
      </section>

      ${klubBentoCard()}

      <section class="bb-bento-card bb-span-2" data-screen-label="Košarica prodajalca">
        <div class="bb-bento-title">Košarica prodajalca</div>
        <div class="bb-cart-strong">Pripravljena košarica:</div>
        <div class="bb-muted">2 izdelka · svetovalec Maks</div>
        <button class="bb-bento-btn primary foot" data-go="trgovina">${CART} Odpri v trgovini ${CHEVR}</button>
      </section>

    </div>
  `;

  content.querySelectorAll('[data-go]').forEach(b => {
    b.addEventListener('click', () => {
      const t = b.dataset.go;
      if (t === 'orders') goOrders();
      else if (t === 'klub') goKlub();
      else if (t === 'postopki') goPostopki();
      else if (t === 'naprave') goNaprave();
      else if (t === 'naslovi') goNaslovi();
      else if (t === 'trgovina') { /* demo */ }
      else { renderPlaceholder(PLACE_LABELS[t] || 'Razdelek', t); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    });
  });
  content.querySelectorAll('[data-detail]').forEach(b => {
    b.addEventListener('click', () => { setActiveSidebar('orders'); openDetail(parseInt(b.dataset.detail, 10)); });
  });
}

const EMPTY_ICONS = {
  box: '<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5V8z"/><path d="M3.3 7.5 12 12l8.7-4.5"/><line x1="12" y1="12" x2="12" y2="21"/></svg>',
  bag: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h12l1 13H5L6 7z"/><path d="M9 9V6a3 3 0 0 1 6 0v3"/></svg>',
  clock: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><polyline points="12 7 12 12 15.5 14"/></svg>',
  device: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="12" rx="2"/><line x1="9" y1="20" x2="15" y2="20"/><line x1="12" y1="15" x2="12" y2="20"/></svg>',
  sub: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-3-6.7"/><polyline points="21 4 21 9 16 9"/></svg>',
  archive: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="4" rx="1"/><path d="M5 8v11h14V8"/><line x1="10" y1="12" x2="14" y2="12"/></svg>',
  pin: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s7-6.3 7-11a7 7 0 1 0-14 0c0 4.7 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
};
function emptyStateHTML(title, message, icon, ctaLabel, ctaGo) {
  const cta = ctaLabel ? `<button class="bb-bento-btn primary bb-empty-cta" data-go="${ctaGo || 'trgovina'}">${ctaLabel}</button>` : '';
  return `<div class="bb-bento-card bb-empty-state"><div class="bb-empty-ic">${icon || EMPTY_ICONS.box}</div><div class="bb-empty-title">${title}</div><div class="bb-empty-msg">${message}</div>${cta}</div>`;
}

function renderPlaceholder(title, route) {
  state.view = 'placeholder';
  if (route) setActiveSidebar(route);
  document.getElementById('bb-content').innerHTML = `
    <h1 class="bb-greet">${title}</h1>
    <div class="bb-bento-card" style="min-height:380px;align-items:center;justify-content:center;text-align:center;gap:14px;">
      <div style="width:64px;height:64px;border-radius:50%;background:#F1F4F9;color:#9AA6BC;display:flex;align-items:center;justify-content:center;">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v5"/><circle cx="12" cy="16" r="0.6" fill="currentColor"/></svg>
      </div>
      <div class="bb-bento-title" style="font-size:18px;">${title}</div>
      <div class="bb-muted" style="margin-top:0;">Ta razdelek je v pripravi.</div>
    </div>`;
}

/* ============================================================
   Aktivni postopki
   ============================================================ */
const PROC_STEPS = ['Oddan zahtevek', 'V obravnavi', 'Rešitev / popravilo', 'Zaključeno'];
const PROC_ICONS = {
  return: '<svg width="24" height="24" viewBox="0 0 32 32" fill="none" ><path d="M4 18.667L17.3333 18.667C23.2244 18.667 28 13.8914 28 8.00033L28 5.33366M12 26.667L4 18.667L12 10.667" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
  gear: '<svg width="24" height="24" viewBox="0 0 32 32" fill="none" ><path d="M13.7662 5.75641C14.3347 3.41453 17.6653 3.41453 18.2338 5.75641C18.6011 7.26924 20.3343 7.98717 21.6638 7.17713C23.7217 5.92319 26.0768 8.27827 24.8229 10.3362C24.0128 11.6657 24.7308 13.3989 26.2436 13.7662C28.5855 14.3347 28.5855 17.6653 26.2436 18.2338C24.7308 18.6011 24.0128 20.3343 24.8229 21.6638C26.0768 23.7217 23.7217 26.0768 21.6638 24.8229C20.3343 24.0128 18.6011 24.7308 18.2338 26.2436C17.6653 28.5855 14.3347 28.5855 13.7662 26.2436C13.3989 24.7308 11.6657 24.0128 10.3362 24.8229C8.27827 26.0768 5.92319 23.7217 7.17713 21.6638C7.98717 20.3343 7.26924 18.6011 5.75641 18.2338C3.41453 17.6653 3.41453 14.3347 5.75641 13.7662C7.26924 13.3989 7.98717 11.6657 7.17713 10.3362C5.92319 8.27827 8.27827 5.92319 10.3362 7.17713C11.6657 7.98717 13.3989 7.26924 13.7662 5.75641Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20 16C20 18.2091 18.2091 20 16 20C13.7909 20 12 18.2091 12 16C12 13.7909 13.7909 12 16 12C18.2091 12 20 13.7909 20 16Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
};
const POSTOPKI = [
  { id: 'proc-vracilo', icon: 'return', kind: 'Vračilo', product: 'Mobitel Samsung Galaxy A16 4GB/128GB dual SIM tamnoplavi SM...', ref: 'REK-24-0188', status: { label: 'Odobreno - čaka prevzem', cls: 'blue' }, current: 2, note: { type: 'info', text: 'Kurir će preuzeti paket 11.06.' } },
  { id: 'proc-reklamacija', icon: 'gear', kind: 'Reklamacija', product: 'Aparat za kavu Krups KP1A3B10 Piccolo XS black/anthracite PF', ref: 'REK-24-0188', status: { label: 'V obravnavi', cls: 'amber' }, current: 2, note: { type: 'warn', text: 'Oddajte izdelek v poslovalnici do 20.06.' } },
];

function stepperHTML(current) {
  let html = '';
  PROC_STEPS.forEach((label, i) => {
    const cls = i < current ? 'done' : (i === current ? 'current' : '');
    html += `<div class="bb-step ${cls}"><span class="dot"></span><span class="lbl">${label}</span></div>`;
    if (i < PROC_STEPS.length - 1) {
      html += `<div class="bb-step-line ${i < current ? 'done' : ''}"></div>`;
    }
  });
  return html;
}

function renderPostopki() {
  state.view = 'postopki';
  setActiveSidebar('postopki');
  if (TWEAKS.newUser) {
    document.getElementById('bb-content').innerHTML = `
      <h1 class="bb-greet">Aktivni postopki</h1>
      ${emptyStateHTML('Ni aktivnih postopkov', 'Tukaj se bodo prikazali vaši postopki vračila, reklamacije ali servisa, ko jih boste sprožili.', EMPTY_ICONS.clock)}
    `;
    return;
  }
  const PENCIL = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" ><path d="M5.33333 8.00033H5.34M8 8.00033H8.00667M10.6667 8.00033H10.6733M14 8.00033C14 10.9458 11.3137 13.3337 8 13.3337C6.97382 13.3337 6.00781 13.1047 5.16311 12.701L2 13.3337L2.92999 10.8537C2.34104 10.0286 2 9.04984 2 8.00033C2 5.05481 4.68629 2.66699 8 2.66699C11.3137 2.66699 14 5.05481 14 8.00033Z" stroke="currentColor" stroke-width="0.933333" stroke-linecap="round" stroke-linejoin="round"></path></svg>';
  const INFO = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><circle cx="12" cy="8" r="0.7" fill="currentColor"/></svg>';
  const WARN = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 2.5 20h19z"/><line x1="12" y1="10" x2="12" y2="14.5"/><circle cx="12" cy="17.2" r="0.7" fill="currentColor"/></svg>';

  const cards = POSTOPKI.map(p => `
    <article class="bb-proc-card" data-screen-label="Postopek ${p.kind}">
      <div class="bb-proc-icon">${PROC_ICONS[p.icon]}</div>
      <div class="bb-proc-title">
        <div class="bb-proc-kind">${p.kind}</div>
        <div class="bb-proc-name">${p.product}</div>
      </div>
      <div class="bb-proc-meta">
        <span class="bb-proc-ref">Ref. ${p.ref}</span>
        <button class="bb-bento-btn sm" data-svet="${p.id}">${PENCIL} Pišite svetovalcu</button>
      </div>
      <div class="bb-proc-content">
        <span class="bb-pill ${p.status.cls} bb-proc-status">${p.status.label}</span>
        <div class="bb-stepper">${stepperHTML(p.current)}</div>
        <div class="bb-proc-note ${p.note.type}">${p.note.type === 'info' ? INFO : WARN}<span>${p.note.text}</span></div>
      </div>
    </article>
  `).join('');

  document.getElementById('bb-content').innerHTML = `
    <h1 class="bb-greet">Aktivni postopki</h1>
    <div class="bb-proc-list">${cards}</div>
  `;
  document.querySelectorAll('[data-svet]').forEach(b => b.addEventListener('click', () => openSvetovalec(b.dataset.svet)));
}

function goPregled() { setActiveSidebar('pregled'); renderPregled(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function goOrders() { state.view = 'list'; state.orderIdx = null; setActiveSidebar('orders'); renderList(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function goKlub() { renderKlub(); window.scrollTo({ top: 0, behavior: 'smooth' }); }
function goPostopki() { renderPostopki(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ============================================================
   Naprava one-click actions — Vračilo / Reklamacija / Servis
   ============================================================ */
const NAPRAVA_ACTIONS = {
  return:  { title: 'Vra\u010dilo',     icon: 'ret',     reasons: ['Izdelek mi ne ustreza', 'Napa\u010dno naro\u010den izdelek', 'Po\u0161kodovan ob dostavi', 'Premislil sem si', 'Drugo'], cta: 'Oddaj zahtevek za vra\u010dilo', toast: 'Zahtevek za vra\u010dilo je bil oddan' },
  claim:   { title: 'Reklamacija', icon: 'claim',   reasons: ['Izdelek ne deluje', 'Napaka v delovanju', 'Manjka del ali dodatek', 'Fizi\u010dna po\u0161kodba', 'Drugo'], cta: 'Oddaj reklamacijo', toast: 'Reklamacija je bila oddana' },
  service: { title: 'Servis',      icon: 'service', reasons: ['Redni servis', 'Okvara', 'Nadgradnja ali popravilo', '\u010ci\u0161\u010denje in vzdr\u017eevanje', 'Drugo'], cta: 'Oddaj zahtevek za servis', toast: 'Zahtevek za servis je bil oddan' },
};

function openNapravaAction(type, d) {
  const cfg = NAPRAVA_ACTIONS[type];
  if (!cfg) return;
  const reasonOpts = cfg.reasons.map(r => `<option value="${r}">${r}</option>`).join('');

  document.querySelectorAll('.bb-flyout-overlay').forEach(o => o.remove());
  const overlay = document.createElement('div');
  overlay.className = 'bb-flyout-overlay';
  overlay.innerHTML = `
    <aside class="bb-flyout" role="dialog" aria-label="${cfg.title}">
      <div class="bb-flyout-head">
        ${DEV_ICONS[cfg.icon]}
        <span class="ttl">${cfg.title}</span>
        <button class="bb-flyout-close" aria-label="Zapri">${DEV_ICONS.x}</button>
      </div>
      <form class="bb-flyout-body bb-fly-form" id="bb-act-form" novalidate>
        <div class="bb-fly-context">
          <span class="ic">${DEV_ICONS[cfg.icon]}</span>
          <div>
            <div class="kind">${cfg.title}</div>
            <div class="prod">${d.name}</div>
            <div class="ref">${d.podatki.sku !== '\u2014' ? 'SKU ' + d.podatki.sku + ' \u00b7 ' : ''}Nakup ${d.podatki.date}</div>
          </div>
        </div>

        <div class="bb-fly-form-group">
          <div class="bb-field">
            <label for="a-reason">Razlog</label>
            <div class="bb-select-wrap-field">
              <select class="bb-select-field" id="a-reason">${reasonOpts}</select>
              <span class="chev">${DEV_ICONS.down}</span>
            </div>
          </div>
          <div class="bb-field">
            <label for="a-desc">Opis te\u017eave</label>
            <textarea class="bb-textarea-field" id="a-desc" placeholder="Opi\u0161ite te\u017eavo ali razlog \u010dim natan\u010dneje..." required></textarea>
          </div>
        </div>

        <div class="bb-fly-form-group">
          <h3 class="bb-fly-h">Priloga <span style="font-weight:400;color:#8A8F9A">(neobvezno)</span></h3>
          <label class="bb-upload" id="bb-act-up">
            <span class="bb-upload-ic">${DEV_ICONS.paperclip}</span>
            <span class="bb-upload-txt">
              <strong id="bb-act-upname">Pripni fotografijo ali dokument</strong>
              <span><span class="browse">Prebrskaj datoteke</span> \u00b7 slika, PDF ali dokument</span>
            </span>
            <input type="file" accept="image/*,application/pdf,.doc,.docx" hidden id="bb-act-upinput">
          </label>
        </div>
      </form>
      <div class="bb-flyout-foot">
        <button class="bb-bento-btn" id="bb-act-back"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 6 9 12 15 18"/></svg> Nazaj</button>
        <button class="bb-bento-btn primary" id="bb-act-send">${DEV_ICONS.send} ${cfg.cta}</button>
      </div>
    </aside>
  `;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.querySelector('.bb-flyout-close').addEventListener('click', close);
  overlay.querySelector('#bb-act-back').addEventListener('click', () => { close(); openNaprava(d.id); });
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function escA(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escA); } });

  const upInput = overlay.querySelector('#bb-act-upinput');
  upInput.addEventListener('change', () => {
    const f = upInput.files[0];
    if (f) {
      overlay.querySelector('#bb-act-upname').textContent = f.name;
      overlay.querySelector('#bb-act-up').classList.add('has-file');
    }
  });

  overlay.querySelector('#bb-act-send').addEventListener('click', () => {
    const desc = overlay.querySelector('#a-desc');
    if (!desc.value.trim()) { desc.classList.add('error'); desc.focus(); return; }
    close();
    showToast(cfg.toast);
  });
}

/* ============================================================
   Pišite svetovalcu — ongoing support chat
   ============================================================ */
const CHATS = {
  'proc-vracilo': [
    { from: 'system', text: 'Zahtevek REK-24-0188 je bil ustvarjen.', time: '08.06. 09:12' },
    { from: 'support', who: 'Maja (podpora)', text: 'Pozdravljeni! Vaš zahtevek za vračilo izdelka smo prejeli in ga pregledujemo. Javimo se v najkrajšem možnem času.', time: '08.06. 09:40' },
    { from: 'user', text: 'Hvala, kdaj lahko pričakujem prevzem paketa?', time: '08.06. 10:02' },
    { from: 'system', text: 'Status posodobljen: Odobreno — čaka prevzem', time: '09.06. 14:25' },
    { from: 'support', who: 'Maja (podpora)', text: 'Vračilo je odobreno. Kurir bo paket prevzel 11.06.2025 med 9h in 17h. Prosimo, pripravite izdelek v originalni embalaži.', time: '09.06. 14:26' },
  ],
  'proc-reklamacija': [
    { from: 'system', text: 'Zahtevek REK-24-0188 je bil ustvarjen.', time: '02.06. 11:05' },
    { from: 'support', who: 'Luka (servis)', text: 'Pozdravljeni! Reklamacijo smo zabeležili. Izdelek bo pregledal naš servisni oddelek.', time: '02.06. 11:30' },
    { from: 'system', text: 'Status posodobljen: V obravnavi', time: '03.06. 08:15' },
    { from: 'support', who: 'Luka (servis)', text: 'Diagnostika je v teku. Pričakovani rok za odgovor je 5 delovnih dni.', time: '04.06. 13:48' },
  ],
};
const SVET_REPLY = 'Hvala za vaše sporočilo. Svetovalec ga je prejel in vam bo odgovoril v najkrajšem možnem času.';

function chatNow() {
  const d = new Date();
  const p2 = n => String(n).padStart(2, '0');
  return `${p2(d.getDate())}.${p2(d.getMonth() + 1)}. ${p2(d.getHours())}:${p2(d.getMinutes())}`;
}

function chatMsgHTML(m) {
  if (m.from === 'system') return `<div class="bb-chat-sys">${m.text}</div>`;
  return `
    <div class="bb-chat-msg ${m.from}">
      ${m.from === 'support' && m.who ? `<div class="bb-chat-meta"><span class="who">${m.who}</span></div>` : ''}
      <div class="bubble">${m.text}</div>
      <div class="bb-chat-meta">${m.time}</div>
    </div>
  `;
}

function openSvetovalec(id) {
  const p = POSTOPKI.find(x => x.id === id) || POSTOPKI[0];
  if (!CHATS[p.id]) CHATS[p.id] = [{ from: 'system', text: `Zahtevek ${p.ref} je bil ustvarjen.`, time: chatNow() }];
  const msgs = CHATS[p.id];

  document.querySelectorAll('.bb-flyout-overlay').forEach(o => o.remove());
  const overlay = document.createElement('div');
  overlay.className = 'bb-flyout-overlay';
  overlay.innerHTML = `
    <aside class="bb-flyout" role="dialog" aria-label="Pogovor s svetovalcem">
      <div class="bb-flyout-head">
        ${DEV_ICONS.chat}
        <span class="ttl">Pogovor s svetovalcem</span>
        <button class="bb-flyout-close" aria-label="Zapri">${DEV_ICONS.x}</button>
      </div>
      <div class="bb-flyout-body bb-chat-body" id="bb-chat-body">
        <div class="bb-fly-context">
          <span class="ic">${DEV_ICONS.chat}</span>
          <div>
            <div class="kind">${p.kind}</div>
            <div class="prod">${p.product}</div>
            <div class="ref">Ref. ${p.ref}</div>
          </div>
        </div>
        <div class="bb-chat-stream" id="bb-chat-stream">${msgs.map(chatMsgHTML).join('')}</div>
      </div>
      <div class="bb-flyout-foot">
        <div class="bb-chat-composer">
          <textarea class="bb-chat-input" id="bb-chat-input" rows="1" placeholder="Napišite sporočilo..."></textarea>
          <button class="bb-chat-send" id="bb-chat-send" aria-label="Pošlji" disabled>${DEV_ICONS.send}</button>
        </div>
      </div>
    </aside>
  `;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.querySelector('.bb-flyout-close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function escS(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escS); } });

  const body = overlay.querySelector('#bb-chat-body');
  const stream = overlay.querySelector('#bb-chat-stream');
  const input = overlay.querySelector('#bb-chat-input');
  const sendBtn = overlay.querySelector('#bb-chat-send');
  const scrollBottom = () => { body.scrollTop = body.scrollHeight; };
  requestAnimationFrame(scrollBottom);

  const autosize = () => { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 120) + 'px'; };
  input.addEventListener('input', () => { sendBtn.disabled = !input.value.trim(); autosize(); });

  const send = () => {
    const text = input.value.trim();
    if (!text) return;
    msgs.push({ from: 'user', text, time: chatNow() });
    stream.insertAdjacentHTML('beforeend', chatMsgHTML(msgs[msgs.length - 1]));
    input.value = ''; sendBtn.disabled = true; autosize(); scrollBottom();
    setTimeout(() => {
      if (!document.body.contains(overlay)) return;
      msgs.push({ from: 'support', who: 'Maja (podpora)', text: SVET_REPLY, time: chatNow() });
      stream.insertAdjacentHTML('beforeend', chatMsgHTML(msgs[msgs.length - 1]));
      scrollBottom();
    }, 1300);
  };
  sendBtn.addEventListener('click', send);
  input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } });
  setTimeout(() => { try { input.focus({ preventScroll: true }); } catch (e) { input.focus(); } }, 360);
}

/* ============================================================
   Moje naročnine
   ============================================================ */
const NAROCNINE = [
  {
    icon: 'shield',
    title: 'Zavarovanje',
    product: 'Mobitel Samsung Galaxy A16 4GB/128GB dual SIM tamnoplavi SM...',
    status: { label: 'Aktivna', cls: 'ok' },
    price: '9,90 € / mjesečno · sljedeći račun 01.07.2025.',
    cta: 'Upravljanje',
  },
  {
    icon: 'lock',
    title: 'Varnostne storitve Premium',
    product: 'Aparat za kavu Krups KP1A3B10 Piccolo XS black/anthracite PF',
    status: { label: 'Dospjelo plaćanje', cls: 'due' },
    price: '9,90 € / mjesečno · sljedeći račun 01.07.2025.',
    cta: 'Ažuriranje plaćanja',
  },
];

const SUB_ICONS = {
  shield: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3 5 6v5.5c0 4.3 2.9 7.4 7 8.5 4.1-1.1 7-4.2 7-8.5V6z"/></svg>',
  lock: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/></svg>',
};

function renderNarocnine() {
  state.view = 'narocnine';
  setActiveSidebar('narocnine');

  if (TWEAKS.newUser) {
    document.getElementById('bb-content').innerHTML = `
      <div class="bb-content-header"><h1>Moje naročnine</h1></div>
      ${emptyStateHTML('Nimate aktivnih naročnin', 'Tukaj se bodo prikazale vaše naročnine na storitve in vsebine, ko jih sklenete.', EMPTY_ICONS.sub)}
    `;
    return;
  }

  const cards = NAROCNINE.map(s => `
    <article class="bb-sub" data-screen-label="Naročnina ${s.title}">
      <div class="bb-sub-icon">${SUB_ICONS[s.icon]}</div>
      <div class="bb-sub-titlewrap">
        <div class="bb-sub-title">${s.title}</div>
        <div class="bb-sub-product">${s.product}</div>
      </div>
      <button class="bb-sub-cta">${s.cta}<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 6 15 12 9 18"/></svg></button>
      <div class="bb-sub-content">
        <div class="bb-sub-meta">
          <span class="bb-sub-status ${s.status.cls}">${s.status.label}</span>
          <span class="bb-sub-price">${s.price}</span>
        </div>
      </div>
    </article>
  `).join('');

  document.getElementById('bb-content').innerHTML = `
    <div class="bb-content-header"><h1>Moje naročnine</h1></div>
    <div class="bb-subs">${cards}</div>
  `;
}

function goNarocnine() { renderNarocnine(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ============================================================
   UAU pomočnik (AI assistant)
   ============================================================ */
const POM_ROBOT = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="8" width="16" height="11" rx="3"/><path d="M12 8V4"/><circle cx="12" cy="3" r="1.4" fill="currentColor" stroke="none"/><circle cx="9" cy="13" r="1.2" fill="currentColor" stroke="none"/><circle cx="15" cy="13" r="1.2" fill="currentColor" stroke="none"/><path d="M2 12v3M22 12v3"/></svg>';
const POM_INTRO = 'Pozdravljeni, Janez. Vidim vaše naprave, naročila in postopke. Kako lahko pomagam?';
const POM_SUGGEST = [
  'Kje je moje naročilo 837-172702717?',
  'Začni vračilo za Nintendo Switch',
  'Do kdaj velja garancija za LG OLED?',
  'Kako aktiviram podaljšano garancijo?',
];
const POM_ANSWERS = {
  'Kje je moje naročilo 837-172702717?': { text: 'Vaše naročilo <strong>837-172702717</strong> je trenutno <strong>v tranzitu</strong> — predvidena dostava 18.06.2025. Želite, da vas obvestim ob dostavi?', replies: ['Da, obvesti me ob dostavi', 'Prikaži podrobnosti naročila'] },
  'Začni vračilo za Nintendo Switch': { text: 'Seveda. Za Nintendo Switch lahko odprem zahtevek za <strong>vračilo</strong>. Je izdelek nerabljen in v originalni embalaži? Postopek lahko dokončam namesto vas.', replies: ['Da, začni vračilo', 'Ne, izdelek je rabljen'] },
  'Do kdaj velja garancija za LG OLED?': { text: 'Garancija za vaš <strong>LG OLED</strong> velja do <strong>14.03.2027</strong> (še ~2 leti). Za ta izdelek je na voljo tudi podaljšana garancija.', replies: ['Kako aktiviram podaljšano garancijo?', 'Prikaži vse moje garancije'] },
  'Kako aktiviram podaljšano garancijo?': { text: 'Podaljšano garancijo aktivirate v <strong>Moje naprave → izberite napravo → Podaljšaj garancijo</strong>. Vas usmerim tja?', replies: ['Da, odpri Moje naprave', 'Koliko stane podaljšana garancija?'] },
  'Da, obvesti me ob dostavi': { text: 'Odlično — poslal vam bom obvestilo po e-pošti in v aplikaciji ob dostavi paketa. Lahko pomagam še s čim?', replies: ['Prikaži vsa naročila', 'Ne, hvala'] },
  'Da, začni vračilo': { text: 'V redu, pripravljam zahtevek za vračilo. Postopek boste videli v <strong>Aktivni postopki</strong>. Vas usmerim tja?', replies: ['Da, odpri postopke', 'Ne, hvala'] },
  'Da, odpri Moje naprave': { text: 'Odpiram razdelek <strong>Moje naprave</strong>, kjer lahko izberete napravo in podaljšate garancijo.', replies: [] },
};
const POM_FALLBACK = { text: 'Hvala za vprašanje. Preveril bom kontekst vašega profila in vam pomagal. Če želite, lahko pogovor kadar koli predam človeškemu svetovalcu.', replies: ['Predaj človeškemu svetovalcu', 'Prikaži moja naročila'] };
let pomMsgs = [{ from: 'assistant', text: POM_INTRO }];

function pomMsgHTML(m) {
  return `
    <div class="bb-pom-msg ${m.from}">
      ${m.from === 'assistant' ? `<div class="bb-pom-avatar">${POM_ROBOT}</div>` : ''}
      <div class="bb-pom-bubble">${m.text}</div>
    </div>`;
}

function renderPomocnik() {
  state.view = 'pomocnik';
  setActiveSidebar('pomocnik');
  const chips = POM_SUGGEST.map(q => `<button class="bb-pom-chip" data-pom-q="${q.replace(/"/g, '&quot;')}">${q}</button>`).join('');
  document.getElementById('bb-content').innerHTML = `
    <div class="bb-content-header"><h1>UAU pomočnik</h1></div>
    <div class="bb-pom-sub" style="margin:-16px 0 22px;font-size:15px;color:#6D6D6D;letter-spacing:-0.005em;">AI pomočnik s kontekstom vašega profila</div>
    <div class="bb-pom-card">
      <div class="bb-pom-stream" id="bb-pom-stream">${pomMsgs.map(pomMsgHTML).join('')}</div>
      <div class="bb-pom-suggestions" id="bb-pom-sug">${chips}</div>
      <div class="bb-pom-composer">
        <input type="text" class="bb-pom-input" id="bb-pom-input" placeholder="Vprašajte UAU pomočnika…">
        <button class="bb-pom-send" id="bb-pom-send" aria-label="Pošlji">${DEV_ICONS.send}</button>
      </div>
    </div>`;

  const stream = document.getElementById('bb-pom-stream');
  const input = document.getElementById('bb-pom-input');
  const sug = document.getElementById('bb-pom-sug');

  const renderChips = (list) => {
    if (!sug) return;
    if (!list || !list.length) { sug.style.display = 'none'; sug.innerHTML = ''; return; }
    sug.innerHTML = list.map(q => `<button class="bb-pom-chip" data-pom-q="${q.replace(/"/g, '&quot;')}">${q}</button>`).join('');
    sug.style.display = 'flex';
    sug.querySelectorAll('[data-pom-q]').forEach(b => b.addEventListener('click', () => ask(b.dataset.pomQ)));
  };

  const ask = (q) => {
    const text = q.trim();
    if (!text) return;
    pomMsgs.push({ from: 'user', text });
    stream.insertAdjacentHTML('beforeend', pomMsgHTML(pomMsgs[pomMsgs.length - 1]));
    input.value = '';
    if (sug) { sug.style.display = 'none'; }
    stream.scrollIntoView({ block: 'end' });
    setTimeout(() => {
      const ans = POM_ANSWERS[text] || POM_FALLBACK;
      pomMsgs.push({ from: 'assistant', text: ans.text });
      stream.insertAdjacentHTML('beforeend', pomMsgHTML(pomMsgs[pomMsgs.length - 1]));
      stream.scrollIntoView({ block: 'end' });
      renderChips(ans.replies);
    }, 700);
  };

  document.getElementById('bb-pom-send').addEventListener('click', () => ask(input.value));
  input.addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); ask(input.value); } });
  document.querySelectorAll('[data-pom-q]').forEach(b => b.addEventListener('click', () => ask(b.dataset.pomQ)));
}

function goPomocnik() { renderPomocnik(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ============================================================
   Moji naslovi
   ============================================================ */
const NASLOVI = [
  { id: 'addr-lj', firstName: 'Janez', lastName: 'Novak', street: 'Preserbova ulica', houseNo: '20', postal: '1000', kraj: 'Ljubljana', country: 'Slovenija', phone: '031 123 456', isDefault: true },
  { id: 'addr-mb', firstName: 'Janez', lastName: 'Novak', street: 'Cankarjeva ulica', houseNo: '30', postal: '2000', kraj: 'Maribor', country: 'Slovenija', phone: '031 123 456', isDefault: false },
];
const COUNTRIES = ['Slovenija', 'Hrvaška', 'Avstrija', 'Italija', 'Madžarska'];

const ADDR_PENCIL = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>';
const ADDR_TRASH = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>';
const ADDR_CHECK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

function renderNaslovi() {
  state.view = 'naslovi';
  setActiveSidebar('naslovi');

  if (TWEAKS.newUser) {
    document.getElementById('bb-content').innerHTML = `
      <div class="bb-content-header has-action">
        <h1>Moji naslovi</h1>
        <button class="bb-addr-add" data-addr-add>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Dodaj naslov
        </button>
      </div>
      ${emptyStateHTML('Nimate shranjenih naslovov', 'Dodajte naslov za dostavo, da bo samodejno izbran ob naslednjem naročilu.', EMPTY_ICONS.pin)}
    `;
    document.querySelector('[data-addr-add]').addEventListener('click', () => openNaslovForm(null));
    return;
  }

  const cards = NASLOVI.map(a => `
    <article class="bb-addr" data-screen-label="Naslov ${a.kraj}">
      <div>
        <div class="bb-addr-lines">
          <div class="nm">${a.firstName} ${a.lastName}</div>
          <div>${a.street} ${a.houseNo}</div>
          <div>${a.postal}, ${a.kraj}</div>
          <div>${a.country}</div>
          <div>${a.phone}</div>
        </div>
        ${a.isDefault ? `<div class="bb-addr-default">${ADDR_CHECK} Privzeti naslov za dostavo</div>` : ''}
      </div>
      <div class="bb-addr-actions">
        <button class="bb-bento-btn sm" data-addr-edit="${a.id}">${ADDR_PENCIL} Uredi</button>
        <button class="bb-bento-btn sm bb-btn-danger" data-addr-del="${a.id}"${a.isDefault ? ' disabled' : ''}>${ADDR_TRASH} Izbriši</button>
      </div>
    </article>
  `).join('');

  document.getElementById('bb-content').innerHTML = `
    <div class="bb-content-header has-action">
      <h1>Moji naslovi</h1>
      <button class="bb-addr-add" data-addr-add>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        Dodaj naslov
      </button>
    </div>
    <div class="bb-addr-list">${cards}</div>
  `;

  document.querySelector('[data-addr-add]').addEventListener('click', () => openNaslovForm(null));
  document.querySelectorAll('[data-addr-edit]').forEach(b => b.addEventListener('click', () => openNaslovForm(b.dataset.addrEdit)));
  document.querySelectorAll('[data-addr-del]:not([disabled])').forEach(b => b.addEventListener('click', () => {
    const id = b.dataset.addrDel;
    const idx = NASLOVI.findIndex(x => x.id === id);
    if (idx < 0) return;
    const addr = NASLOVI[idx];
    const label = `${addr.street} ${addr.houseNo}, ${addr.kraj}`;
    openConfirm({
      title: 'Izbriši naslov',
      message: `Ali ste prepričani, da želite izbrisati naslov <strong>${label}</strong>? Po izteku časa tega dejanja ne bo mogoče razveljaviti.`,
      confirmLabel: 'Izbriši',
      danger: true,
      onConfirm: () => {
        const removed = NASLOVI.splice(idx, 1)[0];
        renderNaslovi();
        const list = document.querySelector('.bb-addr-list');
        showUndoBar(`Naslov <strong>${removed.street} ${removed.houseNo}</strong> je bil izbrisan.`, () => {
          NASLOVI.splice(Math.min(idx, NASLOVI.length), 0, removed);
          renderNaslovi();
          showToast('Brisanje razveljavljeno');
        }, { container: list, index: idx });
      },
    });
  }));
}

/* Generic confirm dialog */
const ICON_WARN = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/><line x1="12" y1="9" x2="12" y2="13.5"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
const ICON_X = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>';
const ICON_UNDO = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 14 4 9l5-5"/><path d="M4 9h11a6 6 0 0 1 0 12h-3"/></svg>';

function openConfirm({ title, message, confirmLabel, danger, onConfirm }) {
  const ov = document.createElement('div');
  ov.className = 'bb-confirm-overlay';
  ov.innerHTML = `
    <div class="bb-confirm" role="dialog" aria-modal="true" aria-label="${title}">
      <div class="bb-confirm-head">
        <h3>${title}</h3>
        <button class="bb-confirm-close" aria-label="Zapri">${ICON_X}</button>
      </div>
      <div class="bb-confirm-body">
        <span class="bb-confirm-ic">${ICON_WARN}</span>
        <p>${message}</p>
      </div>
      <div class="bb-confirm-foot">
        <button class="bb-confirm-cancel">Prekliči</button>
        <button class="bb-confirm-ok${danger ? ' danger' : ''}">${confirmLabel}</button>
      </div>
    </div>
  `;
  document.body.appendChild(ov);
  requestAnimationFrame(() => ov.classList.add('show'));
  const close = () => { ov.classList.remove('show'); setTimeout(() => ov.remove(), 160); };
  ov.querySelector('.bb-confirm-close').addEventListener('click', close);
  ov.querySelector('.bb-confirm-cancel').addEventListener('click', close);
  ov.addEventListener('click', e => { if (e.target === ov) close(); });
  document.addEventListener('keydown', function escC(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escC); } });
  ov.querySelector('.bb-confirm-ok').addEventListener('click', () => { close(); onConfirm && onConfirm(); });
}

/* Undo notification bar with 10s countdown */
let undoTimer = null;
function showUndoBar(message, onUndo, mount) {
  const existing = document.getElementById('bb-undo');
  if (existing) { clearTimeout(undoTimer); existing.remove(); }

  const bar = document.createElement('div');
  bar.className = 'bb-undo-bar';
  bar.id = 'bb-undo';
  bar.innerHTML = `
    <span class="msg">${message}</span>
    <span class="bb-undo-ring">
      <svg width="32" height="32" viewBox="0 0 32 32">
        <circle cx="16" cy="16" r="13" fill="none" stroke="rgba(0,80,160,0.22)" stroke-width="2.5"/>
        <circle class="prog" cx="16" cy="16" r="13" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" transform="rotate(-90 16 16)" stroke-dasharray="81.68" stroke-dashoffset="0"/>
      </svg>
      <span class="sec">10</span>
    </span>
    <button class="bb-undo-btn">${ICON_UNDO} Razveljavi</button>
    <button class="bb-undo-close" aria-label="Zapri">${ICON_X}</button>
  `;

  if (mount && mount.before && mount.before.parentNode) {
    mount.before.parentNode.insertBefore(bar, mount.before);
  } else if (mount && mount.container) {
    bar.style.margin = '0';
    const ref = mount.container.children[mount.index];
    mount.container.insertBefore(bar, ref || null);
  } else {
    const content = document.getElementById('bb-content');
    content.parentNode.insertBefore(bar, content);
  }

  const secEl = bar.querySelector('.sec');
  let sec = 10;
  const interval = setInterval(() => {
    sec--;
    if (secEl) secEl.textContent = sec;
    if (sec <= 0) { clearInterval(interval); finalize(); }
  }, 1000);

  const finalize = () => { clearTimeout(undoTimer); clearInterval(interval); bar.remove(); };
  undoTimer = setTimeout(finalize, 10000);

  bar.querySelector('.bb-undo-btn').addEventListener('click', () => {
    clearInterval(interval); clearTimeout(undoTimer); bar.remove();
    onUndo && onUndo();
  });
  bar.querySelector('.bb-undo-close').addEventListener('click', () => { clearInterval(interval); finalize(); });
}

function openNaslovForm(id) {
  const isEdit = !!id;
  const a = isEdit ? NASLOVI.find(x => x.id === id) : null;
  const isOnlyDefault = isEdit && a.isDefault && NASLOVI.length === 1;
  const v = {
    firstName: a ? a.firstName : '',
    lastName: a ? a.lastName : '',
    street: a ? a.street : '',
    houseNo: a ? a.houseNo : '',
    postal: a ? a.postal : '',
    kraj: a ? a.kraj : '',
    country: a ? a.country : 'Slovenija',
    phone: a ? a.phone : '',
    isDefault: a ? a.isDefault : (NASLOVI.length === 0),
  };
  const countryOpts = COUNTRIES.map(c => `<option value="${c}"${c === v.country ? ' selected' : ''}>${c}</option>`).join('');

  document.querySelectorAll('.bb-flyout-overlay').forEach(o => o.remove());
  const overlay = document.createElement('div');
  overlay.className = 'bb-flyout-overlay';
  overlay.innerHTML = `
    <aside class="bb-flyout" role="dialog" aria-label="${isEdit ? 'Urejanje naslova' : 'Dodaj naslov'}">
      <div class="bb-flyout-head">
        ${isEdit ? DEV_ICONS.pencil : DEV_ICONS.plus}
        <span class="ttl">${isEdit ? 'Urejanje naslova' : 'Dodaj naslov'}</span>
        <button class="bb-flyout-close" aria-label="Zapri">${DEV_ICONS.x}</button>
      </div>
      <form class="bb-flyout-body bb-fly-form" id="bb-naslov-form" novalidate>
        <div class="bb-fly-form-group">
          <div class="bb-field bb-field-row">
            <div class="bb-field">
              <label for="n-first">Ime</label>
              <div class="bb-input-wrap"><input class="bb-input-field" id="n-first" type="text" placeholder="Ime" value="${esc(v.firstName)}" required></div>
            </div>
            <div class="bb-field">
              <label for="n-last">Priimek</label>
              <div class="bb-input-wrap"><input class="bb-input-field" id="n-last" type="text" placeholder="Priimek" value="${esc(v.lastName)}" required></div>
            </div>
          </div>
          <div class="bb-field">
            <label for="n-street">Ulica in hišna številka</label>
            <div class="bb-field-row" style="grid-template-columns:1fr 120px">
              <div class="bb-input-wrap"><input class="bb-input-field" id="n-street" type="text" placeholder="Vnesite naslov ulice" value="${esc(v.street)}" required></div>
              <div class="bb-input-wrap"><input class="bb-input-field" id="n-house" type="text" placeholder="Hišna št." value="${esc(v.houseNo)}"></div>
            </div>
          </div>
          <div class="bb-field">
            <label for="n-postal">Poštna številka in kraj</label>
            <div class="bb-field-row" style="grid-template-columns:120px 1fr">
              <div class="bb-input-wrap"><input class="bb-input-field" id="n-postal" type="text" placeholder="Poštna št." value="${esc(v.postal)}"></div>
              <div class="bb-input-wrap"><input class="bb-input-field" id="n-kraj" type="text" placeholder="Kraj" value="${esc(v.kraj)}"></div>
            </div>
          </div>
          <div class="bb-field">
            <label for="n-country">Država</label>
            <div class="bb-select-wrap-field">
              <select class="bb-select-field" id="n-country">${countryOpts}</select>
              <span class="chev">${DEV_ICONS.down}</span>
            </div>
          </div>
          <div class="bb-field">
            <label for="n-phone">Telefonska številka</label>
            <div class="bb-input-wrap"><input class="bb-input-field" id="n-phone" type="tel" placeholder="031 123 456" value="${esc(v.phone)}"></div>
          </div>
        </div>

        <div class="bb-fly-form-group">
          <label class="bb-switch-row">
            <span class="bb-switch-txt">
              <strong>Privzeti naslov za dostavo</strong>
              <span>Ta naslov bo samodejno izbran ob naročilu.</span>
            </span>
            <span class="bb-toggle"><input type="checkbox" id="n-default"${v.isDefault ? ' checked' : ''}${isOnlyDefault ? ' disabled' : ''}><span class="track"></span></span>
          </label>
        </div>
      </form>
      <div class="bb-flyout-foot">
        <button class="bb-bento-btn" id="bb-naslov-cancel">Prekliči</button>
        <button class="bb-bento-btn primary" id="bb-naslov-save">${DEV_ICONS.save} Shrani spremembe</button>
      </div>
    </aside>
  `;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.querySelector('.bb-flyout-close').addEventListener('click', close);
  overlay.querySelector('#bb-naslov-cancel').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function escN(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escN); } });

  overlay.querySelector('#bb-naslov-save').addEventListener('click', () => {
    const first = overlay.querySelector('#n-first');
    const last = overlay.querySelector('#n-last');
    const street = overlay.querySelector('#n-street');
    let ok = true;
    [first, last, street].forEach(f => {
      if (!f.value.trim()) { f.classList.add('error'); ok = false; } else { f.classList.remove('error'); }
    });
    if (!ok) { (first.value.trim() ? (last.value.trim() ? street : last) : first).focus(); return; }

    const data = {
      firstName: first.value.trim(),
      lastName: last.value.trim(),
      street: street.value.trim(),
      houseNo: overlay.querySelector('#n-house').value.trim(),
      postal: overlay.querySelector('#n-postal').value.trim(),
      kraj: overlay.querySelector('#n-kraj').value.trim(),
      country: overlay.querySelector('#n-country').value,
      phone: overlay.querySelector('#n-phone').value.trim(),
    };
    const makeDefault = overlay.querySelector('#n-default').checked;

    let target;
    if (isEdit) { Object.assign(a, data); target = a; }
    else { target = { id: 'addr-' + Date.now(), ...data, isDefault: false }; NASLOVI.push(target); }

    if (makeDefault) { NASLOVI.forEach(x => x.isDefault = (x === target)); }
    else if (target.isDefault && NASLOVI.length > 1) {
      // unset; promote another to default so there's always one
      target.isDefault = false;
      if (!NASLOVI.some(x => x.isDefault)) NASLOVI.find(x => x !== target).isDefault = true;
    }

    close();
    renderNaslovi();
    showToast(isEdit ? 'Naslov posodobljen' : 'Naslov dodan');
  });
}

function goNaslovi() { renderNaslovi(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ============================================================
   Moji podatki (profile form)
   ============================================================ */
const PODATKI = { fullName: 'Janez Novak', email: 'janez.novak@email.si', telefon: '031 123 456' };
const PRIVACY = { twoFA: false, email: true, sms: true, app: false };
const STRENGTH_LABELS = ['', 'šibka', 'zmerna', 'dobra', 'močna'];

function renderPodatki() {
  state.view = 'podatki';
  setActiveSidebar('podatki');

  const statusPill = (on, dataAttr) => `<button class="bb-status-toggle ${on ? 'on' : 'off'}" ${dataAttr}>${on ? 'vklopljeno' : 'izklopljeno'}</button>`;

  document.getElementById('bb-content').innerHTML = `
    <div class="bb-content-header">
      <div>
        <h1>Moji podatki</h1>
        <p class="bb-podatki-sub">Osebni podatki, privolitve in varnost</p>
      </div>
    </div>

    <div class="bb-form-layout bb-pd-layout">
      <!-- Osebni podatki -->
      <div class="bb-side-card bb-pd-card">
        <div class="bb-podatki-section">Osebni podatki</div>
        <form id="bb-podatki-form" novalidate>
          <div class="bb-field">
            <label for="p-name">Ime in priimek</label>
            <div class="bb-input-wrap"><input class="bb-input-field" id="p-name" type="text" value="${esc(PODATKI.fullName)}"></div>
          </div>
          <div class="bb-field">
            <label for="p-email">E-pošta</label>
            <div class="bb-input-wrap"><input class="bb-input-field" id="p-email" type="email" value="${esc(PODATKI.email)}"></div>
          </div>
          <div class="bb-field">
            <label for="p-telefon">Telefon</label>
            <div class="bb-input-wrap"><input class="bb-input-field" id="p-telefon" type="tel" value="${esc(PODATKI.telefon)}"></div>
          </div>
          <button type="submit" class="bb-btn-submit bb-pd-save">Shrani spremembe</button>
        </form>
      </div>

      <!-- Varnost + Privolitve -->
      <aside class="bb-side-stack">
        <div class="bb-side-card">
          <div class="bb-podatki-section">Varnost</div>
          <div class="bb-consent-row" style="padding-top:0">
            <span class="bb-consent-label">Geslo</span>
            <span class="bb-pd-lastchange">Nazadnje spremenjeno: ${SECURITY.lastChange}</span>
          </div>
          <button type="button" class="bb-bento-btn" data-change-pw style="margin-top:2px">Spremeni geslo</button>
          <div class="bb-pd-divider"></div>
          <div class="bb-consent-row" style="padding-top:0">
            <span class="bb-consent-label">Dvostopenjsko preverjanje (2FA)</span>
            ${statusPill(PRIVACY.twoFA, 'data-consent="twoFA"')}
          </div>
          <button type="button" class="bb-bento-btn bb-pd-2fa" data-2fa-btn>${PRIVACY.twoFA ? 'Izklopi 2FA' : 'Vklopi 2FA'}</button>
        </div>

        <div class="bb-side-card">
          <div class="bb-podatki-section">Privolitve in zasebnost</div>
          <div class="bb-consent-row">
            <span class="bb-consent-label">E-poštna obvestila</span>
            <label class="bb-toggle"><input type="checkbox" data-consent-sw="email"${PRIVACY.email ? ' checked' : ''}><span class="track"></span></label>
          </div>
          <div class="bb-consent-row">
            <span class="bb-consent-label">SMS obvestila</span>
            <label class="bb-toggle"><input type="checkbox" data-consent-sw="sms"${PRIVACY.sms ? ' checked' : ''}><span class="track"></span></label>
          </div>
          <div class="bb-consent-row">
            <span class="bb-consent-label">Obvestila aplikacije</span>
            <label class="bb-toggle"><input type="checkbox" data-consent-sw="app"${PRIVACY.app ? ' checked' : ''}><span class="track"></span></label>
          </div>
          <div class="bb-pd-consent-actions">
            <button type="button" class="bb-bento-btn" data-export>${DEV_ICONS.download || ''} Izvozi podatke</button>
            <button type="button" class="bb-bento-btn bb-btn-danger" data-delete-account>Izbriši račun</button>
          </div>
        </div>
      </aside>
    </div>
  `;

  const content = document.getElementById('bb-content');
  const form = document.getElementById('bb-podatki-form');

  form.addEventListener('submit', e => {
    e.preventDefault();
    PODATKI.fullName = form.querySelector('#p-name').value.trim();
    PODATKI.email = form.querySelector('#p-email').value.trim();
    PODATKI.telefon = form.querySelector('#p-telefon').value.trim();
    showToast('Podatki shranjeni');
  });

  // Change password → flyout
  content.querySelector('[data-change-pw]').addEventListener('click', () => { openPasswordFlyout(); });

  // Consent toggle switches
  content.querySelectorAll('[data-consent-sw]').forEach(sw => {
    sw.addEventListener('change', () => { PRIVACY[sw.dataset.consentSw] = sw.checked; });
  });

  // 2FA status pill + button
  const set2fa = () => {
    const pill = content.querySelector('[data-consent="twoFA"]');
    pill.classList.toggle('on', PRIVACY.twoFA);
    pill.classList.toggle('off', !PRIVACY.twoFA);
    pill.textContent = PRIVACY.twoFA ? 'vklopljeno' : 'izklopljeno';
    content.querySelector('[data-2fa-btn]').textContent = PRIVACY.twoFA ? 'Izklopi 2FA' : 'Vklopi 2FA';
  };
  content.querySelector('[data-consent="twoFA"]').addEventListener('click', () => { PRIVACY.twoFA = !PRIVACY.twoFA; set2fa(); });
  content.querySelector('[data-2fa-btn]').addEventListener('click', () => {
    PRIVACY.twoFA = !PRIVACY.twoFA; set2fa();
    showToast(PRIVACY.twoFA ? '2FA vklopljeno' : '2FA izklopljeno');
  });

  content.querySelector('[data-export]').addEventListener('click', () => showToast('Priprava izvoza podatkov …'));
  content.querySelector('[data-delete-account]').addEventListener('click', () => {
    openConfirm({
      title: 'Izbriši račun',
      message: 'Ali ste prepričani, da želite trajno izbrisati svoj račun? Tega dejanja ni mogoče razveljaviti.',
      confirmLabel: 'Izbriši račun',
      danger: true,
      onConfirm: () => showToast('Zahteva za izbris računa poslana'),
    });
  });
}

function goPodatki() { renderPodatki(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ============================================================
   Arhiv nakupov (purchase archive)
   ============================================================ */
const ARHIVA = [
  { id: '837-172702707', date: '12.02.2025', channel: 'Splet',                  type: 'online', price: 349 },
  { id: 'BB-PE-44821',   date: '02.12.2024', channel: 'Poslovalnica Ljubljana', type: 'store',  price: 1299 },
  { id: '837-172701990', date: '18.09.2024', channel: 'Splet',                  type: 'online', price: 129 },
  { id: 'BB-PE-44120',   date: '03.11.2024', channel: 'Poslovalnica Maribor',   type: 'store',  price: 529 },
];
let arhivaFilter = { channel: 'all', q: '' };
const ARH_RECEIPT = '<svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l3 3v17l-2.5-1.6L13 22l-2.5-1.6L8 22l-2.5-1.6L6 2z"/><line x1="9" y1="8" x2="14" y2="8"/><line x1="9" y1="12" x2="14" y2="12"/></svg>';

function renderArhiva() {
  state.view = 'arhiva';
  setActiveSidebar('arhiva');

  if (TWEAKS.newUser) {
    document.getElementById('bb-content').innerHTML = `
      <div class="bb-orders-bar"><div><h1>Arhiv nakupov</h1></div></div>
      ${emptyStateHTML('Zgodovina nakupov je prazna', 'Ko boste zaključili prvi nakup, se bo tukaj shranil skupaj z računi.', EMPTY_ICONS.archive)}
    `;
    return;
  }

  document.getElementById('bb-content').innerHTML = `
    <div class="bb-orders-bar">
      <div>
        <h1>Arhiv nakupov</h1>
      </div>
      <div class="bb-orders-tools">
        <div class="bb-order-search">
          <input type="text" id="bb-arh-q" placeholder="Iskanje" />
          <span class="s-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><line x1="20" y1="20" x2="16.5" y2="16.5"/></svg></span>
        </div>
        <div class="bb-select-wrap">
          <select class="bb-status-select" id="bb-arh-channel">
            <option value="all">Vsi kanali</option>
            <option value="online">Splet</option>
            <option value="store">Poslovalnica</option>
          </select>
          <span class="chev"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></span>
        </div>
      </div>
    </div>
    <div id="bb-arh-body"></div>
  `;

  const q = document.getElementById('bb-arh-q');
  q.value = arhivaFilter.q;
  q.addEventListener('input', () => { arhivaFilter.q = q.value; renderArhivaList(); });
  const sel = document.getElementById('bb-arh-channel');
  sel.value = arhivaFilter.channel;
  sel.addEventListener('change', () => { arhivaFilter.channel = sel.value; renderArhivaList(); });

  renderArhivaList();
}

function renderArhivaList() {
  const list = ARHIVA.filter(o => {
    const okC = arhivaFilter.channel === 'all' || o.type === arhivaFilter.channel;
    const term = arhivaFilter.q.trim().toLowerCase();
    const okQ = !term || o.id.toLowerCase().includes(term) || o.channel.toLowerCase().includes(term) || o.date.includes(term);
    return okC && okQ;
  });

  const isMobile = ROOT.classList.contains('mobile');
  const cards = list.map(o => isMobile ? `
    <article class="bb-bento-card" data-screen-label="Arhiv ${o.id}">
      <div class="bb-active-order" style="padding:0">
        <div>
          <div class="bb-ao-title">Naročilo ${o.id}</div>
          <div class="bb-ao-id">${o.date} · ${o.channel}</div>
          <div class="bb-arh-m-price">${fmtPrice(o.price)}</div>
          <div class="bb-ao-actions">
            <span class="bb-pill green">Dostavljeno</span>
            <button class="bb-bento-btn sm" data-arh-pdf="${o.id}">${DEV_ICONS.receipt} Račun PDF</button>
          </div>
        </div>
      </div>
    </article>
  ` : `
    <article class="bb-arh-card" data-screen-label="Arhiv ${o.id}">
      <span class="bb-arh-ic">${ARH_RECEIPT}</span>
      <div class="bb-arh-main">
        <div class="bb-arh-title">Naročilo ${o.id}</div>
        <div class="bb-arh-meta">${o.date} · ${o.channel}</div>
      </div>
      <div class="bb-arh-right">
        <span class="bb-arh-price">${fmtPrice(o.price)}</span>
        <span class="bb-pill green">Dostavljeno</span>
        <button class="bb-bento-btn" data-arh-pdf="${o.id}">${DEV_ICONS.receipt} Račun PDF</button>
      </div>
    </article>
  `).join('');

  const body = document.getElementById('bb-arh-body');
  body.innerHTML = list.length ? `<div class="${isMobile ? 'bb-orders' : 'bb-arh-list'}">${cards}</div>` : `<div class="bb-orders-empty">Ni nakupov za izbrane filtre.</div>`;
  body.querySelectorAll('[data-arh-pdf]').forEach(b => b.addEventListener('click', () => showToast('Račun PDF prenešen')));
}

function goArhiva() { renderArhiva(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

/* ============================================================
   Moje naprave + device flyout
   ============================================================ */
const NAPRAVE = [
  { id:'samsung-a16', cat:'Telefoni', manual:false, order:'837-172702711', img:'images/profile/dev-samsung-a16.png',
    name:'Mobitel Samsung Galaxy A16 4GB/128GB dual SIM tamnoplavi SM-A...',
    warranty:{label:'Garancija 24 mes.', cls:'green'}, insurance:{label:'Zavarovan do 06/2027', cls:'green'},
    podatki:{sku:'SAM-A16-128', serial:'SN-A16-4471', date:'16.06.2025', value:'249,00 \u20ac'} },
  { id:'dyson-v8', cat:'Mali aparati', manual:false, order:'837-172702705', img:'images/profile/dev-dyson-v8.png',
    name:'Usisava\u010d Dyson V8 Absolute',
    warranty:{label:'Garancija pote\u010de \u010dez 41 dni', cls:'amber'}, insurance:{label:'Brez zavarovanja', cls:'gray'},
    podatki:{sku:'DY-V8-ABS', serial:'SN-DYV8-2231', date:'12.02.2024', value:'399,00 \u20ac'} },
  { id:'huawei-gt6', cat:'Pametne ure', manual:false, order:'837-172702699', img:'images/profile/dev-huawei-gt6.png',
    name:'Pametni sat Huawei Watch GT6 Pro Black 46mm (Atum-B29F)',
    warranty:{label:'Garancija potekla', cls:'red'}, insurance:{label:'Brez zavarovanja', cls:'gray'},
    podatki:{sku:'HW-GT6-PRO', serial:'SN-HWGT6-8120', date:'03.10.2024', value:'329,00 \u20ac'} },
  { id:'philips-xd', cat:'Mali aparati', manual:true, order:'837-172702717', img:'images/profile/dev-philips-xd.png',
    name:'Usisava\u010d Philips XD6142/12',
    warranty:{label:'Garancija 24 mes.', cls:'green'}, insurance:{label:'Zavarovan do 06/2027', cls:'green'},
    podatki:{sku:'NSW-OLED-W', serial:'SN-NT8890', date:'12.02.2025', value:'349,00 \u20ac'},
    flyInsurance:{label:'Brez zavarovanja', cls:'gray', link:'Sklenite zavarovanje'} },
];
let napraveFilter = 'all';

const DEV_ICONS = {
  monitor: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',
  x: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="6" y1="6" x2="18" y2="18"/><line x1="18" y1="6" x2="6" y2="18"/></svg>',
  thumb: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="13" rx="2"/><path d="M8 20h8M12 17v3"/></svg>',
  download: '<svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"><path d="M2.33398 9.33366L2.33398 9.91699C2.33398 10.8835 3.11749 11.667 4.08398 11.667L9.91732 11.667C10.8838 11.667 11.6673 10.8835 11.6673 9.91699L11.6673 9.33366M4.66732 7.00033L7.00065 9.33366L9.33398 7.00032M7.00065 9.33366L7.00065 2.33366"/></svg>',
  ret: '<svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"><path d="M1.75 8.16699L7.58333 8.16699C10.1607 8.16699 12.25 6.07766 12.25 3.50033L12.25 2.33366M5.25 11.667L1.75 8.16699L5.25 4.66699"/></svg>',
  claim: '<svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"><path d="M7.00067 5.25013V7.58347M7.00067 9.9168H7.0065M6.19294 2.27031L1.39509 10.5575C1.12897 11.0172 0.99591 11.247 1.01558 11.4356C1.03273 11.6002 1.11893 11.7497 1.25272 11.8469C1.40611 11.9585 1.67168 11.9585 2.20282 11.9585H11.7985C12.3297 11.9585 12.5952 11.9585 12.7486 11.8469C12.8824 11.7497 12.9686 11.6002 12.9858 11.4356C13.0054 11.247 12.8724 11.0172 12.6063 10.5575L7.8084 2.2703C7.54324 1.81229 7.41065 1.58329 7.23768 1.50637C7.0868 1.43928 6.91455 1.43928 6.76366 1.50637C6.59069 1.58329 6.45811 1.81229 6.19294 2.27031Z"/></svg>',
  service: '<svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"><path d="M11.4816 6.0227C12.5061 6.27143 12.5061 7.72857 11.4816 7.9773C10.8197 8.13798 10.5056 8.89627 10.86 9.47789C11.4086 10.3783 10.3783 11.4086 9.47789 10.86C8.89627 10.5056 8.13798 10.8197 7.9773 11.4816C7.72857 12.5061 6.27143 12.5061 6.0227 11.4816C5.86202 10.8197 5.10373 10.5056 4.52211 10.86C3.62174 11.4086 2.59139 10.3783 3.14 9.47789C3.49439 8.89627 3.18029 8.13798 2.51843 7.9773C1.49386 7.72857 1.49386 6.27143 2.51843 6.0227C3.18029 5.86202 3.49439 5.10373 3.14 4.52211C2.59139 3.62174 3.62174 2.59139 4.52211 3.14C5.10373 3.49439 5.86202 3.18029 6.0227 2.51843C6.27143 1.49386 7.72857 1.49386 7.9773 2.51843C8.13798 3.18029 8.89627 3.49439 9.47789 3.14C10.3783 2.59139 11.4086 3.62174 10.86 4.52211C10.5056 5.10373 10.8197 5.86202 11.4816 6.0227Z"/><path d="M7 8.75C6.0335 8.75 5.25 7.9665 5.25 7C5.25 6.0335 6.0335 5.25 7 5.25C7.9665 5.25 8.75 6.0335 8.75 7C8.75 7.9665 7.9665 8.75 7 8.75Z"/></svg>',
  transfer: '<svg width="16" height="16" viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.16667" stroke-linecap="round" stroke-linejoin="round"><path d="M12.25 8.74967V4.08301H7.58333M12.25 4.08301L7.58333 8.74967L5.25 6.41634L1.75 9.91634"/></svg>',
  trash: '<svg width="18" height="18" viewBox="0 0 21 21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16.625 6.125L15.8661 16.7497C15.8007 17.6655 15.0387 18.375 14.1205 18.375H6.87946C5.96134 18.375 5.19932 17.6655 5.13391 16.7497L4.375 6.125M8.75 9.625V14.875M12.25 9.625V14.875M13.125 6.125V3.5C13.125 3.01675 12.7332 2.625 12.25 2.625H8.75C8.26675 2.625 7.875 3.01675 7.875 3.5V6.125M3.5 6.125H17.5"/></svg>',
  pencil: '<svg width="18" height="18" viewBox="0 0 21 21" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13.3282 4.5782L16.4217 7.6718M14.6407 3.2657C15.4949 2.41143 16.88 2.41143 17.7342 3.2657C18.5885 4.11998 18.5885 5.50502 17.7342 6.3593L5.6875 18.406H2.625V15.2814L14.6407 3.2657Z"/></svg>',
  down: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
  plus: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>',
};

function renderNaprave() {
  state.view = 'naprave';
  setActiveSidebar('naprave');
  if (TWEAKS.newUser) {
    document.getElementById('bb-content').innerHTML = `
      <div class="bb-orders-bar">
        <h1>Moje naprave</h1>
        <div class="bb-orders-tools">
          <button class="bb-addr-add" id="bb-dev-add"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Dodaj</button>
        </div>
      </div>
      ${emptyStateHTML('Ni registriranih naprav', 'Ko kupite napravo ali jo dodate ročno, bo tukaj s podatki o garanciji in zavarovanju.', EMPTY_ICONS.device)}
    `;
    document.getElementById('bb-dev-add').addEventListener('click', () => openNapravaForm(null));
    return;
  }
  const list = NAPRAVE.filter(d => napraveFilter === 'all' || d.cat === napraveFilter);
  const cards = list.map(d => `
    <article class="bb-dev-card" data-screen-label="Naprava ${d.name.slice(0, 22)}">
      <div class="bb-dev-imgwrap">
        ${d.manual ? '<span class="bb-dev-manual">Ro\u010dni vnos</span>' : ''}
        ${d.img ? `<img class="bb-dev-img" src="${d.img}" alt="${d.name}">` : `<image-slot id="napr-${d.id}" style="width:100%;height:180px" shape="rounded" radius="10" placeholder="${d.name.split(' ').slice(0, 2).join(' ')}"></image-slot>`}
      </div>
      <div class="bb-dev-body">
        <div class="bb-dev-title">${d.name}</div>
        <div class="bb-dev-badges">
          <span class="bb-pill ${d.warranty.cls}">${d.warranty.label}</span>
          <span class="bb-pill ${d.insurance.cls}">${d.insurance.label}</span>
        </div>
        <button class="bb-bento-btn" data-dev="${d.id}">Podrobnosti ${CHEVR}</button>
      </div>
    </article>
  `).join('');

  document.getElementById('bb-content').innerHTML = `
    <div class="bb-orders-bar">
      <h1>Moje naprave</h1>
      <div class="bb-orders-tools">
        <div class="bb-select-wrap">
          <select class="bb-status-select" id="bb-dev-filter">
            <option value="all">Vse naprave</option>
            <option value="Telefoni">Telefoni</option>
            <option value="Mali aparati">Mali aparati</option>
            <option value="Pametne ure">Pametne ure</option>
          </select>
          <span class="chev">${DEV_ICONS.down}</span>
        </div>
        <button class="bb-addr-add" id="bb-dev-add"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg> Dodaj</button>
      </div>
    </div>
    <div class="bb-dev-grid">${cards}</div>
  `;

  const sel = document.getElementById('bb-dev-filter');
  sel.value = napraveFilter;
  sel.addEventListener('change', () => { napraveFilter = sel.value; renderNaprave(); });
  document.querySelectorAll('[data-dev]').forEach(b => b.addEventListener('click', () => openNaprava(b.dataset.dev)));
  document.getElementById('bb-dev-add').addEventListener('click', () => openNapravaForm(null));
}

function goNaprave() { renderNaprave(); window.scrollTo({ top: 0, behavior: 'smooth' }); }

function openNaprava(id) {
  const d = NAPRAVE.find(x => x.id === id);
  if (!d) return;
  const ins = d.flyInsurance || (d.insurance.cls === 'gray'
    ? { label: d.insurance.label, cls: 'gray', link: 'Sklenite zavarovanje' }
    : { label: d.insurance.label, cls: d.insurance.cls });

  document.querySelectorAll('.bb-flyout-overlay').forEach(o => o.remove());
  const overlay = document.createElement('div');
  overlay.className = 'bb-flyout-overlay';
  overlay.innerHTML = `
    <aside class="bb-flyout" role="dialog" aria-label="Naprava">
      <div class="bb-flyout-head">
        ${DEV_ICONS.monitor}
        <span class="ttl">Naprava</span>
        <button class="bb-flyout-close" aria-label="Zapri">${DEV_ICONS.x}</button>
      </div>
      <div class="bb-flyout-body">
        <div class="bb-fly-product">
          <span class="thumb">${DEV_ICONS.thumb}</span>
          <div>
            <div class="bb-fly-pname">${d.name}</div>
            <div class="bb-fly-psub">Iz naro\u010dila ${d.order}</div>
          </div>
        </div>

        <div class="bb-fly-sec">
          <h3 class="bb-fly-h">Jamstva</h3>
          <div class="bb-fly-jam-row"><span class="bb-pill ${d.warranty.cls}">${d.warranty.label}</span></div>
          <div class="bb-fly-jam-row"><span class="bb-pill amber">Podalj\u0161ana garancija dobavitelja</span><span class="bb-fly-link">Aktiviraj</span></div>
          <div class="bb-fly-jam-row"><span class="bb-pill ${ins.cls}">${ins.label}</span>${ins.link ? `<span class="bb-fly-link">${ins.link}</span>` : ''}</div>
        </div>

        <div class="bb-fly-sec">
          <h3 class="bb-fly-h">Podatki</h3>
          <div class="bb-fly-data-row"><span class="k">SKU</span><span class="v">${d.podatki.sku}</span></div>
          <div class="bb-fly-data-row"><span class="k">Serijska \u0161tevilka</span><span class="v">${d.podatki.serial}</span></div>
          <div class="bb-fly-data-row"><span class="k">Datum nakupa</span><span class="v">${d.podatki.date}</span></div>
          <div class="bb-fly-data-row"><span class="k">Vrednost ob nakupu</span><span class="v">${d.podatki.value}</span></div>
        </div>

        <div class="bb-fly-sec">
          <h3 class="bb-fly-h">Dokumenti</h3>
          <div class="bb-fly-btns docs">
            <button class="bb-bento-btn">${DEV_ICONS.download} Preuzmi ra\u010dun</button>
            <button class="bb-bento-btn">${DEV_ICONS.download} Preuzmi navodila</button>
          </div>
        </div>

        <div class="bb-fly-sec">
          <h3 class="bb-fly-h">Akcije na en klik</h3>
          <div class="bb-fly-btns">
            <button class="bb-bento-btn sm" data-act="return">${DEV_ICONS.ret} Vra\u010dilo</button>
            <button class="bb-bento-btn sm" data-act="claim">${DEV_ICONS.claim} Reklamacija</button>
            <button class="bb-bento-btn sm" data-act="service">${DEV_ICONS.service} Servis</button>
            <button class="bb-bento-btn sm">${DEV_ICONS.transfer} Prenesi osebi</button>
          </div>
        </div>
      </div>
      ${d.manual ? `
      <div class="bb-flyout-foot">
        <button class="bb-bento-btn bb-btn-danger" data-del-dev>${DEV_ICONS.trash} Odstrani napravo</button>
        <button class="bb-bento-btn bb-btn-bluestrong" data-edit-dev>${DEV_ICONS.pencil} Uredi podatke</button>
      </div>` : ''}
    </aside>
  `;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.querySelector('.bb-flyout-close').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function esc(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); } });

  const editBtn = overlay.querySelector('[data-edit-dev]');
  if (editBtn) editBtn.addEventListener('click', () => { close(); openNapravaForm(d.id); });
  overlay.querySelectorAll('[data-act]').forEach(btn => btn.addEventListener('click', () => { close(); openNapravaAction(btn.dataset.act, d); }));
  const delBtn = overlay.querySelector('[data-del-dev]');
  if (delBtn) delBtn.addEventListener('click', () => {
    const idx = NAPRAVE.findIndex(x => x.id === d.id);
    if (idx < 0) return;
    const removed = NAPRAVE.splice(idx, 1)[0];
    close();
    renderNaprave();
    const grid = document.querySelector('.bb-dev-grid');
    showUndoBar(`Naprava <strong>${removed.name.split(' ').slice(0, 3).join(' ')}</strong> je bila odstranjena.`, () => {
      NAPRAVE.splice(Math.min(idx, NAPRAVE.length), 0, removed);
      renderNaprave();
      showToast('Odstranitev razveljavljena');
    }, { before: grid });
  });
}

/* ============================================================
   Naprava form flyout — add / edit manually entered device
   ============================================================ */
const CATEGORIES = ['Telefoni', 'Mali aparati', 'Pametne ure', 'Računalniki', 'TV in foto', 'Bela tehnika', 'Ostalo'];
const WARRANTY_OPTS = ['Brez garancije', '12 mes.', '24 mes.', '36 mes.'];
DEV_ICONS.receipt = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h12v20l-3-2-3 2-3-2-3 2z"/><line x1="9" y1="7" x2="15" y2="7"/><line x1="9" y1="11" x2="15" y2="11"/></svg>';
DEV_ICONS.save = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>';
DEV_ICONS.chat = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 0 1-.9-3.8A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5z"/></svg>';
DEV_ICONS.send = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>';
DEV_ICONS.paperclip = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21.4 11.05 12.25 20.2a5 5 0 0 1-7.07-7.07l9.19-9.19a3.33 3.33 0 0 1 4.71 4.71l-9.2 9.19a1.67 1.67 0 0 1-2.36-2.36l8.49-8.49"/></svg>';

function openNapravaForm(id) {
  const isEdit = !!id;
  const d = isEdit ? NAPRAVE.find(x => x.id === id) : null;
  const v = {
    name: d ? d.name : '',
    cat: d ? d.cat : 'Telefoni',
    order: d ? d.order : '',
    sku: d ? d.podatki.sku : '',
    serial: d ? d.podatki.serial : '',
    date: d ? isoFromDots(d.podatki.date) : '',
    value: d ? d.podatki.value.replace(/[^0-9.,]/g, '').trim() : '',
    warranty: d ? warrantyMonths(d.warranty.label) : '24 mes.',
    until: d && d.warranty.until ? d.warranty.until : '',
  };
  const slotId = isEdit ? `napr-form-${id}` : 'napr-form-new';

  const catOpts = CATEGORIES.map(c => `<option value="${c}"${c === v.cat ? ' selected' : ''}>${c}</option>`).join('');
  const warOpts = WARRANTY_OPTS.map(w => `<option value="${w}"${w === v.warranty ? ' selected' : ''}>${w}</option>`).join('');

  document.querySelectorAll('.bb-flyout-overlay').forEach(o => o.remove());
  const overlay = document.createElement('div');
  overlay.className = 'bb-flyout-overlay';
  overlay.innerHTML = `
    <aside class="bb-flyout" role="dialog" aria-label="${isEdit ? 'Uredi napravo' : 'Dodaj napravo'}">
      <div class="bb-flyout-head">
        ${isEdit ? DEV_ICONS.pencil : DEV_ICONS.plus}
        <span class="ttl">${isEdit ? 'Uredi podatke' : 'Dodaj napravo'}</span>
        <button class="bb-flyout-close" aria-label="Zapri">${DEV_ICONS.x}</button>
      </div>
      <form class="bb-flyout-body bb-fly-form" id="bb-napr-form" novalidate>
        <div class="bb-fly-form-group">
          <h3 class="bb-fly-h">Slika izdelka</h3>
          <image-slot id="${slotId}" style="width:100%;height:170px" shape="rounded" radius="12" placeholder="Povleci sliko ali klikni"></image-slot>
        </div>

        <div class="bb-fly-form-group">
          <h3 class="bb-fly-h">Osnovni podatki</h3>
          <div class="bb-field">
            <label for="f-name">Ime naprave</label>
            <div class="bb-input-wrap"><input class="bb-input-field" id="f-name" type="text" placeholder="npr. Usisavač Philips XD6142/12" value="${esc(v.name)}" required></div>
          </div>
          <div class="bb-field">
            <label for="f-cat">Kategorija</label>
            <div class="bb-select-wrap-field">
              <select class="bb-select-field" id="f-cat">${catOpts}</select>
              <span class="chev">${DEV_ICONS.down}</span>
            </div>
          </div>
          <div class="bb-field">
            <label for="f-order">Številka naročila</label>
            <div class="bb-input-wrap"><input class="bb-input-field" id="f-order" type="text" placeholder="npr. 837-172702717" value="${esc(v.order)}"></div>
          </div>
        </div>

        <div class="bb-fly-form-group">
          <h3 class="bb-fly-h">Podatki</h3>
          <div class="bb-field bb-field-row">
            <div class="bb-field">
              <label for="f-sku">SKU</label>
              <div class="bb-input-wrap"><input class="bb-input-field" id="f-sku" type="text" placeholder="npr. PH-XD6142" value="${esc(v.sku)}"></div>
            </div>
            <div class="bb-field">
              <label for="f-serial">Serijska številka</label>
              <div class="bb-input-wrap"><input class="bb-input-field" id="f-serial" type="text" placeholder="npr. SN-XD-1234" value="${esc(v.serial)}"></div>
            </div>
          </div>
          <div class="bb-field bb-field-row">
            <div class="bb-field">
              <label for="f-date">Datum nakupa</label>
              <div class="bb-input-wrap"><input class="bb-input-field" id="f-date" type="date" value="${v.date}"></div>
            </div>
            <div class="bb-field">
              <label for="f-value">Vrednost ob nakupu</label>
              <div class="bb-input-wrap"><input class="bb-input-field" id="f-value" type="text" inputmode="decimal" placeholder="0,00" value="${esc(v.value)}" style="padding-right:42px"><span class="bb-input-suffix">€</span></div>
            </div>
          </div>
        </div>

        <div class="bb-fly-form-group">
          <h3 class="bb-fly-h">Garancija</h3>
          <div class="bb-field bb-field-row">
            <div class="bb-field">
              <label for="f-war">Trajanje garancije</label>
              <div class="bb-select-wrap-field">
                <select class="bb-select-field" id="f-war">${warOpts}</select>
                <span class="chev">${DEV_ICONS.down}</span>
              </div>
            </div>
            <div class="bb-field">
              <label for="f-until">Garancija velja do</label>
              <div class="bb-input-wrap"><input class="bb-input-field" id="f-until" type="date" value="${v.until}"></div>
            </div>
          </div>
        </div>

        <div class="bb-fly-form-group">
          <h3 class="bb-fly-h">Račun</h3>
          <label class="bb-upload" id="bb-receipt">
            <span class="bb-upload-ic">${DEV_ICONS.receipt}</span>
            <span class="bb-upload-txt">
              <strong id="bb-receipt-name">Naloži račun</strong>
              <span><span class="browse">Prebrskaj datoteke</span> · PDF, JPG ali PNG</span>
            </span>
            <input type="file" accept="image/*,application/pdf" hidden id="bb-receipt-input">
          </label>
        </div>
      </form>
      <div class="bb-flyout-foot">
        <button class="bb-bento-btn" id="bb-napr-cancel">Prekliči</button>
        <button class="bb-bento-btn primary" id="bb-napr-save">${DEV_ICONS.save} Shrani spremembe</button>
      </div>
    </aside>
  `;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.querySelector('.bb-flyout-close').addEventListener('click', close);
  overlay.querySelector('#bb-napr-cancel').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function esc2(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc2); } });

  const receiptInput = overlay.querySelector('#bb-receipt-input');
  receiptInput.addEventListener('change', () => {
    const f = receiptInput.files[0];
    if (f) {
      overlay.querySelector('#bb-receipt-name').textContent = f.name;
      overlay.querySelector('#bb-receipt').classList.add('has-file');
    }
  });

  overlay.querySelector('#bb-napr-save').addEventListener('click', () => {
    const name = overlay.querySelector('#f-name').value.trim();
    const nameField = overlay.querySelector('#f-name');
    if (!name) {
      nameField.classList.add('error');
      nameField.focus();
      overlay.querySelector('.bb-flyout-body').scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const cat = overlay.querySelector('#f-cat').value;
    const order = overlay.querySelector('#f-order').value.trim();
    const sku = overlay.querySelector('#f-sku').value.trim();
    const serial = overlay.querySelector('#f-serial').value.trim();
    const date = dotsFromIso(overlay.querySelector('#f-date').value);
    let value = overlay.querySelector('#f-value').value.trim();
    if (value) value = value.replace('.', ',') + ' \u20ac';
    const warVal = overlay.querySelector('#f-war').value;
    const until = overlay.querySelector('#f-until').value;
    const warranty = warVal === 'Brez garancije'
      ? { label: 'Brez garancije', cls: 'gray', until }
      : { label: `Garancija ${warVal}`, cls: 'green', until };

    if (isEdit) {
      d.name = name; d.cat = cat; d.order = order || d.order;
      d.podatki = { sku: sku || '—', serial: serial || '—', date: date || d.podatki.date, value: value || d.podatki.value };
      d.warranty = warranty;
      showToast('Spremembe shranjene');
    } else {
      NAPRAVE.unshift({
        id: 'manual-' + Date.now(),
        cat, manual: true, order: order || '—', name,
        warranty,
        insurance: { label: 'Brez zavarovanja', cls: 'gray' },
        flyInsurance: { label: 'Brez zavarovanja', cls: 'gray', link: 'Sklenite zavarovanje' },
        podatki: { sku: sku || '—', serial: serial || '—', date: date || '—', value: value || '—' },
      });
      showToast('Naprava dodana');
    }
    close();
    renderNaprave();
  });
}

/* date helpers: DD.MM.YYYY <-> YYYY-MM-DD */
function isoFromDots(s) {
  if (!s || !/^\d{2}\.\d{2}\.\d{4}$/.test(s)) return '';
  const [d, m, y] = s.split('.');
  return `${y}-${m}-${d}`;
}
function dotsFromIso(s) {
  if (!s) return '';
  const [y, m, d] = s.split('-');
  return `${d}.${m}.${y}`;
}
function warrantyMonths(label) {
  const m = (label || '').match(/(\d+)\s*mes/);
  if (m) return `${m[1]} mes.`;
  if (/brez/i.test(label || '')) return 'Brez garancije';
  return '24 mes.';
}
function esc(s) { return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

/* ============================================================
   Sidebar routing
   ============================================================ */
function setActiveSidebar(route) {
  document.querySelectorAll('.bb-sidebar [data-route]').forEach(b => {
    b.classList.toggle('active', b.dataset.route === route);
  });
}

document.querySelectorAll('.bb-sidebar [data-route]').forEach(btn => {
  btn.addEventListener('click', () => {
    const r = btn.dataset.route;
    if (r === 'pregled') goPregled();
    else if (r === 'orders') goOrders();
    else if (r === 'klub') goKlub();
    else if (r === 'postopki') goPostopki();
    else if (r === 'naprave') goNaprave();
    else if (r === 'narocnine') goNarocnine();
    else if (r === 'naslovi') goNaslovi();
    else if (r === 'arhiva') goArhiva();
    else if (r === 'podatki') goPodatki();
    else if (r === 'pomocnik') goPomocnik();
    else { renderPlaceholder(PLACE_LABELS[r] || 'Razdelek', r); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    if (ROOT.classList.contains('mobile')) showMobileDetail(ROUTE_TITLES[r] || 'Razdelek');
  });
});

/* ============================================================
   Mobile layout controller
   ============================================================ */
const ROUTE_TITLES = {
  pregled: 'Pregled', orders: 'Moja naročila', postopki: 'Aktivni postopki',
  naprave: 'Moje naprave', narocnine: 'Moje naročnine', klub: 'Klubska kartica',
  naslovi: 'Moji naslovi', mojikuponi: 'Moji kuponi', arhiva: 'Arhiva kupnje',
  podatki: 'Moji podatki', kuponi: 'Kuponi', pomocnik: 'UAU pomoćnik',
};
function mobilePanel() { return document.querySelector('.bb-panel'); }
function mobileScroll() { const a = ROOT; if (a) a.scrollTop = 0; }
let mbarBack = null;
function showMobileDetail(title, back) {
  document.getElementById('bb-mbar-title').textContent = title || '';
  mbarBack = back || null;
  mobilePanel().classList.add('show-detail');
  mobileScroll();
}
function showMobileMenu() {
  mobilePanel().classList.remove('show-detail');
  mobileScroll();
}
function applyLayout() {
  const mobile = TWEAKS.layout === 'mobile';
  ROOT.classList.toggle('mobile', mobile);
  document.body.classList.toggle('bb-mobile', mobile);
  if (mobile) showMobileMenu(); else mobilePanel().classList.remove('show-detail');
}
function rerenderCurrent() {
  const map = {
    pregled: renderPregled, list: renderList, klub: renderKlub, offers: renderOffers,
    activity: renderActivityFull, postopki: renderPostopki, narocnine: renderNarocnine,
    pomocnik: renderPomocnik, naslovi: renderNaslovi, podatki: renderPodatki,
    arhiva: renderArhiva, naprave: renderNaprave,
  };
  const fn = map[state.view];
  if (fn) fn();
}
document.getElementById('bb-mbar-back').addEventListener('click', () => {
  if (mbarBack) { const fn = mbarBack; mbarBack = null; fn(); }
  else showMobileMenu();
});


/* Contain flyout/dialog overlays inside the mobile frame (bottom sheets) */
function positionMobileOverlay(ov) {
  if (!ROOT.classList.contains('mobile')) return;
  // the shell's phone frame is the real viewport for a mobile sheet;
  // ROOT itself is as tall as the scrolling content
  const app = ROOT.closest('[data-bb-frame]') || ROOT;
  if (!app) return;
  const r = app.getBoundingClientRect();
  ov.style.inset = 'auto';
  ov.style.position = 'fixed';
  ov.style.left = r.left + 'px';
  ov.style.top = r.top + 'px';
  ov.style.width = r.width + 'px';
  ov.style.height = r.height + 'px';
  ov.style.transform = 'none';
}
const OVERLAY_CLASSES = ['bb-flyout-overlay', 'bb-modal-overlay', 'bb-confirm-overlay'];
const overlayObserver = new MutationObserver(muts => {
  if (!ROOT.classList.contains('mobile')) return;
  for (const m of muts) for (const n of m.addedNodes) {
    if (n.nodeType === 1 && OVERLAY_CLASSES.some(c => n.classList.contains(c))) {
      positionMobileOverlay(n);
    }
  }
});
overlayObserver.observe(document.body, { childList: true });
window.addEventListener('resize', () => {
  document.querySelectorAll('.bb-flyout-overlay, .bb-modal-overlay, .bb-confirm-overlay').forEach(positionMobileOverlay);
});

applyLayout();

/* ============================================================
   Render: Spremeni geslo
   ============================================================ */
const SECURITY = {
  lastChange: '14. 02. 2025',
  twoFA: false,
  sessions: [
    { device: 'Chrome · macOS', city: 'Ljubljana, SI', ip: '89.142.* · zdaj',  current: true,  icon: 'desktop' },
    { device: 'Safari · iPhone 15', city: 'Ljubljana, SI', ip: '89.142.* · pred 2 urama', current: false, icon: 'phone' },
    { device: 'Chrome · Windows', city: 'Maribor, SI', ip: '193.77.* · pred 3 dnevi', current: false, icon: 'desktop' },
  ],
};

function passwordStrength(pw) {
  if (!pw) return { score: 0, label: '' };
  let s = 0;
  if (pw.length >= 8) s++;
  if (/[a-z]/.test(pw) && /[A-Z]/.test(pw)) s++;
  if (/\d/.test(pw)) s++;
  if (/[^A-Za-z0-9]/.test(pw) && pw.length >= 12) s++;
  const labels = ['', 'Šibko', 'Srednje', 'Dobro', 'Močno'];
  return { score: s, label: labels[s] };
}

function passwordRules(pw) {
  return [
    { key: 'len',   text: 'Vsaj 8 znakov',                ok: pw.length >= 8 },
    { key: 'lower', text: 'Vsaj ena mala črka',           ok: /[a-z]/.test(pw) },
    { key: 'upper', text: 'Vsaj ena velika črka',         ok: /[A-Z]/.test(pw) },
    { key: 'num',   text: 'Vsaj ena številka',            ok: /\d/.test(pw) },
  ];
}

function eyeIcon(visible) {
  return visible
    ? '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"/><circle cx="12" cy="12" r="3"/><line x1="3" y1="3" x2="21" y2="21"/></svg>'
    : '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7z"/><circle cx="12" cy="12" r="3"/></svg>';
}

function openPasswordFlyout() {
  document.querySelectorAll('.bb-flyout-overlay').forEach(o => o.remove());
  const LOCK = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="10.5" width="16" height="10.5" rx="2.2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>';
  const overlay = document.createElement('div');
  overlay.className = 'bb-flyout-overlay';
  overlay.innerHTML = `
    <aside class="bb-flyout" role="dialog" aria-label="Spremeni geslo">
      <div class="bb-flyout-head">
        ${LOCK}
        <span class="ttl">Spremeni geslo</span>
        <button class="bb-flyout-close" aria-label="Zapri">${DEV_ICONS.x}</button>
      </div>
      <form class="bb-flyout-body bb-fly-form" id="bb-pw-form" novalidate>
        <p class="bb-form-intro">Vaše geslo naj bo dolgo vsaj 8 znakov in naj vsebuje vsaj eno malo in eno veliko črko, ter vsaj eno številko. Po spremembi se boste morali ponovno prijaviti na vseh napravah.</p>
        <div class="bb-fly-form-group">
          <div class="bb-field">
            <label for="pw-current">Trenutno geslo</label>
            <div class="bb-input-wrap">
              <input class="bb-input-field" id="pw-current" type="password" autocomplete="current-password" placeholder="Vnesi trenutno geslo" />
              <button type="button" class="bb-eye" data-toggle="pw-current" aria-label="Prikaži geslo">${eyeIcon(false)}</button>
            </div>
            <div class="bb-field-error" data-err="pw-current"></div>
          </div>
          <div class="bb-field">
            <label for="pw-new">Novo geslo</label>
            <div class="bb-input-wrap">
              <input class="bb-input-field" id="pw-new" type="password" autocomplete="new-password" placeholder="Vnesi novo geslo" />
              <button type="button" class="bb-eye" data-toggle="pw-new" aria-label="Prikaži geslo">${eyeIcon(false)}</button>
            </div>
            <div class="bb-strength">
              <div class="bb-strength-bar">
                <div class="bb-strength-segment" data-seg="1"></div>
                <div class="bb-strength-segment" data-seg="2"></div>
                <div class="bb-strength-segment" data-seg="3"></div>
                <div class="bb-strength-segment" data-seg="4"></div>
              </div>
              <span class="bb-strength-label s0" data-strength-label>Moč gesla</span>
            </div>
            <ul class="bb-pw-rules" data-rules>
              ${passwordRules('').map(r => `
                <li data-rule="${r.key}">
                  <span class="rule-dot"><svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 8"/></svg></span>
                  ${r.text}
                </li>`).join('')}
            </ul>
          </div>
          <div class="bb-field">
            <label for="pw-confirm">Ponovi novo geslo</label>
            <div class="bb-input-wrap">
              <input class="bb-input-field" id="pw-confirm" type="password" autocomplete="new-password" placeholder="Ponovi novo geslo" />
              <button type="button" class="bb-eye" data-toggle="pw-confirm" aria-label="Prikaži geslo">${eyeIcon(false)}</button>
            </div>
            <div class="bb-field-error" data-err="pw-confirm"></div>
          </div>
        </div>
      </form>
      <div class="bb-flyout-foot">
        <button class="bb-bento-btn" id="bb-pw-cancel">Prekliči</button>
        <button class="bb-bento-btn primary" id="bb-pw-save" disabled>Ponastavi geslo</button>
      </div>
    </aside>
  `;
  document.body.appendChild(overlay);
  const close = () => overlay.remove();
  overlay.querySelector('.bb-flyout-close').addEventListener('click', close);
  overlay.querySelector('#bb-pw-cancel').addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', function escP(e) { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', escP); } });

  // eye toggles
  overlay.querySelectorAll('[data-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = overlay.querySelector('#' + btn.dataset.toggle);
      const vis = input.type === 'password';
      input.type = vis ? 'text' : 'password';
      btn.innerHTML = eyeIcon(vis);
    });
  });

  const current = overlay.querySelector('#pw-current');
  const next = overlay.querySelector('#pw-new');
  const conf = overlay.querySelector('#pw-confirm');
  const submit = overlay.querySelector('#bb-pw-save');

  const updateStrength = () => {
    const { score, label } = passwordStrength(next.value);
    overlay.querySelectorAll('[data-seg]').forEach((seg, i) => { seg.classList.remove('s1','s2','s3','s4'); if (i < score) seg.classList.add('s' + score); });
    const lbl = overlay.querySelector('[data-strength-label]');
    lbl.className = 'bb-strength-label s' + score;
    lbl.textContent = label || 'Moč gesla';
    passwordRules(next.value).forEach(r => { const el = overlay.querySelector(`[data-rule="${r.key}"]`); if (el) el.classList.toggle('ok', r.ok); });
  };
  const validate = () => {
    const allRulesOk = passwordRules(next.value).every(r => r.ok);
    const match = next.value && next.value === conf.value;
    const confErr = overlay.querySelector('[data-err="pw-confirm"]');
    if (conf.value && next.value && conf.value !== next.value) { conf.classList.add('error'); confErr.textContent = 'Gesli se ne ujemata.'; }
    else { conf.classList.remove('error'); confErr.textContent = ''; }
    submit.disabled = !(current.value.length > 0 && allRulesOk && match);
  };
  next.addEventListener('input', () => { updateStrength(); validate(); });
  conf.addEventListener('input', validate);
  current.addEventListener('input', validate);

  submit.addEventListener('click', () => {
    if (submit.disabled) return;
    submit.disabled = true;
    submit.textContent = 'Spreminjanje...';
    setTimeout(() => { close(); showToast('Geslo uspešno spremenjeno'); }, 700);
  });
}

function showToast(msg) {
  let t = document.getElementById('bb-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'bb-toast';
    t.className = 'bb-toast';
    document.body.appendChild(t);
  }
  t.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 8"/></svg> ${msg}`;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2400);
}

/* ============================================================
   Registracija / prijava (Tweaks: Pogled → Registracija)
   ============================================================ */
const REG = { step: 'intro', email: '', phone: '', name: '', klub: false, pass: '' };
const REG_TICK = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="5 12 10 17 19 8"/></svg>';
const REG_BACK = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 6 9 12 15 18"/></svg>';
const REG_PERK_ICONS = {
  bolt: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 4 14 11 14 10 22 20 10 13 10 13 2"/></svg>',
  doc: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><polyline points="14 2 14 7 19 7"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>',
  star: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.1 8.6 22 9.6 17 14.5 18.2 21.5 12 18.2 5.8 21.5 7 14.5 2 9.6 8.9 8.6 12 2"/></svg>',
  cart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 7h14l-1.5 9h-11L5.5 4H3"/><circle cx="9.5" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/></svg>',
  phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="2" width="10" height="20" rx="2.5"/><line x1="11" y1="18.5" x2="13" y2="18.5"/></svg>',
  user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21c1.5-3.8 4.5-5.5 8-5.5s6.5 1.7 8 5.5"/></svg>',
  gift: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="9" width="18" height="12" rx="2"/><line x1="12" y1="9" x2="12" y2="21"/><path d="M3 13h18"/><path d="M12 9C10 9 7.5 8 7.5 6A2.5 2.5 0 0 1 12 5a2.5 2.5 0 0 1 4.5 1c0 2-2.5 3-4.5 3z"/></svg>',
};
const REG_STEPS = ['intro', 'email', 'code', 'pass', 'data', 'consents', 'sms', 'done'];

function regStepsBar(n) {
  return `<div class="bb-reg-steps">${[1,2,3,4].map(i => `<span class="${i < n ? 'done' : i === n ? 'cur' : ''}"></span>`).join('')}</div>`;
}
function regKlubBox(withToggle) {
  const perks = [
    'VIP dostop do novosti in predprodajnih akcij',
    'Ekskluzivne promocije in nagradne igre samo za člane',
    'Računi, garancije in zavarovanja naprav na enem mestu',
  ];
  return `
    <div class="bb-reg-klub">
      <div class="bb-reg-klub-main">
        <div class="bb-klub-hero-brand">UAU<span>Klub</span></div>
        <h2>Postani član UAU kluba</h2>
        <p>Pridobi VIP dostop v svet najnovejše tehnologije. Čakajo te ekskluzivne promocije, nagradne igre ter vsi računi, garancije in zavarovanja tvojih naprav — zbrani na enem mestu. Brezplačno, hitro, splača se.</p>
        <div class="bb-reg-kperks">${perks.map(p => `<div class="bb-reg-kperk">${REG_TICK}<span>${p}</span></div>`).join('')}</div>
        ${withToggle ? `<label class="bb-reg-join${REG.klub ? ' on' : ''}" id="bb-reg-join">
          <input type="checkbox" id="bb-reg-join-cb"${REG.klub ? ' checked' : ''}>
          <span class="bb-reg-sw"></span>
          <span><b>Da, včlanite me v UAU klub!</b><small>Brezplačno članstvo · odjava kadarkoli z enim klikom</small></span>
        </label>` : ''}
      </div>
    </div>`;
}

function regRender() {
  const col = document.getElementById('bb-reg-col');
  const s = REG.step;
  let html = '';

  if (s === 'intro') {
    const perks = [
      ['bolt', '<b>Bliskovit nakup</b> — shranjeni podatki, hitrejši zaključek košarice.'],
      ['doc', '<b>Vse na enem mestu</b> — naročila, računi, garancije in zavarovanja naprav.'],
      ['star', '<b>UAU klub</b> — VIP dostop do ekskluzivnih promocij in nagradnih iger.'],
    ];
    html = `
      <div class="bb-reg-card">
        <p class="bb-reg-kicker">Big Bang · moj račun</p>
        <h1>Ustvarite račun in vstopite v svet UAU</h1>
        <p class="bb-reg-sub">Registracija traja manj kot minuto — nakupovanje pa bo hitrejše, preglednejše in polno ugodnosti.</p>
        <div class="bb-reg-perks">${perks.map(([ic, t]) => `<div class="bb-reg-perk"><span class="ic">${REG_PERK_ICONS[ic]}</span><span>${t}</span></div>`).join('')}</div>
        <button class="bb-reg-cta" data-go="email">Ustvari račun</button>
        <button class="bb-reg-cta ghost" data-login>Prijavite se</button>
        <div class="bb-reg-div">ali nadaljujte z</div>
        <div class="bb-reg-socials">
          <button type="button" class="bb-reg-soc"><svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.5 12.2c0-.7-.1-1.4-.2-2H12v3.9h5.9a5 5 0 0 1-2.2 3.3v2.7h3.6c2.1-2 3.2-4.8 3.2-7.9Z"/><path fill="#34A853" d="M12 23c2.9 0 5.4-1 7.2-2.6l-3.6-2.7c-1 .7-2.3 1.1-3.6 1.1-2.8 0-5.1-1.9-6-4.4H2.3v2.8A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M6 14.4a6.6 6.6 0 0 1 0-4.2V7.4H2.3a11 11 0 0 0 0 9.8L6 14.4Z"/><path fill="#EA4335" d="M12 5.4c1.6 0 3 .5 4.1 1.6l3.1-3.1A11 11 0 0 0 2.3 7.4L6 10.2c.9-2.6 3.2-4.8 6-4.8Z"/></svg> Google</button>
          <button type="button" class="bb-reg-soc"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.4 12.7c0-2.3 1.9-3.4 2-3.5-1.1-1.6-2.8-1.8-3.4-1.8-1.4-.2-2.8.8-3.5.8-.7 0-1.9-.8-3-.8-1.6 0-3 .9-3.8 2.3-1.6 2.8-.4 7 1.2 9.3.8 1.1 1.7 2.4 2.9 2.3 1.1 0 1.6-.7 3-.7 1.4 0 1.8.7 3 .7 1.2 0 2-1.1 2.8-2.2.9-1.3 1.2-2.5 1.2-2.6-.1 0-2.4-.9-2.4-3.8ZM14.1 6.1c.6-.8 1-1.8.9-2.9-.9 0-2 .6-2.6 1.4-.6.7-1.1 1.8-.9 2.8 1 .1 2-.5 2.6-1.3Z"/></svg> Apple</button>
        </div>
        <p class="bb-reg-legal">Registracija pomeni strinjanje s <a href="#">pogoji uporabe</a> in <a href="#">politiko zasebnosti</a>.</p>
      </div>`;
  }

  else if (s === 'email') {
    html = `
      <div class="bb-reg-card">
        <button class="bb-reg-back" data-go="intro">${REG_BACK} Nazaj</button>
        ${regStepsBar(1)}
        <p class="bb-reg-kicker">Korak 1 od 4 · e-pošta</p>
        <h1>Vnesite svoj e-poštni naslov</h1>
        <p class="bb-reg-sub">Nanj vam bomo poslali 6-mestno potrditveno kodo, da bo vaš račun varen že od prvega klika.</p>
        <div class="bb-field" id="bb-reg-femail">
          <label for="bb-reg-email">E-poštni naslov</label>
          <div class="bb-input-wrap"><input class="bb-input-field" id="bb-reg-email" type="email" placeholder="ime@primer.si" value="${esc(REG.email)}"></div>
          <p class="bb-reg-err">Ta naslov ni videti pravilen. Preverite ga in poskusite znova.</p>
        </div>
        <button class="bb-reg-cta" id="bb-reg-sendcode">Pošlji kodo</button>
        <p class="bb-reg-foot">Že imate račun? <a href="#" data-login>Prijavite se</a></p>
      </div>`;
  }

  else if (s === 'code' || s === 'sms') {
    const isSms = s === 'sms';
    html = `
      <div class="bb-reg-card">
        <button class="bb-reg-back" data-go="${isSms ? (REG.klub ? 'consents' : 'data') : 'email'}">${REG_BACK} Nazaj</button>
        ${isSms ? '' : regStepsBar(2)}
        <p class="bb-reg-kicker">${isSms ? 'Potrditev telefonske številke' : 'Korak 2 od 4 · potrditev'}</p>
        <h1>${isSms ? 'Preverite sporočila' : 'Preverite poštni predal'}</h1>
        <p class="bb-reg-sub">${isSms
          ? `Za potrditev telefonske številke vpišite kodo iz SMS sporočila, poslanega na <b>${esc(REG.phone || 'vašo številko')}</b>.`
          : `Kodo smo poslali na <b>${esc(REG.email)}</b>. <a href="#" data-go="email">Spremeni naslov</a>`}</p>
        <div class="bb-otp" id="bb-reg-otp">${Array.from({length:6}).map(() => '<input type="text" inputmode="numeric" maxlength="1">').join('')}</div>
        <div class="bb-otp-err" id="bb-reg-otperr"><span>⚠</span><span>Vpisana koda ni pravilna. Preverite jo še enkrat ali si pošljite novo kodo.</span></div>
        <button class="bb-reg-cta" id="bb-reg-verify" style="margin-top:16px" disabled>Potrdi kodo</button>
        <p class="bb-resend">Niste prejeli kode? <button id="bb-reg-resend" disabled>Pošlji novo kodo <span id="bb-reg-cd">(0:30)</span></button></p>
        <p class="bb-reg-demo">Demo: pravilna koda je 123456</p>
      </div>`;
  }

  else if (s === 'pass') {
    html = `
      <div class="bb-reg-card">
        <button class="bb-reg-back" data-go="code">${REG_BACK} Nazaj</button>
        ${regStepsBar(3)}
        <p class="bb-reg-kicker">Korak 3 od 4 · varnost</p>
        <h1>Ustvarite geslo</h1>
        <p class="bb-reg-sub">Še hiter varnostni korak — izberite geslo, ki ga poznate samo vi.</p>
        <div class="bb-field">
          <label for="bb-reg-pass">Geslo</label>
          <div class="bb-input-wrap">
            <input class="bb-input-field" id="bb-reg-pass" type="password" placeholder="Vnesi geslo" autocomplete="new-password">
            <button type="button" class="bb-eye" id="bb-reg-eye" aria-label="Prikaži geslo">${eyeIcon(false)}</button>
          </div>
          <div class="bb-strength">
            <div class="bb-strength-bar">${[1,2,3,4].map(i => `<div class="bb-strength-segment" data-seg="${i}"></div>`).join('')}</div>
            <span class="bb-strength-label s0" data-strength-label>Moč gesla</span>
          </div>
          <ul class="bb-pw-rules">
            ${passwordRules('').map(r => `<li data-rule="${r.key}"><span class="rule-dot">${REG_TICK}</span>${r.text}</li>`).join('')}
          </ul>
        </div>
        <div class="bb-field" id="bb-reg-fconf">
          <label for="bb-reg-passconf">Ponovi geslo</label>
          <div class="bb-input-wrap">
            <input class="bb-input-field" id="bb-reg-passconf" type="password" placeholder="Ponovi geslo" autocomplete="new-password">
            <button type="button" class="bb-eye" id="bb-reg-eye2" aria-label="Prikaži geslo">${eyeIcon(false)}</button>
          </div>
          <p class="bb-reg-err">Gesli se ne ujemata.</p>
        </div>
        <button class="bb-reg-cta" id="bb-reg-passcta" style="margin-top:22px" disabled>Nadaljuj</button>
      </div>`;
  }

  else if (s === 'login') {
    html = `
      <div class="bb-reg-card">
        <p class="bb-reg-kicker">Big Bang · moj račun</p>
        <h1>Prijava</h1>
        <p class="bb-reg-sub">Prijavite se in nadaljujte tam, kjer ste ostali.</p>
        <div class="bb-field" id="bb-log-femail">
          <label for="bb-log-email">E-poštni naslov</label>
          <div class="bb-input-wrap"><input class="bb-input-field" id="bb-log-email" type="email" placeholder="Vnesi E-poštni naslov" value="${esc(REG.email)}"></div>
          <p class="bb-reg-err">Ta naslov ni videti pravilen. Preverite ga in poskusite znova.</p>
        </div>
        <div class="bb-field" id="bb-log-fpass" style="margin-bottom:6px">
          <label for="bb-log-pass">Geslo</label>
          <div class="bb-input-wrap">
            <input class="bb-input-field" id="bb-log-pass" type="password" placeholder="Vnesi geslo" autocomplete="current-password">
            <button type="button" class="bb-eye" id="bb-log-eye" aria-label="Prikaži geslo">${eyeIcon(false)}</button>
          </div>
          <p class="bb-reg-err">Vnesite svoje geslo.</p>
        </div>
        <button class="bb-reg-cta" id="bb-log-cta" style="margin-top:18px">Potrdi</button>
        <p class="bb-reg-forgot-below"><a href="#" data-go="forgot">Pozabljeno geslo</a></p>
        <p class="bb-reg-foot sep">Nov uporabnik? <a href="#" data-go="email">Ustvari račun</a></p>
      </div>`;
  }

  else if (s === 'forgot') {
    html = `
      <div class="bb-reg-card">
        <button class="bb-reg-back" data-go="login">${REG_BACK} Nazaj</button>
        <h1>Pozabljeno geslo</h1>
        <p class="bb-reg-sub">Vnesi svoj email in poslali ti bomo navodila za spremembo gesla.</p>
        <div class="bb-field" id="bb-fp-femail">
          <label for="bb-fp-email">E-poštni naslov</label>
          <div class="bb-input-wrap"><input class="bb-input-field" id="bb-fp-email" type="email" placeholder="Vnesi E-poštni naslov" value="${esc(REG.email)}"></div>
          <p class="bb-reg-err">Ta naslov ni videti pravilen. Preverite ga in poskusite znova.</p>
        </div>
        <button class="bb-reg-cta" id="bb-fp-cta">Potrdi</button>
      </div>`;
  }

  else if (s === 'forgotsent') {
    html = `
      <div class="bb-reg-card bb-reg-center">
        <div class="bb-fp-illu">
          <svg width="200" height="150" viewBox="0 0 200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="88" cy="70" r="52" fill="#D9E5F4"/>
            <circle cx="88" cy="70" r="64" stroke="#B9C6D6" stroke-width="1.2" stroke-dasharray="4 6" fill="none"/>
            <rect x="52" y="46" width="74" height="50" rx="4" fill="#0050A0"/>
            <path d="M52 50l37 26 37-26" stroke="#fff" stroke-width="3.4" stroke-linejoin="round" fill="none"/>
            <circle cx="146" cy="44" r="29" fill="#00458F"/>
            <path d="M134 44l8.5 9 16-17" stroke="#fff" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <circle cx="36" cy="56" r="4.5" stroke="#9AA6B6" stroke-width="1.4" fill="none"/>
            <circle cx="44" cy="36" r="2.4" fill="#9AA6B6"/>
            <circle cx="56" cy="120" r="3.4" stroke="#9AA6B6" stroke-width="1.4" fill="none"/>
            <circle cx="140" cy="118" r="2.8" fill="#9AA6B6"/>
          </svg>
        </div>
        <h1>Povezava do spremembe gesla je bila poslana</h1>
        <p class="bb-reg-sub">Na posredovan e-poštni naslov si prejel povezavo do spremembo gesla.</p>
        <p class="bb-resend">Nisi prejel kode? <button id="bb-fp-resend">Ponovno pošlji</button></p>
        <button class="bb-reg-cta ghost" data-go="reset" style="margin-top:18px">Odpri povezavo (demo)</button>
      </div>`;
  }

  else if (s === 'reset') {
    html = `
      <div class="bb-reg-card">
        <h1>Ponastavitev gesla</h1>
        <p class="bb-reg-sub">Tvoje geslo naj bo dolgo vsaj 8 znakov in naj vsebuje vsaj eno malo in eno veliko črko, ter vsaj eno številko ali znak.</p>
        <div class="bb-field">
          <label for="bb-rs-pass">Novo geslo</label>
          <div class="bb-input-wrap">
            <input class="bb-input-field" id="bb-rs-pass" type="password" placeholder="Vnesi novo geslo" autocomplete="new-password">
            <button type="button" class="bb-eye" id="bb-rs-eye" aria-label="Prikaži geslo">${eyeIcon(false)}</button>
          </div>
          <div class="bb-strength">
            <div class="bb-strength-bar">${[1,2,3,4].map(i => `<div class="bb-strength-segment" data-seg="${i}"></div>`).join('')}</div>
            <span class="bb-strength-label s0" data-strength-label>Moč gesla</span>
          </div>
          <ul class="bb-pw-rules grid2">
            ${passwordRules('').map(r => `<li data-rule="${r.key}"><span class="rule-dot">${REG_TICK}</span>${r.text}</li>`).join('')}
          </ul>
        </div>
        <div class="bb-field" id="bb-rs-fconf">
          <label for="bb-rs-conf">Ponovi novo geslo</label>
          <div class="bb-input-wrap">
            <input class="bb-input-field" id="bb-rs-conf" type="password" placeholder="Ponovi novo geslo" autocomplete="new-password">
            <button type="button" class="bb-eye" id="bb-rs-eye2" aria-label="Prikaži geslo">${eyeIcon(false)}</button>
          </div>
          <p class="bb-reg-err">Gesli se ne ujemata.</p>
        </div>
        <button class="bb-reg-cta" id="bb-rs-cta" disabled>Potrdi</button>
      </div>`;
  }

  else if (s === 'data') {
    html = `
      <div class="bb-reg-card">
        <button class="bb-reg-back" data-go="pass">${REG_BACK} Nazaj</button>
        ${regStepsBar(4)}
        <p class="bb-reg-kicker">Korak 4 od 4 · zadnji korak</p>
        <h1>Zaupajte nam svoje podatke</h1>
        <p class="bb-reg-sub">Potrebujemo jih za račune, dostavo in garancije. Pri nas so varni in nikoli jih ne delimo naprej.</p>
        <div class="bb-reg-grid2">
          <div class="bb-field" data-req><label for="bb-reg-ime">Ime</label><div class="bb-input-wrap"><input class="bb-input-field" id="bb-reg-ime" type="text" placeholder="Ime"></div><p class="bb-reg-err">Vpišite ime.</p></div>
          <div class="bb-field" data-req><label for="bb-reg-priimek">Priimek</label><div class="bb-input-wrap"><input class="bb-input-field" id="bb-reg-priimek" type="text" placeholder="Priimek"></div><p class="bb-reg-err">Vpišite priimek.</p></div>
        </div>
        <div class="bb-field"><label for="bb-reg-phone">Telefon <span style="font-weight:400;color:#8A8F9A">(neobvezno)</span></label><div class="bb-input-wrap"><input class="bb-input-field" id="bb-reg-phone" type="tel" placeholder="031 123 456" value="${esc(REG.phone)}"></div></div>
        <p class="bb-reg-hint">Številko potrdite s kodo iz SMS sporočila — tako bodo vaša naročila in obvestila vedno prišla do vas.</p>
        <div class="bb-field"><label for="bb-reg-dob">Datum rojstva <span style="font-weight:400;color:#8A8F9A">(neobvezno)</span></label><div class="bb-input-wrap"><input class="bb-input-field" id="bb-reg-dob" type="text" inputmode="numeric" placeholder="dd/mm/yyyy" maxlength="10"><span class="bb-date-ic" aria-hidden="true"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3.5" y="5" width="17" height="16" rx="2.2"/><line x1="3.5" y1="9.5" x2="20.5" y2="9.5"/><line x1="8" y1="3" x2="8" y2="6.5"/><line x1="16" y1="3" x2="16" y2="6.5"/></svg></span></div></div>
        <p class="bb-reg-hint">Zaupajte nam datum rojstva in ob rojstnem dnevu vas čaka presenečenje.</p>
        ${regKlubBox(true)}
        <button class="bb-reg-cta" id="bb-reg-datacta">Nadaljuj</button>
        <p class="bb-reg-legal">Registracija pomeni strinjanje s <a href="#">pogoji uporabe</a> in <a href="#">politiko zasebnosti</a>.</p>
      </div>`;
  }

  else if (s === 'consents') {
    const cons = [
      ['Obveščanje o naših storitvah, novostih in posebnih ugodnostih', 'Na vaš e-poštni naslov vam bomo občasno poslali novice o izdelkih, storitvah, akcijah in posebnih ugodnostih, prilagojenih vašim zanimanjem.', true],
      ['Obveščanje o posebnih ugodnostih preko mobilnega telefona', 'Najboljše časovno omejene akcije in vaše osebne ugodnosti vam pošljemo tudi po SMS ali v mobilno aplikacijo — samo takrat, ko se res splača.', false],
      ['Obveščanje o aktualnih nagradnih igrah', 'Kot član UAU kluba sodelujete v ekskluzivnih nagradnih igrah. Obvestili vas bomo, ko se začne nova in ko boste med nagrajenci.', false],
    ];
    html = `
      <div class="bb-reg-card">
        <button class="bb-reg-back" data-go="data">${REG_BACK} Nazaj</button>
        ${regStepsBar(4)}
        <p class="bb-reg-kicker">Korak 4 od 4 · UAU klub soglasja</p>
        <h1>Obdelovanje osebnih podatkov</h1>
        <p class="bb-reg-sub">S spodnjim izborom lahko izberete način obveščanja o Big Bang akcijah, popustih, novostih in ugodnostih. Privolitve so prostovoljne in jih lahko kadar koli prekličete v nastavitvah uporabniškega profila ali z odjavo v posameznem prejetem sporočilu.</p>
        <label class="bb-reg-all"><input type="checkbox" class="bb-reg-chk" id="bb-reg-allcon"> <span>Soglasje za vse spodaj navedene namene</span></label>
        ${cons.map(([t, more, on], i) => `
          <div class="bb-reg-con">
            <label class="top"><input type="checkbox" class="bb-reg-chk bb-reg-onecon"${on ? ' checked' : ''}> <span>${t} <button class="bb-reg-more" data-more="${i}">Prikaži več</button></span></label>
            <p class="bb-reg-moretxt" data-moretxt="${i}">${more}</p>
          </div>`).join('')}
        <p class="bb-reg-note">Podatke obdelujemo v skladu s <a href="#">politiko zasebnosti</a> in <a href="#">pravili UAU kluba</a>.</p>
        <button class="bb-reg-cta" id="bb-reg-conscta">Potrdi</button>
      </div>`;
  }

  else if (s === 'done') {
    const n = REG.name ? ', ' + REG.name : '';
    const perks = REG.klub
      ? [['star', '<b>VIP dostop</b> — novosti in predprodaje vidite prvi.'], ['gift', '<b>Ekskluzivne promocije</b> — in nagradne igre samo za člane.'], ['doc', '<b>Vse na enem mestu</b> — računi, garancije, zavarovanja.']]
      : [['cart', '<b>Začnite nakupovati</b> — vaša košarica vas čaka.'], ['phone', '<b>Prenesite aplikacijo</b> — ugodnosti vedno pri roki.'], ['user', '<b>Dopolnite profil</b> — še več prilagojenih ponudb.']];
    html = `
      <div class="bb-reg-card bb-reg-center">
        <div class="bb-reg-ok"><svg width="34" height="34" viewBox="0 0 24 24" fill="none"><path d="M4.5 12.5 10 18 19.5 7" stroke="#002D73" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg></div>
        <p class="bb-reg-kicker">${REG.klub ? 'UAU klub · dobrodošlica' : 'Big Bang · dobrodošlica'}</p>
        <h1>${REG.klub ? 'Dobrodošli v UAU klubu' + n + '!' : 'Račun je ustvarjen' + n + '!'}</h1>
        <p class="bb-reg-sub">${REG.klub
          ? 'Vaš račun je pripravljen, članstvo pa aktivno. V nabiralniku vas že čaka dobrodošlica s prvo UAU ugodnostjo.'
          : 'Vse je pripravljeno za vaš prvi nakup. UAU klubu se lahko kadarkoli pridružite v svojem profilu — ugodnosti vas bodo počakale.'}</p>
        <div class="bb-reg-perks" style="text-align:left">${perks.map(([ic, t]) => `<div class="bb-reg-perk"><span class="ic">${REG_PERK_ICONS[ic]}</span><span>${t}</span></div>`).join('')}</div>
        <button class="bb-reg-cta" data-shop>Začni nakupovati</button>
        <button class="bb-reg-cta ghost" data-enter-profile>Odpri moj profil</button>
      </div>`;
  }

  col.innerHTML = html;
  regWire();
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // in the mobile frame the scroller is the shell's frame, not ROOT
  const frame = ROOT.closest('[data-bb-frame]');
  const sc = frame ? frame.querySelector('.nsb') : null;
  if (sc) sc.scrollTop = 0;
  ROOT.scrollTop = 0;
}

function regGo(step) { REG.step = step; regRender(); }

function regWire() {
  const col = document.getElementById('bb-reg-col');
  col.querySelectorAll('[data-go]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); regGo(b.dataset.go); }));
  col.querySelectorAll('[data-login]').forEach(b => b.addEventListener('click', e => { e.preventDefault(); regGo('login'); }));

  // login step
  const logCta = col.querySelector('#bb-log-cta');
  if (logCta) {
    const em = col.querySelector('#bb-log-email');
    const pa = col.querySelector('#bb-log-pass');
    const eye = col.querySelector('#bb-log-eye');
    eye.addEventListener('click', () => { const sh = pa.type === 'password'; pa.type = sh ? 'text' : 'password'; eye.innerHTML = eyeIcon(sh); });
    [em, pa].forEach(i => i.addEventListener('input', () => i.closest('.bb-field').classList.remove('invalid')));
    const submit = () => {
      let ok = true;
      if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(em.value.trim())) { col.querySelector('#bb-log-femail').classList.add('invalid'); ok = false; }
      if (!pa.value) { col.querySelector('#bb-log-fpass').classList.add('invalid'); ok = false; }
      if (!ok) return;
      REG.email = em.value.trim();
      showToast('Prijava uspešna');
      HOOKS.onAuthDone('login');
    };
    logCta.addEventListener('click', submit);
    [em, pa].forEach(i => i.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); }));
    em.focus();
  }

  // forgot password step
  const fpCta = col.querySelector('#bb-fp-cta');
  if (fpCta) {
    const em = col.querySelector('#bb-fp-email');
    em.addEventListener('input', () => col.querySelector('#bb-fp-femail').classList.remove('invalid'));
    const submit = () => {
      if (!/^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(em.value.trim())) { col.querySelector('#bb-fp-femail').classList.add('invalid'); return; }
      REG.email = em.value.trim(); regGo('forgotsent');
    };
    fpCta.addEventListener('click', submit);
    em.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
    em.focus();
  }

  const fpResend = col.querySelector('#bb-fp-resend');
  if (fpResend) fpResend.addEventListener('click', () => showToast('Povezava je bila ponovno poslana'));

  // reset password step
  const rsCta = col.querySelector('#bb-rs-cta');
  if (rsCta) {
    const pw = col.querySelector('#bb-rs-pass');
    const cf = col.querySelector('#bb-rs-conf');
    const e1 = col.querySelector('#bb-rs-eye');
    const e2 = col.querySelector('#bb-rs-eye2');
    e1.addEventListener('click', () => { const sh = pw.type === 'password'; pw.type = sh ? 'text' : 'password'; e1.innerHTML = eyeIcon(sh); });
    e2.addEventListener('click', () => { const sh = cf.type === 'password'; cf.type = sh ? 'text' : 'password'; e2.innerHTML = eyeIcon(sh); });
    const val = () => {
      const rules = passwordRules(pw.value);
      rules.forEach(r => { const el = col.querySelector(`[data-rule="${r.key}"]`); if (el) el.classList.toggle('ok', r.ok); });
      const { score, label } = passwordStrength(pw.value);
      col.querySelectorAll('[data-seg]').forEach((seg, i) => {
        seg.classList.remove('s1','s2','s3','s4');
        if (i < score) seg.classList.add('s' + score);
      });
      const lbl = col.querySelector('[data-strength-label]');
      if (lbl) { lbl.className = 'bb-strength-label s' + score; lbl.textContent = label || 'Moč gesla'; }
      const match = pw.value && pw.value === cf.value;
      col.querySelector('#bb-rs-fconf').classList.toggle('invalid', !!cf.value && !match);
      rsCta.disabled = !(rules.every(r => r.ok) && match);
    };
    pw.addEventListener('input', val);
    cf.addEventListener('input', val);
    rsCta.addEventListener('click', () => { if (!rsCta.disabled) { regGo('login'); showToast('Geslo je bilo ponastavljeno'); } });
    pw.focus();
  }
  const enter = col.querySelector('[data-enter-profile]');
  if (enter) enter.addEventListener('click', () => HOOKS.onAuthDone('profile'));
  const shopBtn = col.querySelector('[data-shop]');
  if (shopBtn) shopBtn.addEventListener('click', () => HOOKS.onAuthDone('shop'));

  // e-mail step
  const sendBtn = col.querySelector('#bb-reg-sendcode');
  if (sendBtn) {
    const input = col.querySelector('#bb-reg-email');
    const field = col.querySelector('#bb-reg-femail');
    const submit = () => {
      const v = input.value.trim();
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
      field.classList.toggle('invalid', !ok);
      if (!ok) return;
      REG.email = v;
      regGo('code');
    };
    sendBtn.addEventListener('click', submit);
    input.addEventListener('input', () => field.classList.remove('invalid'));
    input.addEventListener('keydown', e => { if (e.key === 'Enter') submit(); });
  }

  // OTP steps
  const otp = col.querySelector('#bb-reg-otp');
  if (otp) {
    const els = [...otp.querySelectorAll('input')];
    const verifyBtn = col.querySelector('#bb-reg-verify');
    const errBox = col.querySelector('#bb-reg-otperr');
    const code = () => els.map(e => e.value).join('');
    const upd = () => { verifyBtn.disabled = code().length < 6; };
    const clearErr = () => { otp.classList.remove('err'); errBox.classList.remove('show'); };
    els.forEach((el, i) => {
      el.addEventListener('input', () => {
        el.value = el.value.replace(/\D/g, '').slice(0, 1);
        clearErr();
        if (el.value && i < 5) els[i + 1].focus();
        upd();
      });
      el.addEventListener('keydown', e => {
        if (e.key === 'Backspace' && !el.value && i > 0) els[i - 1].focus();
        if (e.key === 'Enter' && !verifyBtn.disabled) verifyBtn.click();
        if (e.key === 'ArrowLeft' && i > 0) { e.preventDefault(); els[i - 1].focus(); }
        if (e.key === 'ArrowRight' && i < 5) { e.preventDefault(); els[i + 1].focus(); }
        if (/^[0-9]$/.test(e.key) && el.value) {
          e.preventDefault();
          const nextEmpty = els.findIndex((x, j) => j > i && !x.value);
          const target = nextEmpty === -1 ? (i < 5 ? els[i + 1] : null) : els[nextEmpty];
          if (target) { target.value = e.key; target.focus(); }
          else { el.value = e.key; }
          clearErr(); upd();
        }
      });
      el.addEventListener('paste', e => {
        e.preventDefault();
        const t = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6);
        t.split('').forEach((c, j) => { if (els[j]) els[j].value = c; });
        els[Math.min(t.length, 5)].focus();
        clearErr(); upd();
      });
    });
    verifyBtn.addEventListener('click', () => {
      if (code() === '123456') {
        clearErr();
        if (REG.step === 'code') regGo('pass');
        else regGo('done');
      } else {
        otp.classList.add('err');
        errBox.classList.add('show');
        otp.classList.remove('shake');
        void otp.offsetWidth;
        otp.classList.add('shake');
        setTimeout(() => otp.classList.remove('shake'), 500);
        els.forEach(x => x.value = '');
        upd();
        els[0].focus();
      }
    });
    // resend countdown
    const rb = col.querySelector('#bb-reg-resend');
    const cd = col.querySelector('#bb-reg-cd');
    let secs = 30;
    clearInterval(window.__regTimer);
    cd.textContent = '(0:' + String(secs).padStart(2, '0') + ')';
    window.__regTimer = setInterval(() => {
      secs--;
      if (!document.body.contains(cd)) { clearInterval(window.__regTimer); return; }
      cd.textContent = '(0:' + String(secs).padStart(2, '0') + ')';
      if (secs <= 0) { clearInterval(window.__regTimer); rb.disabled = false; cd.textContent = ''; }
    }, 1000);
    rb.addEventListener('click', () => {
      els.forEach(e => e.value = ''); clearErr(); upd(); els[0].focus();
      showToast('Nova koda je poslana');
    });
    els[0].focus();
  }

  // password step
  const pw = col.querySelector('#bb-reg-pass');
  if (pw) {
    const eye = col.querySelector('#bb-reg-eye');
    const cta = col.querySelector('#bb-reg-passcta');
    eye.addEventListener('click', () => {
      const show = pw.type === 'password';
      pw.type = show ? 'text' : 'password';
      eye.innerHTML = eyeIcon(show);
    });
    const conf = col.querySelector('#bb-reg-passconf');
    const eye2 = col.querySelector('#bb-reg-eye2');
    eye2.addEventListener('click', () => {
      const show = conf.type === 'password';
      conf.type = show ? 'text' : 'password';
      eye2.innerHTML = eyeIcon(show);
    });
    const validatePass = () => {
      const { score, label } = passwordStrength(pw.value);
      col.querySelectorAll('[data-seg]').forEach((seg, i) => {
        seg.classList.remove('s1','s2','s3','s4');
        if (i < score) seg.classList.add('s' + score);
      });
      const lbl = col.querySelector('[data-strength-label]');
      lbl.className = 'bb-strength-label s' + score;
      lbl.textContent = label || 'Moč gesla';
      const rules = passwordRules(pw.value);
      rules.forEach(r => { const el = col.querySelector(`[data-rule="${r.key}"]`); if (el) el.classList.toggle('ok', r.ok); });
      const match = pw.value && pw.value === conf.value;
      col.querySelector('#bb-reg-fconf').classList.toggle('invalid', !!conf.value && !match);
      cta.disabled = !(rules.every(r => r.ok) && match);
    };
    pw.addEventListener('input', validatePass);
    conf.addEventListener('input', validatePass);
    pw.addEventListener('keydown', e => { if (e.key === 'Enter' && !cta.disabled) cta.click(); });
    conf.addEventListener('keydown', e => { if (e.key === 'Enter' && !cta.disabled) cta.click(); });
    cta.addEventListener('click', () => { REG.pass = pw.value; regGo('data'); });
  }

  // data step
  const dataCta = col.querySelector('#bb-reg-datacta');
  if (dataCta) {
    const dob = col.querySelector('#bb-reg-dob');
    if (dob) dob.addEventListener('input', () => {
      const d = dob.value.replace(/\D/g, '').slice(0, 8);
      let out = d.slice(0, 2);
      if (d.length > 2) out += '/' + d.slice(2, 4);
      if (d.length > 4) out += '/' + d.slice(4, 8);
      dob.value = out;
    });
    const join = col.querySelector('#bb-reg-join');
    const joinCb = col.querySelector('#bb-reg-join-cb');
    join.addEventListener('click', () => {
      setTimeout(() => { REG.klub = joinCb.checked; join.classList.toggle('on', REG.klub); }, 0);
    });
    col.querySelectorAll('[data-req] input').forEach(i => i.addEventListener('input', () => i.closest('.bb-field').classList.remove('invalid')));
    dataCta.addEventListener('click', () => {
      let ok = true;
      col.querySelectorAll('[data-req]').forEach(f => {
        const bad = !f.querySelector('input').value.trim();
        f.classList.toggle('invalid', bad);
        if (bad) ok = false;
      });
      if (!ok) return;
      REG.name = col.querySelector('#bb-reg-ime').value.trim();
      REG.phone = col.querySelector('#bb-reg-phone').value.trim();
      if (REG.klub) regGo('consents');
      else if (REG.phone) regGo('sms');
      else regGo('done');
    });
  }

  // consents step
  const consCta = col.querySelector('#bb-reg-conscta');
  if (consCta) {
    const all = col.querySelector('#bb-reg-allcon');
    const ones = [...col.querySelectorAll('.bb-reg-onecon')];
    const syncAll = () => { all.checked = ones.every(x => x.checked); };
    all.addEventListener('change', () => ones.forEach(c => c.checked = all.checked));
    ones.forEach(c => c.addEventListener('change', syncAll));
    syncAll();
    col.querySelectorAll('[data-more]').forEach(b => b.addEventListener('click', () => {
      const t = col.querySelector(`[data-moretxt="${b.dataset.more}"]`);
      const open = t.classList.toggle('show');
      b.textContent = open ? 'Prikaži manj' : 'Prikaži več';
    }));
    consCta.addEventListener('click', () => { REG.phone ? regGo('sms') : regGo('done'); });
  }
}

function applyMode() {
  const reg = TWEAKS.mode === 'registracija';
  ROOT.classList.toggle('reg-mode', reg);
  if (reg) { REG.step = 'intro'; regRender(); }
  else { rerenderCurrent(); }
}

/* ============================================================
   Init
   ============================================================ */
applyLayout();
renderPregled();
applyMode();
const logoutBtn = document.querySelector('.bb-menu-item.logout');
if (logoutBtn) logoutBtn.addEventListener('click', () => HOOKS.onLogout());

return {
  setOpts(next) {
    const prev = { layout: TWEAKS.layout, mode: TWEAKS.mode, klubMember: TWEAKS.klubMember, newUser: TWEAKS.newUser };
    Object.assign(TWEAKS, next || {});
    if (TWEAKS.layout !== prev.layout) applyLayout();
    if (TWEAKS.mode !== prev.mode) { if (TWEAKS.mode === 'profile') { state.view = 'pregled'; setActiveSidebar('pregled'); } applyMode(); }
    else if (TWEAKS.klubMember !== prev.klubMember || TWEAKS.newUser !== prev.newUser || TWEAKS.layout !== prev.layout) rerenderCurrent();
  },
  resetProfile() { state.view = 'pregled'; state.orderIdx = null; setActiveSidebar('pregled'); renderPregled(); showMobileMenu(); },
  destroy() { try { overlayObserver.disconnect(); } catch (e) {} },
  resetAuth() { REG.step = 'intro'; if (TWEAKS.mode === 'registracija') regRender(); },
};
};
