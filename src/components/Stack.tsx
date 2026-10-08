"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EclipseColumn } from "./Eclipse";
import { inspo, showcase, type InspoSlot } from "@/data/services";

// Krugovi prve sekcije: dovoljno mali da se vide kao cijeli krugovi (izvan komponente = stalna identičnost liste).
const RING_SIZES = [640, 400, 800, 520];

const slotClass: Record<InspoSlot, string> = {
  tr: "right-14 top-[110px] text-right",
  br: "bottom-12 right-14 text-right",
  tl: "left-14 top-[110px] text-left",
  bl: "bottom-12 left-14 text-left",
};

// Početak stranice: samo naslov, odmah ispod njega stub slika. Isti bijeli background,
// jedna kolona krugova ispod svega.
export default function Stack() {
  const root = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const q = gsap.utils.selector(el);

    const mm = gsap.matchMedia();
    mm.add(
      { calm: "(prefers-reduced-motion: reduce)", live: "(prefers-reduced-motion: no-preference)" },
      (ctx) => {
        const calm = !!ctx.conditions?.calm;

        if (!calm) {
          // Naslov izlazi iz maske.
          gsap.from(q(".hero-line"), { yPercent: 115, duration: 1.1, ease: "power3.out", stagger: 0.12 });
        }

        q<HTMLElement>(".stack-item").forEach((item, i) => {
          // Koja slika je u fokusu: od toga zavisi koji se inspo tekst sa desne strane pojavljuje.
          ScrollTrigger.create({
            trigger: item,
            start: "top 62%",
            end: "bottom 38%",
            onToggle: (self) => self.isActive && setActive(i),
          });

          if (calm) return;

          // Ulaz odozdo, kao slike na ref sajtu.
          gsap.from(item, {
            y: 90,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 94%", toggleActions: "play none none reverse" },
          });
          // Blagi paralaks unutar okvira.
          gsap.fromTo(
            item.querySelector(".stack-img"),
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: "none",
              scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="stack" className="relative overflow-clip bg-bg">
      {/* Krugovi: velika kolona po sredini, linije bez ispune, ispod svega */}
      <EclipseColumn sizes={RING_SIZES} spacing={0.5} />

      {/* Fiksni inspo tekst u 4 ugla: pojavljuje se naknadno i smjenjuje se kako skroluješ.
          Prva polovina rečenice ide desno, druga lijevo (poravnata lijevo). */}
      <div className="pointer-events-none sticky top-0 z-0 -mb-[100svh] hidden h-[100svh] md:block">
        {inspo.map((t) => (
          <p
            key={t.text}
            className={`label absolute w-[210px] text-[10px] leading-[1.7] text-ink transition-[opacity,translate] duration-700 ease-out motion-reduce:transition-none ${slotClass[t.slot]} ${
              active >= t.from && active < t.to ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
            }`}
          >
            {t.text}
          </p>
        ))}
      </div>

      {/* Naslov */}
      <div className="relative z-[1] px-5 pb-14 pt-[26svh] text-center">
        <h1 className="font-display text-[clamp(52px,8vw,120px)] font-normal leading-[0.94] tracking-[-0.025em]">
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="hero-line block">Blink usluge</span>
          </span>
          <span className="block overflow-hidden pb-[0.1em]">
            <em className="hero-line block text-[0.42em] font-normal not-italic leading-[1.1] tracking-[-0.015em] text-zar">
              produkcijski softver, ne demo
            </em>
          </span>
        </h1>
      </div>

      {/* Stub slika u sredini: svi uski iste veličine, svi široki iste veličine, oštre ivice */}
      <div className="relative flex flex-col items-center gap-10 pb-[16svh]">
        {showcase.map((s) => (
          <figure key={s.src} className="stack-item relative z-[1] flex w-full justify-center">
            <div
              className={`relative overflow-hidden ${
                s.shape === "portrait"
                  ? "aspect-[2/3] w-[min(60vw,260px)]"
                  : "aspect-[3/2] w-[min(78vw,390px)]"
              }`}
            >
              <div className="stack-img absolute -inset-y-[7%] inset-x-0">
                <Image
                  src={s.src}
                  alt=""
                  fill
                  priority={s.src.endsWith("stack-1.webp")}
                  sizes={s.shape === "portrait" ? "260px" : "390px"}
                  className="object-cover"
                />
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
