/* Category → product pool for the category / search / brand listing (window.BBCatProducts).
   Products in a listing always belong to the clicked category. Images marked cat-* are
   category stand-ins until real product shots are supplied. */
(function () {
  var I = 'images/';
  var G = [
    { key: 'tv', match: /televizor|tv i audio|^tv$|ostali tv/i, items: [
      ['cat-televizori.webp', 'TV SAMSUNG QE55Q80DATXXH, 138.8cm (55"), QLED, 4K UHD Smart TV, Tizen OS', '799,00 €', '1.199,00 €'],
      ['cat-televizori.webp', 'TV LG OLED65C45LA, 164cm (65"), OLED evo, 4K UHD Smart TV, webOS', '1.299,00 €', '1.799,00 €'],
      ['cat-televizori.webp', 'TV HISENSE 65U7NQ, 164cm (65"), QLED, 4K UHD Smart TV, VIDAA OS', '549,00 €', '749,00 €'],
      ['cat-televizori.webp', 'TV SONY K65XR55B.CEI, 165.1cm (65"), Mini LED, 4K UHD Smart TV, Android TV', '1.099,99 €', '1.499,99 €'],
      ['cat-televizori.webp', 'TV TCL 55C6K, 139.9cm (55"), QD-Mini LED, 4K UHD Smart TV, Google TV', '499,99 €', ''],
      ['cat-televizori.webp', 'TV PHILIPS 75PUS8909/12, 189cm (75"), 4K UHD LED, Smart TV, Ambilight', '899,00 €', '1.199,00 €'],
      ['cat-televizori.webp', 'TV LG 55NANO81T6A, 139cm (55"), NanoCell, 4K UHD Smart TV, webOS', '449,00 €', '599,00 €'],
      ['cat-televizori.webp', 'TV SAMSUNG UE43DU7172UXXH, 108cm (43"), Crystal UHD, 4K Smart TV', '299,00 €', '379,00 €']
    ] },
    { key: 'phones', match: /mobitel|mobilni|pametni telefon|smartphone/i, items: [
      ['prod-samsung-s24.webp', 'Mobitel Samsung Galaxy S24+ 5G 12GB/256GB dual SIM', '999,00 €', '1.199,00 €'],
      ['prod-samsung-a16.webp', 'Mobitel Samsung Galaxy A16 4GB/128GB dual SIM', '179,00 €', '219,00 €'],
      ['cat-mobiteli.webp', 'Mobitel Apple iPhone 16 128GB plavi', '969,00 €', ''],
      ['prod-samsung-s24.webp', 'Mobitel Samsung Galaxy S24 5G 8GB/256GB dual SIM', '799,00 €', '949,00 €'],
      ['prod-samsung-a16.webp', 'Mobitel Samsung Galaxy A54 5G 8GB/128GB dual SIM', '329,00 €', '399,00 €'],
      ['cat-mobiteli.webp', 'Mobitel Xiaomi Redmi Note 14 Pro 8GB/256GB', '349,00 €', '399,00 €']
    ] },
    { key: 'watches', match: /sat(ovi)?\b|pametni sat|narukvic|wearable/i, items: [
      ['prod-huawei-watch.webp', 'Pametni sat Huawei Watch GT 5 46mm crni', '249,00 €', '299,00 €'],
      ['cat-pametni-satovi.webp', 'Pametni sat Samsung Galaxy Watch7 44mm', '299,00 €', '349,00 €'],
      ['prod-huawei-watch.webp', 'Pametni sat Huawei Watch Fit 3 bijeli', '149,00 €', ''],
      ['cat-pametni-satovi.webp', 'Pametni sat Xiaomi Redmi Watch 5 Active', '49,99 €', '59,99 €']
    ] },
    { key: 'laptops', match: /laptop|prijenosn[ao] računal|notebook/i, items: [
      ['prod-laptop-lenovo-yoga7.webp', 'Laptop LENOVO Yoga 7 2-in-1, 14" OLED, Ryzen 7, 16GB, 1TB SSD', '1.099,00 €', '1.299,00 €'],
      ['prod-laptop-hp-omnibook7.webp', 'Laptop HP OmniBook 7, 16" 2K, Core Ultra 7, 16GB, 1TB SSD', '1.199,00 €', '1.399,00 €'],
      ['prod-laptop-asus-tuf.webp', 'Laptop ASUS TUF Gaming F15, 15.6" 144Hz, i7, RTX 4060, 16GB', '1.149,00 €', '1.349,00 €'],
      ['prod-laptop-acer-aspire-lite1.webp', 'Laptop ACER Aspire Lite 15, 15.6" FHD, i5, 16GB, 512GB SSD', '529,00 €', '629,00 €'],
      ['prod-laptop-lenovo-legion5.webp', 'Laptop LENOVO Legion 5, 16" WQXGA 165Hz, i7, RTX 4070, 32GB', '1.699,00 €', '1.899,00 €'],
      ['prod-laptop-hp-victus.webp', 'Laptop HP Victus 15, 15.6" 144Hz, Ryzen 5, RTX 3050, 16GB', '749,00 €', '899,00 €'],
      ['prod-laptop-lenovo-slim5.webp', 'Laptop LENOVO IdeaPad Slim 5, 14" OLED, Ryzen 7, 16GB, 1TB SSD', '799,00 €', ''],
      ['prod-laptop-hp-omnibook5-flip.webp', 'Laptop HP OmniBook 5 Flip, 14" OLED touch, Core 7, 16GB', '899,00 €', '1.049,00 €'],
      ['prod-laptop-lenovo-ideapad-slim3.webp', 'Laptop LENOVO IdeaPad Slim 3, 15.6" FHD, i5, 8GB, 512GB SSD', '479,00 €', '549,00 €'],
      ['prod-laptop-hp-omnibook5-16.webp', 'Laptop HP OmniBook 5, 16" FHD+, Ryzen 5, 16GB, 512GB SSD', '649,00 €', '749,00 €'],
      ['prod-laptop-acer-aspire-lite2.webp', 'Laptop ACER Aspire Lite 14, 14" WUXGA, i3, 8GB, 512GB SSD', '399,00 €', ''],
      ['prod-laptop-hp-omnibook5-ai.webp', 'Laptop HP OmniBook 5 AI, 14" OLED, Snapdragon X, 16GB', '949,00 €', '1.099,00 €']
    ] },
    { key: 'pc', match: /stolna računal|all-in-one|gaming računal|računala i monitori|računala i it/i, items: [
      ['prod-gaming-pc.webp', 'Gaming računalo FlexStrike Ryzen 7, RTX 4070, 32GB, 1TB SSD', '1.599,00 €', '1.799,00 €'],
      ['cat-stolna-racunala.webp', 'Stolno računalo HP Pro Tower 290, i5, 16GB, 512GB SSD', '649,00 €', '729,00 €'],
      ['prod-gaming-pc.webp', 'Gaming računalo FlexStrike i5, RTX 4060, 16GB, 1TB SSD', '1.099,00 €', '1.249,00 €'],
      ['cat-stolna-racunala.webp', 'Stolno računalo Lenovo IdeaCentre 3, Ryzen 5, 16GB, 512GB', '579,00 €', '']
    ] },
    { key: 'washers', match: /perilic[ae] rublja|perilice i sušilice|sušilic|pranje i sušenje/i, items: [
      ['l3-perilica-samsung.png', 'Perilica rublja Samsung WW90T534DAW 9kg bijela', '549,00 €', '699,00 €'],
      ['prod-gorenje-perilica.webp', 'Perilica rublja GORENJE WG2P94A22W 9kg, 1400 o/min', '519,99 €', '919,00 €'],
      ['prod-bosch-perilica.webp', 'Perilica rublja BOSCH WGG244Z0BY Serie 6, 9kg', '699,00 €', '849,00 €'],
      ['cat-perilice.webp', 'Perilica-sušilica rublja LG F4DR509S0W 9/6kg', '749,00 €', '899,00 €'],
      ['prod-gorenje-perilica.webp', 'Sušilica rublja GORENJE DNE83/GN 8kg toplinska pumpa', '459,00 €', '549,00 €'],
      ['prod-bosch-perilica.webp', 'Perilica rublja BOSCH WAN28282BY Serie 4, 8kg', '479,00 €', '']
    ] },
    { key: 'dish', match: /pranje posuđa|perilic[ae] posuđa|sudoper|slavin/i, items: [
      ['cat-pranje-posuda.webp', 'Perilica posuđa BOSCH SMV4HVX00E ugradbena, 13 kompleta', '549,00 €', '649,00 €'],
      ['cat-pranje-posuda.webp', 'Perilica posuđa GORENJE GV642C60 ugradbena, 14 kompleta', '449,00 €', '529,00 €'],
      ['cat-pranje-posuda.webp', 'Perilica posuđa SAMSUNG DW60A6082FW samostojeća', '499,00 €', ''],
      ['cat-pranje-posuda.webp', 'Perilica posuđa BEKO BDFN26430X samostojeća inox', '429,00 €', '499,00 €']
    ] },
    { key: 'fridges', match: /hladnja(k|ci)(?! za vino)|zamrziva|vinsk|ledenic/i, items: [
      ['l3-hladnjak-samsung.png', 'Hladnjak Samsung RF65A967EB1 Family Hub crni', '2.499,00 €', '2.999,00 €'],
      ['cat-hladnjaci.webp', 'Hladnjak LG GSXV90MCAE side-by-side, InstaView', '1.899,00 €', '2.299,00 €'],
      ['l3-hladnjak-samsung.png', 'Hladnjak Samsung RB38C776CS9 kombinirani, 390 L', '899,00 €', '1.049,00 €'],
      ['cat-hladnjaci.webp', 'Hladnjak GORENJE NRK6202EXL4 kombinirani, No Frost', '599,00 €', '699,00 €'],
      ['cat-hladnjaci.webp', 'Zamrzivač BEKO RFNE290L41WN vertikalni, 250 L', '499,00 €', ''],
      ['l3-hladnjak-samsung.png', 'Hladnjak Samsung RS68A8840B1 side-by-side', '1.299,00 €', '1.499,00 €']
    ] },
    { key: 'ovens', match: /pećnic|mikroval/i, items: [
      ['cat-pecnice.webp', 'Pećnica BOSCH HBA534BB3 ugradbena, 71 L, crna', '449,00 €', '549,00 €'],
      ['cat-pecnice.webp', 'Pećnica GORENJE BOS6737E06B ugradbena, parna', '499,00 €', '599,00 €'],
      ['cat-pecnice.webp', 'Mikrovalna pećnica SAMSUNG MS23K3513AK 23 L', '129,00 €', '159,00 €'],
      ['cat-pecnice.webp', 'Pećnica ELECTROLUX EOF3H50BK SurroundCook', '379,00 €', '']
    ] },
    { key: 'hobs', match: /ploč[ae] za kuhanje|ploče za kuhanje|nap[ae]\b|štednja|setovi ploča|kuhanje/i, items: [
      ['l3-ploca-indukcija.png', 'Indukcijska ploča za kuhanje ugradbena crna, 60 cm', '399,00 €', '499,00 €'],
      ['cat-ploce-kuhanje.webp', 'Ploča za kuhanje BOSCH PUE611BB5E indukcijska', '349,00 €', '429,00 €'],
      ['l3-ploca-indukcija.png', 'Ploča s ugradbenom napom ELECTROLUX KCC83443', '1.199,00 €', '1.399,00 €'],
      ['cat-ploce-kuhanje.webp', 'Štednjak GORENJE GEC6C40WD keramički, bijeli', '429,00 €', ''],
      ['cat-ploce-kuhanje.webp', 'Napa GORENJE WHI649EXBG zidna, 60 cm', '249,00 €', '299,00 €']
    ] },
    { key: 'clima', match: /klim|grijanje i hlađenje|toplinsk/i, items: [
      ['prod-hisense-klima.webp', 'Klima uređaj HISENSE Energy Pro 3,5 kW, inverter, Wi-Fi', '699,00 €', '849,00 €'],
      ['cat-klima.webp', 'Klima uređaj GREE Pular 2,6 kW, inverter', '549,00 €', '649,00 €'],
      ['prod-hisense-klima.webp', 'Klima uređaj HISENSE Silentium Pro 5,0 kW', '999,00 €', '1.199,00 €'],
      ['cat-klima.webp', 'Klima uređaj SAMSUNG WindFree Comfort 3,5 kW', '899,00 €', '']
    ] },
    { key: 'audio', match: /audio|slušalic|zvučni|soundbar|hi-fi|kućna kina|gramofon|radio/i, items: [
      ['cat-audio.webp', 'Slušalice SONY WH-1000XM5 bežične, ANC, crne', '299,00 €', '399,00 €'],
      ['cat-audio.webp', 'Prijenosni zvučnik JBL Flip 6 crni', '109,00 €', '139,00 €'],
      ['cat-audio.webp', 'Soundbar SAMSUNG HW-Q700D 3.1.2, Dolby Atmos', '449,00 €', '599,00 €'],
      ['cat-audio.webp', 'Slušalice APPLE AirPods Pro 2 USB-C', '249,00 €', '']
    ] },
    { key: 'small', match: /mali kućanski|aparat za kavu|kav[ae]|blender|mikser|usisav|mop|glačal|kuhinjski aparat/i, items: [
      ['prod-krups-kava.webp', 'Aparat za kavu KRUPS Evidence EA8950 automatski', '599,00 €', '749,00 €'],
      ['prod-nutribullet.webp', 'Blender NUTRIBULLET Pro 900 W', '89,99 €', '109,99 €'],
      ['prod-philips-mop.webp', 'Usisavač PHILIPS AquaTrio 7000 mokro-suho', '449,00 €', '549,00 €'],
      ['cat-mali-aparati.webp', 'Aparat za kavu PHILIPS EP2231/40 LatteGo', '379,00 €', ''],
      ['prod-krups-kava.webp', 'Aparat za kavu KRUPS Nescafé Dolce Gusto Infinissima', '79,99 €', '99,99 €'],
      ['cat-mali-aparati.webp', 'Štapni mikser BRAUN MultiQuick 7', '89,00 €', '109,00 €']
    ] },
    { key: 'care', match: /osobn[ae] njeg|brija|fen|četkic|depil|uljepšav/i, items: [
      ['prod-philips-brijac.webp', 'Brijač PHILIPS Series 7000 S7887/55 mokro-suho', '149,00 €', '199,00 €'],
      ['cat-osobna-njega.webp', 'Sušilo za kosu DYSON Supersonic HD07', '449,00 €', ''],
      ['prod-philips-brijac.webp', 'Brijač PHILIPS OneBlade Pro 360', '69,99 €', '89,99 €'],
      ['cat-osobna-njega.webp', 'Električna četkica ORAL-B iO Series 7', '149,00 €', '219,00 €']
    ] },
    { key: 'gaming', match: /gaming|konzol|playstation|xbox|nintendo|igr/i, items: [
      ['cat-gaming.webp', 'Konzola SONY PlayStation 5 Slim Digital', '449,00 €', '499,00 €'],
      ['cat-gaming.webp', 'Kontroler SONY DualSense bijeli', '69,99 €', ''],
      ['prod-gaming-pc.webp', 'Gaming računalo FlexStrike Ryzen 7, RTX 4070, 32GB', '1.599,00 €', '1.799,00 €'],
      ['cat-gaming.webp', 'Konzola Nintendo Switch OLED bijela', '329,00 €', '349,00 €']
    ] },
    { key: 'cams', match: /kamer|fotoapar|dron/i, items: [
      ['cat-kamere.webp', 'Akcijska kamera GoPro HERO13 Black', '429,00 €', '479,00 €'],
      ['cat-kamere.webp', 'Akcijska kamera DJI Osmo Action 5 Pro', '379,00 €', ''],
      ['cat-kamere.webp', 'Akcijska kamera Insta360 X4', '499,00 €', '549,00 €']
    ] },
    { key: 'white', match: /bijela tehnika|ugradbena tehnika/i, mix: ['washers', 'fridges', 'hobs', 'ovens', 'dish', 'clima'] },
    { key: 'mobile', match: /mobiteli i|mobiteli,|telefonija/i, mix: ['phones', 'watches'] },
    { key: 'it', match: /računala|it oprema/i, mix: ['laptops', 'pc'] }
  ];
  var byKey = {}; G.forEach(function (g) { byKey[g.key] = g; });
  var toP = function (r) { return { img: I + r[0], name: r[1], price: r[2], old: r[3] || '' }; };
  var poolOf = function (g) {
    if (g.items) return g.items.map(toP);
    var lists = g.mix.map(function (k) { return byKey[k].items.map(toP); }), out = [], n = 0;
    while (out.length < 24 && n < 24) { lists.forEach(function (l) { if (l[n]) out.push(l[n]); }); n++; }
    return out;
  };
  var ALL = (function () { var o = []; G.forEach(function (g) { if (g.items) o = o.concat(g.items.map(toP)); }); return o; })();
  var findGroup = function (label) {
    label = String(label || ''); if (!label) return null;
    for (var i = 0; i < G.length; i++) if (G[i].items && G[i].match.test(label)) return G[i];
    for (var j = 0; j < G.length; j++) if (G[j].mix && G[j].match.test(label)) return G[j];
    return null;
  };
  // price-display mode per category: sale | refurb | code | regular | all
  var MODES = [
    [/laptop/i, 'refurb'],
    [/mobitel|pametni telefon|smartphone/i, 'code'],
    [/pametni sat|satovi/i, 'regular'],
    [/hladnja|zamrziv/i, 'sale'],
    [/televizor/i, 'all']
  ];
  var modeFor = function (cat) {
    cat = cat || {};
    if (/računal|komponent|it oprema/i.test([cat.l1, cat.l2].join(' ')) && !/laptop/i.test(String(cat.l3 || ''))) return 'all';
    var labels = [cat.l3, cat.l2, cat.l1];
    for (var i = 0; i < labels.length; i++) { var l = String(labels[i] || ''); if (!l) continue; for (var k = 0; k < MODES.length; k++) if (MODES[k][0].test(l)) return MODES[k][1]; }
    return 'all';
  };
  // "Dostupno još N opcija" only for TVs, phones and smart watches
  var OPT = /televizor|^tv\b|mobitel|mobilni|pametni telefon|smartphone|iphone|galaxy [asz]\d|redmi|pametni sat|satovi|smartwatch|watch/i;
  window.BBCatProducts = {
    modeFor: modeFor,
    optionsAllowed: function (name) { return OPT.test(String(name || '')); },
    forCat: function (cat) {
      cat = cat || {};
      var parent = [cat.l1, cat.l2].join(' ');
      if (/računal|komponent|it oprema/i.test(parent) && !/laptop|stolna|gaming|all-in-one/i.test(String(cat.l3 || ''))) return poolOf(byKey.it);
      var labels = [cat.l3, cat.l2, cat.l1, cat.name, cat.title];
      for (var i = 0; i < labels.length; i++) { var g = findGroup(labels[i]); if (g) return poolOf(g); }
      return null;
    },
    forSearch: function (q) {
      q = String(q || '').toLowerCase().trim(); if (!q) return null;
      var g = findGroup(q); if (g) return poolOf(g);
      var words = q.split(/\s+/);
      var hits = ALL.filter(function (p) { var n = p.name.toLowerCase(); return words.every(function (w) { return n.indexOf(w) > -1; }); });
      return hits.length ? hits : null;
    },
    forBrand: function (b) {
      b = String(b || '').toLowerCase().trim(); if (!b) return null;
      var hits = ALL.filter(function (p) { return p.name.toLowerCase().indexOf(b) > -1; });
      return hits.length ? hits : null;
    }
  };
})();
