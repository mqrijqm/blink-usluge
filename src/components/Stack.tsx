"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EclipseRow } from "./Eclipse";
import { showcase, stackItems } from "@/data/services";

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

        q<HTMLElement>(".stack-item").forEach((item, i) => {
          // Koji je mockup u fokusu: mijenja potpis u donjem lijevom uglu.
          ScrollTrigger.create({
            trigger: item,
            start: "top 62%",
            end: "bottom 38%",
            onToggle: (self) => self.isActive && setActive(i),
          });

          if (calm) return;

          // Ulaz odozdo, kao slike na ref sajtu.
          gsap.from(item, {
            y: 110,
            opacity: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 92%", toggleActions: "play none none reverse" },
          });
          // Blagi paralaks unutar okvira.
          gsap.fromTo(
            item.querySelector(".stack-img"),
            { yPercent: -7 },
            {
              yPercent: 7,
              ease: "none",
              scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true },
            },
          );
        });

        // Krugovi iza svake slike se lagano razmiču dok prolaze.
        if (!calm) {
          q<HTMLElement>(".stack-eclipses").forEach((row) => {
            gsap.fromTo(
              row,
              { scaleX: 0.82 },
              {
                scaleX: 1.12,
                ease: "none",
                scrollTrigger: { trigger: row, start: "top bottom", end: "bottom top", scrub: true },
              },
            );
          });
        }
      },
    );

    return () => mm.revert();
  }, []);

  const half = Math.ceil(stackItems.length / 2);

  return (
    <section ref={root} id="stack" className="relative overflow-clip bg-warm">
      {/* Fiksni mono uglovi (ostaju na mjestu dok slike prolaze) */}
      <div className="pointer-events-none sticky top-0 z-0 -mb-[100svh] h-[100svh]">
        <div className="label absolute left-5 top-[104px] text-zar md:left-14">[ Stack ]</div>
        <ul className="label absolute right-5 top-[104px] hidden text-right text-ink/70 md:right-14 md:block">
          {stackItems.slice(0, half).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <ul className="label absolute bottom-12 right-5 hidden text-right text-ink/70 md:right-14 md:block">
          {stackItems.slice(half).map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <div className="label absolute bottom-6 left-5 text-ink md:bottom-12 md:left-14" aria-live="polite">
          <span className="text-ink/45">
            {String(active + 1).padStart(2, "0")} / {String(showcase.length).padStart(2, "0")}
          </span>
          <br />
          {showcase[active].name}
        </div>
      </div>

      {/* Stub mockupa u sredini */}
      <div className="relative flex flex-col items-center gap-10 pb-[16svh] pt-[22svh]">
        {showcase.map((s) => (
          <figure
            key={s.name}
            className="stack-item relative z-[1] flex w-full justify-center"
          >
            <div className="stack-eclipses absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-md:hidden">
              <EclipseRow count={5} size={168} gap={26} taper />
            </div>
            <div
              className={`relative z-[1] overflow-hidden rounded-[10px] shadow-[0_30px_70px_-34px_rgba(43,35,26,0.55)] ${
                s.shape === "portrait"
                  ? "aspect-[3/4] w-[min(64vw,347px)]"
                  : "aspect-[4/3] w-[min(82vw,460px)]"
              }`}
            >
              <div className="stack-img absolute -inset-y-[8%] inset-x-0">
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  sizes="(min-width: 768px) 460px, 82vw"
                  className={`object-cover ${s.shape === "portrait" ? "object-top" : "object-left-top"}`}
                />
              </div>
            </div>
          </figure>
        ))}
      </div>
    </section>
  );
}
