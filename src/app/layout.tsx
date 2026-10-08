import type { Metadata } from "next";
import { Geist_Mono, Instrument_Sans, Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
});

const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

// Serif za tekstualnu sekciju "O nama" (isti font kao akcenti na studioblink.ba).
const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Usluge: web stranice, aplikacije, AI i brending · blink",
  description:
    "Blink usluge: produkcijski softver, ne demo. Razvoj po mjeri, AI, gradovi i institucije, MVP, backend i identitet.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="bs"
      className={`${manrope.variable} ${instrument.variable} ${geistMono.variable} ${newsreader.variable} antialiased`}
    >
      <body>
        {/* Bez JavaScripta animacije nikad ne bi pokazale sadržaj, pa ga ovdje odmah otkrivamo. */}
        <noscript>
          <style>{`.rv-title,.rv-item,.rv-strip,.rv-foot,.rv-card,.pz-end,.nc-card,.nc-title,.nc-label,.tx-in,.nc-w>span{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}

