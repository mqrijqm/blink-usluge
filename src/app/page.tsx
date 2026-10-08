import type { Metadata } from "next";
import { proizvodiMeta, uslugeMeta } from "@/lib/meta";
import { SITE } from "@/lib/site";
import ProizvodiView from "@/views/ProizvodiView";
import UslugeView from "@/views/UslugeView";

// Na "/" je stranica koju objavljuje ovaj Vercel projekat (vidi src/lib/site.ts). Zadano: Usluge.
export const metadata: Metadata = SITE === "proizvodi" ? proizvodiMeta : uslugeMeta;

export default function Home() {
  return SITE === "proizvodi" ? <ProizvodiView /> : <UslugeView />;
}
