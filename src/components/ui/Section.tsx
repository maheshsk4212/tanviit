import { type ReactNode } from "react";
import { Container } from "./Container";
import { Chip } from "./Chip";
import { Reveal } from "@/components/motion/Reveal";

export type SectionTone = "light" | "muted" | "dark";

const toneClasses: Record<SectionTone, string> = {
  light: "bg-surface",
  muted: "bg-cream-100",
  dark: "bg-deep-900 text-white",
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
  return (
    // overflow-x-clip contains horizontal reveal offsets (Reveal direction
    // left/right) without creating a scroll container, so `position: sticky`
    // children keep working.
    <section
      id={id}
      className={`relative scroll-mt-20 overflow-x-clip py-20 sm:py-24 lg:py-28 ${toneClasses[tone]} ${className}`}
    >
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
  action,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  /** split = title on the left, description (and action) on the right. */
  align?: "left" | "center" | "split";
  tone?: SectionTone;
  /** Optional control (usually a Button) placed beside the heading. */
  action?: ReactNode;
  className?: string;
}) {
  const dark = tone === "dark";
  const centered = align === "center";

  const chip = eyebrow ? <Chip tone={dark ? "dark" : "light"}>{eyebrow}</Chip> : null;
  const heading = (
    <h2
      className={`${eyebrow ? "mt-5" : ""} text-balance font-display text-4xl font-medium leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem] ${
        dark ? "text-white" : "text-fg"
      }`}
    >
      {title}
    </h2>
  );
  const body = (extra: string) =>
    description ? (
      <p
        className={`max-w-2xl text-base leading-relaxed sm:text-lg ${extra} ${
          dark ? "text-white/75" : "text-fg-muted"
        }`}
      >
        {description}
      </p>
    ) : null;

  if (align === "split") {
    return (
      <Reveal className={`grid gap-6 md:grid-cols-2 md:items-end md:gap-16 ${className}`}>
        <div>
          {chip}
          {heading}
        </div>
        {description || action ? (
          <div className="flex flex-col items-start gap-6 md:pb-1.5">
            {body("")}
            {action}
          </div>
        ) : null}
      </Reveal>
    );
  }

  return (
    <Reveal
      className={`${
        action ? "flex flex-col gap-8 md:flex-row md:items-end md:justify-between" : ""
      } ${centered ? "mx-auto max-w-3xl text-center" : ""} ${className}`}
    >
      <div className={centered ? "" : "max-w-3xl"}>
        {chip}
        {heading}
        {body(`mt-5 ${centered ? "mx-auto" : ""}`)}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
