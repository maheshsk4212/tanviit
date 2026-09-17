import Image from "next/image";
import { stats } from "@/lib/site-content";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

/** Full-bleed cinematic hero with a key-figures strip along its base. */
export function Hero() {
  return (
    <section className="relative isolate flex min-h-[40rem] flex-col justify-end overflow-hidden bg-deep-950 sm:min-h-[44rem] lg:min-h-[50.625rem]">
      <Image
        src="/hero-government-hires.png"
        alt="The U.S. Capitol at dusk, wrapped in a connected data network"
        fill
        preload
        sizes="100vw"
        className="hero-image -z-20 object-cover object-[72%_center]"
      />
      <div className="hero-scrim absolute inset-0 -z-10" aria-hidden />

      <Container className="pb-14 pt-36 sm:pb-16">
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

      {/* Mustard-to-cream band: brand gold on the left, fading to near-white on
          the right. Text is solid dark rather than translucent so the labels
          stay readable where they sit over the saturated gold end. */}
      <div className="bg-gradient-to-r from-gold-500 to-cream-50">
        <Container>
          <dl className="grid grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col-reverse py-5 sm:py-6 ${
                  i % 2 === 1 ? "border-l border-deep-950/10 pl-6" : ""
                } ${i >= 2 ? "border-t border-deep-950/10 lg:border-t-0" : ""} ${
                  i > 0 ? "lg:border-l lg:border-deep-950/10 lg:pl-8" : ""
                }`}
              >
                <dt className="mt-1 text-sm text-deep-900">{stat.label}</dt>
                <dd className="font-display text-2xl font-medium tracking-[-0.02em] text-deep-950 sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </div>
    </section>
  );
}
