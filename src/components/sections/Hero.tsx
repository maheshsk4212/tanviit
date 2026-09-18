import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site-content";

/**
 * Light split hero, in the manner of azure.microsoft.com: the copy sits on the
 * page's own surface on the left, the photograph fills the right half and is
 * feathered back into that surface so there is no hard seam and no scrim over
 * the type. Everything is drawn from the surface/fg tokens, so the band
 * follows the active theme instead of hard-coding white.
 *
 * The header is transparent over this section, so `Nav` switches to its light
 * tone on `/` — keep the two in step if this section's ground ever changes.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-surface">
      {/* Top padding clears the fixed 72px nav and leaves the same visual gap
          above the eyebrow as below the buttons. */}
      <Container className="pb-14 pt-32 sm:pb-16 sm:pt-36 lg:pb-32 lg:pt-40">
        <Reveal>
          <div className="max-w-xl lg:max-w-[36rem]">
            <p className="text-[0.8125rem] font-semibold uppercase tracking-[0.12em] text-fg-subtle">
              {siteConfig.tagline}
            </p>
            {/* Left to wrap on its own — at this size the column takes about
                twenty characters a line, and forcing the break mid-phrase left
                a stub line. `text-balance` evens out what it does wrap to. */}
            <h1 className="mt-6 text-balance font-display text-[2.875rem] font-medium leading-[1.04] tracking-[-0.03em] text-fg sm:text-6xl lg:text-[4.25rem]">
              Connecting U.S. companies with the right{" "}
              <span className="text-gold-600">IT talent</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-fg-muted">
              We connect organizations with skilled IT professionals to accelerate innovation,
              reduce time-to-hire, and deliver results.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Button href="/services" size="lg">
                Explore our solutions
              </Button>
              <Button href="/sewp-vi" size="lg" variant="ghost" arrow={false}>
                View SEWP VI contract
              </Button>
            </div>
          </div>
        </Reveal>
      </Container>

      {/* One image element for both layouts: it stacks under the copy on small
          screens and becomes the absolutely-positioned right half from `lg`,
          where it drops behind the text layer so a long headline can overlap
          the feathered edge without being covered. */}
      <div className="relative h-72 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:-z-10 lg:h-auto lg:w-[54%]">
        <Image
          src="/hero-connecting-talent.jpg"
          alt="An IT team working at a laptop, with golden lines connecting them to the city skyline and the U.S. Capitol at dusk"
          fill
          preload
          sizes="(min-width: 1024px) 54vw, 100vw"
          className="object-cover object-[65%_center]"
        />
        {/* Feather the photo into the surface — downwards when stacked, and
            leftwards once it sits beside the copy. */}
        <div className="hero-feather-y absolute inset-0 lg:hidden" aria-hidden />
        <div className="hero-feather-x absolute inset-0 hidden lg:block" aria-hidden />
      </div>
    </section>
  );
}
