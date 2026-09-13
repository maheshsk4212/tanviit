import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const CTA_IMAGE =
  "https://images.unsplash.com/photo-1611323340350-bdcc0e6cfae5?w=2000&q=80&auto=format&fit=crop";

/**
 * Inset, rounded closing banner — city at night under a low gold glow.
 * Message on the left, actions on the right where the glow is brightest.
 */
export function CTASection({
  title,
  description,
  overline,
  primaryLabel = "Talk to us",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description?: string;
  /** Signature "equation" line, e.g. TANVI IT + YOUR MISSION = DELIVERED. */
  overline?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="bg-surface p-3 sm:p-4">
      <div className="relative isolate overflow-hidden rounded-2xl bg-deep-950">
        <Image
          src={CTA_IMAGE}
          alt=""
          fill
          sizes="100vw"
          className="-z-20 object-cover opacity-40 [filter:saturate(0.35)]"
        />
        <div className="cta-glow absolute inset-0 -z-10" aria-hidden />
        <Container className="grid gap-10 py-20 sm:py-24 lg:grid-cols-12 lg:items-end lg:py-28">
          <Reveal className="lg:col-span-8">
            {overline ? (
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gold-300">
                {overline}
              </p>
            ) : null}
            <h2
              className={`${overline ? "mt-5" : ""} max-w-3xl text-balance font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl`}
            >
              {title}
            </h2>
            {description ? (
              <p className="mt-5 max-w-xl text-lg text-white/80">{description}</p>
            ) : null}
          </Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} size="lg" variant="ghost-dark" arrow={false}>
                {secondaryLabel}
              </Button>
            ) : null}
          </Reveal>
        </Container>
      </div>
    </section>
  );
}
