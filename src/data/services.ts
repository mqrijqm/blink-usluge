// Sadržaj stranice /usluge sa studioblink.ba (tekstovi doslovno).
// `category` i `price` su nove oznake preuzete iz landing cjenovnika (Cijene / Pet načina).

export type Service = {
  n: string;
  title: string;
  category: string;
  p1: string;
  p2: string;
  price: string;
  image: string;
  alt: string;
  /** opcioni link ispod drugog paragrafa (tanki pravougaonik sa strelicom) */
  link?: { label: string; href: string };
};

export const services: Service[] = [
  {
    n: "01",
    title: "Razvoj softvera po mjeri",
    category: "Produkcija",
    p1: "Web i mobilne proizvode gradimo od temelja, prilagođene vašoj poslovnoj logici i stvarnim korisnicima. Od arhitekture do isporuke, sve nastaje kod nas.",
    p2: "Ne sklapamo gotove šablone. Svaki sistem dizajniramo da raste s vama i ostane jednostavan za održavanje i kada postane ozbiljan.",
    price: "Web aplikacija od 6.500 € · 6+ sedmica",
    image: "/img/ai/panel-1-svila.webp",
    alt: "Svilena perlasto bijela površina sa zlatnim svjetlom koje klizi po grebenu nabora",
    link: { label: "goldenstandard.eu", href: "https://goldenstandard.eu" },
  },
  {
    n: "02",
    title: "Integracija vještačke inteligencije",
    category: "Inteligencija",
    p1: "Pametne sisteme ugrađujemo direktno u vaše tokove rada, RAG asistenti, automatizacija i podatkovni tokovi oslonjeni na stvarne podatke, s navedenim izvorima.",
    p2: "Polazimo od konkretnog problema, ne od trenda. AI uvodimo tamo gdje stvarno skraćuje vrijeme i smanjuje greške, dok konačnu odluku zadržava čovjek.",
    price: "AI asistent od 3.500 € · 4+ sedmice",
    image: "/img/ai/panel-2.webp",
    alt: "Apstraktna slika: konstelacija svijetlih tačaka koje se slivaju u jedan narandžasti čvor",
    link: { label: "uizlogu.com", href: "https://uizlogu.com" },
  },
  {
    n: "03",
    title: "Tehnologija za gradove i institucije",
    category: "Javni sektor",
    p1: "Digitalna infrastruktura za gradove i javne institucije. Urbano smo izgradili, hostovali i pripremili za pilot Banje Luke.",
    p2: "Rješenja koja izdrže opterećenje, poštuju propise i ostaju upotrebljiva godinama, za građane i za one koji ih vode.",
    price: "Obim i cijena prije rada",
    image: "/img/ai/panel-3.webp",
    alt: "Apstraktna slika: topografske konture i mreža gradskih blokova sa jednom narandžastom oznakom",
    link: { label: "urbano.ba", href: "https://urbano.ba" },
  },
  {
    n: "04",
    title: "MVP i razvoj proizvoda",
    category: "Proizvod",
    p1: "Od ideje do lansiranog proizvoda, brzo, fokusirano i bez suvišnog. Prvu verziju gradimo tako da uči iz stvarnih korisnika.",
    p2: "Umjesto velikog plana koji čeka, isporučujemo malo i često. Svaka iteracija donosi podatke na osnovu kojih odlučujemo šta dalje.",
    price: "Prototip od 1.500 € · 1–2 sedmice",
    image: "/img/ai/panel-4-svjetlo.webp",
    alt: "Ploča bijelog mramora sa sivim žilama, preko koje pada zlatno svjetlo kroz prozor",
    link: { label: "omaska.app", href: "https://omaska.app" },
  },
  {
    n: "05",
    title: "API-ji i backend sistemi",
    category: "Infrastruktura",
    p1: "Skalabilna infrastruktura koja izdrži kada postane ozbiljno, mikroservisi, event-driven tokovi, sharding i zero-downtime deploy.",
    p2: "Čisti API-ji (REST, WebSocket), jasna dokumentacija i sistemi koje je lako proširiti, temelj na koji se ostatak tima može osloniti.",
    price: "Razvojno partnerstvo od 2.500 € mjesečno",
    image: "/img/ai/panel-5-tech.webp",
    alt: "Zbijeni mozaik kvadratnih pločica u prigušenim rđastim i ćilibarnim tonovima na tamnoj podlozi",
    link: { label: "arky.studioblink.ba", href: "https://arky.studioblink.ba" },
  },
  {
    n: "06",
    title: "Web dizajn i identitet",
    category: "Identitet",
    p1: "Promišljen dizajn sa stavom. Bez šablona i bez generičnog, identitet koji se prepoznaje i pamti.",
    p2: "Vizuelni jezik gradimo tako da radi svuda i priča istu priču. Za Pčelarstvo Jevtić isti znak stoji na etiketi tegle, na deklaraciji pripremljenoj za štampu i na prodavnici.",
    price: "Vizuelni identitet od 3.000 € · 2–3 sedmice",
    image: "/img/ai/panel-6.webp",
    alt: "Apstraktna slika: crni krug i letva utisnuti u krem papir sa malom narandžastom tačkom",
    link: { label: "pcelarstvojevtic.com", href: "https://pcelarstvojevtic.com" },
  },
];

export type Showcase = {
  /** crno-bijela (nizak kontrast) verzija, zadano stanje */
  bw: string;
  /** originalne boje, pojavljuje se na hover */
  color: string;
  shape: "portrait" | "landscape";
  alt: string;
};

// Radovi u stubu: naizmjenično vertikalne (4:5) i horizontalne (1916:821), svi iste veličine unutar svog tipa.
const w = (name: string) => ({ bw: `/img/work/${name}-bw.webp`, color: `/img/work/${name}-color.webp` });
export const showcase: Showcase[] = [
  // Strogo naizmjenično: vertikalna, horizontalna, vertikalna, horizontalna...
  { ...w("v1-urbano"), shape: "portrait", alt: "Urbano aplikacija na telefonu u ruci, u gradu" },
  { ...w("h1-lana"), shape: "landscape", alt: "Lana Zrnić, portfolio skulptorke, galerija fotografija" },
  { ...w("v2-sto"), shape: "portrait", alt: "Mramorni sto Calacatta sa karticom proizvoda" },
  { ...w("h6-vizualizator"), shape: "landscape", alt: "3D vizualizator kuhinje: izbor dekora fronti, korpusa i radne ploče" },
  { ...w("v7-mlijeko"), shape: "portrait", alt: "Golden Standard barista mlijeko, četiri tetrapaka u rukama" },
  { ...w("h7-hermes"), shape: "landscape", alt: "Arky: pozadina sajta na jednom mjestu, kameni Hermes sa modulima" },
  { ...w("v4-oko"), shape: "portrait", alt: "Kameni fragment skulpture sa okom, kolaž" },
  { ...w("h5-orbita"), shape: "landscape", alt: "Nova Forma Orbita, svjetiljka od opala na plavom zidu" },
  { ...w("v5-decade"), shape: "portrait", alt: "Tipografski poster: šta jedna decenija rada postane" },
];

export type InspoSlot = "tr" | "br" | "tl" | "bl";
export type Inspo = { text: string; slot: InspoSlot; from: number; to: number };

// Tekst u uglovima: rečenica je podijeljena na dvije smislene polovine. Prva ide desno (poravnata desno),
// druga lijevo (poravnata lijevo), dijagonalno. Parovi se smjenjuju (A: gore desno + dolje lijevo,
// B: dolje desno + gore lijevo) i preklapaju, pa je od druge slike nadalje stalno popunjen cijeli okvir.
// Izvor: uvod stranice /usluge i landing studioblink.ba.
const pairs: { right: string; left: string }[] = [
  { right: "Gradimo sisteme koji idu u ruke stvarnih korisnika", left: "i ostaju jednostavni za održavanje kada postanu ozbiljni." },
  { right: "Ista pažnja ide u rješavanje produkcijskog kvara kao i u čist kôd koji objašnjava sam sebe,", left: "i onda kada autor ode dalje." },
  { right: "Jedan tim vodi proizvod", left: "od prve odluke do produkcije." },
  { right: "Obim, rok i cijena stoje na papiru prije nego počne rad,", left: "a izvorni kod i pristupi ostaju vaši." },
  { right: "Tehnologiju biramo prema problemu,", left: "ne prema navici." },
  { right: "Radna verzija svake sedmice.", left: "Napredak gledate na testnom linku, ne na sastanku." },
  { right: "Ne biramo dio posla. Preuzimamo cijeli,", left: "strategiju, identitet, softver, AI i rast." },
  { right: "AI uvodimo tamo gdje stvarno skraćuje vrijeme", left: "i smanjuje greške, dok konačnu odluku zadržava čovjek." },
  { right: "Rješenja koja izdrže opterećenje,", left: "i ostaju upotrebljiva godinama." },
  { right: "Ostajemo i poslije objave.", left: "Održavanje i dalji razvoj dogovaramo prije predaje." },
];

// Par n počinje na slici n + 1, pa parova ima najviše koliko i slika bez prve. Višak se ne prikazuje
// (inače bi se na zadnjoj slici preklopila dva para u istim uglovima).
export const inspo: Inspo[] = pairs.slice(0, showcase.length - 1).flatMap((pair, n) => {
  const isA = n % 2 === 0;
  const from = n + 1;
  const to = n + 3;
  return [
    { text: pair.right, slot: (isA ? "tr" : "br") as InspoSlot, from, to },
    { text: pair.left, slot: (isA ? "bl" : "tl") as InspoSlot, from, to },
  ];
});

export type Rad = { name: string; kind: string; slug: string; img: string; alt: string };

// Radovi i proizvodi sa studioblink.ba (kartice, opisi i case stranice su sa landinga).
const r = (name: string, kind: string, slug: string, img: string, alt: string): Rad => ({
  name,
  kind,
  slug,
  img: `/img/radovi/${img}.webp`,
  alt,
});
export const radovi: Rad[] = [
  r("Urbano", "Naš proizvod", "case-urbano", "urbano", "Urbano, mapa Banje Luke s prijavama građana"),
  r("Golden Standard", "Identitet, sajt i B2B platforma", "case-golden-standard", "golden-standard", "Golden Standard, aktuelni prikaz sajta i barista mlijeka"),
  r("Omaška", "Naš proizvod", "case-omaska", "omaska", "Omaška, sistem za klinike"),
  r("U izlogu", "AI studio za artikle", "case-u-izlogu", "uizlogu", "U izlogu, studio za artikle"),
  r("Longi", "Sajt prodavnice namještaja", "case-longi", "longi", "Longi, prikaz sajta prodavnice namještaja"),
  r("Dr. Krnetić", "Demonstracija sajta", "case-krnetic", "krnetic", "Dr. Krnetić, demonstracija sajta"),
  r("Lana Zrnić", "Identitet i sajt", "case-lana-zrnic", "lana", "Lana Zrnić, identitet i sajt"),
  r("Smart AI Curator", "AI platforma", "case-smart-ai-curator", "curator", "Smart AI Curator, AI platforma"),
  r("Pčelarstvo Jevtić", "Sajt i prodavnica", "case-pcelarstvo-jevtic", "pcelarstvo-jevtic", "Pčelarstvo Jevtić, sajt i prodavnica"),
  r("jjovan.com", "Lični sajt", "case-jjovan", "jjovan", "jjovan.com, kadrovi poglavlja ličnog sajta"),
  r("MT Ponos", "Prijedlog redizajna sajta", "case-mt-ponos", "mtponos", "MT Ponos, prijedlog redizajna sajta za podne obloge"),
  r("Ihtis", "Sajt riblje kuhinje i ribarnice", "case-ihtis", "ihtis", "Ihtis, sajt riblje kuhinje i ribarnice"),
  r("Drvex", "Sajt sa 3D kuhinjom", "case-drvex", "drvex", "Drvex, sajt sa 3D kuhinjom koja se sklapa"),
  r("Lunara", "Koncept identiteta i sajta", "case-lunara", "lunara", "Lunara, koncept identiteta i sajta"),
  r("Nova Forma", "Identitet i animirani sajt", "case-nova-forma", "nova-forma", "Nova Forma, identitet i animirani sajt"),
];

export const links = {
  radovi: "https://studioblink.ba/?lang=bs#radovi",
  usluge: "https://studioblink.ba/usluge?lang=bs",
  proizvodi: "https://studioblink.ba/?lang=bs#proizvodi",
  studio: "https://studioblink.ba/studio?lang=bs",
  kontakt: "https://studioblink.ba/kontakt?lang=bs",
  email: "mailto:kontakt@studioblink.ba",
  jjovan: "https://jjovan.com",
};








