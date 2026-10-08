"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { links } from "@/data/services";

// Usluge i Proizvodi su stranice ovog projekta (obični linkovi = puno učitavanje, pa se skrol i animacije uvijek čisto pokrenu).
const items = [
  { label: "Radovi", href: links.radovi, path: "" },
  { label: "Usluge", href: "/usluge", path: "/usluge" },
  { label: "Proizvodi", href: "/proizvodi", path: "/proizvodi" },
  { label: "Studio", href: links.studio, path: "" },
];

function Logo() {
  return (
    <a href="https://studioblink.ba/?lang=bs" aria-label="blink, početna" className="flex items-baseline text-[30px] leading-none font-normal tracking-[-0.02em] text-inherit">
      <span>bl</span>
      <span className="relative inline-block">
        ı
        <span className="absolute left-1/2 top-[0.12em] size-[5px] -translate-x-1/2 rounded-full bg-zar" />
      </span>
      <span>nk</span>
      <span className="ml-[3px] inline-block h-[3px] w-[14px] translate-y-[1px] bg-zar" />
    </a>
  );
}

export default function Nav() {
  const pathname = usePathname();
  // Početna stranica (/) je ista kao /usluge.
  const current = pathname === "/" ? "/usluge" : pathname;
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
          {items.map((it) => (
            <a
              key={it.label}
              href={it.href}
              aria-current={it.path && it.path === current ? "page" : undefined}
              className="text-[15px] font-normal text-inherit transition-colors hover:text-zar"
            >
              {it.label}
            </a>
          ))}
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
          <a
            href={links.kontakt}
            className="inline-flex h-[40px] items-center rounded-md bg-zar px-4 text-[14px] font-normal text-white transition-colors hover:bg-[#c72c27] md:h-[46px] md:px-5 md:text-[15px]"
          >
            Zakažite razgovor
          </a>
        </div>
      </div>
    </header>
  );
}
