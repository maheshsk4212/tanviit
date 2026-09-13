import Image from "next/image";
import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Chip } from "@/components/ui/Chip";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Shared hero for interior pages — the same large, tightly tracked,
 * medium-weight display type as the homepage hero, on the deep ground with a
 * low gold light source.
 *
 * Pass `accent` as a trailing substring of `title` to render that part in
 * gold (e.g. title="Domain expertise. Proven impact." accent="Proven impact.").
 */
export function PageHeader({
  eyebrow,
  title,
  accent,
  description,
  image,
  imageAlt,
  children,
}: {
  eyebrow?: string;
  title: string;
  accent?: string;
  description?: string;
  /** Optional full-bleed backdrop photo, treated like the homepage hero. */
  image?: string;
  /** Alt text for `image`; omit when the photo is purely decorative. */
  imageAlt?: string;
  children?: ReactNode;
}) {
  const splitAt = accent ? title.length - accent.length : -1;
  return (
    <section className="relative isolate overflow-hidden bg-deep-950">
      {image ? (
        <>
          <Image
            src={image}
            alt={imageAlt ?? ""}
            fill
            preload
            sizes="100vw"
            className="hero-image -z-20 object-cover"
          />
          <div className="hero-scrim absolute inset-0 -z-10" aria-hidden />
        </>
      ) : (
        <div className="glow-gold-br absolute inset-0 -z-10" aria-hidden />
      )}
      <div
        className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent"
        aria-hidden
      />
      <Container className="pb-20 pt-36 sm:pb-24 sm:pt-40 lg:pb-28 lg:pt-44">
        <Reveal>
          {eyebrow ? <Chip tone="dark">{eyebrow}</Chip> : null}
          <h1 className="mt-6 max-w-5xl text-balance font-display text-5xl font-medium leading-[0.98] tracking-[-0.035em] text-white sm:text-6xl lg:text-[5.25rem]">
            {splitAt > 0 ? (
              <>
                {title.slice(0, splitAt)}
                <span className="text-gold-400">{accent}</span>
              </>
            ) : (
              title
            )}
          </h1>
          {description ? (
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/75">{description}</p>
          ) : null}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
