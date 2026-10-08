"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { blurs } from "@/data/blur";
import { links } from "@/data/services";
import { projekti, proizvodiIntro, proizvodiStatement } from "@/data/proizvodi";

const site = "https://studioblink.ba";

// Stranica /proizvodi: raspored sa Kai Marlow reference (uvod + link, veliki naslov, mreža 2 kolone velikih slika
// sa imenom i oznakama ispod, ogromna završna izjava). Sadržaj je sa studioblink.ba/proizvodi.
export default function Proizvodi() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const q = gsap.utils.selector(el);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Uvod i naslov (početno stanje je u CSS-u, .rv-foot, pa nema bljeska).
      gsap.fromTo(
        q(".pz-head"),
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", stagger: 0.12, delay: 0.1 },
      );
      // Kartice izlaze u talasima (po redu u vidnom polju).
      ScrollTrigger.batch(q(".rv-card"), {
        start: "top 92%",
        onEnter: (batch) =>
          gsap.fromTo(
            batch,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.3, ease: "power3.out", stagger: 0.14, overwrite: true },
          ),
        onLeaveBack: (batch) => gsap.to(batch, { y: 80, opacity: 0, duration: 0.5, overwrite: true }),
      });
      // Završna izjava
      gsap.fromTo(
        q(".pz-end"),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.3,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: { trigger: q(".pz-statement")[0], start: "top 80%", toggleActions: "play none none reverse" },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} aria-label="Case studyji" className="relative bg-bg px-5 pt-[120px] md:px-6">
      {/* Uvod + link */}
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:gap-6">
        <div className="pz-head rv-foot flex gap-4">
          <span aria-hidden="true" className="mt-[7px] block size-[9px] shrink-0 rounded-full bg-ink" />
          <p className="max-w-[640px] text-[clamp(15px,1.45vw,21px)] font-normal uppercase leading-[1.5] tracking-[-0.005em]">
            {proizvodiIntro.text}
          </p>
        </div>
        <a
          href={`${links.kontakt}`}
          className="pz-head rv-foot group flex items-end justify-between self-end border-b border-ink pb-2 text-[clamp(15px,1.45vw,21px)] font-normal uppercase"
        >
          <span>{proizvodiIntro.cta}</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            aria-hidden="true"
            className="transition-transform duration-500 group-hover:translate-x-1.5"
          >
            <path d="M4 12h16M14 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      {/* Veliki naslov */}
      <div className="mt-[16svh] flex flex-wrap items-end justify-between gap-6 pb-10 md:mt-[22svh]">
        <h1 className="pz-head rv-foot font-display text-[clamp(56px,10.2vw,168px)] font-normal leading-[0.9] tracking-[-0.045em]">
          {proizvodiIntro.title}
        </h1>
        <p className="pz-head rv-foot label mb-3 flex gap-6 text-ink/60">
          <span>{proizvodiIntro.label}</span>
          <span>{proizvodiIntro.count}</span>
        </p>
      </div>

      {/* Mreža: 2 kolone velikih slika */}
      <ul className="grid grid-cols-1 gap-x-[1.2vw] gap-y-14 md:grid-cols-2 md:gap-y-[4.5vw]">
        {projekti.map((p, i) => (
          <li key={p.slug} className="rv-card">
            <a
              href={`${site}/case-${p.slug}?lang=bs`}
              target="_blank"
              rel="noopener noreferrer"
              className="pz-card group block"
              data-cursor={p.cta === "Pogledaj demo" ? "Demo" : "Otvori"}
            >
              <div className="relative aspect-[1.39] overflow-hidden bg-ink/5">
                {/* Osnovna slika: na hover se zamuti i poveća */}
                <Image
                  src={p.img}
                  alt={p.alt}
                  fill
                  loading={i < 4 ? "eager" : "lazy"}
                  placeholder={blurs[p.img] ? "blur" : "empty"}
                  blurDataURL={blurs[p.img]}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="pz-base object-cover"
                />
                {/* Isječak u sredini: ista slika, oštra i manja, pojavljuje se na hover */}
                <div className="pz-lens pointer-events-none absolute left-1/2 top-1/2 w-[52%] -translate-x-1/2 -translate-y-1/2">
                  <div className="relative aspect-[1.39] overflow-hidden shadow-[0_30px_60px_-30px_rgba(18,17,11,0.55)]">
                    <Image src={p.img} alt="" aria-hidden="true" fill sizes="30vw" className="object-cover" />
                  </div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 text-[clamp(14px,1.3vw,19px)] font-normal uppercase leading-tight">
                <h2 className="font-normal">{p.name}</h2>
                <ul className="flex flex-wrap gap-x-4 text-ink/50">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-3 max-w-[58ch] text-[13.5px] leading-[1.65] text-ink/70">{p.text}</p>
            </a>
          </li>
        ))}
      </ul>

      {/* Ogromna završna izjava */}
      <div className="pz-statement relative pb-[16svh] pt-[24svh]">
        <span aria-hidden="true" className="pz-end block size-[11px] rounded-full bg-ink" />
        <p className="pz-end mt-[10svh] max-w-[1900px] font-display text-[clamp(40px,7.4vw,124px)] font-normal leading-[0.98] tracking-[-0.045em]">
          {proizvodiStatement}
        </p>
        <div className="pz-end mt-14 flex flex-wrap items-center gap-x-10 gap-y-4 text-[clamp(15px,1.45vw,21px)] font-normal uppercase">
          <span className="text-ink/50">Imate proizvod na umu?</span>
          <a href={links.kontakt} className="group inline-flex items-end gap-3 border-b border-ink pb-2">
            Započnimo razgovor
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
              className="transition-transform duration-500 group-hover:translate-x-1.5"
            >
              <path d="M4 12h16M14 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
