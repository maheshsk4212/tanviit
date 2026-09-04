import { type ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "@/components/motion/Reveal";

export type SectionTone = "light" | "muted" | "dark";

const toneClasses: Record<SectionTone, string> = {
  light: "bg-surface",
  muted: "bg-surface-muted",
  dark: "mesh-dark",
};

export function Section({
  children,
  tone = "light",
  id,
  className = "",
  containerClassName = "",
}: {
  children: ReactNode;
  tone?: SectionTone;
  id?: string;
  className?: string;
  containerClassName?: string;
}) {
  const dark = tone === "dark";
  return (
    // overflow-x-clip contains horizontal reveal offsets (Reveal direction
    // left/right) without creating a scroll container, so `position: sticky`
    // children keep working.
    <section
      id={id}
      className={`relative scroll-mt-20 overflow-x-clip py-20 sm:py-24 lg:py-28 ${toneClasses[tone]} ${className}`}
    >
      {dark ? (
        <>
          <div className="absolute inset-0 grid-overlay" aria-hidden />
          <div className="absolute inset-0 noise-overlay opacity-30" aria-hidden />
        </>
      ) : null}
      <Container className={`relative ${containerClassName}`}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: SectionTone;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
    >
      {eyebrow ? (
        <p
          className={`mb-4 text-xs font-semibold uppercase tracking-[0.2em] ${
            dark ? "text-gold-400" : "text-gold-600"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`font-display text-4xl font-semibold tracking-tight sm:text-5xl ${
          dark ? "text-white" : "text-fg"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-lg ${dark ? "text-slate-200" : "text-fg-muted"}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
