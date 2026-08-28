import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 mesh-dark">
      <div className="absolute inset-0 grid-overlay" aria-hidden />
      <div
        className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-[100px]"
        aria-hidden
      />
      <Container className="relative py-16 sm:py-20">
        <Reveal>
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-400">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-3xl font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-lg text-slate-300">{description}</p>
          ) : null}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
