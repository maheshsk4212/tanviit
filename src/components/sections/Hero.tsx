import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Homepage hero over the "U.S. companies ↔ IT talent" banner.
 *
 * The artwork is a 3:1 panorama whose story lives at its edges (skyline on
 * the left, people on the right), so it is shown whole, width-fitted along
 * the bottom of the hero rather than cropped to cover. The space above is
 * filled with the banner's own top-edge navy so the join is invisible, and
 * the copy is centred in the empty dark sky between the two sides.
 */
export function Hero() {
  return (
    // #03101a is sampled from the banner's top edge.
    <section className="relative isolate flex flex-col overflow-hidden bg-[#03101a] lg:min-h-[max(50.625rem,calc(100vw/3+16rem))]">
      <div className="absolute inset-x-0 bottom-0 -z-20 aspect-[2171/724]">
        <Image
          src="/hero-companies-talent.png"
          alt="A city skyline and a group of IT professionals joined by flowing streams of light"
          fill
          preload
          sizes="100vw"
          className="object-cover"
        />
        {/* Feathers the banner's top edge into the fill so there's no seam. */}
        <div
          className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-[#03101a] to-transparent"
          aria-hidden
        />
      </div>

      {/* Below lg the copy stacks above the banner: bottom padding reserves
          the banner's height (100vw / 3) so text never sits on the artwork.
          From lg the copy overlaps the banner's empty upper sky, and the
          hero's min-height grows with viewport width so the light streams
          always clear the buttons. */}
      <Container className="pb-[calc(100vw/3+2.5rem)] pt-36 text-center sm:pt-40 lg:pb-24">
        <Reveal>
          <h1 className="font-display text-[3.25rem] font-medium leading-[0.95] tracking-[-0.03em] text-white sm:text-7xl xl:text-[5.75rem]">
            <span className="block">Connecting U.S. companies</span>
            <span className="block">
              with the right <span className="text-gold-400">IT talent</span>
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-xl text-lg font-medium leading-relaxed text-white">
            We connect organizations with skilled IT professionals to accelerate innovation, reduce
            time-to-hire, and deliver results.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
