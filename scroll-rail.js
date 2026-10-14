/* Global horizontal-scroll behaviour:
   1. Scroll indicators — a [data-thumb] inside a rail slides with the nearest horizontal
      track (no React state, so no re-render while scrolling).
   2. Mouse drag on every horizontally scrollable container (carousels, chip rows, sliders). */
(function () {
  if (window.BBScrollRail) return;
  window.BBScrollRail = true;

  function isHScroll(el) {
    if (!el || el.nodeType !== 1 || el.scrollWidth <= el.clientWidth + 1) return false;
    var ox = getComputedStyle(el).overflowX;
    return ox === 'auto' || ox === 'scroll';
  }
  function thumbFor(track) {
    if (track.__bbThumb && track.__bbThumb.isConnected) return track.__bbThumb;
    // The rail must be a later sibling of the track (or inside one), before any other scroller.
    for (var sib = track.nextElementSibling; sib; sib = sib.nextElementSibling) {
      var t = sib.matches('[data-thumb]') ? sib : sib.querySelector('[data-thumb]');
      if (t) { track.__bbThumb = t; return t; }
      if (isHScroll(sib) || sib.querySelector('.nsb,[style*="overflow-x"]')) break;
    }
    track.__bbThumb = null;
    return null;
  }
  var pending = new Set(), raf = 0;
  function paint() {
    raf = 0;
    pending.forEach(function (track) {
      var t = thumbFor(track); if (!t) return;
      var span = track.scrollWidth - track.clientWidth;
      var frac = span > 0 ? Math.min(1, Math.max(0, track.scrollLeft / span)) : 0;
      var free = t.parentElement.clientWidth - t.offsetWidth;
      t.style.transform = 'translate3d(' + (frac * free) + 'px,0,0)';
    });
    pending.clear();
  }
  document.addEventListener('scroll', function (e) {
    var el = e.target;
    if (!el || el.nodeType !== 1 || el.scrollWidth <= el.clientWidth) return;
    pending.add(el);
    if (!raf) raf = requestAnimationFrame(paint);
  }, true);

  var drag = null, suppressClick = false;
  document.addEventListener('mousedown', function (e) {
    if (e.button !== 0) return;
    if (e.target.closest('input,textarea,select,[contenteditable],[data-nodrag]')) return;
    var el = e.target;
    while (el && el !== document.body && !isHScroll(el)) el = el.parentElement;
    if (!el || el === document.body) return;
    drag = { el: el, x: e.clientX, left: el.scrollLeft, moved: false };
  }, true);
  document.addEventListener('mousemove', function (e) {
    if (!drag) return;
    var dx = e.clientX - drag.x;
    if (!drag.moved) {
      if (Math.abs(dx) < 5) return;
      drag.moved = true;
      drag.sb = drag.el.style.scrollBehavior; drag.ss = drag.el.style.scrollSnapType;
      drag.el.style.scrollBehavior = 'auto'; drag.el.style.scrollSnapType = 'none';
      document.body.style.userSelect = 'none';
    }
    e.preventDefault();
    drag.el.scrollLeft = drag.left - dx;
  }, true);
  function end() {
    if (!drag) return;
    if (drag.moved) {
      drag.el.style.scrollBehavior = drag.sb || ''; drag.el.style.scrollSnapType = drag.ss || '';
      document.body.style.userSelect = '';
      suppressClick = true; setTimeout(function () { suppressClick = false; }, 0);
    }
    drag = null;
  }
  document.addEventListener('mouseup', end, true);
  window.addEventListener('blur', end);
  document.addEventListener('click', function (e) {
    if (suppressClick) { e.preventDefault(); e.stopPropagation(); suppressClick = false; }
  }, true);
  document.addEventListener('dragstart', function (e) {
    var el = e.target.nodeType === 1 ? e.target : e.target.parentElement;
    while (el && el !== document.body) { if (isHScroll(el)) { e.preventDefault(); return; } el = el.parentElement; }
  }, true);
})();
