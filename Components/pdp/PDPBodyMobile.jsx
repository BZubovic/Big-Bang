let P = null;
const pv = (key, fallback) => (P && P[key]) || fallback;

// ─── Prototype product types (shell "Proizvod" setting) ───
let PT = 'default';
const BUNDLE_TITLE = 'PlayStation 5 Digital Chassis + dodatni Dual Sense Wireless Controller';

const BRAND_BY_TYPE = { default: 'Samsung', klima: 'Hisense', minimal: 'Philips', marketplace: 'Dormeo', bundle: 'Sony PlayStation' };
const BRANDS = ['Samsung','Apple','Xiaomi','Huawei','Honor','Motorola','Nokia','Oppo','Realme','OnePlus','Google','Sony','LG','Philips','Hisense','Gorenje','Bosch','Siemens','Beko','Electrolux','AEG','Whirlpool','Candy','Haier','Tesla','Vivax','TCL','Panasonic','Dyson','Rowenta','Tefal','Braun','DeLonghi','Krups','Lenovo','HP','Dell','Asus','Acer','MSI','Microsoft','Nintendo','PlayStation','JBL','Bose','Dormeo','Garmin','Canon','Nikon','Gopro'];
let OPEN_BRAND = null;
function productBrand() {
  if (P && P.brand) return P.brand;
  if (PT !== 'default' || !P) return BRAND_BY_TYPE[PT] || 'Samsung';
  const w = String(P.name || '').split(/[\s,/]+/).map(x => x.toLowerCase());
  const hit = BRANDS.find(b => w.includes(b.toLowerCase()));
  return hit || 'Samsung';
}
function BrandLink({ size = 13, bare = false }) {
  return (
    <span style={{ fontSize: size, color: '#545F71', whiteSpace: 'nowrap' }}>{bare ? '' : 'Brend: '}<a href="#" onClick={e => { e.preventDefault(); OPEN_BRAND && OPEN_BRAND(productBrand()); }} className="bb-brand"
      style={{ fontWeight: 600, color: '#0050A0', textDecoration: 'underline', textUnderlineOffset: 2 }}>{productBrand()}</a></span>
  );
}
const TYPE_P = {
  klima: { name: 'Klima uređaj HISENSE Easy Smart 3,5 kW', img: 'images/prod-hisense-klima.webp', price: '529,00', old: '619,00' },
  minimal: { name: 'Brijač PHILIPS S5588/38 Series 5000', img: 'images/prod-philips-brijac.webp', price: '129,99', old: '149,99' },
  marketplace: { name: 'Madrac DORMEO Memosan Classic, srednje tvrdi', img: 'images/c/i-madraci.webp', price: '389,00', old: '459,00' },
  bundle: { name: 'PlayStation 5 Digital Chassis + dodatni Dual Sense Wireless Controller', img: 'images/pdp/main/ps5-bundle.png', price: '549,99', old: '619,99' }
};
const DIMS = [['80 × 200', -80], ['90 × 200', 0], ['140 × 200', 140], ['160 × 200', 190], ['180 × 200', 240]];


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
  const filled = Math.round(rating);
  return <span style={{display:'flex', gap:1}}>
    {[0,1,2,3,4].map(i => <svg key={i} width={s} height={s * 23 / 24} viewBox="0 0 24 23" fill={i < filled ? '#F5B82E' : '#B5B9C0'}><path d="M12 0l3.1 7.5 8.3.7-6.3 5.4 2 8.2L12 17.4l-7.1 4.4 2-8.2L.6 8.2l8.3-.7z"></path></svg>)}
  </span>;
}

// ─── Data ─────────────────────────────────────────────────────────
const COLORS = [
  { name: 'Amber Yellow', hex: '#F4C430' },
  { name: 'Cobalt Violet', hex: '#7B5EA7' },
  { name: 'Onyx Black', hex: '#2A2A2A' },
  { name: 'Marble Gray', hex: '#8A8A8A', na: true },
];
const STORAGE = ['128GB', '256GB', '512GB', '1TB'];
const STORAGE_NA = ['1TB'];
const COLOR_HR = { 'Amber Yellow': 'žuta', 'Cobalt Violet': 'ljubičasta', 'Onyx Black': 'crna', 'Marble Gray': 'siva' };
const COND_UI = { novo: { label: 'Novo', sub: 'Originalno pakiranje' }, otvoreno: { label: 'Otvorena ambalaža', sub: 'Oštećena kutija' }, obnovljeno: { label: 'Kao novo', save: true }, popravljeno: { label: 'Dobro stanje', sub: 'Vidljivi tragovi' } };

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
    <div className="nsb" style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, padding: '16px 12px 10px', background: '#fff', overflowX: 'auto', whiteSpace: 'nowrap' }}>
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
      <div style={{ position: 'relative', margin: '0 12px', aspectRatio: '1 / 1', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F6F6F8', borderRadius: 12, overflow: 'hidden' }}>
        <img src={src} alt="" style={{ maxWidth: '78%', maxHeight: '78%', objectFit: 'contain', mixBlendMode: 'multiply' }}/>
        <button style={{ position:'absolute', top: 12, right: 12, width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: `1px solid ${T.border}`, display:'flex', alignItems:'center', justifyContent:'center', color: T.sub }} aria-label="Spremi"><Icon.Heart s={16}/></button>
        <button style={{ position:'absolute', top: 54, right: 12, width: 34, height: 34, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: `1px solid ${T.border}`, display:'flex', alignItems:'center', justifyContent:'center', color: T.sub }} aria-label="Podijeli"><Icon.Share s={16}/></button>
        <button onClick={() => setActive((a) => (a - 1 + thumbCount) % thumbCount)} aria-label="Prethodna slika" style={{ position: 'absolute', top: '50%', left: 8, transform: 'translateY(-50%)', width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#101117', padding: 0, cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 6 9 12 15 18"></polyline></svg></button>
        <button onClick={() => setActive((a) => (a + 1) % thumbCount)} aria-label="Sljedeća slika" style={{ position: 'absolute', top: '50%', right: 8, transform: 'translateY(-50%)', width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.92)', border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#101117', padding: 0, cursor: 'pointer', boxShadow: '0 1px 4px rgba(0,0,0,0.08)' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"></polyline></svg></button>
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
function EUGuaranteeBox({ mt = 14 }) {
  const garan = window.BB_GARAN ? window.BB_GARAN.forProduct(P || { name: 'Galaxy S24+' }) : null;
  const openNotice = () => { if (window.BBEU) window.BBEU.openNotice(); };
  const openLabel = () => { if (window.BBEU && garan) window.BBEU.openLabel(garan); };
  const years = garan && window.BBEU ? window.BBEU.yearsLabel(garan.years) : '';
  return (
    <div style={{ marginTop: mt, border: `1px solid ${T.border}`, borderRadius: 12, overflow: 'hidden' }}>
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

// ─── EU GARAN nested label only (opens the full label) ───

// ─── EU common-charger pictogram (Directive (EU) 2022/2380) ───
function ChargerBox({ included = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, border: '1px solid #E3E4E9', borderRadius: 12, padding: '12px 14px', background: '#fff' }}>
      <img src={included ? 'images/eu/charger-included.svg' : 'images/eu/charger-not-included.svg'} alt={included ? 'Punjač uključen' : 'Punjač nije uključen'} style={{ height: 34, width: 'auto', flexShrink: 0, display: 'block' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2, minWidth: 0 }}>
        <span style={{ fontSize: 14, fontWeight: 700, color: '#101117' }}>{included ? 'Punjač je uključen u pakiranje' : 'Punjač nije uključen u pakiranje'}</span>
        <span style={{ fontSize: 12, color: '#545F71', lineHeight: 1.45 }}>Punjenje preko USB-C · podržava USB PD brzo punjenje 15–45 W</span>
      </div>
    </div>
  );
}

function GaranBadge() {
  const garan = window.BB_GARAN ? window.BB_GARAN.forProduct(P || { name: 'Galaxy S24+' }) : null;
  if (!garan || !window.BBEU) return null;
  return (
    <button onClick={() => window.BBEU.openLabel(garan)} title={window.BBEU.alt(garan.years)} style={{ alignSelf: 'flex-start', background: 'none', border: 'none', padding: 0, cursor: 'pointer', display: 'block' }}>
      <img src="images/eu/garan-badge-5.png" alt={window.BBEU.alt(garan.years)} style={{ display: 'block', height: 30, width: 'auto' }} />
    </button>
  );
}

// ─── BuyBox ───────────────────────────────────────────────────────

// ─── Extra offers (price block) ───────────────────────────────────
const OFFERS = [
  { title: 'Dodatnih 15% popusta na ovaj proizvod uz kod SAMSUNG15 u košarici.', code: 'SAMSUNG15' },
  { title: 'Uz kupnju dobivate Samsung Galaxy Buds FE slušalice gratis.' },
  { title: 'Samsung Care+ – 2 godine potpune zaštite uz 50% popusta.' },
  { title: 'Trade-in: predajte stari mobitel i dobijte do 200 € popusta.' }
];
function OffersBox() {
  const [open, setOpen] = React.useState(false);
  const [top, ...rest] = OFFERS;
  const tag = (sz) => <svg width={sz} height={sz} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle></svg>;
  return (
    <div style={{ marginTop: 10, borderRadius: 12, background: '#E6F5EC', overflow: 'hidden' }}>
      <button onClick={() => window.dispatchEvent(new CustomEvent('bb-open-promo'))} aria-haspopup="dialog" style={{ width: '100%', display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit' }}>
        <span style={{ flex: 1, minWidth: 0, fontSize: 13, fontWeight: 500, lineHeight: '20px', color: '#101117', display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: 2, overflow: 'hidden', maxHeight: 40 }}>
          <span style={{ fontWeight: 700, color: '#0B7A48' }}>Dodatnih 15% popusta</span> na ovaj proizvod uz kod <span style={{ fontWeight: 700 }}>{top.code}</span> u košarici.<span style={{ marginLeft: 4, whiteSpace: 'nowrap', fontSize: 12, fontWeight: 600, color: '#0050A0' }}>{'+' + rest.length + ' dodatne ponude'}</span>
        </span>
        <span style={{ color: '#545F71', display: 'flex', alignSelf: 'center', transition: 'transform .2s' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 6 15 12 9 18"></polyline></svg></span>
      </button>
    </div>
  );
}

function ProductHead({ bundleMode }) {
  return (
    <div style={{ background: '#fff', padding: '0 12px 16px', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <h1 style={{ fontSize: 16, fontWeight: 700, color: T.text, lineHeight: '26px', letterSpacing: '-0.01em' }}>
        {bundleMode ? BUNDLE_TITLE : pv('name', 'Samsung Galaxy S24+ 5G, 12/256 GB, Amber Yellow')}
      </h1>

      <div style={{ display:'flex', alignItems:'center', gap: 8, whiteSpace: 'nowrap' }}>
        <Stars rating={4.3}/>
        <span style={{ fontSize: 12, fontWeight: 600 }}>4.3</span>
        <a href="#reviews" style={{ fontSize: 12, color: T.blue, textDecoration: 'none', marginLeft: -4 }}>(384)</a>
        <span style={{ width: 3, height: 3, borderRadius: '50%', background: T.borderSub }}></span>
        <BrandLink size={12} bare/>
        <span style={{ width: 3, height: 3, borderRadius: '50%', background: T.borderSub }}></span>
        <span style={{ fontSize: 12, color: T.sub }}>ID: 500000342</span>
      </div>
      {!bundleMode && (
        <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
          <span style={{ background: '#002D73', color: '#fff', fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 4 }}>Besplatna dostava</span>
          <span style={{ background: '#F65F04', color: '#fff', fontSize: 11, fontWeight: 600, padding: '3px 8px', borderRadius: 4 }}>UAU hot deals</span>
        </div>
      )}
    </div>
  );
}


function OptionsFlyout({ title, onClose, children }) {
  React.useEffect(() => { const k = (e) => { if (e.key === 'Escape') onClose(); }; window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, []);
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 1200 }}>
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(16,17,23,0.45)' }}></div>
      <div role="dialog" aria-label={title} style={{ position: 'absolute', left: 0, right: 0, bottom: 0, maxHeight: '85%', borderRadius: '18px 18px 0 0', background: '#fff', display: 'flex', flexDirection: 'column', boxShadow: '0 8px 32px rgba(0,0,0,0.2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 16px', borderBottom: '1px solid #E3E4E9' }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: '#101117' }}>{title}</span>
          <button onClick={onClose} aria-label="Zatvori" style={{ width: 36, height: 36, borderRadius: '50%', border: 'none', background: '#F1F1F4', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#101117' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
        </div>
        <div style={{ overflowY: 'auto', padding: '14px 16px 24px', display: 'flex', flexDirection: 'column', gap: 10 }}>{children}</div>
      </div>
    </div>
  );
}

function BuyBox({ bundleMode, onOpenSheet, onOpenCondition }) {
  const [color, setColor] = React.useState('Amber Yellow');
  const [storage, setStorage] = React.useState('256GB');
  const [cond, setCond] = React.useState('novo');
  const [qty, setQty] = React.useState(1);

  const visibleIds = bundleMode ? ['novo', 'otvoreno'] : ['novo', 'otvoreno', 'obnovljeno', 'popravljeno'];
  const allConds = CONDITIONS.filter(c => visibleIds.includes(c.id));
  const top3 = (list, sel, key) => { const t = list.slice(0, 3); if (!t.some(x => key(x) === sel)) { const s = list.find(x => key(x) === sel); if (s) t[2] = s; } return t; };
  const [optFly, setOptFly] = React.useState(null);
  const [mont, setMont] = React.useState(false);
  const [dim, setDim] = React.useState(1);
  const currentCond = CONDITIONS.find(c => c.id === cond) || CONDITIONS[0];
  const currentOffer = currentCond.offers[0];
  const isMarketplace = currentOffer.seller !== 'Big Bang';
  React.useEffect(() => { if (!visibleIds.includes(cond)) setCond(visibleIds[0]); }, [bundleMode]);

  const _n = (s) => parseFloat(String(s).replace(/\./g,'').replace(',','.')) || 0;
  const _f = (n) => n.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  const _bp = _n(pv('price', '1.299,00')), _bo = _n(pv('old', '1.479,00')) || _bp;
  const prices = { '128GB': { p: _f(_bp - 100), o: _f(_bo - 100) }, '256GB': { p: _f(_bp), o: _f(_bo) }, '512GB': { p: _f(_bp + 120), o: _f(_bo + 120) }, '1TB': { p: _f(_bp + 300), o: _f(_bo + 300) } };
  const condPrice = (id) => id === 'novo' ? pr.p : _f(Math.max(1, Math.round(_n(pr.p) * (id === 'obnovljeno' ? 0.77 : id === 'popravljeno' ? 0.68 : 0.92)) - 0.01));
  const pr = prices[storage];
  const isNovo = cond === 'novo';
  const extra = PT === 'klima' && mont ? 149 : PT === 'marketplace' ? DIMS[dim][1] : 0;
  const displayPrice = bundleMode ? '549,99' : _f(_n(condPrice(cond)) + extra);
  const displayOld = bundleMode ? '619,99' : _f(_n(pr.o) + extra);
  const _toNum = (s) => parseFloat(String(s).replace(/\./g,'').replace(',','.'));
  const discPct = Math.max(1, Math.round((1 - _toNum(displayPrice) / _toNum(displayOld)) * 100));
  const instalment = bundleMode ? '12 × 45,83 €' : '12 × 91,67 €';

  return (
    <div style={{ background: '#fff', padding: '14px 14px 24px', display: 'flex', flexDirection: 'column', gap: 28 }}>
      {/* Price */}
        <div style={{ margin: "0px 0px 0px" }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 26, fontWeight: 800, lineHeight: '32px', letterSpacing: '-0.02em', color: '#101117', whiteSpace: 'nowrap' }}>{displayPrice} €</span>
              {isNovo && <span style={{ display: 'inline-block', padding: '2px 6px', borderRadius: 3, background: '#DA0D00', color: '#fff', fontSize: 12.5, fontWeight: 700, lineHeight: '17px' }}>-{(_toNum(displayOld) - _toNum(displayPrice)).toFixed(2).replace('.', ',')} €</span>}
            </div>
            <div style={{ marginTop: 4, display: 'flex', flexDirection: 'column', gap: 1, fontSize: 12, lineHeight: '16px', color: '#8B95A5' }}>
              {isNovo && <span>Najniža cijena u zadnjih 30 dana: <span style={{ textDecoration: 'line-through' }}>{displayOld} €</span></span>}
              <span>Cijena na 10.09.2026. {displayOld || displayPrice} €</span>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 5, flexShrink: 0 }}>
            <span style={{ display: 'flex', height: 28 }}>
              <span style={{ width: 36, background: '#00A651', color: '#fff', fontSize: 17, fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingLeft: 9, boxSizing: 'border-box', clipPath: 'polygon(30% 0,100% 0,100% 100%,30% 100%,0 50%)' }}>A</span>
              <span style={{ width: 12, boxSizing: 'border-box', border: '1px solid #101117', borderLeft: 'none', background: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontSize: 7, fontWeight: 700, lineHeight: 1.05, color: '#101117' }}><span>A</span><span>↑</span><span>G</span></span>
            </span>
            <span style={{ fontSize: 10.5, lineHeight: 1.25, color: '#545F71', textDecoration: 'underline', textUnderlineOffset: 2, whiteSpace: 'nowrap', cursor: 'pointer' }}>Informacijski list</span>
          </div>
        </div>
        {PT !== 'marketplace' && <div style={{ marginTop: 10, fontSize: 13, fontWeight: 600, lineHeight: 1.35, letterSpacing: '-0.01em', color: '#101117' }}>{String(instalment).replace(/^(\d+)\s*[×x]\s*(.+)$/, '$2 / $1 rata')} <span style={{ marginLeft: 6, fontSize: 12, fontWeight: 600, color: '#0050A0', textDecoration: 'underline', textUnderlineOffset: 2, cursor: 'pointer' }}>Saznaj više</span></div>}
        {PT !== 'marketplace' && (isNovo ? <OffersBox /> : (
          <div style={{ marginTop: 12, alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', height: 32, boxSizing: 'border-box', padding: '0 12px', borderRadius: 8, background: '#CDD700', color: '#002D73', fontSize: 14, fontWeight: 800, whiteSpace: 'nowrap' }}>
            −{(_toNum(prices['256GB'].p) - _toNum(displayPrice)).toFixed(2).replace('.', ',')} € u odnosu na novi
          </div>
        ))}
      </div>

      {!bundleMode && PT === 'default' && (
        <div>
          <div style={{ fontSize: 14, color: '#545F71', marginBottom: 10 }}>Boja: <span style={{ fontWeight: 700, color: '#101117' }}>{color}{COLOR_HR[color] ? ' (' + COLOR_HR[color] + ')' : ''}</span>
            {COLORS.some((c) => c.na && c.name === color) && <span style={{ fontWeight: 600, color: '#DA0D00' }}> · Nije dostupno</span>}
          </div>
          <div style={{ display: 'flex', gap: 14 }}>
            {COLORS.map(({ name, hex, na }) => (
              <button key={name} onClick={() => setColor(name)} title={na ? name + ' – nije dostupno' : name} aria-label={na ? name + ', nije dostupno' : name} style={{
                position: 'relative', width: 44, height: 44, borderRadius: '50%', background: na ? '#fff' : hex, border: na ? '1px solid #D5D9E0' : 'none', padding: 0, overflow: 'hidden', cursor: 'pointer',
                outline: color === name ? `2px solid ${na ? '#8B95A5' : '#002D73'}` : '2px solid transparent', outlineOffset: 3 }}>
                {na && <span style={{ position: 'absolute', inset: 4, borderRadius: '50%', background: hex, opacity: 0.35 }}></span>}
                {na && <span style={{ position: 'absolute', left: '50%', top: -4, bottom: -4, width: 2, marginLeft: -1, background: '#545F71', transform: 'rotate(45deg)' }}></span>}
              </button>
            ))}
          </div>
          {COLORS.some((c) => c.na && c.name === color) &&
          <div style={{ marginTop: 12, display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', padding: '8px 12px', borderRadius: 8, background: '#F1F1F4', fontSize: 12, color: '#101117' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#DA0D00', flex: 'none' }}></span>
            <span>Ova boja trenutno nije dostupna.</span>
            <button style={{ marginLeft: 'auto', background: 'none', border: 'none', padding: 0, color: '#0050A0', fontSize: 12, fontWeight: 600, textDecoration: 'underline', cursor: 'pointer', fontFamily: 'inherit' }}>Obavijesti me kad stigne</button>
          </div>}
        </div>
      )}

      {!bundleMode && PT === 'default' && (
        <div>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, marginBottom: 10 }}>
            <div style={{ fontSize: 14, color: '#545F71' }}>Memorija: <span style={{ fontWeight: 700, color: '#101117' }}>{storage.replace(/(\d)(GB|TB)/, '$1 $2')}</span></div>
            {STORAGE.length > 3 && <button onClick={() => setOptFly('storage')} style={{ background: 'none', border: 'none', padding: 0, fontSize: 13, fontWeight: 600, color: '#0050A0', textDecoration: 'underline', textUnderlineOffset: 2, cursor: 'pointer', fontFamily: 'inherit' }}>Prikaži sve ({STORAGE.length})</button>}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10 }}>
            {top3(STORAGE, storage, x => x).map(s => {
              const na = STORAGE_NA.includes(s);
              const on = storage === s;
              const diff = _toNum(prices[s].p) - _toNum(pr.p);
              const sub = na ? 'Obavijesti me' : on ? prices[s].p + ' €' : (diff >= 0 ? '+' : '−') + _f(Math.abs(diff)) + ' €';
              return (
                <button key={s} onClick={() => !na && setStorage(s)} aria-disabled={na} style={{
                  height: 64, borderRadius: 10, padding: '0 6px', cursor: na ? 'default' : 'pointer', fontFamily: 'inherit',
                  border: on ? '2px solid #002D73' : na ? '1px dashed #C7C7CD' : '1px solid #D5D9E0',
                  background: on ? '#EEF2FB' : na ? '#F6F6F8' : '#fff',
                  display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: na ? '#8B95A5' : '#101117', textDecoration: na ? 'line-through' : 'none' }}>{s.replace(/(\d)(GB|TB)/, '$1 $2')}</span>
                  <span style={{ fontSize: 12, color: '#545F71' }}>{sub}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {PT === 'default' && <div>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, marginBottom: 10 }}>
          <div style={{ fontSize: 14, color: '#545F71' }}>Stanje: <span style={{ fontWeight: 700, color: '#101117' }}>{(COND_UI[cond] || {}).label || currentCond.label}</span></div>
          <span style={{ display: 'flex', gap: 14 }}>
            {allConds.length > 3 && <button onClick={() => setOptFly('cond')} style={{ background: 'none', border: 'none', padding: 0, fontSize: 13, fontWeight: 600, color: '#0050A0', textDecoration: 'underline', textUnderlineOffset: 2, cursor: 'pointer', fontFamily: 'inherit' }}>Prikaži sve ({allConds.length})</button>}
            </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10 }}>
          {top3(allConds, cond, x => x.id).map(c => {
            const on = cond === c.id;
            const ui = COND_UI[c.id] || { label: c.label, sub: c.sub };
            const price = condPrice(c.id);
            const save = _toNum(pr.p) - _toNum(price);
            return (
              <button key={c.id} onClick={() => setCond(c.id)} style={{
                minHeight: 76, borderRadius: 10, padding: '10px 10px', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
                border: on ? '2px solid #002D73' : '1px solid #D5D9E0', background: on ? '#EEF2FB' : '#fff',
                display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: '#101117', lineHeight: 1.25 }}>{ui.label}</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#101117', lineHeight: 1.3 }}>{price} €</span>
                {ui.save && save > 0
                  ? <span style={{ fontSize: 12, fontWeight: 600, color: '#0B7A48', lineHeight: 1.3 }}>Ušteda {_f(save)} €</span>
                  : <span style={{ fontSize: 12, color: '#545F71', lineHeight: 1.3 }}>{ui.sub}</span>}
              </button>
            );
          })}
        </div>
      </div>}

      {PT === 'klima' && (
        <div>
          <div style={{ fontSize: 14, color: '#545F71', marginBottom: 10 }}>Montaža: <span style={{ fontWeight: 700, color: '#101117' }}>{mont ? 'S montažom' : 'Bez montaže'}</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10 }}>
            {[[false, 'Bez montaže', 'Samo dostava uređaja'], [true, 'S montažom', '+149,00 € · ovlašteni serviser']].map(([v, l, sub]) => (
              <button key={l} onClick={() => setMont(v)} style={{ minHeight: 64, borderRadius: 10, padding: '10px 12px', textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit', border: mont === v ? '2px solid #002D73' : '1px solid #D5D9E0', background: mont === v ? '#EEF2FB' : '#fff', margin: mont === v ? 0 : 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 2 }}>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#101117' }}>{l}</span>
                <span style={{ fontSize: 12, color: '#545F71', lineHeight: 1.35 }}>{sub}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      {PT === 'marketplace' && (
        <div>
          <div style={{ fontSize: 14, color: '#545F71', marginBottom: 10 }}>Dimenzije: <span style={{ fontWeight: 700, color: '#101117' }}>{DIMS[dim][0]} cm</span></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 10 }}>
            {DIMS.map(([l, add], i) => {
              const d = add - DIMS[dim][1];
              return (
                <button key={l} onClick={() => setDim(i)} style={{ height: 64, borderRadius: 10, padding: '0 6px', cursor: 'pointer', fontFamily: 'inherit', border: dim === i ? '2px solid #002D73' : '1px solid #D5D9E0', background: dim === i ? '#EEF2FB' : '#fff', margin: dim === i ? 0 : 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: '#101117' }}>{l}</span>
                  <span style={{ fontSize: 12, color: '#545F71' }}>{dim === i ? displayPrice + ' €' : (d >= 0 ? '+' : '−') + _f(Math.abs(d)) + ' €'}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div style={{ border: '1px solid #E3E4E9', borderRadius: 12, padding: '4px 16px', background: '#fff' }}>
        <div role="button" onClick={() => onOpenSheet('delivery')} style={{ display: 'flex', gap: 14, padding: '14px 0', borderBottom: PT === 'marketplace' ? 'none' : '1px solid #E3E4E9', cursor: 'pointer' }}>
          <span style={{ width: 24, display: 'flex', justifyContent: 'center', flexShrink: 0, marginTop: 3 }}><svg width="22" height="15" viewBox="0 0 23 15" fill="none"><path d="M4.14491 0.666992L14.1411 0.666992C14.6212 0.666992 15.0104 1.07562 15.0104 1.57969V10.7067M15.0104 10.7067C15.0104 11.2107 14.6212 11.6194 14.1411 11.6194H9.36033M15.0104 10.7067L15.0104 3.40509C15.0104 2.90102 15.3995 2.49239 15.8796 2.49239H18.1273C18.3578 2.49239 18.5789 2.58855 18.7419 2.75971L21.7097 5.87586C21.8727 6.04702 21.9643 6.27917 21.9643 6.52123V10.7067C21.9643 11.2107 21.5751 11.6194 21.095 11.6194H20.2258M15.0104 10.7067C15.0104 11.2107 15.3995 11.6194 15.8796 11.6194H16.7488M5.88339 11.6194H4.14491M5.88339 11.6194C5.88339 12.6275 6.66173 13.4448 7.62186 13.4448C8.58199 13.4448 9.36033 12.6275 9.36033 11.6194M5.88339 11.6194C5.88339 10.6112 6.66173 9.79398 7.62186 9.79398C8.58199 9.79398 9.36033 10.6112 9.36033 11.6194M16.7488 11.6194C16.7488 12.6275 17.5272 13.4448 18.4873 13.4448C19.4474 13.4448 20.2258 12.6275 20.2258 11.6194M16.7488 11.6194C16.7488 10.6112 17.5272 9.79398 18.4873 9.79398C19.4474 9.79398 20.2258 10.6112 20.2258 11.6194M6.75262 4.31779H0.667969M5.01415 7.96858H2.40644" stroke="#002D73" strokeWidth="1.33333" strokeLinecap="round"></path></svg></span>
          <div style={{ fontSize: 13, lineHeight: 1.5, color: '#101117' }}>
            <div style={{ fontSize: 14, fontWeight: 700 }}>Dostava na adresu · <span style={{ color: '#0B7A48' }}>besplatno</span></div>
            {PT === 'marketplace' ? <div>Šalje prodavatelj · stiže za <b>5–7 radnih dana</b></div> : <div>Stiže <b>u ponedjeljak, 5.10.</b> ako naručiš u sljedećih 2 h 35 min</div>}
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, alignSelf: 'center', marginLeft: 'auto' }}><polyline points="9 6 15 12 9 18"></polyline></svg>
        </div>
        {PT !== 'marketplace' && <div role="button" onClick={() => window.BBAvail && window.BBAvail.open({ inStock: AV.inStock, shown: AV.shown, product: { img: pv('img', 'images/pdp/main/galaxy-s24-yellow.png'), name: pv('name', 'Samsung Galaxy S24+ 5G, 12/256 GB, Amber Yellow'), price: pv('price', '1.299,00'), old: pv('old', '1.479,00') } })} style={{ display: 'flex', gap: 14, padding: '14px 0', cursor: 'pointer' }}>
          <span style={{ width: 24, display: 'flex', justifyContent: 'center', flexShrink: 0, marginTop: 0 }}><svg width="20" height="19" viewBox="0 0 24 23" fill="none"><path d="M4.33333 9.58333V20.125H19.6667V9.58333M9.60417 20.125V11.9792H14.3958V20.125M4.8125 2.875H11.5208H19.1875L20.625 7.1875V8.14583C20.625 10.0625 17.75 10.0625 17.75 8.14583C17.75 10.0625 14.875 10.0625 14.875 8.14583C14.875 10.0625 12 10.0625 12 8.14583C12 10.0625 9.125 10.0625 9.125 8.14583C9.125 10.0625 6.25 10.0625 6.25 8.14583C6.25 10.0625 3.375 10.0625 3.375 8.14583V7.1875L4.8125 2.875Z" stroke="#002D73" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"></path></svg></span>
          {(() => {
            const inf = window.BBAvail ? window.BBAvail.info(AV.inStock, AV.shown) : { title: '', sub: '', tone: AV.inStock ? 'in' : 'out', icon: 'pin' };
            const isIn = inf.tone === 'in';
            const openAvail = () => window.BBAvail && window.BBAvail.open({ inStock: AV.inStock, shown: AV.shown,
              product: { img: pv('img', 'images/pdp/main/galaxy-s24-yellow.png'), name: pv('name', 'Samsung Galaxy S24+ 5G, 12/256 GB, Amber Yellow'), price: pv('price', '1.299,00'), old: pv('old', '1.479,00') } });
            return (
              <div style={{ fontSize: 13, lineHeight: 1.5, color: '#101117', minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700 }}>Preuzmi u poslovnici{isIn && <span> · <span style={{ color: '#0B7A48' }}>besplatno</span></span>}</div>
                <div><span style={{ color: isIn ? '#0B7A48' : '#DA0D00', fontWeight: 700 }}>● {inf.title}</span></div>
                <div style={{ color: '#545F71' }}>{inf.sub}</div>
              </div>
            );
          })()}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#545F71" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, alignSelf: 'center', marginLeft: 'auto' }}><polyline points="9 6 15 12 9 18"></polyline></svg>
        </div>}
      </div>

      {optFly && (
        <OptionsFlyout title={optFly === 'storage' ? 'Odaberi memoriju' : 'Odaberi stanje'} onClose={() => setOptFly(null)}>
          {optFly === 'storage' ? STORAGE.map(s => {
            const na = STORAGE_NA.includes(s), on = storage === s;
            return (
              <button key={s} disabled={na} onClick={() => { setStorage(s); setOptFly(null); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '16px', borderRadius: 12, textAlign: 'left', fontFamily: 'inherit', cursor: na ? 'default' : 'pointer',
                border: on ? '2px solid #002D73' : na ? '1px dashed #C7C7CD' : '1px solid #E3E4E9', background: on ? '#EEF2FB' : na ? '#F6F6F8' : '#fff', margin: on ? 0 : 1 }}>
                <span style={{ fontSize: 15, fontWeight: 700, color: na ? '#8B95A5' : '#101117', textDecoration: na ? 'line-through' : 'none' }}>{s.replace(/(\d)(GB|TB)/, '$1 $2')}</span>
                <span style={{ fontSize: 14, fontWeight: na ? 400 : 700, color: na ? '#545F71' : '#101117' }}>{na ? 'Obavijesti me' : prices[s].p + ' €'}</span>
              </button>
            );
          }) : allConds.map(c => {
            const on = cond === c.id, ui = COND_UI[c.id] || { label: c.label, sub: c.sub }, price = condPrice(c.id), save = _toNum(pr.p) - _toNum(price);
            return (
              <button key={c.id} onClick={() => { setCond(c.id); setOptFly(null); }} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '16px', borderRadius: 12, textAlign: 'left', fontFamily: 'inherit', cursor: 'pointer',
                border: on ? '2px solid #002D73' : '1px solid #E3E4E9', background: on ? '#EEF2FB' : '#fff', margin: on ? 0 : 1 }}>
                <span style={{ display: 'flex', flexDirection: 'column', gap: 3, minWidth: 0 }}>
                  <span style={{ fontSize: 15, fontWeight: 600, color: '#101117' }}>{ui.label}</span>
                  {ui.save && save > 0 ? <span style={{ fontSize: 13, fontWeight: 600, color: '#0B7A48' }}>Ušteda {_f(save)} €</span> : <span style={{ fontSize: 13, color: '#545F71' }}>{ui.sub || c.sub}</span>}
                </span>
                <span style={{ fontSize: 15, fontWeight: 700, color: '#101117', whiteSpace: 'nowrap' }}>{price} €</span>
              </button>
            );
          })}
        </OptionsFlyout>
      )}

      {/* Qty + CTA (blue) */}
      {PT === 'marketplace' && (
        <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: '#EBF3FE', borderRadius: 12, padding: '12px 14px' }}>
          <svg width="22" height="22" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0 }}><path d="M3 7.5V15.75H15V7.5M7.125 15.75V9.375H10.875V15.75M3.375 2.25H8.625H14.625L15.75 5.625V6.375C15.75 7.875 13.5 7.875 13.5 6.375C13.5 7.875 11.25 7.875 11.25 6.375C11.25 7.875 9 7.875 9 6.375C9 7.875 6.75 7.875 6.75 6.375C6.75 7.875 4.5 7.875 4.5 6.375C4.5 7.875 2.25 7.875 2.25 6.375V5.625L3.375 2.25Z" stroke="#0050A0" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#101117' }}>Marketplace ponuda</span>
            <span style={{ fontSize: 12, color: '#101117', lineHeight: 1.5 }}>Ovaj proizvod prodaje i šalje partner prodavatelj putem Big Bang Marketplacea. Dostupan je <b>samo za kupnju u webshopu</b> — nije ga moguće preuzeti ni kupiti u poslovnicama. Narudžba, dostava i povrat idu preko prodavatelja.</span>
          </div>
        </div>
      )}
      <button onClick={() => window.BBCart && window.BBCart.open({ img: pv('img', 'images/pdp/main/galaxy-s24-yellow.png'), name: pv('name', 'Samsung Galaxy S24+ 5G, 12/256 GB, Amber Yellow'), price: pv('price', '1.299,00'), old: pv('old', '1.299,99') })}
        className="bbcta" style={{ width: '100%', height: 54, color: '#fff', border: 'none', borderRadius: 27, fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, cursor: 'pointer', fontFamily: 'inherit' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.76L20 8H6.2"></path><circle cx="9" cy="19" r="1.5"></circle><circle cx="17" cy="19" r="1.5"></circle></svg>
        Dodaj u košaricu
      </button>


      <BuyBoxExtras type={PT} seller={PT === 'marketplace' ? 'Dormeo Partner d.o.o.' : currentOffer.seller} offerCount={PT !== 'default' ? 0 : CONDITIONS.reduce((n, c) => n + c.offers.length, 0) - 1} fromPrice={condPrice('popravljeno')} onAllOffers={() => onOpenSheet('alloffers')} onNotice={() => window.BBEU && window.BBEU.openNotice()} />
    </div>
  );
}



// ─── Under the CTA: seller line, USP strip, services & warranty ───
function BuyBoxExtras({ type = 'default', seller, offerCount, fromPrice, onAllOffers, onNotice }) {
  const [protMap, setProtMap] = React.useState({});
  const [svc, setSvc] = React.useState({});
  const navy = '#002D73';
  const ic = (d) => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={navy} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{d}</svg>;
  const usps = [
    { icon: ic(<><path d="M9 14 4 9l5-5"></path><path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11"></path></>), t: type === 'marketplace' ? '14 dana' : '30 dana', s: 'besplatan povrat' },
    { icon: ic(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></>), t: '2 godine', s: 'zakonsko jamstvo' },
    { icon: ic(<><rect x="2" y="5" width="20" height="14" rx="2"></rect><path d="M2 10h20"></path></>), t: 'Kartice, rate', s: 'ili pouzećem' },
  ];
  const prots = [
    { id: 'asist1', title: 'Big Bang Asistenca 1 godina', sub: 'Prioritetna podrška + dvogodišnje održavanje', price: '13,99 €' },
    { id: 'asist2', title: 'Big Bang Asistenca 2 godine', sub: 'Sve značajke 1 godine + zamjenski uređaj', price: '20,99 €' },
    { id: 'plus', title: 'Big Bang Zaštita Plus', badge: 'Najpotpunije', sub: 'Pokriva slučajna oštećenja, tekućinu i kvar', price: '113,99 €' },
    { id: 'none', title: 'Ne želim dodatnu sigurnost', price: '' },
  ];
  const svcs = [
    { id: 'zastita', title: 'Zaštitno staklo + montaža u poslovnici', sub: 'Naši tehničari postavljaju zaštitu bez zračnih mjehurića', price: '24,99 €' },
    { id: 'prijenos', title: 'Postavljanje i prijenos podataka', sub: 'Kontakti, fotografije i aplikacije sa starog uređaja', price: '19,99 €' },
  ];
  const card = (on) => ({ width: '100%', display: 'flex', alignItems: 'center', gap: 14, padding: '16px 14px', borderRadius: 12, textAlign: 'left', cursor: 'pointer', fontFamily: 'inherit',
    border: on ? '2px solid ' + navy : '1px solid #fff', background: on ? '#EEF2FB' : '#fff', margin: on ? 0 : 1 });
  const head = { fontSize: 13, fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: '#545F71', margin: '22px 0 10px' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 10, flexWrap: 'wrap', fontSize: 13, color: '#545F71' }}>
        <span>Prodaje i šalje: <b style={{ color: '#101117' }}>{seller}</b></span>
        {offerCount > 0 && <button onClick={onAllOffers} style={{ background: 'none', border: 'none', padding: 0, fontSize: 13, fontWeight: 600, color: '#0050A0', textDecoration: 'underline', textUnderlineOffset: 2, cursor: 'pointer', fontFamily: 'inherit' }}>Još {offerCount} ponuda od {fromPrice} €</button>}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 6, background: '#fff', border: '1px solid #E3E4E9', borderRadius: 12, padding: '16px 8px' }}>
        {usps.map((u, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 4, fontSize: 12, lineHeight: 1.35, color: '#545F71' }}>
            <span style={{ display: 'flex', marginBottom: 4 }}>{u.icon}</span>
            <b style={{ color: '#101117', fontWeight: 700 }}>{u.t}</b>
            <span>{u.s}</span>
          </div>
        ))}
      </div>
      <GaranBadge />
      {type === 'default' && <ChargerBox included={false} />}
      {(type === 'default' || type === 'bundle') && <div style={{ background: '#F1F1F4', margin: '0 -14px -24px', padding: '22px 14px 24px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
          <span style={{ fontSize: 17, fontWeight: 700, color: '#101117' }}>Usluge i jamstvo</span>
          <span style={{ fontSize: 12, color: '#545F71' }}>dodaje se uz uređaj</span>
        </div>
        <div style={head}>Sigurnost</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: type === 'bundle' ? 18 : 10 }}>
          {(type === 'bundle' ? [
            { id: 'ps5', name: 'PlayStation 5 Digital Chassis', prices: ['13,99 €', '20,99 €', '89,99 €'] },
            { id: 'ds', name: 'DualSense bežični kontroler', prices: ['4,99 €', '7,99 €', '24,99 €'] }
          ] : [{ id: 'main', name: '', prices: null }]).map(g => (
          <div key={g.id} style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {g.name && <div style={{ fontSize: 14, fontWeight: 700, color: '#101117' }}>Za: {g.name}</div>}
          {prots.map((p, pi) => {
            const on = (protMap[g.id] || 'none') === p.id;
            const price = g.prices && p.id !== 'none' ? g.prices[pi] : p.price;
            return (
              <div key={p.id} role="radio" aria-checked={on} onClick={() => setProtMap(mm => ({ ...mm, [g.id]: p.id }))} style={card(on)}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', border: on ? '2px solid ' + navy : '1.5px solid #8B95A5', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: '#fff' }}>
                  {on && <span style={{ width: 12, height: 12, borderRadius: '50%', background: navy }}></span>}
                </span>
                <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#101117', lineHeight: 1.3 }}>{p.title}</span>
                  {p.badge && <span style={{ alignSelf: 'flex-start', background: navy, color: '#fff', fontSize: 11, fontWeight: 600, padding: '2px 7px', borderRadius: 4 }}>{p.badge}</span>}
                  {p.sub && <span style={{ fontSize: 12, color: '#545F71', lineHeight: 1.45 }}>{p.sub}</span>}
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: p.free ? '#0B7A48' : '#101117', whiteSpace: 'nowrap', flexShrink: 0 }}>{price}</span>
              </div>
            );
          })}
          </div>
          ))}
        </div>
        {type !== 'bundle' && <>
        <div style={head}>Usluge</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {svcs.map(s => {
            const on = !!svc[s.id];
            return (
              <div key={s.id} role="checkbox" aria-checked={on} onClick={() => setSvc(v => ({ ...v, [s.id]: !v[s.id] }))} style={card(on)}>
                <span style={{ width: 22, height: 22, borderRadius: 4, border: on ? 'none' : '1.5px solid #8B95A5', background: on ? navy : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {on && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
                </span>
                <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#101117', lineHeight: 1.3 }}>{s.title}</span>
                  <span style={{ fontSize: 12, color: '#545F71', lineHeight: 1.45 }}>{s.sub}</span>
                </span>
                <span style={{ fontSize: 14, fontWeight: 700, color: '#101117', whiteSpace: 'nowrap', flexShrink: 0 }}>{s.price}</span>
              </div>
            );
          })}
          <div role="button" style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 14px', borderRadius: 12, border: '1px dashed #9FD0B4', background: '#E6F5EC', cursor: 'pointer' }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0B7A48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M21 12a9 9 0 1 1-2.64-6.36"></path><polyline points="21 3 21 9 15 9"></polyline></svg>
            <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: '#101117' }}>Otkup starog mobitela</span>
              <span style={{ fontSize: 12, color: '#545F71', lineHeight: 1.45 }}>Procijenite vrijednost i umanjite cijenu</span>
            </span>
            <span style={{ fontSize: 14, fontWeight: 700, color: '#0B7A48', whiteSpace: 'nowrap', flexShrink: 0 }}>Procijeni ›</span>
          </div>
        </div>
        </>}
      </div>}
    </div>
  );
}

// ─── Stock / availability box under the CTA → opens BBAvail flyout ───
function StockBox({ inStock, shown }) {
  const [hov, setHov] = React.useState(false);
  const inf = window.BBAvail ? window.BBAvail.info(inStock, shown) : { title: '', sub: '', tone: inStock ? 'in' : 'out', icon: 'pin' };
  const isIn = inf.tone === 'in';
  const icons = {
    eye: <><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></>,
    pin: <><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
  };
  const tileBg = isIn ? '#DDF2E3' : inf.icon === 'eye' ? '#EBF3FE' : '#E9EAEE';
  const tileFg = isIn ? '#0B7A48' : inf.icon === 'eye' ? '#0050A0' : '#545F71';
  const open = () => window.BBAvail && window.BBAvail.open({ inStock, shown,
    product: { img: pv('img', 'images/pdp/main/galaxy-s24-yellow.png'), name: pv('name', 'Samsung Galaxy S24+ 5G, 12/256 GB, Amber Yellow'), price: pv('price', '1.299,00'), old: pv('old', '1.299,99') } });
  return (
    <button onClick={open} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', marginBottom: 0, marginTop: 10,
        background: isIn ? '#F3FBF5' : '#F7F7F9', border: '1px solid ' + (hov ? (isIn ? '#8FD3A2' : '#C7C7CD') : (isIn ? '#C3EACC' : '#E3E4E9')),
        borderRadius: 12, cursor: 'pointer', textAlign: 'left', fontFamily: 'inherit', transition: 'border-color .15s' }}>
      <span style={{ width: 34, height: 34, borderRadius: '50%', background: tileBg, color: tileFg, flexShrink: 0,
        display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{icons[inf.icon]}</svg>
      </span>
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 700, color: '#101117', letterSpacing: '-0.01em' }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: isIn ? '#1FB549' : '#DA0D00', flexShrink: 0 }}/>
          {inf.title}
        </span>
        <span style={{ fontSize: 11, color: '#545F71', lineHeight: 1.4 }}>{inf.sub}</span>
      </span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0050A0" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, transform: hov ? 'translateX(2px)' : 'none', transition: 'transform .15s' }}><polyline points="9 6 15 12 9 18"/></svg>
    </button>
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
        width: '100%', padding: '16px 14px', background:'none', border:'none',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        fontSize: 17, fontWeight: 700, color: T.text, fontFamily: 'inherit', textAlign: 'left' }}>
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
        <div style={{ border: `1px solid ${T.border}`, borderRadius: 8, overflow: 'hidden', fontSize: 12 }}>
          {(bundleMode ? [
            ['Konzola', 'PS5 Digital'], ['Memorija', '825 GB SSD'], ['Razlučivost', '4K @ 120Hz'],
            ['HDR', 'HDR10'], ['Kontroleri', '2× DualSense'], ['Težina', '3.4 kg'],
          ] : [
            ['Zaslon', '6.7" Dynamic AMOLED 2X'], ['Rezolucija', '3120 × 1440'], ['Procesor', 'Exynos 2400'],
            ['RAM', '12 GB'], ['Pohrana', '256 GB'], ['Glavna kamera', '50 MP + OIS'],
            ['Baterija', '4900 mAh'], ['OS', 'Android 14, One UI 6.1'],
          ]).map(([k,v], i, arr) => (
            <div key={k} style={{ display: 'grid', gridTemplateColumns: '42% 1fr', background: i % 2 === 0 ? '#fff' : '#F8F8FC', borderBottom: i < arr.length - 1 ? `1px solid ${T.border}` : 'none' }}>
              <span style={{ padding: '10px 12px', fontWeight: 600, color: T.sub }}>{k}</span>
              <span style={{ padding: '10px 12px', color: T.text, lineHeight: 1.45 }}>{v}</span>
            </div>
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
      <div className="nsb" style={{ display:'flex', gap: 10, overflowX: 'auto', padding: '0 14px 4px', scrollSnapType: 'x mandatory' }}>
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
    <div style={{ background: T.bg, padding: '8px 14px 24px' }}>
      <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 12 }}>Često kupljeno zajedno</h2>
      <div style={{ display:'flex', flexDirection:'column', gap: 10, marginBottom: 10 }}>
        {items.map((it, i) => (
          <label key={i} style={{ position: 'relative', display:'flex', alignItems:'center', gap: 12, padding: 12, background: '#fff', borderRadius: 12, cursor: i === 0 ? 'default' : 'pointer' }}>
            <input type="checkbox" checked={sel.includes(i)} disabled={i === 0}
              onChange={() => setSel(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i])}
              style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}/>
            <span style={{ width: 22, height: 22, borderRadius: 4, border: sel.includes(i) ? 'none' : '1.5px solid #8B95A5', background: sel.includes(i) ? (i === 0 ? '#8B95A5' : '#002D73') : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxSizing: 'border-box' }}>
              {sel.includes(i) && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>}
            </span>
            <div style={{ width: 44, height: 44, borderRadius: 8, background: '#F3F3F7', flexShrink: 0 }}/>
            <div style={{ flex: 1, fontSize: 12 }}>
              {i === 0 && <div style={{ fontSize: 11, fontWeight: 600, color: T.sub, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 2 }}>Ovaj proizvod</div>}
              <div style={{ fontWeight: 500, lineHeight: 1.3 }}>{it.name}</div>
              <div style={{ color: T.red, fontWeight: 700, marginTop: 2 }}>{it.price.toFixed(2).replace('.',',')} €</div>
            </div>
          </label>
        ))}
      </div>
      <div style={{ background: '#fff', borderRadius: 12, padding: '12px 12px 12px 14px', display:'flex', alignItems:'center', justifyContent:'space-between' }}>
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
  const price = bundleMode ? '549,99 €' : pv('price', '1.299,00') + ' €';
  return (
    <div style={{ position: 'fixed', left: 0, right: 0, bottom: 0, background: '#fff', borderTop: `1px solid ${T.border}`, padding: '10px 16px', boxShadow: '0 -4px 16px rgba(0,0,0,0.08)', zIndex: 100, display: 'flex', gap: 20, alignItems: 'center' }}>
      <div style={{ flexShrink: 0, display: 'flex', alignItems: 'flex-start', color: '#101117', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>
        <span style={{ fontSize: 22 }}>{price.replace(/,\d+.*$/, '')}</span>
        <span style={{ fontSize: 12, marginTop: 1, marginLeft: 1 }}>{(price.match(/,(\d+)/) || [])[1]}</span>
        <span style={{ fontSize: 22, marginLeft: 5 }}>€</span>
      </div>
      <button onClick={() => window.BBCart && window.BBCart.open({ img: bundleMode ? 'images/pdp/main/ps5-bundle.png' : pv('img', 'images/pdp/main/galaxy-s24-yellow.png'), name: bundleMode ? 'PlayStation 5 Digital Chassis + dodatni Dual Sense Wireless Controller' : pv('name', 'Samsung Galaxy S24+ 5G, 12/256 GB, Amber Yellow'), price: price })}
        className="bbcta" style={{ flex: 1, height: 48, color: '#fff', border: 'none', borderRadius: 24, fontSize: 16, fontWeight: 600, letterSpacing: '-0.01em', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10, cursor: 'pointer', fontFamily: 'inherit' }}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h2l2.4 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.76L20 8H6.2"></path><circle cx="9" cy="19" r="1.5"></circle><circle cx="17" cy="19" r="1.5"></circle></svg>
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
      <div className="nsb" style={{ display: 'flex', gap: 6, overflowX: 'auto', paddingBottom: 10, marginBottom: 10, borderBottom: `1px solid ${T.border}` }}>
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

function DealsBody() {
  const [copied, setCopied] = React.useState(false);
  const deals = [
    { tag: 'Promo kod', tone: ['#E6F5EC', '#0B7A48'], title: 'Dodatnih 15% popusta na ovaj proizvod', text: 'Upišite kod u košarici. Vrijedi do 31.10.2026. ili do isteka zaliha.', code: 'SAMSUNG15' },
    { tag: 'Poklon', tone: ['#EBF3FE', '#0050A0'], title: 'Samsung Galaxy Buds FE slušalice gratis', text: 'Poklon se automatski dodaje u košaricu uz kupnju uređaja.' },
    { tag: 'Zaštita', tone: ['#EBF3FE', '#0050A0'], title: 'Samsung Care+ 2 godine uz 50% popusta', text: 'Kvar, slučajni pad, voda i razbijen zaslon. Aktivacija unutar 60 dana od kupnje.' },
    { tag: 'Otkup', tone: ['#EBF3FE', '#0050A0'], title: 'Trade-in: do 200 € za stari mobitel', text: 'Procijenite vrijednost online, a iznos se umanjuje od cijene novog uređaja.' }
  ];
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {deals.map((d, i) => (
        <div key={i} style={{ border: '1px solid #E3E4E9', borderRadius: 12, padding: 16, display: 'flex', flexDirection: 'column', gap: 8, background: '#fff' }}>
          <span style={{ alignSelf: 'flex-start', background: d.tone[0], color: d.tone[1], fontSize: 11, fontWeight: 700, padding: '3px 8px', borderRadius: 4, letterSpacing: '0.02em' }}>{d.tag}</span>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#101117', lineHeight: 1.35 }}>{d.title}</div>
          <div style={{ fontSize: 12, color: '#545F71', lineHeight: 1.5 }}>{d.text}</div>
          {d.code && (
            <div style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
              <span style={{ border: '1px dashed #9FD0B4', background: '#E6F5EC', color: '#0B7A48', fontSize: 13, fontWeight: 800, letterSpacing: '0.06em', padding: '6px 12px', borderRadius: 6 }}>{d.code}</span>
              <button onClick={() => { try { navigator.clipboard && navigator.clipboard.writeText(d.code); } catch (e) {} setCopied(true); setTimeout(() => setCopied(false), 1600); }} style={{ background: 'none', border: 'none', padding: 0, fontSize: 12, fontWeight: 600, color: '#0050A0', textDecoration: 'underline', textUnderlineOffset: 2, cursor: 'pointer', fontFamily: 'inherit' }}>{copied ? 'Kopirano' : 'Kopiraj kod'}</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

const SHEETS = {
  deals: { title: 'Posebne pogodnosti', icon: <Icon.Tag s={20}/>, Body: DealsBody },
  promo: { title: 'Dostupni promo kodovi', icon: <Icon.Tag s={20}/>, Body: PromoBody },
  delivery: { title: 'Dostava', icon: <Icon.Truck s={20}/>, Body: DeliveryBody },
  pickup: { title: 'Raspoloživost u poslovnicama', icon: <Icon.Pin s={20}/>, Body: PickupBody },
  energy: { title: 'Energetski razred', icon: <Icon.Bolt s={20}/>, Body: EnergyBody },
  b2b: { title: 'B2B ponuda i najam opreme', icon: <Icon.Briefcase s={20}/>, Body: B2BBody },
  protect: { title: 'Zaštiti svoj uređaj', icon: <Icon.Shield s={20}/>, Body: ProtectionBody },
  services: { title: 'Naručite dodatne usluge', icon: <Icon.Cog s={20}/>, Body: ServicesBody },
  alloffers: { title: 'Više ponuda za proizvod', icon: <Icon.Tag s={20}/>, Body: AllOffersBody },
};


let AV = { inStock: true, shown: true };
function PDPBodyMobile({ bundleMode = false, product = null, availStock = true, availShown = true, productType = 'default', onOpenBrand = null }) {
  OPEN_BRAND = onOpenBrand;
  P = product && product.name ? product : null;
  PT = productType === 'bundle' ? 'bundle' : TYPE_P[productType] ? productType : 'default';
  if (PT !== 'default') P = TYPE_P[PT];
  if (PT === 'bundle') bundleMode = true;
  AV = { inStock: availStock !== false, shown: availShown !== false };
  const [sheet, setSheet] = React.useState(null);
  React.useEffect(() => { const h = () => setSheet('deals'); window.addEventListener('bb-open-promo', h); return () => window.removeEventListener('bb-open-promo', h); }, []);
  const SheetCfg = sheet ? SHEETS[sheet] : null;
  return (
    <div style={{ width: '100%', background: T.bg }}>
      <Breadcrumb bundleMode={bundleMode}/>
      <ProductHead bundleMode={bundleMode}/>
      <Gallery bundleMode={bundleMode}/>
      <BuyBox bundleMode={bundleMode} onOpenSheet={setSheet} onOpenCondition={() => setSheet('alloffers')}/>
      {PT === 'default' && <BundleStrip/>}
      <InfoSection bundleMode={bundleMode}/>
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
