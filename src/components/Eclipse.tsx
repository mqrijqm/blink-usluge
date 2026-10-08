"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Eclipse = samo linija kruga (bez ispune). Kolona krugova ide po sredini sekcije,
// krugovi se preklapaju jedan preko drugog i leže ispod slika.

type Ring = { y: number; d: number; double: boolean };

type Props = {
  dark?: boolean;
  className?: string;
  /** prečnici koji se ciklično smjenjuju (px) */
  sizes?: number[];
  /** koliki dio zbira poluprečnika je razmak između centara (manje = više preklapanja) */
  spacing?: number;
  /** "load": pali se odmah; "scroll": svaki se pali kad uđe u ekran */
  reveal?: "load" | "scroll";
};

// Izvan komponente, da lista ima stalnu identičnost (nova lista pri svakom renderu = beskonačna petlja).
// 10× veći od prve verzije (300/190/380/240 px): krugovi su sad ogromni lukovi koji prelaze cijeli ekran.
const DEFAULT_SIZES = [3000, 1900, 3800, 2400];

export function EclipseColumn({
  dark = false,
  className = "",
  sizes = DEFAULT_SIZES,
  spacing = 0.3,
  reveal = "scroll",
}: Props) {
  const box = useRef<HTMLDivElement>(null);
  const [rings, setRings] = useState<Ring[]>([]);

  // Izračunaj koliko krugova stane u visinu roditelja.
  useLayoutEffect(() => {
    const el = box.current;
    if (!el) return;
    const build = () => {
      const h = el.clientHeight;
      const out: Ring[] = [];
      let i = 0;
      let d = sizes[0];
      let y = d / 2 - d * 0.25; // prvi krug viri malo iznad ruba
      while (y - d / 2 < h && out.length < 120) {
        out.push({ y, d, double: i % 2 === 0 });
        const next = sizes[(i + 1) % sizes.length];
        y += ((d + next) / 2) * spacing;
        d = next;
        i++;
      }
      setRings(out);
    };
    build();
    const ro = new ResizeObserver(build);
    ro.observe(el);
    return () => ro.disconnect();
  }, [sizes, spacing]);

  // Ulazna animacija krugova (poštuje prefers-reduced-motion).
  useEffect(() => {
    const el = box.current;
    if (!el || rings.length === 0) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const items = el.querySelectorAll<HTMLElement>(".eclipse-ring");
      if (reveal === "load") {
        gsap.from(items, {
          scale: 0.35,
          opacity: 0,
          duration: 1.4,
          ease: "power3.out",
          stagger: { each: 0.07, from: "center" },
        });
      } else {
        items.forEach((r) =>
          gsap.from(r, {
            scale: 0.4,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: r, start: "top 96%", toggleActions: "play none none reverse" },
          }),
        );
      }
    });
    return () => mm.revert();
  }, [rings, reveal]);

  return (
    <div
      ref={box}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${dark ? "rings--dark" : ""} ${className}`}
    >
      {rings.map((r, i) => (
        <span
          key={i}
          className={`eclipse-ring ${r.double ? "eclipse-ring--double" : ""}`}
          style={{ top: r.y - r.d / 2, width: r.d, height: r.d, marginLeft: -r.d / 2 }}
        />
      ))}
    </div>
  );
}

