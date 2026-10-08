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
    image: "/img/ai/panel-4-admin.webp",
    alt: "Minimalistički admin panel od krem kartica, grafikona i prekidača, bez teksta, jedan narandžasti stub",
    link: { label: "omaska.app", href: "https://omaska.app" },
  },
  {
    n: "05",
    title: "API-ji i backend sistemi",
    category: "Infrastruktura",
    p1: "Skalabilna infrastruktura koja izdrži kada postane ozbiljno, mikroservisi, event-driven tokovi, sharding i zero-downtime deploy.",
    p2: "Čisti API-ji (REST, WebSocket), jasna dokumentacija i sistemi koje je lako proširiti, temelj na koji se ostatak tima može osloniti.",
    price: "Razvojno partnerstvo od 2.500 € mjesečno",
    image: "/img/ai/panel-5-svjetlo.webp",
    alt: "Snop svjetla pogađa mrežu piksela u mraku, pikseli žare narandžasto i zlatno",
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
  src: string;
  shape: "portrait" | "landscape";
};

// Apstraktne AI slike za stub u sredini stranice.
export const showcase: Showcase[] = [
  { src: "/img/ai/stack-1.webp", shape: "portrait" },
  { src: "/img/ai/stack-2.webp", shape: "landscape" },
  { src: "/img/ai/stack-3.webp", shape: "portrait" },
  { src: "/img/ai/stack-4.webp", shape: "landscape" },
  { src: "/img/ai/stack-5.webp", shape: "portrait" },
  { src: "/img/ai/stack-6.webp", shape: "landscape" },
];

// Inspo tekst u uglovima stuba. Svaka rečenica je podijeljena na dvije smislene polovine:
// prva ide desno (poravnata desno), druga lijevo (poravnata lijevo), na dijagonalnim uglovima.
// Tekst je vidljiv dok je fokus na slici između `from` (uključeno) i `to` (isključeno), pa se smjenjuju.
// Izvor: uvod stranice /usluge i landing studioblink.ba.
export type InspoSlot = "tr" | "br" | "tl" | "bl";
export const inspo: { text: string; slot: InspoSlot; from: number; to: number }[] = [
  // 1. Gradimo sisteme... (desno gore / lijevo dolje)
  { text: "Gradimo sisteme koji idu u ruke stvarnih korisnika", slot: "tr", from: 1, to: 3 },
  { text: "i ostaju jednostavni za održavanje kada postanu ozbiljni.", slot: "bl", from: 1, to: 3 },
  // 2. Ista pažnja... (desno dolje / lijevo gore)
  { text: "Ista pažnja ide u rješavanje produkcijskog kvara kao i u čist kôd koji objašnjava sam sebe,", slot: "br", from: 2, to: 4 },
  { text: "i onda kada autor ode dalje.", slot: "tl", from: 2, to: 4 },
  // 3. Jedan tim...
  { text: "Jedan tim vodi proizvod", slot: "tr", from: 3, to: 5 },
  { text: "od prve odluke do produkcije.", slot: "bl", from: 3, to: 5 },
  // 4. Obim, rok i cijena...
  { text: "Obim, rok i cijena stoje na papiru prije nego počne rad,", slot: "br", from: 4, to: 7 },
  { text: "a izvorni kod i pristupi ostaju vaši.", slot: "tl", from: 4, to: 7 },
  // 5. Tehnologiju biramo...
  { text: "Tehnologiju biramo prema problemu,", slot: "tr", from: 5, to: 7 },
  { text: "ne prema navici.", slot: "bl", from: 5, to: 7 },
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





