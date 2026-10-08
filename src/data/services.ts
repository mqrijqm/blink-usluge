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
};

export const services: Service[] = [
  {
    n: "01",
    title: "Razvoj softvera po mjeri",
    category: "Produkcija",
    p1: "Web i mobilne proizvode gradimo od temelja, prilagođene vašoj poslovnoj logici i stvarnim korisnicima. Od arhitekture do isporuke, sve nastaje kod nas.",
    p2: "Ne sklapamo gotove šablone. Svaki sistem dizajniramo da raste s vama i ostane jednostavan za održavanje i kada postane ozbiljan.",
    price: "Web aplikacija od 6.500 € · 6+ sedmica",
    image: "/img/ai/panel-1.webp",
    alt: "Apstraktna slika: slojevite krem ploče precizno uklopljene, jedna narandžasta ivica",
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
  },
  {
    n: "04",
    title: "MVP i razvoj proizvoda",
    category: "Proizvod",
    p1: "Od ideje do lansiranog proizvoda, brzo, fokusirano i bez suvišnog. Prvu verziju gradimo tako da uči iz stvarnih korisnika.",
    p2: "Umjesto velikog plana koji čeka, isporučujemo malo i često. Svaka iteracija donosi podatke na osnovu kojih odlučujemo šta dalje.",
    price: "Prototip od 1.500 € · 1–2 sedmice",
    image: "/img/ai/panel-4.webp",
    alt: "Apstraktna slika: stepenice od krem blokova koji rastu na narandžastoj pozadini",
  },
  {
    n: "05",
    title: "API-ji i backend sistemi",
    category: "Infrastruktura",
    p1: "Skalabilna infrastruktura koja izdrži kada postane ozbiljno, mikroservisi, event-driven tokovi, sharding i zero-downtime deploy.",
    p2: "Čisti API-ji (REST, WebSocket), jasna dokumentacija i sistemi koje je lako proširiti, temelj na koji se ostatak tima može osloniti.",
    price: "Razvojno partnerstvo od 2.500 € mjesečno",
    image: "/img/ai/panel-5.webp",
    alt: "Apstraktna slika: tamni vertikalni stubovi i kablovi sa tankim narandžastim prorezom",
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

// Inspo tekst sa desne strane stuba: rečenice iz uvoda stranice. Pojavljuju se kad slika `from` uđe u fokus.
export const inspo: { text: string; pos: "top" | "bottom"; from: number }[] = [
  {
    text: "Gradimo sisteme koji idu u ruke stvarnih korisnika i ostaju jednostavni za održavanje kada postanu ozbiljni.",
    pos: "top",
    from: 1,
  },
  {
    text: "Ista pažnja ide u rješavanje produkcijskog kvara kao i u čist kôd koji objašnjava sam sebe, i onda kada autor ode dalje.",
    pos: "bottom",
    from: 3,
  },
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

