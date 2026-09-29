/* Big Bang prodajna mjesta — shared store list (map + StoreLocator component).
   Coordinates are approximate mall/retail-park locations. */
window.BB_STORES = [
  { name: 'Big Bang Zagreb, SD Megastore Arena park', city: 'Zagreb', address: 'Jankomir 33, 10000 Zagreb', hours: 'Pon–Sub 9–21, Ned 12–18', phone: '01 6655 555', lat: 45.7955, lng: 15.8850, extras: ['Parking', 'Pristup osobama s invaliditetom'] },
  { name: 'Big Bang Sveta Nedelja', city: 'Sveta Nedelja', address: 'Dr. Franje Tuđmana 69, 10431 Sveta Nedelja', hours: 'Pon–Sub 9–21, Ned zatvoreno', phone: '01 6655 555', lat: 45.7960, lng: 15.7800, extras: ['Parking', 'Pristup osobama s invaliditetom'] },
  { name: 'Big Bang Zagreb, Arena Centar', city: 'Zagreb', address: 'Vice Vukova 6, 10020 Zagreb', hours: 'Pon–Sub 9–21, Ned 10–20', phone: '01 6655 555', lat: 45.7757, lng: 15.9310 },
  { name: 'Big Bang Zagreb, Avenue Mall', city: 'Zagreb', address: 'Avenija Dubrovnik 16, 10020 Zagreb', hours: 'Pon–Sub 9–21, Ned 10–20', phone: '01 6655 555', lat: 45.7793, lng: 15.9645 },
  { name: 'Big Bang Zagreb, City Center one East', city: 'Zagreb', address: 'Slavonska avenija 11d, 10000 Zagreb', hours: 'Pon–Sub 9–21, Ned 10–20', phone: '01 6655 555', lat: 45.8027, lng: 16.0390 },
  { name: 'Big Bang Zagreb, Westgate', city: 'Zagreb', address: 'Zaprešić, Jablanovec 88, 10290 Zaprešić', hours: 'Pon–Sub 9–21, Ned 10–20', phone: '01 6655 555', lat: 45.8628, lng: 15.8397 },
  { name: 'Big Bang Split, Mall of Split', city: 'Split', address: 'Josipa Jovića 93, 21000 Split', hours: 'Pon–Sub 9–21, Ned 10–20', phone: '021 555 000', lat: 43.5178, lng: 16.4646 },
  { name: 'Big Bang Rijeka, Tower Center', city: 'Rijeka', address: 'Janka Polića Kamova 81a, 51000 Rijeka', hours: 'Pon–Sub 9–21, Ned 10–20', phone: '051 555 000', lat: 45.3324, lng: 14.4574 },
  { name: 'Big Bang Osijek, Portanova', city: 'Osijek', address: 'Svilajska 31a, 31000 Osijek', hours: 'Pon–Sub 9–21, Ned 10–20', phone: '031 555 000', lat: 45.5265, lng: 18.6842 },
  { name: 'Big Bang Zadar, Supernova', city: 'Zadar', address: 'Ulica Franje Tuđmana 5, 23000 Zadar', hours: 'Pon–Sub 9–21, Ned 10–20', phone: '023 555 000', lat: 44.1130, lng: 15.2513 },
  { name: 'Big Bang Varaždin, Lumini', city: 'Varaždin', address: 'Trg Ivana Perkovca 1, 42204 Turčin', hours: 'Pon–Sub 9–21, Ned 10–20', phone: '042 555 000', lat: 46.2830, lng: 16.2600 },
  { name: 'Big Bang Pula, Max City', city: 'Pula', address: 'Šijanska cesta 2, 52100 Pula', hours: 'Pon–Sub 9–21, Ned 10–20', phone: '052 555 000', lat: 44.8776, lng: 13.8617 },
  { name: 'Big Bang Slavonski Brod', city: 'Slavonski Brod', address: 'Josipa Jurja Strossmayera 34, 35000 Slavonski Brod', hours: 'Pon–Sub 9–21, Ned zatvoreno', phone: '035 555 000', lat: 45.1600, lng: 18.0156 },
  { name: 'Big Bang Dubrovnik, Srđ', city: 'Dubrovnik', address: 'Vukovarska 18, 20000 Dubrovnik', hours: 'Pon–Sub 9–21, Ned 10–20', phone: '020 555 000', lat: 42.6588, lng: 18.0843 },
  { name: 'Big Bang Karlovac, Mercator centar', city: 'Karlovac', address: 'Ulica Josipa Kraša 5, 47000 Karlovac', hours: 'Pon–Sub 9–20, Ned zatvoreno', phone: '047 555 000', lat: 45.4929, lng: 15.5553 },
  { name: 'Big Bang Šibenik, Dalmare', city: 'Šibenik', address: 'Velimira Škorpika 27, 22000 Šibenik', hours: 'Pon–Sub 9–21, Ned 10–20', phone: '022 555 000', lat: 43.7280, lng: 15.9080 },
  { name: 'Big Bang Čakovec, Merkur centar', city: 'Čakovec', address: 'Ulica Vladimira Nazora 6, 40000 Čakovec', hours: 'Pon–Sub 9–20, Ned zatvoreno', phone: '040 555 000', lat: 46.3872, lng: 16.4344 }
];

/* Salons with kitchen displays (Kuhinje landing, SI) — addresses/hours to confirm before launch. */
window.BB_STORES_KUHINJE = [
  { name: 'Big Bang Celje, Citycenter', city: 'Celje', address: 'Mariborska cesta 128, 3000 Celje', hours: 'Pon–Sob 9–21, Ned zaprto', phone: '080 29 29', lat: 46.2490, lng: 15.2877 },
  { name: 'Big Bang Maribor', city: 'Maribor', address: 'Tržaška cesta 67a, 2000 Maribor', hours: 'Pon–Sob 9–21, Ned zaprto', phone: '080 29 29', lat: 46.5390, lng: 15.6460 },
  { name: 'Big Bang Ljubljana, Rudnik', city: 'Ljubljana', address: 'Jurčkova cesta 223, 1000 Ljubljana', hours: 'Pon–Sob 9–21, Ned zaprto', phone: '080 29 29', lat: 46.0269, lng: 14.5390 },
  { name: 'Big Bang Kranj', city: 'Kranj', address: 'Cesta Staneta Žagarja 67, 4000 Kranj', hours: 'Pon–Sob 9–21, Ned zaprto', phone: '080 29 29', lat: 46.2468, lng: 14.3560 },
  { name: 'Big Bang Koper', city: 'Koper', address: 'Ankaranska cesta 2, 6000 Koper', hours: 'Pon–Sob 9–21, Ned zaprto', phone: '080 29 29', lat: 45.5550, lng: 13.7470 },
  { name: 'Big Bang Ljubljana, BTC', city: 'Ljubljana', address: 'Šmartinska cesta 152, 1000 Ljubljana', hours: 'Pon–Sob 9–21, Ned zaprto', phone: '080 29 29', lat: 46.0660, lng: 14.5460 }
];
