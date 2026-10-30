import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";

type Tone = "white" | "tint" | "dark";

const tones: Record<Tone, string> = {
  white: "bg-white text-fg",
  tint: "bg-navy-50 text-fg",
  dark: "bg-navy-950 text-white",
};

/** One band of the page: full-width colour, centred container, equal padding. */
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
          className={`flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] ${
            onDark ? "text-copper-400" : "text-copper-700"
          }`}
        >
          <span className={`h-px w-8 ${onDark ? "bg-copper-400" : "bg-navy-500"}`} aria-hidden />
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-4 font-display text-3xl font-semibold leading-[1.15] tracking-[-0.02em] sm:text-4xl ${
          onDark ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={`mt-5 text-[17px] leading-[1.7] sm:text-lg ${
            onDark ? "text-navy-100" : "text-fg"
          }`}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}

/**
 * Page hero. Interior pages use the Capitol-at-dusk still; the homepage passes
 * `video`, which plays a two-second city loop over the same scrim. The loop is
 * a ping-pong — it runs forward then backward — so it never cuts.
 */
export function PageHero({
  eyebrow,
  title,
  lead,
  children,
  tall = false,
  video = false,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  children?: ReactNode;
  tall?: boolean;
  video?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      {video ? (
        <>
          {/* Shown until the first frame decodes, and wherever autoplay is
              refused: the first frame of the loop itself. */}
          <Image
            src="/hero-capitol-poster.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="-z-30 object-cover"
          />
          <video
            src="/hero-capitol-loop.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden
            tabIndex={-1}
            className="absolute inset-0 -z-20 h-full w-full object-cover motion-reduce:hidden"
          />
        </>
      ) : (
        <Image
          src="/hero-government-civic.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-right"
        />
      )}

      {/* Readable from the left, where both backgrounds are near-empty. */}
      <div
        className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgb(10_24_48/0.96)_0%,rgb(10_24_48/0.88)_45%,rgb(10_24_48/0.62)_72%,rgb(10_24_48/0.4)_100%)]"
        aria-hidden
      />

      <div
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${
          tall ? "py-24 sm:py-28 lg:py-36" : "py-16 sm:py-20 lg:py-24"
        }`}
      >
        <div className="max-w-3xl [text-shadow:0_1px_14px_rgb(10_24_48/0.45)]">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-copper-400">
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
      className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.1em] underline-offset-4 hover:underline ${
        onDark ? "text-copper-400 hover:text-copper-300" : "text-copper-700 hover:text-copper-800"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4" aria-hidden />
    </Link>
  );
}

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
    solid: "bg-copper-600 text-white hover:bg-copper-700",
    outline: "border border-navy-200 text-fg hover:bg-navy-50",
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
