import type { NextConfig } from "next";

// Kad se gradi jedan od dva Vercel projekta, druga stranica preusmjerava na adresu onog drugog projekta.
const SITE = process.env.NEXT_PUBLIC_SITE;
const USLUGE_URL = process.env.NEXT_PUBLIC_USLUGE_URL;
const PROIZVODI_URL = process.env.NEXT_PUBLIC_PROIZVODI_URL;

const nextConfig: NextConfig = {
  async redirects() {
    if (SITE === "usluge") {
      return [
        { source: "/usluge", destination: "/", permanent: false },
        ...(PROIZVODI_URL ? [{ source: "/proizvodi", destination: PROIZVODI_URL, permanent: false }] : []),
      ];
    }
    if (SITE === "proizvodi") {
      return [
        { source: "/proizvodi", destination: "/", permanent: false },
        ...(USLUGE_URL ? [{ source: "/usluge", destination: USLUGE_URL, permanent: false }] : []),
      ];
    }
    return [];
  },
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // Slike su već unaprijed obrađene (WebP, prave veličine). Bez runtime optimizatora nema čekanja
  // pri prvom učitavanju ni keširanja pod starim imenom, pa slike ne "iskaču".
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
