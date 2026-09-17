import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/** Full-bleed cinematic hero with a key-figures strip along its base. */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[40rem] flex-col justify-center overflow-hidden bg-deep-950 sm:min-h-[44rem] lg:min-h-[50.625rem]">
      {/* The image layer is 125% of the hero's height, anchored to the top
          and clipped at the bottom. That lowers the team in the frame so the
          headline sits in the sky above their faces rather than across them;
          only the table and floor are trimmed. The 80% horizontal anchor
          keeps the team in view as narrower screens crop the sides. No
          darkening filter: the scrim alone keeps the copy legible, and the
          golden connection lines are the point of the image. */}
      <div className="absolute inset-x-0 top-0 -z-20 h-[125%]">
        <Image
          src="/hero-connecting-talent.jpg"
          alt="An IT team working at a laptop, with golden lines connecting them to the city skyline and the U.S. Capitol at dusk"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[80%_top]"
        />
      </div>
      <div className="hero-scrim absolute inset-0 -z-10" aria-hidden />

      {/* Centred in the space below the fixed 72px nav: top padding is the
          bottom padding plus the nav height, so the gaps above the headline
          and below the buttons come out even. */}
      <Container className="pb-20 pt-38 sm:pb-24 sm:pt-42">
        <Reveal>
          <h1 className="font-display text-[3.25rem] font-medium leading-[0.95] tracking-[-0.03em] text-white sm:text-7xl xl:text-[5.75rem]">
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
