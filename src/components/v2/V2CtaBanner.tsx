import Image from "next/image";
import { type ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";

/**
 * The closing banner, taken from the reference's own: a photograph under a
 * colour wash, rounded, and inset from the viewport edges rather than running
 * full bleed. Theirs sits at 16px radius with a 16px margin all round, which
 * is what makes it read as a card the page is resting on rather than another
 * stripe of background.
 *
 * The wash is a flat fill over the image — the picture is there for texture
 * and depth, not to be looked at, so it can be driven well down without
 * losing anything.
 */
export function V2CtaBanner({
  eyebrow,
  title,
  lead,
  image,
  imageAlt,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  image: string;
  imageAlt: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-white px-3 pb-3 pt-0 sm:px-4 sm:pb-4">
      <Reveal>
        <div className="relative isolate overflow-hidden rounded-3xl bg-navy-950">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
          {/* Deep enough that nothing in the frame can threaten the type, with
              a diagonal lift on the right so the image still registers. */}
          <div
            className="absolute inset-0 [background-image:linear-gradient(104deg,rgb(5_12_40/0.95)_0%,rgb(5_12_40/0.9)_46%,rgb(5_12_40/0.74)_100%)]"
            aria-hidden
          />
          {/* A trace of flame in the far corner, the same device the dark
              bands use, so the closer belongs to the same system. */}
          <div
            className="absolute inset-0 [background-image:radial-gradient(45%_60%_at_92%_100%,rgb(216_56_10/0.3)_0%,transparent_70%)]"
            aria-hidden
          />

          <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2.5 rounded-full bg-flame-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {eyebrow}
              </span>
              <h2 className="mt-7 text-balance font-display text-3xl font-semibold leading-[1.06] tracking-[-0.03em] text-white sm:text-4xl lg:text-[3rem]">
                {title}
              </h2>
              {lead ? (
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-white sm:text-lg">
                  {lead}
                </p>
              ) : null}
              {children}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
