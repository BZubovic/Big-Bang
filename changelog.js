/* Prototype change log — one entry per piece of work, not per prompt.
   Shown in the "Prototype settings" panel via "View logs". */
window.BB_CHANGELOG = [
  { date: '07.10.2026.', title: 'Kartica izdelka — nova razporeditev oznak', changes: [
    'Oznake zgoraj levo na sliki v eni vrstici: zadnja vidna oznaka je skrajšana s »…«, preostale so združene v »+N«; ob prehodu z miško se oznaka prikaže v celoti',
    'Povrat novca in nalepka jamstva sta v vrstici na dnu slike, tik nad naslovom; slika 193 / 150 px',
    'Mop Philips XV5113/01 na naslovnici: dodana oznaka »Besplatna montaža«'
  ] },
  { date: '07.10.2026.', title: 'Kuhinje — strani stilov (Klasične, Rustikalne, Moderne)', changes: [
    'Nova stran za vsak stil kuhinj, odpre se iz razdelka »Izberi kuhinjo po svojem okusu« (gumb »Poglej primere«)',
    'Klasične kuhinje: kolekcija Paris | Porto (nežno zelena + naravni hrast) z dvema fotografijama',
    'Klasične kuhinje: kolekcija Rhodos | Bali (delovni kotiček, izvlečni deli, poravnano korito in plošča) s štirimi fotografijami',
    'Klasične kuhinje: kolekcija Leni | Paula — velika fotografija, opis, dekorja Leni 188/189, »Čut za estetiko«, »Čudovite teksture« in galerija',
    'Na vrhu drobtine, povezava »Nazaj na Big Bang kuhinje« in preklop med vsemi tremi stili; na dnu »Odkrij še druge stile«',
    'Vključen obrazec »Rezervacija termina« z glavne strani kuhinj (skupna komponenta)',
    'Rustikalne in moderne kuhinje: stran pripravljena, kolekcije sledijo'
  ] },
  { date: '07.10.2026.', title: 'Kuhinje — nova besedila in razstavne kuhinje', changes: [
    'Nova besedila po navodilih ekipe: naslov in uvod, »Kako poteka« (4 koraki), rezervacija, navdih in stili',
    'Namesto nagradne igre nov razdelek »Razstavne kuhinje po posebnih cenah« s karticami (fotografija, lokacija, cena) in obvestilom na vrhu strani',
    'Nagradna igra ostaja v Prototype settings → Aktivnost (Razstavne kuhinje / Nagradna igra)',
    'Ugodnosti v oktobru (1.–29. 10.): do -60 % na leseni del, -15 % na belo tehniko, Philips Baristina za 1 € ter pogoji akcij',
    'Razstavne kuhinje po salonih (Ljubljana BTC, Ljubljana Rudnik, Celje, Maribor Europark, Kranj, Koper) z izbirnikom salona, pravimi cenami (MPC → posebna cena, popust) ter preklopom Fotografija / Tloris na vsaki kartici',
    'Dodane fotografije in tlorisi razstavnih kuhinj za vseh 6 salonov',
    'Razstavne kuhinje: na mobilnem širše kartice; odstranjena oznaka »1 kos«',
    'Razstavne kuhinje: klik na sliko odpre večjo sliko v oknu z gumbom za zapiranje (zapre tudi klik ob sliki ali Esc)',
    'Razstavne kuhinje: privzet dizajn je »Izpostavljena kuhinja« s preklopom Fotografija / Tloris na veliki sliki — tudi na mobilnem, enako kot na računalniku (podatki na sliki; izbirnik ostalih kuhinj salona nad njo kot vodoraven drsnik)',
    'Prototype settings → »Razstavne kuhinje — barvna tema«: 6 tem za razdelek, privzeta je Ledeno modra (Polnočna, Svetla, Ledeno modra, Big Bang modra, Grafit + turkizna, Topli hrast); ostale različice postavitve odstranjene',
    'Trak pod naslovom (Razstavne kuhinje po posebnih cenah) v ledeno modrih barvah, usklajen z razdelkom',
    'Odstranjena preklopa »Ugodnosti« in »Stili kuhinj« — trenutni različici sta končni',
    'FAQ: izdelava in montaža traja 6–10 tednov'
  ] },
  { date: '06.10.2026.', title: 'Bento kutije bez sjene i obruba', changes: ['Uklonjene sjene i obrubi s bento kutija i kartica, uključujući hover: istaknuti brendovi i traka pretrage (Brendovi), kartice odjela (Kontakt), pločica „Natrag na” (kategorija), kartice nagradne igre i obrasca (Kuhinje).', 'Pravilo dodano na stranicu dizajn sustava: bento kutije odvajaju se samo bojom pozadine; sjena samo za plutajuće slojeve.'] },
  { date: '06.10.2026.', title: 'Nova stranica „Brendovi” i izbornik „•••” u zaglavlju', changes: ['Klik na „•••” u navigaciji zaglavlja otvara mali padajući izbornik s dodatnim poveznicama; zasad samo „Brendovi”.', 'Nova stranica „Brendovi”: istaknuti brendovi s logotipima (12) i popis svih brendova.', 'Popis brendova: pretraga s isticanjem pogotka, filtar po kategoriji (s brojem brendova), skok na slovo A–Ž i sortiranje Popularni (zadano) / A–Ž.', 'Mobilno: pretraga i slova u ljepljivoj traci, popis u recima od 48px.', 'Slova s više od 8 redaka brendova skraćena su; „Prikaži sve (N)” u donjoj desnoj ćeliji otvara cijelo slovo (tijekom pretrage prikazuje se sve).', 'Poveznica „Brendovi” u navigaciji stranice brenda vodi na novu stranicu.'] },
  { date: '06.10.2026.', title: 'Kartica proizvoda – oznake na prelazak mišem', changes: ['Prelaskom mišem preko oznake na slici proizvoda prikazuje se njezin puni tekst, a ostale oznake se skraćuju (…).'] },
  { date: '06.10.2026.', title: 'Kartica proizvoda – konačna oznaka promo koda', changes: ['Nova oznaka promo koda na svim karticama proizvoda: tamnozeleni dio "-20% uz kod:" + svijetlozeleni "-179,80 €" (poravnato lijevo).', 'Iznos uštede izračunava se iz cijene proizvoda i postotka koda (i u KM).', 'Desktop: ikona za kopiranje promo koda u svijetlozelenom dijelu oznake (klik kopira kod, ikona se na trenutak mijenja u kvačicu).', 'Iznos uštede prikazuje se s minusom („-179,80 €”) na desktopu i mobilno; font 13px desktop / 12px mobilno.', 'Mobilno: oznaka promo koda i oznaka obnovljenog proizvoda („… u odnosu na novi”) iste su visine (24px) i veličine fonta (12px).', 'Oznaka „Obnovljeno” (tamni tekst na limeti) podebljana na 700 kako bi optički odgovarala bijelim oznakama.', 'Uklonjena postavka prototipa "Oznaka promo koda" s kategorije; ista oznaka u prikazu liste, na naslovnici i na stranici dizajn sustava.'] },
  { date: '06.10.2026.', title: 'Stranica proizvoda (mobilno) – ljepljivi gumb za košaricu', changes: ['Ljepljiva traka na dnu prikazuje samo gumb "Dodaj u košaricu", bez cijene.', 'Traka se pojavljuje tek kad glavni gumb "Dodaj u košaricu" nije vidljiv na ekranu.', 'Gumbi "Dodaj u košaricu" koriste istu ikonu košarice kao zaglavlje.'] },
  { date: '05.10.2026.', title: 'Kategorija razine 3 – minimalni prikaz proizvoda', changes: ['Nova postavka prototipa "Prikaz proizvoda": Uobičajeno / Minimalno.', 'Minimalni prikaz (rubni slučaj): kartice bez opcija, recenzija, promo koda i sidrene cijene, najviše jedna oznaka, bez naljepnica (povrat novca, jamstvo, UAU CENA); prazni retci se skupljaju.', 'U minimalnom prikazu nema slikovnog bannera u mreži proizvoda.'] },
  { date: '05.10.2026.', title: 'Kategorija razine 3 – rubni slučaj valute KM', changes: ['Zadnji proizvod u mreži prikazuje cijene u KM (BiH): 49.000 KM, precrtano 59.000,90 KM, ušteda -10.000,90 KM – za provjeru dugih iznosa na kartici.'] },
  { date: '05.10.2026.', title: 'Kartica proizvoda – energetska oznaka', changes: ['Energetska oznaka i "Informacijski list" premješteni su s retka cijene u zaseban redak na dnu kartice, ispod "Cijena na …" (lijevo poravnato), pa se više ne preklapaju s cijenom.'] },
  { date: '05.10.2026.', title: 'Stranica brenda + brend na stranici proizvoda', changes: ['Nova stranica brenda: logo, naziv, kratki opis i kategorije brenda, ispod mreža proizvoda s filterima kao na kategoriji 3. razine.', 'Klik na brend na stranici proizvoda otvara stranicu tog brenda.', 'Stranica brenda Samsung prikazuje službeni Samsung logo.', 'Kategorija 3. razine: pilule bez gumba „Svi“ — strelica „Natrag“ kao prva pilula, zatim sljedeća razina i mješavina filtera; klik na sljedeću razinu ide korak dublje, a klik na filter ga primjenjuje u panelu Filteri i uklanja iz reda. Pilule su istog izgleda kao na stranici brenda (srednja debljina fonta, tamnosivi tekst koji na hover postaje crn, bez broja proizvoda).', 'Na stranici brenda panel Filteri ne prikazuje filter Brend.', 'Kategorija 3. razine otvara se bez unaprijed aktivnih filtera.', 'Strelica „Natrag“ u pilulama poništava zadnji korak — zadnji primijenjeni filter ili odabranu podrazinu — a tek zatim vodi razinu više (kategorija 3. razine i stranica brenda).', 'Kategorije 1. i 2. razine na mobitelu: pločice zamijenjene okruglim bijelim ikonama s nazivom ispod.', 'Breadcrumb na mobitelu ostaje u jednom retku s vodoravnim pomicanjem i uvijek prikazuje zadnju stavku.', 'Kategorije brenda prikazane kao pilule (zadano) umjesto pločica sa slikama; strelica „Natrag“ prva je pilula (postavka „Prikaz kategorija“). Na zadnjoj razini pilule nude sljedeću grupu filtera redom; klik primjenjuje filter i u panelu Filteri.', 'Brend s puno kategorija (postavka prototipa „Kategorije brenda“, zadano „Puno“): pločice prvo prikazuju odjele, klik otvara potkategorije odjela, zatim njihove podkategorije (3. razina), a klik na zadnju razinu prikazuje čisti popis proizvoda s filterima — sve unutar stranice brenda, s putanjom u breadcrumbu i okruglim gumbom „Natrag“ ispred naslova; naslov je naziv kategorije, a kratki opis prati odabranu kategoriju.', 'Ispod naziva proizvoda, u retku s ocjenom i ID-om, prikazuje se brend kao poveznica (desktop i mobitel).'] },
  { date: '02.10.2026.', title: 'Popis želja – uklanjanje ikonom kante', changes: ['Uklonjen gumb „Ukloni s popisa želja” ispod kartica', 'Ikona srca na karticama u popisu želja zamijenjena ikonom kante za uklanjanje proizvoda'] },
  { date: '02.10.2026.', title: 'Flyout „Dodano u košaricu” u novom dizajnu', changes: ['Cijena proizvoda u novom dizajnu: crna cijena, crvena oznaka popusta, najniža cijena u zadnjih 30 dana i cijena na referentni dan', 'Dostava prikazana istim blokom kao na stranici proizvoda', 'Zaštita zamijenjena blokom „Usluge i jamstvo” (Sigurnost – jedan odabir, Usluge – više odabira) kao na stranici proizvoda', '„Kupci često dodaju”: strelice lijevo/desno uz naslov, cijene proizvoda u novom dizajnu'] },
  { date: '02.10.2026.', title: 'Oznaka uštede za obnovljene proizvode u stilu promo koda', changes: ['Oznaka „-N € u odnosu na novi” na karticama, kategoriji i stranici proizvoda sada ima isti oblik kao oznaka promo koda (bez ikone), ali zadržava limetastu boju — zelena ostaje rezervirana za promo kod', 'Paket proizvoda (PS5) koristi isti cjenovni blok kao ostali proizvodi', 'Stranica proizvoda: oznaka uštede obnovljenog proizvoda prikazuje se na mjestu promo koda', 'Marketplace proizvod: okvir „Marketplace ponuda” premješten iznad gumba „Dodaj u košaricu”, s ikonom trgovine (kao „Prodavatelji” u zaglavlju)'] },
  { date: '01.10.2026.', title: 'Postavke prototipa – vrste proizvoda na stranici proizvoda', changes: ['Uklonjena postavka „Sticky košarica“ (traka je uvijek uključena)', 'Nova padajuća postavka „Proizvod“: otvoreni proizvod, klima uređaj, minimalni proizvod, marketplace madrac', 'Klima uređaj: umjesto boje, memorije i stanja odabir „Bez montaže / S montažom“', 'Minimalni proizvod: bez konfiguratora', 'Marketplace madrac: odabir dimenzija, bez rata i okvira promo koda, bez preuzimanja u poslovnici, okvir s objašnjenjem marketplace ponude (samo kupnja u webshopu), povrat 14 dana', 'Usluge i jamstvo, oznaka punjača i „Često kupljeno zajedno“ prikazuju se samo za mobitel', 'Postavka „Bundle“ premještena u padajući izbornik kao peta opcija; bundle ima zasebnu sigurnost za svaki proizvod (PlayStation 5 i DualSense kontroler)'] },
  { date: '01.10.2026.', title: 'Stranica proizvoda – oznaka punjača', changes: ['Ispod EU GARAN oznake okvir sa službenim piktogramom „s punjačem / bez punjača“ i podacima o punjenju (USB-C, USB PD 15–45 W)'] },
  { date: '01.10.2026.', title: 'Stranica proizvoda – „Prikaži sve“ za memoriju i stanje', changes: ['Kad postoji više od 3 opcije memorije ili stanja, prikazuju se 3 (uvijek uključujući odabranu) i poveznica „Prikaži sve (N)“', 'Poveznica otvara panel sa svim opcijama (mobilno odozdo, desktop s desne strane); odabirom se panel zatvara', 'Demo: dodana memorija 128 GB i stanje „Otvorena ambalaža“', 'Uklonjena poveznica „Što znače stanja?“; poveznice „Prikaži sve“ u istom stilu kao „Još N ponuda“'] },
  { date: '01.10.2026.', title: 'Stranica proizvoda (desktop) – usklađeno s mobilnom verzijom', changes: ['Cjenovni blok, okvir dodatnih ponuda (panel „Posebne pogodnosti“), konfigurator (boja, memorija, stanje), okvir dostave i preuzimanja i gumb „Dodaj u košaricu“ kao na mobilnom', 'Ispod gumba: „Prodaje i šalje“, traka pogodnosti, EU GARAN oznaka i „Usluge i jamstvo“ (bijele pločice s obrubom)', 'Oznake „Besplatna dostava“ i „UAU hot deals“ u gornjem lijevom kutu fotografije; zvjezdice kao na kartici; ID proizvoda pokraj recenzija (i na mobilnom)', 'Uklonjeni popis panela desno, „Dodatne usluge i zaštita“ i „Moglo bi vam trebati“; „Često kupljeno zajedno“ s istim potvrdnim okvirima', 'Zadržan bento raspored s bijelim karticama', 'Bijela pozadina fotografije', 'Opis, specifikacije i recenzije prikazani odmah, svaka u svojoj kartici (bez kartica-tabova)'] },
  { date: '01.10.2026.', title: 'Kartice proizvoda – pojednostavljen promo kod', changes: ['Prikaz liste (mobilno): dostupnost iste veličine kao prodavač (12px, manja točka); „Artikl nije na zalihi“ u regularnoj debljini', 'Cijena i „Informacijski list“ poravnati po osnovnoj liniji teksta; na mobilnom više razmaka između oznake (DOBRA PONUDA / UAU CENA) i cijene', 'Okvir promo koda na svim karticama proizvoda (karusel, kategorija – mreža i lista, početna): bez ikone i isprekidanog obruba, svijetlozelena pozadina, tekst „Dodatnih 20% popusta u košarici“ s istaknutim zelenim postotkom'] },
  { date: '01.10.2026.', title: 'Stranica proizvoda (mobilno) – novi konfigurator', changes: ['Zvjezdice recenzija istog dizajna kao na kartici proizvoda', 'Boja: veći krugovi (44px) s navy prstenom i hrvatskim nazivom boje', 'Memorija: kartice s cijenom / razlikom u cijeni; nedostupna opcija precrtana, isprekidani okvir i „Obavijesti me“', 'Stanje: kartice s nazivom, cijenom i opisom (ili uštedom), poveznica „Što znače stanja?“', 'Novi okvir prije gumba: dostava na adresu i preuzimanje u poslovnici, s Big Bang ikonama dostave i preuzimanja', 'Preuzimanje u poslovnici prikazuje stanje dostupnosti („Pogledaj uživo“ / „Provjeri dostupnost“ / „Nije na zalihi“) i otvara panel dostupnosti; zaseban okvir dostupnosti ispod gumba uklonjen', 'Ispod gumba „Dodaj u košaricu“: „Prodaje i šalje“ + poveznica na ostale ponude, traka (povrat 30 dana, zakonsko jamstvo, načini plaćanja), ispod nje EU GARAN oznaka (otvara punu oznaku), te novi sivi bento okvir „Usluge i jamstvo“ s bijelim pločicama (bez dvostrukih obruba) (Sigurnost: Big Bang Asistenca, Big Bang Zaštita Plus, zadano „Ne želim dodatnu sigurnost“; Usluge: zaštitno staklo, prijenos podataka; otkup starog mobitela) umjesto tablice podataka o ponudi', 'Uklonjen popis (promo kodovi, dostava, raspoloživost, energetski razred, B2B) — na njegovom mjestu „Često kupljeno zajedno“ na sivoj pozadini s bijelim pločicama', 'Uklonjena sekcija „Moglo bi vam trebati“', 'Uklonjena sekcija „Dodatne usluge i zaštita“ (sadržaj je sada u okviru „Usluge i jamstvo“)', 'Redovi dostave i preuzimanja klikabilni u cijelosti, sa strelicom desno (otvaraju panel); uklonjene poveznice ispod', 'Privremeno uklonjeni „Naručite dodatne usluge“ i „Zaštiti svoj uređaj“', 'Gumb „Dodaj u košaricu“ s ikonom košarice i višim (54px), kao u sticky traci', 'Više razmaka (28px) ispod okvira dodatnih ponuda i ispod svake opcije konfiguratora'] },
  { date: '01.10.2026.', title: 'Stranica proizvoda – cjenovni blok kao na kartici proizvoda', changes: ['Cijena crna, iznad nje precrtana cijena i crvena oznaka popusta u eurima (bez zelene strelice s postotkom)', 'Uklonjena narančasta pozadina cjenovnog bloka i oznaka „UAU Cijena“ (i na fotografiji)', 'Promo kod u zelenom isprekidanom okviru, a kod obnovljenih uređaja limeta oznaka „u odnosu na novi“, kao na kartici', 'Rate u obliku „91,67 € / 12 rata“ i energetska oznaka s poveznicom „Informacijski list“ desno od cijene', 'Naziv i recenzije premješteni iznad galerije fotografija; uklonjeni prodavač i šifra iznad naziva', 'Na fotografiji proizvoda oznaka „-14%“ zamijenjena navy oznakom „Besplatna dostava“', 'Sekcija „Posebne ponude“ zamijenjena okvirom dodatnih ponuda u cjenovnom bloku preko cijele širine: uvijek najveći promo kod + „+N dodatne ponude“ koje se otvaraju klikom', 'Rate i MPC premješteni iznad okvira dodatnih ponuda', 'Klik na okvir dodatnih ponuda otvara panel „Posebne pogodnosti“ (promo kod s kopiranjem, poklon, Samsung Care+, otkup) umjesto padajućeg popisa', 'Okvir dodatnih ponuda: svijetlozelena pozadina, bez obruba i ikona; tekst ponude najviše u 2 reda (dalje trotočje), „+3 dodatne ponude“ odmah iza teksta ponude', 'Više razmaka iznad i ispod breadcrumbsa; na mobilnom breadcrumbs na bijeloj pozadini, a razmaci breadcrumbs → naziv → recenzije → oznake ujednačeni (10 / 12 / 12px)', 'Naziv proizvoda u debljini SemiBold (600); na mobilnom 16px / 26px, Bold (700)', 'Poveznica „Saznaj više“ pokraj rata', 'Mobilno: okvir fotografije proizvoda svijetlosivi zaobljeni pravokutnik (12px) s 12px razmaka sa strana', 'Mobilno: strelice lijevo/desno u okviru fotografije za listanje slika', 'Mobilno: cijena (extra bold) i crvena oznaka popusta „-X €“ u jednom redu, ispod „Najniža cijena u zadnjih 30 dana:“ s precrtanom cijenom', 'Mobilno: „Najniža cijena u zadnjih 30 dana“ i „Cijena na 10.09.2026.“ grupirane odmah ispod cijene, iznad rata', 'Demo cijena proizvoda 1.299,00 € (prije 1.479,00 €)', 'Demo naziv proizvoda „Samsung Galaxy S24+ 5G, 12/256 GB, Amber Yellow“', 'Veći prored teksta u okviru dodatnih ponuda', 'Mobilno: oznake „Besplatna dostava“ i nova narančasta „UAU hot deals“ izvan fotografije, u redu odmah ispod recenzija', 'Mobilna sticky traka: crna cijena s centima u superskriptu i navy gumb „Dodaj u košaricu“ s ikonom košarice', 'Postavke prototipa: nova opcija „Sticky košarica“ (Prikaži / Sakrij) za ljepljivu traku s gumbom za košaricu'] },
  { date: '30.09.2026.', title: 'Stranica proizvoda – nedostupna boja', changes: ['Nedostupna boja u konfiguratoru prikazuje se izblijeđeno i precrtano, ali ostaje klikabilna', 'Odabirom nedostupne boje prikazuje se oznaka „Nije dostupno“ i poveznica „Obavijesti me kad stigne“'] },
  { date: '30.09.2026.', title: 'Kartica proizvoda: cijena i naziv', changes: ['Cijena na karticama proizvoda (kategorije i karuseli) na desktopu smanjena s 22 px na 20 px', 'Nazivi proizvoda na karticama u srednjoj debljini (500)', 'Nazivi proizvoda u prijedlozima pretrage polupodebljani (600)', 'Oznake pogodnosti na slici (Besplatna dostava, UAU Cena…) polupodebljane (600)', 'Crvena oznaka popusta podebljana (700), „Na zalihi” polupodebljano (600)', 'Naziv prodavatelja u običnoj debljini i iste boje kao „Prodaje:”, 4 px razmaka ispod', 'Strelica → iza „Dostupno još N opcija”', 'Početna, TV promo (dva reda kartica): naziv u srednjoj debljini, precrtana cijena 1 px manja', 'Kategorija razina 3: prvi red kartica prema predlošku (perilica, hladnjak, indukcijska ploča) s novim fotografijama', 'Kartica proizvoda: nova narančasta oznaka „UAU CENA” iznad cijene kad nema stare cijene', 'Crvena oznaka popusta i oznaka „UAU CENA” 12 px', 'Oznaka na slici „UAU Cena” preimenovana u „Razrezana cena”, plava pozadina', 'Obnovljeni proizvodi (oznaka „Obnovljeno”) ne prikazuju precrtanu cijenu ni oznaku popusta', 'Sve oznake na kartici polupodebljane (600) — podebljano ostaje samo „Dodatnih 20% uz promo kod”', 'Uklonjen redak „Posljednja najniža cijena” sa svih kartica proizvoda (mreža i lista)', 'Prikaz liste na kategoriji: iste debljine fonta kao kartica — naziv srednji (500), oznake, popust, „Na zalihi” i iznos uštede polupodebljani (600), prodavatelj običan i sive boje, strelica → iza „Dostupno još N opcija”', 'Prikaz liste (desktop): cijena 22 px umjesto 24 px', 'Nova zelena oznaka „DOBRA PONUDA” iznad cijene (kao „UAU CENA”) — prvi proizvod u drugom redu kategorije razine 3, bez precrtane cijene, popusta, rata i promo koda'] },
  { date: '29.09.2026.', title: 'Nova stranica: Akcije i promocije', changes: ['Stranica otvorena iz glavne navigacije (desktop i mobilno)', 'Zaglavlje stranice (putanja, naslov, podnaslov) na bijeloj traci preko cijele širine kao na stranicama Usluge i uvjeti', 'Dodane kategorije: Audio, Pametni satovi, Kamere i dronovi, Stolna računala, Pranje i sušenje, Ugradbeni aparati, Perilice posuđa', 'Kategorije izlaze preko desnog ruba kao karuseli proizvoda, s trakom napretka; na desktopu strelice lijevo i desno', 'Mobilno: odabrane akcije iste visine (naslov 2 retka, opis 3 retka, zatim „…”) i traka napretka ispod', 'Filtriranje po kategorijama kružnim ikonama, s oznakom odabrane kategorije', 'Odabrane akcije: velika kartica i dvije vodoravne kartice', 'Sve akcije: mreža kartica, broj aktivnih promocija, sortiranje Najnovije / Uskoro ističu i gumb „Prikaži još promocija”', 'Crvena oznaka „Još N dana” na promocijama koje uskoro ističu', 'Kartica promocije sada je zajednička komponenta — ista na kategorijama i na stranici akcija; „Sve promocije” vodi na novu stranicu'] },
  { date: '29.09.2026.', title: 'Košarica: novi prikaz cijene', changes: ['Cijena crna, precrtana stara cijena sivo i crvena oznaka popusta u eurima (npr. „-400 €”) u istom retku — desktop i mobilno'] },
  { date: '29.09.2026.', title: 'Kuhinje: hero s videom u pozadini', changes: ['Nova postavka „Hero” (Slika / Video) u postavkama prototipa na stranici Kuhinje', 'Video varijanta: video preko cijele širine, tamni prijelaz za čitljivost, bijeli naslov i tekst, isti sadržaj i CTA', 'Mobilno: viši hero (660 px), video vidljiv u gornjem dijelu, tekst na tamnom prijelazu pri dnu', 'Mobilno: ocjena uz oznaku „Kuhinje po meri”, dva gumba (rezervacija + stilovi kuhinja)', 'Video varijanta: navigacija stranice prozirna preko videa (svijetli gumbi na tamnoj podlozi), bijela pozadina tek nakon pomicanja stranice', 'Navigacija stranice (obje varijante) ne pomiče se sama — klizi zajedno s ljepljivim zaglavljem kad se ono pojavi', 'Navigacija stranice: stavke poredane kao sekcije na stranici i dodana stavka Rezervacija', 'Sekcija Rezervacija na svijetloplavoj podlozi preko cijele širine — jasno odvojena od Ugodnosti', 'Sekcija Ugodnosti dobila oznaku, naslov i podnaslov'] },
  { date: '29.09.2026.', title: 'Nova kartica proizvoda u prikazu liste (kategorija)', changes: ['Desktop: stupac s oznakama (povrat novca, jamstvo, poklon), slika s galerijom, naziv u dva retka, ocjena + pogodnost + „Dostupno još N opcija” u jednom retku', 'Cijena 24 px ekstra podebljano, precrtana stara cijena, crveni postotak popusta i rate u istom retku', 'Okvir „Dodatnih 20% uz promo kod”, posljednja najniža i sidrena cijena u jednom retku na dnu', 'Desni stupac: dostupnost, prodavatelj, energetska oznaka s informacijskim listom, Usporedi/Spremi i „Dodaj u košaricu”', 'Mobitel: pogodnosti složene iznad slike, oznake povrata/jamstva ispod; desno naziv, ocjena, opcije, dostupnost, prodavatelj, cijena s energetskom oznakom, promo kod, rate i pravne cijene'] },
  { date: '29.09.2026.', title: 'Nova mala kartica u dvorednom karuselu televizora', changes: ['Oznaka uštede u eurima (npr. „-400 €”) gore lijevo na slici', 'Naziv podebljan u jednom retku, cijena 22 px crnom bojom uz precrtanu staru cijenu', 'Okvir „-20% uz promo kod” s ikonom i sidrena cijena „MPC na …” na dnu', 'Uklonjeni gumbi za popis želja i usporedbu s male kartice'] },
  { date: '29.09.2026.', title: 'Kartica proizvoda — kompaktniji blok naziva', changes: ['Ocjena i „Dostupno još N opcija” pomiču se odmah ispod naziva (kad je naziv u jednom retku ili nema ocjene)', 'Dostupnost, prodavatelj i cijena ostaju poravnati na svim karticama u retku', 'Veći naziv (15 px), ocjena i opcije 12 px, malo veće zvjezdice', 'Stara cijena 14 px, crvena oznaka popusta 13 px ekstra podebljano, trenutna cijena ekstra podebljana na svim karticama', 'Promo kod 14 px, rate 13 px', 'Oznake pogodnosti (Besplatna dostava …) uvijek u jednom retku — zadnja vidljiva oznaka skraćuje se s „…”, ostale se skupljaju u oznaku „+N”', 'Primjer kartice s pet pogodnosti u karuselu i na stranici kategorije (druga kartica)', 'Ako nijedna kartica u retku nema ocjenu ili opcije, taj prostor se ne rezervira i kartice su niže', 'Ako ijedna kartica u retku ima promo kod ili oznaku obnovljenog proizvoda, sve kartice u retku čuvaju taj prostor pa su cijene poravnate'] },
  { date: '28.09.2026.', title: 'Finalni dizajn kartice proizvoda', changes: ['Nova kartica proizvoda u svim karuselima i na kategorijskoj stranici (desktop i mobitel)', 'Oznake na dnu slike: Besplatna dostava, UAU Cena (narančasta), Obnovljeno (limeta)', 'Ocjena, poveznica „Dostupno još N opcija”, dostupnost i „Prodaje:” s nazivom prodavatelja', 'Stara cijena precrtana s crvenom oznakom uštede, nova cijena crnom bojom, energetski razred s poveznicom „Informacijski list” desno od cijene', 'Okvir „Dodatnih 20% uz promo kod” ili, za obnovljene proizvode, „-XXX € u odnosu na novi”', 'Rate „25,99 € / 12 rata” te posljednja najniža cijena i sidrena cijena „Cijena na …” na dnu kartice'] },
  { date: '28.09.2026.', title: 'Nova stranica Prodajna mjesta', changes: ['Poveznica „Prodajna mjesta” u zaglavlju (desktop i mobitel) otvara novu stranicu', 'Uvod u stilu stranica „Usluge i uvjeti” s gumbima za filtriranje po gradu (prvi gumb „Sve” prikazuje sve poslovnice)', 'Karta i popis poslovnica filtriraju se prema odabranom gradu', '„Prikaži trgovinu” otvara ispod karte detalje poslovnice: karta lokacije, adresa, dodatne informacije, radno vrijeme za idućih 7 dana i gumb „Kako do nas” (Google Maps)', 'Dodane poslovnice SD Megastore Arena park i Sveta Nedelja', 'Interaktivna karta privremeno zamijenjena statičnom slikom karte (widget prodajnih mjesta i detalji poslovnice)'] },
  { date: '25.09.2026.', title: 'Nova stranica Kuhinje (kampanja s nagradnom igrom)', changes: ['Poveznica „Kuhinje” u zaglavlju (desktop i mobitel) otvara novu landing stranicu kuhinja', 'Traka s nagradnom igrom na vrhu i ljepljiva navigacija po odjeljcima stranice s gumbom „Rezerviraj termin”', 'Odjeljci: uvod s akcijom -60 %, kako poteka (4 koraka), nagradna igra s odbrojavanjem, pogodnosti, obrazac za rezervaciju termina, galerija, stilovi kuhinja, iskustva kupaca, saloni, česta pitanja, zašto Big Bang i završni poziv', 'Obrazac provjerava obavezna polja, lokaciju i privolu te prikazuje potvrdu nakon slanja', 'Česta pitanja u istom stilu kao na stranicama „Usluge i uvjeti”', 'Uvod, traka nagradne igre, nagradna igra, „Zašto Big Bang” i završni poziv protežu se cijelom širinom ekrana, sadržaj ostaje u stupcu stranice; uklonjen kontakt odjeljak na dnu, traka nagradne igre na vrhu i breadcrumb; naslovi odjeljaka podebljani, 28 px na desktopu; uvod i galerija „Kuhinja, ne showroom” na bijeloj pozadini; stilovi, saloni i česta pitanja na svijetloplavoj; navigacija po stranici odvojena tankom sivom linijom', 'Novi izgled vrha stranice prema predlošku: navigacija s okruglim oznakama, uvod na svijetloj pozadini sa sjenom slike i oznakom -60 %, uska traka nagradne igre i odjeljak „Kako poteka” s obrubljenim karticama koraka', 'Nagradna igra na tamnoplavoj pozadini: tirkizna oznaka, odbrojavanje u prozirnim okvirima, plavi gumb i kartica glavne nagrade sa zelenom oznakom', 'Šest novih izgleda odjeljka „Ugodnosti” (akcija + mreža, pas s ikonama, kupon, bento s fotografijom, brojke, popis s fotografijom) — izbor u postavkama prototipa', 'Obrazac za rezervaciju termina prema predlošku: koraci u bijelim karticama, zelena napomena o nagradnoj igri, obrazac u kartici sa sivim poljima i odabirom lokacije', 'Iskustva kupaca na bijeloj pozadini s obrubljenim karticama; svi bijeli odjeljci suženi na 1240 px', 'Česta pitanja kao zasebne kartice (otvoreno pitanje s plavim obrubom); saloni i česta pitanja na svijetlosivoj pozadini; uklonjen razmak između galerije i stilova', 'Odjeljak „Zašto Big Bang” na tamnoj pozadini s plavim gumbom; završni poziv na rezervaciju naslonjen izravno na podnožje', 'Galerija i stilovi na bijeloj pozadini (1240 px), iskustva kupaca na #F7F9FB', 'Šest novih izgleda odjeljka „Stili” s fotografijama (foto kartice, visoke pločice, istaknuti stil, popis + slika, harmonika, vodoravne kartice) — izbor u postavkama prototipa', 'Mobilne verzije svih šest izgleda odjeljaka „Ugodnosti” i „Stili” (vrtuljci, harmonika i odabir stila dodirom)', 'Mobitel: uklonjeni sivi razmaci između odjeljaka i ispod zadnjeg odjeljka, pozadine i česta pitanja usklađeni s desktopom', 'Odjeljak „Zašto Big Bang” premješten između prodajnih mjesta i čestih pitanja', 'Stili kuhinja: tri stila (klasične, rustikalne, moderne); zadani izgled je harmonika', 'Odjeljak „Trgovine” zamijenjen globalnim widgetom prodajnih mjesta (karta + popis) s kontakt stranice', 'Na mobitelu se nakon uvoda pojavljuje ljepljivi gumb „Rezerviraj termin” na dnu zaslona'] },
  { date: '24.09.2026.', title: 'PDP — dostupnost ispod gumba i flyout Dostupnost', changes: ['Okvir zalihe ispod „Dodaj u košaricu” prikazuje jedan od četiri scenarija (zaliha × izloženi primjerak) s glavnim tekstom i podtekstom', 'Klik na okvir otvara flyout „Dostupnost”: dostava na adresu, trgovine sa statusom (na zalihi, zadnji komad, izloženo), „Preuzmi ovdje” i „Kako doći”, sklopive ostale trgovine i legenda', 'Kad proizvod nije na zalihi ni izložen, flyout nudi slanje upita o dostupnosti', 'U postavkama prototipa na stranici proizvoda dodani prekidači „Zaliha” i „Izloženi primjerak”'] },
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
      'Bez recenzija dostupnost i prodavatelj pomiču se gore; na kategoriji jedan cijeli red bez recenzija, jedan bez promo koda i jedan bez oboje.',
      'Nov prikaz kategorije u obliku popisa: energetski razred i jamstvo lijevo, galerija s točkama, naslov, ocjena i oznake, opis, cijena s ratama u istom redu, okvir promo koda, MPC; dostupnost, prodavatelj, Usporedi/Spremi i gumb Dodaj u košaricu desno.',
      'Desktop prikaz popisa: povećani tekstovi, cijena, okviri, ikone i gumb.',
      'Nov mobilni prikaz popisa: slika s gumbima Spremi/Usporedi i točkama galerije lijevo, povrat novca, jamstvo i POKLON na dnu; desno naslov, ocjena, oznake s energetskim razredom, dostupnost, prodavatelj, cijena, rate, promo kod i MPC.',
      'Red kartica bez recenzija ili bez promo koda skraćuje se po sadržaju (nema praznog prostora).',
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
