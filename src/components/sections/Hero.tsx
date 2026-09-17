import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/** Full-bleed cinematic hero with a key-figures strip along its base. */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[40rem] flex-col justify-center overflow-hidden bg-deep-950 sm:min-h-[44rem] lg:min-h-[50.625rem]">
      <Image
        src="/hero-government-hires.png"
        alt="The U.S. Capitol at dusk, wrapped in a connected data network"
        fill
        preload
        sizes="100vw"
        className="hero-image -z-20 object-cover object-[72%_center]"
      />
      <div className="hero-scrim absolute inset-0 -z-10" aria-hidden />

      {/* Centred in the space below the fixed 72px nav: top padding is the
          bottom padding plus the nav height, so the gaps above the headline
          and below the buttons come out even. */}
      <Container className="pb-20 pt-38 sm:pb-24 sm:pt-42">
        <Reveal>
          <h1 className="font-display text-[3.25rem] font-medium leading-[0.95] tracking-[-0.03em] text-white sm:text-7xl lg:text-[5.75rem]">
            <span className="block">Connecting U.S. companies</span>
            <span className="block">
              with the right <span className="text-gold-400">IT talent</span>
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-lg font-medium leading-relaxed text-white">
            We connect organizations with skilled IT professionals to accelerate innovation, reduce
            time-to-hire, and deliver results.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="/services" size="lg">
              Explore our solutions
            </Button>
            <Button href="/sewp-vi" size="lg" variant="ghost-dark" arrow={false}>
              View SEWP VI contract
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
