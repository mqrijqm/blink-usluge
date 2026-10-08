"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { oNama } from "@/data/nacin";

// Tekstualna sekcija ispod kartica. Lijevo: kružni znak koji se vrti oko svoje ose (20 s, kao na studioblink.ba/studio)
// i klizi niz narandžastu liniju do strelice dok skroluješ. Desno: tekst o radovima i timu.
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

      // Znak klizi niz liniju, a linija se skraćuje odozgo (isti princip kao na studio stranici).
      const badge = q<HTMLElement>(".ob-badge")[0];
      const rule = q<HTMLElement>(".ob-rule")[0];
      const ruleMargin = 36; // gornja i donja margina linije (2 x 18 px)
      gsap.to(badge, {
        y: () => rule.offsetHeight + ruleMargin,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 60%", end: "bottom 30%", scrub: true, invalidateOnRefresh: true },
      });
      gsap.fromTo(
        rule,
        { scaleY: 1 },
        { scaleY: 0, ease: "none", scrollTrigger: { trigger: el, start: "top 60%", end: "bottom 30%", scrub: true } },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <section ref={root} id="studio" aria-label="O studiju" className="relative bg-bg px-5 py-[16svh] md:px-6">
      <div className="grid min-h-[78svh] gap-14 md:grid-cols-2 md:gap-6">
        {/* Lijevo: znak, linija, strelica */}
        <div className="relative min-h-[360px] md:min-h-0" aria-hidden="true">
          <div className="absolute inset-y-0 left-0 flex w-[clamp(90px,9vw,128px)] flex-col items-center md:left-6">
            <div className="ob-badge relative size-[clamp(90px,9vw,128px)] shrink-0 will-change-transform">
              <svg viewBox="0 0 120 120" className="ob-spin size-full">
                <defs>
                  <path id="obBadgePath" d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0" />
                </defs>
                <text>
                  <textPath href="#obBadgePath" startOffset="0">
                    {oNama.badge}
                  </textPath>
                </text>
              </svg>
              <span className="absolute left-1/2 top-1/2 size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zar" />
            </div>
            <span className="ob-rule my-[18px] w-[1.5px] flex-1 origin-bottom bg-zar will-change-transform" />
            <svg viewBox="0 0 16 26" fill="none" className="ob-arrow h-6 w-[15px] shrink-0 text-zar">
              <path d="M8 0 V24 M1 17 l7 7 7-7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Desno: tekst */}
        <div className="font-sans text-[clamp(18px,1.75vw,26px)] font-medium leading-[1.45] tracking-[-0.012em]">
          <p className="tx-in rv-foot">{oNama.paragraph}</p>
          <p className="tx-in rv-foot mt-9 text-ink/75">{oNama.team}</p>
        </div>
      </div>
    </section>
  );
}
