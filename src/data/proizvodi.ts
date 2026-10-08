// Sadržaj stranice /proizvodi sa studioblink.ba (nazivi, oznake i opisi doslovno).

export type Projekat = {
  name: string;
  tags: string[];
  text: string;
  /** slug case stranice: studioblink.ba/case-<slug> */
  slug: string;
  /** isti naziv fajla u /public/img/proizvodi */
  img: string;
  alt: string;
  cta: string;
};

const p = (
  name: string,
  tags: string[],
  text: string,
  slug: string,
  img: string,
  alt: string,
  cta = "Pogledaj case study",
): Projekat => ({ name, tags, text, slug, img: `/img/proizvodi/${img}.webp`, alt, cta });

export const projekti: Projekat[] = [
  p(
    "Smart AI Curator",
    ["AI Curator", "Photo dashboard", "Vertex AI"],
    "Case study foto dashboarda koji pretvara razbacanu arhivu u kurirani sistem: inbox za nove fotografije, AI kolekcije, multimodalne embeddinge, similarity search, timeline, preview i urednički tok za izložbe.",
    "smart-ai-curator",
    "smart-ai-curator",
    "Smart AI Curator, dashboard za foto arhivu",
  ),
  p(
    "Lana Zrnić",
    ["Portfolio", "Art direction", "Motion"],
    "Fotografski portfolio građen kao uredničko iskustvo, veliki radovi, filmski prelazi, galerije po aktovima, lightbox za pregled fotografija i kontakt tok koji umjetnički rad pretvara u jasan prostor za narudžbe.",
    "lana-zrnic",
    "lana-zrnic",
    "Lana Zrnić, fotografski portfolio",
  ),
  p(
    "Dr. Krnetić",
    ["Demo primjer", "Klijentski portal", "Admin dashboard"],
    "Demo primjer softvera za vođenje kompletne psihoterapeutske prakse: javni marketing sajt, online zakazivanje, klijentski portal za termine, poruke, materijale i video sesije, te admin dashboard za bookings, dostupnost, fakture, dokumente i GDPR tokove. Radni prototip, spreman za praksu.",
    "krnetic",
    "krnetic",
    "Dr. Krnetić, psihoterapijska platforma",
    "Pogledaj demo",
  ),
  p(
    "Longi",
    ["Sajt", "3D naslovna", "Prodavnica"],
    "Sajt i prodavnica za atelje koji kamen, masiv i namještaj bira po zrnu. Na naslovnoj jedna mermerna ploča postaje kuhinjsko ostrvo, konzola i radni sto dok skrolate, a iza scene čeka prodavnica sa korpom i cijenama u KM.",
    "longi",
    "longi",
    "Longi, sajt i prodavnica materijala i namještaja",
  ),
  p(
    "Drvex",
    ["Sajt", "3D vizualizator", "Krojna lista"],
    "Sajt za veleprodaju i maloprodaju pločastog materijala i okova iz Laktaša. Na naslovnoj se kuhinja sklapa dok skrolate, a 3D vizualizator pokazuje fronte u dekorima iz ponude. Materijali, krojna lista i opremanje prostora na jednom mjestu.",
    "drvex",
    "drvex",
    "Drvex, sajt sa 3D kuhinjom koja se sklapa",
  ),
  p(
    "Ihtis",
    ["Sajt", "Jelovnik", "Porudžbine"],
    "Sajt riblje kuhinje i ribarnice na banjalučkoj Tržnici. Jelovnik, riblje plate za posne slave i porudžbina preko Vibera, složeni tako da gost od prvog ekrana zna šta da poruči i gdje da svrati.",
    "ihtis",
    "ihtis",
    "Ihtis, sajt riblje kuhinje i ribarnice",
  ),
  p(
    "MT Ponos",
    ["Redizajn", "Katalog", "Kalkulator materijala"],
    "Prijedlog redizajna sajta za MT Ponos, prodavca podnih obloga iz Banje Luke. Laminat, parket, vinil i decking po kategorijama, kalkulator koji iz mjera prostorije računa potreban materijal i dekori prikazani u prostoru.",
    "mt-ponos",
    "mt-ponos",
    "MT Ponos, prijedlog redizajna sajta za podne obloge",
  ),
  p(
    "Omaška",
    ["Sistem za praksu", "Zakazivanje", "Portal pacijenta"],
    "Operativni sistem za privatnu psihijatrijsku i psihoterapijsku praksu. Zakazivanje, psihijatrijski karton, dokumenti, naplata u KM i portal pacijenta rade kao jedan tok, od prvog klika na sajtu do zatvorenog pregleda.",
    "omaska",
    "omaska",
    "Omaška, sistem za privatnu praksu",
  ),
  p(
    "U izlogu",
    ["AI studio", "Packshot", "Svi formati"],
    "Studijske fotografije artikala, bez studija. Iz jedne fotografije s telefona nastaju čist packshot, scena, artikal na modelu, kratki video i svaki format za oglas, u istom izgledu kroz cijeli katalog.",
    "u-izlogu",
    "u-izlogu",
    "U izlogu, AI studio za fotografije artikala",
  ),
  p(
    "Pčelarstvo Jevtić",
    ["Brending", "Etikete", "Prodavnica"],
    "Od znaka na tegli do korpe na sajtu. Znak, etikete i deklaracije za livadski i bagremov med, pa sajt i prodavnica za porodično pčelarstvo iz Mračaja kod Prnjavora. U pilotu: radi i dorađuje se.",
    "pcelarstvo-jevtic",
    "pcelarstvo-jevtic",
    "Pčelarstvo Jevtić, sajt i prodavnica meda",
  ),
  p(
    "jjovan.com",
    ["Lični sajt", "3D scrollytelling", "WebGL"],
    "Lični sajt Jovana Jevtića, suosnivača blinka. Stranica se ne lista, nego gleda: trinaest poglavlja i devet WebGL scena, od uvoda do radova.",
    "jjovan",
    "jjovan",
    "jjovan.com, lični sajt Jovana Jevtića",
  ),
  p(
    "Lunara",
    ["Koncept", "Identitet", "Sajt"],
    "Koncept identiteta i sajta za reformer pilates studio. Znak, logotip i sajt, od palete do cjenovnika i rezervacije probnog treninga.",
    "lunara",
    "lunara",
    "Lunara, koncept identiteta i sajta",
  ),
  p(
    "Urbano",
    ["Naš venture", "Operativni sistem grada", "Web i mobilna app"],
    "Digitalni operativni sistem za sve aspekte urbanog života. Prijave, zgrade, najave radova, isključenja i komšijske akcije, povezani u jedan jasan tok za građane, službe i grad Banja Luku.",
    "urbano",
    "urbano",
    "Urbano, mapa Banje Luke s prijavama građana",
  ),
  p(
    "Golden Standard",
    ["Brend", "B2B platforma", "Tri tržišta"],
    "Tri tržišta. Cijeli projekat. Jedan izvedbeni partner. Za Golden Standard gradimo cjelokupan kreativni i digitalni obim: strategiju, identitet, ambalažu, sadržaj, javni sajt, B2B platformu, Academy, Certified, CMS, integracije i infrastrukturu.",
    "golden-standard",
    "golden-standard",
    "Golden Standard, sajt regionalnog B2B sistema za ugostiteljstvo",
  ),
  p(
    "Nova Forma",
    ["Koncept", "Identitet", "Sajt"],
    "Atelje za svjetlo. Novi identitet, autorski vizuali i sekcije povezane kroz scroll.",
    "nova-forma",
    "nova-forma",
    "Nova Forma, identitet i animirani sajt",
  ),
];

export const proizvodiIntro = {
  label: "Klijentski projekti",
  title: "Case studyji",
  text: "Digitalni proizvodi i platforme koje gradimo zajedno sa klijentima, od javnog sajta i identiteta do portala, admin sistema i operativnih tokova iza proizvoda.",
  count: "15 case studyja",
  cta: "Započnimo razgovor",
};

// Završna izjava (tekst sa landinga studioblink.ba) i poziv na akciju sa stranice /proizvodi.
export const proizvodiStatement =
  "Ne biramo dio posla. Preuzimamo cijeli: strategiju, identitet, softver, AI i rast. Jedan tim, jedna odgovornost.";
