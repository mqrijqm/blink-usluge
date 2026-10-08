// Tekstovi za sekciju "Kako radimo" i tekstualnu sekciju na /proizvodi. Sve je preuzeto sa landinga studioblink.ba
// (Šta radimo, Kako radimo sa klijentima, Šta stoji u svakom dogovoru, Studio, Kontakt).

export type Ikona = "layers" | "user" | "tag" | "clock" | "code" | "spark";

export type Kartica = {
  text: string;
  /** do dvije meta stavke, kao datum i izvor u referenci */
  meta: { icon: Ikona; label: string }[];
  img: string;
  alt: string;
};

export type Panel = {
  tone: "dark" | "orange" | "ivory";
  title: string;
  cards: Kartica[];
};

export const nacinIntro = {
  label: "Šta radimo",
  text: "Jedan tim vodi proizvod od prve odluke do produkcije. Obim, rok i cijena stoje na papiru prije nego počne rad, a izvorni kod i pristupi ostaju vaši.",
};

const img = (n: string) => `/img/nacin/${n}.webp`;

export const paneli: Panel[] = [
  {
    tone: "dark",
    title: "Dizajn, razvoj i AI u jednom timu.",
    cards: [
      {
        text: "Dizajn: identitet i ekran iz jednog sistema, pa jedno ne odudara od drugog.",
        meta: [
          { icon: "layers", label: "Produktni dizajn" },
          { icon: "user", label: "Pčelarstvo Jevtić" },
        ],
        img: img("t1-1"),
        alt: "Logo znak, uzorci boja i tipografski blokovi",
      },
      {
        text: "Razvoj: web i mobilni proizvodi sa servisima i infrastrukturom koja ih drži u radu.",
        meta: [
          { icon: "code", label: "Next.js · React Native" },
          { icon: "user", label: "Omaška" },
        ],
        img: img("t1-2"),
        alt: "Žičani raspored responzivnog sajta",
      },
      {
        text: "Inteligencija: asistenti nad vašim dokumentima, katalogom i procesima, tamo gdje skraćuju posao.",
        meta: [
          { icon: "spark", label: "RAG · LLM" },
          { icon: "user", label: "U izlogu" },
        ],
        img: img("t1-3"),
        alt: "Panel AI asistenta sa porukama",
      },
    ],
  },
  {
    tone: "orange",
    title: "Kako radimo sa klijentima.",
    cards: [
      {
        text: "Novi proizvod, od nule: prvo pravimo prototip koji možete pokazati kupcima, pa tek onda pišemo kod.",
        meta: [{ icon: "tag", label: "Prototip od 1.500 €" }],
        img: img("t2-1"),
        alt: "Žičani prototip aplikacije na telefonu",
      },
      {
        text: "Redizajn sajta koji vas košta: sporo se otvara, ne kaže šta nudite i pretraga ga ne prepoznaje.",
        meta: [{ icon: "tag", label: "Marketing sajt od 2.800 €" }],
        img: img("t2-2"),
        alt: "Sajt prije i poslije redizajna",
      },
      {
        text: "Prodaja, naplata i mjerenje na postojeći proizvod: korpa, termini i dashboard sa brojevima.",
        meta: [{ icon: "clock", label: "Ponuda prije rada" }],
        img: img("t2-3"),
        alt: "Kartica naplate sa korpom i grafikonom prodaje",
      },
    ],
  },
  {
    tone: "ivory",
    title: "Šta stoji u svakom dogovoru.",
    cards: [
      {
        text: "Cijena prije rada: obim, rok i iznos stoje u ponudi prije prve linije koda.",
        meta: [{ icon: "tag", label: "Pisan obim" }],
        img: img("t3-1"),
        alt: "Kartica cjenovnika sa kvačicama",
      },
      {
        text: "Radna verzija svake sedmice: napredak gledate na testnom linku, ne na sastanku.",
        meta: [{ icon: "clock", label: "Svake sedmice" }],
        img: img("t3-2"),
        alt: "Sedmični kalendar sa trakama napretka",
      },
      {
        text: "Izvorni kod je vaš: spremište, pristupi i dokumentacija idu vama pri predaji. Ostajemo i poslije objave.",
        meta: [{ icon: "code", label: "Predaja pristupa" }],
        img: img("t3-3"),
        alt: "Ključ i blok repozitorija",
      },
    ],
  },
];

// Tekstualna sekcija ispod kartica: kružni znak sa linijom lijevo, tekst desno.
export const oNama = {
  badge: "BLINK STUDIO · BANJA LUKA · BLINK STUDIO · BANJA LUKA · ",
  paragraph:
    "Radovi na ovoj stranici obuhvataju javne sajtove, prodavnice, portale, admin sisteme i AI alate. Svaki projekat vodimo od strategije i identiteta do produkcije, sa pisanim obimom, rokom i cijenom prije početka rada. Konceptne projekte jasno označavamo, a izvorni kod i pristupi ostaju klijentu.",
  team: "Tehnologiju i razvoj vodi Jovan Jevtić, a poslovanje i partnerstva Petar. Saradnike uključujemo prema potrebama projekta, uz jasno dogovorene uloge i odgovornosti.",
};
