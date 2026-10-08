"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { radovi } from "@/data/services";

const site = "https://studioblink.ba";

// Radovi i proizvodi: mreža kartica 4:5. Zadano crno-bijelo niskog kontrasta, na hover originalne boje.
export default function Radovi() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const q = gsap.utils.selector(el);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Naslov: početno stanje je u CSS-u (.rv-foot), pa nema bljeska.
      gsap.fromTo(
        q(".radovi-head"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 70%", toggleActions: "play none none reverse" },
        },
      );
      // Kartice izlaze u talasima po redovima (početno stanje u CSS-u, .rv-card).
      ScrollTrigger.batch(q(".rv-card"), {
        start: "top 92%",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 70, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.12, overwrite: true },
          ),
        onLeaveBack: (batch) => gsap.to(batch, { y: 70, opacity: 0, duration: 0.5, overwrite: true }),
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="radovi" aria-label="Radovi i proizvodi" className="relative bg-bg px-5 pb-[18svh] pt-[22svh] md:px-14">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-[10svh] grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <p className="radovi-head rv-foot label text-zar">[ Radovi ]</p>
            <h2 className="radovi-head rv-foot mt-5 font-display text-[clamp(40px,6vw,92px)] font-normal leading-[0.98] tracking-[-0.03em]">
              Manje priče,
              <br />
              više stvari koje rade.
            </h2>
          </div>
          <p className="radovi-head rv-foot max-w-[420px] text-[15px] leading-[1.7] text-ink/70 md:justify-self-end">
            Klijentski projekti, vlastiti proizvodi i demonstracije. Pogledajte šta smo oblikovali, razvili i povezali.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 md:gap-y-24 lg:grid-cols-3">
          {radovi.map((r, i) => (
            <li
              key={r.slug}
              className={`rv-card ${i % 3 === 1 ? "lg:mt-24" : i % 3 === 2 ? "lg:mt-48" : ""}`}
            >
              <a href={`${site}/${r.slug}?lang=bs`} target="_blank" rel="noopener noreferrer" className="work-card group block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={r.img}
                    alt={r.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="work-img object-cover"
                  />
                </div>
                <div className="label mt-4 flex items-baseline justify-between gap-4 text-ink">
                  <span>{r.name}</span>
                  <span className="text-ink/50 transition-colors duration-300 group-hover:text-zar" aria-hidden="true">
                    ↗
                  </span>
                </div>
                <div className="label mt-1 text-ink/45">{r.kind}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
