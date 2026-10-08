"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EclipseRow } from "./Eclipse";
import { links } from "@/data/services";

export default function Closer() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const q = gsap.utils.selector(el);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.from(q(".eclipse-item"), {
        scale: 0.4,
        opacity: 0,
        duration: 1.3,
        ease: "power3.out",
        stagger: { each: 0.08, from: "center" },
        scrollTrigger: { trigger: el, start: "top 70%", toggleActions: "play none none reverse" },
      });
      gsap.from(q(".closer-in"), {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: { trigger: el, start: "top 80%", toggleActions: "play none none reverse" },
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <footer ref={root} id="kontakt" className="relative flex min-h-[100svh] flex-col overflow-hidden bg-dark text-krem">
      <div className="label absolute left-5 top-10 text-zar md:left-14">[ Kontakt ]</div>

      <div className="relative flex flex-1 flex-col items-center justify-center gap-8 px-5 py-28 text-center">
        <EclipseRow dark count={7} size={104} gap={26} className="max-md:hidden" />
        <EclipseRow dark count={3} size={90} gap={20} className="md:hidden" />

        <a
          href={links.email}
          className="closer-in font-display text-[clamp(32px,6.4vw,104px)] font-normal leading-none tracking-[-0.03em] transition-colors hover:text-zar"
        >
          kontakt@studioblink.ba
        </a>

        <a href={links.kontakt} className="closer-in btn-zar">
          Zakažite razgovor <span aria-hidden="true">↗</span>
        </a>

        <p className="closer-in max-w-[520px] text-[14px] leading-[1.7] text-krem/60">
          U svakom modelu: pisan obim prije početka, izvorni kod i pristupi su vaši, dostupni smo i poslije predaje.
        </p>
      </div>

      <div className="label flex flex-col justify-between gap-2 border-t border-krem/12 px-5 py-6 text-krem/55 md:flex-row md:px-14">
        <a href={links.jjovan} className="transition-colors hover:text-zar">
          Tehnika i razvoj, jjovan.com ↗
        </a>
        <span>© 2026 BLink d.o.o. · Banja Luka</span>
      </div>
    </footer>
  );
}
