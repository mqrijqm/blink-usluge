import type { CSSProperties } from "react";

export type CornerState = "before" | "on" | "after";

// Tekst u uglu: svaka riječ ima svoju masku i izlazi odozdo (stagger), a odlazi prema gore.
// Samo CSS tranzicije (vidi .ct u globals.css), pa nema JavaScript posla pri skrolu.
export default function CornerText({
  text,
  state,
  className = "",
}: {
  text: string;
  state: CornerState;
  className?: string;
}) {
  return (
    <p className={`ct label ${className}`} data-state={state} aria-hidden={state !== "on"}>
      {text.split(" ").map((word, i) => (
        <span key={i}>
          <span className="ct-w">
            <span style={{ "--i": i } as CSSProperties}>{word}</span>
          </span>{" "}
        </span>
      ))}
    </p>
  );
}
