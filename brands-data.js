// Brand directory data (window.BB_BRANDS) — used by Pages/Brands body.dc.html
(function () {
  const CATS = [
    { id: 'mob', label: 'Mobiteli i oprema' },
    { id: 'tv', label: 'TV, audio i video' },
    { id: 'it', label: 'Informatika' },
    { id: 'bijela', label: 'Bijela tehnika' },
    { id: 'mali', label: 'Mali kućanski aparati' },
    { id: 'gaming', label: 'Gaming' },
    { id: 'foto', label: 'Foto i video' },
    { id: 'dom', label: 'Dom, vrt i alati' }
  ];
  const G = {
    mob: 'Apple,Samsung,Xiaomi,Huawei,Honor,Motorola,Nokia,OnePlus,Oppo,Realme,Vivo,Google,Nothing,ZTE,Alcatel,Doro,Cat,Ulefone,Blackview,Poco,Fairphone,Spigen,PanzerGlass,Belkin,Anker,Baseus,Ugreen,Xqisit,Otterbox,Cellularline,Puro,Hama,Mophie,Tech21,Zagg,Garmin,Amazfit,Fitbit,Withings,Polar,Suunto,Mibro,Kieslect,Nillkin,Ringke,UAG,Spigen,Forever,Setty,Maxlife,Vivanco',
    tv: 'LG,Sony,Philips,Hisense,TCL,Panasonic,Sharp,Grundig,Toshiba,Vivax,Tesla,Thomson,JVC,Metz,Loewe,Bang & Olufsen,Bose,JBL,Sonos,Harman Kardon,Marshall,Yamaha,Denon,Marantz,Pioneer,Onkyo,Teufel,Canton,Polk Audio,Klipsch,KEF,Bowers & Wilkins,Sennheiser,Audio-Technica,Beyerdynamic,AKG,Jabra,Skullcandy,Beats,Ultimate Ears,Blaupunkt,Muse,Roadstar,Lenco,Audio Pro,Technics,Dali,Magnat,Strong,Manta,Telefunken,Nordmende,Xoro,One For All,Vogel\'s,Meliconi,Sbox,Barkan,Samsung,Apple,Xiaomi,Edifier,Creative,Shure,Rode,Fender,Majority,Pure,Sangean,Philips Audio,Soundcore',
    it: 'HP,Lenovo,Dell,Acer,ASUS,MSI,Microsoft,Gigabyte,Huawei,Razer,Logitech,Corsair,SteelSeries,HyperX,Kingston,SanDisk,Western Digital,Seagate,Crucial,Samsung,Intel,AMD,Nvidia,TP-Link,Netgear,Ubiquiti,D-Link,Asustor,Synology,QNAP,Epson,Canon,Brother,Xerox,Kyocera,Lexmark,BenQ,ViewSonic,AOC,Iiyama,Philips,Eizo,LG,Genius,Natec,Rapoo,Targus,Verbatim,Transcend,Lexar,Patriot,Adata,Sharkoon,Cooler Master,be quiet!,Noctua,Fractal Design,NZXT,Thermaltake,Deepcool,Arctic,Zotac,Sapphire,PNY,Elgato,Wacom,Xiaomi,Tenda,Mercusys,Cudy,Zyxel,MikroTik,APC,Eaton,Fellowes,Leitz,Apple,Dynabook,Medion,Fujitsu,Kensington,Trust,Cherry,Keychron,Hama,Lamicall,Gembird,Delock,Lindy,Startech,Orico,Toshiba,Silicon Power,Team Group,G.Skill',
    bijela: 'Bosch,Siemens,Gorenje,Beko,Whirlpool,Electrolux,AEG,Candy,Hoover,Haier,Indesit,Hotpoint,Miele,Liebherr,Smeg,Zanussi,Neff,Gaggenau,Samsung,LG,Hisense,Vox,Končar,Tesla,Sharp,Grundig,Midea,Teka,Franke,Elica,Faber,Amica,De Dietrich,Fagor,Daewoo,Gree,Mitsubishi Electric,Daikin,Toshiba,Fujitsu,Vivax,Sendo,Ariston,Vaillant,Sinbo,Hyundai,Finlux,Schaub Lorenz,Blomberg,Asko,Fisher & Paykel,Panasonic,Cata,Pyramis,Sauter,Rosières,Kaiser,Mora',
    mali: 'Philips,Tefal,Rowenta,Braun,Bosch,Krups,De\'Longhi,Kenwood,Moulinex,Russell Hobbs,Gorenje,Severin,Sencor,Princess,Bomann,Clatronic,Taurus,Ariete,Nespresso,Dolce Gusto,Jura,Saeco,Melitta,Siemens,KitchenAid,Smeg,Ninja,Cosori,Instant Pot,Sage,Dyson,iRobot,Roborock,Ecovacs,Dreame,Kärcher,Vileda,Leifheit,Bissell,Electrolux,Remington,Babyliss,Panasonic,Oral-B,Philips Sonicare,Wahl,Moser,Beurer,Omron,Medisana,Laica,Rossmax,Tristar,Brabantia,WMF,Fissler,Zwilling,Lagostina,Rosmarino,Pyrex,Luminarc,Bialetti,Xiaomi,Rohnson,Gallet,Esperanza,ECG,Concept,Hendi,Caso,Unold,Graef,Nutribullet,Vitamix,Lavazza,Illy,Tchibo,Gaggia,Rancilio,Ufesa,Solac,Cecotec,Shark,Hoover,Tineco,Eufy,Lauben',
    gaming: 'Sony PlayStation,Microsoft Xbox,Nintendo,Valve,Meta,Turtle Beach,Nacon,PowerA,Thrustmaster,Logitech G,Razer,Trust Gaming,Genesis,Spirit of Gamer,White Shark,Subsonic,Venom,Konix,Hori,8BitDo,Ubisoft,EA Sports,Bandai Namco,Activision,Take-Two,Sega,Capcom,Square Enix,Warner Bros. Games,Plaion,Bigben,Arozzi,DXRacer,noblechairs,Anda Seat,Fanatec,Moza,Playseat,Next Level Racing,Asus ROG,MSI Gaming,Alienware,Corsair,SteelSeries,HyperX,Roccat,Redragon,Marvo,Cougar,Glorious,Endgame Gear,Zowie,Pulsar,Lamzu,Wooting',
    foto: 'Canon,Nikon,Sony,Fujifilm,Panasonic Lumix,OM System,Leica,GoPro,DJI,Insta360,Polaroid,Kodak,Manfrotto,Joby,Tamron,Sigma,Rollei,Hama,Peak Design,Lowepro,Hasselblad,Ricoh,Pentax,Samyang,Viltrox,Godox,Neewer,Elgato,Zhiyun,Feiyu,SanDisk,Lexar,Benro,Tenba,Think Tank,Instax,Akaso,Osmo',
    dom: 'Gardena,Bosch Garden,Makita,Black+Decker,Einhell,Stanley,DeWalt,Ryobi,Worx,Metabo,Hikoki,Milwaukee,Kärcher,Weber,Campingaz,Char-Broil,Philips Hue,Ring,Arlo,Eufy,Ezviz,Imou,Nest,Netatmo,Tado,Somfy,Osram,Ledvance,Varta,Duracell,Energizer,GP Batteries,Stadler Form,Dyson,Trotec,Qlima,Honeywell,Fakir,Segway-Ninebot,Kugoo,Ducati Urban e-Mobility,Niu,Crussis,MS Energy,Thule,Samsonite,American Tourister,Xiaomi,Aqara,Shelly,Sonoff,Tapo,Yale,Nuki,Bosch Smart Home,Fiskars,Wolf-Garten,AL-KO,Husqvarna,Stihl,Rowenta,Bestway,Intex,Outsunny,Keter,Curver,Tescoma,Vitapur,Hansgrohe,Grohe'
  };
  // extra A brands (letter A is intentionally long to demo "Prikaži sve")
  const EXTRA = {
    mob: 'Aiwa,Allview,Aligator,Asus Zenfone,Apple Watch',
    tv: 'Acoustic Energy,Arcam,Audioengine,Auna,Aiwa Audio,Ambeo,Atlas,Advance Paris',
    it: 'Asrock,Antec,Aerocool,ADATA XPG,Aten,Axagon,A4Tech,Avermedia,Apacer,Asus TUF',
    bijela: 'Airwell,Aqua,Ardo,Atag,Arçelik',
    mali: 'Adler,Alpina,Ambiano,Ardes,Aigostar,Aeno',
    gaming: 'Astro Gaming,Asus Strix,AverMedia Live',
    foto: 'Aputure,Atomos',
    dom: 'Ansmann,Arnold,Anova,Aukey'
  };
  Object.keys(EXTRA).forEach(k => { G[k] = G[k] + ',' + EXTRA[k]; });
  const FEATURED = ['Samsung', 'Apple', 'LG', 'Sony', 'Philips', 'Bosch', 'Xiaomi', 'Lenovo', 'HP', 'Gorenje', 'Dyson', 'Hisense'];
  const LOGOS = { Samsung: 'images/brands/samsung.png' };
  const map = {};
  Object.keys(G).forEach(cat => G[cat].split(',').forEach(raw => {
    const name = raw.trim(); if (!name) return;
    const b = map[name] || (map[name] = { name, cats: [] });
    if (b.cats.indexOf(cat) < 0) b.cats.push(cat);
  }));
  const hash = (s) => { let h = 7; for (const ch of s) h = (h * 31 + ch.charCodeAt(0)) % 100003; return h; };
  const list = Object.values(map).map(b => {
    const fi = FEATURED.indexOf(b.name);
    const count = fi > -1 ? 2400 - fi * 150 + hash(b.name) % 90 : 4 + (hash(b.name) % 220) * b.cats.length + (b.cats.length > 2 ? 300 : 0);
    return { name: b.name, cats: b.cats, count, logo: LOGOS[b.name] || '', featured: fi > -1, rank: fi };
  });
  window.BB_BRANDS = { cats: CATS, list, featured: FEATURED.map(n => list.find(b => b.name === n)).filter(Boolean) };
})();
