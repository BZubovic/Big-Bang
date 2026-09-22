/* Big Bang — producer-supplied data for the EU GARAN label.

   The EU GARAN label may only be shown when the PRODUCER offers a commercial
   guarantee of durability that is free of charge, covers the whole product and
   lasts MORE than two years. That information comes from the producer — it is
   never derived from our own warranty offers or scraped from spec sheets.

   Every entry here is PLACEHOLDER data standing in for a real producer feed:
       match      substring matched against the product name (model identifier)
       brand      producer brand / trademark, printed in the label
       model      model identifier, printed in the label (keep under ~12 chars —
                  the EU template's field is fixed width and must not be re-typeset)
       years      guarantee duration in whole years (or ,5 halves)
       statement  the producer's full commercial-guarantee statement

   window.BB_GARAN.forProduct(product) → garan object or null. */
(function () {
  var STATEMENTS = {
    Bosch: 'Robert Bosch d.o.o., Kneza Branimira 22, 10000 Zagreb. Jamstvo trajnosti pokriva cijeli proizvod i vrijedi od datuma kupnje. Zahtjev se podnosi putem bosch-home.hr/podrska ili na 0800 200 201; troškove popravka i zamjene dijelova pokriva proizvođač. Ovo komercijalno jamstvo ne utječe na vaša prava iz zakonskog jamstva usklađenosti.',
    Gorenje: 'Gorenje d.o.o., Ulica grada Vukovara 269g, 10000 Zagreb. Jamstvo trajnosti pokriva cijeli proizvod, bez dodatnih troškova za potrošača. Zahtjev se podnosi u ovlaštenom servisu ili putem gorenje.hr/servis. Ovo komercijalno jamstvo ne utječe na vaša prava iz zakonskog jamstva usklađenosti.',
    Hisense: 'Hisense Europe B.V., podružnica Zagreb, Radnička cesta 80, 10000 Zagreb. Jamstvo trajnosti pokriva cijeli uređaj uključujući kompresor. Zahtjev se podnosi na hisense.hr/podrska. Ovo komercijalno jamstvo ne utječe na vaša prava iz zakonskog jamstva usklađenosti.',
    Philips: 'Versuni Croatia d.o.o., Avenija Dubrovnik 16, 10020 Zagreb. Jamstvo trajnosti pokriva cijeli proizvod i sve funkcionalne dijelove. Registracija nije potrebna; zahtjev se podnosi na philips.hr/podrska. Ovo komercijalno jamstvo ne utječe na vaša prava iz zakonskog jamstva usklađenosti.',
    Sony: 'Sony Europe B.V., predstavništvo Zagreb, Heinzelova 33, 10000 Zagreb. Jamstvo trajnosti pokriva cijeli televizor, uključujući panel i pozadinsko osvjetljenje. Zahtjev se podnosi na sony.hr/podrska. Ovo komercijalno jamstvo ne utječe na vaša prava iz zakonskog jamstva usklađenosti.',
    LG: 'LG Electronics Magyar Kft., podružnica Zagreb, Slavonska avenija 6, 10000 Zagreb. Jamstvo trajnosti pokriva cijeli televizor; panel i ploča napajanja uključeni su bez dodatnih troškova. Zahtjev se podnosi na lg.com/hr/podrska. Ovo komercijalno jamstvo ne utječe na vaša prava iz zakonskog jamstva usklađenosti.',
    Samsung: 'Samsung Electronics Austria GmbH, podružnica Zagreb, Zagrebtower, Radnička cesta 80, 10000 Zagreb. Jamstvo trajnosti pokriva cijeli proizvod. Zahtjev se podnosi na samsung.com/hr/support. Ovo komercijalno jamstvo ne utječe na vaša prava iz zakonskog jamstva usklađenosti.',
    Nutribullet: 'Capital Brands Distribution LLC, zastupnik za EU: Nutribullet Europe, Amsterdam. Jamstvo trajnosti pokriva motornu jedinicu cijelog aparata. Zahtjev se podnosi na nutribullet.eu/podrska. Ovo komercijalno jamstvo ne utječe na vaša prava iz zakonskog jamstva usklađenosti.',
    Asus: 'ASUSTeK Computer Inc., zastupnik za Hrvatsku: Asbis d.o.o., Slavonska avenija 24/6, 10000 Zagreb. Jamstvo trajnosti pokriva cijeli uređaj uključujući bateriju. Zahtjev se podnosi na asus.com/hr/support. Ovo komercijalno jamstvo ne utječe na vaša prava iz zakonskog jamstva usklađenosti.'
  };

  var MODELS = [
    { match: 'WAN24266BY',  brand: 'Bosch',       model: 'WAN24266BY', years: 5 },
    { match: 'WNHPI84AS',   brand: 'Gorenje',     model: 'WNHPI84AS',  years: 4 },
    { match: 'CA35LR03G',   brand: 'Hisense',     model: 'CA35LR03G',  years: 5 },
    { match: 'HS7980/15',   brand: 'Philips',     model: 'HS7980/15',  years: 3 },
    { match: 'XV5113/01',   brand: 'Philips',     model: 'XV5113/01',  years: 3 },
    { match: 'NB907CP',     brand: 'Nutribullet', model: 'NB907CP',    years: 10 },
    { match: 'K-85XR55BP',  brand: 'Sony',        model: 'K85XR55BP',  years: 3 },
    { match: 'K-75XR55BP',  brand: 'Sony',        model: 'K75XR55BP',  years: 3 },
    { match: 'K98XR55BP',   brand: 'Sony',        model: 'K98XR55BP',  years: 3 },
    { match: 'OLED65C45LA', brand: 'LG',          model: 'OLED65C45',  years: 5 },
    { match: 'QE65QN990',   brand: 'Samsung',     model: 'QE65QN990',  years: 3 },
    { match: 'QE75LS03',    brand: 'Samsung',     model: 'QE75LS03',   years: 3 },
    { match: 'UX3405CA',    brand: 'Asus',        model: 'UX3405CA',   years: 3 },
    { match: 'Galaxy S24',  brand: 'Samsung',     model: 'SM-S926B',   years: 4 }
  ];

  function build(e) {
    return { years: e.years, brand: e.brand, model: e.model, statement: STATEMENTS[e.brand] || '' };
  }

  window.BB_GARAN = {
    statements: STATEMENTS,
    models: MODELS,
    forProduct: function (p) {
      if (!p) return null;
      if (p.garan) return p.garan;
      var name = String(p.name || '');
      for (var i = 0; i < MODELS.length; i++) {
        if (name.indexOf(MODELS[i].match) > -1) return build(MODELS[i]);
      }
      return null;
    }
  };
})();
