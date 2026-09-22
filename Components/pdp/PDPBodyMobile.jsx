let P = null;
const pv = (key, fallback) => (P && P[key]) || fallback;

// ─── Tokens ───────────────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "bundleMode": false
}/*EDITMODE-END*/;
const T = {
  blue: '#0050A0', darkBlue: '#002D73', navy: '#002D73',
  teal: '#10DFBA', orange: '#F65F04', red: '#DA0D00', green: '#1FB549',
  bg: '#F1F1F4', card: '#FFFFFF', text: '#101117', sub: '#545F71',
  border: '#E4E4EA', borderSub: '#C7C7CD',
};

// ─── Icons ────────────────────────────────────────────────────────
const Icon = {
  Search: ({s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7"/><line x1="17" y1="17" x2="22" y2="22"/></svg>,
  Menu: ({s=22}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  Heart: ({filled, s=22}) => <svg width={s} height={s} viewBox="0 0 30 30" fill={filled?'#DA0D00':'none'}><path d="M3.75736 5.96572C1.41421 8.25335 1.41421 11.9623 3.75736 14.25L12.8516 23.1287C13.4903 23.7523 14.5099 23.7523 15.1485 23.1287L24.2426 14.25C26.5858 11.9623 26.5858 8.25335 24.2426 5.96572C21.8995 3.67809 18.1005 3.67809 15.7574 5.96572L14.0001 7.68151L12.2426 5.96572C9.8995 3.67809 6.1005 3.67809 3.75736 5.96572Z" stroke={filled?'#DA0D00':'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Cart: ({s=22}) => <svg width={s} height={s} viewBox="0 0 30 30" fill="none"><path d="M4 4.25H6.22222L6.66667 6.47222M6.66667 6.47222L8.44444 15.3611H19.5556L24 6.47222H6.66667ZM19.5556 19.8056C18.3283 19.8056 17.3333 20.8005 17.3333 22.0278C17.3333 23.2551 18.3283 24.25 19.5556 24.25C20.7829 24.25 21.7778 23.2551 21.7778 22.0278C21.7778 20.8005 20.7829 19.8056 19.5556 19.8056ZM19.5556 19.8056H8.44444M8.44444 19.8056C7.21714 19.8056 6.22222 20.8005 6.22222 22.0278C6.22222 23.2551 7.21714 24.25 8.44444 24.25C9.67174 24.25 10.6667 23.2551 10.6667 22.0278C10.6667 20.8005 9.67174 19.8056 8.44444 19.8056Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Chevron: ({dir='right', s=14}) => {
    const r = { right: 0, left: 180, down: 90, up: -90 }[dir];
    return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{transform:`rotate(${r}deg)`}}><polyline points="9 18 15 12 9 6"/></svg>;
  },
  Plus: ({s=16}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Minus: ({s=16}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/></svg>,
  Share: ({s=18}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>,
  Close: ({s=22}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>,
  Truck: ({s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="1" y="5" width="14" height="12"/><polygon points="15 9 19 9 22 12 22 17 15 17 15 9"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/></svg>,
  Pin: ({s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Bolt: ({s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M13 10V3L4 14H11L11 21L20 10L13 10Z"/></svg>,
  Briefcase: ({s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><path d="M16 4h-1.5C14.5 2.9 13.6 2 12.5 2h-1C10.4 2 9.5 2.9 9.5 4H8a3 3 0 0 0-3 3v0M16 4a3 3 0 0 1 3 3v0M16 4v0M21 9c-2.5 1-5.5 1.5-9 1.5S5.5 10 3 9M19 9v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9"/></svg>,
  Tag: ({s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.5673 5.51758H1V8.75955C2.5 8.82 4 9.5 4.67 11.87C4.66 13.03 4.21 13.77 3.57 14.34C2.94 14.89 2.09 15.21 1.21 15.27H1V18.52H20.57C21.87 18.52 22.89 17.62 23 16.53V7.7C23 7.12 22.75 6.58 22.29 6.16C21.83 5.74 21.2 5.52 20.57 5.52Z"/><path d="M12 15.5L18 8.5"/><circle cx="12.5" cy="10" r="1.3"/><circle cx="17.5" cy="14" r="1.3"/></svg>,
  Cog: ({s=22}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M10.3 4.3c.4-1.7 2.9-1.7 3.4 0c.2.9 1.5 1.5 2.5.9c1.5-.9 3.3 .8 2.3 2.4c-.6 1-.1 2.3 1 2.6c1.8.4 1.8 2.9 0 3.4c-1.1.3-1.6 1.5-1 2.6c.9 1.5-.8 3.3-2.4 2.3c-1-.6-2.3-.1-2.6 1c-.4 1.8-2.9 1.8-3.4 0c-.3-1.1-1.5-1.6-2.6-1c-1.5.9-3.3-.8-2.3-2.4c.6-1 .1-2.3-1-2.6c-1.8-.4-1.8-2.9 0-3.4c1.1-.3 1.6-1.5 1-2.6c-.9-1.5.8-3.3 2.4-2.3c1 .6 2.3.1 2.6-1z"/><circle cx="12" cy="12" r="3"/></svg>,
  Shield: ({s=22}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4M20.1 6c-.2 0-.4 0-.6 0c-3 0-5.4-1.2-7.5-3.1c-2.1 1.9-4.4 3.1-7.5 3.1c-.2 0-.4 0-.6 0c-.3 1-.4 2.5-.4 3.5c0 5.6 2.5 10.5 8.5 12.5c6-2 8.5-6.9 8.5-12.5c0-1-.1-2.5-.4-3.5z"/></svg>,
  Return: ({s=20}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.14"/></svg>,
  Check: ({color='#1FB549', s=14}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Info: ({s=14}) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
};

function Stars({rating, s=12}) {
  return <span style={{display:'flex', gap:1}}>
    {[1,2,3,4,5].map(i => <svg key={i} width={s} height={s} viewBox="0 0 24 24" fill={i<=Math.round(rating)?'#F59E0B':'none'} stroke="#F59E0B" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>)}
  </span>;
}

// ─── Data ─────────────────────────────────────────────────────────
const COLORS = [
  { name: 'Amber Yellow', hex: '#F4C430' },
  { name: 'Cobalt Violet', hex: '#7B5EA7' },
  { name: 'Onyx Black', hex: '#2A2A2A' },
  { name: 'Marble Gray', hex: '#8A8A8A' },
];
const STORAGE = ['256GB', '512GB', '1TB'];

const CONDITIONS = [
  { id: 'novo', label: 'Novo', sub: 'Puna garancija 2 god.', color: '#0050A0', badgeBg: '#0050A0', badgeColor: '#fff',
    offers: [
      { seller: 'Big Bang', price: '1.099,99', shipping: 'Besplatna dostava', rating: 4.8, stock: 'Na zalihi' },
      { seller: 'TechZone', price: '1.119,00', shipping: 'Dostava 4,99 €', rating: 4.6, stock: 'Na zalihi' },
      { seller: 'MobilCentar', price: '1.129,99', shipping: 'Dostava 3,99 €', rating: 4.5, stock: 'Na zalihi' },
    ]},
  { id: 'otvoreno', label: 'Otvorena ambalaža', sub: 'Neraspakiran, originalna kutija oštećena', color: '#FFCB66', badgeBg: '#FFCB66', badgeColor: '#002D73',
    offers: [{ seller: 'Big Bang', price: '1.029,99', shipping: 'Besplatna dostava', rating: 4.8, stock: 'Na zalihi' }]},
  { id: 'obnovljeno', label: 'Obnovljeno - kao novo', sub: 'Profesionalno obnovljeno, jamstvo 12 mj.', color: '#2BB673', badgeBg: '#2BB673', badgeColor: '#fff', badge: 'POPULARNO',
    offers: [
      { seller: 'Big Bang', price: '879,99', shipping: 'Besplatna dostava', rating: 4.8, stock: 'Na zalihi' },
      { seller: 'Big Bang', price: '829,99', shipping: 'Besplatna dostava', rating: 4.8, stock: '3 kom' },
      { seller: 'ReviveTech', price: '799,99', shipping: 'Dostava 4,99 €', rating: 4.4, stock: 'Na zalihi' },
    ]},
  { id: 'popravljeno', label: 'Popravljeno', sub: 'Servisirano, jamstvo 6 mj.', color: '#2BD9C0', badgeBg: '#2BD9C0', badgeColor: '#002D73',
    offers: [
      { seller: 'Big Bang', price: '749,99', shipping: 'Besplatna dostava', rating: 4.8, stock: '2 kom' },
      { seller: 'FixIT Servis', price: '729,00', shipping: 'Dostava 4,99 €', rating: 4.3, stock: 'Na zalihi' },
    ]},
];

function startingPrice(offers) {
  const nums = offers.map(o => parseFloat(o.price.replace(/\./g,'').replace(',','.')));
  const min = Math.min(...nums);
  return min.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

const ACCESSORIES = [
  { name: 'Samsung Leather Case S24+', price: '49,99 €', type: 'Maska' },
  { name: '45W adapter za punjenje', price: '29,99 €', type: 'Punjač' },
  { name: 'Galaxy Buds3 Pro', price: '199,99 €', type: 'Slušalice' },
  { name: 'Galaxy Watch7 44mm', price: '329,99 €', type: 'Sat' },
  { name: 'Anker MagSafe 10000mAh', price: '59,99 €', type: 'Punjač' },
];

const SIMILAR = [
  { name: 'Galaxy S24 FE 8/256GB', price: '749,99 €', old: '879,99 €', disc: 15, img: 'images/pdp/similar/s24-fe.png' },
  { name: 'Galaxy S24 Ultra 12/256GB', price: '1.299,99 €', old: '1.499,99 €', disc: 13, img: 'images/pdp/similar/s24-ultra.png' },
  { name: 'Pixel 9 Pro 12/256GB', price: '1.049,99 €', old: '1.199,99 €', disc: 12, img: 'images/pdp/similar/pixel-9-pro.png' },
  { name: 'iPhone 16 128GB', price: '979,99 €', img: 'images/pdp/similar/iphone-16.png' },
  { name: 'OnePlus 13 16/512GB', price: '849,99 €', old: '949,99 €', disc: 11, img: 'images/pdp/similar/oneplus-13.png' },
];

// ─── Bottom Sheet ─────────────────────────────────────────────────
function BottomSheet({ title, onClose, children, footer, icon }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1000, animation: 'fadeIn 0.2s' }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)' }}/>
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, background: '#fff',
        borderTopLeftRadius: 18, borderTopRightRadius: 18, maxHeight: '88%', display: 'flex', flexDirection: 'column',
        animation: 'sheetUp 0.28s cubic-bezier(.2,.8,.2,1)', boxShadow: '0 -12px 32px rgba(0,0,0,0.25)' }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '8px 0 4px' }}>
          <span style={{ width: 38, height: 4, borderRadius: 2, background: T.borderSub }}/>
        </div>
        <div style={{ padding: '10px 16px 14px', borderBottom: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', gap: 10 }}>
          {icon && <span style={{ width: 36, height: 36, borderRadius: '50%', background: '#EBF3FF', color: T.blue, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{icon}</span>}
          <h3 style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.01em', flex: 1 }}>{title}</h3>
          <button onClick={onClose} aria-label="Zatvori" style={{ width: 34, height: 34, borderRadius: '50%', border: 'none', background: T.bg, color: T.sub, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon.Close s={18}/>
          </button>
        </div>
        <div style={{ overflowY: 'auto', padding: '14px 16px', flex: 1 }}>{children}</div>
        {footer && <div style={{ padding: '12px 16px', borderTop: `1px solid ${T.border}`, background: '#fff' }}>{footer}</div>}
      </div>
    </div>
  );
}

// ─── Breadcrumb (link-blue style like desktop) ────────────────────
function Breadcrumb({ bundleMode }) {
  const crumbs = bundleMode
    ? ['Početna', 'Gaming', 'PlayStation', 'PS5 Bundle']
    : ['Početna', 'Mobiteli', 'Samsung', pv('name', 'Galaxy S24+')];
  return (
    <div className="no-scrollbar" style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, padding: '10px 12px', overflowX: 'auto', whiteSpace: 'nowrap' }}>
      {crumbs.map((c, i) => (
        <React.Fragment key={c}>
          {i > 0 && <span style={{ color: T.sub, display: 'inline-flex' }}><Icon.Chevron dir="right" s={10}/></span>}
          <span style={{ color: i === crumbs.length - 1 ? T.text : T.blue, fontWeight: i === crumbs.length - 1 ? 600 : 400 }}>{c}</span>
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── Gallery ──────────────────────────────────────────────────────
function Gallery({ bundleMode }) {
  const [active, setActive] = React.useState(0);
  const thumbCount = 5;
  const src = bundleMode ? 'images/pdp/main/ps5-bundle.png' : pv('img', 'images/pdp/main/galaxy-s24-yellow.png');
  return (
    <div style={{ background: '#fff' }}>
      <div style={{ position: 'relative', width: '100%', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
        <img src={src} alt="" style={{ maxWidth: '78%', maxHeight: '78%', objectFit: 'contain', mixBlendMode: 'multiply' }}/>
        {!bundleMode && (
          <div style={{ position:'absolute', top: 12, left: 12, display:'flex', flexDirection: 'column', gap: 6 }}>
            <span style={{ background: T.red, color:'#fff', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>-14%</span>
            <span style={{ background: T.orange, color:'#fff', fontSize: 9, fontWeight: 700, padding: '3px 7px', borderRadius: 4 }}>UAU Cijena</span>
          </div>
        )}
        <button style={{ position:'absolute', top: 12, right: 12, width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: `1px solid ${T.border}`, display:'flex', alignItems:'center', justifyContent:'center', color: T.sub }} aria-label="Spremi"><Icon.Heart s={16}/></button>
        <button style={{ position:'absolute', top: 54, right: 12, width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: `1px solid ${T.border}`, display:'flex', alignItems:'center', justifyContent:'center', color: T.sub }} aria-label="Podijeli"><Icon.Share s={16}/></button>
        <div style={{ position:'absolute', bottom: 10, left: '50%', transform:'translateX(-50%)', display:'flex', gap: 6 }}>
          {Array.from({length: thumbCount}).map((_, i) => (
            <button key={i} onClick={() => setActive(i)} style={{ width: i === active ? 18 : 6, height: 6, borderRadius: 3, background: i === active ? T.blue : T.borderSub, border:'none', transition: 'all 0.2s' }}/>
          ))}
        </div>
        <span style={{ position:'absolute', bottom: 10, right: 16, fontSize: 10, color: T.sub, background: 'rgba(255,255,255,0.85)', padding: '2px 8px', borderRadius: 10, fontWeight: 600 }}>{active + 1} / {thumbCount}</span>
      </div>
    </div>
  );
}

// ─── Inline extras inside BuyBox (Dodatne usluge / Zaštita) ───────
function InlineExtras({ onProtect, onServices }) {
  const rows = [
    { icon: <Icon.Cog/>, title: 'Naručite dodatne usluge', sub: 'Dostava i montaža TV-a na stalak - 39,99 €', onClick: onServices },
    { icon: <Icon.Shield/>, title: 'Zaštiti svoj uređaj', sub: 'Big Bang Plus produljeno održavanje već od 199 €', onClick: onProtect },
  ];
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
      {rows.map(r => (
        <button key={r.title} onClick={r.onClick} style={{ display:'flex', alignItems:'center', gap: 12, padding: '11px 12px', borderRadius: 10, background: '#F3F4F6', border:'none', textAlign:'left', width: '100%' }}>
          <span style={{ color: T.blue, flexShrink: 0, display:'flex' }}>{r.icon}</span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: T.text, marginBottom: 2 }}>{r.title}</div>
            <div style={{ fontSize: 11, color: T.sub, lineHeight: 1.3 }}>{r.sub}</div>
          </div>
          <span style={{ color: T.sub, display:'flex' }}><Icon.Chevron dir="right" s={14}/></span>
        </button>
      ))}
    </div>
  );
}

// ─── BuyBox summary (Trgovac / Država / Stanje / ...) ─────────────
function BuyBoxSummary({ offer, condition, isMarketplace }) {
  const [showAll, setShowAll] = React.useState(false);
  const country = offer.seller === 'Big Bang' ? 'Hrvatska'
    : offer.seller === 'ReviveTech' ? 'Slovenija'
    : offer.seller === 'GreenPhone' ? 'Njemačka'
    : 'Hrvatska';
  const stanjeBg = condition.badgeBg, stanjeFg = condition.badgeColor;
  const dostavljivost = offer.stock === 'Na zalihi' ? '1–2 radna dana' : '2–3 radna dana';
  const jamstvo = condition.id === 'novo' ? '2 godine' : condition.id === 'obnovljeno' ? '12 mjeseci' : '6 mjeseci';
  const rows = [
    ['Trgovac', offer.seller],
    ['Država isporuke', country],
    ['Stanje', <span style={{ background: stanjeBg, color: stanjeFg, padding: '2px 8px', borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{condition.label}</span>],
    ['Dobavljivost', dostavljivost],
    ['Dostava', offer.shipping],
    ['Pravo povrata', isMarketplace ? '14 dana' : '30 dana'],
    ['Jamstvo', jamstvo],
  ];
  const visible = showAll ? rows : rows.slice(0, 5);
  return (
    <div>
      {isMarketplace && (
        <div style={{ display:'flex', alignItems:'center', gap: 10, padding: '12px', background: '#FFF4DC', borderRadius: 10, marginBottom: 12 }}>
          <span style={{ width: 32, height: 32, borderRadius: '50%', background: '#F2A93B', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l1-5h16l1 5"/><path d="M3 9v11h18V9"/></svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 2 }}>Marketplace ponuda</div>
            <div style={{ fontSize: 10, color: T.sub, lineHeight: 1.4 }}>Kupnja moguća isključivo preko web trgovine. <span style={{ textDecoration: 'underline' }}>Saznaj više</span></div>
          </div>
        </div>
      )}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {visible.map(([k, v], i) => (
          <div key={k} style={{ display: 'grid', gridTemplateColumns: '110px 1fr', alignItems: 'center', padding: '9px 0', borderBottom: i < visible.length - 1 ? `1px solid ${T.border}` : 'none' }}>
            <div style={{ fontSize: 11, color: T.sub }}>{k}</div>
            <div style={{ fontSize: 12, fontWeight: 600, color: T.text }}>{v}</div>
          </div>
        ))}
      </div>
      {!showAll && (
        <button onClick={() => setShowAll(true)} style={{ marginTop: 8, background:'none', border:'none', padding: 0, fontSize: 12, fontWeight: 600, color: T.text, textDecoration: 'underline' }}>Prikaži sve</button>
      )}
      <EUGuaranteeBox />
    </div>
  );
}

// ─── EU guarantee block: harmonised notice trigger + EU GARAN label ───
function EUGuaranteeBox() {
  const garan = window.BB_GARAN ? window.BB_GARAN.forProduct(P || { name: 'Galaxy S24+' }) : null;
  const openNotice = () => { if (window.BBEU) window.BBEU.openNotice(); };
  const openLabel = () => { if (window.BBEU && garan) window.BBEU.openLabel(garan); };
  const years = garan && window.BBEU ? window.BBEU.yearsLabel(garan.years) : '';
  return (
    <div style={{ marginTop: 14, border: `1px solid ${T.border}`, borderRadius: 10, overflow: 'hidden' }}>
      <button onClick={openNotice} style={{ width: '100%', background: 'none', border: 'none', padding: '12px 13px', display: 'flex', alignItems: 'flex-start', gap: 9, textAlign: 'left', fontFamily: 'Inter, sans-serif' }}>
        <span style={{ display: 'flex', color: T.blue, flexShrink: 0, marginTop: 1 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21.5s7.5-3.6 7.5-9.4V5.2L12 2.5 4.5 5.2v6.9c0 5.8 7.5 9.4 7.5 9.4z" /><polyline points="8.9 11.8 11.2 14.1 15.2 9.6" /></svg>
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: 12.5, fontWeight: 600, color: T.text, marginBottom: 2 }}>Zakonsko jamstvo usklađenosti — najmanje 2 godine</span>
          <span style={{ display: 'block', fontSize: 11.5, color: T.blue, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>Vaša prava na zakonsko jamstvo</span>
        </span>
      </button>
      {garan && (
        <div style={{ borderTop: `1px solid ${T.border}`, padding: '12px 13px', display: 'flex', flexDirection: 'column', gap: 8 }}>
          <button onClick={openLabel} style={{ background: 'none', border: `1px solid ${T.border}`, borderRadius: 6, padding: 0, overflow: 'hidden', alignSelf: 'flex-start', display: 'block' }}>
            <img src={window.BBEU ? window.BBEU.nestedURI(garan.years) : ''} alt={window.BBEU ? window.BBEU.alt(garan.years) : ''} style={{ display: 'block', height: 24, width: 'auto' }} />
          </button>
          <div style={{ fontSize: 12.5, fontWeight: 600, color: T.text }}>Jamstvo trajnosti proizvođača: {years}</div>
          <div style={{ fontSize: 11.5, color: T.sub, lineHeight: 1.45 }}>{garan.brand} nudi jamstvo za cijeli proizvod, bez dodatnih troškova.</div>
          <button onClick={openLabel} style={{ background: 'none', border: 'none', padding: 0, alignSelf: 'flex-start', fontFamily: 'Inter, sans-serif', fontSize: 11.5, fontWeight: 600, color: T.blue, textDecoration: 'underline', textUnderlineOffset: 2 }}>Oznaka EU GARAN i izjava proizvođača</button>
        </div>
      )}
    </div>
  );
}

// ─── BuyBox ───────────────────────────────────────────────────────
function BuyBox({ bundleMode, onOpenSheet, onOpenCondition }) {
  const [color, setColor] = React.useState('Amber Yellow');
  const [storage, setStorage] = React.useState('256GB');
  const [cond, setCond] = React.useState('novo');
  const [qty, setQty] = React.useState(1);

  const BUNDLE_TITLE = 'PlayStation 5 Digital Chassis + dodatni Dual Sense Wireless Controller';
  const visibleIds = bundleMode ? ['novo', 'otvoreno'] : ['novo', 'obnovljeno', 'popravljeno'];
  const visible = CONDITIONS.filter(c => visibleIds.includes(c.id));
  const currentCond = CONDITIONS.find(c => c.id === cond) || CONDITIONS[0];
  const currentOffer = currentCond.offers[0];
  const isMarketplace = currentOffer.seller !== 'Big Bang';
  React.useEffect(() => { if (!visibleIds.includes(cond)) setCond(visibleIds[0]); }, [bundleMode]);

  const prices = { '256GB': { p: pv('price', '1.099,99'), o: pv('old', '1.279,99') }, '512GB': { p: '1.249,99', o: '1.429,99' }, '1TB': { p: '1.449,99', o: '1.649,99' } };
  const pr = prices[storage];
  const isNovo = cond === 'novo';
  const displayPrice = bundleMode ? '549,99' : (isNovo ? pr.p : currentOffer.price);
  const displayOld = pr.o;
  const _toNum = (s) => parseFloat(String(s).replace(/\./g,'').replace(',','.'));
  const discPct = Math.max(1, Math.round((1 - _toNum(displayPrice) / _toNum(displayOld)) * 100));
  const instalment = bundleMode ? '12 × 45,83 €' : '12 × 91,67 €';

  return (
    <div style={{ background: '#fff', padding: '14px 14px 18px', display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display:'flex', alignItems:'center', gap: 6, fontSize: 11, color: T.sub }}>
        <span>Prodavač:</span>
        <span style={{ fontWeight: 600, color: T.blue }}>Big Bang</span>
        <span style={{ width: 3, height: 3, borderRadius:'50%', background: T.borderSub }}/>
        <span>Šifra: {bundleMode ? 'PS5-BNDL-DC' : 'SM-S926B/DS'}</span>
      </div>

      <h1 style={{ fontSize: 17, fontWeight: 700, color: T.text, lineHeight: 1.25, letterSpacing: '-0.01em' }}>
        {bundleMode ? BUNDLE_TITLE : pv('name', 'Samsung Galaxy S24+ 5G Dual SIM SM-S926B 12/256GB')}
      </h1>

      <div style={{ display:'flex', alignItems:'center', gap: 8 }}>
        <Stars rating={4.3}/>
        <span style={{ fontSize: 12, fontWeight: 600 }}>4.3</span>
        <a href="#reviews" style={{ fontSize: 12, color: T.blue, textDecoration: 'none' }}>384 recenzija</a>
      </div>

      {/* Price */}
      {bundleMode ? (
        <div style={{ border: `1px solid ${T.border}`, borderRadius: 12, padding: '14px 14px' }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: T.text, letterSpacing: '-0.03em', lineHeight: 1, marginBottom: 10 }}>{displayPrice} €</div>
          <div style={{ background: 'rgba(0,80,160,0.06)', borderRadius: 8, padding: '7px 10px', display:'flex', alignItems:'center', gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.blue} strokeWidth="2" strokeLinecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            <span style={{ fontSize: 11, color: T.blue, fontWeight: 500 }}>ili <strong>{instalment}</strong> bez kamata</span>
            <button style={{ marginLeft:'auto', fontSize: 10, color: T.blue, background:'none', border:'none', textDecoration:'underline' }}>Detalji</button>
          </div>
        </div>
      ) : (
        <div style={{ background: 'linear-gradient(135deg,#FFF8F0 0%,#FFF3E8 100%)', border: '1px solid #FFE4CC', borderRadius: 12, padding: '12px 14px' }}>
          <div style={{ display:'flex', alignItems:'center', gap: 8, flexWrap:'wrap' }}>
            {isNovo && (
              <span style={{ display:'flex', alignItems:'center', gap: 2, color: T.green, fontWeight: 800, fontSize: 18, lineHeight: 1 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={T.green} strokeWidth="3.2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                {discPct}%
              </span>
            )}
            <span style={{ color: isNovo ? T.red : T.text, letterSpacing:'-0.03em', lineHeight: 1, fontSize: 26, fontWeight: 700 }}>{displayPrice} €</span>
            {isNovo && <span style={{ fontSize: 12, color: T.sub, textDecoration:'line-through', alignSelf:'center' }}>{displayOld} €</span>}
          </div>
          <div style={{ fontSize: 11, color: T.sub, marginTop: 5 }}>MPC na 10.09.2026. {displayOld || displayPrice} €</div>
          <div style={{ display:'flex', gap: 6, marginTop: 8, flexWrap: 'wrap' }}>
            {isNovo ? (
              <>
                <span style={{ background: T.orange, color:'#fff', fontSize: 10, fontWeight: 700, padding: '3px 7px', borderRadius: 4 }}>UAU Cijena</span>
                <span style={{ background: T.green, color:'#fff', fontSize: 10, fontWeight: 700, padding: '3px 7px', borderRadius: 4 }}>Dodatnih 5% uz kod</span>
              </>
            ) : (
              <span style={{ background: currentCond.badgeBg, color: currentCond.badgeColor, fontSize: 10, fontWeight: 700, padding: '3px 7px', borderRadius: 4 }}>{currentCond.label}</span>
            )}
          </div>
          <div style={{ background: 'rgba(0,80,160,0.06)', borderRadius: 8, padding: '7px 10px', display:'flex', alignItems:'center', gap: 6, marginTop: 10 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.blue} strokeWidth="2" strokeLinecap="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
            <span style={{ fontSize: 11, color: T.blue, fontWeight: 500 }}>ili <strong>{instalment}</strong> bez kamata</span>
            <button style={{ marginLeft:'auto', fontSize: 10, color: T.blue, background:'none', border:'none', textDecoration:'underline' }}>Detalji</button>
          </div>
        </div>
      )}

      {!bundleMode && (
        <div>
          <div style={{ display:'flex', alignItems:'center', gap: 6, marginBottom: 8 }}>
            <span style={{ fontSize: 12, fontWeight: 600 }}>Boja:</span>
            <span style={{ fontSize: 12, color: T.sub }}>{color}</span>
          </div>
          <div style={{ display:'flex', gap: 8 }}>
            {COLORS.map(({name,hex}) => (
              <button key={name} onClick={() => setColor(name)} title={name} style={{
                width: 30, height: 30, borderRadius: '50%', background: hex, border: 'none',
                outline: color === name ? `2.5px solid ${T.blue}` : '2.5px solid transparent',
                outlineOffset: 2, boxShadow: '0 1px 3px rgba(0,0,0,0.18)' }}/>
            ))}
          </div>
        </div>
      )}

      {!bundleMode && (
        <div>
          <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Pohrana:</div>
          <div style={{ display:'flex', gap: 6 }}>
            {STORAGE.map(s => (
              <button key={s} onClick={() => setStorage(s)} style={{
                flex: 1, height: 38, borderRadius: 8, fontSize: 12, fontWeight: storage === s ? 700 : 500,
                border: `2px solid ${storage === s ? T.blue : T.border}`,
                background: storage === s ? '#EBF3FF' : '#fff',
                color: storage === s ? T.blue : T.text }}>{s}</button>
            ))}
          </div>
        </div>
      )}

      {/* Conditions */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 600, marginBottom: 8 }}>Stanje proizvoda:</div>
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${visible.length}, 1fr)`, gap: 6 }}>
          {visible.map(c => {
            const sel = cond === c.id;
            const multi = c.offers.length > 1;
            const sp = multi ? startingPrice(c.offers) : c.offers[0].price;
            return (
              <button key={c.id} onClick={() => setCond(c.id)} style={{
                padding: '8px 8px', borderRadius: 8, textAlign: 'left',
                border: `2px solid ${sel ? T.blue : T.border}`,
                background: sel ? '#EBF3FF' : '#fff',
                position: 'relative', display: 'flex', flexDirection: 'column', gap: 2, minHeight: 76 }}>
                {c.badge && <span style={{ position:'absolute', top:-7, right: 6, background: T.green, color:'#fff', fontSize:8, fontWeight:700, padding:'2px 5px', borderRadius: 3, letterSpacing: '0.04em' }}>{c.badge}</span>}
                <span style={{ position:'absolute', top: 8, right: 8, width: 7, height: 7, borderRadius:'50%', background: c.color }}/>
                <div style={{ fontSize: 11, fontWeight: 700, color: sel ? T.blue : T.text, lineHeight: 1.2, paddingRight: 10 }}>{c.label}</div>
                {multi && <span style={{ fontSize: 8, color: T.sub, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: 2 }}>već od</span>}
                <div style={{ fontSize: 12, fontWeight: 700, color: T.red, lineHeight: 1, letterSpacing: '-0.01em', marginTop: 'auto' }}>{sp} €</div>
              </button>
            );
          })}
        </div>
        <button onClick={onOpenCondition} style={{
          marginTop: 8, width: '100%', background: 'rgba(0,80,160,0.06)', border: 'none', borderRadius: 8,
          padding: '9px 12px', display:'flex', alignItems:'center', gap: 8,
          color: T.blue, fontSize: 11, fontWeight: 500, textAlign: 'left' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={T.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
          <span>Pogledaj sve ponude i stanja</span>
          <span style={{ marginLeft:'auto', display:'inline-flex', alignItems:'center', gap: 2, fontWeight: 600 }}>Otvori <Icon.Chevron dir="right" s={10}/></span>
        </button>
      </div>

      <InlineExtras onProtect={() => onOpenSheet('protect')} onServices={() => onOpenSheet('services')}/>

      {/* Qty + CTA (blue) */}
      <button onClick={() => window.BBCart && window.BBCart.open({ img: pv('img', 'images/pdp/main/galaxy-s24-yellow.png'), name: pv('name', 'Samsung Galaxy S24+ 5G Dual SIM SM-S926B 12/256GB'), price: pv('price', '1.099,99'), old: pv('old', '1.299,99') })}
        className="bbcta" style={{ width: '100%', height: 48, background: T.blue, color: '#fff', border: 'none', borderRadius: 24, fontSize: 14, fontWeight: 700, letterSpacing: '-0.01em' }}>
        Dodaj u košaricu
      </button>

      <BuyBoxSummary offer={currentOffer} condition={currentCond} isMarketplace={isMarketplace}/>
    </div>
  );
}

// ─── Info list (Promo / Dostava / Pickup / Energy / B2B) ──────────
function InfoList({ onOpenSheet }) {
  const items = [
    { id: 'promo', icon: <Icon.Tag/>, title: 'Dostupni promo kodovi' },
    { id: 'delivery', icon: <Icon.Truck/>, title: 'Dostava' },
    { id: 'pickup', icon: <Icon.Pin/>, title: 'Raspoloživost u poslovnicama (5)' },
    { id: 'energy', icon: <Icon.Bolt/>, title: 'Energetski razred' },
    { id: 'b2b', icon: <Icon.Briefcase/>, title: 'B2B ponuda i najam opreme' },
  ];
  return (
    <div style={{ background: '#fff', marginTop: 10 }}>
      {items.map((it, i) => (
        <button key={it.id} onClick={() => onOpenSheet(it.id)} style={{
          width: '100%', padding: '14px 14px', background:'none', border:'none',
          borderBottom: i < items.length - 1 ? `1px solid ${T.border}` : 'none',
          display: 'flex', alignItems: 'center', gap: 12, textAlign: 'left' }}>
          <span style={{ color: T.blue, display: 'flex', flexShrink: 0 }}>{it.icon}</span>
          <span style={{ flex: 1, fontSize: 13, fontWeight: 600, color: T.text }}>{it.title}</span>
          <span style={{ color: T.sub, display: 'flex' }}><Icon.Chevron dir="right" s={14}/></span>
        </button>
      ))}
    </div>
  );
}

// ─── Info tabs (description / specs / reviews) ────────────────────
function Accordion({ title, defaultOpen = false, children }) {
  const [open, setOpen] = React.useState(defaultOpen);
  return (
    <div style={{ borderBottom: `1px solid ${T.border}` }}>
      <button onClick={() => setOpen(o => !o)} style={{
        width: '100%', padding: '14px 14px', background:'none', border:'none',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 13, fontWeight: 600, color: T.text }}>
        {title}
        <span style={{ color: T.sub, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', display:'flex' }}>
          <Icon.Chevron dir="down" s={14}/>
        </span>
      </button>
      {open && <div style={{ padding: '0 14px 16px', fontSize: 13, color: T.text, lineHeight: 1.6 }}>{children}</div>}
    </div>
  );
}

function InfoSection({ bundleMode }) {
  return (
    <div style={{ background: '#fff', marginTop: 10 }}>
      <Accordion title="Opis proizvoda" defaultOpen={true}>
        {bundleMode ? (
          <p>PlayStation 5 Digital Chassis donosi konzolu nove generacije bez optičkog pogona, uparenu s dodatnim DualSense bežičnim kontrolerom. Idealan paket za zajedničko igranje od prvog dana — ultra brza SSD memorija, podrška za 4K i adaptivni okidači.</p>
        ) : (
          <>
            <p style={{ marginBottom: 10 }}>Samsung Galaxy S24+ donosi novu eru pametnih telefona zahvaljujući ugrađenoj Galaxy AI — naprednoj umjetnoj inteligenciji koja mijenja način na koji koristite mobitel. 6,7" Dynamic AMOLED 2X zaslon s 2K rezolucijom.</p>
            <p>Fotografski sustav od tri kamere — predvođen 50MP glavnom senzorom s OIS-om — isporučuje profesionalne snimke u bilo kojim uvjetima.</p>
          </>
        )}
      </Accordion>
      <Accordion title="Specifikacije">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 12px', fontSize: 12 }}>
          {(bundleMode ? [
            ['Konzola', 'PS5 Digital'], ['Memorija', '825 GB SSD'], ['Razlučivost', '4K @ 120Hz'],
            ['HDR', 'HDR10'], ['Kontroleri', '2× DualSense'], ['Težina', '3.4 kg'],
          ] : [
            ['Zaslon', '6.7" Dynamic AMOLED 2X'], ['Rezolucija', '3120 × 1440'], ['Procesor', 'Exynos 2400'],
            ['RAM', '12 GB'], ['Pohrana', '256 GB'], ['Glavna kamera', '50 MP + OIS'],
            ['Baterija', '4900 mAh'], ['OS', 'Android 14, One UI 6.1'],
          ]).map(([k,v]) => (
            <React.Fragment key={k}>
              <span style={{ color: T.sub }}>{k}</span>
              <span style={{ fontWeight: 500 }}>{v}</span>
            </React.Fragment>
          ))}
        </div>
      </Accordion>
      <Accordion title="Recenzije (384)">
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <div style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.02em' }}>4.3</div>
          <div>
            <Stars rating={4.3} s={14}/>
            <div style={{ fontSize: 11, color: T.sub, marginTop: 4 }}>na osnovu 384 recenzija</div>
          </div>
        </div>
        <button style={{ width: '100%', height: 40, border: `1.5px solid ${T.blue}`, borderRadius: 8, background: '#fff', color: T.blue, fontSize: 13, fontWeight: 600 }}>Pogledaj sve recenzije</button>
      </Accordion>
    </div>
  );
}

// ─── Posebne ponude ───────────────────────────────────────────────
function SpecialDeals() {
  const deals = [
    { label: 'Uz kupnju dobivate Samsung Galaxy Buds FE slušalice GRATIS', badge: 'Gratis', color: '#1FB549' },
    { label: 'Aktiviraj Samsung Care+ i dobij 2 godine zaštite uz 50% popusta', badge: '–50%', color: T.orange },
    { label: 'Trade-in: predaj stari mobitel i dobij do 200 € popusta', badge: 'Trade-in', color: T.blue },
  ];
  return (
    <div style={{ background: '#fff', marginTop: 10, padding: '16px 14px' }}>
      <div style={{ display:'flex', alignItems:'center', gap: 8, marginBottom: 10 }}>
        <span style={{ fontSize: 18 }}>🔥</span>
        <h2 style={{ fontSize: 14, fontWeight: 700 }}>Posebne ponude</h2>
      </div>
      <div>
        {deals.map((d, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 0', borderBottom: i < deals.length - 1 ? `1px solid ${T.border}` : 'none' }}>
            <span style={{ background: d.color, color: '#fff', fontSize: 9, fontWeight: 700, padding: '3px 7px', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0 }}>{d.badge}</span>
            <span style={{ fontSize: 12, color: T.text, lineHeight: 1.45 }}>{d.label}</span>
            <span style={{ marginLeft: 'auto', color: T.sub, flexShrink: 0, display:'flex' }}><Icon.Chevron dir="right" s={12}/></span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Moglo bi vam trebati (Accessories) ───────────────────────────
function Accessories() {
  return (
    <div style={{ background: '#fff', marginTop: 10, padding: '16px 0' }}>
      <h2 style={{ fontSize: 14, fontWeight: 700, padding: '0 14px', marginBottom: 12 }}>Moglo bi vam trebati</h2>
      <div className="no-scrollbar" style={{ display:'flex', gap: 10, overflowX: 'auto', padding: '0 14px 4px', scrollSnapType: 'x mandatory' }}>
        {ACCESSORIES.map((a, i) => (
          <div key={i} style={{ flex: '0 0 150px', border: `1px solid ${T.border}`, borderRadius: 10, padding: 10, background: '#FAFAFC', scrollSnapAlign: 'start' }}>
            <div style={{ width: '100%', aspectRatio: '1/1', background: '#fff', borderRadius: 8, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 10, color: T.borderSub, fontFamily: 'monospace' }}>{a.type}</span>
            </div>
            <div style={{ fontSize: 11, lineHeight: 1.3, minHeight: 28, marginBottom: 4 }}>{a.name}</div>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.red }}>{a.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Često kupljeno zajedno (Bundle) ──────────────────────────────
function BundleStrip() {
  const [sel, setSel] = React.useState([0, 1]);
  const items = [
    { name: 'Samsung Galaxy S24+', price: 1099.99 },
    { name: 'Galaxy Buds3 Pro', price: 199.99 },
    { name: '45W punjač', price: 29.99 },
  ];
  const total = items.filter((_, i) => sel.includes(i)).reduce((s, x) => s + x.price, 0);
  return (
    <div style={{ background: '#fff', marginTop: 10, padding: '16px 14px' }}>
      <h2 style={{ fontSize: 14, fontWeight: 700, marginBottom: 12 }}>Često kupljeno zajedno</h2>
      <div style={{ display:'flex', flexDirection:'column', gap: 10, marginBottom: 14 }}>
        {items.map((it, i) => (
          <label key={i} style={{ display:'flex', alignItems:'center', gap: 10, cursor: i === 0 ? 'default' : 'pointer' }}>
            <input type="checkbox" checked={sel.includes(i)} disabled={i === 0}
              onChange={() => setSel(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i])}
              style={{ width: 16, height: 16 }}/>
            <div style={{ width: 44, height: 44, borderRadius: 8, background: '#F3F3F7', flexShrink: 0 }}/>
            <div style={{ flex: 1, fontSize: 12 }}>
              <div style={{ fontWeight: 500, lineHeight: 1.3 }}>{it.name}</div>
              <div style={{ color: T.red, fontWeight: 700, marginTop: 2 }}>{it.price.toFixed(2).replace('.',',')} €</div>
            </div>
          </label>
        ))}
      </div>
      <div style={{ background: T.bg, borderRadius: 8, padding: 12, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
        <div>
          <div style={{ fontSize: 11, color: T.sub }}>Ukupno ({sel.length})</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: T.text, letterSpacing: '-0.02em' }}>{total.toFixed(2).replace('.',',')} €</div>
        </div>
        <button className="bbcta" style={{ background: T.blue, color: '#fff', border: 'none', borderRadius: 8, padding: '10px 16px', fontSize: 12, fontWeight: 700 }}>Dodaj sve</button>
      </div>
    </div>
  );
}

// ─── Dodatne usluge i zaštita (standalone) ────────────────────────
function ExtraServicesSection() {
  const [selected, setSelected] = React.useState([]);
  const toggle = (id) => setSelected(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  const services = [
    { id: 'care', icon: <Icon.Shield s={18}/>, title: 'Samsung Care+', sub: '2 god. zaštite · slučajno oštećenje, kvar, krađa', price: '9,99 €/mj', badge: 'Preporučeno' },
    { id: 'screen', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>, title: 'Zaštita zaslona', sub: 'Kaljeno staklo + ugradnja na licu mjesta', price: '24,99 €' },
    { id: 'setup', icon: <Icon.Cog s={18}/>, title: 'Postavljanje uređaja', sub: 'Stručnjak prenosi sve podatke', price: '19,99 €' },
    { id: 'theft', icon: <Icon.Shield s={18}/>, title: 'Osiguranje od krađe', sub: '12 mjeseci pokrića · isplata u 48h', price: '4,99 €/mj' },
  ];
  const total = services.filter(s => selected.includes(s.id)).reduce((acc, s) => {
    const n = parseFloat(s.price.replace('€/mj','').replace('€','').replace(',','.').trim());
    return acc + (isNaN(n) ? 0 : n);
  }, 0);
  return (
    <div style={{ background: '#fff', marginTop: 10, padding: '16px 14px' }}>
      <h2 style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>Dodatne usluge i zaštita</h2>
      <p style={{ fontSize: 11, color: T.sub, marginBottom: 12 }}>Zaštitite svoju investiciju uz Big Bang usluge</p>
      <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
        {services.map(s => {
          const active = selected.includes(s.id);
          return (
            <div key={s.id} onClick={() => toggle(s.id)} style={{
              display:'flex', alignItems:'center', gap: 10, padding: '10px 12px',
              borderRadius: 10, border: `2px solid ${active ? T.blue : T.border}`,
              background: active ? '#EBF3FF' : '#FAFAFA', cursor: 'pointer', position: 'relative' }}>
              {s.badge && <span style={{ position:'absolute', top:-7, left: 10, background: T.green, color:'#fff', fontSize: 8, fontWeight: 700, padding: '2px 6px', borderRadius: 3 }}>{s.badge}</span>}
              <span style={{ color: active ? T.blue : T.sub, flexShrink: 0, display:'flex' }}>{s.icon}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontWeight: 600 }}>{s.title}</div>
                <div style={{ fontSize: 10, color: T.sub, lineHeight: 1.3 }}>{s.sub}</div>
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: active ? T.blue : T.text, flexShrink: 0 }}>{s.price}</div>
              <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${active ? T.blue : T.borderSub}`, background: active ? T.blue : '#fff', display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0 }}>
                {active && <Icon.Check color="#fff" s={12}/>}
              </div>
            </div>
          );
        })}
      </div>
      {selected.length > 0 && (
        <div style={{ marginTop: 10, padding: '8px 12px', background: '#F3FBF5', border: '1px solid #C3EACC', borderRadius: 8, display:'flex', alignItems:'center', justifyContent:'space-between' }}>
          <span style={{ fontSize: 11, color: T.green, fontWeight: 600 }}>Dodane usluge: +{total.toFixed(2).replace('.', ',')} €</span>
          <button style={{ fontSize: 10, color: T.blue, background:'none', border:'none', fontWeight: 600 }}>Detalji →</button>
        </div>
      )}
    </div>
  );
}

// ─── Više ponuda za proizvod ──────────────────────────────────────
function MoreOffers({ onOpenAll }) {
  const summary = [
    { _cond: CONDITIONS.find(c => c.id === 'novo'), seller: 'TechZone', price: '1.119,00', shipping: 'Dostava 4,99 €', rating: 4.6, reviews: 212, badge: 'UAU Cijena' },
    { _cond: CONDITIONS.find(c => c.id === 'obnovljeno'), seller: 'ReviveTech', price: '799,99', shipping: 'Dostava 4,99 €', rating: 4.4, reviews: 57 },
    { _cond: CONDITIONS.find(c => c.id === 'popravljeno'), seller: 'FixIT', price: '729,00', shipping: 'Dostava 4,99 €', rating: 4.3, reviews: 23 },
  ];
  const totalCount = CONDITIONS.reduce((n, c) => n + c.offers.length, 0);
  return (
    <div style={{ background: '#fff', marginTop: 10, padding: '16px 14px' }}>
      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom: 10 }}>
        <h2 style={{ fontSize: 14, fontWeight: 700 }}>Više ponuda za proizvod</h2>
        <span style={{ fontSize: 11, color: T.sub }}>{totalCount} ponuda</span>
      </div>
      <div>
        {summary.map((s, i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap: 10, padding: '10px 0', borderBottom: i < summary.length - 1 ? `1px solid ${T.border}` : 'none' }}>
            <div style={{ width: 36, height: 36, borderRadius: 7, background: T.border, display:'flex', alignItems:'center', justifyContent:'center', fontSize: 10, fontWeight: 700, color: T.sub, flexShrink: 0 }}>{s.seller.slice(0,2)}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display:'flex', alignItems:'center', gap: 4, marginBottom: 2, flexWrap:'wrap' }}>
                <span style={{ fontSize: 12, fontWeight: 600 }}>{s.seller}</span>
                <span style={{ background: s._cond.badgeBg, color: s._cond.badgeColor, fontSize: 9, fontWeight: 700, padding: '1px 5px', borderRadius: 3 }}>{s._cond.label}</span>
              </div>
              <div style={{ display:'flex', alignItems:'center', gap: 4, fontSize: 10, color: T.sub }}>
                <Stars rating={s.rating} s={10}/>
                <span>{s.rating} ({s.reviews})</span>
              </div>
              <div style={{ fontSize: 10, color: T.sub, marginTop: 2 }}>{s.shipping}</div>
            </div>
            <div style={{ textAlign:'right', flexShrink: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.red }}>{s.price} €</div>
              <button onClick={onOpenAll} style={{ marginTop: 4, height: 26, padding: '0 10px', background: '#fff', color: T.blue, border: `1.5px solid ${T.blue}`, borderRadius: 13, fontSize: 10, fontWeight: 700 }}>Pogledaj</button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={onOpenAll} style={{ marginTop: 10, width: '100%', height: 36, background: '#F8F8FC', border: `1px solid ${T.border}`, borderRadius: 8, fontSize: 12, fontWeight: 600, color: T.text, display:'flex', alignItems:'center', justifyContent:'center', gap: 6 }}>
        Prikaži sve ponude ({totalCount}) <Icon.Chevron dir="right" s={12}/>
      </button>
    </div>
  );
}

// ─── Sticky CTA (blue!) ───────────────────────────────────────────
function StickyCTA({ bundleMode }) {
  const price = bundleMode ? '549,99 €' : pv('price', '1.099,99') + ' €';
  return (
    <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: '#fff', borderTop: `1px solid ${T.border}`, padding: '10px 12px', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)', zIndex: 100, display: 'flex', gap: 12, alignItems: 'center' }}>
      <div style={{ flexShrink: 0 }}>
        <div style={{ fontSize: 10, color: T.sub, lineHeight: 1 }}>Cijena</div>
        <div style={{ fontSize: 18, fontWeight: 700, color: T.red, letterSpacing: '-0.02em', lineHeight: 1.2 }}>{price}</div>
      </div>
      <button onClick={() => window.BBCart && window.BBCart.open({ img: bundleMode ? 'images/pdp/main/ps5-bundle.png' : pv('img', 'images/pdp/main/galaxy-s24-yellow.png'), name: bundleMode ? 'PlayStation 5 Digital Chassis + dodatni Dual Sense Wireless Controller' : pv('name', 'Samsung Galaxy S24+ 5G Dual SIM SM-S926B 12/256GB'), price: price })}
        className="bbcta" style={{ flex: 1, height: 44, background: T.blue, color: '#fff', border: 'none', borderRadius: 22, fontSize: 13, fontWeight: 700, letterSpacing: '-0.01em', display:'flex', alignItems:'center', justifyContent:'center', gap: 8 }}>
        Dodaj u košaricu
      </button>
    </div>
  );
}

// ─── Sheet bodies ─────────────────────────────────────────────────
function PromoBody() {
  const codes = [
    { pct: '20% popusta', text: 'Štedite uz promo kod LJETO20. Vrijedi na odabranim Big Bang maloprodajnim proizvodima, isključivo za jednokratno plaćanje.' },
    { pct: '15% popusta', text: 'Štedite uz promo kod LJETO15. Vrijedi na odabranim proizvodima za plaćanje do 12 rata.' },
  ];
  return (
    <div>
      {codes.map((c, i) => (
        <div key={i} style={{ display:'flex', gap: 12, padding: '14px 0', borderBottom: i < codes.length - 1 ? `1px solid ${T.border}` : 'none' }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: T.green, color: '#fff', display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0 }}>
            <Icon.Tag s={18}/>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{c.pct}</div>
            <p style={{ fontSize: 12, color: T.sub, lineHeight: 1.55 }}>{c.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DeliveryBody() {
  const rows = [
    { title: 'Standardna dostava', text: 'Dostava se očekuje od utorka, 18.6. naprijed. Cijena 4,99 € ili besplatno za narudžbe iznad 49 €.' },
    { title: 'Big Bang dostava, preuzimanje i odvoz', text: 'Dostava, preuzimanje starog uređaja i odvoz se očekuje od utorka, 18.6. naprijed. Cijena prema dogovoru.' },
    { title: 'Preuzimanje u poslovnici', text: 'Besplatno preuzimanje u svim Big Bang poslovnicama. Najčešće dostupno isti dan.' },
  ];
  return (
    <div>
      {rows.map((r, i) => (
        <div key={i} style={{ padding: '14px 0', borderBottom: i < rows.length - 1 ? `1px solid ${T.border}` : 'none' }}>
          <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{r.title}</div>
          <p style={{ fontSize: 12, color: T.sub, lineHeight: 1.55 }}>{r.text}</p>
        </div>
      ))}
    </div>
  );
}

function PickupBody() {
  const stores = [
    { name: 'BB centralno skladište', status: 'available' },
    { name: 'BB Megastore Arena Park', status: 'last' },
    { name: 'BB Store CCO West', status: 'none' },
    { name: 'BB Superstore CCO East', status: 'none' },
    { name: 'BB Store Garden Mall', status: 'none' },
    { name: 'BB Store Sveta Nedelja', status: 'none' },
    { name: 'BB Megastore Osijek', status: 'available' },
    { name: 'BB Store Zadar', status: 'none' },
    { name: 'Samsung Store Arena', status: 'none' },
  ];
  const dotColor = s => s === 'available' ? T.green : s === 'last' ? '#F4B400' : '#D7D9E0';
  const fontWt = s => s === 'none' ? 500 : 700;
  const color = s => s === 'none' ? T.sub : T.text;
  return (
    <div>
      <div style={{ display:'flex', flexDirection:'column', gap: 12, marginBottom: 16 }}>
        {stores.map((s, i) => (
          <div key={i} style={{ display:'flex', alignItems:'center', gap: 10 }}>
            <span style={{ width: 9, height: 9, borderRadius: '50%', background: dotColor(s.status), flexShrink: 0 }}/>
            <span style={{ fontSize: 13, fontWeight: fontWt(s.status), color: color(s.status) }}>{s.name}</span>
          </div>
        ))}
      </div>
      <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 12, display:'flex', gap: 14, fontSize: 11, color: T.sub, flexWrap: 'wrap' }}>
        <span style={{ display:'flex', alignItems:'center', gap: 5 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: T.green }}/>Dostupno odmah</span>
        <span style={{ display:'flex', alignItems:'center', gap: 5 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#F4B400' }}/>Zadnji komad</span>
        <span style={{ display:'flex', alignItems:'center', gap: 5 }}><span style={{ width: 7, height: 7, borderRadius: '50%', background: '#D7D9E0' }}/>Nedostupno</span>
      </div>
    </div>
  );
}

function EnergyBody() {
  const grades = [
    { l: 'A', c: '#0E8B43' }, { l: 'B', c: '#5BB047' }, { l: 'C', c: '#B7CB1F' },
    { l: 'D', c: '#F2DD1B' }, { l: 'E', c: '#F2A81B' }, { l: 'F', c: '#E8741D' }, { l: 'G', c: '#D8261C' },
  ];
  return (
    <div style={{ border: `1px solid ${T.border}`, borderRadius: 8, padding: '20px 20px', background: '#fff' }}>
      <div style={{ color: T.blue, fontWeight: 800, fontSize: 18, marginBottom: 14 }}>ENERG ⚡</div>
      <div style={{ fontSize: 12, color: T.sub, marginBottom: 4 }}>Samsung</div>
      <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 14 }}>SM-S926B/DS</div>
      <div style={{ display:'flex', flexDirection:'column', gap: 4, marginBottom: 14 }}>
        {grades.map((g, i) => {
          const active = i === 1;
          return (
            <div key={g.l} style={{ display:'flex', alignItems:'center' }}>
              <div style={{ width: `${(i+1) * 11 + 30}%`, height: 22, background: g.c, color: '#fff', fontSize: 12, fontWeight: 700, paddingLeft: 8, display:'flex', alignItems:'center', clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)' }}>{g.l}</div>
              {active && (
                <div style={{ marginLeft: 6, background: '#000', color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 3 }}>B</div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ fontSize: 12, color: T.sub, lineHeight: 1.6 }}>
        Energetska učinkovitost: razred B. Potrošnja energije utvrđena za fiksno svjetlosno opterećenje.
      </div>
    </div>
  );
}

function B2BBody() {
  const inp = { width: '100%', height: 40, borderRadius: 8, border: `1px solid ${T.border}`, padding: '0 12px', fontSize: 13, fontFamily: 'inherit' };
  return (
    <div>
      <div style={{ marginBottom: 16, paddingBottom: 14, borderBottom: `1px solid ${T.border}` }}>
        <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>B2B ponuda</h4>
        <p style={{ fontSize: 12, color: T.sub, lineHeight: 1.55 }}>Za tvrtke pripremamo individualne ponude. Pošalji upit i javit ćemo ti se u najkraćem roku.</p>
      </div>
      <div style={{ marginBottom: 16, paddingBottom: 14, borderBottom: `1px solid ${T.border}` }}>
        <h4 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>Najam opreme</h4>
        <p style={{ fontSize: 12, color: T.sub, lineHeight: 1.55 }}>Najam putem Grenke financiranja uz fleksibilne uvjete prema tvojim potrebama.</p>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap: 10 }}>
        <input style={inp} placeholder="Naziv tvrtke"/>
        <input style={inp} placeholder="OIB"/>
        <input style={inp} placeholder="Kontakt e-mail"/>
        <textarea style={{ ...inp, height: 80, padding: '10px 12px', resize: 'vertical' }} placeholder="Poruka..."/>
      </div>
    </div>
  );
}

function ProtectionBody() {
  const plans = [
    { id: 'plus3', label: 'Big Bang Zaštita Plus', sub: 'Slučajna oštećenja, tekućina i kvar', price: '113,99 €', recommended: true },
    { id: 'asistenca2', label: 'Big Bang Asistenca 2 god.', sub: 'Prioritetna podrška + zamjenski uređaj', price: '20,99 €/mj' },
    { id: 'asistenca1', label: 'Big Bang Asistenca 1 god.', sub: 'Prioritetna podrška + održavanje', price: '13,99 €/mj' },
    { id: 'none', label: 'Bez dodatne zaštite', price: '0,00 €' },
  ];
  const [sel, setSel] = React.useState('plus3');
  return (
    <div>
      <div style={{ background: 'linear-gradient(135deg,#EAF2FE,#F4F9FF)', border: '1px solid #CFE2FB', borderRadius: 10, padding: '12px 14px', marginBottom: 16 }}>
        <p style={{ fontSize: 12, color: T.sub, lineHeight: 1.5 }}>
          Big Bang Asistenca produljuje jamstvo i daje prioritetnu podršku, dok Big Bang Zaštita Plus pokriva slučajna oštećenja, tekućinu i nezgode.
        </p>
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
        {plans.map(p => {
          const active = sel === p.id;
          return (
            <div key={p.id} onClick={() => setSel(p.id)} style={{
              display:'flex', alignItems:'center', gap: 10, padding: '12px 12px',
              borderRadius: 10, border: `2px solid ${active ? T.blue : T.border}`,
              background: active ? '#EBF3FF' : '#fff', cursor: 'pointer', position: 'relative' }}>
              {p.recommended && <span style={{ position:'absolute', top:-8, left: 10, background: T.green, color:'#fff', fontSize: 8, fontWeight: 700, padding: '2px 6px', borderRadius: 3 }}>Preporučeno</span>}
              <div style={{ width: 18, height: 18, borderRadius: '50%', border: `2px solid ${active ? T.blue : T.borderSub}`, flexShrink: 0, display:'flex', alignItems:'center', justifyContent:'center' }}>
                {active && <span style={{ width: 9, height: 9, borderRadius: '50%', background: T.blue }}/>}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{p.label}</div>
                {p.sub && <div style={{ fontSize: 10, color: T.sub, marginTop: 2 }}>{p.sub}</div>}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: active ? T.blue : T.text, flexShrink: 0 }}>{p.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ServicesBody() {
  const services = [
    { id: 's1', title: 'Dostava i montaža TV-a', sub: 'Na zid ili stalak', price: '39,99 €' },
    { id: 's2', title: 'Instalacija aparata', sub: 'Veliki kućanski aparati', price: '49,99 €' },
    { id: 's3', title: 'Odvoz starog uređaja', sub: 'Zbrinjavanje po EU normama', price: '14,99 €' },
    { id: 's4', title: 'Postavljanje i prijenos podataka', sub: 'Mobiteli, tableti, laptopi', price: '19,99 €' },
  ];
  const [sel, setSel] = React.useState([]);
  const toggle = id => setSel(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  return (
    <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
      {services.map(s => {
        const active = sel.includes(s.id);
        return (
          <div key={s.id} onClick={() => toggle(s.id)} style={{
            display:'flex', alignItems:'center', gap: 10, padding: '12px',
            borderRadius: 10, border: `2px solid ${active ? T.blue : T.border}`,
            background: active ? '#EBF3FF' : '#fff', cursor: 'pointer' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600 }}>{s.title}</div>
              <div style={{ fontSize: 10, color: T.sub, marginTop: 2 }}>{s.sub}</div>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: active ? T.blue : T.text, flexShrink: 0 }}>{s.price}</div>
            <div style={{ width: 18, height: 18, borderRadius: 4, border: `2px solid ${active ? T.blue : T.borderSub}`, background: active ? T.blue : '#fff', display:'flex', alignItems:'center', justifyContent:'center', flexShrink: 0 }}>
              {active && <Icon.Check color="#fff" s={12}/>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function AllOffersBody({ bundleMode }) {
  const [activeId, setActiveId] = React.useState('__all');
  const visibleIds = bundleMode ? ['novo', 'otvoreno'] : ['novo', 'otvoreno', 'obnovljeno', 'popravljeno'];
  const filter = [{ id: '__all', label: 'Sve' }, ...CONDITIONS.filter(c => visibleIds.includes(c.id))];
  const offers = activeId === '__all'
    ? CONDITIONS.filter(c => visibleIds.includes(c.id)).flatMap(c => c.offers.map(o => ({ ...o, _cond: c })))
    : CONDITIONS.find(c => c.id === activeId).offers.map(o => ({ ...o, _cond: CONDITIONS.find(c => c.id === activeId) }));
  return (
    <div>
      <div className="no-scrollbar" style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 10, marginBottom: 10, borderBottom: `1px solid ${T.border}` }}>
        {filter.map(f => {
          const active = activeId === f.id;
          return (
            <button key={f.id} onClick={() => setActiveId(f.id)} style={{
              padding: '6px 12px', borderRadius: 999, fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap',
              border: `1.5px solid ${active ? T.blue : T.border}`,
              background: active ? T.blue : '#fff',
              color: active ? '#fff' : T.text }}>{f.label}</button>
          );
        })}
      </div>
      <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
        {offers.map((o, i) => (
          <div key={i} style={{ border: `1px solid ${T.border}`, borderRadius: 10, padding: 10, display:'flex', alignItems:'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: 7, background: T.border, display:'flex', alignItems:'center', justifyContent:'center', fontSize: 10, fontWeight: 700, color: T.sub, flexShrink: 0 }}>{o.seller.slice(0, 2)}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display:'flex', alignItems:'center', gap: 4, flexWrap:'wrap' }}>
                <span style={{ fontSize: 12, fontWeight: 600 }}>{o.seller}</span>
                <span style={{ background: o._cond.badgeBg, color: o._cond.badgeColor, fontSize: 9, fontWeight: 700, padding: '1px 5px', borderRadius: 3 }}>{o._cond.label}</span>
              </div>
              <div style={{ fontSize: 10, color: T.sub, marginTop: 2 }}>{o.shipping} · {o.stock}</div>
            </div>
            <div style={{ textAlign:'right', flexShrink: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: T.red }}>{o.price} €</div>
              <button className="bbcta" style={{ marginTop: 4, height: 26, padding: '0 10px', background: T.blue, color: '#fff', border: 'none', borderRadius: 13, fontSize: 10, fontWeight: 700 }}>Odaberi</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── App ──────────────────────────────────────────────────────────
const SHEETS = {
  promo: { title: 'Dostupni promo kodovi', icon: <Icon.Tag s={20}/>, Body: PromoBody },
  delivery: { title: 'Dostava', icon: <Icon.Truck s={20}/>, Body: DeliveryBody },
  pickup: { title: 'Raspoloživost u poslovnicama', icon: <Icon.Pin s={20}/>, Body: PickupBody },
  energy: { title: 'Energetski razred', icon: <Icon.Bolt s={20}/>, Body: EnergyBody },
  b2b: { title: 'B2B ponuda i najam opreme', icon: <Icon.Briefcase s={20}/>, Body: B2BBody },
  protect: { title: 'Zaštiti svoj uređaj', icon: <Icon.Shield s={20}/>, Body: ProtectionBody },
  services: { title: 'Naručite dodatne usluge', icon: <Icon.Cog s={20}/>, Body: ServicesBody },
  alloffers: { title: 'Više ponuda za proizvod', icon: <Icon.Tag s={20}/>, Body: AllOffersBody },
};


function PDPBodyMobile({ bundleMode = false, product = null }) {
  P = product && product.name ? product : null;
  const [sheet, setSheet] = React.useState(null);
  const SheetCfg = sheet ? SHEETS[sheet] : null;
  return (
    <div style={{ width: '100%', background: T.bg }}>
      <Breadcrumb bundleMode={bundleMode}/>
      <Gallery bundleMode={bundleMode}/>
      <BuyBox bundleMode={bundleMode} onOpenSheet={setSheet} onOpenCondition={() => setSheet('alloffers')}/>
      <InfoList onOpenSheet={setSheet}/>
      <InfoSection bundleMode={bundleMode}/>
      <SpecialDeals/>
      <Accessories/>
      <BundleStrip/>
      <ExtraServicesSection/>
      <MoreOffers onOpenAll={() => setSheet('alloffers')}/>
      {SheetCfg && (
        <BottomSheet title={SheetCfg.title} icon={SheetCfg.icon} onClose={() => setSheet(null)}>
          <SheetCfg.Body bundleMode={bundleMode}/>
        </BottomSheet>
      )}
    </div>
  );
}
module.exports = { PDPBodyMobile, MobStickyCTA: StickyCTA };
