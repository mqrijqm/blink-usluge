"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EclipseColumn } from "./Eclipse";
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
          // Koja slika je u fokusu: mijenja brojač u donjem lijevom uglu.
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
      },
    );

    return () => mm.revert();
  }, []);

  const half = Math.ceil(stackItems.length / 2);

  return (
    <section ref={root} id="stack" className="relative overflow-clip bg-warm">
      {/* Krugovi: kolona po sredini, ispod slika */}
      <EclipseColumn sizes={[200, 128, 256, 160, 224, 112]} />

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
        <div className="label absolute bottom-6 left-5 text-ink/60 md:bottom-12 md:left-14" aria-live="polite">
          {String(active + 1).padStart(2, "0")} / {String(showcase.length).padStart(2, "0")}
        </div>
      </div>

      {/* Stub slika u sredini */}
      <div className="relative flex flex-col items-center gap-10 pb-[16svh] pt-[22svh]">
        {showcase.map((s) => (
          <figure key={s.src} className="stack-item relative z-[1] flex w-full justify-center">
            <div
              className={`relative overflow-hidden rounded-[10px] shadow-[0_30px_70px_-34px_rgba(43,35,26,0.55)] ${
                s.shape === "portrait"
                  ? "aspect-[3/4] w-[min(64vw,347px)]"
                  : "aspect-[4/3] w-[min(82vw,460px)]"
              }`}
            >
              <div className="stack-img absolute -inset-y-[8%] inset-x-0">
                <Image
                  src={s.src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 460px, 82vw"
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
