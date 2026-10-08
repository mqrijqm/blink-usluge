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
    image: "/img/krnetic-admin.webp",
    alt: "Dr. Krnetić, administracija ordinacije",
  },
  {
    n: "02",
    title: "Integracija vještačke inteligencije",
    category: "Inteligencija",
    p1: "Pametne sisteme ugrađujemo direktno u vaše tokove rada, RAG asistenti, automatizacija i podatkovni tokovi oslonjeni na stvarne podatke, s navedenim izvorima.",
    p2: "Polazimo od konkretnog problema, ne od trenda. AI uvodimo tamo gdje stvarno skraćuje vrijeme i smanjuje greške, dok konačnu odluku zadržava čovjek.",
    price: "AI asistent od 3.500 € · 4+ sedmice",
    image: "/img/asistent-d.webp",
    alt: "Urbano Asistent, odgovori iz gradskih dokumenata",
  },
  {
    n: "03",
    title: "Tehnologija za gradove i institucije",
    category: "Javni sektor",
    p1: "Digitalna infrastruktura za gradove i javne institucije. Urbano smo izgradili, hostovali i pripremili za pilot Banje Luke.",
    p2: "Rješenja koja izdrže opterećenje, poštuju propise i ostaju upotrebljiva godinama, za građane i za one koji ih vode.",
    price: "Obim i cijena prije rada",
    image: "/img/urbano-mapa.webp",
    alt: "Urbano, mapa gradskih prijava",
  },
  {
    n: "04",
    title: "MVP i razvoj proizvoda",
    category: "Proizvod",
    p1: "Od ideje do lansiranog proizvoda, brzo, fokusirano i bez suvišnog. Prvu verziju gradimo tako da uči iz stvarnih korisnika.",
    p2: "Umjesto velikog plana koji čeka, isporučujemo malo i često. Svaka iteracija donosi podatke na osnovu kojih odlučujemo šta dalje.",
    price: "Prototip od 1.500 € · 1–2 sedmice",
    image: "/img/urbano-home.webp",
    alt: "Urbano, početna stranica proizvoda",
  },
  {
    n: "05",
    title: "API-ji i backend sistemi",
    category: "Infrastruktura",
    p1: "Skalabilna infrastruktura koja izdrži kada postane ozbiljno, mikroservisi, event-driven tokovi, sharding i zero-downtime deploy.",
    p2: "Čisti API-ji (REST, WebSocket), jasna dokumentacija i sistemi koje je lako proširiti, temelj na koji se ostatak tima može osloniti.",
    price: "Razvojno partnerstvo od 2.500 € mjesečno",
    image: "/img/urbano-zev.webp",
    alt: "Urbano, upravljanje zgradom sa jednog ekrana",
  },
  {
    n: "06",
    title: "Web dizajn i identitet",
    category: "Identitet",
    p1: "Promišljen dizajn sa stavom. Bez šablona i bez generičnog, identitet koji se prepoznaje i pamti.",
    p2: "Vizuelni jezik gradimo tako da radi svuda i priča istu priču. Za Pčelarstvo Jevtić isti znak stoji na etiketi tegle, na deklaraciji pripremljenoj za štampu i na prodavnici.",
    price: "Vizuelni identitet od 3.000 € · 2–3 sedmice",
    image: "/img/pcelarstvo-d.webp",
    alt: "Pčelarstvo Jevtić, online prodavnica domaćeg meda",
  },
];

export const stackItems = [
  "TypeScript",
  "React · Next.js",
  "React Native · Expo",
  "Node · NestJS",
  "PostgreSQL · pgvector",
  "Redis",
  "RAG · LLM (Claude, GPT)",
  "Docker · Kubernetes",
  "AWS · GCP · Cloudflare",
  "CI/CD · Terraform",
];

export type Showcase = {
  name: string;
  src: string;
  alt: string;
  shape: "portrait" | "landscape";
};

// Reprezentativni mockupi sajtova koje je Blink radio (isti fajlovi kao na landingu).
export const showcase: Showcase[] = [
  { name: "Golden Standard", src: "/img/gs-naslovna-m.webp", alt: "Golden Standard, naslovna na telefonu", shape: "portrait" },
  { name: "Lana Zrnić", src: "/img/lana-d.webp", alt: "Lana Zrnić, portfolio skulptorke", shape: "landscape" },
  { name: "Omaška", src: "/img/omaska-m.webp", alt: "Omaška, sistem za privatnu praksu na telefonu", shape: "portrait" },
  { name: "MT Ponos", src: "/img/ponos-d.webp", alt: "MT Ponos, stranica proizvoda sa dekorima", shape: "landscape" },
  { name: "U izlogu", src: "/img/izlog-m.webp", alt: "U izlogu, AI modeli za katalog na telefonu", shape: "portrait" },
  { name: "Urbano", src: "/img/urbano-d.webp", alt: "Urbano, prijave građana", shape: "landscape" },
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
