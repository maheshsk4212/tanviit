import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

type Tone = "white" | "tint" | "dark";

const tones: Record<Tone, string> = {
  white: "bg-white text-fg",
  tint: "bg-brass-50 text-fg",
  dark: "bg-ink-950 text-white",
};

/**
 * One band of the page. Every band is the same shape — full-width colour,
 * centred container, equal padding — because the predictability is the point.
 */
export function Band({
  tone = "white",
  id,
  children,
  className = "",
}: {
  tone?: Tone;
  id?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function BandHeading({
  eyebrow,
  title,
  lead,
  onDark = false,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p
          className={`text-sm font-semibold uppercase tracking-[0.14em] ${
            onDark ? "text-brass-400" : "text-brass-700"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-4xl ${
          onDark ? "text-white" : "text-fg"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-[17px] leading-[1.7] sm:text-lg ${
            onDark ? "text-ink-100" : "text-fg"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Page hero: the Capitol-at-dusk photograph under a scrim, with the headline
 * over it. Every page below the homepage uses the same one at a shorter
 * height, so the site reads as one set.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  tall = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  tall?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <Image
        src="/hero-government-civic.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-20 object-cover object-right"
      />
      {/* Readable from the left, where the photograph is already near-empty. */}
      <div
        className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgb(16_14_9/0.94)_0%,rgb(16_14_9/0.82)_42%,rgb(16_14_9/0.55)_70%,rgb(16_14_9/0.35)_100%)]"
        aria-hidden
      />
      <div
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${
          tall ? "py-24 sm:py-28 lg:py-36" : "py-16 sm:py-20 lg:py-24"
        }`}
      >
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-brass-400">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className={`mt-4 font-display font-semibold leading-[1.08] tracking-[-0.025em] text-white ${
              tall
                ? "text-[2.5rem] sm:text-5xl lg:text-[3.5rem]"
                : "text-[2rem] sm:text-4xl lg:text-5xl"
            }`}
          >
            {title}
          </h1>
          {lead ? (
            <p className="mt-6 max-w-2xl text-[17px] leading-[1.7] text-white sm:text-lg">{lead}</p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}

/** The one link style used for "learn more" throughout this design. */
export function MoreLink({
  href,
  children,
  onDark = false,
}: {
  href: string;
  children: ReactNode;
  onDark?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] ${
        onDark ? "text-brass-400 hover:text-brass-300" : "text-brass-700 hover:text-brass-800"
      } hover:underline underline-offset-4`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

/** Filled and outline buttons, used on heroes and closing calls to action. */
export function V2Button({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "outline-dark";
}) {
  const styles = {
    solid: "bg-brass-700 text-white hover:bg-brass-800",
    outline: "border border-brass-300 text-brass-800 hover:bg-brass-50",
    "outline-dark": "border border-white/35 text-white hover:bg-white/10",
  } as const;
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 rounded-md px-6 py-3.5 text-base font-semibold ${styles[variant]}`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}
