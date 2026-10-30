import { type ReactNode } from "react";

type Tone = "white" | "tint" | "blue";

const tones: Record<Tone, string> = {
  white: "bg-white text-fg",
  tint: "bg-federal-50 text-fg",
  blue: "bg-federal-800 text-white",
};

/**
 * One band of the page. Every band in this design is the same shape — full
 * width colour, centred container, generous but equal padding — because the
 * predictability is the point.
 */
export function Band({
  tone = "white",
  id,
  children,
  className = "",
}: {
  tone?: Tone;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

/**
 * Left-aligned heading with an optional lead paragraph. `onBlue` only swaps
 * the colours; the type scale stays identical everywhere.
 */
export function BandHeading({
  eyebrow,
  title,
  lead,
  onBlue = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  onBlue?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.14em] ${
            onBlue ? "text-federal-200" : "text-federal-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-4xl ${
          onBlue ? "text-white" : "text-fg"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-[17px] leading-[1.7] sm:text-lg ${
            onBlue ? "text-federal-100" : "text-fg"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
