/* Big Bang — global "Dostupnost" flyout (PDP stock box under the CTA).
     window.BBAvail.info(inStock, shown)  -> { key, title, sub, tone, icon } for the PDP box
     window.BBAvail.open({ inStock, shown, product })
   Four scenarios: out/in stock × display unit / no display unit.
   Mounts into the mobile phone frame when present (bottom sheet), otherwise a right-side panel. */
(function () {
  if (window.BBAvail) return;

  var T = { blue: '#0050A0', navy: '#002D73', text: '#101117', sub: '#545F71', border: '#E3E4E9',
            green: '#1FB549', greenDk: '#0B7A48', amber: '#F2A93B', grey: '#A3A9B5', bg: '#F1F1F4' };

  var SCEN = {
    'out-shown': { title: 'Pogledaj uživo', sub: 'Nije na zalihi, provjeri gdje je proizvod izložen', tone: 'out', icon: 'eye' },
    'out-none':  { title: 'Nije na zalihi', sub: 'Pošalji upit o dostupnosti', tone: 'out', icon: 'mail' },
    'in-none':   { title: 'Provjeri dostupnost', sub: 'Provjeri dostupnost po trgovinama', tone: 'in', icon: 'pin' },
    'in-shown':  { title: 'Dostupno – pogledaj uživo', sub: 'Provjeri dostupnost i gdje je proizvod izložen', tone: 'in', icon: 'eye' }
  };
  function key(inStock, shown) { return (inStock ? 'in' : 'out') + '-' + (shown ? 'shown' : 'none'); }
  function info(inStock, shown) { var k = key(inStock, shown); var s = SCEN[k]; return { key: k, title: s.title, sub: s.sub, tone: s.tone, icon: s.icon }; }

  /* per-scenario store states: stock 'in' | 'last' | 'none', shown true/false */
  var PLAN = {
    'out-shown': [{ i: 0, stock: 'none', shown: true }, { i: 6, stock: 'none', shown: true }],
    'out-none':  [],
    'in-none':   [{ i: 0, stock: 'in' }, { i: 4, stock: 'last' }, { i: 5, stock: 'in' }],
    'in-shown':  [{ i: 0, stock: 'last' }, { i: 6, stock: 'none', shown: true }, { i: 4, stock: 'in', shown: true }]
  };

  var ICO = {
    close: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    truck: '<rect x="1" y="6" width="14" height="11" rx="1"/><path d="M15 9h4l3 3v5h-7z"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    chev: '<polyline points="6 9 12 15 18 9"/>',
    check: '<polyline points="20 6 9 17 4 12"/>'
  };
  function el(tag, style, text) {
    var d = document.createElement(tag);
    if (style) d.setAttribute('style', style);
    if (text != null) d.textContent = text;
    return d;
  }
  function svg(name, size, color, sw) {
    var w = el('span', 'display:inline-flex;flex-shrink:0;color:' + (color || 'currentColor'));
    w.innerHTML = '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="' + (sw || 2) + '" stroke-linecap="round" stroke-linejoin="round">' + ICO[name] + '</svg>';
    return w;
  }
  function chip(kind) {
    var m = {
      in:    ['#E6F5EC', T.greenDk, T.green, 'Na zalihi'],
      last:  ['#FFF4DC', '#7A5200', T.amber, 'Zadnji komad'],
      none:  ['#F1F1F4', T.sub, T.grey, 'Nije na zalihi'],
      shown: ['#EBF3FE', T.blue, null, 'Izloženo']
    }[kind];
    var c = el('span', 'display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 10px;border-radius:12px;font-size:12px;font-weight:600;background:' + m[0] + ';color:' + m[1]);
    if (m[2]) c.appendChild(el('span', 'width:8px;height:8px;border-radius:50%;background:' + m[2]));
    else c.appendChild(svg('eye', 14, m[1], 2));
    c.appendChild(document.createTextNode(m[3]));
    return c;
  }
  function pillBtn(label, primary, onClick) {
    var b = el('button', 'height:40px;padding:0 18px;border-radius:20px;font-family:Inter,sans-serif;font-size:14px;font-weight:700;letter-spacing:-0.01em;cursor:pointer;' +
      (primary ? 'border:none;color:#fff' : 'background:#fff;border:1.5px solid ' + T.blue + ';color:' + T.blue), label);
    if (primary) b.className = 'bbcta';
    b.addEventListener('click', onClick);
    return b;
  }
  function eyebrow(t) { return el('div', 'font-size:12px;font-weight:700;letter-spacing:0.06em;text-transform:uppercase;color:' + T.sub, t); }

  var st = { open: false, root: null, opts: null, othersOpen: false, sent: false };

  function ensureKeyframes() {
    if (document.getElementById('bbavail-kf')) return;
    var s = document.createElement('style');
    s.id = 'bbavail-kf';
    s.textContent = '@keyframes bba-fade{from{opacity:0}to{opacity:1}}@keyframes bba-in{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes bba-up{from{transform:translateY(100%)}to{transform:translateY(0)}}';
    document.head.appendChild(s);
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
  function directions(s) { window.open('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(s.name + ', ' + s.address), '_blank'); }

  function storeCard(s, mobile) {
    var card = el('div', 'border:1px solid ' + T.border + ';border-radius:12px;padding:' + (mobile ? '14px' : '16px') + ';display:flex;flex-direction:column;gap:10px;background:#fff');
    card.appendChild(el('div', 'font-size:15px;font-weight:700;letter-spacing:-0.01em;color:' + T.text, s.name));
    var chips = el('div', 'display:flex;flex-wrap:wrap;gap:6px');
    if (s.shown) chips.appendChild(chip('shown'));
    chips.appendChild(chip(s.stock));
    card.appendChild(chips);
    if (s.shown && s.stock === 'none') card.appendChild(el('div', 'font-size:13px;line-height:1.45;color:' + T.sub, 'Pogledaj i isprobaj uživo – kupi online.'));
    else if (s.shown) card.appendChild(el('div', 'font-size:13px;line-height:1.45;color:' + T.sub, 'Pogledaj i isprobaj uživo, preuzmi odmah.'));
    card.appendChild(el('div', 'font-size:12px;color:' + T.sub, s.address + ' · ' + s.hours));
    var row = el('div', 'display:flex;flex-wrap:wrap;gap:8px;margin-top:2px');
    if (s.stock !== 'none') row.appendChild(pillBtn('Preuzmi ovdje', true, function () {
      var p = (st.opts && st.opts.product) || null;
      close();
      if (p && window.BBCart) window.BBCart.open(p);
    }));
    row.appendChild(pillBtn('Kako doći', false, function () { directions(s); }));
    card.appendChild(row);
    return card;
  }

  function render() {
    var o = st.opts || {};
    var k = key(!!o.inStock, !!o.shown);
    var mobile = !!document.querySelector('[data-bb-frame="mobile"]');
    var all = (window.BB_STORES || []).slice();
    var plan = PLAN[k];
    var used = {};
    var listed = plan.filter(function (p) { return all[p.i]; }).map(function (p) {
      used[p.i] = true;
      var s = all[p.i];
      return { name: s.name, address: s.address, hours: s.hours, stock: p.stock, shown: !!p.shown };
    });
    var others = all.filter(function (s, i) { return !used[i]; });

    var overlay = el('div', 'position:' + (mobile ? 'absolute' : 'fixed') + ';inset:0;background:rgba(16,17,23,0.55);z-index:9998;display:flex;justify-content:' + (mobile ? 'center' : 'flex-end') + ';align-items:' + (mobile ? 'flex-end' : 'stretch') + ';font-family:Inter,sans-serif;animation:bba-fade .2s ease');
    overlay.addEventListener('click', close);
    var panel = el('div', 'width:' + (mobile ? '100%' : '440px') + ';max-width:100%;background:#fff;display:flex;flex-direction:column;overflow:hidden;box-shadow:-12px 0 40px rgba(0,0,0,0.18);' +
      (mobile ? 'height:88%;border-radius:20px 20px 0 0;animation:bba-up .28s cubic-bezier(.2,.7,.2,1)' : 'height:100%;animation:bba-in .25s cubic-bezier(.2,.7,.2,1)'));
    panel.addEventListener('click', function (e) { e.stopPropagation(); });

    var head = el('div', 'flex-shrink:0;display:flex;align-items:center;gap:10px;padding:' + (mobile ? '16px' : '20px 24px') + ';border-bottom:1px solid ' + T.border);
    head.appendChild(svg('pin', 22, T.text, 2));
    head.appendChild(el('h3', 'flex:1;min-width:0;margin:0;font-size:' + (mobile ? '18px' : '20px') + ';font-weight:700;letter-spacing:-0.02em;color:' + T.text, 'Dostupnost'));
    var x = el('button', 'width:36px;height:36px;border:none;background:transparent;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer');
    x.setAttribute('aria-label', 'Zatvori');
    x.appendChild(svg('close', 20, T.text, 2.5));
    x.addEventListener('click', close);
    head.appendChild(x);
    panel.appendChild(head);

    var body = el('div', 'flex:1;min-height:0;overflow-y:auto;padding:' + (mobile ? '16px' : '20px 24px') + ';display:flex;flex-direction:column;gap:12px');

    /* delivery */
    body.appendChild(eyebrow('Dostava na adresu'));
    var inS = !!o.inStock;
    var del = el('div', 'display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:12px;border:1px solid ' + (inS ? '#C3EACC' : T.border) + ';background:' + (inS ? '#F3FBF5' : '#F7F7F9'));
    del.appendChild(svg('truck', 20, inS ? T.green : T.grey, 2));
    var dt = el('div', 'display:flex;flex-direction:column;gap:2px;min-width:0');
    dt.appendChild(el('div', 'font-size:15px;font-weight:700;color:' + T.text, inS ? 'Na zalihi' : 'Nije na zalihi'));
    dt.appendChild(el('div', 'font-size:13px;color:' + T.sub, inS ? 'Isporuka za 1–3 radna dana' : 'Trenutno nije moguća isporuka'));
    del.appendChild(dt);
    body.appendChild(del);

    /* enquiry — scenario 2 */
    if (k === 'out-none') {
      var q = el('div', 'display:flex;flex-direction:column;gap:10px;padding:16px;border-radius:12px;border:1px solid ' + T.border);
      q.appendChild(el('div', 'font-size:15px;font-weight:700;color:' + T.text, 'Pošalji upit o dostupnosti'));
      if (st.sent) {
        var ok = el('div', 'display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:' + T.greenDk);
        ok.appendChild(svg('check', 16, T.green, 3));
        ok.appendChild(document.createTextNode('Upit je poslan. Javit ćemo vam se e-mailom.'));
        q.appendChild(ok);
      } else {
        q.appendChild(el('div', 'font-size:13px;line-height:1.45;color:' + T.sub, 'Javit ćemo vam kada proizvod ponovno bude dostupan online ili u trgovini.'));
        var inp = el('input', 'height:44px;border:1px solid ' + T.sub + ';border-radius:6px;padding:0 12px;font-family:Inter,sans-serif;font-size:15px;color:' + T.text + ';outline:none');
        inp.type = 'email'; inp.placeholder = 'Vaša e-mail adresa';
        inp.addEventListener('focus', function () { inp.style.borderColor = T.blue; });
        inp.addEventListener('blur', function () { inp.style.borderColor = T.sub; });
        q.appendChild(inp);
        var sb = pillBtn('Pošalji upit', true, function () { st.sent = true; redraw(); });
        sb.style.alignSelf = 'flex-start';
        q.appendChild(sb);
      }
      body.appendChild(q);
    }

    /* stores */
    body.appendChild(el('div', 'height:6px'));
    body.appendChild(eyebrow('Trgovine'));
    listed.forEach(function (s) { body.appendChild(storeCard(s, mobile)); });

    if (others.length) {
      var acc = el('div', 'border:1px solid ' + T.border + ';border-radius:12px;background:#F7F7F9;overflow:hidden');
      var ah = el('button', 'width:100%;display:flex;align-items:center;gap:8px;padding:14px 16px;background:none;border:none;cursor:pointer;font-family:Inter,sans-serif;text-align:left');
      var al = el('span', 'flex:1;min-width:0;font-size:14px;color:' + T.sub);
      al.appendChild(el('strong', 'font-weight:700;color:' + T.text, (listed.length ? 'Ostale trgovine' : 'Sve trgovine') + ' (' + others.length + ')'));
      al.appendChild(document.createTextNode(' · nedostupno'));
      ah.appendChild(al);
      var cv = svg('chev', 18, T.text, 2);
      if (st.othersOpen) cv.style.transform = 'rotate(180deg)';
      ah.appendChild(cv);
      ah.addEventListener('click', function () { st.othersOpen = !st.othersOpen; redraw(); });
      acc.appendChild(ah);
      if (st.othersOpen) {
        var ol = el('div', 'display:flex;flex-direction:column;padding:0 16px 8px');
        others.forEach(function (s, i) {
          var r = el('div', 'display:flex;align-items:center;gap:10px;padding:10px 0;' + (i ? 'border-top:1px solid ' + T.border : ''));
          r.appendChild(el('span', 'width:8px;height:8px;border-radius:50%;flex-shrink:0;background:' + T.grey));
          r.appendChild(el('span', 'flex:1;min-width:0;font-size:13px;color:' + T.text, s.name));
          ol.appendChild(r);
        });
        acc.appendChild(ol);
      }
      body.appendChild(acc);
    }
    panel.appendChild(body);

    /* legend */
    var leg = el('div', 'flex-shrink:0;display:grid;grid-template-columns:1fr 1fr;gap:10px 16px;padding:' + (mobile ? '14px 16px' : '16px 24px') + ';border-top:1px solid ' + T.border + ';font-size:12px;color:' + T.sub);
    [[T.green, 'Na zalihi'], [T.amber, 'Zadnji komad'], [T.grey, 'Nedostupno'], [null, 'Izloženo – može se pogledati']].forEach(function (l) {
      var it = el('div', 'display:flex;align-items:center;gap:8px;min-width:0');
      if (l[0]) it.appendChild(el('span', 'width:8px;height:8px;border-radius:50%;flex-shrink:0;background:' + l[0]));
      else it.appendChild(svg('eye', 14, T.blue, 2));
      it.appendChild(el('span', '', l[1]));
      leg.appendChild(it);
    });
    panel.appendChild(leg);
    overlay.appendChild(panel);
    return overlay;
  }

  function redraw() {
    if (!st.open) return;
    var host = st.root.parentNode;
    var scroll = st.root.querySelector('div > div:nth-child(2)');
    var top = scroll ? scroll.scrollTop : 0;
    var n = render();
    n.style.animation = 'none';
    n.firstChild.style.animation = 'none';
    host.replaceChild(n, st.root);
    st.root = n;
    var ns = n.querySelector('div > div:nth-child(2)');
    if (ns) ns.scrollTop = top;
  }

  function open(opts) {
    close();
    ensureKeyframes();
    st.opts = opts || {};
    st.othersOpen = false;
    st.sent = false;
    st.open = true;
    st.root = render();
    var frame = document.querySelector('[data-bb-frame="mobile"]');
    (frame || document.body).appendChild(st.root);
    if (!frame) document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
  }

  window.BBAvail = { info: info, open: open, close: close };
})();
