let P = null;   // product handed over from the homepage
const pv = (key, fallback) => (P && P[key]) || fallback;

// ─── Design tokens ────────────────────────────────────────────────
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "contentMaxWidth": 1480,
  "contentPadding": 20,
  "primaryColor": "#0050A0",
  "accentColor": "#F65F04",
  "showBangBadge": true,
  "rightColumnRatio": "1fr",
  "cardRadius": 16,
  "bundleMode": false,
  "layout": "desktop"
}/*EDITMODE-END*/;
const T = {
  blue: '#0050A0',
  darkBlue: '#002D73',
  navy: '#002D73',
  midBlue: '#002D73',
  teal: '#10DFBA',
  orange: '#F65F04',
  red: '#DA0D00',
  green: '#1FB549',
  bg: '#F1F1F4',
  card: '#FFFFFF',
  text: '#101117',
  sub: '#545F71',
  border: '#E4E4EA',
  borderSub: '#C7C7CD'
};

// ─── Big Bang Icons (uploaded SVGs, recolored via currentColor) ───
const BBI = {
  Heart: ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 30 30" fill="none"><path d="M3.75736 5.96572C1.41421 8.25335 1.41421 11.9623 3.75736 14.25L12.8516 23.1287C13.4903 23.7523 14.5099 23.7523 15.1485 23.1287L24.2426 14.25C26.5858 11.9623 26.5858 8.25335 24.2426 5.96572C21.8995 3.67809 18.1005 3.67809 15.7574 5.96572L14.0001 7.68151L12.2426 5.96572C9.8995 3.67809 6.1005 3.67809 3.75736 5.96572Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  User: ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 30 30" fill="none"><path d="M15 18.25C18.866 18.25 22 15.116 22 11.25C22 7.38401 18.866 4.25 15 4.25C11.134 4.25 8 7.38401 8 11.25C8 15.116 11.134 18.25 15 18.25Z" stroke="currentColor" strokeWidth="2"/><path d="M4 24.25C5.064 22.4258 6.59451 20.9109 8.43766 19.8577C10.2808 18.8045 12.3717 18.25 14.5 18.25C16.6283 18.25 18.7192 18.8045 20.5623 19.8577C22.4055 20.9109 23.936 22.4258 25 24.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Cart: ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 30 30" fill="none"><path d="M4 4.25H6.22222L6.66667 6.47222M6.66667 6.47222L8.44444 15.3611H19.5556L24 6.47222H6.66667ZM19.5556 19.8056C18.3283 19.8056 17.3333 20.8005 17.3333 22.0278C17.3333 23.2551 18.3283 24.25 19.5556 24.25C20.7829 24.25 21.7778 23.2551 21.7778 22.0278C21.7778 20.8005 20.7829 19.8056 19.5556 19.8056ZM19.5556 19.8056H8.44444M8.44444 19.8056C7.21714 19.8056 6.22222 20.8005 6.22222 22.0278C6.22222 23.2551 7.21714 24.25 8.44444 24.25C9.67174 24.25 10.6667 23.2551 10.6667 22.0278C10.6667 20.8005 9.67174 19.8056 8.44444 19.8056Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Fire: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 18 18" fill="none"><path d="M13.2426 13.9926C10.8995 16.3358 7.1005 16.3358 4.75736 13.9926C3.58579 12.8211 3 11.2855 3 9.75C3 8.21446 3.58578 6.67893 4.75736 5.50735C4.75736 5.50735 5.25003 6.74997 6.75003 7.49997C6.75003 5.99997 7.12503 3.74997 8.98941 2.25C10.5 3.75 12.0684 4.33308 13.2426 5.50735C14.4142 6.67893 15 8.21446 15 9.75C15 11.2855 14.4142 12.8211 13.2426 13.9926Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/><path d="M7.40901 12.091C8.28769 12.9696 9.71231 12.9696 10.591 12.091C11.0303 11.6516 11.25 11.0758 11.25 10.5C11.25 9.92416 11.0303 9.34832 10.591 8.90897C10.1544 8.47241 9.5831 8.25275 9.01092 8.24999L8.24996 10.5L6.75 10.5C6.75001 11.0758 6.96968 11.6516 7.40901 12.091Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Briefcase: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 18 18" fill="none"><path d="M15.75 9.94157C13.6655 10.7853 11.387 11.25 9 11.25C6.61298 11.25 4.33447 10.7853 2.25 9.94157M12 4.5V3C12 2.17157 11.3284 1.5 10.5 1.5H7.5C6.67157 1.5 6 2.17157 6 3V4.5M9 9H9.0075M3.75 15H14.25C15.0784 15 15.75 14.3284 15.75 13.5V6C15.75 5.17157 15.0784 4.5 14.25 4.5H3.75C2.92157 4.5 2.25 5.17157 2.25 6V13.5C2.25 14.3284 2.92157 15 3.75 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  LocationMarker: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 18 18" fill="none"><path d="M13.2426 12.4926C12.5621 13.1731 11.1623 14.573 10.1564 15.5788C9.5174 16.2179 8.4823 16.2176 7.84326 15.5785C6.85524 14.5905 5.48222 13.2175 4.75736 12.4926C2.41421 10.1495 2.41421 6.35051 4.75736 4.00736C7.10051 1.66421 10.8995 1.66421 13.2426 4.00736C15.5858 6.35051 15.5858 10.1495 13.2426 12.4926Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M11.25 8.25C11.25 9.49264 10.2426 10.5 9 10.5C7.75736 10.5 6.75 9.49264 6.75 8.25C6.75 7.00736 7.75736 6 9 6C10.2426 6 11.25 7.00736 11.25 8.25Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Library: ({ size = 16 }) => <svg width={size} height={size} viewBox="0 0 18 18" fill="none"><path d="M3 7.5V15.75H15V7.5M7.125 15.75V9.375H10.875V15.75M3.375 2.25H8.625H14.625L15.75 5.625V6.375C15.75 7.875 13.5 7.875 13.5 6.375C13.5 7.875 11.25 7.875 11.25 6.375C11.25 7.875 9 7.875 9 6.375C9 7.875 6.75 7.875 6.75 6.375C6.75 7.875 4.5 7.875 4.5 6.375C4.5 7.875 2.25 7.875 2.25 6.375V5.625L3.375 2.25Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Cog: ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ShieldCheck: ({ size = 22 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M8.99993 11.999L10.9999 13.999L14.9999 9.99903M20.118 5.98336C19.9133 5.99374 19.7073 5.999 19.5001 5.999C16.4266 5.999 14.1229 4.84356 11.9999 2.94336C9.87685 4.84348 7.57345 5.99887 4.50006 5.99887C4.29284 5.99887 4.08684 5.99362 3.88219 5.98324C3.63277 6.94685 3.5 8.45744 3.5 9.49902C3.5 15.0905 6 19.999 11.9999 21.999C18 19.999 20.5 15.0905 20.5 9.49902C20.5 8.45748 20.3674 6.94694 20.118 5.98336Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  Bolt: ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M13 10V3L4 14H11L11 21L20 10L13 10Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  PromoTag: ({ size = 20 }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M20.5673 5.51758H1V8.75955H1.28205C2.16346 8.82375 3.00962 9.17684 3.64423 9.75461C4.27885 10.3324 4.63141 11.0707 4.66667 11.8731V12.0657V12.2583C4.59615 13.0287 4.20833 13.767 3.57372 14.3447C2.9391 14.8904 2.09295 15.2114 1.21154 15.2756H1V18.5176H20.5673C21.8718 18.5176 22.8942 17.6188 23 16.5275V16.367V7.70029C23 7.12252 22.7532 6.57684 22.2949 6.15955C21.8365 5.74227 21.2019 5.51758 20.5673 5.51758Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 17.5835V15.7168" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M8 12.9191V10.1191" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M8 7.31784V5.45117" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M17.5 12.5176C18.3372 12.5176 19 13.1604 19 14.0176C19 14.8747 18.3372 15.5176 17.5 15.5176C16.6628 15.5176 16 14.8747 16 14.0176C16 13.1604 16.6628 12.5176 17.5 12.5176Z" stroke="currentColor" strokeLinecap="round"/><path d="M12.5 8.51758C13.3372 8.51758 14 9.16044 14 10.0176C14 10.8747 13.3372 11.5176 12.5 11.5176C11.6628 11.5176 11 10.8747 11 10.0176C11 9.16044 11.6628 8.51758 12.5 8.51758Z" stroke="currentColor" strokeLinecap="round"/><path d="M12 15.5176L18 8.51758" stroke="currentColor" strokeLinecap="round"/></svg>,
};

// ─── SVG Icons ─────────────────────────────────────────────────────
const Icon = {
  Search: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="11" cy="11" r="7" /><line x1="17" y1="17" x2="22" y2="22" /></svg>,
  Heart: ({ filled }) => <svg width="20" height="20" viewBox="0 0 24 24" fill={filled ? '#DA0D00' : 'none'} stroke={filled ? '#DA0D00' : 'currentColor'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21C12 21 3 14 3 8a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 6-9 13-9 13z" /></svg>,
  Cart: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>,
  User: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" /></svg>,
  Chevron: ({ dir = 'right', size = 16 }) => {
    const r = { right: 0, left: 180, down: 90, up: -90 }[dir];
    return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ transform: `rotate(${r}deg)` }}><polyline points="9 18 15 12 9 6" /></svg>;
  },
  Check: ({ color = '#1FB549' }) => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round"><polyline points="20 6 9 17 4 12" /></svg>,
  Truck: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
  Shield: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  Return: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 .49-3.14" /></svg>,
  Star: ({ filled = true }) => <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? '#F59E0B' : 'none'} stroke="#F59E0B" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>,
  Menu: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>,
  Share: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>,
  Info: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></svg>,
  Tag: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>,
  Plus: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></svg>,
  Minus: () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12" /></svg>
};

// ─── Helpers ──────────────────────────────────────────────────────
function Stars({ rating, size = 14 }) {
  return (
    <span style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) =>
      <svg key={i} width={size} height={size} viewBox="0 0 24 24"
      fill={i <= Math.round(rating) ? '#F59E0B' : 'none'}
      stroke="#F59E0B" strokeWidth="2">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      )}
    </span>);

}

// ─── Fake product image placeholder ──────────────────────────────
function PhoneImg({ color = '#C8B8A2', scale = 1, style = {} }) {
  // Simple stylized phone silhouette SVG
  const c = {
    'Amber Yellow': '#F4C430',
    'Cobalt Violet': '#7B5EA7',
    'Onyx Black': '#2A2A2A',
    'Marble Gray': '#8A8A8A'
  }[color] || '#C8B8A2';
  return (
    <svg viewBox="0 0 200 380" style={{ width: '100%', height: '100%', maxWidth: 220, ...style }} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`pg-${color}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c} stopOpacity="0.9" />
          <stop offset="100%" stopColor={c} stopOpacity="0.55" />
        </linearGradient>
        <linearGradient id={`screen-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="100%" stopColor="#16213e" />
        </linearGradient>
      </defs>
      {/* Body */}
      <rect x="18" y="8" width="164" height="364" rx="28" fill={`url(#pg-${color})`} />
      {/* Side highlight */}
      <rect x="18" y="8" width="8" height="364" rx="4" fill="rgba(255,255,255,0.25)" />
      {/* Screen */}
      <rect x="26" y="20" width="148" height="310" rx="20" fill={`url(#screen-${color})`} />
      {/* Camera island */}
      <rect x="28" y="12" width="52" height="52" rx="16" fill="rgba(0,0,0,0.5)" />
      <circle cx="42" cy="30" r="9" fill="#111" stroke="#333" strokeWidth="1.5" />
      <circle cx="42" cy="30" r="5" fill="#1a1a1a" />
      <circle cx="63" cy="30" r="9" fill="#111" stroke="#333" strokeWidth="1.5" />
      <circle cx="63" cy="30" r="5" fill="#1a1a1a" />
      <circle cx="42" cy="51" r="9" fill="#111" stroke="#333" strokeWidth="1.5" />
      <circle cx="42" cy="51" r="5" fill="#1a1a1a" />
      <circle cx="66" cy="51" r="4" fill="#333" opacity="0.8" />
      {/* Screen content */}
      <rect x="40" y="50" width="120" height="6" rx="3" fill="rgba(255,255,255,0.12)" />
      <rect x="40" y="65" width="80" height="4" rx="2" fill="rgba(255,255,255,0.07)" />
      <rect x="36" y="90" width="128" height="72" rx="8" fill="rgba(255,255,255,0.06)" />
      <rect x="36" y="175" width="60" height="60" rx="8" fill="rgba(255,255,255,0.05)" />
      <rect x="106" y="175" width="58" height="60" rx="8" fill="rgba(255,255,255,0.05)" />
      {/* Punch-hole camera */}
      <circle cx="100" cy="36" r="5" fill="#000" opacity="0.8" />
      {/* Home indicator */}
      <rect x="75" y="324" width="50" height="4" rx="2" fill="rgba(255,255,255,0.25)" />
      {/* Volume buttons */}
      <rect x="12" y="100" width="6" height="28" rx="3" fill={c} opacity="0.7" />
      <rect x="12" y="136" width="6" height="28" rx="3" fill={c} opacity="0.7" />
      {/* Power button */}
      <rect x="182" y="118" width="6" height="42" rx="3" fill={c} opacity="0.7" />
    </svg>);

}

const hdrBtn = { background: 'none', border: 'none', cursor: 'pointer', padding: 8, display: 'flex', alignItems: 'center', borderRadius: 8 };
const navBtn = { background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.88)',
  fontFamily: 'Inter,sans-serif', fontSize: 13, fontWeight: 500, padding: '0 14px', height: 44,
  display: 'flex', alignItems: 'center', gap: 6, whiteSpace: 'nowrap' };

// ─── Breadcrumb ───────────────────────────────────────────────────
function Breadcrumb() {
  const crumbs = ['Početna', 'Mobiteli', 'Samsung', pv('name', 'Samsung Galaxy S24+')];
  return (
    <div style={{ maxWidth: 1480, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: T.sub, padding: '14px 20px', width: '100%', boxSizing: 'border-box' }}>
      {crumbs.map((c, i) =>
      <React.Fragment key={c}>
          {i > 0 && <Icon.Chevron dir="right" size={12} />}
          <span style={{ color: i === crumbs.length - 1 ? T.text : T.blue, fontWeight: i === crumbs.length - 1 ? 600 : 400, cursor: i < crumbs.length - 1 ? 'pointer' : 'default' }}>
            {c}
          </span>
        </React.Fragment>
      )}
    </div>);

}

// ─── Gallery ─────────────────────────────────────────────────────
const COLORS = [
{ name: 'Amber Yellow', hex: '#F4C430' },
{ name: 'Cobalt Violet', hex: '#7B5EA7' },
{ name: 'Onyx Black', hex: '#2A2A2A' },
{ name: 'Marble Gray', hex: '#8A8A8A' }];


function Gallery({ selectedColor, bundleMode }) {
  const [activeThumb, setActiveThumb] = React.useState(0);
  const [zoomed, setZoomed] = React.useState(false);
  const thumbCount = 5;

  return (
    <div style={{ display: 'flex', gap: 12, height: 540 }}>
      {/* Thumbnails */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 72 }}>
        {[...Array(thumbCount)].map((_, i) =>
        <button key={i} onClick={() => setActiveThumb(i)}
        style={{ width: 72, height: 72, borderRadius: 10, background: '#fff', border: `2px solid ${activeThumb === i ? T.blue : T.border}`,
          cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
          transition: 'border-color 0.15s', flexShrink: 0 }}>
            <div style={{ width: 60, height: 60, opacity: activeThumb === i ? 1 : 0.7, display: 'flex', alignItems: 'center', justifyContent: 'center', mixBlendMode: 'multiply' }}>
              <img src={bundleMode ? "images/pdp/main/ps5-bundle.png" : pv('img', "images/pdp/main/galaxy-s24-yellow.png")} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
            </div>
          </button>
        )}
        <button style={{ width: 72, height: 40, borderRadius: 10, background: '#fff', border: `1px solid ${T.border}`,
          cursor: 'pointer', fontSize: 10, fontWeight: 600, color: T.sub }}>
          Video
        </button>
      </div>

      {/* Main image */}
      <div style={{ flex: 1, borderRadius: 16, background: '#fff',
        display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden',
        cursor: 'zoom-in' }} onClick={() => setZoomed((z) => !z)}>
        <div style={{ width: '95%', maxWidth: 560, transition: 'transform 0.3s', transform: zoomed ? 'scale(1.15)' : 'scale(1)', display: 'flex', alignItems: 'center', justifyContent: 'center', mixBlendMode: 'multiply' }}>
          <img src={bundleMode ? "images/pdp/main/ps5-bundle.png" : pv('img', "images/pdp/main/galaxy-s24-yellow.png")} alt="Samsung Galaxy S24 Amber Yellow" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
        </div>

        {/* Badges */}
        <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', flexDirection: 'column', gap: 6 }}>
          <span style={{ background: T.red, color: '#fff', fontSize: 11, fontWeight: 700, padding: '4px 10px', borderRadius: 6 }}>-14%</span>
          <span style={{ background: T.orange, color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 6 }}>UAU Cijena</span>
        </div>

        {/* Wishlist */}
        <button style={{ position: 'absolute', top: 14, right: 14, width: 38, height: 38, borderRadius: '50%',
          background: '#fff', border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
          <Icon.Heart filled={false} />
        </button>

        {/* Share */}
        <button style={{ position: 'absolute', top: 58, right: 14, width: 38, height: 38, borderRadius: '50%',
          background: '#fff', border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center',
          justifyContent: 'center', cursor: 'pointer', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', color: T.sub }}>
          <Icon.Share />
        </button>

        {/* Zoom hint */}
        <div style={{ position: 'absolute', bottom: 14, right: 14, fontSize: 10, color: T.sub,
          background: 'rgba(255,255,255,0.85)', padding: '4px 8px', borderRadius: 6 }}>
          {zoomed ? 'Klikni za smanjenje' : 'Klikni za povećanje'}
        </div>

        {/* Nav arrows */}
        <button onClick={(e) => {e.stopPropagation();setActiveThumb((a) => Math.max(0, a - 1));}}
        style={galleryArrow('left')}>
          <Icon.Chevron dir="left" size={18} />
        </button>
        <button onClick={(e) => {e.stopPropagation();setActiveThumb((a) => Math.min(thumbCount - 1, a + 1));}}
        style={galleryArrow('right')}>
          <Icon.Chevron dir="right" size={18} />
        </button>

        {/* Dots */}
        <div style={{ position: 'absolute', bottom: 14, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 5 }}>
          {[...Array(thumbCount)].map((_, i) =>
          <span key={i} onClick={(e) => {e.stopPropagation();setActiveThumb(i);}}
          style={{ width: i === activeThumb ? 20 : 6, height: 6, borderRadius: 3, background: i === activeThumb ? T.blue : T.borderSub,
            cursor: 'pointer', transition: 'all 0.2s' }} />
          )}
        </div>
      </div>
    </div>);

}
const galleryArrow = (side) => ({
  position: 'absolute', top: '50%', transform: 'translateY(-50%)',
  [side]: 12, width: 36, height: 36, borderRadius: '50%',
  background: 'rgba(255,255,255,0.92)', border: `1px solid ${T.border}`,
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  cursor: 'pointer', color: T.text, boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  zIndex: 2
});

// ─── Buy Box ──────────────────────────────────────────────────────
const STORAGE = ['256GB', '512GB', '1TB'];

// ─── Condition data ──────────────────────────────────────────────
// Each condition has 0..N offers. If 0 → unavailable. If 1 → click selects it.
// If >1 → click opens flyout with filtered "more buying options" for that condition.
const CONDITIONS = [
  {
    id: 'novo',
    label: 'Novo',
    sub: 'Puna garancija 2 god.',
    color: '#0050A0',
    badgeBg: '#0050A0',
    badgeColor: '#fff',
    offers: [
      { seller: 'Big Bang', price: '1.099,99', shipping: 'Besplatna dostava', rating: 4.8, badge: 'UAU Cijena', stock: 'Na zalihi' },
      { seller: 'TechZone', price: '1.119,00', shipping: 'Dostava 4,99 €', rating: 4.6, stock: 'Na zalihi' },
      { seller: 'MobilCentar', price: '1.129,99', shipping: 'Dostava 3,99 €', rating: 4.5, stock: 'Na zalihi' },
    ],
  },
  {
    id: 'otvoreno',
    label: 'Otvorena ambalaža',
    sub: 'Neraspakiran, originalna kutija oštećena',
    color: '#FFCB66',
    badgeBg: '#FFCB66',
    badgeColor: '#002D73',
    offers: [
      { seller: 'Big Bang', price: '1.029,99', shipping: 'Besplatna dostava', rating: 4.8, stock: 'Na zalihi', note: 'Pakiranje oštećeno, proizvod nov' },
    ],
  },
  {
    id: 'obnovljeno',
    label: 'Obnovljeno - kao novo',
    sub: 'Profesionalno obnovljeno, jamstvo 12 mj.',
    color: '#2BB673',
    badgeBg: '#2BB673',
    badgeColor: '#fff',
    badge: 'POPULARNO',
    offers: [
      { seller: 'Big Bang', price: '879,99', shipping: 'Besplatna dostava', rating: 4.8, stock: 'Na zalihi', note: 'Razred A — kao novo' },
      { seller: 'Big Bang', price: '829,99', shipping: 'Besplatna dostava', rating: 4.8, stock: '3 kom', note: 'Razred B — minimalni tragovi' },
      { seller: 'ReviveTech', price: '799,99', shipping: 'Dostava 4,99 €', rating: 4.4, stock: 'Na zalihi', note: 'Razred B' },
      { seller: 'GreenPhone', price: '849,00', shipping: 'Besplatna dostava', rating: 4.6, stock: 'Na zalihi', note: 'Razred A' },
    ],
  },
  {
    id: 'popravljeno',
    label: 'Popravljeno',
    sub: 'Servisirano, jamstvo 6 mj.',
    color: '#2BD9C0',
    badgeBg: '#2BD9C0',
    badgeColor: '#002D73',
    offers: [
      { seller: 'Big Bang', price: '749,99', shipping: 'Besplatna dostava', rating: 4.8, stock: '2 kom', note: 'Zamijenjena baterija i ekran' },
      { seller: 'FixIT Servis', price: '729,00', shipping: 'Dostava 4,99 €', rating: 4.3, stock: 'Na zalihi', note: 'Zamijenjena baterija' },
    ],
  },
];

function getStartingPrice(offers) {
  if (!offers.length) return null;
  const nums = offers.map(o => parseFloat(o.price.replace(/\./g, '').replace(',', '.')));
  const min = Math.min(...nums);
  return min.toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
}

function ConditionSelector({ selectedCondition, setSelectedCondition, selectedOffers, setSelectedOffers, visibleIds }) {
  const [flyoutCondition, setFlyoutCondition] = React.useState(null);
  const visible = visibleIds ? CONDITIONS.filter(c => visibleIds.includes(c.id)) : CONDITIONS;

  function handleClick(c) {
    if (c.offers.length === 0) return;
    if (c.offers.length > 1) {
      // Open flyout WITHOUT switching the active condition; user confirms via 'Pogledaj detalje'
      setFlyoutCondition(c);
    } else {
      setSelectedCondition(c.id);
      setSelectedOffers(s => ({ ...s, [c.id]: 0 }));
    }
  }

  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
        <span style={{ fontSize: 13, fontWeight: 600, color: T.text }}>Stanje proizvoda:</span>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${visible.length}, 1fr)`, gap: 8 }}>
        {visible.map(c => {
          const isSelected = selectedCondition === c.id;
          const hasMultiple = c.offers.length > 1;
          const isUnavailable = c.offers.length === 0;
          const startPrice = getStartingPrice(c.offers);
          const selectedIdx = selectedOffers[c.id] ?? 0;
          const displayPrice = hasMultiple ? startPrice : (c.offers[0]?.price ?? null);

          return (
            <button
              key={c.id}
              onClick={() => handleClick(c)}
              disabled={isUnavailable}
              style={{
                padding: '10px 10px 10px 12px',
                borderRadius: 10,
                textAlign: 'left',
                border: `2px solid ${isSelected ? T.blue : T.border}`,
                background: isUnavailable ? '#F5F5F8' : (isSelected ? '#EBF3FF' : '#fff'),
                cursor: isUnavailable ? 'not-allowed' : 'pointer',
                position: 'relative',
                transition: 'all 0.15s',
                opacity: isUnavailable ? 0.55 : 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 3,
                minHeight: 84,
              }}
            >
              {c.badge && (
                <span style={{
                  position: 'absolute', top: -8, right: 8,
                  background: T.green, color: '#fff',
                  fontSize: 9, fontWeight: 700, padding: '2px 6px', borderRadius: 4, letterSpacing: '0.04em',
                }}>{c.badge}</span>
              )}
              {/* Color tag dot */}
              <span style={{
                position: 'absolute', top: 10, right: 10, width: 8, height: 8, borderRadius: '50%',
                background: c.color, opacity: isUnavailable ? 0.4 : 1,
              }} />

              <div style={{
                fontSize: 12, fontWeight: 700,
                color: isSelected ? T.blue : T.text,
                lineHeight: 1.2, paddingRight: 12,
              }}>
                {c.label}
              </div>

              {isUnavailable ? (
                <div style={{ fontSize: 10, color: T.sub, fontStyle: 'italic' }}>Trenutno nedostupno</div>
              ) : (
                <>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 2 }}>
                    {hasMultiple && (
                      <span style={{ fontSize: 9, color: T.sub, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                        već od
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: T.red, lineHeight: 1, letterSpacing: '-0.01em' }}>
                    {displayPrice} €
                  </div>

                </>
              )}
            </button>
          );
        })}
      </div>

      {/* See all options link */}
      <button
        onClick={() => setFlyoutCondition({ ...CONDITIONS[0], _startAll: true })}
        style={{
          marginTop: 10,
          width: '100%',
          background: 'rgba(0,80,160,0.06)',
          border: 'none',
          borderRadius: 8,
          padding: '10px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          cursor: 'pointer',
          color: T.blue,
          fontSize: 12,
          fontWeight: 500,
          textAlign: 'left',
        }}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.blue} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
        <span>Pogledaj sve ponude i stanja</span>
        <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 2, fontWeight: 600 }}>
          Otvori <Icon.Chevron dir="right" size={12} />
        </span>
      </button>

      {flyoutCondition && (
        <ConditionFlyout
          condition={flyoutCondition}
          startWithAll={!!flyoutCondition._startAll}
          selectedIndex={selectedOffers[flyoutCondition.id] ?? 0}
          onSelect={(idx) => {
            // User confirmed via 'Pogledaj detalje' — NOW switch the active condition
            setSelectedCondition(flyoutCondition.id);
            setSelectedOffers(s => ({ ...s, [flyoutCondition.id]: idx }));
            setFlyoutCondition(null);
          }}
          onChangeCondition={(id) => {
            // Filter pills inside flyout only re-scope the flyout's view; do not switch active condition yet
            const c = CONDITIONS.find(x => x.id === id);
            if (c) setFlyoutCondition(c);
          }}
          onClose={() => setFlyoutCondition(null)}
        />
      )}
    </div>
  );
}

function ConditionFlyout({ condition: initialCondition, selectedIndex, onSelect, onClose, onChangeCondition, startWithAll = false }) {
  const [activeId, setActiveId] = React.useState(initialCondition.id);
  const [showAll, setShowAll] = React.useState(startWithAll);
  const condition = CONDITIONS.find(c => c.id === activeId) || initialCondition;

  function pickFilter(c) {
    if (c._all) { setShowAll(true); return; }
    if (c.offers.length === 0) return;
    setShowAll(false);
    setActiveId(c.id);
    onChangeCondition && onChangeCondition(c.id);
  }

  // Build offers list: either single condition's offers, or all conditions' offers tagged with their condition
  const taggedOffers = showAll
    ? CONDITIONS.flatMap(c => c.offers.map(o => ({ ...o, _cond: c })))
    : condition.offers.map(o => ({ ...o, _cond: condition }));

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (typeof document === 'undefined') return null;
  const flyoutNode = (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, background: 'rgba(16,17,23,0.55)', zIndex: 9999,
        display: 'flex', justifyContent: 'flex-end', alignItems: 'stretch',
        animation: 'cf-fadein 0.2s ease',
      }}
    >
      <style>{`
        @keyframes cf-fadein { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cf-slidein { from { transform: translateX(100%); } to { transform: translateX(0); } }
      `}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 540, background: '#fff', height: '100%', overflowY: 'auto',
          boxShadow: '-12px 0 40px rgba(0,0,0,0.18)',
          animation: 'cf-slidein 0.25s cubic-bezier(.2,.7,.2,1)',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Title bar */}
        <div style={{ padding: '20px 28px 16px', borderBottom: `1px solid ${T.border}`, position: 'sticky', top: 0, background: '#fff', zIndex: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <h3 style={{ fontSize: 22, fontWeight: 700, color: T.text, letterSpacing: '-0.02em' }}>Više ponuda za proizvod</h3>
          <button onClick={onClose} aria-label="Zatvori" style={{
            width: 36, height: 36, borderRadius: '50%', border: 'none', background: 'transparent',
            cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: T.text,
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Product summary card */}
        <div style={{ padding: '18px 28px 20px', borderBottom: `8px solid ${T.bg}`, display: 'flex', gap: 14 }}>
          <div style={{ width: 100, height: 120, flexShrink: 0, background: '#fff', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 70 }}><PhoneImg color="Cobalt Violet" /></div>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.text, lineHeight: 1.35, marginBottom: 4 }}>
              Samsung Galaxy S24+ 5G 12/256GB Dual SIM…
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 6 }}>
              <Stars rating={4.3} size={11} />
              <span style={{ fontSize: 11, color: T.blue, textDecoration: 'underline' }}>(384)</span>
            </div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{ background: T.blue, color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>Novo</span>
              <span style={{ background: T.red, color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>−180€</span>
              <span style={{ display: 'inline-flex', alignItems: 'stretch', fontSize: 9, fontWeight: 700, height: 18 }}>
                <span style={{ background: '#fff', border: `1px solid ${T.border}`, padding: '2px 4px', color: T.text, display: 'flex', alignItems: 'center' }}>A↦G</span>
                <span style={{ background: T.green, color: '#fff', padding: '2px 8px 2px 6px', clipPath: 'polygon(0 0, 80% 0, 100% 50%, 80% 100%, 0 100%)', display: 'flex', alignItems: 'center' }}>A</span>
              </span>
            </div>
            <div style={{ fontSize: 11, color: T.text, display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1FB549', flexShrink: 0 }}/> Na zalihi — dostupno odmah
            </div>
            <div style={{ fontSize: 11, color: T.sub, display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l1-5h16l1 5"/><path d="M5 9v11h14V9"/></svg>
              Trgovac: <span style={{ color: T.blue, fontWeight: 600 }}>Big Bang</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
              <span style={{ fontSize: 22, fontWeight: 700, color: T.red, letterSpacing: '-0.02em' }}>1.099,99 €</span>
              <span style={{ fontSize: 12, color: T.sub, textDecoration: 'line-through' }}>1.279,99 €</span>
            </div>
            <span style={{ display: 'inline-block', marginTop: 6, background: T.green, color: '#fff', fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>
              Dodatnih 5% uz kod
            </span>
          </div>
        </div>

        {/* Filter pills */}
        <div style={{ padding: '18px 28px 14px', borderBottom: `1px solid ${T.border}` }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {[{ id: '__all', label: 'Sve', _all: true }, ...CONDITIONS].map(c => {
              const active = c._all ? showAll : (!showAll && c.id === condition.id);
              const disabled = !c._all && c.offers.length === 0;
              return (
                <button key={c.id} disabled={disabled} onClick={() => pickFilter(c)} style={{
                  fontSize: 13, fontWeight: 600, padding: '8px 16px', borderRadius: 22,
                  background: active ? T.darkBlue : '#fff',
                  color: active ? '#fff' : (disabled ? T.borderSub : T.text),
                  border: `1.5px solid ${active ? T.darkBlue : T.border}`,
                  whiteSpace: 'nowrap', cursor: disabled ? 'not-allowed' : 'pointer',
                  opacity: disabled ? 0.5 : 1,
                }}>
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Offers list */}
        <div style={{ padding: '0 28px', display: 'flex', flexDirection: 'column' }}>
          {taggedOffers.map((offer, i) => {
            const oldPriceNum = 1279.99;
            const priceNum = parseFloat(offer.price.replace(/\./g, '').replace(',', '.'));
            const savings = (oldPriceNum - priceNum).toFixed(2).replace('.', ',');
            const cond = offer._cond;
            return (
              <div key={i} style={{
                padding: '18px 0', borderBottom: i < taggedOffers.length - 1 ? `1px solid ${T.border}` : 'none',
                display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12,
              }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{
                      background: cond.badgeBg, color: cond.badgeColor, fontSize: 11, fontWeight: 700,
                      padding: '4px 10px', borderRadius: 4,
                    }}>{cond.label}</span>
                    {offer.note && <span style={{ fontSize: 11, color: T.sub }}>{offer.note}</span>}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
                    <span style={{ fontSize: 22, fontWeight: 700, color: T.red, letterSpacing: '-0.02em' }}>{offer.price} €</span>
                    <span style={{ fontSize: 12, color: T.sub, textDecoration: 'line-through' }}>1.279,99 €</span>
                  </div>
                  <div style={{ fontSize: 11, color: T.sub, marginTop: -2, marginBottom: 8 }}>MPC na 10.09.2026. 1.279,99 €</div>
                  <span style={{ display: 'inline-block', background: '#E8F221', color: T.text, fontSize: 11, fontWeight: 700,
                    padding: '4px 10px', borderRadius: 4, marginBottom: 10 }}>
                    −{savings} € u odnosu na novi
                  </span>
                  <div style={{ fontSize: 12, color: T.text, display: 'flex', alignItems: 'center', gap: 7, marginBottom: 4 }}>
                    <span style={{ width: 9, height: 9, borderRadius: '50%', background: '#1FB549', flexShrink: 0 }}/> {offer.stock}
                  </div>
                  <div style={{ fontSize: 12, color: T.sub, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l1-5h16l1 5"/><path d="M5 9v11h14V9"/></svg>
                    Trgovac: <span style={{ color: T.blue, fontWeight: 600 }}>{offer.seller}</span>
                  </div>
                </div>
                <button
                  onClick={() => onSelect(i)}
                  style={{
                    marginTop: 8, height: 40, padding: '0 18px', borderRadius: 22,
                    background: '#fff', color: T.darkBlue, border: `1.5px solid ${T.darkBlue}`,
                    fontSize: 13, fontWeight: 700, cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
                  }}
                >
                  Pogledaj detalje
                </button>
              </div>
            );
          })}
        </div>

        {/* Info section */}
        <div style={{ padding: '24px 28px', borderTop: `8px solid ${T.bg}` }}>
          <h4 style={{ fontSize: 16, fontWeight: 700, color: T.text, marginBottom: 10 }}>Dodatne informacije u vezi prikaza ponuda</h4>
          <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.55 }}>
            Kada proizvod ima više ponuda od različitih trgovaca (prodavača), ponude se rangiraju na temelju algoritma koji uzima u obzir (ovim redoslijedom):
            cijenu, ocjenu trgovca, dostupnost zaliha i uvjete dostave. Ponude su filtrirane prema odabranom stanju proizvoda.
          </p>
        </div>

        {/* Footer button */}
        <div style={{ padding: '16px 28px 24px', position: 'sticky', bottom: 0, background: '#fff', borderTop: `1px solid ${T.border}`, marginTop: 'auto' }}>
          <button onClick={onClose} style={{
            width: '100%', height: 48, borderRadius: 24, background: '#fff',
            color: T.darkBlue, border: `1.5px solid ${T.darkBlue}`,
            fontSize: 14, fontWeight: 700, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          }}>
            <Icon.Chevron dir="left" size={14} /> Povratak na proizvod
          </button>
        </div>
      </div>
    </div>
  );
  return ReactDOM.createPortal(flyoutNode, document.body);
}

function BuyBox({ bundleMode, ctaRef }) {
  const [selectedColor, setSelectedColor] = React.useState('Amber Yellow');
  const [selectedStorage, setSelectedStorage] = React.useState('256GB');
  const [qty, setQty] = React.useState(1);
  const [addedToCart, setAddedToCart] = React.useState(false);
  const [promoOpen, setPromoOpen] = React.useState(false);
  const [promoCode, setPromoCode] = React.useState('');
  const [selectedCondition, setSelectedCondition] = React.useState('novo');
  const [selectedOffers, setSelectedOffers] = React.useState({});
  const currentCondition = CONDITIONS.find(c => c.id === selectedCondition);
  const currentOffer = currentCondition?.offers[selectedOffers[selectedCondition] ?? 0];
  const isMarketplace = currentOffer && currentOffer.seller !== 'Big Bang';

  const BUNDLE_TITLE = 'PlayStation 5 Digital Chassis + dodatni Dual Sense Wireless Controller';
  const BUNDLE_PRICE = '549,99';
  const BUNDLE_INSTALMENT = '12 × 45,83 €';

  const prices = { '256GB': { price: pv('price', '1.099,99'), old: pv('old', '1.279,99') }, '512GB': { price: '1.249,99', old: '1.429,99' }, '1TB': { price: '1.449,99', old: '1.649,99' } };
  const p = prices[selectedStorage];
  const isNovo = selectedCondition === 'novo';
  const displayPrice = bundleMode ? BUNDLE_PRICE : (isNovo ? p.price : (currentOffer?.price || p.price));
  const displayOld = isNovo ? p.old : prices['256GB'].old;
  const _toNum = (s) => parseFloat(String(s).replace(/\./g,'').replace(',','.'));
  const discPct = Math.max(1, Math.round((1 - _toNum(displayPrice) / _toNum(displayOld)) * 100));

  function handleAddToCart() {
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2200);
    if (window.BBCart) window.BBCart.open({
      img: bundleMode ? 'images/pdp/main/ps5-bundle.png' : pv('img', 'images/pdp/main/galaxy-s24-yellow.png'),
      name: bundleMode ? 'PlayStation 5 Digital Chassis + dodatni Dual Sense Wireless Controller' : pv('name', 'Samsung Galaxy S24+ 5G Dual SIM SM-S926B 12/256GB'),
      price: displayPrice, old: displayOld
    });
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: "12px" }}>
      {/* Seller + breadcrumb mini */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, margin: "0px" }}>
        <span style={{ fontSize: 12, color: T.sub }}>Prodavač:</span>
        <span style={{ fontSize: 12, fontWeight: 600, color: T.blue }}>Big Bang</span>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: T.borderSub }} />
        <span style={{ fontSize: 12, color: T.sub }}>Šifra: SM-S926B/DS</span>
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 22, fontWeight: 700, color: T.text, lineHeight: 1.25, letterSpacing: '-0.02em', marginBottom: 10, margin: "0px" }}>
        {bundleMode ? BUNDLE_TITLE : pv('name', 'Samsung Galaxy S24+ 5G Dual SIM SM-S926B 12/256GB')}
      </h1>

      {/* Rating row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, margin: "0px 0px 12px" }}>
        <Stars rating={4.3} />
        <span style={{ fontSize: 13, fontWeight: 600, color: T.text }}>4.3</span>
        <a href="#reviews" style={{ fontSize: 13, color: T.blue, textDecoration: 'none' }}>384 recenzija</a>
        <span style={{ width: 4, height: 4, borderRadius: '50%', background: T.borderSub }} />
        <span style={{ fontSize: 12, color: T.sub }}>287 pitanja</span>
      </div>

      {/* Price block */}
      {bundleMode ? (
        <div style={{ borderRadius: 12, padding: '16px 18px', marginBottom: 16, border: `1px solid ${T.border}`, background: '#fff', margin: "0px 0px 12px" }}>
          <div style={{ color: T.text, letterSpacing: '-0.03em', lineHeight: 1, fontSize: "30px", fontWeight: "700", marginBottom: 12 }}>
            {displayPrice} €
          </div>
          {/* Instalment info */}
          <div style={{ background: 'rgba(0,80,160,0.06)', borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.blue} strokeWidth="2" strokeLinecap="round"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
            <span style={{ fontSize: 12, color: T.blue, fontWeight: 500 }}>ili <strong>{BUNDLE_INSTALMENT}</strong> bez kamata</span>
            <button style={{ marginLeft: 'auto', fontSize: 11, color: T.blue, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Detalji</button>
          </div>
        </div>
      ) : (
      <div style={{ background: 'linear-gradient(135deg,#FFF8F0 0%,#FFF3E8 100%)', borderRadius: 12,
        padding: '16px 18px', marginBottom: 16, border: `1px solid #FFE4CC`, margin: "0px 0px 12px" }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4, flexWrap: 'wrap' }}>
          {isNovo && (
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: T.green, fontWeight: 800, flexShrink: 0, fontSize: 22, lineHeight: 1 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={T.green} strokeWidth="3.2" strokeLinecap="round">
                <line x1="12" y1="5" x2="12" y2="19" /><polyline points="19 12 12 19 5 12" />
              </svg>
              {discPct}%
            </span>
          )}
          <span style={{ color: isNovo ? T.red : T.text, letterSpacing: '-0.03em', lineHeight: 1, fontSize: "30px", fontWeight: "700" }}>
            {displayPrice} €
          </span>
          {isNovo && (
            <span style={{ fontSize: 14, color: T.sub, textDecoration: 'line-through', lineHeight: 1, alignSelf: 'center' }}>
              {displayOld} €
            </span>
          )}
        </div>
        <div style={{ fontSize: 11.5, color: T.sub, marginTop: 6 }}>
          MPC na 10.09.2026. {displayOld || displayPrice} €
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10, margin: "6px 0px 10px", flexWrap: 'wrap' }}>
          {isNovo ? (
            <React.Fragment>
              <span style={{ background: T.orange, color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 5 }}>UAU Cijena</span>
              <span style={{ background: T.green, color: '#fff', fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 5 }}>Dodatnih 5% uz kod</span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {currentCondition && (
                <span style={{ background: currentCondition.badgeBg, color: currentCondition.badgeColor,
                  fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 5 }}>{currentCondition.label}</span>
              )}
              <span style={{ background: '#E8F221', color: T.text, fontSize: 11, fontWeight: 700, padding: '3px 9px', borderRadius: 5 }}>
                −{(_toNum(prices['256GB'].price) - _toNum(displayPrice)).toFixed(2).replace('.', ',')} € u odnosu na novi
              </span>
            </React.Fragment>
          )}
        </div>
        {/* Instalment info */}
        <div style={{ background: 'rgba(0,80,160,0.06)', borderRadius: 8, padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={T.blue} strokeWidth="2" strokeLinecap="round"><rect x="1" y="4" width="22" height="16" rx="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>
          <span style={{ fontSize: 12, color: T.blue, fontWeight: 500 }}>ili <strong>12 × 91,67 €</strong> bez kamata</span>
          <button style={{ marginLeft: 'auto', fontSize: 11, color: T.blue, background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Detalji</button>
        </div>
      </div>
      )}

      {/* Color selector */}
      {!bundleMode && (
      <div style={{ marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: T.text }}>Boja:</span>
          <span style={{ fontSize: 13, color: T.sub }}>{selectedColor}</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {COLORS.map(({ name, hex }) =>
          <button key={name} onClick={() => setSelectedColor(name)} title={name}
          style={{ width: 32, height: 32, borderRadius: '50%', background: hex, border: 'none',
            cursor: 'pointer', outline: selectedColor === name ? `3px solid ${T.blue}` : '3px solid transparent',
            outlineOffset: 2, transition: 'outline 0.15s', boxShadow: '0 1px 4px rgba(0,0,0,0.15)' }}>
            </button>
          )}
        </div>
      </div>
      )}

      {/* Storage selector */}
      {!bundleMode && (
      <div style={{ marginBottom: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: T.text }}>Pohrana:</span>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          {STORAGE.map((s) =>
          <button key={s} onClick={() => setSelectedStorage(s)}
          style={{ height: 38, padding: '0 18px', borderRadius: 8,
            border: `2px solid ${selectedStorage === s ? T.blue : T.border}`,
            background: selectedStorage === s ? '#EBF3FF' : '#fff',
            color: selectedStorage === s ? T.blue : T.text,
            fontSize: 13, fontWeight: selectedStorage === s ? 700 : 500,
            cursor: 'pointer', transition: 'all 0.15s' }}>
              {s}
            </button>
          )}
        </div>
      </div>
      )}

      {/* Condition selector (moved under storage) */}
      <ConditionSelector
        selectedCondition={selectedCondition}
        setSelectedCondition={setSelectedCondition}
        selectedOffers={selectedOffers}
        setSelectedOffers={setSelectedOffers}
        visibleIds={bundleMode ? ['novo', 'otvoreno'] : ['novo', 'obnovljeno', 'popravljeno']}
      />

      {/* Extra services inline */}
      <ExtraServicesInline bundleMode={bundleMode} />

      {/* CTA */}
      <div ref={ctaRef} style={{ marginBottom: 12 }}>
        <button onClick={handleAddToCart} className={addedToCart ? '' : 'bbcta'}
        style={{ width: '100%', height: 52, borderRadius: 26, background: addedToCart ? T.green : T.blue,
          color: '#fff', border: 'none', fontSize: 15, fontWeight: 700, cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          transition: 'background 0.25s', letterSpacing: '-0.01em' }}>
          {addedToCart ? <><Icon.Check color="#fff" /> Dodano!</> : <><Icon.Cart /> Dodaj u košaricu</>}
        </button>
      </div>

      {/* Stock box under CTA */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '12px 14px',
        background: '#F3FBF5', borderRadius: 10, border: `1px solid #C3EACC`, marginBottom: 14 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#1FB549', flexShrink: 0 }}/>
          <span style={{ fontSize: 13, fontWeight: 600, color: T.text }}>Na stanju — dostupno odmah</span>
        </div>
        <div style={{ fontSize: 12, color: T.sub, paddingLeft: 24 }}>
          Preuzimanje u poslovnici: dostupno u 12 poslovnica
        </div>
      </div>



      {/* Buy summary (marketplace banner + table) */}
      <BuyBoxSummary offer={currentOffer} condition={currentCondition} isMarketplace={isMarketplace} />
    </div>);

}

// ─── Buy box summary table (under Add to Cart) ────────────────────
function BuyBoxSummary({ offer, condition, isMarketplace }) {
  const [showAll, setShowAll] = React.useState(false);
  if (!offer) return null;

  // Derive country/delivery from seller
  const country = offer.seller === 'Big Bang' ? 'Hrvatska'
    : offer.seller === 'TechZone' ? 'Hrvatska'
    : offer.seller === 'MobilCentar' ? 'Hrvatska'
    : offer.seller === 'ReviveTech' ? 'Slovenija'
    : offer.seller === 'GreenPhone' ? 'Njemačka'
    : offer.seller === 'FixIT Servis' ? 'Hrvatska'
    : offer.seller === 'BudgetTech' ? 'Mađarska'
    : 'Hrvatska';

  const stanjeLabel = condition?.label || 'Novo';
  const stanjeBg = condition?.badgeBg || T.green;
  const stanjeFg = condition?.badgeColor || '#fff';

  const dostavljivost = offer.stock === 'Na zalihi' ? '1–2 radna dana' : '2–3 radna dana';
  const dostava = offer.shipping;
  const pravoPovrata = isMarketplace ? '14 dana' : '30 dana';
  const jamstvo = condition?.id === 'novo' ? '2 Godine'
    : condition?.id === 'obnovljeno' ? '12 mjeseci'
    : condition?.id === 'popravljeno' ? '12 mjeseci'
    : condition?.id === 'ostecene' ? '6 mjeseci'
    : '24 mjeseca';

  const allRows = [
    ['Trgovac', offer.seller, true],
    ['Država isporuke', country, false],
    ['Stanje', <span style={{ background: stanjeBg, color: stanjeFg, padding: '3px 10px', borderRadius: 5, fontSize: 11, fontWeight: 700 }}>{stanjeLabel}</span>, false],
    ['Dobavljivost', dostavljivost, true],
    ['Dostava', dostava, true],
    ['Pravo povrata', pravoPovrata, false],
    ['Jamstvo', jamstvo, false],
  ];
  const visible = showAll ? allRows : allRows.slice(0, 5);

  return (
    <div style={{ marginTop: 4 }}>
      {isMarketplace && (
        <button style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%',
          background: '#FFF4DC', border: 'none', borderRadius: 12, padding: '14px 14px',
          marginBottom: 14, cursor: 'pointer', textAlign: 'left' }}>
          <span style={{ width: 36, height: 36, borderRadius: '50%', background: '#F2A93B',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l1-5h16l1 5" />
              <path d="M3 9v11h18V9" />
              <path d="M9 9v0a3 3 0 0 1-6 0M21 9a3 3 0 0 1-6 0M15 9a3 3 0 0 1-6 0" />
            </svg>
          </span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 2 }}>Marketplace ponuda</div>
            <div style={{ fontSize: 12, color: T.sub, lineHeight: 1.45 }}>
              Kupnja je moguća isključivo preko web trgovine. <span style={{ textDecoration: 'underline', color: T.text }}>Saznaj više</span>
            </div>
          </div>
          <Icon.Chevron dir="right" size={16} />
        </button>
      )}

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {visible.map(([label, value, underline], i) => (
          <div key={label} style={{ display: 'grid', gridTemplateColumns: '130px 1fr',
            alignItems: 'center', padding: '10px 0',
            borderBottom: i < visible.length - 1 ? `1px solid ${T.border}` : 'none' }}>
            <div style={{ fontSize: 13, color: T.sub }}>{label}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>{value}</div>
          </div>
        ))}
      </div>

      {!showAll && (
        <button onClick={() => setShowAll(true)}
          style={{ marginTop: 10, background: 'none', border: 'none', padding: 0,
            fontSize: 13, fontWeight: 600, color: T.text, textDecoration: 'underline',
            cursor: 'pointer' }}>
          Prikaži sve
        </button>
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
    <div style={{ marginTop: 16, border: `1px solid ${T.border}`, borderRadius: 12, overflow: 'hidden' }}>
      <button onClick={openNotice}
        style={{ width: '100%', background: 'none', border: 'none', padding: '14px 16px', display: 'flex',
          alignItems: 'flex-start', gap: 11, textAlign: 'left', cursor: 'pointer', fontFamily: 'Inter, sans-serif' }}>
        <span style={{ display: 'flex', color: T.blue, flexShrink: 0, marginTop: 1 }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 21.5s7.5-3.6 7.5-9.4V5.2L12 2.5 4.5 5.2v6.9c0 5.8 7.5 9.4 7.5 9.4z" />
            <polyline points="8.9 11.8 11.2 14.1 15.2 9.6" />
          </svg>
        </span>
        <span style={{ flex: 1, minWidth: 0 }}>
          <span style={{ display: 'block', fontSize: 13.5, fontWeight: 600, color: T.text, marginBottom: 2 }}>
            Zakonsko jamstvo usklađenosti — najmanje 2 godine
          </span>
          <span style={{ display: 'block', fontSize: 12.5, color: T.blue, fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 2 }}>
            Vaša prava na zakonsko jamstvo
          </span>
        </span>
      </button>

      {garan && (
        <div style={{ borderTop: `1px solid ${T.border}`, padding: '14px 16px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <button onClick={openLabel} title={window.BBEU ? window.BBEU.alt(garan.years) : ''}
            style={{ background: 'none', border: `1px solid ${T.border}`, borderRadius: 6, padding: 0, overflow: 'hidden', cursor: 'pointer', flexShrink: 0, display: 'block' }}>
            <img src={window.BBEU ? window.BBEU.nestedURI(garan.years) : ''}
              alt={window.BBEU ? window.BBEU.alt(garan.years) : ''}
              style={{ display: 'block', height: 26, width: 'auto' }} />
          </button>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: T.text, marginBottom: 2 }}>
              Jamstvo trajnosti proizvođača: {years}
            </div>
            <div style={{ fontSize: 12.5, color: T.sub, lineHeight: 1.45, marginBottom: 6 }}>
              {garan.brand} nudi jamstvo za cijeli proizvod, bez dodatnih troškova.
            </div>
            <button onClick={openLabel}
              style={{ background: 'none', border: 'none', padding: 0, fontFamily: 'Inter, sans-serif',
                fontSize: 12.5, fontWeight: 600, color: T.blue, textDecoration: 'underline',
                textUnderlineOffset: 2, cursor: 'pointer' }}>
              Oznaka EU GARAN i izjava proizvođača
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Specs Table ─────────────────────────────────────────────────
const SPECS = [
{ label: 'Ekran', value: "6.7'' Dynamic AMOLED 2X, 2340×1080, 120Hz, 2600 nits" },
{ label: 'Procesor', value: 'Exynos 2400 (4nm), 10-jezgreni' },
{ label: 'RAM', value: '12 GB LPDDR5X' },
{ label: 'Pohrana', value: '256 GB / 512 GB / 1 TB (UFS 4.0)' },
{ label: 'Stražnje kamere', value: '50MP (f/1.8) + 12MP ultraširoka + 10MP 3× telefoto' },
{ label: 'Prednja kamera', value: '12MP (f/2.2)' },
{ label: 'Baterija', value: '4900 mAh, 45W žično, 15W bežično, 4.5W povratno' },
{ label: 'OS', value: 'Android 14, One UI 6.1 (jamstvo 7 god. OS ažuriranja)' },
{ label: 'Otpornost', value: 'IP68 (2m/30 min)' },
{ label: 'Dimenzije', value: '158.5 × 75.9 × 7.7 mm, 196 g' },
{ label: '5G', value: 'Da — Sub-6GHz + mmWave' },
{ label: 'Boja', value: 'Amber Yellow, Cobalt Violet, Onyx Black, Marble Gray' }];


function SpecsTable() {
  const [expanded, setExpanded] = React.useState(false);
  const visible = expanded ? SPECS : SPECS.slice(0, 6);
  return (
    <div>
      <div style={{ borderRadius: 12, overflow: 'hidden', border: `1px solid ${T.border}` }}>
        {visible.map(({ label, value }, i) =>
        <div key={label} style={{ display: 'grid', gridTemplateColumns: '180px 1fr',
          background: i % 2 === 0 ? '#fff' : '#F8F8FC', borderBottom: i < visible.length - 1 ? `1px solid ${T.border}` : 'none' }}>
            <div style={{ padding: '12px 16px', fontSize: 13, fontWeight: 600, color: T.sub }}>{label}</div>
            <div style={{ padding: '12px 16px', fontSize: 13, color: T.text, lineHeight: 1.5 }}>{value}</div>
          </div>
        )}
      </div>
      {!expanded &&
      <button onClick={() => setExpanded(true)}
      style={{ marginTop: 12, width: '100%', height: 40, background: '#fff', border: `1px solid ${T.border}`,
        borderRadius: 8, fontSize: 13, fontWeight: 600, color: T.blue, cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          Prikaži sve specifikacije <Icon.Chevron dir="down" size={14} />
        </button>
      }
    </div>);

}

// ─── Description ─────────────────────────────────────────────────
function Description() {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <div>
      <div style={{ position: 'relative', overflow: 'hidden', maxHeight: expanded ? 'none' : 180 }}>
        <div style={{ fontSize: 14, color: T.text, lineHeight: 1.75, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <p>Samsung Galaxy S24+ donosi novu eru pametnih telefona zahvaljujući ugrađenoj Galaxy AI — naprednoj umjetnoj inteligenciji koja mijenja način na koji koristite mobitel. Ovaj model kombinira moćan Exynos 2400 čipset i impresivni 6.7-inčni Dynamic AMOLED 2X zaslon koji nudi nevjerojatnih 2600 nits vršne svjetlosti.</p>
          <p>Fotografski sustav od tri kamere — predvođen 50MP glavnom senzorom s optičkom stabilizacijom slike — isporučuje profesionalne snimke u bilo kojim uvjetima. Galaxy AI značajke poput <strong>Circle to Search</strong>, <strong>Live Translate</strong> i <strong>Note Assist</strong> transformiraju svakodnevne zadatke.</p>
          <ul style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {['Exynos 2400 procesor — do 41% brži GPU od prethodnika', 'IP68 vodootpornost — do 2 metra dubine, 30 minuta', 'Jamstvo 7 godina OS i sigurnosnih ažuriranja', '45W SuperFast punjenje — 0–65% za 30 minuta', 'Titanijumski okvir — premium osjećaj i veća otpornost'].map((item) =>
            <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, listStyle: 'none' }}>
                <span style={{ marginTop: 2, flexShrink: 0 }}><Icon.Check color={T.blue} /></span>
                <span>{item}</span>
              </li>
            )}
          </ul>
        </div>
        {!expanded &&
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60,
          background: 'linear-gradient(transparent,#fff)' }} />
        }
      </div>
      <button onClick={() => setExpanded((e) => !e)}
      style={{ marginTop: 12, fontSize: 13, fontWeight: 600, color: T.blue, background: 'none',
        border: `1px solid ${T.border}`, borderRadius: 8, padding: '8px 16px', cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 6 }}>
        {expanded ? 'Prikaži manje' : 'Pročitaj više'} <Icon.Chevron dir={expanded ? 'up' : 'down'} size={13} />
      </button>
    </div>);

}

// ─── Section Tabs ─────────────────────────────────────────────────
function InfoTabs() {
  const [tab, setTab] = React.useState('opis');
  const tabs = [{ id: 'opis', label: 'Opis proizvoda' }, { id: 'specs', label: 'Specifikacije' }, { id: 'recenzije', label: 'Recenzije (384)' }];
  return (
    <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', border: `1px solid ${T.border}` }}>
      {/* Tab bar */}
      <div style={{ display: 'flex', borderBottom: `1px solid ${T.border}` }}>
        {tabs.map((t) =>
        <button key={t.id} onClick={() => setTab(t.id)}
        style={{ flex: 1, height: 52, background: 'none', border: 'none', cursor: 'pointer',
          fontSize: 14, fontWeight: tab === t.id ? 700 : 500, color: tab === t.id ? T.blue : T.sub,
          borderBottom: tab === t.id ? `3px solid ${T.blue}` : '3px solid transparent',
          transition: 'all 0.15s', letterSpacing: '-0.01em', borderStyle: "solid", borderWidth: "0px 0px 2px" }}>
            {t.label}
          </button>
        )}
      </div>
      <div style={{ padding: 28 }}>
        {tab === 'opis' && <Description />}
        {tab === 'specs' && <SpecsTable />}
        {tab === 'recenzije' && <ReviewsSection />}
      </div>
    </div>);

}

// ─── Reviews ─────────────────────────────────────────────────────
const REVIEWS = [
{ name: 'Marko T.', rating: 5, date: '18. apr 2026', title: 'Odlično!', body: 'Fantastičan telefon, kamera je nevjerojatna, a Galaxy AI značajke stvarno korisne. Preporučujem svima koji traže premium Android.', verified: true },
{ name: 'Ana K.', rating: 4, date: '12. apr 2026', title: 'Skup ali vrijedan', body: 'Odlična kamera, ljepši zaslon nego kod S23+. Jedini minus je baterija koja bi mogla biti malo veća. Inače odlično iskustvo.', verified: true },
{ name: 'Ivan P.', rating: 5, date: '3. apr 2026', title: 'Preporučujem', body: 'Prešao s iPhonea na ovaj S24+ i ne žalim. Zaslon je besprijekoran, a AI prijevod spašava me na poslovnim putovanjima.', verified: false }];


function ReviewsSection() {
  const avg = 4.3;
  const dist = [42, 28, 14, 10, 6]; // 5★ to 1★
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Summary */}
      <div style={{ display: 'flex', gap: 40, alignItems: 'center', padding: '20px 24px',
        background: '#F8F8FC', borderRadius: 12, border: `1px solid ${T.border}` }}>
        <div style={{ textAlign: 'center', flexShrink: 0 }}>
          <div style={{ fontSize: 52, fontWeight: 900, color: T.text, lineHeight: 1 }}>{avg}</div>
          <Stars rating={avg} size={18} />
          <div style={{ fontSize: 13, color: T.sub, marginTop: 4 }}>384 recenzija</div>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 5 }}>
          {dist.map((pct, i) =>
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 12, color: T.sub, width: 20, textAlign: 'right' }}>{5 - i}★</span>
              <div style={{ flex: 1, height: 7, borderRadius: 4, background: T.border }}>
                <div style={{ width: `${pct}%`, height: '100%', borderRadius: 4, background: i === 0 ? T.orange : '#F59E0B' }} />
              </div>
              <span style={{ fontSize: 12, color: T.sub, width: 28 }}>{pct}%</span>
            </div>
          )}
        </div>
      </div>
      {/* Review cards */}
      {REVIEWS.map((r, i) =>
      <div key={i} style={{ borderBottom: i < REVIEWS.length - 1 ? `1px solid ${T.border}` : 'none', paddingBottom: i < REVIEWS.length - 1 ? 20 : 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', background: T.blue,
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 14, fontWeight: 700, flexShrink: 0 }}>
              {r.name[0]}
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ fontSize: 13, fontWeight: 600 }}>{r.name}</span>
                {r.verified && <span style={{ fontSize: 10, background: '#EBF7EF', color: T.green,
                padding: '2px 7px', borderRadius: 4, fontWeight: 600 }}>Verificirana kupnja</span>}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <Stars rating={r.rating} size={12} />
                <span style={{ fontSize: 11, color: T.sub }}>{r.date}</span>
              </div>
            </div>
          </div>
          <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{r.title}</div>
          <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.65 }}>{r.body}</p>
        </div>
      )}
      <button style={{ height: 44, borderRadius: 22, border: `1.5px solid ${T.blue}`, background: '#fff',
        color: T.blue, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>
        Prikaži sve recenzije (384)
      </button>
    </div>);

}

// ─── Accessories slider ───────────────────────────────────────────
const ACCESSORIES = [
{ name: 'Samsung Leather Case S24+', price: '49,99 €', type: 'Maska' },
{ name: 'Samsung 45W adapter za punjenje', price: '29,99 €', type: 'Punjač' },
{ name: 'Samsung Galaxy Buds3 Pro', price: '199,99 €', type: 'Slušalice', hot: true },
{ name: 'Samsung SmartTag2', price: '24,99 €', type: 'Tracker' },
{ name: 'Samsung 256GB microSD EVO Plus', price: '34,99 €', type: 'Memorija' },
{ name: 'Samsung Clear Case S24+', price: '19,99 €', type: 'Maska' },
{ name: 'Samsung 25W bežični punjač', price: '39,99 €', type: 'Punjač' }];


const CARD_W = 158;
const CARD_GAP = 12;
const VISIBLE = 4;

function Accessories() {
  const [offset, setOffset] = React.useState(0);
  const maxOffset = ACCESSORIES.length - VISIBLE;
  const prev = () => setOffset((o) => Math.max(0, o - 1));
  const next = () => setOffset((o) => Math.min(maxOffset, o + 1));

  return (
    <div style={{ background: '#fff', borderRadius: 16, padding: '20px 20px 20px', border: `1px solid ${T.border}` }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
        <h2 style={{ fontSize: 15, fontWeight: 700 }}>Moglo bi vam trebati</h2>
        <div style={{ display: 'flex', gap: 6 }}>
          <button onClick={prev} disabled={offset === 0}
          style={{ width: 30, height: 30, borderRadius: '50%',
            border: '1px solid rgb(228, 228, 234)',
            background: '#fff', color: offset === 0 ? T.borderSub : T.blue,
            cursor: offset === 0 ? 'default' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon.Chevron dir="left" size={13} />
          </button>
          <button onClick={next} disabled={offset >= maxOffset}
          style={{ width: 30, height: 30, borderRadius: '50%',
            border: '1px solid rgb(228, 228, 234)',
            background: '#fff', color: offset >= maxOffset ? T.borderSub : T.blue,
            cursor: offset >= maxOffset ? 'default' : 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon.Chevron dir="right" size={13} />
          </button>
        </div>
      </div>

      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div style={{ display: 'flex', gap: CARD_GAP,
          transform: `translateX(-${offset * (CARD_W + CARD_GAP)}px)`,
          transition: 'transform 0.3s ease',
          willChange: 'transform' }}>
          {ACCESSORIES.map(({ name, price, type, hot }) =>
          <div key={name} style={{ width: CARD_W, flexShrink: 0, borderRadius: 10,
            border: `1px solid ${T.border}`, background: '#FAFAFC',
            overflow: 'hidden', position: 'relative', cursor: 'pointer' }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = T.blue}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = T.border}>
              {hot && <div style={{ position: 'absolute', top: 8, left: 8, background: T.orange,
              color: '#fff', fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 4 }}>HOT</div>}
              <div style={{ height: 110, background: '#F1F1F4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={T.borderSub} strokeWidth="1.2">
                  <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
              </div>
              <div style={{ padding: '9px 10px 12px' }}>
                <div style={{ fontSize: 9, fontWeight: 600, color: T.sub, textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: 2 }}>{type}</div>
                <div style={{ fontSize: 11, fontWeight: 600, color: T.text, lineHeight: 1.4, marginBottom: 6 }}>{name}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: T.red }}>{price}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 5, marginTop: 12 }}>
        {[...Array(maxOffset + 1)].map((_, i) =>
        <button key={i} onClick={() => setOffset(i)}
        style={{ width: i === offset ? 18 : 6, height: 6, borderRadius: 3, border: 'none',
          background: i === offset ? T.blue : T.borderSub,
          cursor: 'pointer', transition: 'all 0.2s', padding: 0 }} />
        )}
      </div>
    </div>);

}

// ─── Bundle ───────────────────────────────────────────────────────
function Bundle() {
  const [selected, setSelected] = React.useState([0, 1]);
  const items = [
  { name: 'Samsung Galaxy S24+', price: 1099.99 },
  { name: 'Samsung Galaxy Buds3 Pro', price: 199.99 },
  { name: 'Samsung 45W punjač', price: 29.99 }];

  const total = items.reduce((s, item, i) => selected.includes(i) ? s + item.price : s, 0);
  return (
    <div style={{ borderRadius: 16, border: `1px solid rgba(228, 228, 234, 0)`, padding: "24px 28px", background: "rgb(255, 255, 255)" }}>
      <h2 style={{ fontSize: 17, fontWeight: 700, marginBottom: 18 }}>Kupi zajedno i uštedi</h2>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 20 }}>
        {items.map((item, i) =>
        <React.Fragment key={i}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <input type="checkbox" id={`bundle-${i}`} checked={selected.includes(i)}
            disabled={i === 0}
            onChange={() => setSelected((s) => s.includes(i) ? s.filter((x) => x !== i) : [...s, i])}
            style={{ width: 16, height: 16, cursor: i === 0 ? 'default' : 'pointer' }} />
              <label htmlFor={`bundle-${i}`} style={{ cursor: i === 0 ? 'default' : 'pointer' }}>
                <div style={{ width: 72, height: 72, borderRadius: 10, background: '#F3F3F7',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 4 }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={T.borderSub} strokeWidth="1.2">
                    <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" />
                  </svg>
                </div>
                <div style={{ fontSize: 11, fontWeight: 600, color: T.text, maxWidth: 90, textAlign: 'center' }}>{item.name}</div>
                <div style={{ fontSize: 12, fontWeight: 700, color: T.red, textAlign: 'center', marginTop: 2 }}>{item.price.toFixed(2).replace('.', ',')} €</div>
              </label>
            </div>
            {i < items.length - 1 && <span style={{ fontSize: 22, color: T.borderSub, fontWeight: 300 }}>+</span>}
          </React.Fragment>
        )}
        <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
          <div style={{ fontSize: 13, color: T.sub, marginBottom: 2 }}>Ukupno:</div>
          <div style={{ fontSize: 26, color: T.red, fontWeight: "700" }}>{total.toFixed(2).replace('.', ',')} €</div>
          <button onClick={() => window.BBCart && window.BBCart.open({ img: items[0] && items[0].img, name: items.map(x => x.name).join(' + '), price: total.toFixed(2).replace('.', ','), qty: items.length })}
            className="bbcta" style={{ marginTop: 10, height: 44, padding: '0 24px', background: T.blue,
            color: '#fff', border: 'none', borderRadius: 22, fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
            Dodaj sve u košaricu
          </button>
        </div>
      </div>
    </div>);

}

// ─── Generic side flyout (shared by SidePanel items) ──────────────
function InfoFlyout({ icon, title, onClose, children, footer }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);
  if (typeof document === 'undefined') return null;
  const node = (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(16,17,23,0.55)',
      zIndex: 9999, display: 'flex', justifyContent: 'flex-end', alignItems: 'stretch',
      animation: 'cf-fadein 0.2s ease' }}>
      <style>{`
        @keyframes cf-fadein { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cf-slidein { from { transform: translateX(100%); } to { transform: translateX(0); } }
      `}</style>
      <div onClick={(e) => e.stopPropagation()} style={{ width: 540, background: '#fff', height: '100%',
        overflowY: 'auto', boxShadow: '-12px 0 40px rgba(0,0,0,0.18)',
        animation: 'cf-slidein 0.25s cubic-bezier(.2,.7,.2,1)',
        display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '20px 28px 16px', borderBottom: `1px solid ${T.border}`,
          position: 'sticky', top: 0, background: '#fff', zIndex: 2,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ color: T.text, display: 'inline-flex' }}>{icon}</span>
            <h3 style={{ fontSize: 20, fontWeight: 700, color: T.text, letterSpacing: '-0.02em' }}>{title}</h3>
          </div>
          <button onClick={onClose} aria-label="Zatvori" style={{ width: 36, height: 36, borderRadius: '50%',
            border: 'none', background: 'transparent', cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: T.text }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
        <div style={{ padding: '24px 28px', flex: 1 }}>{children}</div>
        {footer && <div style={{ padding: '16px 28px', borderTop: `1px solid ${T.border}`,
          position: 'sticky', bottom: 0, background: '#fff' }}>{footer}</div>}
      </div>
    </div>);
  return ReactDOM.createPortal(node, document.body);
}

// ─── Bodies for each side-panel flyout ────────────────────────────
function PromoBody() {
  const codes = [
    { pct: '20% popusta', text: 'Od 09.07.–15.07.2024., štedite uz promo kod: LJETO20. Kod se može iskoristiti na odabranim Big Bang maloprodajnim proizvodima, te vrijedi isključivo za jednokratno plaćanje.' },
    { pct: '15% popusta', text: 'Od 09.07.–15.07.2024., štedite uz promo kod: LJETO15. Kod se može iskoristiti na odabranim Big Bang maloprodajnim proizvodima, te vrijedi isključivo za plaćanje do 12 rata.' }];
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {codes.map(({ pct, text }, i) =>
      <div key={i} style={{ display: 'flex', gap: 16, padding: '20px 0',
        borderBottom: i < codes.length - 1 ? `1px solid ${T.border}` : 'none' }}>
          <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#1FB549',
            color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 7v4a2 2 0 1 1 0 4v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3a2 2 0 1 1 0-4V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1z"/><path d="M9 9h.01M15 15h.01M15 9l-6 6"/></svg>
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: T.text, marginBottom: 8 }}>{pct}</div>
            <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.6, margin: 0 }}>{text}</p>
          </div>
      </div>)}
    </div>);
}

function DeliveryBody() {
  const rows = [
    { title: 'Standardna dostava', text: 'Dostava se očekuje od utorka, 18.6. naprijed. Cijena 4,99 € ili besplatno za narudžbe iznad 49 €.' },
    { title: 'Big Bang dostava, preuzimanje i odvoz', text: 'Dostava, preuzimanje starog uređaja i odvoz se očekuje od utorka, 18.6. naprijed. Cijena prema dogovoru.' },
    { title: 'Preuzimanje u poslovnici', text: 'Besplatno preuzimanje u svim Big Bang poslovnicama. Najčešće dostupno isti dan.' }];
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {rows.map(({ title, text }, i) =>
      <div key={i} style={{ padding: '18px 0', borderBottom: i < rows.length - 1 ? `1px solid ${T.border}` : 'none' }}>
        <div style={{ fontSize: 15, fontWeight: 700, color: T.text, marginBottom: 6 }}>{title}</div>
        <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.6, margin: 0 }}>{text}</p>
      </div>)}
    </div>);
}

function PickupBody() {
  const stores = [
    { name: 'BB centralno skladište', status: 'available' },
    { name: 'BB Megastore Arena Park', status: 'last' },
    { name: 'BB Store CCO West', status: 'none' },
    { name: 'BB Superstore CCO East', status: 'none' },
    { name: 'BB Store Garden Mall', status: 'none' },
    { name: 'BB Store Sveta Nedelja', status: 'none' },
    { name: 'Samsung Store Arena', status: 'none' },
    { name: 'Outlet Jankomir', status: 'none' },
    { name: 'BB Jankomir', status: 'none' },
    { name: 'BB Megastore Osijek', status: 'available' },
    { name: 'BB Store Zadar', status: 'none' },
    { name: 'BB centralno skladište 2', status: 'none' },
    { name: 'Web narudžbe – Isporuka odmah', status: 'none' }];
  const dotColor = (s) => s === 'available' ? '#1FB549' : s === 'last' ? '#F4B400' : '#D7D9E0';
  const labelColor = (s) => s === 'none' ? T.sub : T.text;
  const fontWt = (s) => s === 'none' ? 500 : 700;
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, marginBottom: 24 }}>
        {stores.map((s, i) =>
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: dotColor(s.status), flexShrink: 0 }}/>
          <span style={{ fontSize: 14, fontWeight: fontWt(s.status), color: labelColor(s.status) }}>{s.name}</span>
        </div>)}
      </div>
      <div style={{ borderTop: `1px solid ${T.border}`, paddingTop: 16,
        display: 'flex', gap: 18, fontSize: 12, color: T.sub, flexWrap: 'wrap' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1FB549' }}/>Dostupno odmah
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#F4B400' }}/>Zadnji komad
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#D7D9E0' }}/>Nedostupno
        </span>
      </div>
    </div>);
}

function EnergyBody() {
  const grades = [
    { l: 'A', w: 50, c: '#0E8B43' }, { l: 'B', w: 60, c: '#5BB047' },
    { l: 'C', w: 70, c: '#B7CB1F' }, { l: 'D', w: 80, c: '#F2DD1B' },
    { l: 'E', w: 90, c: '#F2A81B' }, { l: 'F', w: 100, c: '#E8741D' },
    { l: 'G', w: 110, c: '#D8261C' }];
  return (
    <div style={{ border: `1px solid ${T.border}`, borderRadius: 8, padding: '28px 32px', background: '#fff' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 22 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: T.blue, fontWeight: 800, fontSize: 24, letterSpacing: '-0.02em' }}>
          <span style={{ background: T.blue, width: 28, height: 22, display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center', color: '#FFD400', fontSize: 12, fontWeight: 800,
            borderRadius: 2 }}>★★</span>
          ENERG<span style={{ color: '#FFD400' }}>⚡</span>
        </div>
        <div style={{ width: 56, height: 56, background: 'repeating-linear-gradient(45deg,#222 0 2px,#fff 2px 4px)' }}/>
      </div>
      <div style={{ fontSize: 12, color: T.sub, marginBottom: 4 }}>Samsung</div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
        <div style={{ fontSize: 12, fontWeight: 700, color: T.text }}>SM-S926B/DS</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {grades.map(({ l, w, c }) =>
          <div key={l} style={{ position: 'relative', height: 22 }}>
            <div style={{ background: c, height: '100%', width: `${w}%`,
              clipPath: 'polygon(0 0, calc(100% - 12px) 0, 100% 50%, calc(100% - 12px) 100%, 0 100%)',
              display: 'flex', alignItems: 'center', paddingLeft: 12, color: '#fff', fontWeight: 800, fontSize: 14 }}>{l}</div>
          </div>)}
        </div>
        <div style={{ background: '#000', color: '#fff', clipPath: 'polygon(0 0, calc(100% - 18px) 0, 100% 50%, calc(100% - 18px) 100%, 0 100%)',
          width: 80, height: 64, display: 'flex', alignItems: 'center', justifyContent: 'flex-start', paddingLeft: 16,
          fontSize: 32, fontWeight: 900, marginTop: 28 }}>A</div>
      </div>
      <div style={{ borderTop: `2px solid ${T.text}`, marginTop: 24, paddingTop: 18,
        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, fontSize: 18, fontWeight: 800 }}>
        <span>46 <span style={{ fontSize: 12, fontWeight: 600 }}>kWh/100h</span></span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 24, fontSize: 13, fontWeight: 700, color: T.text }}>
        <span>9.0 <span style={{ fontSize: 11, color: T.sub }}>kg</span></span>
        <span>3:48</span>
        <span>48 <span style={{ fontSize: 11, color: T.sub }}>L</span></span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: 18, fontSize: 12, color: T.sub }}>
        <span>A<span style={{ color: T.text, fontWeight: 800 }}>B</span>CDEFG</span>
        <span><span style={{ color: T.text, fontWeight: 800 }}>A</span>BCD · 70 dB</span>
      </div>
    </div>);
}

function B2BBody({ onClose }) {
  const inp = { width: '100%', height: 44, borderRadius: 8, border: `1px solid ${T.border}`,
    padding: '0 14px', fontSize: 14, fontFamily: 'inherit', color: T.text, boxSizing: 'border-box', background: '#fff' };
  const lab = { fontSize: 13, color: T.text, marginBottom: 6, display: 'block' };
  const fields = [
    { id: 'email', label: 'Email adresa', ph: 'primjer@gmail.com' },
    { id: 'name', label: 'Ime i prezime', ph: 'Tvoje ime i prezime' },
    { id: 'phone', label: 'Telefon', ph: '+385991234567' },
    { id: 'company', label: 'Naziv tvrtke', ph: 'Upišite naziv vaše tvrtke' },
    { id: 'oib', label: 'OIB tvrtke', ph: 'Upišite OIB vaše tvrtke' }];
  return (
    <div>
      <div style={{ marginBottom: 22 }}>
        <h4 style={{ fontSize: 15, fontWeight: 700, color: T.text, margin: '0 0 8px' }}>B2B ponuda</h4>
        <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.6, margin: 0 }}>
          Za tvrtke pripremamo individualne ponude uz personalizirane uvjete. Pošalji upit i javit ćemo ti se u najkraćem roku.{' '}
          <a href="#" style={{ color: T.blue, textDecoration: 'underline' }}>Saznaj više</a>
        </p>
      </div>
      <div style={{ marginBottom: 24, paddingBottom: 22, borderBottom: `1px solid ${T.border}` }}>
        <h4 style={{ fontSize: 15, fontWeight: 700, color: T.text, margin: '0 0 8px' }}>Najam opreme</h4>
        <p style={{ fontSize: 13, color: T.sub, lineHeight: 1.6, margin: 0 }}>
          Omogućujemo najam opreme putem Grenke financiranja uz fleksibilne uvjete i trajanje prema tvojim potrebama. Pošalji upit za informativnu ponudu.{' '}
          <a href="#" style={{ color: T.blue, textDecoration: 'underline' }}>Saznaj više</a>
        </p>
      </div>
      <h4 style={{ fontSize: 15, fontWeight: 700, color: T.text, margin: '0 0 16px' }}>Pošalji upit</h4>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {fields.map((f) =>
        <div key={f.id}>
          <label style={lab}>{f.label}</label>
          <input type="text" placeholder={f.ph} style={inp}/>
        </div>)}
        <div>
          <label style={lab}>Tvoj upit</label>
          <textarea placeholder="Upiši poruku" rows={5} style={{ ...inp, height: 'auto', padding: '12px 14px', resize: 'vertical' }}/>
        </div>
      </div>
    </div>);
}

// ─── Sticky side info panel ───────────────────────────────────────
function SidePanel() {
  const [openId, setOpenId] = React.useState(null);
  const items = [
  { id: 'promo', title: 'Dostupni promo kodovi', icon: <BBI.PromoTag size={20} /> },
  { id: 'delivery', title: 'Dostava', icon: <Icon.Truck size={20} /> },
  { id: 'pickup', title: 'Raspoloživost u poslovnicama (5)', icon: <BBI.LocationMarker size={20} /> },
  { id: 'energy', title: 'Energetski razred', icon: <BBI.Bolt size={20} /> },
  { id: 'b2b', title: 'B2B ponuda i najam opreme', icon: <BBI.Briefcase size={20} /> }];

  const open = items.find(i => i.id === openId);
  const Body = openId === 'promo' ? PromoBody
    : openId === 'delivery' ? DeliveryBody
    : openId === 'pickup' ? PickupBody
    : openId === 'energy' ? EnergyBody
    : openId === 'b2b' ? B2BBody : null;

  const backBtn = (
    <button onClick={() => setOpenId(null)} style={{ width: '100%', height: 48, borderRadius: 999,
      border: `1.5px solid ${T.blue}`, background: '#fff', color: T.blue, fontSize: 14, fontWeight: 700,
      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
      <Icon.Chevron dir="left" size={14}/>Povratak na proizvod
    </button>);

  const b2bFooter = openId === 'b2b' ? (
    <div style={{ display: 'flex', gap: 12 }}>
      <button onClick={() => setOpenId(null)} style={{ flex: 1, height: 48, borderRadius: 999,
        border: `1.5px solid ${T.blue}`, background: '#fff', color: T.blue, fontSize: 14, fontWeight: 700,
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
        <Icon.Chevron dir="left" size={14}/>Povratak na proizvod
      </button>
      <button className="bbcta" style={{ flex: 1, height: 48, borderRadius: 999, border: 'none',
        background: T.blue, color: '#fff', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>Pošalji upit</button>
    </div>) : backBtn;

  return (
    <React.Fragment>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {items.map(({ id, icon, title }) =>
        <button key={id} type="button" onClick={() => setOpenId(id)}
          style={{ background: '#fff', borderRadius: 16, border: `1px solid ${T.border}`,
            padding: '20px 22px', display: 'flex', alignItems: 'center', gap: 14, cursor: 'pointer',
            textAlign: 'left', width: '100%', font: 'inherit', color: T.text }}>
            <span style={{ color: T.text, flexShrink: 0, display: 'inline-flex' }}>{icon}</span>
            <span style={{ flex: 1, fontSize: 16, fontWeight: 700, color: T.text }}>{title}</span>
            <span style={{ color: T.sub, flexShrink: 0 }}><Icon.Chevron dir="right" size={16} /></span>
        </button>
        )}
      </div>
      {open && Body && (
        <InfoFlyout icon={open.icon} title={open.title} onClose={() => setOpenId(null)} footer={b2bFooter}>
          <Body onClose={() => setOpenId(null)}/>
        </InfoFlyout>
      )}
    </React.Fragment>);

}

// ─── Special Deals ────────────────────────────────────────────────
function SpecialDeals() {
  const deals = [
  { label: 'Uz kupnju dobivate Samsung Galaxy Buds FE slušalice GRATIS', badge: 'Gratis', color: '#1FB549' },
  { label: 'Aktiviraj Samsung Care+ i dobij 2 godine potpune zaštite uz 50% popusta', badge: '–50%', color: T.orange },
  { label: 'Trade-in: predaj stari mobitel i dobij do 200 € popusta', badge: 'Trade-in', color: T.blue },
  { label: 'Uz pretplatu na Samsung Care+ besplatna zamjena zaslona jednom godišnje', badge: 'Novo', color: '#7B5EA7' }];

  return (
    <div style={{ background: '#fff', borderRadius: 16, padding: '20px 24px', border: `1px solid ${T.border}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{ fontSize: 22 }}>🔥</span>
        <h2 style={{ fontSize: 17, fontWeight: 700 }}>Posebne ponude</h2>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {deals.map(({ label, badge, color }, i) =>
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0',
          borderBottom: i < deals.length - 1 ? `1px solid ${T.border}` : 'none' }}>
            <span style={{ background: color, color: '#fff', fontSize: 10, fontWeight: 700,
            padding: '3px 9px', borderRadius: 5, whiteSpace: 'nowrap', flexShrink: 0 }}>{badge}</span>
            <span style={{ fontSize: 13, color: T.text, lineHeight: 1.5 }}>{label}</span>
            <span style={{ marginLeft: 'auto', color: T.sub, flexShrink: 0 }}>
              <Icon.Chevron dir="right" size={14} />
            </span>
          </div>
        )}
      </div>
    </div>);

}

// ─── Protection Flyout ───────────────────────────────────────────
function ProtectionFlyout({ onClose, bundleMode }) {
  const products = bundleMode ? [
    { id: 'main', name: 'Samsung Galaxy S24+ 5G 12/256GB', img: 'images/pdp/main/galaxy-s24-yellow.png', basePrice: '1.099,99 €' },
    { id: 'addon', name: 'Samsung Galaxy Buds3 Pro', img: null, basePrice: '199,99 €' }
  ] : [
    { id: 'main', name: 'Samsung Galaxy S24+ 5G 12/256GB', img: 'images/pdp/main/galaxy-s24-yellow.png', basePrice: '1.099,99 €' }
  ];

  const asistencaPlans = (p) => [
    { id: '1y', label: 'Big Bang Asistenca 1 godina', sub: 'Prioritetna podrška + dvogodišnje održavanje', price: 13.99 },
    { id: '2y', label: 'Big Bang Asistenca 2 godine', sub: 'Sve značajke 1 godine + zamjenski uređaj', price: 20.99 },
    { id: '3y', label: 'Big Bang Asistenca 3 godine', sub: 'Maksimalna podrška kroz 3 godine', price: 28.99 },
    { id: 'none', label: 'Ne želim Big Bang Asistencu', price: 0 }
  ];
  const zastitaPlans = (p) => [
    { id: 'plus', label: 'Big Bang Zaštita Plus', sub: 'Pokriva slučajna oštećenja, tekućinu i kvar', price: p.id === 'addon' ? 24.99 : 113.99 },
    { id: 'none', label: 'Ne želim Big Bang Zaštita Plus', price: 0 }
  ];

  const initial = {};
  products.forEach(p => { initial[p.id] = { asistenca: '1y', zastita: 'plus' }; });
  const [sel, setSel] = React.useState(initial);

  function pick(productId, kind, id) {
    setSel(s => ({ ...s, [productId]: { ...s[productId], [kind]: id } }));
  }

  function planTotal() {
    let total = 0;
    products.forEach(p => {
      const a = asistencaPlans(p).find(x => x.id === sel[p.id].asistenca);
      const z = zastitaPlans(p).find(x => x.id === sel[p.id].zastita);
      total += (a?.price || 0) + (z?.price || 0);
    });
    return total;
  }

  const total = planTotal();

  const optionRow = (productId, kind, opt) => {
    const selected = sel[productId][kind] === opt.id;
    const isNone = opt.id === 'none';
    return (
      <button key={opt.id} onClick={() => pick(productId, kind, opt.id)} style={{
        display: 'flex', alignItems: 'center', gap: 12, padding: '14px 16px',
        background: selected ? '#F0F6FF' : '#fff', border: `1.5px solid ${selected ? T.blue : T.border}`,
        borderRadius: 10, cursor: 'pointer', textAlign: 'left', width: '100%', font: 'inherit',
        transition: 'all 0.15s'
      }}>
        <span style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
          border: `2px solid ${selected ? T.blue : T.borderSub}`, background: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {selected && <span style={{ width: 10, height: 10, borderRadius: '50%', background: T.blue }} />}
        </span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: isNone ? T.sub : T.text }}>{opt.label}</div>
          {opt.sub && <div style={{ fontSize: 12, color: T.sub, marginTop: 2, lineHeight: 1.45 }}>{opt.sub}</div>}
        </div>
        <div style={{ fontSize: 14, fontWeight: 700, color: opt.price > 0 ? T.text : T.sub, flexShrink: 0 }}>
          {opt.price === 0 ? '0,00 €' : `${opt.price.toFixed(2).replace('.', ',')} €`}
        </div>
      </button>
    );
  };

  const sectionHead = (color, IconCmp, title, badge) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
      <span style={{ width: 32, height: 32, borderRadius: 8, background: `${color}1A`,
        color: color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <IconCmp size={18} />
      </span>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 14, fontWeight: 700, color: T.text }}>{title}</div>
      </div>
      {badge && <span style={{ background: '#FFF4DC', color: '#9A6A00',
        fontSize: 10, fontWeight: 700, padding: '3px 8px', borderRadius: 4 }}>{badge}</span>}
    </div>);

  const footer = (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 11, color: T.sub, fontWeight: 600 }}>Ukupno zaštita</div>
        <div style={{ fontSize: 22, fontWeight: 800, color: T.text, letterSpacing: '-0.02em' }}>
          {total === 0 ? '0,00 €' : `+${total.toFixed(2).replace('.', ',')} €`}
        </div>
      </div>
      <button onClick={onClose} style={{ height: 48, padding: '0 24px', borderRadius: 999,
        border: `1.5px solid ${T.blue}`, background: '#fff', color: T.blue,
        fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
        Povratak
      </button>
      <button onClick={onClose} className="bbcta" style={{ height: 48, padding: '0 24px', borderRadius: 999,
        border: 'none', background: T.blue, color: '#fff',
        fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
        Potvrdi i dodaj
      </button>
    </div>);

  return (
    <InfoFlyout
      icon={<BBI.ShieldCheck size={22} />}
      title="Zaštiti svoj uređaj"
      onClose={onClose}
      footer={footer}>
      <div style={{ background: 'linear-gradient(135deg,#EAF2FE 0%,#F4F9FF 100%)',
        border: `1px solid #CFE2FB`, borderRadius: 12, padding: '14px 16px', marginBottom: 22,
        display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <span style={{ color: T.blue, flexShrink: 0, marginTop: 1 }}><BBI.ShieldCheck size={22} /></span>
        <div>
          <div style={{ fontSize: 14, fontWeight: 700, color: T.text, marginBottom: 4 }}>
            Nesreća nikad ne počiva. Zaštiti svoju investiciju.
          </div>
          <p style={{ fontSize: 12, color: T.sub, lineHeight: 1.55, margin: 0 }}>
            Big Bang Asistenca produljuje jamstvo i daje prioritetnu podršku, dok Big Bang Zaštita Plus
            pokriva slučajna oštećenja, tekućinu i nezgode. Odaberi kombinaciju koja ti najbolje odgovara{bundleMode ? ' — za svaki uređaj u paketu posebno' : ''}.
          </p>
        </div>
      </div>

      {products.map((p, idx) => (
        <div key={p.id} style={{ marginBottom: idx < products.length - 1 ? 28 : 0,
          paddingBottom: idx < products.length - 1 ? 28 : 0,
          borderBottom: idx < products.length - 1 ? `1px solid ${T.border}` : 'none' }}>
          {bundleMode && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px',
              background: '#F8F9FB', borderRadius: 12, marginBottom: 18 }}>
              <div style={{ width: 48, height: 48, borderRadius: 8, background: '#fff',
                border: `1px solid ${T.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0, overflow: 'hidden' }}>
                {p.img
                  ? <img src={p.img} alt={p.name} style={{ maxWidth: '85%', maxHeight: '85%', objectFit: 'contain', mixBlendMode: 'multiply' }} />
                  : <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={T.borderSub} strokeWidth="1.4"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: T.sub, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>Uređaj {idx + 1} od {products.length}</div>
                <div style={{ fontSize: 14, fontWeight: 700, color: T.text }}>{p.name}</div>
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: T.sub, flexShrink: 0 }}>{p.basePrice}</div>
            </div>
          )}

          <div style={{ marginBottom: 22 }}>
            {sectionHead(T.blue, BBI.Cog, 'Big Bang Asistenca', 'Najpopularnije')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {asistencaPlans(p).map(opt => optionRow(p.id, 'asistenca', opt))}
            </div>
          </div>

          <div>
            {sectionHead('#1FB549', BBI.ShieldCheck, 'Big Bang Zaštita Plus')}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {zastitaPlans(p).map(opt => optionRow(p.id, 'zastita', opt))}
            </div>
          </div>
        </div>
      ))}
    </InfoFlyout>
  );
}

// ─── Extra Services Inline (inside buy box) ───────────────────────
function ExtraServicesInline({ bundleMode }) {
  const [openProt, setOpenProt] = React.useState(false);
  const rows = [
  {
    icon: <span style={{ color: T.blue, display: 'flex' }}><BBI.Cog size={22} /></span>,
    title: 'Naručite dodatne usluge',
    sub: 'Dostava i montaža TV-a na stalak - 39,99 €'
  },
  {
    icon: <span style={{ color: T.blue, display: 'flex' }}><BBI.ShieldCheck size={22} /></span>,
    title: 'Zaštiti svoj uređaj',
    sub: 'Big Bang Plus produljeno održavanje već od 199€',
    onClick: () => setOpenProt(true)
  }];

  return (
    <React.Fragment>
    <div style={{ marginBottom: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
      {rows.map(({ icon, title, sub, onClick }) =>
      <button key={title} onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 14px',
        borderRadius: 12, background: '#F3F4F6', border: 'none', cursor: 'pointer',
        textAlign: 'left', width: '100%', transition: 'background 0.15s' }}
      onMouseEnter={(e) => e.currentTarget.style.background = '#EAECF0'}
      onMouseLeave={(e) => e.currentTarget.style.background = '#F3F4F6'}>
          <span style={{ flexShrink: 0 }}>{icon}</span>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: T.text, marginBottom: 2 }}>{title}</div>
            <div style={{ fontSize: 12, color: T.sub }}>{sub}</div>
          </div>
          <Icon.Chevron dir="right" size={16} />
        </button>
      )}
    </div>
    {openProt && <ProtectionFlyout bundleMode={bundleMode} onClose={() => setOpenProt(false)} />}
    </React.Fragment>);

}

// ─── Extra Services (standalone section) ─────────────────────────
function ExtraServices() {
  const [selected, setSelected] = React.useState([]);
  const toggle = (id) => setSelected((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);
  const services = [
  { id: 'care_plus', icon: <Icon.Shield />, title: 'Samsung Care+', sub: '2 godine potpune zaštite · slučajno oštećenje, kvar, krađa', price: '9,99 €/mj', badge: 'Preporučeno' },
  { id: 'screen', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" /></svg>, title: 'Zaštita zaslona', sub: 'Kaljeno staklo + ugradnja na licu mjesta', price: '24,99 €' },
  { id: 'setup', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="3" /><path d="M19.07 4.93A10 10 0 0 1 21 12a10 10 0 0 1-1.93 7.07M4.93 4.93A10 10 0 0 0 3 12a10 10 0 0 0 1.93 7.07M12 2v2M12 20v2M2 12h2M20 12h2" /></svg>, title: 'Postavljanje i prijenos podataka', sub: 'Stručnjak postavlja uređaj i prenosi sve podatke', price: '19,99 €' },
  { id: 'insurance', icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><polyline points="9 12 11 14 15 10" /></svg>, title: 'Osiguranje od krađe i gubitka', sub: '12 mjeseci pokrića · isplata u 48h', price: '4,99 €/mj' }];

  const total = services.filter((s) => selected.includes(s.id)).reduce((acc, s) => {
    const n = parseFloat(s.price.replace('€/mj', '').replace('€', '').replace(',', '.').trim());
    return acc + (isNaN(n) ? 0 : n);
  }, 0);
  return (
    <div style={{ background: '#fff', borderRadius: 16, padding: '20px 24px', border: `1px solid ${T.border}` }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
        <h2 style={{ fontSize: 17, fontWeight: 700 }}>Dodatne usluge i zaštita</h2>
      </div>
      <p style={{ fontSize: 13, color: T.sub, marginBottom: 16 }}>Zaštitite svoju investiciju uz Big Bang usluge</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {services.map(({ id, icon, title, sub, price, badge }) => {
          const active = selected.includes(id);
          return (
            <div key={id} onClick={() => toggle(id)}
            style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '13px 14px',
              borderRadius: 10, border: `2px solid ${active ? T.blue : T.border}`,
              background: active ? '#EBF3FF' : '#FAFAFA', cursor: 'pointer', transition: 'all 0.15s', position: 'relative' }}>
              {badge && <span style={{ position: 'absolute', top: -9, left: 14, background: T.green, color: '#fff',
                fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 4 }}>{badge}</span>}
              <span style={{ color: active ? T.blue : T.sub, flexShrink: 0 }}>{icon}</span>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: T.text }}>{title}</div>
                <div style={{ fontSize: 11, color: T.sub, marginTop: 1 }}>{sub}</div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 700, color: active ? T.blue : T.text }}>{price}</div>
              </div>
              <div style={{ width: 20, height: 20, borderRadius: 4, border: `2px solid ${active ? T.blue : T.borderSub}`,
                background: active ? T.blue : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {active && <Icon.Check color="#fff" />}
              </div>
            </div>);

        })}
      </div>
      {selected.length > 0 &&
      <div style={{ marginTop: 12, padding: '10px 14px', background: '#F3FBF5', borderRadius: 8,
        border: `1px solid #C3EACC`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 13, color: T.green, fontWeight: 600 }}>Dodane usluge: +{total.toFixed(2).replace('.', ',')} €</span>
          <button style={{ fontSize: 12, color: T.blue, background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600 }}>Prikaži detalje →</button>
        </div>
      }
    </div>);

}

// ─── More Offers (compact summary; opens flyout for full view) ───
function MoreOffers() {
  const [flyoutCondition, setFlyoutCondition] = React.useState(null);
  const summarySellers = [
    { _cond: CONDITIONS.find(c => c.id === 'novo'), seller: 'TechZone', price: '1.119,00', shipping: 'Dostava 4,99 €', rating: 4.6, reviews: 212, badge: 'UAU Cijena' },
    { _cond: CONDITIONS.find(c => c.id === 'obnovljeno'), seller: 'ReviveTech', price: '799,99', shipping: 'Dostava 4,99 €', rating: 4.4, reviews: 57 },
    { _cond: CONDITIONS.find(c => c.id === 'popravljeno'), seller: 'FixIT Servis', price: '729,00', shipping: 'Dostava 4,99 €', rating: 4.3, reviews: 23 },
  ];
  const totalCount = CONDITIONS.reduce((n, c) => n + c.offers.length, 0);

  return (
    <React.Fragment>
      <div style={{ background: '#fff', borderRadius: 16, padding: '20px 24px', border: `1px solid ${T.border}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
          <h2 style={{ fontSize: 17, fontWeight: 700 }}>Više ponuda za proizvod</h2>
          <span style={{ fontSize: 12, color: T.sub }}>{totalCount} ponuda</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {summarySellers.map(({ _cond, seller, price, shipping, rating, reviews, badge }, i) =>
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '12px 0',
            borderBottom: i < summarySellers.length - 1 ? `1px solid ${T.border}` : 'none' }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: T.border,
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              fontSize: 11, fontWeight: 700, color: T.sub }}>{seller.slice(0, 2)}</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: T.text }}>{seller}</span>
                <span style={{ background: _cond.badgeBg, color: _cond.badgeColor, fontSize: 10, fontWeight: 700,
                  padding: '2px 7px', borderRadius: 4, flexShrink: 0 }}>{_cond.label}</span>
                {badge && <span style={{ fontSize: 9, background: '#EBF3FF', color: T.blue,
                  padding: '2px 6px', borderRadius: 4, fontWeight: 600, flexShrink: 0 }}>{badge}</span>}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <Stars rating={rating} size={11} />
                <span style={{ fontSize: 11, color: T.sub }}>{rating} ({reviews})</span>
                <span style={{ width: 3, height: 3, borderRadius: '50%', background: T.borderSub }} />
                <span style={{ fontSize: 11, color: T.sub }}>{shipping}</span>
              </div>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <div style={{ fontSize: 16, fontWeight: 700, color: T.red }}>{price} €</div>
              <button onClick={() => setFlyoutCondition(_cond)} style={{ marginTop: 4, height: 30, padding: '0 14px', background: '#fff',
                color: T.blue, border: `1.5px solid ${T.blue}`, borderRadius: 15,
                fontSize: 11, fontWeight: 700, cursor: 'pointer' }}>
                Pogledaj
              </button>
            </div>
          </div>
          )}
        </div>
        <button onClick={() => setFlyoutCondition(CONDITIONS[0])}
          style={{ marginTop: 12, width: '100%', height: 38, background: '#F8F8FC', border: `1px solid ${T.border}`,
            borderRadius: 8, fontSize: 13, fontWeight: 600, color: T.text, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          Prikaži sve ponude ({totalCount}) <Icon.Chevron dir="right" size={14} />
        </button>
      </div>

      {flyoutCondition && (
        <ConditionFlyout
          condition={flyoutCondition}
          selectedIndex={0}
          startWithAll={true}
          onSelect={() => setFlyoutCondition(null)}
          onChangeCondition={(id) => {
            const c = CONDITIONS.find(x => x.id === id);
            if (c) setFlyoutCondition(c);
          }}
          onClose={() => setFlyoutCondition(null)}
        />
      )}
    </React.Fragment>
  );
}

// ─── Main App ─────────────────────────────────────────────────────
function DesktopStickyBar({ bundleMode, visible }) {
  const title = bundleMode ? 'PlayStation 5 Digital Chassis + dodatni Dual Sense Wireless Controller' : pv('name', 'Samsung Galaxy S24+ 5G Dual SIM SM-S926B 12/256GB');
  const price = bundleMode ? '549,99' : pv('price', '1.099,99');
  const img = bundleMode ? 'images/pdp/main/ps5-bundle.png' : pv('img', 'images/pdp/main/galaxy-s24-yellow.png');
  // the collapsed header bar (56px, fixed) takes over past 130px of scroll —
  // the bar docks straight under whichever header is on screen
  const [hdrCollapsed, setHdrCollapsed] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setHdrCollapsed((window.scrollY || document.documentElement.scrollTop || 0) > 130);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{ position: 'fixed', top: hdrCollapsed ? 56 : 116, left: 0, right: 0, zIndex: 150,
      background: '#fff', borderBottom: `1px solid ${T.border}`, boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
      transform: visible ? 'translateY(0)' : 'translateY(-120%)', opacity: visible ? 1 : 0,
      transition: 'transform 0.28s cubic-bezier(.2,.8,.2,1), opacity 0.2s, top 0.3s cubic-bezier(.2,.7,.3,1)', pointerEvents: visible ? 'auto' : 'none' }}>
      <div style={{ maxWidth: 1480, margin: '0 auto', width: '100%', boxSizing: 'border-box', padding: '10px 20px',
        display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ width: 48, height: 48, borderRadius: 8, background: '#fff', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', mixBlendMode: 'multiply' }}>
          <img src={img} alt="" style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} />
        </div>
        <div style={{ flex: 1, minWidth: 0, fontSize: 15, fontWeight: 600, color: T.text, letterSpacing: '-0.01em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title}</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: T.red, letterSpacing: '-0.02em', flexShrink: 0 }}>{price} €</div>
        <button onClick={() => window.BBCart && window.BBCart.open({ img: img, name: title, price: price })} className="bbcta" style={{ flexShrink: 0, height: 46, padding: '0 28px', borderRadius: 23, background: T.blue, color: '#fff', border: 'none', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, letterSpacing: '-0.01em' }}>
          <Icon.Cart /> Dodaj u košaricu
        </button>
      </div>
    </div>
  );
}


function PDPBody({ bundleMode = false, product = null }) {
  P = product && product.name ? product : null;
  const [selectedColor] = React.useState('Amber Yellow');
  const ctaRef = React.useRef(null);
  const [showStickyBar, setShowStickyBar] = React.useState(false);
  React.useEffect(() => {
    const el = ctaRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setShowStickyBar(!e.isIntersecting), { rootMargin: '-160px 0px 0px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div style={{ background: T.bg }}>
      <DesktopStickyBar bundleMode={bundleMode} visible={showStickyBar} />
      <Breadcrumb />
      <div style={{ maxWidth: 1480, margin: '0 auto', boxSizing: 'border-box', padding: '0px 20px 32px', width: '100%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 20, alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, minWidth: 0 }}>
            <Gallery selectedColor={selectedColor} bundleMode={bundleMode} />
            <InfoTabs />
            <SpecialDeals />
            <Accessories />
            <Bundle />
          </div>
          <div style={{ position: 'sticky', top: 132, display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
            <div style={{ background: '#fff', borderRadius: 16, padding: 24 }}>
              <BuyBox bundleMode={bundleMode} ctaRef={ctaRef} />
            </div>
            <SidePanel />
          </div>
        </div>
        <div style={{ marginTop: 32, display: 'flex', flexDirection: 'column', gap: 24 }}>
          <ExtraServices />
          <MoreOffers />
        </div>
      </div>
    </div>);
}
module.exports = { PDPBody };
