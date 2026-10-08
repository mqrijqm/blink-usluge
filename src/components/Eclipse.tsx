// Eclipse = disk sa koncentričnim prstenovima, isti jezik kao krugovi na landingu.
// Namjerno male i u redu, centrirane, da ih stane više (kao na ref sajtu).

type EclipseProps = {
  size?: number;
  dark?: boolean;
  className?: string;
};

export function Eclipse({ size = 140, dark = false, className = "" }: EclipseProps) {
  return (
    <span
      className={`eclipse ${dark ? "eclipse--dark" : ""} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <i />
      <i />
      <i />
    </span>
  );
}

type RowProps = {
  count?: number;
  size?: number;
  gap?: number;
  dark?: boolean;
  className?: string;
  /** veličina opada prema rubovima (centar najveći) */
  taper?: boolean;
};

export function EclipseRow({
  count = 7,
  size = 140,
  gap = 36,
  dark = false,
  taper = false,
  className = "",
}: RowProps) {
  const mid = (count - 1) / 2;
  return (
    <div
      className={`pointer-events-none flex items-center justify-center ${className}`}
      style={{ gap }}
      aria-hidden="true"
    >
      {Array.from({ length: count }, (_, i) => {
        const d = Math.abs(i - mid);
        const s = taper ? size * (1 - d * 0.14) : size;
        return <Eclipse key={i} size={s} dark={dark} className="eclipse-item" />;
      })}
    </div>
  );
}
