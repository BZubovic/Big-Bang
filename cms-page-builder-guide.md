<!--
  CMS Page Builder guide — sent by the Big Bang CMS developer (MarkerCMS 3.26.1022.30, 22. 10. 2026., received 23. 10. 2026.).
  Verbatim Markdown conversion of the downloaded HTML guide "page-builder-html-zip-shortcodes.html".
  Authoritative for the Export for CMS format, the ZIP package, shortcodes and their options.
  Do NOT edit by hand. When the CMS developer sends a new export, convert it to Markdown and replace
  this whole file (same name), then update the version line in CLAUDE.md "## Export for CMS"
  and the copy of chapter 6 ("Prompt za AI alat") in Main.dc.html (CMS_PROMPT).
  The Big Bang-specific rules that apply on top of this guide live in CLAUDE.md "## Export for CMS".
-->

Page Builder

# HTML, ZIP i shortcodeovi — vodič za izradu stranice uz AI

Od dizajna i sadržaja do uređive stranice. Jedan dokument za pripremu predloška, uvoz i rad s dinamičkim podacima.

Kreirano: 22. 10. 2026.Ažurirano: 22. 10. 2026.

MarkerCMS 3.26.1022.30

**Posljednje izmjene**

- 22. 10. 2026. — Poslovnice u helpu i exportu: sve poslovnice neovisno o vidljivosti, šifre bez prefiksa kanala i BA primjer 110.

- 22. 10. 2026. — Širina zona i traka: desni i oba ruba, CSS primjer i stvarne javne šifre poslovnica u katalogu.

- 22. 10. 2026. — Naslov, poveznica i proizvodi u jednom widgetu, uz skrivanje prazne liste.

- 22. 10. 2026. — Dodano automatsko grupiranje HTML omotača i uređivi BF flash tekstovi.

- 22. 10. 2026. — Izrađen vodič za klijente i AI alate, s primjerom HTML-a, promptom te aktualnim postupkom i katalogom.

**Sadržaj** 1. Od ideje do HTML predloška 2. Priprema HTML-a i ZIP paketa 3. Cijeli primjer HTML predloška 4. Širine zona i vodoravne trake 5. Newsletter i drugi obrasci 6. Prompt za AI alat 7. Provjera prije spremanja i objave 8. Aktualni postupak uvoza i uređivanja 9. Aktualni katalog shortcodeova i opcija

## 1. Od ideje do HTML predloška

22. 10. 2026.

Ovaj vodič služi uredniku i AI alatu za pripremu stranice koja se uvozi u Page Builder. Priložite cijeli preuzeti HTML vodič uz svoj opis kampanje. AI alat tada dobiva pravila pripreme i aktualne dopuštene shortcodeove.

1. Prikupite tekstove, dizajn, slike, jezik i kanal stranice te stvarne SKU šifre ili izvore sadržaja.

2. AI alatu priložite ovaj dokument i prilagodite prompt iz poglavlja Prompt za AI alat.

3. Pregledajte generirani HTML i pripremite HTML datoteku ili ZIP s resursima.

4. U Page Builderu otvorite Izradi / uvezi → Uvezi sadržaj. Provjerite strukturu, upozorenja i pregled.

5. Primijenite uvoz u radnu kopiju, pregledajte Desktop i Mobitel pa spremite verziju. Objava je zaseban korak.

## 2. Priprema HTML-a i ZIP paketa

22. 10. 2026.

Za jednostavan predložak pripremite UTF-8 HTML, HTM ili TXT do 1 MB. Za slike, lokalni CSS i druge dopuštene resurse koristite ZIP do 100 MB. Dokument mora biti u korijenu paketa; jedna zajednička obuhvatna mapa također se računa kao korijen.

```
kampanja.zip
├── index.html
├── images/
│   └── hero.jpg
└── styles/
    └── campaign.css
```

U HTML-u koristite putanje koje odgovaraju paketu, primjerice images/hero.jpg. Ako paket sadrži više HTML dokumenata, pri uvozu odaberite željeni dokument. Nedostajuće resurse i nepodržane datoteke provjerite kroz upozorenja.

Pri analizi velikog ili dubokog HTML-a uvoz automatski grupira uzastopne dekorativne omotače. Izvorni DOM, CSS klase, ID-jevi i razmaci ostaju očuvani; slike, tekstovi, poveznice i shortcodeovi ostaju zasebni uređivi elementi. Struktura prikazuje broj elemenata, blokova, grupiranih omotača i dubinu prije primjene. Podržano je do 10.000 izvornih čvorova, 5.000 uređivih čvorova i 10 razina blokova nakon grupiranja; nerješivu razgranatu strukturu uvoz zaustavlja uz konkretan razlog prije spremanja. Sekcije se ne pretvaraju automatski u jedan rich text.

Za vanjske slike i video koristite podržane izvore opisane u aktualnom postupku niže. Vanjske mrežne skripte i proizvoljan pristup ostatku weba ne postaju dostupni uvozom.

## 3. Cijeli primjer HTML predloška

22. 10. 2026.

Ovo je početni primjer s hero zonom, dinamičkim proizvodima i newsletterom. SKU-ovi, tekstovi i poveznica /link-na-katalog/ služe kao zamjenjive vrijednosti. Prije uvoza odaberite stvarne proizvode i odredišta svojeg projekta.

```html
<!doctype html>
<html lang="hr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Naziv kampanje</title>
  <style>
    :page { color: #172033; }
    .campaign-inner { max-width: 1480px; margin: 0 auto; padding: 24px; }
    .campaign-hero { background: #eaf2ff; }
    .campaign-heading { display: flex; justify-content: space-between; gap: 16px; align-items: center; }
    @media (max-width: 640px) { .campaign-heading { flex-wrap: wrap; } }
  </style>
</head>
<body>
  <main>
    <section class="campaign-hero" data-import-width="full">
      <div class="campaign-inner">
        <h1>Naslov kampanje</h1>
        <p>Kratak opis i glavna poruka kampanje.</p>
      </div>
    </section>
    <section>
      <div>[CMSWIDGET TYPE="PRODUCTS" PRODUCT_LIST_MODE="manual" BUILDER_PRODUCT_SKUS="123456,234567" ROW_TITLE="Izdvojene ponude" LINK_SHOW_ALL="true" LINK_SHOW_ALL_URL="/link-na-katalog/" ROW_CTA_TEXT="Prikaži sve" PRODUCT_PRESENTATION="slider"]</div>
    </section>
    <section>
      <h2>Prijavite se na newsletter</h2>
      <div>[CMSWIDGET TYPE="SIGNUP" SIGNUP_PLACEHOLDER="Vaš e-mail" SIGNUP_BUTTON_TEXT="Nastavi"]</div>
    </section>
  </main>
</body>
</html>
```

Naslov i poveznicu produktne liste zadajte u istom PRODUCTS widgetu: ROW_TITLE je Naslov liste, LINK_SHOW_ALL uključuje Prikaži sve, LINK_SHOW_ALL_URL je URL gumba, a ROW_CTA_TEXT Tekst gumba. Nakon uvoza uređuju se u Sadržaj → Naslov i poveznica. Ne dodajte zaseban HTML naslov ili link za istu listu. Kad nema vidljivih proizvoda nakon učitavanja, cijela komponenta ostaje skrivena, uključujući naslov, link i kontrole; u strukturi editora i dalje je dostupna.

Shortcode za proizvode i newsletter nalazi se u zasebnom div elementu. Izvorni HTML i CSS određuju okolni dizajn, a shortcode pretvara dinamički dio u uređivi element Page Buildera.

## 4. Širine zona i vodoravne trake

22. 10. 2026.

Za širinu razlikujte tri namjene:

- data-import-width="full" stavite na vanjsku zonu za punu širinu, primjerice hero s pozadinom preko cijele stranice. content bira širinu sadržaja; unutarnji spremnik može ograničiti tekst.

- data-rail-extent="viewport_end" označava HTML traku koja se nastavlja udesno izvan širine sadržaja.

- data-rail-extent="viewport_both" označava HTML traku koja se nastavlja do lijevog i desnog ruba.

HTML oznake trake čuvaju se pri uvozu; njihov izgled određuje CSS predloška. Za sljedeći primjer vanjska zona mora imati data-import-width="full", naslov ostaje u unutarnjem spremniku, a neposredna lista ima data-rail-track. Uključite priloženi CSS; sama oznaka ne mijenja širinu proizvoljnog HTML-a. Kartice neka imaju vlastitu širinu. Na mobitelu primjer koristi razmak od 12 px. Zona mora sadržavati HTML elemente; samostalan tekst omotajte u p ili span.

```html
<style>
  .edge-zone { --edge-gutter:20px; --edge-start:max(20px,calc((100% - 1480px)/2 + 20px)); }
  .edge-zone > [data-rail-track] { box-sizing:border-box; display:flex; gap:24px; overflow-x:auto; }
  .edge-zone > [data-rail-track] > * { flex:0 0 280px; }
  .edge-zone[data-rail-extent="viewport_end"] > [data-rail-track] { width:calc(100% - var(--edge-start)); margin-left:var(--edge-start); padding:0 var(--edge-gutter) 0 0; }
  .edge-zone[data-rail-extent="viewport_both"] > [data-rail-track] { width:100%; margin-inline:0; padding-inline:var(--edge-gutter); }
  @media(max-width:767px) { .edge-zone { --edge-gutter:12px; --edge-start:12px; } }
</style>
<section class="edge-zone" data-import-width="full" data-rail-extent="viewport_both">
  <div class="campaign-inner"><h2>Naslov trake</h2></div>
  <ul data-rail-track><li>Prva kartica</li><li>Druga kartica</li></ul>
</section>
```

Za native widget CSS iz gornjeg primjera nije potreban: zadajte CAROUSEL_EXTENT_DESKTOP="viewport_end" ili CAROUSEL_EXTENT_DESKTOP="viewport_both" uz slider odnosno rail prikaz. Naknadno uredite Prilagodba izgleda → Raspored i širina → Širina trake — Desktop: Do desnog ruba ekrana ili Do oba ruba ekrana. Naslov i kontrole ostaju u širini sadržaja, veličina kartica i mobilni raspored ostaju sačuvani. Širina zone/pozadine i širina trake su odvojene postavke.

Gotovi primjeri u katalogu pokazuju koje su opcije dopuštene za pojedinu vrstu. Za UAU ponude ili druge posebne dizajne koristite samo CARD_DESIGN vrijednosti ponuđene u aktualnom katalogu. Uvezeni raspored zatim uredite u builderu.

Za CARD_DESIGN="bf_flash" oznaku ponude i benefit postavite parametrima CARD_BADGE_TEXT="Bliskovita ponudba" i CARD_BENEFIT_TEXT="Hitro pošlo". Svaki tekst može imati do 160 znakova. Nakon uvoza otvorite karticu proizvoda i uredite odgovarajući tekst ili njegove prijevode; parametri određuju početnu vrijednost. Animirana traka je dekorativni prikaz kampanje i ne predstavlja stanje zalihe.

## 5. Newsletter i drugi obrasci

22. 10. 2026.

Za newsletter koristite SIGNUP: korisnik prvo vidi e-mail polje i gumb Nastavi, zatim GDPR privole, a prijava se potvrđuje nakon odgovora servera. Zadržite taj tijek u dizajnu. Potpisani pregled provjerava unos bez stvarne newsletter prijave.

Za rezervaciju termina ili drugi postojeći upitnik koristite QUESTIONNAIRE prema točno jednom ID-u ili CODE-u izvora. Pitanja, raspored i privole uređuju se na upitniku. U iframeu editora unos se provjerava bez slanja; zasebni pregled aktivnog javnog upitnika može poslati stvarnu prijavu uz vidljivu obavijest.

Proizvoljan HTML obrazac bez prepoznatog izvora ne dobiva automatski funkciju slanja. Pregledajte upozorenja prije spremanja.

## 6. Prompt za AI alat

22. 10. 2026.

Priložite cijeli preuzeti HTML vodič, zatim kopirajte i dopunite ovaj prompt. Zamijenite tekstove u uglatim zagradama svojim podacima. Ako imate sliku referentnog dizajna, priložite i nju.

```
Izradi responzivni HTML predložak za Page Builder prema priloženom vodiču.

Kampanja: [naziv i cilj]
Jezik i kanal: [jezik / kanal]
Vizualne smjernice: [boje, fontovi, referentni dizajn]
Sekcije: [redoslijed i sadržaj]
Proizvodi: [stvarni SKU-ovi ili točni nazivi brandova/kategorija]
Resursi: [popis slika i njihovih putanja u ZIP-u]
Odredišne poveznice: [stvarne poveznice ili jasno označene zamjene]

Vrati cijeli UTF-8 HTML dokument i popis potrebnih resursa.
Koristi samo shortcodeove i opcije iz kataloga priloženog vodiču.
Svaki dinamički izvor postavi u vlastiti HTML element.
Hero zone označi data-import-width="full", a tekst u njima poravnaj unutarnjim spremnikom.
Za newsletter koristi SIGNUP s postojećim GDPR tijekom.
Ne upisuj demonstracijske cijene, zalihe ili rate kao stvarne podatke proizvoda.
Ako podatak nedostaje, jasno navedi što urednik treba zamijeniti.
Izbjegni JavaScript kada je dovoljno CSS rješenje; poštuj opisana ograničenja runtimea.
Na kraju navedi što treba provjeriti pri uvozu i na mobitelu.
```

## 7. Provjera prije spremanja i objave

22. 10. 2026.

- Provjerite točan jezik i kanal, raspored sekcija, slike, alternativne opise i poveznice.

- Upozorenja o nepoznatim SKU-ovima, izvorima i resursima riješite prije objave. Ne predstavljajte demonstracijske brojeve kao aktualne cijene ili zalihe.

- Pregledajte Desktop i Mobitel: hero širinu, trake do ruba, čitljivost i odsutnost neželjenog vodoravnog pomicanja.

- CSS animacije vide se u pregledu uvoza; JavaScript interakcije provjerite u Nuxt pregledu.

- Nakon ručne promjene HTML-a ponovno pokrenite provjeru. Uvoz mijenja radnu kopiju; glavni Spremi potvrđuje verziju.

- Prije stvarnog testnog slanja obrasca provjerite je li to potpisani/editor pregled ili aktivan javni obrazac.

## 8. Aktualni postupak uvoza i uređivanja

22. 10. 2026.

Sljedeće detaljne upute dolaze iz iste aktualne pomoći kao zasebna sekcija HTML, ZIP i shortcodeovi. Obuhvaćaju datoteke, resurse, izolirani CSS/JS, shortcode unos, provjeru i spremanje.

### Uvoz HTML sadržaja

1. Za gotov sadržaj otvorite Izradi / uvezi → Uvezi sadržaj. Prihvaćaju se UTF-8 HTML/HTM/TXT do 1 MB ili ZIP do 100 MB.

2. Odaberite dokument i Pregled HTML-a. Pregledajte strukturu, resurse i upozorenja; nakon izmjene izvora kliknite Ponovno provjeri.

3. Odaberite zamjenu postojećeg sadržaja uz potvrdu ili dopušteno dodavanje na kraj pa Uvezi u radnu kopiju. Poništi vraća uvoz.

4. Za jednu komponentu koristite biblioteku Shortcodeovi i običan textarea. Nakon pretvorbe uređujte stvarnu komponentu, filtre i postavke u builderu.

5. HTML može sadržavati shortcodeove i inline metrike. Prije glavnog Spremi provjerite Desktop/Mobitel, poveznice, slike i dinamičke izvore.

### Datoteka, dokument i pregled

Otvorite Izradi / uvezi → Uvezi sadržaj u gornjoj traci. Radnja je dostupna kada je uvoz omogućen i imate potrebne ovlasti. Slijedite korake ispod; uvoz mijenja radnu kopiju, a glavni Spremi potvrđuje promjene u verziji.

1. **Pripremite datoteku. **Odaberite ili povucite UTF-8 HTML/HTM/TXT do 1 MB ili ZIP do 100 MB. Početni korak prikazuje datoteku i Odustani. ZIP mora sadržavati barem jedan HTML, HTM ili TXT dokument u korijenu; jedna obuhvatna mapa računa se kao korijen paketa.

2. **Odaberite HTML dokument. **Ako ZIP sadrži više dokumenata, u koraku Odaberi HTML dokument za uvoz odaberite željeni naziv. Popis se može pomicati. Kliknite Pregled HTML-a dolje desno za analizu, strukturu, pregled i upozorenja. Sam odabir dokumenta ne otvara pregled ni upozorenja. Promijeni HTML vraća na popis bez novog uploada.

3. **Pregledajte i ispravite HTML. **HTML sadržaj prikazuje cijeli izvor, uključujući style i script blokove; Struktura HTML-a pokazuje prepoznate elemente. Pri analizi velikog ili dubokog HTML-a uvoz automatski grupira uzastopne dekorativne omotače. Izvorni DOM, CSS klase, ID-jevi i razmaci ostaju očuvani; slike, tekstovi, poveznice i shortcodeovi ostaju zasebni uređivi elementi. Struktura prikazuje broj elemenata, blokova, grupiranih omotača i dubinu prije primjene.

4. Podržano je do 10.000 izvornih čvorova, 5.000 uređivih čvorova i 10 razina blokova nakon grupiranja; nerješivu razgranatu strukturu uvoz zaustavlja uz konkretan razlog prije spremanja. Sekcije se ne pretvaraju automatski u jedan rich text. Prvo učitavanje automatski analizira dokument bez izmjene sadržaja. Kod možete urediti ili zamijeniti lijepljenjem, bez novog pakiranja ZIP-a.

5. Nakon izmjene prethodna provjera prestaje vrijediti i uvoz je onemogućen: kliknite Ponovno provjeri za osvježavanje strukture, pregleda i upozorenja, uz resurse iz istog ZIP-a. HTML ostaje uređiv i nakon greške. Ispravci pojedinih dokumenata čuvaju se pri prebacivanju u otvorenom dijalogu; zatvaranje ih odbacuje.

### Provjera, primjena i spremanje

1. **Pročitajte greške i upozorenja. **Status je vidljiv ispod oba taba: zeleno znači spreman HTML, žuto dopušta nastavak uz upozorenja, a crveno traži ispravak. Više od tri upozorenja otvara Prikaži sva upozorenja. Zabranjene datoteke preskaču se uz razloge i ne blokiraju ostatak uvoza. Nedostajući SKU-ovi također ne blokiraju: ostaju sačuvani za naknadnu izmjenu, a pronađeni proizvodi prikazuju se normalno. MEDIA mjesta, prazne produktne izvore i nedostajuće resurse dopunite prije objave.

2. **Primijenite uvoz u radnu kopiju. **Zadano je Zamijeni postojeći sadržaj, uz obaveznu potvrdu zamjene. Ta opcija mijenja sadržaj i globalni CSS/JS samo u radnoj kopiji. Dodaj na kraj dostupan je bez sukoba globalnog koda; HTML s globalnim CSS/JS kodom ne može se dodati postojećem sadržaju. Ograničenje je vidljivo uz opcije. Nakon završene provjere potvrdite zamjenu ako je odabrana pa kliknite Uvezi u radnu kopiju. Jedan Poništi vraća uvoz.

3. **Uredite rezultat i spremite. **Uvezene kartice postaju blokovi sa zasebnim podelementima: na bloku uredite URL, na slici grafiku i alternativni tekst, a na tekstu naziv. Izvorne klase, redoslijed i raspored ostaju sačuvani. HTML i CSS u Prilagodbi izgleda čuva oznaku, klase, ID i atribute; klase odvojite razmakom. CMS izgled koristi CMS raspored, a Prema CSS-u izvorni okvir. Glavni blokovi nasljeđuju širinu iz Globalnih postavki kada je uključen zajednički raspored; podblokovi čuvaju izvorni CSS.

4. Za hero i druge vanjske zone pune širine u izvornom HTML-u dodajte data-import-width="full", primjerice <section data-import-width="full">…</section>. Uvoz pretvara oznaku u Raspored stranice → Puna širina i čuva je pri spremanju. Ograničite unutarnji tekst CSS-om ako treba ostati poravnat sa sadržajem. data-import-width="content" izričito bira širinu prema postavkama weba. Označena zona mora sadržavati HTML elemente; neposredni tekst omotajte u span ili p. Bez oznake ostaje postojeće ponašanje.

5. Raspored stranice omogućuje vlastite postavke ili punu širinu. Provjerite Desktop/Mobitel, sidra, slike, proizvode i interakcije pa kliknite glavni Spremi. Ne objavljujte prije provjere pregleda.

### Slike i video

1. **Provjerite slike i video. **Dopuštene slike iz ZIP-a, uključujući nekorištene, spremaju se uz stranicu i verziju u novi folder za svaki upload. Nazivi i podfolderi ostaju očuvani, a /upload/ putanje koriste i pregled i web. SVG se provjerava i čisti. Video čuva izvore, poster i standardne atribute reprodukcije; može koristiti vanjski HTTP(S) URL, postojeću /upload/ putanju ili provjereni MP4/WebM/OGV iz ZIP-a. Nedostajuće slike ne blokiraju uvoz: upozorenje navodi izvorne putanje, a crvena ikona označava problem u Strukturi. Povežite ispravnu sliku u elementu i spremite; oznaka tada nestaje.

### CSS i JavaScript

1. **Provjerite CSS i JavaScript. **CSS i JavaScript izdvajaju se u Globalni CSS i Globalni JS radne kopije. Lokalni CSS prolazi postojeće provjere. Ispravni @property i @keyframes ostaju sačuvani; Nuxt izolira nazive varijabli i animacija po verziji te usklađuje reference i inline stilove bez promjene izvornog koda. Neispravne registracije preskaču se uz upozorenje. Inline i lokalni ZIP JavaScript čuvaju funkcije, timere i DOM događaje u izoliranom runtimeu CMS stranice; podržane su i page.* naredbe. Lokalni JS ostaje privatan. Vanjske mrežne i nepodržane skripte preskaču se. Mreža, trajna pohrana i pristup ostatku storefronta nisu dopušteni. Pregled uvoza prikazuje HTML/CSS i CSS animacije bez izvršavanja skripti; interakcije provjerite u Nuxt pregledu.

### Shortcodeovi i dinamički izvori

1. **Provjerite shortcodeove i izvore. **Prazna SHORTCODE mjesta preskaču se uz upozorenje; sadržaj kasnije dodajte u builderu. CATALOGPRODUCT koristi nazive brandova i kategorija na jeziku stranice, i više naziva odvojenih zarezom. Nepoznat ili dvosmislen naziv ostavlja cijeli izvor prazan, bez širenja upita. TITLE stvara zaseban naslov; limit je cijeli broj 1–50, a 51 blokira uvoz. Uz DISPLAY_MODE__IS="slider" dodajte CAROUSEL_EXTENT_DESKTOP="viewport_end" za nastavak kartica do desnog ruba ekrana.

2. Naslov i kontrole ostaju poravnati sa sadržajem, a veličina kartica i mobilni raspored ostaju isti. Za UAU ponude tjedna koristite dva ručna CATALOGPRODUCT unosa: CARD_DESIGN="bf_flash" s jednim SKU-om te CARD_DESIGN="bf_grid" s osam SKU-ova. Gotovi raspored sprema se kao uređiv dizajn kartice; Obročno plaćanje prikazuje stvarne dostupne rate. Native [CMSWIDGET TYPE="PRODUCTS" PRODUCT_LIST_MODE="manual" BUILDER_PRODUCT_SKUS="123456,234567" PRODUCT_PRESENTATION="slider" CAROUSEL_EXTENT_DESKTOP="viewport_end"] podržava isti prikaz za ručne šifre.

3. BLOG_POSTS/PROMOTIONS bez ID-a dohvaćaju posljednje javne objave, a s ID-evima čuvaju točan izbor i redoslijed. Izbor, vrstu i broj objava kasnije mijenjate u inspectoru. STORE_LOCATOR koristi vanjske šifre i prefiks kanala: HR 1060 traži 111060. Bez popisa bira sve poslovnice kanala; ručno ispražnjen izbor ostaje prazan. Poslovnica bez koordinata ostaje u popisu. Pogrešne nazive, ID-eve i šifre ispravite u HTML-u pa ponovno provjerite ili nakon uvoza kroz odgovarajući picker.

### Newsletter i native obrasci

1. **Provjerite obrasce. **Newsletter s jasnom oznakom data-signup, data-newsletter ili newsletter/subscribe klasom i jednim email poljem koristi postojeći newsletter backend, uz izvorni HTML/CSS. Za početni prikaz email polja i gumba Nastavi s naknadnim GDPR flyoutom koristite gotov element Prijava na newsletter, odnosno [CMSWIDGET TYPE="SIGNUP" SIGNUP_PLACEHOLDER="Vaš e-mail" SIGNUP_BUTTON_TEXT="Nastavi"]. Privole se prikazuju nakon klika Nastavi, a upis slijedi tek nakon njihove potvrde i odgovora backenda. U Nuxt pregledu newsletter prijava se ne šalje. Neprepoznati HTML obrasci ostaju neaktivni uz upozorenje. Native QUESTIONNAIRE prihvaća točno jedan ID ili CODE upitnika kanala stranice; raspored se uređuje na upitniku. U iframeu editora provjerava unos bez slanja, a zasebni pregled aktivnog javnog upitnika omogućuje stvarne prijave uz vidljivu obavijest.

### Shortcodeovi

1. Odaberite Dodaj iza bloka, Dodaj iza elementa ili Dodaj unutar bloka pa Shortcodeovi. Zalijepite jednu oznaku. Primjere otvorite kroz Upute i primjeri.

2. Provjera je automatska. Ispravite crvene greške i pregledajte upozorenja pa kliknite Dodaj. Provjerite sadržaj i potvrdite glavnim Spremi.

### Kada koristiti ovaj ekran

Svaka dostupna komponenta Page Buildera ima shortcode: naslov, običan ili obogaćeni tekst, slika, gumb, odbrojavanje, banneri, proizvodi i drugi izvori. Istu komponentu možete dodati iz biblioteke, shortcodeom ili uvozom HTML-a koji sadrži shortcodeove. Nastaju obični uređivi elementi Page Buildera. Sintaksa se ne prikazuje na webu; nakon pretvorbe uređujete stvarne filtre, izvore i postavke elementa.

### Dodavanje metrike bez shortcoda

1. Dodaj sadržaj → Elementi → Kataloška metrika.

2. Odaberite Statistiku i Format. Za sažetak odaberite broj proizvoda ili modela. Preview prikazuje oblik teksta s oznakama, primjerice {BROJ} podkategorija ili od {CIJENA} €. Na webu se oznake zamjenjuju stvarnim kataloškim podacima.

3. U Kontekst izvora odaberite Izričito odabrani izvori pa kategoriju i opcionalni brand, ili naslijedite izvor bloka/kategoriju stranice.

4. Ista metrika nastaje iz CATALOG_STAT oznake. Nakon dodavanja oba ulaza imaju isti inspector; nema potrebe za uređivanjem HTML-a ili internog tokena.

### Proizvodi nakon pretvorbe

PRODUCT_CATEGORY__IS i PRODUCT_BRAND__IS pretvaraju se u stvarno odabrane kategorije i brandove konfiguratora Uvjeti. Urednik može dodati nove brandove/kategorije, promijeniti limit ili raspored i spremiti bez ponovnog pisanja shortcoda.

Shortcode unos je običan textarea. Otvorite Upute i primjeri za katalog; sintaksa primjera ne dodaje se u sadržaj stranice.

BLOG_POSTS/PROMOTIONS, STORE_LOCATOR i QUESTIONNAIRE također postaju vlastiti uređivi izvori, a ne shortcode tekst.

### Tipičan workflow

1. Dodaj iza bloka / elementa ili Dodaj unutar bloka → Shortcodeovi.

2. Zalijepite jednu oznaku do 16 KB. Cijeli primjer kopirajte iz kompaktnog kataloga ili pripadajuće podstranice pomoći. Brojevi, nazivi i URL-ovi u primjerima su ilustrativni; zamijenite ih stvarnim podacima svojeg projekta.

3. Pričekajte automatsku provjeru. Sažetak pokazuje vrstu, izvor, jezik i kanal. Provjerite mjesto umetanja na vrhu biblioteke.

4. Ispravite greške. Upozorenje dopušta dodavanje praznog/nepotpunog izvora i objašnjava što treba popraviti. Kliknite Dodaj, provjerite preview pa glavni Spremi.

Jedan unos prima jednu oznaku, bez HTML omotača i slobodnog teksta. Atributi mogu biti u više redova. Nazivi oznaka i atributa te TYPE prihvaćaju velika/mala slova.

Vrijednosti stavite u obične jednostruke ili dvostruke navodnike. Nepoznati ili ponovljeni atributi nisu dopušteni. Ista sintaksa vrijedi za HTML import, gdje izvori proizvoda i widgeti trebaju zaseban HTML element. CATALOG_STAT može stajati unutar postojećeg teksta, uključujući strong/span, i zamjenjuje samo statistički dio.

### Naknadno uređivanje i poništavanje

Nakon dodavanja uređujte native filtre, redoslijed, limit, naslov i izgled u inspectoru. Izvorni shortcode se ne primjenjuje ponovno i ne vraća stare postavke.

U filtriranom CATALOGPRODUCT obliku TITLE stvara zaseban heading h2. U CMSWIDGET komponentama TITLE je interni naziv; za javni naslov koristite HEADING i CONTENT. Naslov i izvor možete kasnije uređivati neovisno. Poništi/Ponovi za početno dodavanje obuhvaća naslov, izvor i eventualni novi blok zajedno.

Odustani ne dodaje sadržaj. Otvaranje pomoći čuva uneseni tekst. Promjena revizije ili odredišta zahtijeva novu provjeru. Nakon nejasne mrežne greške ponovno otvorite editor i provjerite je li sadržaj dodan prije ponavljanja.

### Ako nešto ne radi

****Neispravni atributi****

: Provjerite obične navodnike, naziv atributa i duplikate. Zalijepite samo jednu cijelu oznaku, bez HTML-a.

****Neispravan limit****

: Koristite cijeli broj 1–50. Prazna eksplicitna vrijednost, 0, 51 i decimalni broj blokiraju dodavanje.

****SKU zajedno s filtrima****

: PRODUCT_CODE__IS_IN prihvaća CAROUSEL_EXTENT_DESKTOP i CARD_DESIGN kada su ponuđeni u katalogu. Ne kombinirajte ga s filtrima, naslovom ili limitom; ostale postavke uredite u builderu.

****Nepoznat brand ili kategorija****

: Usporedite točan lokalizirani naziv, jezik i kanal stranice. Dvosmislen naziv ne bira se automatski. Ispravite oznaku ili izričito odaberite filtre u inspectoru.

****Prazan rezultat****

: Provjerite dostupnost, vidljivost, vrstu, razdoblje i kanal. Neuspjela referenca ne proširuje upit na cijeli katalog, sve poslovnice ili zamjenski upitnik.

****Poslovnica nije pronađena****

: Koristite vanjsku šifru poslovnice uz pravilo prefiksa kanala, ne bazni ID.

****Upitnik nije odabran****

: Zadajte točno jedan ID ili CODE i provjerite dostupnost upitnika u kanalu stranice.

****Vrsta nije ponuđena****

: Dostupne oznake prate module i mogućnosti projekta. Potreban je kompatibilan CMS modul; nedostupna vrsta ne može se uključiti ručnim lijepljenjem.

### Kako provjeriti

1. U strukturi provjerite točno mjesto, naslov i izvor. Otvorite inspector i usporedite vrijednosti sa shortcodeom.

2. Provjerite Desktop i Mobitel, broj i redoslijed kartica te CTA. Obrazac u editoru provjerava obavezna polja bez slanja. U zasebnom pregledu stranice aktivan javni upitnik šalje stvarne prijave, uz vidljivu obavijest.

3. Provjerite Poništi/Ponovi pa glavni Spremi i ponovno otvorite verziju.

### Oprez

[MEDIA], prazna SHORTCODE mjesta, legacy atributi i proizvoljni shortcode pluginovi nisu podržane oznake ovog unosa.

Dodavanje mijenja radnu kopiju. Glavni Spremi potvrđuje promjene; samo dodavanje ne objavljuje novu aktivnu verziju.

### Za support/developere

U prijavi navedite vrstu oznake, jezik/kanal, cilj dodavanja i prikazanu grešku. Ne šaljite tokene ili osobne podatke.

Builder i HTML import koriste isti native katalog, parser i razrješavanje izvora. Provjerite kompatibilnost CMS modula, reviziju radne kopije i dostupnost referenci.

### Otvaranje i uređivanje koda

1. Kliknite naziv stranice u zaglavlju i odaberite CSS i JS. Kod vrijedi samo za ovu verziju; Globalne postavke uređuju zajednički izgled weba.

2. Odaberite CSS ili JS. Promjena taba čuva unos, kursor i scroll; dostupni su Traži/zamijeni, sklapanje blokova i Poništi/Ponovi.

3. CSS koristi :page za korijen CMS sadržaja. JavaScript se izvršava izolirano unutar CMS stranice; uvezeni CSS i JS vide se u istom editoru. Limit svakog polja je 100.000 UTF-8 bajtova.

### Primjena, provjera i spremanje

1. Primijeni u radnu kopiju ili Ctrl/Cmd+S potvrđuje oba polja i osvježava pregled. Greška čuva unos i označava CSS ili JS koji treba ispraviti.

2. Pri zatvaranju s izmjenama odaberite nastavak, odbacivanje ili primjenu i zatvaranje. Provjerite izgled i interakcije na Desktopu i Mobitelu.

3. Glavni Spremi u Page Builderu prenosi radnu kopiju u verziju. Provjerite javni prikaz prije objave.

## 9. Aktualni katalog shortcodeova i opcija

22. 10. 2026.

Katalog ispod nastaje pri otvaranju ili exportu iz stvarno dostupnih definicija ovog projekta. Sadrži primjere, sve atribute, deklarirane zadane vrijednosti, dopuštene opcije i pravila. Ako zadana vrijednost nije navedena, nemojte je izmišljati. Pri kasnijoj izmjeni uputa preuzmite novi export.

Tablica poslovnica uključuje sve poslovnice, čak i skrivene ili poslovnice neaktivnog kanala. Šifre su vanjske, bez prefiksa kanala: za Big Bang Ilidža u BA stranici upišite 110, a ne 22110. Prefiks se dodaje prema kanalu stranice. Uvoz sprema i skrivenu poslovnicu; javni prikaz poštuje njezinu vidljivost. Popis se osvježava pri otvaranju pomoći ili preuzimanju exporta.

### Sintaksa i pravila

- Shortcodeovi su ulaz za pretvorbu u uređive elemente Page Buildera. Nakon pretvorbe uređujte elemente u builderu; shortcode se ne izvršava ponovno pri prikazu stranice.

- Jedan unos u biblioteci Shortcodeovi prima jednu oznaku do 16 KB, bez HTML-a i slobodnog teksta. Za više oznaka i HTML omotače koristite Uvezi HTML.

- Nazivi oznaka, atributa i TYPE prihvaćaju velika/mala slova. Vrijednosti omeđite običnim jednostrukim ili dvostrukim navodnicima. Nepoznati i ponovljeni atributi nisu dopušteni.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON atribute pišite s vanjskim jednostrukim navodnicima; sačuvajte vlastite JSON escape znakove.

- CATALOGPRODUCT po SKU-u i CATALOGPRODUCT prema filtrima dva su različita oblika. Ne miješajte njihove atribute; opcije i ograničenja svakog oblika nalaze se uz njegov primjer.

- U HTML-u svaki izvor proizvoda ili widget stavite u zaseban HTML element. CATALOG_STAT smije stajati unutar teksta. HTML oznaka data-import-width nije shortcode atribut.

- Brojevi, šifre, nazivi i URL-ovi u primjerima su ilustrativni. Zamijenite ih stvarnim podacima jezika i kanala stranice. Datoteka ne sadrži katalog stvarnih proizvoda niti korisničke podatke. Tablica poslovnica sadrži sve poslovnice iz baze, uključujući skrivene, sa šiframa bez prefiksa kanala u trenutku izvoza.

- Koristite samo navedene oznake, atribute i dopuštene opcije. Ako zadana vrijednost nije navedena, ova specifikacija je ne propisuje; provjerite komponentu u builderu. Prazna opcija označena je kao prazan niz.

- Za AI alat: pripremite HTML ili shortcodeove prema ovoj specifikaciji, zadržite traženi dizajn i navedite vrijednosti koje urednik treba zamijeniti. Provjerite uvoz, upozorenja, Desktop i Mobitel prije spremanja i objave.

### Gotovi primjeri

#### Produktni slider do desnog ruba

Zamijenite naziv branda stvarnim nazivom na jeziku stranice. Traka se nastavlja do desnog ruba ekrana.

```
[CATALOGPRODUCT PRODUCT_BRAND__IS="Samsung" DISPLAY_MODE__IS="slider" NUMBER_OF_ITEMS__IS="12" CAROUSEL_EXTENT_DESKTOP="viewport_end"]
```

#### UAU ponude: jedan izdvojeni + osam proizvoda

Dva odvojena shortcoda. Zamijenite svih devet SKU šifri; dizajn se nakon uvoza uređuje u dizajneru kartice proizvoda.

```
[CATALOGPRODUCT PRODUCT_CODE__IS_IN="123456" CARD_DESIGN="bf_flash"]
[CATALOGPRODUCT PRODUCT_CODE__IS_IN="234567,345678,456789,567890,678901,789012,890123,901234" CARD_DESIGN="bf_grid"]
```

#### Newsletter s GDPR privolama

E-mail → Nastavi → GDPR privole → potvrda prijave. Potpisani pregled provjerava unos bez stvarne prijave.

```
[CMSWIDGET TYPE="SIGNUP" SIGNUP_PLACEHOLDER="Vaš e-mail" SIGNUP_BUTTON_TEXT="Nastavi"]
```

#### Hero zona preko cijele širine — HTML oznaka

Na HTML spremnik zone stavite data-import-width="full". Vrijednost content bira širinu sadržaja. Oznaka se pri uvozu prenosi u postavke širine bloka.

```html
<section data-import-width="full">
  <h1>Naslov kampanje</h1>
  <p>Sadržaj hero zone.</p>
</section>
```

#### Kategorije i recenzije do desnog ruba

Ovo je početni blok vodoravne trake. Nakon dodavanja unutar njega dodajte kartice kategorija ili zasebne recenzije. U postojeći BF HTML prenesite i CSS trake iz predloška; sam atribut na omotaču ne mijenja unutarnju traku elementa Recenzije ili Kartice sadržaja.

```
[CMSWIDGET TYPE="CONTAINER" CONTENT_DISPLAY="rail" CAROUSEL_EXTENT_DESKTOP="viewport_end"]
```

#### Traka do lijevog i desnog ruba

Postojeća postavka Raspored i širina → Širina trake — Desktop → Do oba ruba ekrana. Proširuje traku u oba smjera; naslov i kontrole ostaju u širini sadržaja. Kartice dodajte unutar bloka. Na mobitelu vrijedi postojeći raspored.

```
[CMSWIDGET TYPE="CONTAINER" CONTENT_DISPLAY="rail" CAROUSEL_EXTENT_DESKTOP="viewport_both"]
```

### Proizvodi i ponude

#### Proizvodi po šiframa `products`

Ručni popis SKU šifri u zadanom redoslijedu. Raspored i izgled kartice biraju se neovisno; početni prikaz je slider sa standardnim karticama.

##### Primjeri

```
[CATALOGPRODUCT PRODUCT_CODE__IS_IN="123456,234567"]
```

```
[CATALOGPRODUCT PRODUCT_CODE__IS_IN="123456" CARD_DESIGN="bf_flash" CARD_BADGE_TEXT="Bliskovita ponudba" CARD_BENEFIT_TEXT="Hitro pošlo"]
```

```
[CATALOGPRODUCT PRODUCT_CODE__IS_IN="234567,345678,456789,567890,678901,789012,890123,901234" CARD_DESIGN="bf_grid"]
```

```
[CATALOGPRODUCT PRODUCT_CODE__IS_IN="123456,234567,345678" PRODUCT_PRESENTATION="slider" DISPLAY_TOTAL_ROWS="1"]
```

```
[CATALOGPRODUCT PRODUCT_CODE__IS_IN="123456,234567,345678" PRODUCT_PRESENTATION="grid" DISPLAY_TOTAL_ROWS="all"]
```

```
[CATALOGPRODUCT PRODUCT_CODE__IS_IN="123456,234567,345678" PRODUCT_PRESENTATION="double" DISPLAY_TOTAL_ROWS="all"]
```

```
[CATALOGPRODUCT PRODUCT_CODE__IS_IN="123456,234567,345678" PRODUCT_PRESENTATION="single" DISPLAY_TOTAL_ROWS="1"]
```

```
[CATALOGPRODUCT PRODUCT_CODE__IS_IN="123456,234567" PRODUCT_PRESENTATION="grid" CARD_TYPE="compact" ITEMS_PER_ROW_DESKTOP="2" ITEMS_PER_ROW_MOBILE="1" DISPLAY_TOTAL_ROWS="all" DISPLAY_LIMIT="12"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `PRODUCT_CODE__IS_IN` | Numeričke SKU šifre odvojene zarezom. Čuvaju se početne nule i redoslijed. | Da | `—` |  |
| `CAROUSEL_EXTENT_DESKTOP` | Širina produktne trake na Desktopu: viewport_end nastavlja kartice udesno, viewport_both širi traku do lijevog i desnog ruba, content ostaje u širini sadržaja. Naslov, veličina kartica i Mobitel ostaju prema bloku. Koristite slider prikaz. | Ne | `—` | `"content"` `"viewport_end"` `"viewport_both"` |
| `CARD_DESIGN` | bf_flash: jedan izdvojeni proizvod u vodoravnom rasporedu. bf_grid: do osam proizvoda, četiri stupca na desktopu i dva na mobitelu. Dizajn se sprema kao uređiva kartica proizvoda, sa stvarnim podacima kataloga. | Ne | `—` | `"bf_flash"` `"bf_grid"` |
| `CARD_BADGE_TEXT` | Tekst oznake uz bf_flash, npr. Bliskovita ponudba. Od 1 do 160 znakova; može izostati za zadani HR/SI tekst. | Ne | `—` |  |
| `CARD_BENEFIT_TEXT` | Tekst benefita uz bf_flash, npr. Hitro pošlo. Od 1 do 160 znakova; može izostati za zadani HR/SI tekst. | Ne | `—` |  |
| `PRODUCT_PRESENTATION` | Raspored proizvoda. single je prečac za listu s detaljnom karticom, double za grid s dvije kompaktne kartice u retku. | Ne | `"slider"` | `"slider"` `"grid"` `"list"` `"single"` `"double"` |
| `CARD_TYPE` | Izgled pojedine kartice, neovisno o rasporedu. Ako izostane: standard za slider/grid, compact za double, detailed za single/list. | Ne | `—` | `"standard"` `"compact"` `"detailed"` `"minimal"` |
| `ITEMS_PER_ROW_DESKTOP` | Proizvoda u retku na desktopu, 1–12. Zadano: slider 4, grid 5, double 2, single/list 1. | Ne | `—` |  |
| `ITEMS_PER_ROW_MOBILE` | Proizvoda u retku na mobitelu, 1–12. Zadano: slider 1, grid/double 2, single/list 1. | Ne | `—` |  |
| `DISPLAY_TOTAL_ROWS` | 1–4 retka. U slideru određuje retke po koraku; u gridu/listi broj redaka na desktopu. all ili 0 ispisuje sve retke grida/liste. Mobitel zadržava isti skup proizvoda. | Ne | `"1"` | `"1"` `"2"` `"3"` `"4"` `"all"` |
| `DISPLAY_LIMIT` | Maksimalan ukupan broj proizvoda, 1–50. Ne određuje broj stupaca. | Ne | `"12"` |  |
| `PRODUCT_CARD_TYPE` | Alternativni naziv za CARD_TYPE. | Ne | `—` | `"standard"` `"compact"` `"detailed"` `"minimal"` |
| `DISPLAY_MODE__IS` | Stariji naziv za PRODUCT_PRESENTATION. Ne zadajte oba naziva s različitim vrijednostima. | Ne | `—` | `"default"` `"slider"` `"grid"` `"list"` `"single"` `"double"` |

##### Važne napomene i naknadno uređivanje

- SKU pronađite u katalogu proizvoda, u polju Šifra. Nedostajuće šifre ostaju sačuvane uz upozorenje; pronađeni proizvodi se prikazuju.

- Prazan popis bez CARD_DESIGN ostaje prazan ručni izvor. Raspored, karticu, stupce, retke i limit možete zadati shortcodeom; naslov naknadno uredite u builderu. Ovaj oblik ne prihvaća TITLE ni filtre. PRODUCT_ID__IS_IN i LIST_CODE nisu podržani atributi ovog unosa.

- Za UAU ponude tjedna dodajte dva odvojena shortcoda: bf_flash s jednim SKU-om, zatim bf_grid s osam SKU-ova. Cijene i rate dolaze iz kataloga. Oznaku i benefit zadajte kroz CARD_BADGE_TEXT i CARD_BENEFIT_TEXT; nakon uvoza uređuju se kao tekstovi kartice u dizajneru, uključujući prijevode. Upisani tekst prenosi se doslovno. Vanjski BF HTML/CSS čuva animiranu traku i pozadinu; traka je kampanjski vizual, a ne izračun prodane zalihe.

- Raspored i vrsta kartice su neovisni. slider: standard, 4/1 stupac; grid: standard, 5/2; double: compact, 2/2; single/list: detailed, 1/1. Eksplicitni CARD_TYPE i stupci imaju prednost pred početnim izgledom prečaca. Limit je ukupni maksimum; retci slidera ne režu cijelu listu. Grid/lista s konačnim brojem redaka ispisuje najviše desktop stupci × retci, a mobitel prelama isti skup. DISPLAY_TOTAL_ROWS="all" ispisuje sve retke grida/liste.

#### Proizvodi prema filtrima `products_filtered`

Brandovi i kategorije prema nazivima na jeziku stranice.

##### Primjeri

```
[CATALOGPRODUCT PRODUCT_BRAND__IS="Samsung" DISPLAY_MODE__IS="grid" NUMBER_OF_ITEMS__IS="10"]
```

```
[CATALOGPRODUCT PRODUCT_BRAND__IS="Samsung" DISPLAY_MODE__IS="slider" NUMBER_OF_ITEMS__IS="12" CAROUSEL_EXTENT_DESKTOP="viewport_end"]
```

```
[CATALOGPRODUCT PRODUCT_BRAND__IS="Samsung, Apple" PRODUCT_CATEGORY__IS="Pametni telefoni, Tableti" DISPLAY_MODE__IS="grid" NUMBER_OF_ITEMS__IS="10" TITLE="Odabrani telefoni i tableti" SHOW_ALL="true" SHOW_ALL_URL__IS="/katalog/telefoni/?akcija=1"]
```

```
[CATALOGPRODUCT PRODUCT_BRAND__IS="Samsung" PRODUCT_PRESENTATION="slider" DISPLAY_TOTAL_ROWS="1"]
```

```
[CATALOGPRODUCT PRODUCT_BRAND__IS="Samsung" PRODUCT_PRESENTATION="grid" DISPLAY_TOTAL_ROWS="all"]
```

```
[CATALOGPRODUCT PRODUCT_BRAND__IS="Samsung" PRODUCT_PRESENTATION="double" DISPLAY_TOTAL_ROWS="all"]
```

```
[CATALOGPRODUCT PRODUCT_BRAND__IS="Samsung" PRODUCT_PRESENTATION="single" DISPLAY_TOTAL_ROWS="1"]
```

```
[CATALOGPRODUCT PRODUCT_BRAND__IS="Samsung" PRODUCT_PRESENTATION="grid" CARD_TYPE="compact" ITEMS_PER_ROW_DESKTOP="2" ITEMS_PER_ROW_MOBILE="1" DISPLAY_TOTAL_ROWS="all" DISPLAY_LIMIT="12"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `PRODUCT_BRAND__IS` | Do 50 naziva brandova odvojenih zarezom. Može izostati ako postoji kategorija. | Ne | `—` |  |
| `PRODUCT_CATEGORY__IS` | Do 50 naziva kategorija na jeziku stranice, odvojenih zarezom. Može izostati ako postoji brand. | Ne | `—` |  |
| `DISPLAY_MODE__IS` | Stariji naziv za PRODUCT_PRESENTATION. Ne zadajte oba naziva s različitim vrijednostima. | Ne | `—` | `"default"` `"slider"` `"grid"` `"list"` `"single"` `"double"` |
| `CAROUSEL_EXTENT_DESKTOP` | Širina produktne trake na Desktopu: viewport_end nastavlja kartice udesno, viewport_both širi traku do lijevog i desnog ruba, content ostaje u širini sadržaja. Naslov, veličina kartica i Mobitel ostaju prema bloku. Koristite slider prikaz. | Ne | `—` | `"content"` `"viewport_end"` `"viewport_both"` |
| `NUMBER_OF_ITEMS__IS` | Ukupan broj kartica, ne broj stupaca. Cijeli broj od 1 do 50. | Ne | `"12"` |  |
| `TITLE` | Neprazan tekst dodaje zaseban uređivi naslov h2 ispred proizvoda. Prazan tekst ne dodaje naslov. | Ne | `—` |  |
| `SHOW_ALL` | Prikaz gumba za sve proizvode. | Ne | `"false"` | `"true"` `"false"` |
| `SHOW_ALL_URL__IS` | Poveznica gumba; čuva putanju i query. SHOW_ALL=true bez URL-a daje upozorenje i skriva gumb. Sam URL ne uključuje gumb. | Ne | `—` |  |
| `PRODUCT_PRESENTATION` | Raspored proizvoda. single je prečac za listu s detaljnom karticom, double za grid s dvije kompaktne kartice u retku. | Ne | `"slider"` | `"slider"` `"grid"` `"list"` `"single"` `"double"` |
| `CARD_TYPE` | Izgled pojedine kartice, neovisno o rasporedu. Ako izostane: standard za slider/grid, compact za double, detailed za single/list. | Ne | `—` | `"standard"` `"compact"` `"detailed"` `"minimal"` |
| `ITEMS_PER_ROW_DESKTOP` | Proizvoda u retku na desktopu, 1–12. Zadano: slider 4, grid 5, double 2, single/list 1. | Ne | `—` |  |
| `ITEMS_PER_ROW_MOBILE` | Proizvoda u retku na mobitelu, 1–12. Zadano: slider 1, grid/double 2, single/list 1. | Ne | `—` |  |
| `DISPLAY_TOTAL_ROWS` | 1–4 retka. U slideru određuje retke po koraku; u gridu/listi broj redaka na desktopu. all ili 0 ispisuje sve retke grida/liste. Mobitel zadržava isti skup proizvoda. | Ne | `"1"` | `"1"` `"2"` `"3"` `"4"` `"all"` |
| `DISPLAY_LIMIT` | Maksimalan ukupan broj proizvoda, 1–50. Ne određuje broj stupaca. | Ne | `"12"` |  |
| `PRODUCT_CARD_TYPE` | Alternativni naziv za CARD_TYPE. | Ne | `—` | `"standard"` `"compact"` `"detailed"` `"minimal"` |

##### Važne napomene i naknadno uređivanje

- Nazive pronađite u katalogu brandova i kategorija na jeziku stranice. Jezik administracije ne određuje jezik naziva. default, prazno ili izostavljen prikaz koristi slider sa standardnom karticom.

- OR vrijedi unutar popisa, AND između brandova i kategorija: (Samsung ili Apple) i (Pametni telefoni ili Tableti).

- Filtri kategorija biraju izravno povezane proizvode. Za podkategorije dodajte njihove nazive u popis; kataloška statistika kategorije zasebno uključuje i podkategorije.

- Nepostojeći ili dvosmislen naziv ostavlja cijeli izvor prazan. Bez brandova i kategorija ne dohvaća se cijeli katalog. Ispravite oznaku ili naknadno izričito odaberite filtre u inspectoru.

- Raspored i vrsta kartice su neovisni. slider: standard, 4/1 stupac; grid: standard, 5/2; double: compact, 2/2; single/list: detailed, 1/1. Eksplicitni CARD_TYPE i stupci imaju prednost pred početnim izgledom prečaca. Limit je ukupni maksimum; retci slidera ne režu cijelu listu. Grid/lista s konačnim brojem redaka ispisuje najviše desktop stupci × retci, a mobitel prelama isti skup. DISPLAY_TOTAL_ROWS="all" ispisuje sve retke grida/liste.

#### Product list `PRODUCTS`

Lista proizvoda s uređivim izvorom, rasporedom i dizajnom kartica.

##### Primjeri

```
[CMSWIDGET TYPE="PRODUCTS" PRODUCT_LIST_MODE="manual" BUILDER_PRODUCT_SKUS="123456,234567"]
```

```
[CMSWIDGET TYPE="PRODUCTS" PRODUCT_LIST_MODE="manual" BUILDER_PRODUCT_SKUS="123456,234567" ROW_TITLE="Izdvojene ponude" LINK_SHOW_ALL="true" LINK_SHOW_ALL_URL="/link-na-katalog/" ROW_CTA_TEXT="Prikaži sve" PRODUCT_PRESENTATION="slider" CAROUSEL_EXTENT_DESKTOP="viewport_end"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | PRODUCTS | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `PRODUCT_LIST_MODE` | product list mode | Ne | `—` |  |
| `OBJECT_CATALOGLIST` | object cataloglist | Ne | `—` |  |
| `BUILDER_PRODUCT_SKUS` | builder product skus | Ne | `—` |  |
| `MANUAL_PRODUCTS_JSON` | manual products json Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |
| `MANUAL_PRODUCT_SOURCE` | manual product source | Ne | `—` |  |
| `MANUAL_CATALOG_REQUEST` | manual catalog request | Ne | `—` |  |
| `FILTER_LIMIT` | filter limit | Ne | `—` |  |
| `FILTER_SORT` | filter sort | Ne | `—` |  |
| `FILTER_FALLBACK_MODE` | filter fallback mode | Ne | `—` |  |
| `FILTER_WINNING_OFFER_SELLER_SCOPE` | filter winning offer seller scope | Ne | `—` |  |
| `FILTER_CONFIG_JSON` | filter config json Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |
| `FILTER_INCLUDE_CATEGORY_CODE` | filter include category code | Ne | `—` |  |
| `FILTER_INCLUDE_BRAND_CODE` | filter include brand code | Ne | `—` |  |
| `FILTER_INCLUDE_SELLER_CODE` | filter include seller code | Ne | `—` |  |
| `FILTER_INCLUDE_PRODUCT_CODE` | filter include product code | Ne | `—` |  |
| `FILTER_INCLUDE_PRICE_OPERATOR` | filter include price operator | Ne | `—` |  |
| `FILTER_INCLUDE_PRICE_MIN` | filter include price min | Ne | `—` |  |
| `FILTER_INCLUDE_PRICE_MAX` | filter include price max | Ne | `—` |  |
| `FILTER_INCLUDE_EXTRA_RULES` | filter include extra rules | Ne | `—` |  |
| `FILTER_INCLUDE_GROUPS_JSON` | filter include groups json | Ne | `—` |  |
| `FILTER_EXCLUDE_CATEGORY_CODE` | filter exclude category code | Ne | `—` |  |
| `FILTER_EXCLUDE_BRAND_CODE` | filter exclude brand code | Ne | `—` |  |
| `FILTER_EXCLUDE_SELLER_CODE` | filter exclude seller code | Ne | `—` |  |
| `FILTER_EXCLUDE_PRODUCT_CODE` | filter exclude product code | Ne | `—` |  |
| `FILTER_EXCLUDE_PRICE_OPERATOR` | filter exclude price operator | Ne | `—` |  |
| `FILTER_EXCLUDE_PRICE_MIN` | filter exclude price min | Ne | `—` |  |
| `FILTER_EXCLUDE_PRICE_MAX` | filter exclude price max | Ne | `—` |  |
| `FILTER_EXCLUDE_EXTRA_RULES` | filter exclude extra rules | Ne | `—` |  |
| `FILTER_EXCLUDE_GROUPS_JSON` | filter exclude groups json | Ne | `—` |  |
| `FILTER_ADVANCED_INCLUDE_GROUPS` | filter advanced include groups | Ne | `—` |  |
| `FILTER_ADVANCED_EXCLUDE_GROUPS` | filter advanced exclude groups | Ne | `—` |  |
| `FILTER_GLOBAL_EXCLUDE_CODES` | filter global exclude codes | Ne | `—` |  |
| `FILTER_GLOBAL_EXCLUDE_PATTERNS` | filter global exclude patterns | Ne | `—` |  |
| `FILTER_FORCE_INCLUDE_CODES` | filter force include codes | Ne | `—` |  |
| `FILTER_FORCE_INCLUDE_PATTERNS` | filter force include patterns | Ne | `—` |  |
| `FILTER_FORCE_INCLUDE_POSITION` | filter force include position | Ne | `—` |  |
| `ROW_TITLE` | Naslov liste, u istoj komponenti kao proizvodi. | Ne | `—` |  |
| `ROW_CTA_TEXT` | Tekst gumba uz naslov, primjerice Prikaži sve ili Prikaži vse. | Ne | `—` |  |
| `LINK_SHOW_ALL` | Prikazuje poveznicu uz naslov; true ili false. | Ne | `—` |  |
| `LINK_SHOW_ALL_URL` | URL gumba Prikaži sve. | Ne | `—` |  |
| `PRODUCT_CARD_JSON` | Dizajn kartice proizvoda Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |
| `PRODUCT_CARD_TYPE` | Vrsta kartice | Ne | `—` | `""` `"standard"` `"compact"` `"detailed"` `"minimal"` |
| `PRODUCT_PRESENTATION` | Raspored proizvoda. single je prečac za listu s detaljnom karticom, double za grid s dvije kompaktne kartice u retku. | Ne | `"slider"` | `"slider"` `"grid"` `"list"` `"single"` `"double"` |
| `PRODUCT_CAROUSEL_ARROWS` | Strelice carousela proizvoda | Ne | `—` | `""` `"top_end"` `"sides"` `"bottom_end"` `"none"` |
| `CAROUSEL_EXTENT_DESKTOP` | Širina trake — Desktop | Ne | `—` | `""` `"content"` `"viewport_end"` `"viewport_both"` |
| `DISPLAY_TYPE` | display type | Ne | `—` |  |
| `DISPLAY_TOTAL_ROWS` | 1–4 retka. U slideru određuje retke po koraku; u gridu/listi broj redaka na desktopu. all ili 0 ispisuje sve retke grida/liste. Mobitel zadržava isti skup proizvoda. | Ne | `"1"` | `"1"` `"2"` `"3"` `"4"` `"all"` |
| `DISPLAY_LIMIT` | Maksimalan ukupan broj proizvoda, 1–50. Ne određuje broj stupaca. | Ne | `"12"` |  |
| `ITEMS_PER_ROW_DESKTOP` | Proizvoda u retku na desktopu, 1–12. Zadano: slider 4, grid 5, double 2, single/list 1. | Ne | `—` |  |
| `ITEMS_PER_ROW_MOBILE` | Proizvoda u retku na mobitelu, 1–12. Zadano: slider 1, grid/double 2, single/list 1. | Ne | `—` |  |
| `DISPLAY_SORT` | display sort | Ne | `—` |  |
| `CARD_PRESET` | Gotov izgled kartice | Ne | `—` | `""` `"circle-category"` `"locked-category"` `"featured-product"` `"editorial-card"` |
| `CARD_SURFACE` | Površina kartice | Ne | `—` | `""` `"white"` `"dark"` `"transparent"` |
| `CARD_IMAGE_RATIO` | Omjer slike kartice | Ne | `—` | `""` `"square"` `"landscape"` `"portrait"` |
| `CARD_IMAGE_FIT` | Prikaz slike kartice | Ne | `—` | `""` `"cover"` `"contain"` |
| `CARD_BADGE_STYLE` | Prikaz oznake kartice | Ne | `—` | `""` `"pill"` `"none"` |
| `CARD_PADDING` | Unutarnji odmak kartice (px) | Ne | `—` |  |
| `CARD_RADIUS` | Zaobljenje kartice (px) | Ne | `—` |  |
| `CARD_TITLE_SIZE` | Veličina naslova kartice (px) | Ne | `—` |  |
| `CARD_TYPE` | Izgled pojedine kartice, neovisno o rasporedu. Ako izostane: standard za slider/grid, compact za double, detailed za single/list. | Ne | `—` | `"standard"` `"compact"` `"detailed"` `"minimal"` |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

- Naslov, poveznica i proizvodi su jedan uređivi element. Nakon uvoza polja su u Sadržaj → Naslov i poveznica. Ne dodajte zaseban HTML naslov ili link za istu listu. Kad lista završi učitavanje bez vidljivih proizvoda, cijela komponenta ostaje skrivena na webu, uključujući naslov, poveznicu i kontrole. U strukturi editora ostaje dostupna za uređivanje.

#### Odbrojavanje `COUNTDOWN`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="COUNTDOWN" COUNTDOWN_TARGET="end" CAMPAIGN_END="2026-11-30 23:59:59"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | COUNTDOWN | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `COUNTDOWN_TARGET` | Odbrojavanje akcije (counter) | Ne | `—` | `""` `"start"` `"end"` |
| `CAMPAIGN_START` | Početak akcije | Ne | `—` |  |
| `CAMPAIGN_END` | Završetak akcije | Ne | `—` |  |
| `COUNTDOWN_STYLE` | Izgled countera | Ne | `—` | `"plain"` `"light-cards"` `"dark-cards"` `"brand-cards"` |
| `COUNTDOWN_NUMBER_COLOR_STYLE` | Boja brojki | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `COUNTDOWN_UNIT_COLOR_STYLE` | Boja oznaka dana/sati/min/sek | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `COUNTDOWN_CELL_SURFACE_STYLE` | Boja kartice | Ne | `—` | `""` `"counter-surface-transparent"` `"counter-surface-light"` `"counter-surface-dark"` `"counter-surface-blue"` |
| `COUNTDOWN_CELL_WIDTH` | Širina ćelije (px) | Ne | `—` |  |
| `COUNTDOWN_CELL_WIDTH_MOBILE` | Širina ćelije — Mobitel (px) | Ne | `—` |  |
| `COUNTDOWN_GAP` | Razmak ćelija (px) | Ne | `—` |  |
| `COUNTDOWN_GAP_MOBILE` | Razmak ćelija — Mobitel (px) | Ne | `—` |  |
| `COUNTDOWN_CELL_PADDING` | Unutarnji odmak ćelije (px) | Ne | `—` |  |
| `COUNTDOWN_CELL_PADDING_MOBILE` | Unutarnji odmak ćelije — Mobitel (px) | Ne | `—` |  |
| `COUNTDOWN_CELL_RADIUS` | Zaobljenje ćelije (px) | Ne | `—` |  |
| `COUNTDOWN_CELL_RADIUS_MOBILE` | Zaobljenje ćelije — Mobitel (px) | Ne | `—` |  |
| `COUNTDOWN_CELL_BORDER_WIDTH` | Obrub ćelije (px) | Ne | `—` |  |
| `COUNTDOWN_CELL_BORDER_WIDTH_MOBILE` | Obrub ćelije — Mobitel (px) | Ne | `—` |  |
| `COUNTDOWN_NUMBER_SIZE` | Veličina brojke (px) | Ne | `—` |  |
| `COUNTDOWN_NUMBER_SIZE_MOBILE` | Veličina brojke — Mobitel (px) | Ne | `—` |  |
| `COUNTDOWN_NUMBER_WEIGHT` | Debljina brojke | Ne | `—` | `400` `500` `600` `700` `800` `900` |
| `COUNTDOWN_UNIT_SIZE` | Veličina oznake (px) | Ne | `—` |  |
| `COUNTDOWN_UNIT_SIZE_MOBILE` | Veličina oznake — Mobitel (px) | Ne | `—` |  |
| `COUNTDOWN_UNIT_LETTER_SPACING` | Razmak slova oznake (em) | Ne | `—` |  |
| `COUNTDOWN_UNIT_LETTER_SPACING_MOBILE` | Razmak slova oznake — Mobitel (em) | Ne | `—` |  |
| `COUNTDOWN_MOBILE_FLUID` | Rastegni ćelije na mobitelu | Ne | `—` |  |
| `COUNTDOWN_ALIGN` | Poravnanje odbrojavanja | Ne | `—` | `"start"` `"center"` `"end"` |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Tjedne ponude `TIMELINE`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="TIMELINE" TIMELINE_ITEMS='[{"title":"Black Friday","start":"2026-11-23T00:00:00+01:00","end":"2026-11-30T23:59:59+01:00","text":"Ponude za članove"}]']
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | TIMELINE | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `TIMELINE_ITEMS` | Tjedni Vrijednost je JSON; koristite vanjske jednostruke navodnike. Polja stavke: title, start, end, icon, text. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

### Obrasci i prijave

#### Prijava na newsletter `SIGNUP`

E-mail polje i gumb Nastavi otvaraju GDPR privole; prijava se potvrđuje nakon odgovora servera.

##### Primjeri

```
[CMSWIDGET TYPE="SIGNUP" SIGNUP_PLACEHOLDER="Vaš e-mail" SIGNUP_BUTTON_TEXT="Nastavi"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | SIGNUP | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `SIGNUP_PLACEHOLDER` | Primjer e-mail adrese | Ne | `—` |  |
| `SIGNUP_BUTTON_TEXT` | Tekst gumba prijave | Ne | `—` |  |
| `SIGNUP_SUCCESS_PRESET` | Poruka nakon prijave | Ne | `—` | `"site"` `"short"` |
| `SIGNUP_MAX_WIDTH_DESKTOP` | Najveća širina prijave — Desktop (px) | Ne | `—` |  |
| `SIGNUP_MAX_WIDTH_MOBILE` | Najveća širina prijave — Mobitel (px) | Ne | `—` |  |
| `SIGNUP_LAYOUT_DESKTOP` | Raspored prijave — Desktop | Ne | `—` | `"row"` `"stack"` |
| `SIGNUP_LAYOUT_MOBILE` | Raspored prijave — Mobitel | Ne | `—` | `""` `"row"` `"stack"` |
| `SIGNUP_GAP` | Razmak prijave (px) | Ne | `—` |  |
| `SIGNUP_GAP_MOBILE` | Razmak prijave — Mobitel (px) | Ne | `—` |  |
| `SIGNUP_INPUT_SURFACE` | Površina polja | Ne | `—` | `"transparent"` `"light"` `"dark"` |
| `SIGNUP_BUTTON_SURFACE` | Površina gumba | Ne | `—` | `"gradient"` `"blue"` `"turquoise"` `"white"` |
| `SIGNUP_INPUT_BORDER_COLOR` | Boja obruba polja | Ne | `—` |  |
| `SIGNUP_INPUT_TEXT_COLOR` | Boja teksta polja | Ne | `—` |  |
| `SIGNUP_BUTTON_TEXT_COLOR` | Boja teksta gumba | Ne | `—` |  |
| `SIGNUP_INPUT_RADIUS` | Zaobljenje polja (px) | Ne | `—` |  |
| `SIGNUP_INPUT_RADIUS_MOBILE` | Zaobljenje polja — Mobitel (px) | Ne | `—` |  |
| `SIGNUP_BUTTON_RADIUS` | Zaobljenje gumba (px) | Ne | `—` |  |
| `SIGNUP_BUTTON_RADIUS_MOBILE` | Zaobljenje gumba — Mobitel (px) | Ne | `—` |  |
| `SIGNUP_INPUT_PADDING` | Unutarnji odmak polja (px) | Ne | `—` |  |
| `SIGNUP_INPUT_PADDING_MOBILE` | Unutarnji odmak polja — Mobitel (px) | Ne | `—` |  |
| `SIGNUP_BUTTON_PADDING` | Okomiti odmak gumba (px) | Ne | `—` |  |
| `SIGNUP_BUTTON_PADDING_MOBILE` | Okomiti odmak gumba — Mobitel (px) | Ne | `—` |  |
| `SIGNUP_BUTTON_PADDING_INLINE` | Vodoravni odmak gumba (px) | Ne | `—` |  |
| `SIGNUP_BUTTON_PADDING_INLINE_MOBILE` | Vodoravni odmak gumba — Mobitel (px) | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

- Početni prikaz sadrži e-mail polje i gumb Nastavi. Klik otvara GDPR flyout s privolama postojećeg newsletter obrasca. Upis slijedi tek nakon potvrde privola i odgovora backenda; potpisani pregled provjerava unos bez stvarne prijave.

#### Upitnik / obrazac `QUESTIONNAIRE`

Postojeći upitnik, kontakt ili rezervacija termina prema ID-u ili oznaci izvora.

##### Primjeri

```
[CMSWIDGET TYPE="QUESTIONNAIRE" ID="321"]
```

```
[CMSWIDGET TYPE="QUESTIONNAIRE" CODE="kontakt"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | QUESTIONNAIRE | Da | `—` |  |
| `ID` | Pozitivan cijeli ID upitnika. Zadajte točno jedan ID ili CODE. | Ne | `—` |  |
| `CODE` | Oznaka upitnika, 1–30 slova, znamenki, _ ili -. Koristite umjesto ID-a. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- ID ili oznaku pronađite u evidenciji upitnika. Oba selectora zajedno ili nijedan daju grešku. Nedostupna referenca ostaje prazna uz upozorenje, bez zamjenskog upitnika.

- Polja, raspored i privole uređuju se na upitniku. Obrazac u editoru provjerava unos bez slanja. Zasebni pregled stranice može slati stvarne prijave samo kroz aktivan javni upitnik, uz vidljivu obavijest. Javni obrazac poštuje aktivno razdoblje i kanal.

- Podržani su postojeći samostalni Lead Generation i jednostavni upitnici. Upload, autocomplete, grananje, kviz i kontekst narudžbe ovim unosom ne postaju podržani.

### Tekst i mediji

#### Naslov `HEADING`

Javni naslov sekcije; odaberite razinu naslova i njegov tekst.

##### Primjeri

```
[CMSWIDGET TYPE="HEADING" CONTENT="Naslov akcije" HEADING_LEVEL="h2"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | HEADING | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `ELEMENT_FONT_FAMILY` | Font | Ne | `—` | `""` `"site"` `"font-cms-inter"` `"font-site"` `"font-arial"` `"font-georgia"` |
| `ELEMENT_FONT_SIZE` | Veličina (px) | Ne | `—` |  |
| `ELEMENT_FONT_SIZE_MOBILE` | Veličina (px) | Ne | `—` |  |
| `ELEMENT_FONT_WEIGHT` | Debljina | Ne | `—` | `""` `300` `400` `500` `600` `700` `800` `900` |
| `ELEMENT_LINE_HEIGHT` | Visina retka | Ne | `—` |  |
| `ELEMENT_LINE_HEIGHT_MOBILE` | Visina retka | Ne | `—` |  |
| `ELEMENT_LETTER_SPACING` | Razmak slova (em) | Ne | `—` |  |
| `ELEMENT_LETTER_SPACING_MOBILE` | Razmak slova (em) | Ne | `—` |  |
| `ELEMENT_TEXT_TRANSFORM` | Velika/mala slova | Ne | `—` | `""` `"none"` `"uppercase"` `"lowercase"` `"capitalize"` |
| `ELEMENT_TEXT_COLOR` | Boja teksta | Ne | `—` |  |
| `CONTENT` | content | Ne | `—` |  |
| `HEADING_LEVEL` | HTML razina naslova | Ne | `—` | `"h1"` `"h2"` `"h3"` `"h4"` |
| `DATA_BINDING_JSON` | data binding json Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |
| `CATALOG_STAT_SLOTS` | Dinamičke statistike teksta Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Običan tekst `TEXT`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="TEXT" CONTENT="Običan tekst."]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | TEXT | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `ELEMENT_FONT_FAMILY` | Font | Ne | `—` | `""` `"site"` `"font-cms-inter"` `"font-site"` `"font-arial"` `"font-georgia"` |
| `ELEMENT_FONT_SIZE` | Veličina (px) | Ne | `—` |  |
| `ELEMENT_FONT_SIZE_MOBILE` | Veličina (px) | Ne | `—` |  |
| `ELEMENT_FONT_WEIGHT` | Debljina | Ne | `—` | `""` `300` `400` `500` `600` `700` `800` `900` |
| `ELEMENT_LINE_HEIGHT` | Visina retka | Ne | `—` |  |
| `ELEMENT_LINE_HEIGHT_MOBILE` | Visina retka | Ne | `—` |  |
| `ELEMENT_LETTER_SPACING` | Razmak slova (em) | Ne | `—` |  |
| `ELEMENT_LETTER_SPACING_MOBILE` | Razmak slova (em) | Ne | `—` |  |
| `ELEMENT_TEXT_TRANSFORM` | Velika/mala slova | Ne | `—` | `""` `"none"` `"uppercase"` `"lowercase"` `"capitalize"` |
| `ELEMENT_TEXT_COLOR` | Boja teksta | Ne | `—` |  |
| `CONTENT` | content | Ne | `—` |  |
| `DATA_BINDING_JSON` | data binding json Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |
| `CATALOG_STAT_SLOTS` | Dinamičke statistike teksta Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Obogaćeni tekst `RICH_TEXT`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="RICH_TEXT" CONTENT="<p>Tekst s <strong>istaknutim dijelom</strong>.</p>"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | RICH_TEXT | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `ELEMENT_FONT_FAMILY` | Font | Ne | `—` | `""` `"site"` `"font-cms-inter"` `"font-site"` `"font-arial"` `"font-georgia"` |
| `ELEMENT_FONT_SIZE` | Veličina (px) | Ne | `—` |  |
| `ELEMENT_FONT_SIZE_MOBILE` | Veličina (px) | Ne | `—` |  |
| `ELEMENT_FONT_WEIGHT` | Debljina | Ne | `—` | `""` `300` `400` `500` `600` `700` `800` `900` |
| `ELEMENT_LINE_HEIGHT` | Visina retka | Ne | `—` |  |
| `ELEMENT_LINE_HEIGHT_MOBILE` | Visina retka | Ne | `—` |  |
| `ELEMENT_LETTER_SPACING` | Razmak slova (em) | Ne | `—` |  |
| `ELEMENT_LETTER_SPACING_MOBILE` | Razmak slova (em) | Ne | `—` |  |
| `ELEMENT_TEXT_TRANSFORM` | Velika/mala slova | Ne | `—` | `""` `"none"` `"uppercase"` `"lowercase"` `"capitalize"` |
| `ELEMENT_TEXT_COLOR` | Boja teksta | Ne | `—` |  |
| `CONTENT` | content | Ne | `—` |  |
| `URL` | url | Ne | `—` |  |
| `DATA_BINDING_JSON` | data binding json Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |
| `CATALOG_STAT_SLOTS` | Dinamičke statistike teksta Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Slika `IMAGE`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="IMAGE" IMAGE="/upload/cms/banner.jpg" IMAGE_ALT="Opis slike"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | IMAGE | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `BANNER_ITEM_STYLE` | banner item style | Ne | `—` |  |
| `IMAGE` | slike | Ne | `—` |  |
| `IMAGE_MOBILE` | image mobile | Ne | `—` |  |
| `IMAGE_ALT` | Alternativni tekst | Ne | `—` |  |
| `URL` | url | Ne | `—` |  |
| `BANNER_IMAGE_FIT` | banner image fit | Ne | `—` |  |
| `DATA_BINDING_JSON` | data binding json Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Video `VIDEO`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="VIDEO" VIDEO_SOURCE_URL="https://www.youtube.com/watch?v=aqz-KE-bpKQ" VIDEO_ACCESSIBLE_NAME="Predstavljanje"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | VIDEO | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `VIDEO_SOURCE_URL` | Izvor videa | Ne | `—` |  |
| `VIDEO_ACCESSIBLE_NAME` | Pristupačni naziv | Ne | `—` |  |
| `IMAGE` | slike | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Ikona `ICON`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="ICON" ICON_NAME="truck"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | ICON | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `ICON_NAME` | Ikona | Ne | `—` | `"info"` `"check"` `"lock"` `"shield"` `"truck"` `"sparkle"` `"dot"` |
| `ICON_SIZE` | Veličina ikone (px) | Ne | `—` |  |
| `ICON_DECORATIVE` | Dekorativna ikona | Ne | `—` |  |
| `ICON_ACCESSIBLE_NAME` | Opis ikone | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

### Navigacija i kartice

#### Gumb `BUTTON`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="BUTTON" URL="/akcije/" URL_TEXT="Pogledaj ponudu"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | BUTTON | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `ELEMENT_FONT_FAMILY` | Font | Ne | `—` | `""` `"site"` `"font-cms-inter"` `"font-site"` `"font-arial"` `"font-georgia"` |
| `ELEMENT_FONT_SIZE` | Veličina (px) | Ne | `—` |  |
| `ELEMENT_FONT_SIZE_MOBILE` | Veličina (px) | Ne | `—` |  |
| `ELEMENT_FONT_WEIGHT` | Debljina | Ne | `—` | `""` `300` `400` `500` `600` `700` `800` `900` |
| `ELEMENT_LINE_HEIGHT` | Visina retka | Ne | `—` |  |
| `ELEMENT_LINE_HEIGHT_MOBILE` | Visina retka | Ne | `—` |  |
| `ELEMENT_LETTER_SPACING` | Razmak slova (em) | Ne | `—` |  |
| `ELEMENT_LETTER_SPACING_MOBILE` | Razmak slova (em) | Ne | `—` |  |
| `ELEMENT_TEXT_TRANSFORM` | Velika/mala slova | Ne | `—` | `""` `"none"` `"uppercase"` `"lowercase"` `"capitalize"` |
| `ELEMENT_TEXT_COLOR` | Boja teksta | Ne | `—` |  |
| `BUTTON_STYLE` | Stil gumba | Ne | `—` | `""` `"button-primary"` `"button-secondary"` `"button-outline"` |
| `URL_TEXT` | url text | Ne | `—` |  |
| `URL` | url | Ne | `—` |  |
| `DATA_BINDING_JSON` | data binding json Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Tekstualna poveznica `TEXT_LINK`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="TEXT_LINK" URL="/podrska/" URL_TEXT="Više informacija"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | TEXT_LINK | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `ELEMENT_FONT_FAMILY` | Font | Ne | `—` | `""` `"site"` `"font-cms-inter"` `"font-site"` `"font-arial"` `"font-georgia"` |
| `ELEMENT_FONT_SIZE` | Veličina (px) | Ne | `—` |  |
| `ELEMENT_FONT_SIZE_MOBILE` | Veličina (px) | Ne | `—` |  |
| `ELEMENT_FONT_WEIGHT` | Debljina | Ne | `—` | `""` `300` `400` `500` `600` `700` `800` `900` |
| `ELEMENT_LINE_HEIGHT` | Visina retka | Ne | `—` |  |
| `ELEMENT_LINE_HEIGHT_MOBILE` | Visina retka | Ne | `—` |  |
| `ELEMENT_LETTER_SPACING` | Razmak slova (em) | Ne | `—` |  |
| `ELEMENT_LETTER_SPACING_MOBILE` | Razmak slova (em) | Ne | `—` |  |
| `ELEMENT_TEXT_TRANSFORM` | Velika/mala slova | Ne | `—` | `""` `"none"` `"uppercase"` `"lowercase"` `"capitalize"` |
| `ELEMENT_TEXT_COLOR` | Boja teksta | Ne | `—` |  |
| `BUTTON_STYLE` | Stil gumba | Ne | `—` | `""` `"button-primary"` `"button-secondary"` `"button-outline"` |
| `URL_TEXT` | url text | Ne | `—` |  |
| `URL` | url | Ne | `—` |  |
| `DATA_BINDING_JSON` | data binding json Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Navigacija `NAVIGATION`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="NAVIGATION" NAVIGATION_ITEMS='[{"title":"Ponuda","anchor":"ponuda"}]']
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | NAVIGATION | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `NAVIGATION_ITEMS` | Navigacija Vrijednost je JSON; koristite vanjske jednostruke navodnike. Polja stavke: title, anchor. | Ne | `—` |  |
| `NAVIGATION_STICKY` | Fiksno u headeru na scroll | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

- Sve unesene stavke prikazuju se njihovim redoslijedom, neovisno o postojanju ili vidljivosti ciljnog sidra. title je naslov poveznice, anchor naziv sidra bez znaka #. U builderu je polje sidra označeno ikonom sidra.

#### Kartice sadržaja `CONTENT_ITEMS`

Popis bannera, pogodnosti ili drugih kartica s vlastitim tekstovima, slikama i poveznicama.

##### Primjeri

```
[CMSWIDGET TYPE="CONTENT_ITEMS" CONTENT_ITEMS='[{"id":"delivery","title":"Pouzdana dostava","description":"Na vašu adresu","icon":"truck","url":"/dostava/","enabled":true,"active_to":null}]' CONTENT_ITEMS_PRESET="benefits" CONTENT_ITEMS_DISPLAY="rail"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | CONTENT_ITEMS | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `CONTENT_ITEMS` | Kartice sadržaja Vrijednost je JSON; koristite vanjske jednostruke navodnike. Polja stavke: internal_title, image, image_mobile, title, description, url, cta, alt, icon, enabled, active_to. | Ne | `—` |  |
| `CONTENT_ITEMS_CARD_JSON` | Dizajn kartice sadržaja Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |
| `CONTENT_ITEMS_PRESET` | Početni izgled | Ne | `—` | `"hero"` `"banners"` `"benefits"` |
| `CONTENT_ITEMS_DISPLAY` | Prikaz stavki | Ne | `—` | `"grid"` `"rail"` `"carousel"` |
| `CONTENT_ITEMS_INTERVAL` | Automatsko listanje (sekunde; 0 isključeno) | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Kartica branda `BRAND_CARD`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="BRAND_CARD" BRAND_CODE="samsung" CATEGORY_CODE="tv"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | BRAND_CARD | Da | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `DATA_BINDING_JSON` | data binding json Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |
| `LAYOUT_PROFILE` | layout profile | Ne | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `VISIBILITY_DESKTOP` | visibility desktop | Ne | `—` |  |
| `VISIBILITY_MOBILE` | visibility mobile | Ne | `—` |  |
| `DATE_ACTIVE_FROM` | date active from | Ne | `—` |  |
| `DATE_ACTIVE_TO` | date active to | Ne | `—` |  |
| `ANCHOR` | anchor | Ne | `—` |  |
| `IMAGE` | slike | Ne | `—` |  |
| `IMAGE_MOBILE` | image mobile | Ne | `—` |  |
| `BACKGROUND_COLOR` | background color | Ne | `—` |  |
| `BACKGROUND_GRADIENT` | background gradient | Ne | `—` |  |
| `GRADIENT_COLOR` | gradient color | Ne | `—` |  |
| `GRADIENT_MODE` | gradient mode | Ne | `—` |  |
| `GRADIENT_ANGLE` | gradient angle | Ne | `—` |  |
| `GRADIENT_ANGLE_MOBILE` | gradient angle mobile | Ne | `—` |  |
| `GRADIENT_START_COLOR` | gradient start color | Ne | `—` |  |
| `GRADIENT_MID_COLOR` | gradient mid color | Ne | `—` |  |
| `GRADIENT_END_COLOR` | gradient end color | Ne | `—` |  |
| `GRADIENT_START_COLOR_MOBILE` | gradient start color mobile | Ne | `—` |  |
| `GRADIENT_MID_COLOR_MOBILE` | gradient mid color mobile | Ne | `—` |  |
| `GRADIENT_END_COLOR_MOBILE` | gradient end color mobile | Ne | `—` |  |
| `GRADIENT_MID_STOP` | gradient mid stop | Ne | `—` |  |
| `GRADIENT_END_STOP` | gradient end stop | Ne | `—` |  |
| `GRADIENT_MID_STOP_MOBILE` | gradient mid stop mobile | Ne | `—` |  |
| `GRADIENT_END_STOP_MOBILE` | gradient end stop mobile | Ne | `—` |  |
| `OVERLAY_COLOR` | overlay color | Ne | `—` |  |
| `OVERLAY_FADE` | overlay fade | Ne | `—` |  |
| `OVERLAY_DIRECTION` | overlay direction | Ne | `—` |  |
| `OVERLAY_DIRECTION_MOBILE` | overlay direction mobile | Ne | `—` |  |
| `OVERLAY_OPACITY` | overlay opacity | Ne | `—` |  |
| `BACKGROUND_POSITION` | background position | Ne | `—` |  |
| `BACKGROUND_SIZE` | background size | Ne | `—` |  |
| `BACKGROUND_POSITION_MOBILE` | background position mobile | Ne | `—` |  |
| `BACKGROUND_SIZE_MOBILE` | background size mobile | Ne | `—` |  |
| `BACKGROUND_FOCUS_X` | background focus x | Ne | `—` |  |
| `BACKGROUND_FOCUS_Y` | background focus y | Ne | `—` |  |
| `BACKGROUND_FOCUS_X_MOBILE` | background focus x mobile | Ne | `—` |  |
| `BACKGROUND_FOCUS_Y_MOBILE` | background focus y mobile | Ne | `—` |  |
| `BACKGROUND_FULL_WIDTH` | background full width | Ne | `—` |  |
| `BRANDING_BACKGROUND_OVERRIDE` | branding background override | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ALIGN` | align | Ne | `—` |  |
| `STICKY` | sticky | Ne | `—` |  |
| `PADDING_TOP` | padding top | Ne | `—` |  |
| `PADDING_BOTTOM` | padding bottom | Ne | `—` |  |
| `PADDING_INLINE` | padding inline | Ne | `—` |  |
| `GAP` | gap | Ne | `—` |  |
| `PADDING_TOP_MOBILE` | padding top mobile | Ne | `—` |  |
| `PADDING_BOTTOM_MOBILE` | padding bottom mobile | Ne | `—` |  |
| `PADDING_INLINE_MOBILE` | padding inline mobile | Ne | `—` |  |
| `GAP_MOBILE` | gap mobile | Ne | `—` |  |
| `LAYOUT_MODE` | layout mode | Ne | `—` |  |
| `LAYOUT_WRAP` | layout wrap | Ne | `—` |  |
| `JUSTIFY_CONTENT` | justify content | Ne | `—` |  |
| `ALIGN_ITEMS` | align items | Ne | `—` |  |
| `LAYOUT_MODE_MOBILE` | layout mode mobile | Ne | `—` |  |
| `LAYOUT_WRAP_MOBILE` | layout wrap mobile | Ne | `—` |  |
| `JUSTIFY_CONTENT_MOBILE` | justify content mobile | Ne | `—` |  |
| `ALIGN_ITEMS_MOBILE` | align items mobile | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `CONTENT_DISPLAY` | content display | Ne | `—` |  |
| `CAROUSEL_COLUMNS_DESKTOP` | carousel columns desktop | Ne | `—` |  |
| `CAROUSEL_ROWS_DESKTOP` | carousel rows desktop | Ne | `—` |  |
| `CAROUSEL_COLUMNS_MOBILE` | carousel columns mobile | Ne | `—` |  |
| `CAROUSEL_ROWS_MOBILE` | carousel rows mobile | Ne | `—` |  |
| `CAROUSEL_ARROWS_POSITION` | carousel arrows position | Ne | `—` |  |
| `CAROUSEL_EXTENT_DESKTOP` | Širina trake — Desktop | Ne | `—` | `""` `"content"` `"viewport_end"` `"viewport_both"` |
| `CATEGORY_CODE` | Točna šifra izvora u jeziku i kanalu stranice. | Ne | `—` |  |
| `BRAND_CODE` | Točna šifra izvora u jeziku i kanalu stranice. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Kartica kategorije `CATEGORY_CARD`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="CATEGORY_CARD" CATEGORY_CODE="tv"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | CATEGORY_CARD | Da | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `DATA_BINDING_JSON` | data binding json Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |
| `LAYOUT_PROFILE` | layout profile | Ne | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `VISIBILITY_DESKTOP` | visibility desktop | Ne | `—` |  |
| `VISIBILITY_MOBILE` | visibility mobile | Ne | `—` |  |
| `DATE_ACTIVE_FROM` | date active from | Ne | `—` |  |
| `DATE_ACTIVE_TO` | date active to | Ne | `—` |  |
| `ANCHOR` | anchor | Ne | `—` |  |
| `IMAGE` | slike | Ne | `—` |  |
| `IMAGE_MOBILE` | image mobile | Ne | `—` |  |
| `BACKGROUND_COLOR` | background color | Ne | `—` |  |
| `BACKGROUND_GRADIENT` | background gradient | Ne | `—` |  |
| `GRADIENT_COLOR` | gradient color | Ne | `—` |  |
| `GRADIENT_MODE` | gradient mode | Ne | `—` |  |
| `GRADIENT_ANGLE` | gradient angle | Ne | `—` |  |
| `GRADIENT_ANGLE_MOBILE` | gradient angle mobile | Ne | `—` |  |
| `GRADIENT_START_COLOR` | gradient start color | Ne | `—` |  |
| `GRADIENT_MID_COLOR` | gradient mid color | Ne | `—` |  |
| `GRADIENT_END_COLOR` | gradient end color | Ne | `—` |  |
| `GRADIENT_START_COLOR_MOBILE` | gradient start color mobile | Ne | `—` |  |
| `GRADIENT_MID_COLOR_MOBILE` | gradient mid color mobile | Ne | `—` |  |
| `GRADIENT_END_COLOR_MOBILE` | gradient end color mobile | Ne | `—` |  |
| `GRADIENT_MID_STOP` | gradient mid stop | Ne | `—` |  |
| `GRADIENT_END_STOP` | gradient end stop | Ne | `—` |  |
| `GRADIENT_MID_STOP_MOBILE` | gradient mid stop mobile | Ne | `—` |  |
| `GRADIENT_END_STOP_MOBILE` | gradient end stop mobile | Ne | `—` |  |
| `OVERLAY_COLOR` | overlay color | Ne | `—` |  |
| `OVERLAY_FADE` | overlay fade | Ne | `—` |  |
| `OVERLAY_DIRECTION` | overlay direction | Ne | `—` |  |
| `OVERLAY_DIRECTION_MOBILE` | overlay direction mobile | Ne | `—` |  |
| `OVERLAY_OPACITY` | overlay opacity | Ne | `—` |  |
| `BACKGROUND_POSITION` | background position | Ne | `—` |  |
| `BACKGROUND_SIZE` | background size | Ne | `—` |  |
| `BACKGROUND_POSITION_MOBILE` | background position mobile | Ne | `—` |  |
| `BACKGROUND_SIZE_MOBILE` | background size mobile | Ne | `—` |  |
| `BACKGROUND_FOCUS_X` | background focus x | Ne | `—` |  |
| `BACKGROUND_FOCUS_Y` | background focus y | Ne | `—` |  |
| `BACKGROUND_FOCUS_X_MOBILE` | background focus x mobile | Ne | `—` |  |
| `BACKGROUND_FOCUS_Y_MOBILE` | background focus y mobile | Ne | `—` |  |
| `BACKGROUND_FULL_WIDTH` | background full width | Ne | `—` |  |
| `BRANDING_BACKGROUND_OVERRIDE` | branding background override | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ALIGN` | align | Ne | `—` |  |
| `STICKY` | sticky | Ne | `—` |  |
| `PADDING_TOP` | padding top | Ne | `—` |  |
| `PADDING_BOTTOM` | padding bottom | Ne | `—` |  |
| `PADDING_INLINE` | padding inline | Ne | `—` |  |
| `GAP` | gap | Ne | `—` |  |
| `PADDING_TOP_MOBILE` | padding top mobile | Ne | `—` |  |
| `PADDING_BOTTOM_MOBILE` | padding bottom mobile | Ne | `—` |  |
| `PADDING_INLINE_MOBILE` | padding inline mobile | Ne | `—` |  |
| `GAP_MOBILE` | gap mobile | Ne | `—` |  |
| `LAYOUT_MODE` | layout mode | Ne | `—` |  |
| `LAYOUT_WRAP` | layout wrap | Ne | `—` |  |
| `JUSTIFY_CONTENT` | justify content | Ne | `—` |  |
| `ALIGN_ITEMS` | align items | Ne | `—` |  |
| `LAYOUT_MODE_MOBILE` | layout mode mobile | Ne | `—` |  |
| `LAYOUT_WRAP_MOBILE` | layout wrap mobile | Ne | `—` |  |
| `JUSTIFY_CONTENT_MOBILE` | justify content mobile | Ne | `—` |  |
| `ALIGN_ITEMS_MOBILE` | align items mobile | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `CONTENT_DISPLAY` | content display | Ne | `—` |  |
| `CAROUSEL_COLUMNS_DESKTOP` | carousel columns desktop | Ne | `—` |  |
| `CAROUSEL_ROWS_DESKTOP` | carousel rows desktop | Ne | `—` |  |
| `CAROUSEL_COLUMNS_MOBILE` | carousel columns mobile | Ne | `—` |  |
| `CAROUSEL_ROWS_MOBILE` | carousel rows mobile | Ne | `—` |  |
| `CAROUSEL_ARROWS_POSITION` | carousel arrows position | Ne | `—` |  |
| `CAROUSEL_EXTENT_DESKTOP` | Širina trake — Desktop | Ne | `—` | `""` `"content"` `"viewport_end"` `"viewport_both"` |
| `CATEGORY_CODE` | Točna šifra izvora u jeziku i kanalu stranice. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

### Dinamički sadržaj

#### Blog objave `BLOG_POSTS`

Posljednje javne blog objave ili točno odabrani ID-evi.

##### Primjeri

```
[CMSWIDGET TYPE="BLOG_POSTS" NUMBER_OF_ITEMS__IS="3"]
```

```
[CMSWIDGET TYPE="BLOG_POSTS" ID="101,102,103" NUMBER_OF_ITEMS__IS="3"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | BLOG_POSTS za blog ili PROMOTIONS za uredničke objave o akcijama; nije izvor kataloških popusta. | Da | `—` |  |
| `ID` | Do 100 pozitivnih ID-eva objava odvojenih zarezom. Popunjen popis čuva redoslijed; prazno ili izostavljeno dohvaća posljednje javne objave. | Ne | `—` |  |
| `NUMBER_OF_ITEMS__IS` | Ukupan broj kartica, ne broj stupaca. Cijeli broj od 1 do 50. | Ne | `"3"` |  |

##### Važne napomene i naknadno uređivanje

- ID pronađite u evidenciji objava. Prazan/izostavljen ID znači Posljednje, popunjen znači Odabrane. U inspectoru možete promijeniti način, vrstu, izbor i broj objava.

- Poštuju se javna vidljivost, vrsta, jezik/kanal, početak i istek objave. Nedostupne ili pogrešne objave preskaču se uz upozorenje i ne dopunjavaju drugima.

- Odabir duži od limita ostaje sačuvan uz upozorenje; prikazuje se najviše zadani broj. Prazan javni rezultat nema zamjenski sadržaj.

#### Promocije `PROMOTIONS`

Uredničke objave o akcijama, posljednje ili odabrane.

##### Primjeri

```
[CMSWIDGET TYPE="PROMOTIONS" NUMBER_OF_ITEMS__IS="3"]
```

```
[CMSWIDGET TYPE="PROMOTIONS" ID="201,202" NUMBER_OF_ITEMS__IS="2"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | BLOG_POSTS za blog ili PROMOTIONS za uredničke objave o akcijama; nije izvor kataloških popusta. | Da | `—` |  |
| `ID` | Do 100 pozitivnih ID-eva objava odvojenih zarezom. Popunjen popis čuva redoslijed; prazno ili izostavljeno dohvaća posljednje javne objave. | Ne | `—` |  |
| `NUMBER_OF_ITEMS__IS` | Ukupan broj kartica, ne broj stupaca. Cijeli broj od 1 do 50. | Ne | `"3"` |  |

##### Važne napomene i naknadno uređivanje

- ID pronađite u evidenciji objava. Prazan/izostavljen ID znači Posljednje, popunjen znači Odabrane. U inspectoru možete promijeniti način, vrstu, izbor i broj objava.

- Poštuju se javna vidljivost, vrsta, jezik/kanal, početak i istek objave. Nedostupne ili pogrešne objave preskaču se uz upozorenje i ne dopunjavaju drugima.

- Odabir duži od limita ostaje sačuvan uz upozorenje; prikazuje se najviše zadani broj. Prazan javni rezultat nema zamjenski sadržaj.

#### Poslovnice `STORE_LOCATOR`

Sve javne poslovnice kanala ili izbor prema vanjskim šiframa.

##### Šifre svih poslovnica po kanalima

Sve poslovnice iz aktualne baze, bez obzira na vidljivost poslovnice ili kanala. U STORE_ID__IS_IN kopirajte šifru iz tablice za kanal stranice, bez prefiksa kanala i bez baznog ID-a. Primjer: BA 110 prepoznaje Big Bang Ilidža (u bazi 22110). Prefiks dodaje sustav. Skrivena poslovnica može se odabrati i spremiti, a javni prikaz i dalje poštuje vidljivost. Export bilježi stanje u trenutku preuzimanja.

| Kanal | Šifra | Naziv poslovnice | Adresa |
|---|---|---|---|
| ba | `101` | Big Bang Centralno skladište | Ulica VIII br. 57, 76270 Orašje |
| ba | `110` | Big Bang Ilidža | Rustempašina 12, 71210 Ilidža |
| ba | `128` | Big Bang Webshop | Silvija Strahimira Kranjčevića 10, 88240 Posušje |
| ba | `140` | Big Bang Mostar | Plaza Shopping centar, Bišće polje bb, 88000 Mostar |
| ba | `145` | Računovodstvo | Ulica VIII br. 57, 76270 Orašje |
| ba | `1060` | BIG BANG B2B | Rustempašina 12, 71210 Ilidža |
| hr | `101` | Big Bang Centralno skladište | Gospodarska ulica 2 (Sveta Nedelja), 10431 Sveta Nedelja |
| hr | `110` | Big Bang Sveta Nedelja | Dr. Franje Tuđmana 69, 10431 Sveta Nedelja |
| hr | `113` | Cargo partner | Zelena Aleja 45, 10410 Velika Gorica |
| hr | `118` | SD Store Garden Mall | Ulica Rudolfa Kolaka 14, 10000 Zagreb |
| hr | `121` | Big Bang Outlet | Gospodarska ulica 2, 10431 Sveta Nedelja |
| hr | `126` | Samsung Experience Store Arena | Ulica Vice Vukova 6, 10000 Zagreb |
| hr | `128` | Big Bang Webshop | Dr. Franje Tuđmana 69, 10431 Sveta Nedelja |
| hr | `132` | Big Bang Split CCO | Vukovarska 207, 21000 Split |
| hr | `139` | Big Bang Rijeka Marti | Martinkovac 127, 51000 Rijeka |
| hr | `141` | Big Bang Zagreb Arena Park | Ulica Jaruščica 4, 10020 Zagreb-Novi Zagreb |
| hr | `144` | Big Bang Zagreb CCO East | Slavonska avenija 11d, 10000 Zagreb |
| hr | `150` | Big Bang Zagreb CCO West | Jankomir 33, 10000 Zagreb |
| hr | `151` | Big Bang Zadar City Park | 4. gardijske brigade 1, 23000 Zadar |
| hr | `170` | Big Bang Osijek, Gacka | Ulica kneza Trpimira 20, 31000 Osijek |
| hr | `180` | Big Bang Energija | Dr. Franje Tuđmana 69, 10431 Sveta Nedelja |
| hr | `181` | Big Bang Varaždin | Ulica Grada Lipika 10, 42204 Donji Kneginec |
| hr | `1060` | Big Bang B2B | Dr. Franje Tuđmana 69, 10431 Sveta Nedelja |
| rs | `12345` | Big Bang Webshop | Durmitorska 3, 11000 Beograd |
| si | `1010` | Centralno skladišče | Mariborska cesta 162, Objekt C, 3000 Celje |
| si | `1060` | Big Bang Reklamacije Ljubljana | Madžarska ulica 12, 1000 Ljubljana |
| si | `1061` | 1061 Big Bang reklamacije | Madžarska ulica 12, 1000 Ljubljana |
| si | `1062` | 1062 Big Bang Reklamacije Celje | Mariborska cesta 162, 3000 Celje |
| si | `1070` | 1070 Big Bang Distribucija | Madžarska ulica 12, 1000 Ljubljana |
| si | `1080` | 1080 Big Partner | Mariborska cesta 162, 3000 Celje |
| si | `1081` | 1081 Big Partner reklamacije | Mariborska cesta 162, 3000 Celje |
| si | `2010` | Big Bang INVENTURA | FRANCOSKA ULICA 17, 1000 LJUBLJANA |
| si | `2020` | BB Kuhinje | Mariborska cesta 162, 3000 Celje |
| si | `2030` | Big Bang SME | Madžarska ulica 12, 1102 Ljubljana |
| si | `2150` | Big Bang Jesenice | Fužinska cesta 8,, 4270 Jesenice |
| si | `2320` | Big Bang Murska Sobota, BTC | Nemčavci 1 d, 9000 Murska Sobota |
| si | `2380` | Big Bang Ptuj, Supernova | Ormoška cesta 15,, 2250 Ptuj |
| si | `2410` | 2410 Big Bang Internet | Madžarska ulica 12, 1000 Ljubljana |
| si | `2420` | Big Bang Kranj, Stop Shop | Cesta Staneta Žagarja 71, 4000 Kranj |
| si | `2430` | 2430 Big Bang Tranzit | Madžarska ulica 12, 1000 Ljubljana |
| si | `2450` | Big Bang Maribor, Europark | Pobreška cesta 18, 2000 Maribor |
| si | `2490` | Big Bang Ljubljana, BTC Outlet / Prevzem naročil | Madžarska ulica 12, 1000 Ljubljana |
| si | `2500` | Big Bang Mega BTC Ljubljana | Francoska ulica 17, 1000 Ljubljana |
| si | `2570` | Big Bang Novo mesto, Supernova | Otoška cesta 5, 8000 Novo Mesto |
| si | `2590` | Big Bang Ljubljana, Park center Rudnik | Jurčkova cesta 228, 1000 LJubljana |
| si | `2600` | Big Bang Ljubljana, Citypark | Moskovska ulica 4, 1000 Ljubljana |
| si | `2610` | Big Bang Koper, Park center | Ankaranska cesta 3 a, 6000 Koper |
| si | `2630` | Big Bang Celje, Citycenter | Mariborska cesta 100, 3000 Celje |
| si | `2650` | Big Bang Maribor, Supernova Tržaška | Tržaška cesta 7, 2000 Maribor |
| si | `2670` | Big Bang Slovenska Bistrica, Qlandia | Žolgarjeva ulica 14,, 2310 Slovenska Bistrica |
| si | `2680` | Big Bang Nova Gorica, Supernova | Cesta 25. junija 1 a, 5000 Nova Gorica |
| si | `2720` | Big Bang Krško, Supernova | Cesta krških žrtev 141,, 8270 Krško |
| si | `2730` | Big Bang Slovenj Gradec | Celjska cesta 31, 2380 Slovenj Gradec |
| si | `2740` | Big Bang Kamnik, Supernova | Domžalska cesta 3, 1241 Kamnik |
| si | `2750` | Big Bang Velenje, Velenjka | Celjska cesta 40,, 3320 Velenje |
| si | `2760` | Big Bang Aleja | Rakuševa ulica 1, 1000 Ljubljana |
| si | `2770` | HUAWEI Shop | Šmartinska cesta 152 g,, 1102 Ljubljana |
| si | `2800` | Big Bang Home & Cook | Madžarska ulica 12, 1000 Ljubljana |
| si | `2900` | Big Bang Mobilni | Madžarska ulica 12, 1000 Ljubljana |
| si | `6666` | VIRTUALNA POSL |  |
| si | `8010` | SERVIS LJUBLJANA | Šmartinska 152, HALA VI/II, 1000 Ljubljana |
| si | `8020` | SERVIS BEKO | Šmartinska 152, HALA VI/II, 1000 Ljubljana |

##### Primjeri

```
[CMSWIDGET TYPE="STORE_LOCATOR"]
```

```
[CMSWIDGET TYPE="STORE_LOCATOR" STORE_ID__IS_IN="1060,1061"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | STORE_LOCATOR | Da | `—` |  |
| `STORE_ID__IS_IN` | Do 100 vanjskih šifri poslovnica, ne baznih ID-eva, odvojenih zarezom. Svaka ima 1–30 slova, znamenki, _ ili -. Prazno ili izostavljeno bira sve javne poslovnice kanala. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Tablica u helpu i HTML exportu sadrži sve poslovnice, uključujući skrivene, sa šiframa bez prefiksa kanala. Kopirajte šifru za kanal stranice: BA 110 prepoznaje Big Bang Ilidža (u bazi 22110); HR 1060 traži 111060. Prefiks dodaje sustav; već prefiksirane šifre ostaju prihvaćene radi kompatibilnosti. Odabrana skrivena poslovnica ostaje spremljena, a javni prikaz poštuje postavke vidljivosti.

- Nepoznate šifre daju upozorenje, valjane ostaju odabrane. Sve nepoznate šifre ili brisanje zadnje odabrane poslovnice ostavljaju prazan odabrani izvor; ne uključuju sve poslovnice.

- Lokacija bez koordinata ostaje u popisu bez markera. Prikaz karte ovisi i o dopuštenom hostu Google ključa.

#### Recenzije `REVIEWS`

Recenzije kupaca s imenom, ocjenom i tekstom.

##### Primjeri

```
[CMSWIDGET TYPE="REVIEWS" REVIEW_ITEMS='[{"name":"Ana","rating":"5","text":"Brza dostava."}]']
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | REVIEWS | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `REVIEW_ITEMS` | Recenzije kupaca (ručni unos) Vrijednost je JSON; koristite vanjske jednostruke navodnike. Polja stavke: name, date, rating, text, badge. | Ne | `—` |  |
| `CAROUSEL_EXTENT_DESKTOP` | Širina trake — Desktop | Ne | `—` | `""` `"content"` `"viewport_end"` `"viewport_both"` |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Kataloška metrika `CATALOG_STAT`

Samostalna oznaka postaje element Kataloška metrika s kontrolama izvora i formata. Broj proizvoda, brandova i najniža javna cijena bez skupih upita pri otvaranju stranice.

##### Primjeri

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" CATEGORY_CODE="tv" FORMAT="category_meta"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="product_count" CATEGORY_CODE="tv" FORMAT="number"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="product_count" CATEGORY_CODE="tv" FORMAT="count"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="product_count" CATEGORY_CODE="tv" FORMAT="brand_meta"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="product_count" CATEGORY_CODE="tv" FORMAT="brand_compact"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="model_count" CATEGORY_CODE="tv" FORMAT="number"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="model_count" CATEGORY_CODE="tv" FORMAT="count"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="min_price" CATEGORY_CODE="tv" FORMAT="money"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="min_price" CATEGORY_CODE="tv" FORMAT="price_from"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="brand_count" CATEGORY_CODE="tv" FORMAT="number"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="brand_count" CATEGORY_CODE="tv" FORMAT="count"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="subcategory_count" CATEGORY_CODE="tv" FORMAT="number"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="subcategory_count" CATEGORY_CODE="tv" FORMAT="count"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="updated_at" CATEGORY_CODE="tv" FORMAT="date"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" CATEGORY_CODE="tv" FORMAT="category_meta" COUNT_MODE="products"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" CATEGORY_CODE="tv" FORMAT="category_meta" COUNT_MODE="models"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" CATEGORY_CODE="tv" FORMAT="category_compact" COUNT_MODE="products"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" CATEGORY_CODE="tv" FORMAT="category_compact" COUNT_MODE="models"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="product_count" CATEGORY_ID="1" FORMAT="count"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="product_count" PRODUCT_CATEGORY__IS="Televizori" FORMAT="count"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="product_count" BRAND_CODE="samsung" FORMAT="count"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="product_count" BRAND_ID="2" FORMAT="count"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="product_count" PRODUCT_BRAND__IS="Samsung" FORMAT="count"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" CATEGORY_CODE="tv" BRAND_CODE="samsung" FORMAT="category_meta"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" CATEGORY_CODE="tv" BRAND_ID="2" FORMAT="category_meta"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" CATEGORY_CODE="tv" PRODUCT_BRAND__IS="Samsung" FORMAT="category_meta"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" CATEGORY_ID="1" BRAND_CODE="samsung" FORMAT="category_meta"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" CATEGORY_ID="1" BRAND_ID="2" FORMAT="category_meta"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" CATEGORY_ID="1" PRODUCT_BRAND__IS="Samsung" FORMAT="category_meta"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" PRODUCT_CATEGORY__IS="Televizori" BRAND_CODE="samsung" FORMAT="category_meta"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" PRODUCT_CATEGORY__IS="Televizori" BRAND_ID="2" FORMAT="category_meta"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="summary" PRODUCT_CATEGORY__IS="Televizori" PRODUCT_BRAND__IS="Samsung" FORMAT="category_meta"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="product_count" CONTEXT="inherit" FORMAT="count"]
```

```
[CMSWIDGET TYPE="CATALOG_STAT" METRIC="product_count" CONTEXT="page" FORMAT="count"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | CATALOG_STAT | Da | `—` |  |
| `METRIC` | Statistika iz pripremljenog javnog sažetka. | Da | `—` | `"product_count"` `"model_count"` `"min_price"` `"brand_count"` `"subcategory_count"` `"updated_at"` `"summary"` |
| `FORMAT` | Format mora odgovarati metrici; sve valjane kombinacije navedene su u primjerima. | Ne | `—` | `"number"` `"count"` `"brand_meta"` `"brand_compact"` `"money"` `"price_from"` `"date"` `"category_meta"` `"category_compact"` |
| `COUNT_MODE` | Samo za summary: products ili models. Oba broje različite javno vidljive SKU-ove, uključujući zasebne varijante. | Ne | `—` |  |
| `CONTEXT` | inherit ili page; koristi se bez selectora. | Ne | `—` |  |
| `PRODUCT_CATEGORY__IS` | Jedan točan izvor; po jedan selector za kategoriju i brand. Naziv je na jeziku stranice. | Ne | `—` |  |
| `PRODUCT_BRAND__IS` | Jedan točan izvor; po jedan selector za kategoriju i brand. Naziv je na jeziku stranice. | Ne | `—` |  |
| `CATEGORY_CODE` | Jedan točan izvor; po jedan selector za kategoriju i brand. Naziv je na jeziku stranice. | Ne | `—` |  |
| `CATEGORY_ID` | Jedan točan izvor; po jedan selector za kategoriju i brand. Naziv je na jeziku stranice. | Ne | `—` |  |
| `BRAND_CODE` | Jedan točan izvor; po jedan selector za kategoriju i brand. Naziv je na jeziku stranice. | Ne | `—` |  |
| `BRAND_ID` | Jedan točan izvor; po jedan selector za kategoriju i brand. Naziv je na jeziku stranice. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Metriku možete dodati i izravno iz biblioteke elemenata, bez shortcoda.

- Oznaka unutar teksta zamjenjuje samo statistički dio i čuva okolni HTML. Potpisani preview prikazuje oblik teksta s oznakama {BROJ}, {CIJENA} i {DATUM}, bez stvarnih statistika. Na javnom webu neuspjelo ili još nepripremljeno statističko mjesto ostaje prazno. Cijene istječu nakon 60 sekundi, brojači nakon 5 minuta.

- Šifre tv/samsung, ID-evi 1/2 i nazivi Televizori/Samsung ilustrativni su; zamijenite ih stvarnim vrijednostima jezika i kanala stranice.

#### Catalog metric `CATALOG_METRIC`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="CATALOG_METRIC"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | CATALOG_METRIC | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `ELEMENT_FONT_FAMILY` | Font | Ne | `—` | `""` `"site"` `"font-cms-inter"` `"font-site"` `"font-arial"` `"font-georgia"` |
| `ELEMENT_FONT_SIZE` | Veličina (px) | Ne | `—` |  |
| `ELEMENT_FONT_SIZE_MOBILE` | Veličina (px) | Ne | `—` |  |
| `ELEMENT_FONT_WEIGHT` | Debljina | Ne | `—` | `""` `300` `400` `500` `600` `700` `800` `900` |
| `ELEMENT_LINE_HEIGHT` | Visina retka | Ne | `—` |  |
| `ELEMENT_LINE_HEIGHT_MOBILE` | Visina retka | Ne | `—` |  |
| `ELEMENT_LETTER_SPACING` | Razmak slova (em) | Ne | `—` |  |
| `ELEMENT_LETTER_SPACING_MOBILE` | Razmak slova (em) | Ne | `—` |  |
| `ELEMENT_TEXT_TRANSFORM` | Velika/mala slova | Ne | `—` | `""` `"none"` `"uppercase"` `"lowercase"` `"capitalize"` |
| `ELEMENT_TEXT_COLOR` | Boja teksta | Ne | `—` |  |
| `CATALOG_STAT_SLOTS` | Dinamičke statistike teksta Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Informativni red `STATS`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="STATS" STATS_MESSAGES='[{"text":"Plaćanje na rate"}]']
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | STATS | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `STATS_MESSAGES` | Poruke Vrijednost je JSON; koristite vanjske jednostruke navodnike. Polja stavke: text. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Poruke `MESSAGES`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="MESSAGES" TICKER_ITEMS='[{"lead":"Dostava","text":"Provjerite dostupne termine."}]']
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | MESSAGES | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `MESSAGE_DISPLAY` | Prikaz poruka | Ne | `—` | `"rotate"` `"stack"` |
| `TICKER_INTERVAL_SECONDS` | Interval poruka (sekunde) | Ne | `—` |  |
| `TICKER_ITEMS` | Rotirajuće poruke Vrijednost je JSON; koristite vanjske jednostruke navodnike. Polja stavke: lead, text. | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Pitanja i odgovori `FAQ`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="FAQ" FAQ_ITEMS='[{"question":"Kako mogu platiti?","answer":"<p>Karticom ili na rate.</p>"}]']
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | FAQ | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `FAQ_ITEMS` | Pitanja i odgovori Vrijednost je JSON; koristite vanjske jednostruke navodnike. Polja stavke: question, answer. | Ne | `—` |  |
| `FAQ_FIRST_OPEN` | Prvo pitanje otvoreno | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

### Struktura i zajednički blokovi

#### Blok `CONTAINER`

Blok za raspored, širinu, pozadinu i zajedničke postavke elemenata.

##### Primjeri

```
[CMSWIDGET TYPE="CONTAINER" TITLE="Novi blok" LAYOUT_MODE="grid"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | CONTAINER | Da | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `DATA_BINDING_JSON` | data binding json Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |
| `LAYOUT_PROFILE` | layout profile | Ne | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `VISIBILITY_DESKTOP` | visibility desktop | Ne | `—` |  |
| `VISIBILITY_MOBILE` | visibility mobile | Ne | `—` |  |
| `DATE_ACTIVE_FROM` | date active from | Ne | `—` |  |
| `DATE_ACTIVE_TO` | date active to | Ne | `—` |  |
| `ANCHOR` | anchor | Ne | `—` |  |
| `IMAGE` | slike | Ne | `—` |  |
| `IMAGE_MOBILE` | image mobile | Ne | `—` |  |
| `BACKGROUND_COLOR` | background color | Ne | `—` |  |
| `BACKGROUND_GRADIENT` | background gradient | Ne | `—` |  |
| `GRADIENT_COLOR` | gradient color | Ne | `—` |  |
| `GRADIENT_MODE` | gradient mode | Ne | `—` |  |
| `GRADIENT_ANGLE` | gradient angle | Ne | `—` |  |
| `GRADIENT_ANGLE_MOBILE` | gradient angle mobile | Ne | `—` |  |
| `GRADIENT_START_COLOR` | gradient start color | Ne | `—` |  |
| `GRADIENT_MID_COLOR` | gradient mid color | Ne | `—` |  |
| `GRADIENT_END_COLOR` | gradient end color | Ne | `—` |  |
| `GRADIENT_START_COLOR_MOBILE` | gradient start color mobile | Ne | `—` |  |
| `GRADIENT_MID_COLOR_MOBILE` | gradient mid color mobile | Ne | `—` |  |
| `GRADIENT_END_COLOR_MOBILE` | gradient end color mobile | Ne | `—` |  |
| `GRADIENT_MID_STOP` | gradient mid stop | Ne | `—` |  |
| `GRADIENT_END_STOP` | gradient end stop | Ne | `—` |  |
| `GRADIENT_MID_STOP_MOBILE` | gradient mid stop mobile | Ne | `—` |  |
| `GRADIENT_END_STOP_MOBILE` | gradient end stop mobile | Ne | `—` |  |
| `OVERLAY_COLOR` | overlay color | Ne | `—` |  |
| `OVERLAY_FADE` | overlay fade | Ne | `—` |  |
| `OVERLAY_DIRECTION` | overlay direction | Ne | `—` |  |
| `OVERLAY_DIRECTION_MOBILE` | overlay direction mobile | Ne | `—` |  |
| `OVERLAY_OPACITY` | overlay opacity | Ne | `—` |  |
| `BACKGROUND_POSITION` | background position | Ne | `—` |  |
| `BACKGROUND_SIZE` | background size | Ne | `—` |  |
| `BACKGROUND_POSITION_MOBILE` | background position mobile | Ne | `—` |  |
| `BACKGROUND_SIZE_MOBILE` | background size mobile | Ne | `—` |  |
| `BACKGROUND_FOCUS_X` | background focus x | Ne | `—` |  |
| `BACKGROUND_FOCUS_Y` | background focus y | Ne | `—` |  |
| `BACKGROUND_FOCUS_X_MOBILE` | background focus x mobile | Ne | `—` |  |
| `BACKGROUND_FOCUS_Y_MOBILE` | background focus y mobile | Ne | `—` |  |
| `BACKGROUND_FULL_WIDTH` | background full width | Ne | `—` |  |
| `BRANDING_BACKGROUND_OVERRIDE` | branding background override | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ALIGN` | align | Ne | `—` |  |
| `STICKY` | sticky | Ne | `—` |  |
| `PADDING_TOP` | padding top | Ne | `—` |  |
| `PADDING_BOTTOM` | padding bottom | Ne | `—` |  |
| `PADDING_INLINE` | padding inline | Ne | `—` |  |
| `GAP` | gap | Ne | `—` |  |
| `PADDING_TOP_MOBILE` | padding top mobile | Ne | `—` |  |
| `PADDING_BOTTOM_MOBILE` | padding bottom mobile | Ne | `—` |  |
| `PADDING_INLINE_MOBILE` | padding inline mobile | Ne | `—` |  |
| `GAP_MOBILE` | gap mobile | Ne | `—` |  |
| `LAYOUT_MODE` | layout mode | Ne | `—` |  |
| `LAYOUT_WRAP` | layout wrap | Ne | `—` |  |
| `JUSTIFY_CONTENT` | justify content | Ne | `—` |  |
| `ALIGN_ITEMS` | align items | Ne | `—` |  |
| `LAYOUT_MODE_MOBILE` | layout mode mobile | Ne | `—` |  |
| `LAYOUT_WRAP_MOBILE` | layout wrap mobile | Ne | `—` |  |
| `JUSTIFY_CONTENT_MOBILE` | justify content mobile | Ne | `—` |  |
| `ALIGN_ITEMS_MOBILE` | align items mobile | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `CONTENT_DISPLAY` | content display | Ne | `—` |  |
| `CAROUSEL_COLUMNS_DESKTOP` | carousel columns desktop | Ne | `—` |  |
| `CAROUSEL_ROWS_DESKTOP` | carousel rows desktop | Ne | `—` |  |
| `CAROUSEL_COLUMNS_MOBILE` | carousel columns mobile | Ne | `—` |  |
| `CAROUSEL_ROWS_MOBILE` | carousel rows mobile | Ne | `—` |  |
| `CAROUSEL_ARROWS_POSITION` | carousel arrows position | Ne | `—` |  |
| `CAROUSEL_EXTENT_DESKTOP` | Širina trake — Desktop | Ne | `—` | `""` `"content"` `"viewport_end"` `"viewport_both"` |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Reusable block `REUSABLE`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="REUSABLE" COMPONENT="123" COMPONENT_MODE="synced"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | REUSABLE | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `COMPONENT` | component | Ne | `—` |  |
| `COMPONENT_MODE` | component mode | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Position for reusable blocks `REUSABLE_PLACEHOLDER`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="REUSABLE_PLACEHOLDER" PLACEHOLDER_CODE="benefits"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | REUSABLE_PLACEHOLDER | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `PLACEHOLDER_CODE` | placeholder code | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.

#### Rotator or posts `GROUP_ELEMENTS`

Stvara isti uređivi element kao odabir u biblioteci Page Buildera.

##### Primjeri

```
[CMSWIDGET TYPE="GROUP_ELEMENTS" ROTATOR_SOURCE_MODE="publish" PUBLISH_SOURCE_MODE="latest" PUBLISH_KIND="blog" PUBLISH_LIMIT="3"]
```

##### Svi atributi i opcije

| Atribut | Opis | Obavezno | Zadano | Opcije |
|---|---|---|---|---|
| `TYPE` | GROUP_ELEMENTS | Da | `—` |  |
| `VISIBLE` | visible | Ne | `—` |  |
| `TITLE` | title | Ne | `—` |  |
| `CONTENT_COLOR_STYLE` | Boja sadržaja | Ne | `—` | `""` `"color-white"` `"color-white-muted"` `"color-grey"` `"color-black"` `"color-blue"` `"color-turquoise"` `"color-orange-dark"` |
| `SURFACE_STYLE` | Izgled površine | Ne | `—` | `""` `"surface-blue"` `"surface-orange"` |
| `ELEMENT_SPACING_TOP` | Iznad (px) | Ne | `—` |  |
| `ELEMENT_SPACING_BOTTOM` | Ispod (px) | Ne | `—` |  |
| `ELEMENT_ALIGN` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_ALIGN_MOBILE` | Poravnanje | Ne | `—` | `""` `"left"` `"center"` `"right"` |
| `ELEMENT_VISIBILITY_DESKTOP` | Prikaz — Desktop | Ne | `—` | `"show"` `"hide"` |
| `ELEMENT_VISIBILITY_MOBILE` | Prikaz — Mobitel | Ne | `—` | `""` `"show"` `"hide"` |
| `ELEMENT_MIN_HEIGHT` | Min. visina (px) | Ne | `—` |  |
| `ELEMENT_MIN_HEIGHT_MOBILE` | Min. visina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_DESKTOP` | Najveća širina — Desktop (px) | Ne | `—` |  |
| `ELEMENT_MAX_WIDTH_MOBILE` | Najveća širina — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK` | Unutar okomito (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE` | Unutar vodoravno (px) | Ne | `—` |  |
| `ELEMENT_PADDING_BLOCK_MOBILE` | Unutar okomito — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_PADDING_INLINE_MOBILE` | Unutar vodoravno — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BACKGROUND_COLOR` | Boja pozadine | Ne | `—` |  |
| `ELEMENT_BORDER_COLOR` | Boja obruba | Ne | `—` |  |
| `ELEMENT_BORDER_WIDTH` | Obrub (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS` | Zaobljenje (px) | Ne | `—` |  |
| `ELEMENT_BORDER_RADIUS_MOBILE` | Zaobljenje — Mobitel (px) | Ne | `—` |  |
| `ELEMENT_BOX_SHADOW` | Sjena | Ne | `—` | `""` `"soft"` `"medium"` `"strong"` |
| `ELEMENT_OPACITY` | Prozirnost (%) | Ne | `—` |  |
| `WIDTH_MODE_DESKTOP` | Width mode — Desktop | Ne | `—` | `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_DESKTOP` | Width value — Desktop | Ne | `—` |  |
| `WIDTH_MODE_MOBILE` | Width mode — Mobile | Ne | `—` | `""` `"columns"` `"percent"` `"pixels"` |
| `WIDTH_VALUE_MOBILE` | Width value — Mobile | Ne | `—` |  |
| `CARD_PRESET` | Gotov izgled kartice | Ne | `—` | `""` `"circle-category"` `"locked-category"` `"featured-product"` `"editorial-card"` |
| `CARD_SURFACE` | Površina kartice | Ne | `—` | `""` `"white"` `"dark"` `"transparent"` |
| `CARD_IMAGE_RATIO` | Omjer slike kartice | Ne | `—` | `""` `"square"` `"landscape"` `"portrait"` |
| `CARD_IMAGE_FIT` | Prikaz slike kartice | Ne | `—` | `""` `"cover"` `"contain"` |
| `CARD_BADGE_STYLE` | Prikaz oznake kartice | Ne | `—` | `""` `"pill"` `"none"` |
| `CARD_PADDING` | Unutarnji odmak kartice (px) | Ne | `—` |  |
| `CARD_RADIUS` | Zaobljenje kartice (px) | Ne | `—` |  |
| `CARD_TITLE_SIZE` | Veličina naslova kartice (px) | Ne | `—` |  |
| `ROTATOR_SOURCE_MODE` | rotator source mode | Ne | `—` |  |
| `OBJECT_ROTATORCATEGORY` | object rotatorcategory | Ne | `—` |  |
| `ROTATORELEMENTS_JSON` | rotatorelements json Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |
| `OBJECT_ROTATORELEMENT` | object rotatorelement | Ne | `—` |  |
| `SELECTED_PUBLISHES` | Odabrane objave Vrijednost je JSON; koristite vanjske jednostruke navodnike. | Ne | `—` |  |
| `PUBLISH_SOURCE_MODE` | Izbor objava | Ne | `—` | `"selected"` `"latest"` |
| `PUBLISH_KIND` | Vrsta objava | Ne | `—` | `""` `"blog"` `"promotions"` |
| `PUBLISH_LIMIT` | Broj objava | Ne | `—` |  |
| `DISPLAY_TYPE` | display type | Ne | `—` |  |
| `CAROUSEL_EXTENT_DESKTOP` | Širina trake — Desktop | Ne | `—` | `""` `"content"` `"viewport_end"` `"viewport_both"` |
| `DISPLAY_TOTAL_ROWS` | display total rows | Ne | `—` |  |
| `DISPLAY_LIMIT` | display limit | Ne | `—` |  |
| `ITEMS_PER_ROW_DESKTOP` | items per row desktop | Ne | `—` |  |
| `ITEMS_PER_ROW_MOBILE` | items per row mobile | Ne | `—` |  |

##### Važne napomene i naknadno uređivanje

- Atributi prate polja komponente. Nakon pretvorbe uređuju se kroz iste kontrole kao ručno dodan element.

- Shortcode je ulaz za pretvorbu, ne tekst koji se prikazuje na webu. Za HTML omotače i miješani sadržaj koristite Uvezi HTML.

- Navodnik kojim je atribut omeđen unutar vrijednosti pišite s prethodnom obrnutom kosom crtom. JSON zadržava vlastite escape znakove.
