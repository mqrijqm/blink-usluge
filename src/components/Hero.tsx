"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EclipseRow } from "./Eclipse";
import LiveClock from "./LiveClock";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const q = gsap.utils.selector(el);

    const mm = gsap.matchMedia();
    mm.add(
      { calm: "(prefers-reduced-motion: reduce)", live: "(prefers-reduced-motion: no-preference)" },
      (ctx) => {
        if (ctx.conditions?.calm) return;

        // Ulazna animacija: krugovi se šire iz centra, naslov izlazi iz maske, uglovi se pale.
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });
        intro
          .from(q(".eclipse-item"), {
            scale: 0.3,
            opacity: 0,
            duration: 1.4,
            stagger: { each: 0.09, from: "center" },
          })
          .from(q(".hero-rule"), { scaleX: 0, duration: 1.2 }, "<0.2")
          .from(q(".hero-line"), { yPercent: 115, duration: 1.1, stagger: 0.12 }, "<0.1")
          .from(q(".hero-corner"), { opacity: 0, y: 8, duration: 0.8, stagger: 0.08 }, "<0.3")
          .from(q(".hero-shot"), { yPercent: 18, opacity: 0, duration: 1.4 }, "<0.1");

        // Skrol: krugovi se razmiču, naslov i uglovi bježe gore, mockup juri brže od stranice.
        const scrub = { trigger: el, start: "top top", end: "bottom top", scrub: true };
        gsap.to(q(".hero-eclipses"), { scale: 1.5, opacity: 0.15, ease: "none", scrollTrigger: scrub });
        gsap.to(q(".hero-title"), { yPercent: -35, opacity: 0, ease: "none", scrollTrigger: { ...scrub, end: "60% top" } });
        gsap.to(q(".hero-corner"), { opacity: 0, ease: "none", scrollTrigger: { ...scrub, end: "35% top" } });
        gsap.to(q(".hero-shot"), { yPercent: -22, ease: "none", scrollTrigger: scrub });
      },
    );

    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="hero" className="relative h-[100svh] min-h-[640px] overflow-hidden bg-bg">
      {/* Uglovi: mono labele, kao 4 ugla na ref sajtu */}
      <div className="hero-corner label absolute left-5 top-[104px] text-zar md:left-14">[ Usluge ]</div>
      <div className="hero-corner label absolute right-5 top-[104px] text-right text-zar md:right-14">
        Banjaluka [ <LiveClock /> ]
      </div>
      <p className="hero-corner absolute inset-x-6 top-[53%] mx-auto max-w-[520px] text-center text-[14px] leading-[1.65] text-ink/70 xl:inset-x-auto xl:bottom-12 xl:left-14 xl:top-auto xl:mx-0 xl:max-w-[250px] xl:text-left">
        Gradimo sisteme koji idu u ruke stvarnih korisnika i ostaju jednostavni za održavanje kada postanu ozbiljni. Ista pažnja ide u rješavanje produkcijskog kvara kao i u čist kôd koji objašnjava sam sebe, i onda kada autor ode dalje.
      </p>
      <div className="hero-corner label absolute bottom-6 right-5 text-right text-ink/60 md:bottom-12 md:right-14">
        [ Skrolajte ↓ ]
      </div>

      {/* Krugovi: male, centrirane, u redu */}
      <div className="hero-eclipses absolute inset-x-0 top-[37%] -translate-y-1/2">
        <EclipseRow count={7} size={150} gap={34} className="max-md:hidden" />
        <EclipseRow count={3} size={120} gap={22} className="md:hidden" />
        <div className="hero-rule absolute left-[3%] right-[3%] top-1/2 h-px origin-center bg-ink/12" />
      </div>

      {/* Naslov */}
      <div className="hero-title absolute inset-x-0 top-[37%] -translate-y-1/2 px-5 text-center">
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

      {/* Mockup sajta, odrezan donjom ivicom */}
      <div className="hero-shot absolute left-1/2 top-[70%] w-[min(86vw,640px)] -translate-x-1/2 xl:top-[66%]">
        <div className="relative aspect-[16/10] overflow-hidden rounded-[10px] shadow-[0_40px_90px_-40px_rgba(43,35,26,0.55)]">
          <Image
            src="/img/krnetic-naslovna.webp"
            alt="Dr. Krnetić, naslovna stranica ordinacije"
            fill
            priority
            sizes="(min-width: 768px) 640px, 86vw"
            className="object-cover object-top"
          />
        </div>
      </div>
    </section>
  );
}
