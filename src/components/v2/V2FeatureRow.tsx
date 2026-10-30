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
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal
        direction={flip ? "right" : "left"}
        className={`group relative aspect-[4/3] overflow-hidden rounded-3xl bg-navy-900 lg:aspect-[5/4] ${
          flip ? "lg:order-2" : ""
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
      </Reveal>

      <Reveal delay={0.12} direction={flip ? "left" : "right"} className={flip ? "lg:order-1" : ""}>
        {/* flame-700 rather than 600: these rows sit on the tinted band, where
            600 falls to 3.83:1. */}
        {index !== undefined || eyebrow ? (
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
        ) : null}

        <h3 className="mt-4 text-balance font-display text-2xl font-semibold leading-[1.15] tracking-[-0.025em] text-fg sm:text-3xl lg:text-[2.25rem]">
          {title}
        </h3>

        {description ? (
          <p className="mt-5 text-base leading-relaxed text-fg-muted sm:text-lg">{description}</p>
        ) : null}

        {children}
      </Reveal>
    </div>
  );
}
