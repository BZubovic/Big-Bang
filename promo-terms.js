/* promo-terms.js — GLOBAL promo-code terms dialog: window.BBPromo.open(data)
   + window.BBPromo.openAll({ codes, price, cur, mobile }) — flyout listing ALL promo codes of a product
   Opened from the product-card promo designs ("Uvjeti", "Svi uvjeti", info icon …).
   Shows the full legal conditions of a coupon next to its %, € amount, code and copy button,
   so the customer always sees who the code is for before using it.
   data: { title, pct, save (number), price (number), code, cond, period, terms, mobile }
   Desktop: centred dialog over the page. Mobile: bottom sheet inside the phone frame
   ([data-bb-frame="mobile"]) when one is on screen — same mounting rule as cart-flyout.js. */
(function () {
  if (window.BBPromo) return;
  var G = '#0B7A48', GL = '#E6F5EC', INK = '#101117', MUT = '#545F71', NAVY = '#002D73';
  var st = { root: null };

  function el(tag, css, text) {
    var e = document.createElement(tag);
    if (css) e.style.cssText = css;
    if (text != null) e.textContent = text;
    return e;
  }
  function eur(n) {
    return Number(n || 0).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' €';
  }
  function host() { return document.querySelector('[data-bb-frame="mobile"]') || document.body; }
  function onKey(e) { if (e.key === 'Escape') close(); }
  function close() {
    if (st.root && st.root.parentNode) st.root.parentNode.removeChild(st.root);
    st.root = null;
    window.removeEventListener('keydown', onKey);
  }
  function css() {
    if (document.getElementById('bbpromo-css')) return;
    var s = el('style');
    s.id = 'bbpromo-css';
    s.textContent = '@keyframes bbp-up{from{transform:translateY(100%)}to{transform:none}}' +
      '@keyframes bbp-in{from{opacity:0;transform:translateY(8px) scale(.98)}to{opacity:1;transform:none}}' +
      '@keyframes bbp-side{from{transform:translateX(100%)}to{transform:none}}';
    document.head.appendChild(s);
  }
  // „Kopiraj kod ⧉” button → tap → „Kopirano ✓” (the code name is shown under it)
  var ICON_COPY = '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><rect x="9" y="9" width="12" height="12" rx="2"></rect><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1"></path></svg>';
  function copyBtn(code) {
    var b = el('button', 'flex-shrink:0;height:42px;padding:0 14px;border:none;border-radius:8px;background:' + G +
      ';color:#fff;font:700 15px/42px Inter,system-ui,sans-serif;cursor:pointer;white-space:nowrap;display:flex;align-items:center;justify-content:center;gap:8px');
    var idle = function () { b.innerHTML = ''; b.appendChild(el('span', '', 'Kopiraj kod')); b.insertAdjacentHTML('beforeend', ICON_COPY); };
    idle();
    b.type = 'button';
    b.title = 'Kopiraj promo kod ' + code;
    b.setAttribute('aria-label', 'Kopiraj promo kod ' + code);
    b.onclick = function (e) {
      e.preventDefault(); e.stopPropagation();
      var done = function () { b.textContent = 'Kopirano ✓'; clearTimeout(b._t); b._t = setTimeout(idle, 1800); };
      var fb = function () { var t = el('textarea', 'position:fixed;opacity:0'); t.value = code; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (_) {} t.remove(); done(); };
      try { navigator.clipboard ? navigator.clipboard.writeText(code).then(done, fb) : fb(); } catch (_) { fb(); }
    };
    return b;
  }

  function open(d) {
    close(); css();
    d = d || {};
    var mobile = !!d.mobile, inFrame = !!document.querySelector('[data-bb-frame="mobile"]');
    var overlay = el('div', 'position:' + (inFrame ? 'absolute' : 'fixed') + ';inset:0;z-index:9999;background:rgba(16,17,23,0.55);' +
      'display:flex;align-items:' + (mobile ? 'flex-end' : 'center') + ';justify-content:center;font-family:Inter,system-ui,sans-serif');
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'Uvjeti promo koda');
    overlay.onclick = function (e) { if (e.target === overlay) close(); };
    ['click', 'mousedown', 'touchstart'].forEach(function (t) { overlay.addEventListener(t, function (e) { e.stopPropagation(); }); });

    var panel = el('div', 'background:#fff;box-sizing:border-box;display:flex;flex-direction:column;max-height:' + (mobile ? '86%' : '86vh') + ';' +
      (mobile ? 'width:100%;border-radius:20px 20px 0 0;animation:bbp-up .26s cubic-bezier(.2,.7,.2,1);padding:18px 16px calc(16px + env(safe-area-inset-bottom,0px))'
              : 'width:480px;max-width:calc(100vw - 32px);border-radius:16px;box-shadow:0 24px 64px rgba(0,0,0,.25);animation:bbp-in .2s ease-out;padding:24px 28px 24px'));

    var head = el('div', 'display:flex;align-items:flex-start;gap:12px');
    head.appendChild(el('div', 'flex:1;min-width:0;font-size:' + (mobile ? 18 : 20) + 'px;font-weight:700;line-height:1.25;color:' + INK, d.title || 'Uvjeti promo koda'));
    var x = el('button', 'flex-shrink:0;width:' + (mobile ? 36 : 40) + 'px;height:' + (mobile ? 36 : 40) + 'px;margin:-6px -8px 0 0;border:none;border-radius:50%;background:#F2F3F5;color:' + INK +
      ';font-size:22px;line-height:' + (mobile ? 36 : 40) + 'px;cursor:pointer', '×');
    x.type = 'button'; x.setAttribute('aria-label', 'Zatvori'); x.onclick = close;
    head.appendChild(x);
    panel.appendChild(head);

    // deal box: solid green border; left = % chip + amount + „dodatno uz kod”, right = „Kopiraj kod” button with the code name under it
    var deal = el('div', 'flex-shrink:0;margin-top:' + (mobile ? 14 : 16) + 'px;border:1px solid ' + G + ';border-radius:10px;padding:' + (mobile ? '12px' : '14px 14px 14px 16px') +
      ';display:flex;align-items:center;gap:' + (mobile ? 10 : 14) + 'px');
    deal.appendChild(el('span', 'flex-shrink:0;height:' + (mobile ? 28 : 34) + 'px;padding:0 ' + (mobile ? 5 : 7) + 'px;border-radius:5px;background:' + G +
      ';color:#fff;font-size:' + (mobile ? 16 : 20) + 'px;font-weight:700;line-height:' + (mobile ? 28 : 34) + 'px', '-' + (d.pct || 0) + '%'));
    var mid = el('div', 'flex:1;min-width:0;display:flex;flex-direction:column');
    mid.appendChild(el('span', 'font-size:' + (mobile ? 17 : 20) + 'px;font-weight:700;line-height:' + (mobile ? 21 : 25) + 'px;color:#000;white-space:nowrap', '-' + eur(d.save)));
    mid.appendChild(el('span', 'font-size:' + (mobile ? 12 : 14) + 'px;line-height:18px;color:' + MUT, 'dodatno uz kod'));
    deal.appendChild(mid);
    var cp = el('div', 'flex-shrink:0;max-width:' + (mobile ? 128 : 150) + 'px;display:flex;flex-direction:column;align-items:stretch;gap:5px');
    cp.appendChild(copyBtn(d.code || ''));
    cp.appendChild(el('span', 'font-size:' + (mobile ? 11 : 12) + 'px;font-weight:700;line-height:15px;letter-spacing:.02em;text-align:center;color:' + MUT + ';overflow-wrap:anywhere', d.code || ''));
    deal.appendChild(cp);
    panel.appendChild(deal);

    // full legal terms in the green info box
    var body = el('div', 'margin-top:16px;overflow:auto;min-height:0');
    var info = el('div', 'display:flex;gap:10px;align-items:flex-start;padding:' + (mobile ? '12px' : '14px 16px') + ';border-radius:8px;background:' + GL);
    info.insertAdjacentHTML('beforeend', '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="' + G + '" stroke-width="2" stroke-linecap="round" style="flex-shrink:0;margin-top:2px"><circle cx="12" cy="12" r="9.5"></circle><path d="M12 11v6M12 7.5v.01"></path></svg>');
    info.appendChild(el('span', 'font-size:' + (mobile ? 14 : 15) + 'px;line-height:' + (mobile ? 21 : 22) + 'px;color:' + INK,
      d.terms || ((d.cond || 'Za ovaj promo kod vrijede posebni uvjeti') + (d.period ? ', ' + d.period : '') + '.')));
    body.appendChild(info);
    body.appendChild(el('p', 'margin:14px 0 0;font-size:' + (mobile ? 12 : 13) + 'px;line-height:19px;color:' + MUT,
      'Promo kod upiši u košarici u polje „Promo kod”. Popust se obračunava na cijenu proizvoda.'));
    panel.appendChild(body);

    var ok = el('button', 'margin-top:18px;flex-shrink:0;height:46px;border:1.5px solid ' + NAVY + ';border-radius:23px;background:#fff;color:' + NAVY +
      ';font:700 16px/43px Inter,system-ui,sans-serif;cursor:pointer', 'Razumijem');
    ok.type = 'button'; ok.onclick = close;
    panel.appendChild(ok);

    overlay.appendChild(panel);
    host().appendChild(overlay);
    st.root = overlay;
    window.addEventListener('keydown', onKey);
    x.focus();
  }

  // openAll — flyout with ALL promo codes of a product (desktop: right-side flyout like the PDP info flyouts;
  // mobile: bottom sheet in the phone frame). Each code: chip, € amount + „dodatno uz kod” in one row,
  // title, full terms (= the description), code + „Kopiraj kod”. Highest code first.
  // data: { codes: [{ pct, code, title, terms, cond, period }], price (number), cur (' €' | ' KM'), mobile }
  function openAll(d) {
    close(); css();
    d = d || {};
    var mobile = !!d.mobile, inFrame = !!document.querySelector('[data-bb-frame="mobile"]');
    var price = Number(d.price || 0), cur = d.cur || ' €';
    var money = function (n) { return Number(n || 0).toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + cur; };
    var codes = (d.codes || []).filter(function (c) { return c && c.pct > 0; }).slice().sort(function (a, b) { return b.pct - a.pct; });
    var overlay = el('div', 'position:' + (inFrame ? 'absolute' : 'fixed') + ';inset:0;z-index:9999;background:rgba(16,17,23,0.55);display:flex;' +
      (mobile ? 'align-items:flex-end;justify-content:center' : 'align-items:stretch;justify-content:flex-end') + ';font-family:Inter,system-ui,sans-serif');
    overlay.setAttribute('role', 'dialog'); overlay.setAttribute('aria-modal', 'true'); overlay.setAttribute('aria-label', 'Promo kodovi');
    overlay.onclick = function (e) { if (e.target === overlay) close(); };
    ['click', 'mousedown', 'touchstart'].forEach(function (t) { overlay.addEventListener(t, function (e) { e.stopPropagation(); }); });
    var panel = el('div', 'background:#fff;box-sizing:border-box;display:flex;flex-direction:column;' +
      (mobile ? 'width:100%;max-height:88%;border-radius:18px 18px 0 0;animation:bbp-up .26s cubic-bezier(.2,.7,.2,1);box-shadow:0 -12px 32px rgba(0,0,0,.25)'
              : 'width:540px;max-width:100vw;height:100%;animation:bbp-side .25s cubic-bezier(.2,.7,.2,1);box-shadow:-12px 0 40px rgba(0,0,0,.18)'));
    if (mobile) { var grip = el('div', 'display:flex;justify-content:center;padding:8px 0 4px'); grip.appendChild(el('span', 'width:38px;height:4px;border-radius:2px;background:#C8CCD4')); panel.appendChild(grip); }
    var head = el('div', 'flex-shrink:0;display:flex;align-items:center;gap:12px;border-bottom:1px solid #E3E4E9;padding:' + (mobile ? '10px 16px 14px' : '20px 28px 16px'));
    head.insertAdjacentHTML('beforeend', '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="' + INK + '" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0"><path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"></path><circle cx="7.5" cy="7.5" r="1.5"></circle></svg>');
    head.appendChild(el('h3', 'flex:1;min-width:0;margin:0;font-size:' + (mobile ? 16 : 20) + 'px;font-weight:700;letter-spacing:-0.02em;color:' + INK, 'Promo kodovi (' + codes.length + ')'));
    var x = el('button', 'flex-shrink:0;width:36px;height:36px;border:none;border-radius:50%;background:' + (mobile ? '#F2F3F5' : 'transparent') + ';color:' + INK + ';cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0');
    x.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    x.type = 'button'; x.setAttribute('aria-label', 'Zatvori'); x.onclick = close;
    head.appendChild(x);
    panel.appendChild(head);
    var body = el('div', 'flex:1;min-height:0;overflow-y:auto;display:flex;flex-direction:column;gap:10px;padding:' + (mobile ? '14px 16px calc(16px + env(safe-area-inset-bottom,0px))' : '24px 28px'));
    codes.forEach(function (c) {
      var card = el('div', 'border-radius:12px;padding:14px;background:#F7F8FA;display:flex;flex-direction:column;gap:10px');
      var top = el('div', 'display:flex;align-items:center;gap:10px');
      top.appendChild(el('span', 'flex-shrink:0;min-width:40px;height:26px;padding:0 6px;box-sizing:border-box;border-radius:4px;background:' + G + ';color:#fff;font-size:14px;font-weight:700;line-height:26px;text-align:center', '-' + c.pct + '%'));
      var amt = el('span', 'display:flex;align-items:baseline;gap:6px;flex-wrap:wrap;min-width:0');
      amt.appendChild(el('span', 'font-size:15px;font-weight:700;line-height:20px;color:#000;white-space:nowrap', '-' + money(price * c.pct / 100)));
      amt.appendChild(el('span', 'font-size:12px;line-height:16px;color:' + MUT + ';white-space:nowrap', 'dodatno uz kod'));
      top.appendChild(amt);
      card.appendChild(top);
      var txt = el('div', 'display:flex;flex-direction:column;gap:4px');
      txt.appendChild(el('div', 'font-size:14px;font-weight:700;line-height:1.35;color:' + INK, c.title || ('Dodatnih ' + c.pct + '% uz promo kod')));
      txt.appendChild(el('div', 'font-size:12px;line-height:1.55;color:' + MUT, c.terms || ((c.cond || 'Za ovaj promo kod vrijede posebni uvjeti') + (c.period ? ', ' + c.period : '') + '.')));
      card.appendChild(txt);
      var row = el('div', 'display:flex;align-items:center;gap:8px');
      row.appendChild(el('span', 'flex:1;min-width:0;height:40px;box-sizing:border-box;border:1px dashed ' + G + ';background:#fff;color:' + G + ';font-size:14px;font-weight:800;letter-spacing:.06em;border-radius:8px;display:flex;align-items:center;padding:0 12px', c.code || ''));
      var b = el('button', 'flex-shrink:0;height:40px;padding:0 16px;border-radius:20px;border:none;color:#fff;font:600 13px Inter,system-ui,sans-serif;cursor:pointer', 'Kopiraj kod');
      b.className = 'bbcta'; b.type = 'button';
      b.onclick = function (e) {
        e.preventDefault(); e.stopPropagation();
        var done = function () { b.textContent = 'Kopirano'; clearTimeout(b._t); b._t = setTimeout(function () { b.textContent = 'Kopiraj kod'; }, 1600); };
        var fb = function () { var t = el('textarea', 'position:fixed;opacity:0'); t.value = c.code || ''; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (_) {} t.remove(); done(); };
        try { navigator.clipboard ? navigator.clipboard.writeText(c.code || '').then(done, fb) : fb(); } catch (_) { fb(); }
      };
      row.appendChild(b);
      card.appendChild(row);
      body.appendChild(card);
    });
    body.appendChild(el('p', 'margin:4px 0 0;font-size:12px;line-height:18px;color:' + MUT, 'Promo kod upiši u košarici u polje „Promo kod”. Popust se obračunava na cijenu proizvoda; u košarici vrijedi jedan promo kod.'));
    panel.appendChild(body);
    overlay.appendChild(panel);
    host().appendChild(overlay);
    st.root = overlay;
    window.addEventListener('keydown', onKey);
    x.focus();
  }

  window.BBPromo = { open: open, openAll: openAll, close: close };
})();
