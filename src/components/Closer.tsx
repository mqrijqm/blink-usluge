"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { hrefProizvodi, hrefUsluge } from "@/lib/site";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Footer: 1:1 kopija footera sa studioblink.ba (klase .pod-* u globals.css).
const site = "https://studioblink.ba";

export default function Closer() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = root.current;
    if (!el) return;
    const q = gsap.utils.selector(el);

    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Početno stanje je u CSS-u (.rv-foot), pa nema bljeska prije animacije.
      gsap.fromTo(
        q(".rv-foot"),
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: { trigger: el, start: "top 75%", toggleActions: "play none none reverse" },
        },
      );
    });
    return () => mm.revert();
  }, []);

  return (
    <footer ref={root} id="kontakt" className="pod">
      <div className="pod-u">
        <div className="pod-g">
          <div>
            <p className="pod-oz rv-foot">Kontakt</p>
            <h2 className="pod-h rv-foot">Preuzimamo od ideje do rasta.</h2>
            <p className="pod-vod rv-foot">
              Recite nam šta želite promijeniti. Razgovarajmo o cilju, prioritetima i sljedećem koraku.
            </p>
            <div className="rv-foot">
              <a className="pod-dug" href={`${site}/kontakt?lang=bs`}>
                Zakažite razgovor{" "}
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
          <div className="pod-v">
            <div>
              <h4>Pišite</h4>
              <a href="mailto:kontakt@studioblink.ba">kontakt@studioblink.ba</a>
              <a href="tel:+38766352469">+387 66 352 469</a>
            </div>
            <div>
              <h4>Studio</h4>
              <span>BLink d.o.o.</span>
              <span>Sime Šolaje 1A</span>
              <span>78000 Banja Luka</span>
            </div>
            <div>
              <h4>Sajt</h4>
              <a href={`${site}/studio?lang=bs`}>Studio</a>
              <a href={hrefProizvodi}>Proizvodi</a>
              <a href={hrefUsluge}>Usluge</a>
              <a href={`${site}/kontakt?lang=bs`}>Kontakt</a>
              <a href={`${site}/privatnost?lang=bs`}>Privatnost</a>
            </div>
          </div>
        </div>

        <div className="pod-wm" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/img/blink-wordmark.svg" alt="" />
        </div>

        <div className="pod-d">
          <span>© 2026 BLink d.o.o.</span>
          <span>Djelatnost 62.01, računarsko programiranje</span>
          <span>Banja Luka, Bosna i Hercegovina</span>
        </div>
      </div>
    </footer>
  );
}

