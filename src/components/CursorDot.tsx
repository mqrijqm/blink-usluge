"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

// Tačka koja prati miš (kao na ref sajtu). Samo na uređajima sa mišem. Na elementu sa data-cursor="..."
// naraste u krug sa tekstom.
export default function CursorDot() {
  const dot = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = dot.current;
    if (!el) return;
    if (!window.matchMedia("(any-hover: hover) and (any-pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.set(el, { xPercent: -50, yPercent: -50, opacity: 0 });
    const x = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });

    const move = (e: MouseEvent) => {
      gsap.to(el, { opacity: 1, duration: 0.3, overwrite: "auto" });
      x(e.clientX);
      y(e.clientY);
      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      const text = target?.dataset.cursor ?? "";
      if (label.current) label.current.textContent = text;
      gsap.to(el, { width: text ? 92 : 12, height: text ? 92 : 12, duration: 0.45, ease: "power3.out", overwrite: "auto" });
      gsap.to(label.current, { opacity: text ? 1 : 0, duration: 0.25 });
    };
    const leave = () => gsap.to(el, { opacity: 0, duration: 0.3 });

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={dot}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[60] flex h-3 w-3 items-center justify-center rounded-full bg-ink text-bg opacity-0 max-[1023px]:hidden"
    >
      <span ref={label} className="label whitespace-nowrap text-[10px] opacity-0" />
    </div>
  );
}
