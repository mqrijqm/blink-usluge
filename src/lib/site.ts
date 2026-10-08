// Dva Vercel projekta iz istog repozitorija: jedan objavljuje Usluge, drugi Proizvode.
// NEXT_PUBLIC_SITE = "usluge" | "proizvodi" određuje koja stranica je na "/".
// NEXT_PUBLIC_USLUGE_URL i NEXT_PUBLIC_PROIZVODI_URL su adrese dva projekta (za unakrsne linkove u navigaciji).
// Lokalno (bez varijabli) rade obje rute: /usluge i /proizvodi.
export const SITE = process.env.NEXT_PUBLIC_SITE as "usluge" | "proizvodi" | undefined;

export const hrefUsluge = SITE === "usluge" ? "/" : (process.env.NEXT_PUBLIC_USLUGE_URL ?? "/usluge");
export const hrefProizvodi = SITE === "proizvodi" ? "/" : (process.env.NEXT_PUBLIC_PROIZVODI_URL ?? "/proizvodi");
