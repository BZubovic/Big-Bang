/* Prototype change log — one entry per piece of work, not per prompt.
   Shown in the "Prototype settings" panel via "View logs". */
window.BB_CHANGELOG = [
  {
    date: '23.09.2026.',
    title: 'Nova kartica proizvoda na cijelom webshopu',
    changes: [
      'Nova kartica proizvoda u karuselima i na kategorijskoj stranici (desktop i mobitel).',
      'Povrat novca i naljepnica jamstva gore lijevo, spremanje i usporedba gore desno.',
      'Energetski razred i oznake (Sponzorirano, popust, UAU Klub, Obnovljeno) slažu se od dna slike prema gore.',
      'Fiksni raspored: kad ocjena ili promo kod nedostaju, njihovo mjesto ostaje prazno pa su kartice u redu poravnate.',
      'Rate u plavom okviru, promo kod u zelenom okviru s cijenom uz kod, sidrena cijena (MPC) uvijek na dnu kartice.',
      'Mobilna mreža kategorije: 2 stupca s razmakom 8 px.',
      'Uklonjen stari prekidač "Kartica proizvoda" iz postavki prototipa.',
      'Nove ikone za rate i promo kod; okvir promo koda ima isprekidani rub.',
      'Decimale glavne cijene iste su veličine kao cijena, podignute u eksponent.',
      'Kad naslov stane u jedan red, ocjena, dostupnost i prodavatelj pomiču se gore; cjenovni dio i MPC ostaju uz dno kartice.',
      '"Dostupno za 2 – 3 radna dana" zeleno kao "Na zalihi"; "Nije na zalihi" sivim tekstom uz crvenu točku.',
      'Dvoredni slider na naslovnici koristi isti okvir promo koda.',
    ],
  },
  {
    date: '22.09.2026.',
    title: 'Sidrena cijena (MPC na) premještena ispod oznake promo koda',
    changes: [
      'Na svim karticama proizvoda sidrena cijena ("MPC na …") sada stoji kao zadnji red cjenovnog bloka — ispod zelene oznake promo koda, a ne iznad nje.',
      'Promjena je primijenjena na karusele proizvoda, naslovnicu, kategorijsku stranicu (mreža i lista, desktop i mobitel) te popis želja.',
      'Primjeri kartica i pravilo u dizajn sustavu ažurirani su u skladu s time.',
    ],
  },
  {
    date: '22.09.2026.',
    title: 'Pretraga — pozadina, dvobojni prijedlozi i cijeli zaslon na mobitelu',
    changes: [
      'Otvaranjem pretrage sadržaj iza panela zatamnjuje se poluprozirnom pozadinom, pa je fokus na rezultatima.',
      'U prijedlozima je upisani dio riječi sive, obične težine, a predloženi nastavak tamniji i podebljaniji — odmah se vidi što se dopisuje.',
      'Red "Prikaži sve rezultate" dobio je blago plavu podlogu i odvojen je linijom od rezultata.',
      'Na mobitelu se pretraga otvara preko cijelog zaslona; popis se skrola, a "Prikaži sve rezultate" ostaje prikvačen na dnu.'
    ]
  },
  {
    date: '18.09.2026.',
    title: 'EU obavijest o zakonskom jamstvu i oznaka EU GARAN',
    changes: [
      'Prema Provedbenoj uredbi (EU) 2025/1960, od 27.09.2026. na webshopu se prikazuju dva službena EU elementa: obavijest o zakonskom jamstvu usklađenosti i oznaka EU GARAN za proizvođačevo jamstvo trajnosti.',
      'Obavijest o zakonskom jamstvu otvara se klikom s poveznice "Vaša prava na zakonsko jamstvo" u stupcu "Usluge i uvjeti" u podnožju i uz copyright u dnu podnožja (sa službenim EU amblemom jamstva), iznad "Učitaj još" na listingu, u kupovnoj kutiji na stranici proizvoda, te u košarici prije nastavka na naručivanje.',
      'Uz obavijest uvijek stoji klikabilna poveznica na europa.eu/youreurope/jamstva_hr — isto odredište kao QR kod u obavijesti.',
      'Nova stranica "Vaša prava na zakonsko jamstvo" (stupac "Usluge i uvjeti"): puna obavijest, kako ostvariti pravo u četiri koraka, objašnjenje oznake EU GARAN i usporedba zakonskog jamstva, jamstva proizvođača i Big Bang produženog jamstva.',
      'Skraćena oznaka EU GARAN prikazuje se u kupovnoj kutiji na stranici proizvoda; klikom se otvara puna oznaka s podacima proizvođača i njegovom izjavom o jamstvu.',
      'Oznaka se prikazuje samo kada proizvođačevo jamstvo trajnosti ispunjava sva tri uvjeta: bez dodatnog troška, za cijeli proizvod i dulje od dvije godine.',
      'Novi filter "Jamstvo proizvođača" na listingu s opcijom "Dulje od 2 godine (EU GARAN)".',
      'Big Bang produženo jamstvo preimenovano je i preformulirano tako da se ne može zamijeniti s jamstvom proizvođača — jasno je označeno kao usluga koja se dokupljuje.',
      'Dizajn sustav dobio je poglavlje "EU regulatorni elementi" s pravilima korištenja: službene datoteke u izvornom obliku, bez prebojavanja u brand boje, bez obrezivanja i bez promjene QR koda.'
    ]
  },
  {
    date: '16.09.2026.',
    title: 'Sidrena cijena na svim prikazima proizvoda',
    changes: [
      'Prema odluci o izvanrednim mjerama nadzora cijena, od 1.10.2026. uz aktualnu cijenu prikazuje se i redovna cijena na referentni dan 10.09.2026.',
      'Sidrena cijena dodana je na sve kartice proizvoda: karusel na naslovnici i ostalim stranicama, kategorijska stranica (mreža i lista), popis želja te primjeri u dizajn sustavu.',
      'Dodana je i na stranicu proizvoda (glavna kupovna kutija, ponude prodavatelja, mobilni prikaz) te u flyout "Dodano u košaricu" i cross-sell kartice.',
      'Format prikaza: "MPC na 10.09.2026. 1.099,00 €" — sitni sivi tekst ispod cijene rate, nikad precrtan.',
      'Cijena na rate na karticama proizvoda sada koristi isti prikaz kao stranica proizvoda: svjetloplava traka s ikonom kartice i tekstom "ili 12 × 74,92 €".',
      'Pravilo je zapisano u dizajn sustavu, uz napomenu da precrtana cijena ostaje rezervirana za najnižu cijenu u 30 dana.'
    ]
  },
  {
    date: '16.09.2026.',
    title: 'Dodana stranica "Kontakt" i widget prodajnih mjesta',
    changes: [
      'Blok podrške (tamna traka s telefonom i e-mailom) postao je globalna komponenta i koristi se na svim informativnim stranicama.',
      'Na stranici "Kontakt" blok podrške premješten je na dno stranice, ispod karte i podataka o društvu.',
      'U widgetu prodajnih mjesta lista poslovnica ima scrollbar s lijeve strane, a pretraga je uklonjena.',
      'Ispod svake poslovnice dodan je link "Prikaži trgovinu" u brand plavoj s strelicom.',
      'Nova stranica "Kontakt" — otvara se klikom na "Kontakt" u glavnoj navigaciji; koristi isti uvodni blok kao stranice iz "Usluge i uvjeti", ali u jednom stupcu.',
      'Na vrhu je istaknut blok korisničke podrške s telefonom i e-mailom.',
      'Kontakti odjela prikazani su kao kartice s telefonom i e-mailom koji su klikabilni.',
      'Novi globalni widget "Prodajna mjesta" — interaktivna karta s oznakama poslovnica i lista poslovnica koja se skrola.',
      'Klik na poslovnicu u listi zumira kartu na tu poslovnicu i prikazuje radno vrijeme, telefon i navigaciju; klik na oznaku na karti označava poslovnicu u listi.',
      'Poslovnice se mogu filtrirati pretragom po gradu ili nazivu.',
      'Na dnu stranice su podaci o društvu (naziv, sjedište, OIB, MBS, sud, kapital).'
    ]
  },
  {
    date: '16.09.2026.',
    title: 'Tirkizne oznake s navy tekstom',
    changes: [
      'Tamnoplave površine na stranicama "Usluge i uvjeti" (blok podrške, podaci za uplatu, brojevi sekcija) sada koriste jedinstvenu navy boju iz dizajn sustava.',
      'Oznake na tirkiznoj podlozi (MARKETPLACE, NOVO, tirkizne ikone) sada koriste navy tekst umjesto bijelog — bolji kontrast.',
      'Pravilo je dodano na stranicu dizajn sustava, uz primjere oznaka i opis tirkizne boje.',
      'Primijenjeno na stranicama "Načini plaćanja" i "Načini dostave".'
    ]
  },
  {
    date: '15.09.2026.',
    title: 'Navigacija po sekcijama u lijevoj koloni ("Usluge i uvjeti")',
    changes: [
      'Lijeva kolona na stranicama iz kolone "Usluge i uvjeti" više ne navodi ostale stranice, nego sekcije trenutne stranice.',
      'Trenutna sekcija je označena u lijevoj navigaciji, a klik pomiče stranicu na tu sekciju.',
      'Vodoravna traka sa sidrištima iznad sadržaja je uklonjena — sadržaj sada počinje odmah ispod uvoda.',
      'Na mobitelu su sidrišta ostala kao vodoravna traka, a popis ostalih stranica uklonjen je s dna stranice.',
      'Na "Uvjetima kupnje" lijeva kolona nosi naslov "Sadržaj" i datum zadnje izmjene ispod popisa poglavlja.',
      'Prelazak između stranica iz kolone "Usluge i uvjeti" radi se preko footera.',
      'Odabrana sekcija u navigaciji ima navy obrub, a na mobitelu traka sa sekcijama ostaje prikvačena ispod headera pri skrolanju.'
    ]
  },
  {
    date: '15.09.2026.',
    title: 'Dodana stranica "Uvjeti kupnje"',
    changes: [
      'Treća stranica iz footer kolone "Usluge i uvjeti" — cijeli pravni tekst uvjeta kupnje, s istim uvodom i lijevom navigacijom kao ostale stranice.',
      'Prekidač "Big Bang uvjeti" / "Marketplace uvjeti" razdvaja dva dokumenta.',
      'Sadržaj (lista poglavlja) prikazan je vodoravno iznad teksta; klik vodi na poglavlje.',
      'Svako poglavlje je zasebna bijela kartica s numeriranim naslovom, podnaslovima i čitljivim proredom.',
      'Iznad sadržaja prikazan je datum zadnje izmjene uvjeta.',
      'Pravni tekst živi u datoteci terms-data.js pa ga je moguće ažurirati bez promjene dizajna stranice.'
    ]
  },
  {
    date: '15.09.2026.',
    title: 'Dodana stranica "Načini dostave"',
    changes: [
      'Druga stranica iz footer kolone "Usluge i uvjeti" — ista struktura kao Načini plaćanja (zajednički uvod, lijeva navigacija, sidrišta iznad sadržaja).',
      'Prekidač "Big Bang dostava" / "Marketplace dostava" mijenja sadržaj stranice.',
      'Sve opcije dostave prikazane su kao pregledne kartice: standardna, gabaritna, paketomati (HP, BoxNow, GLS), GLS dostava, dostava u stan s montažom i osobno preuzimanje.',
      'Svaka opcija ima jasan "Info" blok, oznaku dostupnosti i ključne točke u točkama umjesto dugačkog teksta.',
      'Pravila pakiranja, preuzimanja i reklamacija izdvojena su u jednu zajedničku sekciju za sve načine dostave.',
      'BoxNow i GLS paketomati označeni su oznakom NOVO, a besplatan odvoz starog uređaja izdvojen je kao posebna kartica.'
    ]
  },
  {
    date: '15.09.2026.',
    title: 'Dodana stranica "Načini plaćanja"',
    changes: [
      'Prva stranica iz footer kolone "Usluge i uvjeti" — otvara se klikom na "Načini plaćanja" u footeru (desktop i mobitel).',
      'Dvije verzije sadržaja: prekidač "Web trgovina" / "Poslovnice" mijenja sekcije, a zajednička je sekcija uplate po ponudi.',
      'Nova globalna komponenta Components/InfoPageHead — bijeli uvodni blok (breadcrumb, naslov, uvodni tekst, prekidač) za sve stranice iz te kolone.',
      'Nova globalna komponenta Components/InfoSideNav — lijeva kolona s navigacijom na ostale stranice iz "Usluge i uvjeti".',
      'Sidrišta trenutne stranice su vodoravno iznad sadržaja u desnoj koloni; klik pomiče stranicu na sekciju.',
      'Žiro računi se kopiraju klikom, FAQ je akordeon, na kraju je blok podrške.',
      'Footer linkovi iz kolone "Usluge i uvjeti" sada vode na stranice kroz shell (bez ponovnog učitavanja).'
    ]
  },
  {
    date: '11.09.2026.',
    title: 'Dodana stranica dizajn sustava',
    changes: [
      'Nova stranica "Big Bang webshop – design system" otvara se iz Prototype settings → "View design system".',
      'Sadrži paletu boja s namjenom, tipografsku skalu (desktop + mobitel), skalu razmaka i radijuse, layout pravila.',
      'Gumbi, input polja, checkboxevi, radio, toggle, stepper, chipovi i scroll indikator u svim stanjima.',
      'Oznake i statusi (sniženje, UAU klub, Bang Cijena, promo kod, zaliha, greške) te set ikona koji stranica koristi.',
      'Popis globalnih komponenti s propsima i live primjerom breadcrumba i product carda.',
      'CLAUDE.md sada upućuje na tu stranicu kao centralni izvor dizajn sustava.'
    ]
  },
  {
    date: '11.09.2026.',
    title: 'Dodana stranica "Popis želja"',
    changes: [
      'Nova stranica popisa želja — otvara se klikom na srce u headeru (desktop, skupljeni bar i mobitel).',
      'Sačuvani proizvodi prikazani su u globalnom product carouselu, ali s gumbom "Ukloni s popisa želja" umjesto dodavanja.',
      'Gost iznad carousela vidi poziv na prijavu za obavijesti o padu cijene; prijavljeni korisnik dobiva prekidač i e-mail adresu na koju obavijest dolazi.',
      'Prazno stanje po uzoru na praznu košaricu: poruka, CTA "Prijavi se", kategorije i dva carousela.',
      'U Prototype settings dodan prekidač "Popis želja: S proizvodima / Prazan".',
      'Product carousel proširen: opcionalni wishlist način i skrivanje linka "Prikaži sve".',
      'Breadcrumbi izdvojeni u globalnu komponentu (dizajn s kategorijskih stranica) i primijenjeni na kategorije, pretragu, košaricu i popis želja.'
    ]
  },
  {
    date: '10.09.2026.',
    title: 'Dodana stranica košarice',
    changes: [
      'Nova stranica "Košarica" u dvije kolone — proizvodi lijevo, sažetak narudžbe desno (1/3 širine sadržaja).',
      'Proizvodi su grupirani po trgovcu: svaki trgovac ima svoj bijeli okvir s oznakom 1P / marketplace.',
      'Sažetak: broj proizvoda, usluge i zaštita, promo kod, ukupno i CTA "Nastavi na odabir adrese".',
      'Ispod sadržaja dva postojeća globalna carousela s preporukama.',
      'Mobilna verzija: jedna kolona, sažetak u kartici i sticky traka s CTA-om.'
    ]
  },
  {
    date: '10.09.2026.',
    title: 'Globalni flyout "Dodano u košaricu"',
    changes: [
      'Svi gumbi "Dodaj u košaricu" na cijeloj stranici otvaraju isti flyout (PDP, kategorije, pretraga, bundle).',
      'Flyout sadrži sažetak dodanog proizvoda, usluge i zaštitu, cross-sell proizvode i dva CTA-a.',
      'Na mobitelu se otvara kao bottom sheet unutar okvira uređaja.',
      '"Pregled košarice" vodi na stranicu košarice bez ponovnog učitavanja.'
    ]
  },
  {
    date: '10.09.2026.',
    title: 'Ispravci na PDP-u',
    changes: [
      'Sticky traka "Dodaj u košaricu" sada sjeda točno ispod skupljenog headera (56px) umjesto da ostavlja prazninu.',
      'Gumbi u sticky traci i buy boxu koriste globalni stil CTA-a.'
    ]
  },
  {
    date: '10.09.2026.',
    title: 'Ujednačeni CTA gumbi na cijeloj stranici',
    changes: [
      'Svi ispunjeni CTA gumbi su tamnoplavi #002D73, a na hover prelaze u brand plavu #0050A0.',
      'Pravilo je centralizirano u klasi .bbcta u styles.css i primijenjeno na PDP, kategorije, košaricu, flyout i profil.',
      'Sekundarni gumbi ostaju bijeli s plavim obrubom.'
    ]
  },
  {
    date: '10.09.2026.',
    title: 'Prototype settings panel',
    changes: [
      'Novi plutajući panel dolje lijevo dostupan i korisnicima bez prava uređivanja.',
      'Globalne postavke: prikaz (desktop / mobitel) i status korisnika (prijavljen / gost).',
      'Postavke po stranici: bundle na PDP-u, status članstva i vrsta korisnika na profilu, stanje košarice i nedostupan proizvod u košarici.',
      'Panel se može pomicati povlačenjem i sklopiti klikom na naslov.'
    ]
  },
  {
    date: '10.09.2026.',
    title: 'Prazna košarica i brojač u headeru',
    changes: [
      'Prazno stanje košarice s porukom, CTA-om "Prijavi se", kategorijama i carouselima "Nedavno pregledano" i "Popis želja".',
      'Brojač na ikoni košarice prati stvarni broj proizvoda i nestaje kad je košarica prazna.',
      'Scenarij "proizvod više nije dostupan": proizvod se sivi, CTA je onemogućen dok se ne ukloni.'
    ]
  },
  {
    date: '10.09.2026.',
    title: 'Ujednačeni globalni elementi',
    changes: [
      'Kategorije s naslovnice izdvojene u globalnu komponentu i ponovno korištene u praznoj košarici.',
      'Svi scroll indikatori (carouseli, trake s promocijama, brendovi) sada koriste isti dizajn: 4px traka #D8D8DE s brand plavim indikatorom.'
    ]
  }
];
