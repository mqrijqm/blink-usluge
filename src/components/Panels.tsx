"use client";

import { Fragment, useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/data/services";
import { blurs } from "@/data/blur";

// Koliko dugo ostaje potpuno vidljiv jedan panel prije nego sljedeći krene da ga prekriva (u visinama ekrana).
const HOLD = "80svh";

export default function Panels() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const q = gsap.utils.selector(el);

    const mm = gsap.matchMedia();
    mm.add(
      {
        calm: "(prefers-reduced-motion: reduce)",
        desktop: "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        mobile: "(max-width: 767px) and (prefers-reduced-motion: no-preference)",
      },
      (ctx) => {
        if (ctx.conditions?.calm) return;
        const side = ctx.conditions?.desktop ? 8 : 5;
        const panels = q<HTMLElement>(".panel");
        const anchors = q<HTMLElement>(".panel-anchor");

        panels.forEach((panel, i) => {
          const media = panel.querySelector<HTMLElement>(".panel-media");
          const img = panel.querySelector<HTMLElement>(".panel-img");
          const strip = panel.querySelector<HTMLElement>(".panel-strip");
          const shade = panel.querySelector<HTMLElement>(".panel-shade");

          // Prvi panel izlazi iz širine stuba mockupa (~32%), ostali iz uskog razmaka sa strane.
          const from = i === 0 ? (ctx.conditions?.desktop ? 36 : 11) : side;
          gsap.fromTo(
            media,
            { clipPath: `inset(0% ${from}% 0% ${from}%)` },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "none",
              scrollTrigger: { trigger: anchors[i], start: "top bottom", end: "top top", scrub: true },
            },
          );
          // Slika se smiruje dok panel stiže na mjesto.
          gsap.fromTo(
            img,
            { scale: 1.16 },
            {
              scale: 1,
              ease: "none",
              scrollTrigger: { trigger: anchors[i], start: "top bottom", end: "top top", scrub: true },
            },
          );
          // Traka sa tekstom izlazi kad panel zauzme ekran.
          gsap.fromTo(
            strip,
            { y: 46, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: { trigger: anchors[i], start: "top 40%", toggleActions: "play none none reverse" },
            },
          );
          // Prethodni panel tamni kad ga sljedeći pokriva.
          const next = panels[i + 1];
          if (next && shade) {
            gsap.to(shade, {
              opacity: 0.42,
              ease: "none",
              scrollTrigger: { trigger: anchors[i + 1], start: "top bottom", end: "top top", scrub: true },
            });
          }
        });
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="usluge" aria-label="Usluge" className="relative bg-bg">
      {services.map((s, i) => (
        <Fragment key={s.n}>
          {/* Razmak prije svakog panela = vrijeme koje prethodni panel ostaje potpuno vidljiv */}
          {i > 0 && <div aria-hidden="true" style={{ height: HOLD }} />}
          {/* Nelijepljena oznaka: ScrollTrigger mjeri nju (sticky element mijenja poziciju dok je zalijepljen) */}
          <div className="panel-anchor h-0" aria-hidden="true" />
        <article
          className="panel sticky top-0 h-[100svh] w-full overflow-hidden"
        >
          <div className="panel-media absolute inset-0 will-change-[clip-path]">
            <div className="panel-img absolute inset-0 will-change-transform">
              <Image
                src={s.image}
                alt={s.alt}
                fill
                sizes="100vw"
                loading="eager"
                placeholder={blurs[s.image] ? "blur" : "empty"}
                blurDataURL={blurs[s.image]}
                className="object-cover object-top"
              />
            </div>
            <div className="panel-shade absolute inset-0 bg-dark opacity-0" />
          </div>

          {/* Svijetla traka: broj + tekst lijevo, kategorija + naslov desno (kao na ref sajtu) */}
          <div className="panel-strip rv-strip absolute inset-x-4 bottom-4 rounded-[2px] bg-[#f4f1ec]/90 p-6 backdrop-blur-md md:inset-x-10 md:bottom-auto md:top-1/2 md:-translate-y-1/2 md:px-10 md:py-9">
            <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1.3fr)] md:gap-10">
              <div className="order-2 md:order-none">
                <div className="label mb-4 text-ink/50 max-md:hidden">{s.n}</div>
                <p className="text-[13.5px] leading-[1.65] text-ink/85">{s.p1}</p>
              </div>
              <div className="order-3 md:order-none md:pt-[calc(11px*1.5+1rem)]">
                <p className="text-[13px] leading-[1.65] text-ink/58">{s.p2}</p>
                {s.link && (
                  <a
                    href={s.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-6 inline-flex h-12 items-center gap-4 border border-ink/70 px-6 text-[15px] font-normal text-ink transition-colors duration-300 hover:bg-ink hover:text-bg"
                  >
                    {s.link.label}
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      <path d="M7 17 17 7M8 7h9v9" />
                    </svg>
                  </a>
                )}
              </div>
              <div className="order-1 flex flex-col md:order-none md:items-end md:text-right">
                <div className="label mb-3 flex w-full justify-between gap-4 text-ink/55 md:justify-end md:gap-0">
                  <span className="md:hidden">{s.n}</span>
                  <span>{s.category}</span>
                </div>
                <h2 className="font-display text-[clamp(28px,3.7vw,54px)] font-normal uppercase leading-[0.98] tracking-[-0.025em] text-ink">
                  {s.title}
                </h2>
                <div className="label mt-4 text-zar">{s.price}</div>
              </div>
            </div>
          </div>
        </article>
        </Fragment>
      ))}
    </section>
  );
}

