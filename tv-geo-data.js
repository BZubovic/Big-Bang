/* GEO-optimised content for the TV category tree (window.BB_TVGEO).
   L1 "TV i audio" routes to subcategories, L2 "Televizori i dodaci" covers everything around a TV,
   L3 "Televizori" is the buying guide. Croatian (HR) copy — the SI version is written separately.
   All numbers are the category's live figures in the prototype; keep them consistent with the
   L3 filters in Pages/Category body.dc.html (TV_FILTERS). */
(function () {
  const TODAY = (() => { const d = new Date(); const p = (n) => String(n).padStart(2, '0'); return p(d.getDate()) + '.' + p(d.getMonth() + 1) + '.' + d.getFullYear() + '.'; })();

  const TILES = {
    // L1 groups
    'Televizori i dodaci': '1.786 modela · od 3,99 €',
    'Projektori i platna': '148 modela · od 59,99 €',
    'Video uređaji': '24 modela · od 39,99 €',
    'Audio oprema': '1.612 modela · od 4,99 €',
    'Hi-Fi oprema': '318 modela · od 24,99 €',
    'Prijenosni audio uređaji': '87 modela · od 9,99 €',
    'Kablovi i dodaci': '466 modela · od 1,99 €',
    // L2 items
    'Televizori': '1.284 modela · od 129 €',
    'TV nosači': '214 modela · od 12,99 €',
    'Antene i oprema': '96 modela · od 7,99 €',
    'Daljinski upravljači': '58 modela · od 6,99 €',
    'Digitalni prijamnici': '31 model · od 24,99 €',
    'Ostali TV dodaci': '103 modela · od 3,99 €'
  };

  const CAT = {
    tv: { level: 3, l1: 'TV i audio', l2: 'Televizori i dodaci', l3: 'Televizori' },
    mounts: { level: 3, l1: 'TV i audio', l2: 'Televizori i dodaci', l3: 'TV nosači' },
    soundbar: { level: 3, l1: 'TV i audio', l2: 'Audio oprema', l3: 'Kućna kina (soundbarovi)' },
    headphones: { level: 3, l1: 'TV i audio', l2: 'Audio oprema', l3: 'Slušalice' },
    projectors: { level: 3, l1: 'TV i audio', l2: 'Projektori i platna', l3: 'Projektori' },
    cables: { level: 3, l1: 'TV i audio', l2: 'Kablovi i dodaci', l3: 'Video kablovi' }
  };

  const SERVICES = {
    mount: { icon: 'tv', title: 'Montaža TV-a na zid', text: 'Dolazak na adresu, montaža nosača, postavljanje televizora, spajanje do tri uređaja i osnovno podešavanje slike.', price: 'od 49,90 €', cta: 'Rezerviraj montažu' },
    removal: { icon: 'recycle', title: 'Odvoz starog uređaja', text: 'Pri dostavi novog uređaja besplatno preuzimamo stari uređaj iste vrste i predajemo ga na propisno zbrinjavanje.', price: 'Besplatno uz dostavu', cta: 'Saznaj više' },
    calib: { icon: 'tv', title: 'Montaža TV uređaja na postolje', text: 'Tehničar raspakira televizor, montira postolje ili stalak, spaja uređaje i podešava osnovne postavke slike i programa.', price: 'od 29,90 €', cta: 'Rezerviraj montažu' }
  };

  window.BB_TVGEO = {
    today: TODAY,
    tiles: TILES,
    cat: CAT,

    l1: {
      intro: 'U Big Bangu pronađi sve za vrhunski doživljaj slike i zvuka na jednom mjestu; od televizora različitih veličina do soundbarova, kućnih kina, slušalica, projektora, Hi-Fi opreme i kablova. Otkrij uređaje za svaki prostore i doživi UAU iskustvo kupnje uz brzu isporuku, mogućnost plaćanja na rate i veliki izbor televizora online i u poslovnicama. Dodatne usluge poput montaže televizora na zid i odvoza starog uređaja čine kupnju još jednostavnijom i bezbrižnijom.',
      guides: [
        { key: 'tv', img: 'images/guide-tv.png', eyebrow: 'Televizori', title: 'Kako odabrati televizor', points: ['Za 2,5 m udaljenosti: 65″ do 75″', 'OLED za tamnu sobu, QLED za svijetlu', '120 Hz i HDMI 2.1 za PS5 i Xbox'], date: '13.10.2026.', read: '6 min', count: 'Televizori (1.284)' },
        { key: 'soundbar', img: 'images/blog-tv-watching.png', eyebrow: 'Soundbarovi', title: 'Kako odabrati soundbar', points: ['Spojite ga na HDMI eARC ulaz', 'Središnji kanal (3.1) za jasan dijalog', 'Dolby Atmos za filmski zvuk'], date: '09.10.2026.', read: '4 min', count: 'Soundbarovi (212)' },
        { key: 'headphones', img: 'images/guide-slusalice.png', eyebrow: 'Slušalice', title: 'Kako odabrati slušalice', points: ['ANC za putovanja i otvoreni ured', 'Otvoreni dizajn za sport i promet', 'LDAC ili aptX za kvalitetniji zvuk'], date: '06.10.2026.', read: '5 min', count: 'Slušalice (684)' },
        { key: 'projectors', img: 'images/guide-projektor.png', eyebrow: 'Projektori', title: 'Kako odabrati projektor', points: ['Za dnevnu sobu: 3.000+ ANSI lumena', 'Kratki domet za male prostorije', 'Platno daje oštriju sliku od zida'], date: '02.10.2026.', read: '5 min', count: 'Projektori (92)' }
      ],
      brands: [['Samsung', 612], ['LG', 498], ['Sony', 386], ['Philips', 344], ['Hisense', 212], ['TCL', 188], ['JBL', 274], ['Bose', 96]],
      services: ['mount', 'removal', 'calib'],
      faqTitle: 'Česta pitanja o kupnji TV i audio opreme',
      faq: [
        { q: 'Kako se dostavljaju veliki televizori?', a: 'Televizore od 55″ naviše dostavljamo specijaliziranom dostavom na adresu u 1–3 radna dana, uz unos u stan do željene prostorije. Dostavljač vas nazove dan ranije i dogovori termin. Manje uređaje šaljemo paketnom dostavom, a narudžbe zaprimljene do 14 sati često stižu već sljedeći radni dan. Dostava je besplatna za narudžbe iznad 50 €.' },
        { q: 'Možete li montirati televizor na zid?', a: 'Da. Montaža TV-a na zid stoji od 49,90 € i uključuje dolazak na adresu, montažu nosača, postavljanje televizora, spajanje uređaja i osnovno podešavanje slike. Uslugu dodajete u košaricu uz televizor ili naknadno, a tehničar dolazi u dogovorenom terminu. Nosač kupujete zasebno ili u paketu s televizorom.' },
        { q: 'Odvozite li stari televizor ili audio uređaj?', a: 'Da. Pri dostavi novog uređaja besplatno preuzimamo stari uređaj iste vrste i predajemo ga na zbrinjavanje u skladu s propisima o električnom otpadu. Odvoz označite pri narudžbi, a uređaj treba biti odspojen i spreman za preuzimanje. Stari uređaj možete predati i u bilo kojoj Big Bang trgovini.' },
        { q: 'Mogu li vratiti proizvod kupljen online?', a: 'Proizvod kupljen online možete vratiti u roku od 14 dana od preuzimanja bez navođenja razloga. Ispunite obrazac za povrat ili uređaj donesite u najbližu trgovinu. Proizvod treba biti neoštećen i potpun, a novac vraćamo istim načinom plaćanja najkasnije 14 dana od primitka povrata.' },
        { q: 'Mogu li televizor platiti na rate?', a: 'Da. Televizore i audio opremu možete platiti na do 36 rata bez kamata karticama banaka partnera, a za odabrane proizvode dostupan je i potrošački kredit. Iznos mjesečne rate vidite uz svaki proizvod i u košarici prije potvrde narudžbe. Plaćanje na rate dostupno je online i u trgovinama.' },
        { q: 'Koliko traje jamstvo na TV i audio uređaje?', a: 'Za sve proizvode vrijedi zakonsko jamstvo od najmanje dvije godine. Neki proizvođači daju i dulje jamstvo trajnosti, što je označeno na stranici proizvoda. Big Bang produljeno jamstvo zasebna je plaćena usluga koja produljuje zaštitu do ukupno pet godina i nije isto što i jamstvo proizvođača.' }
      ],
      facts: [
        { big: '4.441', small: 'modela u ponudi' },
        { big: '112', small: 'brendova' },
        { big: '1–3 dana', small: 'dostava velikih TV-a do vrata' },
        { big: 'STORES', small: 'prodajnih mjesta s izloženim uređajima' }
      ],
      aboutTitle: 'O kategoriji TV i audio',
      about: 'TV i audio obuhvaća 4.441 model 112 brendova u sedam potkategorija: televizori i dodaci, projektori i platna, video uređaji, audio oprema, Hi-Fi oprema, prijenosni audio uređaji te kablovi i dodaci. Najveći izbor imamo u televizorima (1.284 modela) i audio opremi (1.612 modela). Narudžbe do 14 sati šaljemo isti dan, televizore od 55″ dostavljamo do vrata u 1–3 radna dana, a izložene modele možete pogledati u STORES prodajnih mjesta.'
    },

    l2: {
      intro: 'Sve što trebate oko televizora: nosači za montažu na zid, soundbarovi za bolji zvuk, HDMI kabeli, antene, digitalni prijamnici i daljinski upravljači. Na ovoj stranici provjerite koji nosač odgovara vašoj dijagonali i VESA uzorku, koji kabel trebate za igraću konzolu i što uključuje montaža. Televizor, nosač i montažu naručujete zajedno, a tehničar sve postavlja u jednom dolasku.',
      steps: [
        { n: '1', key: 'mounts', img: 'images/setup-nosac.png', title: 'Nosač', text: 'Provjerite VESA uzorak (razmak rupa na stražnjoj strani, npr. 300 × 300 mm) i težinu televizora, pa odaberite fiksni, nagibni ili zakretni nosač.', link: 'TV nosači (214)' },
        { n: '2', key: 'soundbar', img: 'images/setup-soundbar.png', title: 'Zvuk', text: 'Ugrađeni zvučnici tanki su kao i ekran. Soundbar spojen na HDMI eARC donosi jasniji dijalog, dublji bas i Dolby Atmos.', link: 'Soundbarovi (212)' },
        { n: '3', key: 'cables', img: 'images/setup-kabeli.png', title: 'Kabeli', text: 'Za PS5, Xbox Series X i 4K pri 120 Hz trebate Ultra High Speed HDMI 2.1 kabel. Za TV prijamnik i streaming dovoljan je High Speed HDMI.', link: 'HDMI kabeli (138)' },
        { n: '4', key: 'service', img: '', title: 'Montaža', text: 'Tehničar dolazi na adresu, montira nosač, postavlja televizor, spaja do tri uređaja i podešava sliku.', link: 'Rezerviraj montažu', price: 'od 49,90 €' }
      ],
      compatNote: 'Težinu i VESA uzorak vašeg modela pronaći ćete u specifikacijama ili uputama za televizor. Nosač mora podržavati oba podatka.',
      compat: [
        { size: '24–32″', weight: '3–6 kg', vesa: '75 × 75, 100 × 100', mount: 'Fiksni ili nagibni', load: 'do 20 kg', count: 38 },
        { size: '40–43″', weight: '6–10 kg', vesa: '100 × 100, 200 × 200', mount: 'Fiksni, nagibni ili zakretni', load: 'do 30 kg', count: 52 },
        { size: '50–55″', weight: '11–18 kg', vesa: '200 × 200, 300 × 300', mount: 'Nagibni ili zakretni', load: 'do 35 kg', count: 49 },
        { size: '65″', weight: '18–28 kg', vesa: '300 × 300, 400 × 300', mount: 'Nagibni ili zakretni', load: 'do 45 kg', count: 41 },
        { size: '75″', weight: '28–40 kg', vesa: '400 × 300, 400 × 400', mount: 'Fiksni ili nagibni', load: 'do 60 kg', count: 23 },
        { size: '85–98″', weight: '40–65 kg', vesa: '600 × 400, 800 × 400', mount: 'Fiksni za teške televizore', load: 'do 80 kg', count: 11 }
      ],
      services: ['mount', 'calib', 'removal'],
      faqTitle: 'Česta pitanja o TV dodacima i postavljanju',
      faq: [
        { q: 'Što je VESA i kako znam koji nosač mi treba?', a: 'VESA je standardni razmak rupa za vijke na stražnjoj strani televizora, izražen u milimetrima, npr. 200 × 200 ili 400 × 300. Nosač mora podržavati VESA uzorak vašeg televizora i njegovu težinu. Oba podatka pronaći ćete u specifikacijama proizvoda, a u tablici kompatibilnosti na ovoj stranici vidite koji nosač odgovara kojoj dijagonali.' },
        { q: 'Fiksni, nagibni ili zakretni nosač?', a: 'Fiksni nosač drži televizor najbliže zidu i najpovoljniji je kad gledate ravno ispred ekrana. Nagibni omogućuje naginjanje ekrana prema dolje, što pomaže kad je televizor postavljen više, npr. iznad kamina. Zakretni nosač na kraku okreće ekran prema različitim dijelovima sobe i najbolji je za otvorene prostore i kutove.' },
        { q: 'Treba li mi HDMI 2.1 kabel?', a: 'HDMI 2.1 kabel (Ultra High Speed) trebate ako spajate PlayStation 5, Xbox Series X ili računalo i želite 4K sliku pri 120 Hz, VRR i ALLM. Za TV prijamnik, Blu-ray ili streaming uređaj dovoljan je High Speed HDMI kabel. Provjerite i je li ulaz na televizoru označen kao HDMI 2.1.' },
        { q: 'Kako spojiti soundbar s televizorom?', a: 'Soundbar je najbolje spojiti HDMI kabelom na ulaz televizora označen s eARC ili ARC. Tako se zvuk prenosi bez gubitaka, uključujući Dolby Atmos, a soundbarom upravljate daljinskim upravljačem televizora. Ako televizor nema ARC, koristite optički kabel, uz ograničenje na stereo i osnovni surround zvuk.' },
        { q: 'Koliko košta montaža TV-a i što uključuje?', a: 'Montaža TV-a na zid stoji od 49,90 €. Uključuje dolazak na adresu, bušenje i montažu nosača, postavljanje televizora, spajanje do tri uređaja i osnovno podešavanje slike. Nosač nije uključen u cijenu usluge. Za gips-kartonske zidove i televizore teže od 40 kg tehničar procjenjuje potreban pričvrsni materijal.' },
        { q: 'Trebam li antenu ili prijamnik za TV program?', a: 'Za besplatne programe DVB-T2 mreže trebate sobnu ili krovnu antenu, a noviji televizori imaju ugrađen DVB-T2 HEVC prijamnik. Stariji televizori bez tog prijamnika trebaju vanjski digitalni prijamnik. Ako gledate kabelsku ili IPTV televiziju, potreban uređaj obično osigurava vaš operater.' }
      ],
      facts: [
        { big: '1.786', small: 'proizvoda u kategoriji' },
        { big: '214', small: 'TV nosača za 24″ do 98″' },
        { big: '49,90 €', small: 'montaža na zid, cijena od' },
        { big: 'STORES', small: 'prodajnih mjesta' }
      ],
      aboutTitle: 'O kategoriji Televizori i dodaci',
      about: 'Televizori i dodaci obuhvaćaju 1.284 televizora i 502 dodatka: 214 zidnih i stolnih nosača za dijagonale od 24″ do 98″, 96 antena i pripadajuće opreme, 31 digitalni prijamnik, 58 daljinskih upravljača i 103 ostala dodatka. Montažu televizora na zid naručujete uz proizvod od 49,90 €, a dodatke za postavljanje možete preuzeti isti dan u STORES prodajnih mjesta.'
    },

    l3: {
      sizes: [
        { inch: 32, label: '32″', filter: 'Do 32" (81 cm)', count: 118 },
        { inch: 43, label: '43″', filter: '43" (108 cm)', count: 187 },
        { inch: 50, label: '50″', filter: '50" (127 cm)', count: 221 },
        { inch: 55, label: '55″', filter: '55" (139 cm)', count: 264 },
        { inch: 65, label: '65″', filter: '65" (164 cm)', count: 238 },
        { inch: 75, label: '75″', filter: '75" (189 cm)', count: 162 },
        { inch: 85, label: '85″', filter: '85" (215 cm)', count: 71 },
        { inch: 98, label: '98″', filter: '98" (248 cm)', count: 23 }
      ],
      diagNote: 'Udaljenost vrijedi za 4K televizore: od 1 do 1,5 dijagonale ekrana. Za Full HD sjedite oko 1,5 puta dalje, a za 8K možete sjediti i bliže.',
      tech: [
        { key: 'OLED', filter: 'OLED', count: 132, contrast: 5, contrastTxt: 'Beskonačan, samosvjetleći pikseli', bright: 3, brightTxt: 'Srednja', angle: 'Najširi', best: 'Filmovi u zamračenoj sobi, gaming', from: 'od 899 €' },
        { key: 'QLED', filter: 'QLED', count: 286, contrast: 3, contrastTxt: 'Dobar', bright: 4, brightTxt: 'Visoka', angle: 'Dobar', best: 'Svijetli dnevni boravci, sport', from: 'od 279 €' },
        { key: 'Mini-LED', filter: 'Mini-LED', count: 94, contrast: 4, contrastTxt: 'Vrlo dobar, lokalno zatamnjivanje', bright: 5, brightTxt: 'Vrlo visoka', angle: 'Dobar', best: 'HDR filmovi i vrlo svijetle sobe', from: 'od 499 €' },
        { key: 'LED', filter: 'LED', count: 702, contrast: 2, contrastTxt: 'Osnovni', bright: 3, brightTxt: 'Srednja', angle: 'Ograničen', best: 'Spavaća soba, drugi televizor', from: 'od 129 €' }
      ],
      uses: [
        { key: 'gaming', label: 'Gaming', title: 'Najbolji televizori za gaming', why: 'Za PS5, Xbox Series X i gaming računalo trebate 120 Hz ili više, HDMI 2.1 i nisko kašnjenje ulaza.', specs: ['120–165 Hz', 'HDMI 2.1', 'VRR', 'ALLM'], filter: '100/120 Hz',
          picks: [
            { p: { img: 'images/tv/lg-oled-c5.png', name: 'TV LG OLED65C54LA, 164cm (65"), OLED evo, 4K UHD Smart TV, webOS', price: '1.299,00 €', old: '1.799,00 €' }, reason: 'OLED sa 144 Hz, četiri HDMI 2.1 ulaza i trenutnim odzivom piksela.' },
            { p: { img: 'images/tv/hisense-uled-u8.png', name: 'TV HISENSE 75U8Q, 189cm (75"), Mini-LED Pro, 4K UHD Smart TV, 165 Hz', price: '1.399,00 €', old: '1.799,00 €' }, reason: 'Mini-LED Pro s izvornih 165 Hz i lokalnim zatamnjivanjem po cijelom ekranu.' },
            { p: { img: 'images/tv/samsung-neo-qled.png', name: 'TV SAMSUNG QE55QN85FATXXH, 138cm (55"), Neo QLED, 4K UHD Smart TV, Tizen OS', price: '1.099,00 €', old: '1.399,00 €' }, reason: 'Neo QLED sa 120 Hz, VRR i Samsung Gaming Hubom za igre u oblaku.' }
          ] },
        { key: 'sport', label: 'Sport', title: 'Najbolji televizori za sport', why: 'Za utakmice uz dnevno svjetlo važni su visoka svjetlina, glatki prikaz brzih pokreta i veća dijagonala.', specs: ['Visoka svjetlina', '100/120 Hz', '65″ i više'], filter: '65" (164 cm)',
          picks: [
            { p: { img: 'images/tv/samsung-mini-led.png', name: 'TV SAMSUNG QE65QN70FATXXH, 163cm (65"), Mini LED, 4K UHD Smart TV, Tizen OS', price: '899,00 €', old: '1.149,00 €' }, reason: 'Svijetao Mini LED ekran od 65″ koji drži sliku jasnom i uz otvorene prozore.' },
            { p: { img: 'images/tv/hisense-uled-u7.png', name: 'TV HISENSE 65U7Q, 164cm (65"), Mini-LED, 4K UHD Smart TV, 144 Hz', price: '799,00 €', old: '999,00 €' }, reason: '144 Hz i Mini-LED svjetlina za utakmice po danu, uz povoljnu cijenu za 65″.' },
            { p: { img: 'images/tv/philips-ambilight-qled.png', name: 'TV PHILIPS 55PUS8919/12, 139cm (55"), QLED, 4K UHD Smart TV, Ambilight', price: '749,00 €', old: '899,00 €' }, reason: 'Ambilight produžuje sliku na zid pa utakmica djeluje veća od ekrana.' }
          ] },
        { key: 'small', label: 'Mala soba', title: 'Najbolji televizori za malu sobu', why: 'Za udaljenost gledanja do 1,6 m dovoljan je televizor od 32″ do 43″. Lakši je za montažu i troši manje energije.', specs: ['32–43″', 'Do 1,6 m', 'Kompaktan'], filter: 'Do 32" (81 cm)',
          picks: [
            { p: { img: 'images/tv/philips-compact-hd.png', name: 'TV PHILIPS 32PHS6009/12, 80cm (32"), HD LED, Smart TV, Titan OS', price: '199,00 €', old: '249,00 €' }, reason: 'Kompaktan 32″ s HDR10 i Titan OS sustavom, idealan za spavaću sobu ili kuhinju.' },
            { p: { img: 'images/tv/lg-nano-2026.png', name: 'TV LG 43NANO82A6, 109cm (43"), NanoCell, 4K UHD Smart TV, webOS', price: '379,00 €', old: '449,00 €' }, reason: 'NanoCell boje i brzi webOS u kompaktnom kućištu od 43″.' },
            { p: { img: 'images/tv/samsung-crystal-uhd.png', name: 'TV SAMSUNG UE43DU7172UXXH, 108cm (43"), Crystal UHD, 4K Smart TV, Tizen OS', price: '299,00 €', old: '379,00 €' }, reason: '43″ 4K s tankim okvirom — oštra slika i na 1,2 m udaljenosti.' }
          ] },
        { key: 'budget', label: 'Do 500 €', title: 'Najbolji televizori do 500 €', why: 'Do 500 € dobivate 50″ do 55″ 4K televizor s HDR-om i svim streaming aplikacijama.', specs: ['50–55″', '4K HDR', 'Do 500 €'], filter: '300 – 500 €',
          picks: [
            { p: { img: 'images/tv/samsung-crystal-uhd.png', name: 'TV SAMSUNG UE50U8072HUXXH, 125cm (50"), Crystal UHD, 4K Smart TV, Tizen OS', price: '459,00 €', old: '539,00 €' }, reason: '50″ Crystal UHD 4K s Tizen sustavom — najviše Samsunga za manje od 500 €.' },
            { p: { img: 'images/tv/lg-nano-2026.png', name: 'TV LG 55NANO82A6, 139cm (55"), NanoCell, 4K UHD Smart TV, webOS', price: '449,00 €', old: '599,00 €' }, reason: '55″ 4K NanoCell s brzim webOS sustavom i svim streaming aplikacijama.' },
            { p: { img: 'images/tv/philips-compact-hd.png', name: 'TV PHILIPS 32PHS6009/12, 80cm (32"), HD LED, Smart TV, Titan OS', price: '199,00 €', old: '249,00 €' }, reason: 'Najpovoljniji Smart TV u ponudi, s Dolby Audio zvukom i Titan OS-om.' }
          ] }
      ],
      faqTitle: 'Česta pitanja o kupnji televizora',
      faq: [
        { q: 'Koju dijagonalu televizora odabrati za 2,5 m udaljenosti?', a: 'Za udaljenost gledanja od 2,5 m preporučujemo 4K televizor dijagonale 65″ do 75″. Kod 4K rezolucije možete sjediti na 1 do 1,5 dijagonale od ekrana, a da ne vidite pojedinačne piksele. Ako gledate uglavnom TV program, 65″ je dovoljan; za filmove i sport isplati se 75″.' },
        { q: 'OLED ili QLED televizor?', a: 'OLED ima savršeno crnu boju i beskonačan kontrast jer svaki piksel sam svijetli, pa je najbolji za filmove u zamračenoj sobi. QLED koristi LED pozadinsko osvjetljenje i kvantne točke, svjetliji je i otporniji na odsjaje, pa je bolji za svijetle dnevne boravke. QLED je u pravilu povoljniji od OLED-a iste dijagonale.' },
        { q: 'Što znače 120 Hz i HDMI 2.1?', a: '120 Hz znači da se slika osvježava 120 puta u sekundi, pa je kretanje u sportu i igrama glađe nego na 60 Hz. HDMI 2.1 je priključak koji omogućuje 4K sliku pri 120 Hz te funkcije za igranje VRR i ALLM. Važni su ako imate PlayStation 5, Xbox Series X ili gaming računalo.' },
        { q: 'Što znači energetski razred televizora?', a: 'Od 2021. televizori se označavaju razredima od A do G prema potrošnji pri SDR i HDR prikazu. Većina 4K televizora nalazi se u razredima E do G jer je skala namjerno stroga. Zato usporedite potrošnju u kWh na 1000 sati s energetske oznake; razlika između modela iste dijagonale može biti i 40 %.' },
        { q: 'Kako funkcioniraju dostava i montaža televizora?', a: 'Televizore od 55″ naviše dostavljamo na adresu u 1–3 radna dana uz unos u stan, a manje modele često već sljedeći radni dan. Uz narudžbu možete dodati montažu na zid od 49,90 € i besplatan odvoz starog televizora. Tehničar dolazi u dogovorenom terminu, montira nosač, spaja uređaje i podešava osnovne postavke.' },
        { q: 'Koliko traje jamstvo na televizor?', a: 'Svi televizori imaju zakonsko jamstvo od najmanje dvije godine. Neki proizvođači daju i dulje jamstvo trajnosti; kad je besplatno i dulje od dvije godine, uz proizvod prikazujemo EU oznaku jamstva. Big Bang produljeno jamstvo zasebna je plaćena usluga koja produljuje zaštitu do ukupno pet godina.' },
        { q: 'Isplati li se 8K televizor?', a: 'Za većinu kućanstava još ne. Sadržaja u 8K rezoluciji gotovo nema, a razlika u odnosu na 4K vidljiva je tek na dijagonalama od 75″ naviše i s manje udaljenosti. 8K televizori dobro povećavaju 4K sadržaj, ali za istu cijenu obično dobijete veći ili kvalitetniji 4K model, npr. OLED ili Mini-LED.' },
        { q: 'Koji Smart TV sustav odabrati?', a: 'Najčešći sustavi su Google TV (Sony, TCL, Philips), Tizen (Samsung), webOS (LG) i VIDAA (Hisense). Svi imaju Netflix, YouTube, HBO Max, Disney+ i lokalne aplikacije poput HRTi i Voyo. Google TV ima najveći izbor aplikacija i ugrađen Chromecast, a Tizen i webOS ističu se brzinom i jednostavnim izbornikom.' }
      ],
      summary: [
        { k: 'Modela u ponudi', v: '1.284' },
        { k: 'Raspon cijena', v: '129 € – 7.999 €' },
        { k: 'Najprodavaniji brendovi', v: 'Samsung, LG, Philips' },
        { k: 'Najprodavanija dijagonala', v: '55″' }
      ],
      aboutTitle: 'O kategoriji Televizori',
      about: 'U kategoriji Televizori trenutačno je 1.284 modela 38 brendova, od 129 € za 32″ LED televizor do 7.999 € za 98″ Mini-LED. Najprodavaniji brendovi su Samsung, LG i Philips, a najprodavanija dijagonala je 55″, koja odgovara udaljenosti gledanja od 1,4 do 2,1 m. Tri od četiri prodana televizora imaju 4K rezoluciju, a OLED i Mini-LED čine petinu prodaje iznad 800 €. Ako tek birate, krenite od udaljenosti sofe, pa odaberite tehnologiju prema svjetlu u sobi.',
      author: 'Big Bang stručni savjet · tim za TV i audio'
    },

    services: SERVICES
  };
})();
