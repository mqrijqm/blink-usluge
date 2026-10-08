"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CornerText, { type CornerState } from "./CornerText";
import { EclipseColumn } from "./Eclipse";
import { inspo, showcase, type InspoSlot } from "@/data/services";
import { blurs } from "@/data/blur";

// Krugovi prve sekcije: dovoljno mali da se vide kao cijeli krugovi (izvan komponente = stalna identičnost liste).
const RING_SIZES = [640, 400, 800, 520];

const slotClass: Record<InspoSlot, string> = {
  tr: "right-14 top-[116px] text-right",
  br: "bottom-14 right-14 text-right",
  tl: "left-14 top-[116px] text-left",
  bl: "bottom-14 left-14 text-left",
};

const stateFor = (active: number, from: number, to: number): CornerState =>
  active < from ? "before" : active >= to ? "after" : "on";

// Početak stranice: samo naslov, ispod njega stub radova (uvijek crno-bijelo).
export default function Stack() {
  const root = useRef<HTMLElement>(null);
  // Počinje na prvoj slici: prvi par rečenica u uglovima je vidljiv odmah pri učitavanju.
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
          // Naslov izlazi iz maske (početno stanje je u CSS-u, .rv-title).
          gsap.fromTo(
            q(".hero-line"),
            // y: 0 je obavezno: GSAP inače pročita CSS pomak (translateY 115%) kao piksele i naslov ostane sakriven.
            { yPercent: 115, y: 0 },
            { yPercent: 0, y: 0, duration: 1.2, ease: "power3.out", stagger: 0.12, delay: 0.1 },
          );
        }

        q<HTMLElement>(".stack-item").forEach((item, i) => {
          // Koja slika je u fokusu: od toga zavisi koji se tekst u uglovima pojavljuje.
          ScrollTrigger.create({
            trigger: item,
            start: "top 62%",
            end: "bottom 38%",
            onToggle: (self) => self.isActive && setActive(i),
          });

          if (calm) return;

          // Ulaz odozdo (početno stanje je u CSS-u, .rv-item).
          gsap.fromTo(
            item,
            { y: 90, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.3,
              ease: "power3.out",
              scrollTrigger: { trigger: item, start: "top 94%", toggleActions: "play none none reverse" },
            },
          );
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

      {/* Fiksni tekst u 4 ugla: dijagonalno, naknadno se pojavljuje i smjenjuje kako skroluješ */}
      <div className="pointer-events-none sticky top-0 z-0 -mb-[100svh] hidden h-[100svh] xl:block">
        {inspo.map((t) => (
          <CornerText
            key={t.text}
            text={t.text}
            state={stateFor(active, t.from, t.to)}
            className={`absolute w-[min(22vw,320px)] text-ink ${slotClass[t.slot]}`}
          />
        ))}
      </div>

      {/* Naslov */}
      <div className="relative z-[1] px-5 pb-[14svh] pt-[26svh] text-center">
        <h1 className="font-display text-[clamp(52px,8vw,120px)] font-normal leading-[0.94] tracking-[-0.025em]">
          <span className="block overflow-hidden pb-[0.06em]">
            <span className="hero-line rv-title block">Blink usluge</span>
          </span>
          <span className="block overflow-hidden pb-[0.1em]">
            <em className="hero-line rv-title block text-[0.42em] font-normal not-italic leading-[1.1] tracking-[-0.015em] text-zar">
              produkcijski softver, ne demo
            </em>
          </span>
        </h1>
      </div>

      {/* Stub radova: vertikalne svi isti, horizontalne svi isti, oštre ivice, puno bijelog prostora između */}
      <div className="relative flex flex-col items-center gap-[clamp(120px,26svh,280px)] pb-[26svh]">
        {showcase.map((s, i) => (
          <figure key={s.bw} className="stack-item rv-item relative z-[1] flex w-full justify-center">
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Otvori: ${s.alt}`}
              className={`group relative block overflow-hidden ${
                s.shape === "portrait"
                  ? "aspect-[4/5] w-[min(62vw,320px)]"
                  : "aspect-[1916/821] w-[min(88vw,600px)]"
              }`}
            >
              <div className="stack-img absolute -inset-y-[7%] inset-x-0">
                {/* Zadano: crno-bijelo, nizak kontrast */}
                <Image
                  src={s.bw}
                  alt={s.alt}
                  fill
                  loading="eager"
                  placeholder={blurs[s.bw] ? "blur" : "empty"}
                  blurDataURL={blurs[s.bw]}
                  sizes={s.shape === "portrait" ? "320px" : "600px"}
                  className="object-cover"
                />
                {/* Na hover: originalne boje (na dodir: slika u fokusu) */}
                <Image
                  src={s.color}
                  alt=""
                  aria-hidden="true"
                  fill
                  sizes={s.shape === "portrait" ? "320px" : "600px"}
                  data-focus={active === i}
                  className="object-cover opacity-0 transition-opacity duration-700 ease-out motion-reduce:transition-none [@media(any-hover:hover)]:group-hover:opacity-100 [@media(any-hover:none)]:data-[focus=true]:opacity-100"
                />
              </div>
            </a>
          </figure>
        ))}
      </div>
    </section>
  );
}
