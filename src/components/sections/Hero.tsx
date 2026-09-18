import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Two-column hero: the message on the left, the connection emblem on the
 * right. The artwork is a glowing emblem on pure black — a globe ringed by
 * gold and blue orbits linking a "companies" badge to a "talent" badge — so
 * it is cropped to the emblem and set on a black section rather than used as
 * a background photo. Its edges then blend into the page with no seam, and
 * nothing is cropped or hidden behind the copy at any width.
 *
 * Below lg the columns stack: copy first, emblem beneath it.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-black">
      {/* Ambient warmth behind the emblem so the right side isn't flat black. */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 translate-x-1/3 rounded-full bg-gold-500/10 blur-[130px]"
        aria-hidden
      />

      <Container className="grid items-center gap-8 pb-12 pt-24 sm:gap-10 sm:pb-20 sm:pt-32 lg:grid-cols-[1.05fr_1fr] lg:gap-14 lg:pb-24 lg:pt-36">
        <Reveal>
          <h1 className="text-balance font-display text-[2.5rem] font-medium leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            <span className="block">Connecting U.S. companies</span>
            <span className="block">
              with the right <span className="text-gold-400">IT&nbsp;talent</span>
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-base font-medium leading-relaxed text-white sm:mt-7 sm:text-lg">
            We connect organizations with skilled IT professionals to accelerate innovation, reduce
            time-to-hire, and deliver results.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
            <Button href="/services" size="lg">
              Explore our solutions
            </Button>
            <Button href="/sewp-vi" size="lg" variant="ghost-dark" arrow={false}>
              View SEWP VI contract
            </Button>
          </div>
        </Reveal>

        {/* Capped on phones so the hero still fits a phone screen. */}
        <Reveal delay={0.1} className="relative mx-auto aspect-[898/616] w-full max-w-[300px] sm:max-w-[430px] lg:max-w-none">
          <Image
            src="/hero-emblem.png"
            alt="A globe ringed by gold and blue orbits, linking a badge of office towers to a badge of people — U.S. companies connected to IT talent"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            // `screen` against the black section: the artwork's black falls
            // away so its rectangular frame is invisible, leaving only the glow.
            className="object-contain mix-blend-screen"
          />
        </Reveal>
      </Container>
    </section>
  );
}
