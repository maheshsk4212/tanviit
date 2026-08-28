import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function CTASection({
  title,
  description,
  primaryLabel = "Talk to us",
  primaryHref = "/contact",
  secondaryLabel,
  secondaryHref,
}: {
  title: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden mesh-dark">
      <div className="absolute inset-0 grid-overlay" aria-hidden />
      <div
        className="absolute left-1/2 top-1/2 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-[100px] animate-pulse-glow"
        aria-hidden
      />
      <Container className="relative flex flex-col items-center gap-6 py-16 text-center sm:py-20">
        <Reveal className="flex flex-col items-center gap-6">
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-xl text-lg text-slate-300">{description}</p>
          ) : null}
          <div className="flex flex-wrap justify-center gap-4">
            <Button href={primaryHref} size="lg">
              {primaryLabel}
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} size="lg" variant="ghost-dark">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
