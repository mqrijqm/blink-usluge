# studioblink.ba/usluge — mapa (faza 1: samo čitanje, bez redizajna)

Izvor: Playwright, 1440×900 i 390×844, 08.10.2026. Tvoji screenshotovi + izvučen DOM/CSS.
Napomena: `/usluge` je kratka stranica (3359 px desktop, 3142 px mobilni). Sekcije "Manje priče, više stvari koje rade." (krem krug → narandžasto) i "Imate proizvod na umu?" + crni KONTAKT footer **nisu na /usluge** — to su landing (`/`) sekcije.

---

## 1. Struktura /usluge (3 sekcije + fiksni header)

| # | Sekcija | Klasa | Visina (desktop) | Pozadina |
|---|---|---|---|---|
| — | Header (fixed, 74 px, providan) | — | 74 | transparentan nad `--bg` |
| 1 | Lead / uvod | `.ab.ab-lead` | 762 | `#faf7f5` |
| 2 | Točak usluga (6 stavki) | `.svc` | 826 (+ scroll dužina za pin) | transparentan → `#faf7f5` |
| 3 | Closer (kontakt) | `.ab.ab-closer` | 315 | `#faf7f5` |

Cijela stranica je **jedna boja pozadine**. Nema šarenila kao na landingu — /usluge je mirna, tipografska, "dokumentna" stranica.

### 1.1 Header
- Logo `blink_` (levo, narandžasti underscore + tačka na "i"), nav centrirano: **Radovi · Usluge · Proizvodi · Studio**, desno pill dugme jezika `BS ▾` (outline, crni rub) i **Zakažite razgovor** (pun narandžasti, mali radius ~6 px).
- Na landingu nav je drugačiji: Radovi · Usluge · Šta dobijate · Cijene · Studio.

### 1.2 Lead (`.ab-lead`)
Raspored: 12-kolonska mreža, **sadržaj tek od desne polovine** (leva polovina namjerno prazna).
```
[ USLUGE ]                                           BANJALUKA [ 21:37 ]   ← topbar, mono/label, narandžasto, 11px, uppercase, tracking 1.54px; živi sat
                              (veliki prazan hod)
                              Blink usluge                                 ← h1 Instrument Sans 74.88px, lh 0.96, ls -1.65px, #12110b
                              produkcijski softver, ne demo                ← <em> u narandžastoj (#ff4f31), manji
                              Gradimo sisteme koji idu u ruke … (4 reda)   ← Manrope 300, 15.12px, lh 1.62, ink 72%, max ~431px
────────────────────────────────────────────────────────────────────────  ← hr, 1px, rgba(18,17,11,.12)
[ STACK ]                     ( TypeScript ) ( React · Next.js ) ( React Native · Expo ) ( Node · NestJS )
                              ( PostgreSQL · pgvector ) ( Redis ) ( RAG · LLM (Claude, GPT) )
                              ( Docker · Kubernetes ) ( AWS · GCP · Cloudflare ) ( CI/CD · Terraform )
```
- Labele su u zagradama `[ OVAKO ]` (ne `+ OVAKO` kao na crnom footeru landinga).
- Čipovi: pill outline, 1px linija, ~48 px visine, Manrope 400 ~16px, bez ispune.

### 1.3 Točak usluga (`.svc`) — glavni UX dio
- **Pinovana sekcija** (`overflow:hidden`, scroll pokreće točak). Dva stupca razdvojena vertikalnom linijom (`.svc-divider`, 1px, ink 12%).
- **Lijevo — `.svc-dial`:** SVG kružni luk (tanka linija) i na njemu brojevi **01–06** raspoređeni po luku kao točak. Aktivan broj: **80.64px, weight 300, `#ff4f31`**, sa narandžastom tačkom (`.svc-dot`) na luku. Neaktivni: 37.44px, weight 200, `#c7c3b8`, manji kako se udaljavaju od centra. Brojevi su `<button>` (klik skače na uslugu).
- **Desno — `.svc-content`:** dvije kolone u redu:
  - `.svc-mediacol` → `.svc-media`: screenshot rada 317×238, radius 10px, meka sjena `0 26px 58px -30px rgba(43,35,26,.5)`, podloga ink 12%.
  - `.svc-textcol` → `h2.svc-h` (Instrument Sans 31.68px, **UPPERCASE**, ls -0.63px, lh 1.06) + `.svc-bigdesc` sa **2 paragrafa** (Manrope 300, 13px, lh 1.6, ink 58%).
- Promjena aktivne usluge mijenja: broj (veliki/narandžast), sliku, naslov, 2 paragrafa. Sadržaj se swapuje u istom DOM-u (jedan `.svc-h`, jedan `.svc-media img`).
- **Mobilni (≤390):** `.svc` postaje `flex-column`; dial je traka visine ~49 px na vrhu (horizontalni izbor brojeva umjesto luka), ispod slika (307×230) pa naslov (21px) pa tekst. Sve u jednoj koloni.

### 1.4 Closer
- Samo `kontakt@studioblink.ba` (veliki link, `.ab-email`) + ispod sitno: `Tehnika i razvoj, jjovan.com ↗` (`.ab-personal`). Padding 81/56/63. Nema CTA dugmeta.

---

## 2. Sadržaj /usluge (doslovno)

**Lead:** Blink usluge / *produkcijski softver, ne demo* — "Gradimo sisteme koji idu u ruke stvarnih korisnika i ostaju jednostavni za održavanje kada postanu ozbiljni. Ista pažnja ide u rješavanje produkcijskog kvara kao i u čist kôd koji objašnjava sam sebe, i onda kada autor ode dalje."

**Stack:** TypeScript · React/Next.js · React Native/Expo · Node/NestJS · PostgreSQL/pgvector · Redis · RAG/LLM (Claude, GPT) · Docker/Kubernetes · AWS/GCP/Cloudflare · CI/CD/Terraform

**Šest usluga** (redoslijed na točku; slika = rad kao dokaz):

| # | Naslov | Tekst | Slika (dokaz) |
|---|---|---|---|
| 01 | RAZVOJ SOFTVERA PO MJERI | Web i mobilne proizvode gradimo od temelja, prilagođene vašoj poslovnoj logici i stvarnim korisnicima. Od arhitekture do isporuke, sve nastaje kod nas. / Ne sklapamo gotove šablone. Svaki sistem dizajniramo da raste s vama i ostane jednostavan za održavanje i kada postane ozbiljan. | Krnetić admin (desktop) |
| 02 | INTEGRACIJA VJEŠTAČKE INTELIGENCIJE | Pametne sisteme ugrađujemo direktno u vaše tokove rada, RAG asistenti, automatizacija i podatkovni tokovi oslonjeni na stvarne podatke, s navedenim izvorima. / Polazimo od konkretnog problema, ne od trenda. AI uvodimo tamo gdje stvarno skraćuje vrijeme i smanjuje greške, dok konačnu odluku zadržava čovjek. | Urbano — prijave |
| 03 | TEHNOLOGIJA ZA GRADOVE I INSTITUCIJE | Digitalna infrastruktura za gradove i javne institucije. Urbano smo izgradili, hostovali i pripremili za pilot Banje Luke. / Rješenja koja izdrže opterećenje, poštuju propise i ostaju upotrebljiva godinama, za građane i za one koji ih vode. | Urbano — mapa |
| 04 | MVP I RAZVOJ PROIZVODA | Od ideje do lansiranog proizvoda, brzo, fokusirano i bez suvišnog. Prvu verziju gradimo tako da uči iz stvarnih korisnika. / Umjesto velikog plana koji čeka, isporučujemo malo i često. Svaka iteracija donosi podatke na osnovu kojih odlučujemo šta dalje. | Urbano — live home |
| 05 | API-JI I BACKEND SISTEMI | Skalabilna infrastruktura koja izdrži kada postane ozbiljno, mikroservisi, event-driven tokovi, sharding i zero-downtime deploy. / Čisti API-ji (REST, WebSocket), jasna dokumentacija i sistemi koje je lako proširiti, temelj na koji se ostatak tima može osloniti. | Urbano — ZEV |
| 06 | WEB DIZAJN I IDENTITET | Promišljen dizajn sa stavom. Bez šablona i bez generičnog, identitet koji se prepoznaje i pamti. / Vizuelni jezik gradimo tako da radi svuda i priča istu priču. Za Pčelarstvo Jevtić isti znak stoji na etiketi tegle, na deklaraciji pripremljenoj za štampu i na prodavnici. | Krnetić naslovna |

Putanje slika: `/assets/projekti/krnetic/…-1600.webp`, `/assets/projekti/urbano/…`, `/assets/ventures/urbano/…`.

**Closer:** kontakt@studioblink.ba · Tehnika i razvoj, jjovan.com ↗

### Kritički pogled (UX/sadržaj)
- Točak je moćan vizuelno, ali **6 usluga je skriveno iza interakcije**: ko ne skroluje vidi samo jednu. Nema pregleda svih šest odjednom.
- **Nema cijena, procesa, ni CTA na samoj stranici** (sve to živi na landingu). /usluge je "pitch za inženjere", landing je "pitch za klijente".
- 01 i 04, te 02 i 05, se sadržajno preklapaju (software po mjeri / MVP; backend / razvoj). Ima prostora za jasniju podjelu.
- 4 od 6 slika su Urbano, jedan klijent. Slabo dokazuje širinu.
- Nema CTA dugmeta u closeru, samo email.

---

## 3. Mapa dizajn sistema (iz `:root`)

```
--bg     #faf7f5   osnovna pozadina (topla gotovo-bijela)
--ink    #12110b   tekst (topla gotovo-crna, ne čista crna)
--muted  rgba(18,17,11,.58)
--line   rgba(18,17,11,.12)
--zar    #ff4f31   narandžasto-crvena "žar" — jedini akcent
--zar-t  #c72c27   tamniji žar (hover/tekst na svijetlom)
--krem   #f4efea
--sans     Manrope        (tijelo, brojevi točka, labele)
--display  Instrument Sans (naslovi, uppercase za usluge)
--serif-hi Newsreader     (kurziv akcenti na landingu / klijentskim radovima)
--mono     Geist Mono     (sitne tehničke labele, brojači)
```
**Tipska skala (desktop):** h1 75 / h2 usluge 32 / aktivan broj 81 / neaktivan broj 37 / tijelo 15 i 13 / labela 11 (uppercase, tracking .14em).
**Ritam:** weight 300 za tijelo, 400 za naslove — **nikad bold**. Veliki negativni tracking na displayu. Jedna boja akcenta, bez gradijenata.
**Oblici:** pill (čipovi, jezik), mali radius 6 px (CTA), 10 px (slika), tanke 1 px linije. Bez ispuna, bez sjena osim jedne meke ispod slike.
**Potpisni elementi brenda:** `[ UGLASTE ZAGRADE ]` labele, živi sat grada `BANJALUKA [ hh:mm ]`, `blink_` sa underscore kursorom (custom cursor `.blink-cursor-shape`), narandžasti `<em>` u naslovu.

---

## 4. Uloga boja pozadine (landing) — "scroll-atmosphere"

Sve sekcije landinga nose klasu `scroll-atmosphere`: **pozadina klizi između blago različitih tonova dok skrolaš** (vrijednosti ispod su snimak u jednom trenutku, nisu fiksne). Pravilo: tonovi su sasvim blizu (svi svijetli, toplo/hladno razlika ~5–10%), pa prelaz osjetiš kao disanje, ne kao rez. Jake boje se čuvaju za **tačke naglaska**.

| Ton | Sekcije | Uloga |
|---|---|---|
| Topli bež `#ece6dc`, `#f0e8df`, `#e9e1d8`, `#eee6d9` | manifest ("Ne biramo dio posla"), Šta radimo, Radovi, Golden Standard, Brand story | **Priča i usluge** — toplina, ljudskost, "mi" |
| Skoro bijelo `#f5f2ed` | Klijenti/trake, Urbano proizvod | **Dokaz/proizvod** — čist ekran da proizvod govori |
| Hladni sivo-zelenkasti `#e5e8e4`, `#e4e6e2`, `#eceeeb`, `#e3e7e5` | ICBL partner, Capability, Industrije, Tim | **Tehnika, institucije, ljudi** — hladnije = racionalno/povjerenje |
| Neutralni `#e9e6e0`, `#e9e5df`, `#e8e5de` | Arky, Kako radimo (pet načina), Cijene | **Odluka** — neutralno dok čita brojke i uslove |
| Breskva `#fbe1d1`, `#f3e4da` | Šta dobijate, FAQ | **Uvjeravanje i smirivanje** — najtopliji tonovi stoje uz benefite i strahove |
| **Krem krug ≈`#dfd8ce` sa koncentričnim prstenovima** *(procjena sa screenshota)* | "Manje priče, više stvari koje rade." (početak Radova) | **Uvod u radove** — fokus, mirna scena prije galerije |
| **Puna narandžasta ≈`#ec5d41`** *(procjena sa screenshota; vjerovatno `--zar` kroz overlay)* | isti naslov, kasniji frame | **Jedini jaki udar** — trenutak u kojem tekst postaje bijel; "stvari koje rade" |
| **Crna `#0d0c0a` + krem tekst `#f4efe4`** | KONTAKT footer ("Preuzimamo od ideje do rasta") | **Završetak/zatvaranje** — jedina tamna zona, zato kontakt ima težinu |

Pretposljednji CTA (screenshot): svijetla traka `#faf7f5` "SLJEDEĆI NA LISTI — Imate proizvod *na umu?*" (kurziv narandžasto) → odmah ispod crni footer. Svijetlo → tamno = rez koji označava "kraj sadržaja, počinje akcija".

**/usluge je izuzetak**: bez promjene pozadine. Boja radi samo kroz akcent (žar) na svijetlom.

---

## 5. Mapa opštih usluga (sa landinga) — za reference prilikom redizajna

**Tri stuba (`ŠTA RADIMO` — "Dizajn, razvoj i AI u jednom timu"):**
1. **Dizajn** — produktni dizajn, vizuelni identitet, dizajn sistem (+5). Na djelu: Pčelarstvo Jevtić, Lana Zrnić, Golden Standard.
2. **Razvoj** — web aplikacije (TS/React/Next, admin), mobilne (React Native/Expo), servisi i baze (Node/NestJS, PostgreSQL, Redis, API) (+3). Na djelu: Omaška, Urbano, MT Ponos.
3. **Inteligencija** — asistent nad znanjem (RAG sa izvorom), telefonski asistent, automatizacija koraka (+3). Na djelu: U izlogu, Urbano Asistent, blink voice.

**Pet načina saradnje (`KAKO RADIMO` / "BLINK / USLUGE"):** svaki ima ZAŠTO → KAKO (4 koraka) → ŠTA DOBIJATE (4 stavke):
1. Novi proizvod od nule — prototip od 1.500 €, web app od 6.500 €
2. Redizajn sajta koji vas košta — marketing sajt od 2.800 €, identitet od 3.000 €
3. Prodaja, naplata i mjerenje na postojeći proizvod — obim po popisu stanja
4. Održavanje i rast poslije objave — razvojno partnerstvo od 2.500 €/mj
5. Sadržaj, fotografija i mreže — mjesečno po broju objava / snimanje po terminu

**Cjenovnik (`CIJENE`):** Prototip od 1.500 € (1–2 sedm.) · Marketing sajt od 2.800 € (3–5) · Vizuelni identitet od 3.000 € (2–3) · AI asistent od 3.500 € (4+) · Web aplikacija od 6.500 € (6+) · Mobilna od 9.500 € (8+) · Razvojno partnerstvo od 2.500 €/mj.

**Industrije (12):** Zdravstvo · Trgovina i zalihe · Grad i javne usluge · B2B i distribucija · Usluge sa zakazivanjem · Institucije i programi · Znanje i dokumenti · Telefon i podrška · Portfolio i kultura · Interni alati · Mobilne aplikacije · Marketing i prisustvo.

**Garancije (ponavljaju se svuda):** pisan obim, rok i cijena prije rada · radna verzija svake sedmice · izvorni kod i pristupi su vaši · ostajemo i poslije objave.

**Partneri/dokazi:** ICBL (tehnološki partner), Arky (backend platforma), Golden Standard (EU Interreg, BiH/HR/ME), Urbano (vlastiti proizvod), Omaška, Dr. Krnetić, Longi, Pčelarstvo Jevtić, MT Ponos, Lana Zrnić, jjovan.com…

---

## 6. Šta ovo znači za redizajn (nacrt, čekam tvoj ref)

**Zadržati (DNK brenda):** `#faf7f5` / `#12110b` / žar `#ff4f31`; Manrope + Instrument Sans; `[ ZAGRADE ]` labele i živi sat; `blink_` identitet; ton "produkcijski softver, ne demo"; 6 usluga i sav tekst (osim ako rekreiramo); slike radova kao dokaz.

**Slobodno za promjenu kad dobijem ref:** layout lead sekcije, mehanika točka (luk → šta god ref nosi), raspored 6 usluga, ritam sekcija, pozadine (možemo uvesti kontrast: tamna sekcija ili žar), motion, closer (dodati CTA).

**Otvorena pitanja za tebe:**
1. Zadržavamo ista 6 usluga i tekst, ili smijem preoblikovati (npr. spojiti 01/04, 02/05) i dodati cijene/proces?
2. Tehnički: da napravim kao Next.js projekat po tvom stack-u (GSAP + Lenis), ili je dovoljan statički prototip?
3. Jezik: samo BS, ili i EN?
