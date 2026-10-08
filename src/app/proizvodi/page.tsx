import type { Metadata } from "next";
import Closer from "@/components/Closer";
import CursorDot from "@/components/CursorDot";
import Nav from "@/components/Nav";
import Proizvodi from "@/components/Proizvodi";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Radovi: sajtovi, prodavnice i aplikacije · blink",
  description:
    "Case studyji studija blink: digitalni proizvodi i platforme koje gradimo zajedno sa klijentima, od javnog sajta i identiteta do portala i admin sistema.",
};

export default function ProizvodiPage() {
  return (
    <>
      <SmoothScroll />
      <CursorDot />
      <Nav />
      <main>
        <Proizvodi />
      </main>
      <Closer />
    </>
  );
}
