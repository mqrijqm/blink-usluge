"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { oNama } from "@/data/nacin";

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true" className="shrink-0">
      <path d="M3 11 11 3M4.5 3H11v6.5" />
    </svg>
  );
}

// Tekstualna sekcija: raspored kao referenca (lijevo kratke stavke i link, desno veliki serif tekst, citat i link,
// na dnu u uglovima adresa i grad).
export default function OStudiju() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const q = gsap.utils.selector(el);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        q(".tx-in"),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.14,
          scrollTrigger: { trigger: el, start: "top 65%", toggleActions: "play none none reverse" },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="studio" aria-label="O studiju" className="relative flex min-h-[100svh] flex-col bg-bg px-5 pt-[16svh] md:px-6">
      <div className="grid flex-1 gap-14 md:grid-cols-2 md:gap-6">
        {/* Lijevo: kratke stavke */}
        <div className="relative font-serif text-[15px] leading-[1.5]">
          <p className="tx-in rv-foot pl-[34px]">({oNama.label})</p>
          <ul className="mt-9 space-y-5">
            {oNama.left.map((r) => (
              <li key={r.key} className="tx-in rv-foot flex gap-3">
                <span className="w-[22px] shrink-0">{r.key}</span>
                {r.href ? (
                  <a href={r.href} className="border-b border-ink">
                    {r.lines[0]}
                  </a>
                ) : (
                  <span>
                    {r.lines.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                  </span>
                )}
              </li>
            ))}
          </ul>
          <a href={oNama.cta.href} className="tx-in rv-foot mt-6 ml-[34px] inline-flex items-center gap-2 border-b border-ink">
            {oNama.cta.label} <Arrow />
          </a>
          {/* Križić u sredini praznog prostora */}
          <svg aria-hidden="true" width="28" height="28" viewBox="0 0 28 28" stroke="currentColor" strokeWidth="1" className="absolute left-[60%] top-[34%] hidden md:block">
            <path d="M14 0v28M0 14h28" />
          </svg>
        </div>

        {/* Desno: veliki tekst */}
        <div className="font-serif">
          <p className="tx-in rv-foot text-[clamp(22px,2.3vw,34px)] leading-[1.28]">
            <span className="mr-[clamp(24px,5vw,72px)] inline-block align-top text-[15px] leading-[2.9]">{oNama.aboutLabel}</span>
            {oNama.paragraph}
          </p>
          <p className="tx-in rv-foot mt-9 text-[clamp(22px,2.3vw,34px)] leading-[1.28]">&ldquo;{oNama.quote}&rdquo;</p>
          <p className="tx-in rv-foot mt-12 text-[15px]">{oNama.detailsLabel}</p>
          <a href={oNama.detailLink.href} className="tx-in rv-foot mt-4 flex w-full max-w-[454px] items-center justify-between border-y border-ink py-3 text-[15px]">
            {oNama.detailLink.label}
            <Arrow />
          </a>
        </div>
      </div>

      <div className="mt-[10svh] flex items-end justify-between pb-6 font-serif text-[15px]">
        <span>{oNama.cornerLeft}</span>
        <span>{oNama.cornerRight}</span>
      </div>
    </section>
  );
}
