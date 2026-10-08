"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SITE, hrefProizvodi, hrefUsluge } from "@/lib/site";

// Samo Usluge i Proizvodi su linkovi (naše dvije stranice). Ostalo u navigaciji namjerno nije povezano sa originalnim
// sajtom studioblink.ba, da ne dođe do zabune.
const items = [
  { label: "Radovi", href: null, page: "" },
  { label: "Usluge", href: hrefUsluge, page: "usluge" },
  { label: "Proizvodi", href: hrefProizvodi, page: "proizvodi" },
  { label: "Studio", href: null, page: "" },
];

function Logo() {
  return (
    <span aria-label="blink" className="flex items-baseline text-[30px] leading-none font-normal tracking-[-0.02em] text-inherit">
      <span>bl</span>
      <span className="relative inline-block">
        ı
        <span className="absolute left-1/2 top-[0.12em] size-[5px] -translate-x-1/2 rounded-full bg-zar" />
      </span>
      <span>nk</span>
      <span className="ml-[3px] inline-block h-[3px] w-[14px] translate-y-[1px] bg-zar" />
    </span>
  );
}

export default function Nav() {
  const pathname = usePathname();
  // Koja je stranica otvorena: u produkciji je određena projektom, lokalno rutom (a "/" je Usluge).
  const current = SITE ?? (pathname === "/" ? "usluge" : pathname.replace("/", ""));
  const [solid, setSolid] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const on = () => setSolid(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });

    // Preko tamnog završetka (kontakt) navbar prelazi u svijetlo-na-tamnom.
    const st = ScrollTrigger.create({
      trigger: "#kontakt",
      start: "top 74px",
      end: "bottom top",
      onToggle: (self) => setDark(self.isActive),
    });
    return () => {
      window.removeEventListener("scroll", on);
      st.kill();
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,backdrop-filter,color] duration-500 ${
        dark ? "bg-dark/70 text-krem backdrop-blur-md" : solid ? "bg-bg/80 text-ink backdrop-blur-md" : "bg-transparent text-ink"
      }`}
    >
      <div className="mx-auto flex h-[74px] items-center justify-between px-5 md:px-14">
        <Logo />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 gap-8 md:flex" aria-label="Glavna navigacija">
          {items.map((it) =>
            it.href ? (
              <a
                key={it.label}
                href={it.href}
                aria-current={it.page === current ? "page" : undefined}
                className="text-[15px] font-normal text-inherit transition-colors hover:text-zar"
              >
                {it.label}
              </a>
            ) : (
              <span key={it.label} className="cursor-default text-[15px] font-normal text-inherit">
                {it.label}
              </span>
            ),
          )}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="hidden h-[46px] items-center gap-2 rounded-full border border-current px-4 text-[15px] font-normal md:flex"
            aria-label="Jezik: bosanski"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c3 3.2 3 14.8 0 18M12 3c-3 3.2-3 14.8 0 18" />
            </svg>
            BS
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
          <span className="inline-flex h-[40px] cursor-default items-center rounded-md bg-zar px-4 text-[14px] font-normal text-white md:h-[46px] md:px-5 md:text-[15px]">
            Zakažite razgovor
          </span>
        </div>
      </div>
    </header>
  );
}
