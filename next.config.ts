import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
