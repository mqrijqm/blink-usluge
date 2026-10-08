"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blurs } from "@/data/blur";
import { nacinIntro, paneli, type Ikona } from "@/data/nacin";

// Sekcija "Šta radimo": raspored i pokret sa patternbreak.ing ("What can be done"): mala mono labela lijevo, velika izjava
// desno, pa tri zalijepljena (sticky) panela koja se slažu jedan preko drugog; svaki ima naslov lijevo i kartice desno.
// Boje su brend: narandžasta #F2543D, slonovača #F3F0E9, ugljen #151515.

const icons: Record<Ikona, string> = {
  layers: "M9 2 2 5.5 9 9l7-3.5L9 2ZM2 9l7 3.5L16 9M2 12.5 9 16l7-3.5",
  user: "M9 8.25a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3 15.75c0-3 2.7-4.5 6-4.5s6 1.5 6 4.5",
  tag: "M2.25 9.4V3.75a1.5 1.5 0 0 1 1.5-1.5H9.4a1.5 1.5 0 0 1 1.06.44l5.3 5.3a1.5 1.5 0 0 1 0 2.12l-5.65 5.65a1.5 1.5 0 0 1-2.12 0l-5.3-5.3a1.5 1.5 0 0 1-.44-1.06ZM6 6h.01",
  clock: "M9 16.5a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15ZM9 4.5V9l3 1.5",
  code: "M6 5.25 2.25 9 6 12.75M12 5.25 15.75 9 12 12.75",
  spark: "M9 1.5l1.7 4.8 4.8 1.7-4.8 1.7L9 14.5l-1.7-4.8L2.5 8l4.8-1.7L9 1.5Z",
};

function Icon({ name }: { name: Ikona }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      <path d={icons[name]} />
    </svg>
  );
}

export default function Nacin() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const q = gsap.utils.selector(el);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Izjava izlazi riječ po riječ iz maske (početno stanje je u CSS-u, .nc-w).
      gsap.fromTo(
        q(".nc-w > span"),
        // y: 0 je obavezno: GSAP inače pročita CSS pomak (translateY 115%) kao piksele i izjava ostane sakrivena.
        { yPercent: 115, y: 0 },
        {
          yPercent: 0,
          y: 0,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.035,
          scrollTrigger: { trigger: q(".nc-statement")[0], start: "top 82%", toggleActions: "play none none reverse" },
        },
      );
      gsap.fromTo(
        q(".nc-label"),
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: q(".nc-statement")[0], start: "top 85%", toggleActions: "play none none reverse" } },
      );

      // Kartice svakog panela ulaze jedna za drugom kad panel stigne do vrha.
      q<HTMLElement>(".nc-panel").forEach((panel) => {
        gsap.fromTo(
          panel.querySelectorAll(".nc-card"),
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.12,
            scrollTrigger: { trigger: panel, start: "top 72%", toggleActions: "play none none reverse" },
          },
        );
        gsap.fromTo(
          panel.querySelector(".nc-title"),
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: panel, start: "top 78%", toggleActions: "play none none reverse" } },
        );
      });
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="nacin" aria-label="Šta radimo i kako radimo" className="relative bg-bg px-4 pb-[14svh] pt-[130px] md:px-6">
      <div className="mx-auto max-w-[1104px]">
        <div className="grid gap-6 pb-[12svh] md:grid-cols-[30%_70%] md:gap-0 md:pb-[14svh]">
          <p className="nc-label rv-foot label text-ink">{nacinIntro.label}</p>
          <p className="nc-statement font-display text-[clamp(30px,4vw,56px)] font-normal leading-[1.2] tracking-[-0.03em]">
            {nacinIntro.text.split(" ").map((w, i) => (
              <span key={i}>
                <span className="nc-w">
                  <span>{w}</span>
                </span>{" "}
              </span>
            ))}
          </p>
        </div>

        <div className="flex flex-col gap-3 md:gap-6">
          {paneli.map((p, i) => (
            <div
              key={p.title}
              className={`nc-panel nc-panel--${p.tone} sticky grid gap-6 rounded-2xl p-4 md:min-h-[502px] md:grid-cols-2 md:gap-x-[72px] md:p-6 ${
                i === 0 ? "top-3 md:top-8" : "top-6 md:top-16"
              }`}
              style={{ zIndex: 10 + i }}
            >
              <h2 className="nc-title rv-foot font-display text-[clamp(32px,3.9vw,56px)] font-normal leading-[1.2] tracking-[-0.03em]">
                {p.title}
              </h2>
              <div className="flex flex-col gap-2">
                {p.cards.map((c) => (
                  <article key={c.text} className="nc-card nc-card-box flex items-center gap-4 rounded-[32px] border p-3 md:gap-6 md:p-4">
                    <div className="relative size-[88px] shrink-0 overflow-hidden rounded-2xl md:size-[112px]">
                      <Image
                        src={c.img}
                        alt={c.alt}
                        fill
                        sizes="112px"
                        loading="eager"
                        placeholder={blurs[c.img] ? "blur" : "empty"}
                        blurDataURL={blurs[c.img]}
                        className="nc-img object-cover"
                      />
                    </div>
                    <div className="flex min-h-[88px] min-w-0 flex-1 flex-col justify-between gap-3 md:min-h-[112px] md:gap-4">
                      <p className="text-[14px] leading-[1.4] md:text-[16px]">{c.text}</p>
                      <ul className="label flex flex-wrap gap-x-5 gap-y-1 text-[10px] md:text-[11px]">
                        {c.meta.map((m) => (
                          <li key={m.label} className="flex items-center gap-2">
                            <Icon name={m.icon} />
                            {m.label}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
