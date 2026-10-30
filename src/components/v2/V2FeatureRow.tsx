import Image from "next/image";
import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * A photograph facing its content, alternating sides down the page — the
 * pattern the reference uses for everything below its hero, and what turns a
 * list of capabilities into something that reads as a company rather than a
 * document.
 *
 * The image reveals from the side it sits on and lifts slightly under the
 * cursor; the content reveals from the other side a beat later.
 */
export function V2FeatureRow({
  image,
  imageAlt,
  flip = false,
  eyebrow,
  title,
  description,
  children,
  index,
  align = "center",
  sticky = false,
}: {
  image: string;
  imageAlt: string;
  /** Put the photograph on the right instead of the left. */
  flip?: boolean;
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  /** Shown as 01, 02 … beside the title. */
  index?: number;
  /** `start` when the text column is much taller than the picture. */
  align?: "center" | "start";
  /**
   * Heading and picture hold in place while the body scrolls past them, until
   * the section ends. Only from lg up, and only worth it where the body runs
   * long enough to scroll — otherwise nothing appears to happen.
   */
  sticky?: boolean;
}) {
  const eyebrowRow =
    index !== undefined || eyebrow ? (
      <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.2em] text-flame-700">
        {index !== undefined ? (
          <span className="font-display text-sm">{String(index).padStart(2, "0")}</span>
        ) : null}
        {eyebrow ? (
          <>
            <span className="h-px w-8 bg-flame-500" aria-hidden />
            {eyebrow}
          </>
        ) : null}
      </p>
    ) : null;

  const heading = (
    <h3 className="text-balance font-display text-2xl font-semibold leading-[1.15] tracking-[-0.025em] text-fg sm:text-3xl lg:text-[2.25rem]">
      {title}
    </h3>
  );

  const picture = (
    <div
      className={`group relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-900 ${
        // Shorter when sticky: the column has to be meaningfully shorter than
        // the body beside it, or there is nothing for it to hold through.
        sticky ? "lg:aspect-auto lg:h-[19rem]" : "lg:aspect-[5/4]"
      }`}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        quality={90}
        sizes="(min-width: 1024px) 45vw, 100vw"
        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
      />
      {/* A touch of brand over the photograph so the set reads as one system. */}
      <div
        className="absolute inset-0 bg-gradient-to-tr from-navy-950/45 via-navy-950/5 to-transparent"
        aria-hidden
      />
    </div>
  );

  if (sticky) {
    return (
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* The column stretches to the row's height — the sticky child needs
            something taller than itself to travel within, or it simply
            scrolls away with the page. */}
        <div className={flip ? "lg:order-2" : ""}>
          <Reveal className="lg:sticky lg:top-28">
            {eyebrowRow}
            <div className="mt-4">{heading}</div>
            <div className="mt-8">{picture}</div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className={flip ? "lg:order-1" : ""}>
          {description ? (
            <p className="text-base leading-relaxed text-fg-muted sm:text-lg">{description}</p>
          ) : null}
          {children}
        </Reveal>
      </div>
    );
  }

  return (
    <div
      className={`grid gap-10 lg:grid-cols-2 lg:gap-16 ${
        align === "start" ? "lg:items-start" : "lg:items-center"
      }`}
    >
      <Reveal direction={flip ? "right" : "left"} className={flip ? "lg:order-2" : ""}>
        {picture}
      </Reveal>

      <Reveal delay={0.12} direction={flip ? "left" : "right"} className={flip ? "lg:order-1" : ""}>
        {eyebrowRow}
        <div className="mt-4">{heading}</div>
        {description ? (
          <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">{description}</p>
        ) : null}
        {children}
      </Reveal>
    </div>
  );
}
