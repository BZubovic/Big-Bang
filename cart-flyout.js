/* Big Bang — global "added to cart" flyout.
   Any add-to-cart button anywhere on the site calls:
       window.BBCart.open({ img, name, price, old, qty })
   The flyout mounts into the mobile phone frame when one is on screen
   (so it stays inside the device), otherwise into <body>.
   Slide-in / overlay behaviour mirrors the PDP InfoFlyout system. */
(function () {
  if (window.BBCart) return;

  var T = { blue: '#0050A0', navy: '#002D73', navyCta: '#002D73', text: '#101117', sub: '#545F71',
            border: '#E3E4E9', red: '#DA0D00', green: '#1FB549', bg: '#F1F1F4' };

  /* anchored-price reference date (HR price-control decree, from 1.10.2026) */
  var ANCHOR_DATE = '10.09.2026.';

  var PROTS = [
    { id: 'asist1', title: 'Big Bang Asistenca 1 godina', sub: 'Prioritetna podrška + dvogodišnje održavanje', price: 13.99 },
    { id: 'asist2', title: 'Big Bang Asistenca 2 godine', sub: 'Sve značajke 1 godine + zamjenski uređaj', price: 20.99 },
    { id: 'plus', title: 'Big Bang Zaštita Plus', badge: 'Najpotpunije', sub: 'Pokriva slučajna oštećenja, tekućinu i kvar', price: 113.99 },
    { id: 'none', title: 'Ne želim dodatnu sigurnost', price: 0 }
  ];
  var SERVICES = [
    { id: 'zastita', name: 'Zaštitno staklo + montaža u poslovnici', desc: 'Naši tehničari postavljaju zaštitu bez zračnih mjehurića', price: 24.99 },
    { id: 'prijenos', name: 'Postavljanje i prijenos podataka', desc: 'Kontakti, fotografije i aplikacije sa starog uređaja', price: 19.99 }
  ];
  var NAVY = '#002D73';
  var TRUCK = '<svg width="22" height="15" viewBox="0 0 23 15" fill="none"><path d="M4.14491 0.666992L14.1411 0.666992C14.6212 0.666992 15.0104 1.07562 15.0104 1.57969V10.7067M15.0104 10.7067C15.0104 11.2107 14.6212 11.6194 14.1411 11.6194H9.36033M15.0104 10.7067L15.0104 3.40509C15.0104 2.90102 15.3995 2.49239 15.8796 2.49239H18.1273C18.3578 2.49239 18.5789 2.58855 18.7419 2.75971L21.7097 5.87586C21.8727 6.04702 21.9643 6.27917 21.9643 6.52123V10.7067C21.9643 11.2107 21.5751 11.6194 21.095 11.6194H20.2258M15.0104 10.7067C15.0104 11.2107 15.3995 11.6194 15.8796 11.6194H16.7488M5.88339 11.6194H4.14491M5.88339 11.6194C5.88339 12.6275 6.66173 13.4448 7.62186 13.4448C8.58199 13.4448 9.36033 12.6275 9.36033 11.6194M5.88339 11.6194C5.88339 10.6112 6.66173 9.79398 7.62186 9.79398C8.58199 9.79398 9.36033 10.6112 9.36033 11.6194M16.7488 11.6194C16.7488 12.6275 17.5272 13.4448 18.4873 13.4448C19.4474 13.4448 20.2258 12.6275 20.2258 11.6194M16.7488 11.6194C16.7488 10.6112 17.5272 9.79398 18.4873 9.79398C19.4474 9.79398 20.2258 10.6112 20.2258 11.6194M6.75262 4.31779H0.667969M5.01415 7.96858H2.40644" stroke="#002D73" stroke-width="1.33333" stroke-linecap="round"/></svg>';

  /* price block in the shared PDP / card design */
  function priceBlock(price, old, anchor, size, mobile) {
    var w = el('div', 'display:flex;flex-direction:column;gap:2px');
    var r = el('div', 'display:flex;align-items:center;gap:8px;flex-wrap:wrap');
    r.appendChild(el('span', 'font-size:' + size + 'px;font-weight:700;letter-spacing:-0.02em;line-height:1.15;color:#101117;white-space:nowrap', fmt(price)));
    if (old && old > price) r.appendChild(el('span', 'display:inline-block;padding:2px 6px;border-radius:3px;background:#DA0D00;color:#fff;font-size:' + (size > 18 ? '12.5' : '11') + 'px;font-weight:700;line-height:1.35', '-' + fmt(old - price)));
    w.appendChild(r);
    var fs = size > 18 ? '12px' : (mobile ? '9px' : '10px');
    if (old && old > price) {
      var lo = el('div', 'font-size:' + fs + ';line-height:1.35;color:#8B95A5');
      lo.appendChild(document.createTextNode('Najniža cijena u zadnjih 30 dana: '));
      lo.appendChild(el('span', 'text-decoration:line-through', fmt(old)));
      w.appendChild(lo);
    }
    w.appendChild(el('div', 'font-size:' + fs + ';line-height:1.35;color:#8B95A5', 'Cijena na ' + ANCHOR_DATE + ' ' + fmt(anchor || old || price)));
    return w;
  }

  var CROSS = [
    { img: 'images/pdp/similar/s24-fe.png', brand: 'SAMSUNG', name: 'Galaxy Buds3 Pro bežične slušalice', price: 179.99, old: 219.99 },
    { img: 'images/pdp/similar/s24-ultra.png', brand: 'SAMSUNG', name: 'Brzi punjač 45W USB-C', price: 39.99, old: 49.99 },
    { img: 'images/pdp/similar/pixel-9-pro.png', brand: 'BIG BANG', name: 'Zaštitna maskica silikonska, crna', price: 24.99, old: 0 },
    { img: 'images/pdp/similar/oneplus-13.png', brand: 'SANDISK', name: 'microSD Extreme 256GB memorijska kartica', price: 29.99, old: 42.99 }
  ];

  function toNum(v) {
    if (typeof v === 'number') return v;
    if (!v) return 0;
    var s = String(v).replace(/[^\d.,]/g, '').replace(/\./g, '').replace(',', '.');
    var n = parseFloat(s);
    return isNaN(n) ? 0 : n;
  }
  function fmt(n) {
    var s = (Math.round(n * 100) / 100).toFixed(2).replace('.', ',');
    var p = s.split(',');
    return p[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ',' + p[1] + ' €';
  }
  function el(tag, style, text) {
    var d = document.createElement(tag);
    if (style) d.setAttribute('style', style);
    if (text != null) d.textContent = text;
    return d;
  }
  function svg(markup, size, color, sw) {
    var w = document.createElement('span');
    w.setAttribute('style', 'display:inline-flex;flex-shrink:0;color:' + (color || 'currentColor'));
    w.innerHTML = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 2) + '" stroke-linecap="round" stroke-linejoin="round">' + markup + '</svg>';
    return w;
  }
  var ICO = {
    check: '<polyline points="20 6 9 17 4 12"/>',
    close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>',
    plus: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>',
    truck: '<rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 9h4l3 3v5h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>'
  };

  var st = { open: false, product: null, prot: 'none', services: {}, added: {}, root: null, host: null };

  function ensureKeyframes() {
    if (document.getElementById('bbcart-kf')) return;
    var s = document.createElement('style');
    s.id = 'bbcart-kf';
    s.textContent = '@keyframes bbc-fade{from{opacity:0}to{opacity:1}}' +
      '@keyframes bbc-in{from{transform:translateX(100%)}to{transform:translateX(0)}}' +
      '@keyframes bbc-up{from{transform:translateY(100%)}to{transform:translateY(0)}}' +
      '.bbc-nsb::-webkit-scrollbar{width:0;height:0}.bbc-nsb{scrollbar-width:none}';
    document.head.appendChild(s);
  }

  function host() {
    var frame = document.querySelector('[data-bb-frame="mobile"]');
    return frame || document.body;
  }

  function close() {
    if (!st.open) return;
    st.open = false;
    if (st.root && st.root.parentNode) st.root.parentNode.removeChild(st.root);
    st.root = null;
    document.body.style.overflow = '';
    window.removeEventListener('keydown', onKey);
  }
  function onKey(e) { if (e.key === 'Escape') close(); }

  function servicesTotal() {
    var pr = PROTS.filter(function (p) { return p.id === st.prot; })[0];
    return (pr ? pr.price : 0) + SERVICES.reduce(function (t, s) { return t + (st.services[s.id] ? s.price : 0); }, 0);
  }
  function addedTotal() {
    return CROSS.reduce(function (t, c, i) { return t + (st.added[i] ? c.price : 0); }, 0);
  }
  function itemCount() {
    var n = 1 + (st.prot !== 'none' ? 1 : 0);
    SERVICES.forEach(function (s) { if (st.services[s.id]) n++; });
    CROSS.forEach(function (c, i) { if (st.added[i]) n++; });
    return n;
  }

  function build(mobile) {
    var p = st.product || {};
    var base = toNum(p.price);
    var panelW = mobile ? '100%' : '540px';

    var overlay = el('div', 'position:' + (mobile ? 'absolute' : 'fixed') + ';inset:0;background:rgba(16,17,23,0.55);' +
      'z-index:9998;display:flex;justify-content:' + (mobile ? 'center' : 'flex-end') + ';align-items:' + (mobile ? 'flex-end' : 'stretch') + ';' +
      'font-family:Inter,sans-serif;animation:bbc-fade .2s ease');
    overlay.addEventListener('click', close);

    var panel = el('div', 'width:' + panelW + ';max-width:100%;background:#fff;' +
      (mobile ? 'height:92%;border-radius:20px 20px 0 0;animation:bbc-up .28s cubic-bezier(.2,.7,.2,1)'
              : 'height:100%;animation:bbc-in .25s cubic-bezier(.2,.7,.2,1)') +
      ';display:flex;flex-direction:column;overflow:hidden;box-shadow:-12px 0 40px rgba(0,0,0,0.18)');
    panel.addEventListener('click', function (e) { e.stopPropagation(); });

    /* ── header: green check + confirmation ── */
    var head = el('div', 'flex-shrink:0;display:flex;align-items:center;gap:12px;padding:' + (mobile ? '16px 16px' : '20px 28px') +
      ';border-bottom:1px solid ' + T.border + ';background:#fff');
    var dot = el('span', 'width:26px;height:26px;border-radius:50%;background:' + T.green +
      ';display:flex;align-items:center;justify-content:center;flex-shrink:0');
    dot.appendChild(svg(ICO.check, 15, '#fff', 3));
    head.appendChild(dot);
    head.appendChild(el('h3', 'flex:1;min-width:0;font-size:' + (mobile ? '17px' : '20px') +
      ';font-weight:700;letter-spacing:-0.02em;color:' + T.text, 'Dodano u košaricu'));
    var x = el('button', 'width:36px;height:36px;border:none;background:transparent;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;color:' + T.text);
    x.setAttribute('aria-label', 'Zatvori');
    x.appendChild(svg(ICO.close, 20, T.text, 2.5));
    x.addEventListener('click', close);
    head.appendChild(x);
    panel.appendChild(head);

    /* ── scrollable body ── */
    var body = el('div', 'flex:1;min-height:0;overflow-y:auto;padding:' + (mobile ? '16px' : '22px 28px') +
      ';display:flex;flex-direction:column;gap:' + (mobile ? '20px' : '24px'));
    body.className = 'bbc-nsb';

    /* product summary */
    var sum = el('div', 'display:flex;gap:14px;align-items:flex-start');
    var well = el('div', 'width:' + (mobile ? '76px' : '92px') + ';height:' + (mobile ? '76px' : '92px') +
      ';border-radius:10px;background:#fff;border:1px solid ' + T.border + ';flex-shrink:0;display:flex;align-items:center;justify-content:center;overflow:hidden');
    if (p.img) {
      var im = el('img', 'max-width:82%;max-height:82%;object-fit:contain;mix-blend-mode:multiply');
      im.src = p.img; im.alt = '';
      well.appendChild(im);
    }
    sum.appendChild(well);
    var sumTxt = el('div', 'flex:1;min-width:0;display:flex;flex-direction:column;gap:6px');
    sumTxt.appendChild(el('div', 'font-size:' + (mobile ? '13.5px' : '15px') + ';font-weight:600;line-height:1.35;letter-spacing:-0.01em;color:' + T.text +
      ';display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden', p.name || 'Proizvod'));
    sumTxt.appendChild(el('div', 'font-size:12.5px;color:' + T.sub, 'Količina: ' + (p.qty || 1)));
    sumTxt.appendChild(priceBlock(base, toNum(p.old), toNum(p.anchor), mobile ? 20 : 22, mobile));
    sum.appendChild(sumTxt);
    body.appendChild(sum);


    /* delivery — same row as the PDP delivery block */
    var deliv = el('div', 'display:flex;gap:14px;align-items:flex-start;border:1px solid ' + T.border + ';border-radius:12px;padding:14px 16px;background:#fff');
    var tw = el('span', 'width:24px;display:flex;justify-content:center;flex-shrink:0;margin-top:3px'); tw.innerHTML = TRUCK;
    deliv.appendChild(tw);
    var dt = el('div', 'font-size:13px;line-height:1.5;color:#101117;min-width:0');
    var d1 = el('div', 'font-size:14px;font-weight:700', 'Dostava na adresu · ');
    d1.appendChild(el('span', 'color:#0B7A48', 'besplatno'));
    dt.appendChild(d1);
    var d2 = el('div', '', 'Stiže ');
    d2.appendChild(el('b', '', 'u ponedjeljak, 5.10.'));
    d2.appendChild(document.createTextNode(' ako naručiš u sljedećih 2 h 35 min'));
    dt.appendChild(d2);
    deliv.appendChild(dt);
    body.appendChild(deliv);

    /* ── services & protection ── */
    var secTitle = function (t, sub) {
      var w = el('div', 'display:flex;flex-direction:column;gap:2px;margin-bottom:12px');
      w.appendChild(el('h4', 'font-size:' + (mobile ? '15px' : '17px') + ';font-weight:700;letter-spacing:-0.01em;color:' + T.text, t));
      if (sub) w.appendChild(el('p', 'font-size:12.5px;color:' + T.sub + ';line-height:1.45;margin:0', sub));
      return w;
    };

    var svcSec = el('div', '');
    var sh = el('div', 'display:flex;align-items:baseline;justify-content:space-between;gap:8px');
    sh.appendChild(el('span', 'font-size:17px;font-weight:700;color:#101117', 'Usluge i jamstvo'));
    sh.appendChild(el('span', 'font-size:12px;color:' + T.sub, 'dodaje se uz uređaj'));
    svcSec.appendChild(sh);
    var headS = 'font-size:13px;font-weight:600;letter-spacing:0.04em;text-transform:uppercase;color:' + T.sub + ';margin:22px 0 10px';
    var cardS = function (on) {
      return 'width:100%;display:flex;align-items:center;gap:14px;padding:16px 14px;border-radius:12px;text-align:left;cursor:pointer;font-family:Inter,sans-serif;box-sizing:border-box;' +
        'border:' + (on ? '2px solid ' + NAVY : '1px solid #E3E4E9') + ';background:' + (on ? '#EEF2FB' : '#fff') + ';margin:' + (on ? '0' : '1px');
    };
    var txtCol = function (title, sub, badge) {
      var t = el('span', 'flex:1;min-width:0;display:flex;flex-direction:column;gap:4px');
      t.appendChild(el('span', 'font-size:14px;font-weight:700;color:#101117;line-height:1.3', title));
      if (badge) t.appendChild(el('span', 'align-self:flex-start;background:' + NAVY + ';color:#fff;font-size:11px;font-weight:600;padding:2px 7px;border-radius:4px', badge));
      if (sub) t.appendChild(el('span', 'font-size:12px;color:' + T.sub + ';line-height:1.45', sub));
      return t;
    };
    svcSec.appendChild(el('div', headS, 'Sigurnost'));
    var protList = el('div', 'display:flex;flex-direction:column;gap:10px');
    PROTS.forEach(function (pr) {
      var on = st.prot === pr.id;
      var row = el('button', cardS(on));
      row.setAttribute('role', 'radio'); row.setAttribute('aria-checked', on);
      var rd = el('span', 'width:22px;height:22px;border-radius:50%;box-sizing:border-box;border:' + (on ? '2px solid ' + NAVY : '1.5px solid #8B95A5') + ';display:flex;align-items:center;justify-content:center;flex-shrink:0;background:#fff');
      if (on) rd.appendChild(el('span', 'width:12px;height:12px;border-radius:50%;background:' + NAVY));
      row.appendChild(rd);
      row.appendChild(txtCol(pr.title, pr.sub, pr.badge));
      if (pr.price) row.appendChild(el('span', 'font-size:14px;font-weight:700;color:#101117;white-space:nowrap;flex-shrink:0', fmt(pr.price)));
      row.addEventListener('click', function () { st.prot = pr.id; rerender(); });
      protList.appendChild(row);
    });
    svcSec.appendChild(protList);
    svcSec.appendChild(el('div', headS, 'Usluge'));
    var svcList = el('div', 'display:flex;flex-direction:column;gap:10px');
    SERVICES.forEach(function (sv) {
      var on = !!st.services[sv.id];
      var row = el('button', cardS(on));
      row.setAttribute('role', 'checkbox'); row.setAttribute('aria-checked', on);
      var box = el('span', 'width:22px;height:22px;border-radius:4px;box-sizing:border-box;border:' + (on ? 'none' : '1.5px solid #8B95A5') + ';background:' + (on ? NAVY : '#fff') + ';display:flex;align-items:center;justify-content:center;flex-shrink:0');
      if (on) box.appendChild(svg(ICO.check, 14, '#fff', 3));
      row.appendChild(box);
      row.appendChild(txtCol(sv.name, sv.desc));
      row.appendChild(el('span', 'font-size:14px;font-weight:700;color:#101117;white-space:nowrap;flex-shrink:0', fmt(sv.price)));
      row.addEventListener('click', function () { st.services[sv.id] = !st.services[sv.id]; rerender(); });
      svcList.appendChild(row);
    });
    svcSec.appendChild(svcList);
    body.appendChild(svcSec);

    /* ── cross-sell ── */
    var crossSec = el('div', '');
    var ch = el('div', 'display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px');
    var cht = secTitle('Kupci često dodaju', 'Preporučeni dodaci za odabrani proizvod.');
    cht.style.marginBottom = '0'; cht.style.minWidth = '0';
    ch.appendChild(cht);
    var arrows = el('div', 'display:flex;align-items:center;gap:10px;flex-shrink:0');
    [['15 18 9 12 15 6', -1, 'Prethodno'], ['9 18 15 12 9 6', 1, 'Sljedeće']].forEach(function (a) {
      var ab = el('button', 'width:40px;height:40px;border-radius:50%;background:#F1F1F4;border:none;display:flex;align-items:center;justify-content:center;color:#101117;cursor:pointer;transition:background .15s');
      ab.setAttribute('aria-label', a[2]);
      ab.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="' + a[0] + '"/></svg>';
      ab.addEventListener('mouseenter', function () { ab.style.background = '#E7E7EE'; });
      ab.addEventListener('mouseleave', function () { ab.style.background = '#F1F1F4'; });
      ab.addEventListener('click', function () { track.scrollBy({ left: a[1] * 170, behavior: 'smooth' }); });
      arrows.appendChild(ab);
    });
    ch.appendChild(arrows);
    crossSec.appendChild(ch);
    var track = el('div', 'display:flex;gap:12px;overflow-x:auto;padding-bottom:4px;margin:0 -' + (mobile ? '16px' : '28px') +
      ';padding-left:' + (mobile ? '16px' : '28px') + ';padding-right:' + (mobile ? '16px' : '28px'));
    track.className = 'bbc-nsb';
    CROSS.forEach(function (c, i) {
      var on = !!st.added[i];
      var card = el('div', 'width:158px;flex-shrink:0;border:1px solid ' + T.border + ';border-radius:12px;padding:10px;display:flex;flex-direction:column;gap:8px;background:#fff');
      var cw = el('div', 'height:88px;display:flex;align-items:center;justify-content:center;overflow:hidden');
      var ci = el('img', 'max-width:80%;max-height:100%;object-fit:contain;mix-blend-mode:multiply');
      ci.src = c.img; ci.alt = '';
      cw.appendChild(ci);
      card.appendChild(cw);
      card.appendChild(el('div', 'font-size:10px;font-weight:700;letter-spacing:0.04em;color:' + T.sub, c.brand));
      card.appendChild(el('div', 'font-size:12.5px;font-weight:600;line-height:1.3;color:' + T.text +
        ';display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden;min-height:32px', c.name));
      card.appendChild(priceBlock(c.price, c.old, 0, 16, mobile));
      var b = el('button', 'margin-top:auto;height:34px;border-radius:17px;border:1.5px solid ' + (on ? T.green : T.blue) +
        ';background:' + (on ? T.green : '#fff') + ';color:' + (on ? '#fff' : T.blue) +
        ';font-family:Inter,sans-serif;font-size:12.5px;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px');
      b.appendChild(svg(on ? ICO.check : ICO.plus, 14, 'currentColor', 2.4));
      b.appendChild(el('span', '', on ? 'Dodano' : 'Dodaj'));
      b.addEventListener('click', function () { st.added[i] = !st.added[i]; rerender(); });
      card.appendChild(b);
      track.appendChild(card);
    });
    crossSec.appendChild(track);
    body.appendChild(crossSec);

    panel.appendChild(body);

    /* ── footer: subtotal + 2 CTAs ── */
    var total = base + servicesTotal() + addedTotal();
    var foot = el('div', 'flex-shrink:0;border-top:1px solid ' + T.border + ';background:#fff;padding:' + (mobile ? '14px 16px 18px' : '16px 28px 22px') +
      ';display:flex;flex-direction:column;gap:12px');
    var tot = el('div', 'display:flex;align-items:baseline;justify-content:space-between');
    tot.appendChild(el('span', 'font-size:13.5px;font-weight:600;color:' + T.sub, 'Ukupno (' + itemCount() + ' proizvoda)'));
    tot.appendChild(el('span', 'font-size:' + (mobile ? '19px' : '22px') + ';font-weight:700;letter-spacing:-0.02em;color:' + T.text, fmt(total)));
    foot.appendChild(tot);
    var btns = el('div', 'display:flex;flex-direction:column;gap:8px');
    var primary = el('button', 'height:48px;border-radius:24px;border:none;background:' + T.navyCta +
      ';color:#fff;font-family:Inter,sans-serif;font-size:15px;font-weight:700;letter-spacing:-0.01em;cursor:pointer');
    primary.className = 'bbcta';
    primary.textContent = 'Pregled košarice';
    primary.addEventListener('click', function () {
      close();
      if (typeof st.onCart === 'function') st.onCart();
    });
    var secondary = el('button', 'height:46px;border-radius:23px;border:1.5px solid ' + T.blue + ';background:#fff;color:' + T.blue +
      ';font-family:Inter,sans-serif;font-size:14.5px;font-weight:700;letter-spacing:-0.01em;cursor:pointer');
    secondary.textContent = 'Nastavi kupovati';
    secondary.addEventListener('click', close);
    btns.appendChild(primary);
    btns.appendChild(secondary);
    foot.appendChild(btns);
    panel.appendChild(foot);

    overlay.appendChild(panel);
    return overlay;
  }

  function rerender() {
    if (!st.open) return;
    var mobile = st.host !== document.body;
    // remember every scroll position before the swap, so a selection never
    // bounces the panel back to the top
    var oldScrollers = st.root.querySelectorAll('.bbc-nsb');
    var pos = [];
    for (var i = 0; i < oldScrollers.length; i++) {
      pos.push([oldScrollers[i].scrollTop, oldScrollers[i].scrollLeft]);
    }
    var next = build(mobile);
    next.style.animation = 'none';
    next.firstChild.style.animation = 'none';
    st.host.replaceChild(next, st.root);
    st.root = next;
    var newScrollers = next.querySelectorAll('.bbc-nsb');
    for (var j = 0; j < newScrollers.length && j < pos.length; j++) {
      newScrollers[j].scrollTop = pos[j][0];
      newScrollers[j].scrollLeft = pos[j][1];
    }
  }

  window.BBCart = {
    count: 2,
    /* p: { img, name, price, old, qty } */
    open: function (p) {
      ensureKeyframes();
      close();
      st.product = p || {};
      st.services = {};
      st.prot = 'none';
      st.added = {};
      st.host = host();
      st.open = true;
      st.root = build(st.host !== document.body);
      st.host.appendChild(st.root);
      if (st.host === document.body) document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onKey);
      this.count = this.count + 1;
      try { window.dispatchEvent(new CustomEvent('bb-cart-change', { detail: { count: this.count } })); } catch (e) {}
    },
    close: close,
    /* the shell wires this so "Pregled košarice" can navigate */
    setCartHandler: function (fn) { st.onCart = fn; }
  };
})();
