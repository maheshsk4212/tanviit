import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type ReactNode } from "react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/Reveal";

type Tone = "white" | "tint" | "dark";

const tones: Record<Tone, string> = {
  white: "bg-white text-fg",
  // tinted pale blue, the way the reference tints its light bands rather
  // than dropping to neutral grey
  tint: "bg-navy-100 text-fg",
  dark: "bg-navy-950 text-white",
};

/**
 * One band of the page. Padding matches the original design (py-20/24/28) so
 * both sites keep the same vertical rhythm.
 */
export function Band({
  tone = "white",
  id,
  motif = false,
  clip = true,
  children,
  className = "",
}: {
  tone?: Tone;
  id?: string;
  /**
   * Horizontal clipping contains the sideways reveal offsets, but it also
   * stops `position: sticky` working for anything inside — Chrome resolves the
   * sticky element against the clip box, which never scrolls. Turn it off for
   * bands with a sticky column, and keep their reveals vertical.
   */
  clip?: boolean;
  /**
   * Brand motif in the top-right. A left-ranged heading leaves that corner
   * empty; this gives the eye something structural to land on without
   * inventing content to fill it. Decorative only, and only from xl up,
   * below which the heading already spans most of the band.
   */
  motif?: boolean;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-24 py-20 sm:py-24 lg:py-28 ${
        clip ? "overflow-x-clip" : ""
      } ${tones[tone]} ${className}`}
    >
      {motif ? <BandMotif onDark={tone === "dark"} /> : null}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

/** Concentric arcs and a dot field, drawn in the brand colours. */
function BandMotif({ onDark }: { onDark: boolean }) {
  const line = onDark ? "rgb(255 255 255 / 0.14)" : "rgb(18 52 98 / 0.14)";
  const dot = onDark ? "rgb(255 122 77 / 0.5)" : "rgb(216 56 10 / 0.35)";
  return (
    <div
      className="pointer-events-none absolute right-0 top-10 hidden xl:block"
      aria-hidden
    >
      {/* Kept inside the heading row's height so it never runs behind the
          content below it. */}
      <svg width="360" height="260" viewBox="0 0 360 260" fill="none">
        <circle cx="288" cy="104" r="86" stroke={line} strokeWidth="1.5" />
        <circle cx="288" cy="104" r="132" stroke={line} strokeWidth="1.5" />
        <circle cx="288" cy="104" r="178" stroke={line} strokeWidth="1.5" />
        <g fill={dot}>
          {Array.from({ length: 4 }).flatMap((_, row) =>
            Array.from({ length: 4 }).map((__, col) => (
              <circle key={`${row}-${col}`} cx={150 + col * 20} cy={186 + row * 20} r="2" />
            )),
          )}
        </g>
      </svg>
    </div>
  );
}

/**
 * Heading set at the original design's scale: display sizes at weight 500 with
 * tight tracking, body at 16/18px, copy in true black rather than grey.
 */
export function BandHeading({
  eyebrow,
  title,
  lead,
  action,
  onDark = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  /** Optional control, placed under the supporting text. */
  action?: ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  const heading = (
    <>
      {eyebrow ? (
        <span
          className={`inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] ${
            onDark
              ? "border-white/20 bg-white/5 text-flame-400"
              : "border-navy-200 bg-navy-50 text-navy-700"
          }`}
        >
          {eyebrow}
        </span>
      ) : null}
      <h2
        className={`${eyebrow ? "mt-5" : ""} text-balance font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] sm:text-5xl lg:text-[3.5rem] ${
          onDark ? "text-white" : "text-fg"
        }`}
      >
        {title}
      </h2>
    </>
  );

  const body =
    lead || action ? (
      <div className="mt-6">
        {lead ? (
          <p
            className={`max-w-3xl text-base leading-relaxed sm:text-lg ${
              onDark ? "text-white/80" : "text-fg-muted"
            }`}
          >
            {lead}
          </p>
        ) : null}
        {action ? <div className="mt-8">{action}</div> : null}
      </div>
    ) : null;

  // Stacked and ranged left: eyebrow, headline, supporting line, action.
  // The measure is wide enough that the headline carries across most of the
  // band rather than stopping at half width, which is what left the right
  // side looking empty — but still inside a readable line length.
  return (
    <div className={`max-w-4xl ${className}`}>
      {heading}
      {body}
    </div>
  );
}

/**
 * Page hero. The homepage passes `video` for the Capitol time-lapse; interior
 * pages use the still. The headline's second line carries the accent, the way
 * the reference colours the second half of its own hero line.
 */
export function PageHero({
  eyebrow,
  title,
  accent,
  lead,
  children,
  tall = false,
  video = false,
}: {
  eyebrow?: string;
  title: string;
  /** Second line, set in the accent. */
  accent?: string;
  lead?: string;
  children?: ReactNode;
  tall?: boolean;
  video?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950">
      {video ? (
        <>
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
            className="absolute inset-0 -z-20 h-full w-full animate-[hero-drift_30s_ease-in-out_infinite_alternate] object-cover motion-reduce:hidden motion-reduce:animate-none"
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

      {/* Weighted left, where the type sits; the right stays open so the
          building and the sky still read. */}
      <div
        className="absolute inset-0 -z-10 [background-image:linear-gradient(118deg,rgb(6_26_46/0.95)_0%,rgb(6_26_46/0.9)_30%,rgb(6_26_46/0.6)_58%,rgb(6_26_46/0.3)_80%,rgb(6_26_46/0.16)_100%)]"
        aria-hidden
      />

      <div
        className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${
          tall ? "py-24 sm:py-28 lg:py-36" : "py-16 sm:py-20 lg:py-24"
        }`}
      >
        <Reveal className="max-w-4xl [text-shadow:0_1px_14px_rgb(6_26_46/0.45)]">
          {eyebrow ? (
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-flame-400">
              {eyebrow}
            </span>
          ) : null}
          <h1
            className={`mt-6 text-balance font-display font-bold leading-[1.02] tracking-[-0.03em] text-white ${
              tall
                ? "text-5xl sm:text-6xl lg:text-[4.5rem]"
                : "text-4xl sm:text-5xl lg:text-[3.5rem]"
            }`}
          >
            {title}
            {accent ? (
              <>
                {" "}
                <span className="text-flame-400">{accent}</span>
              </>
            ) : null}
          </h1>
          {lead ? (
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-white sm:text-lg">{lead}</p>
          ) : null}
          {children}
        </Reveal>
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
      className={`group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] ${
        onDark ? "text-flame-400 hover:text-flame-300" : "text-navy-700 hover:text-navy-800"
      }`}
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      />
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
    solid: "bg-flame-600 text-white hover:bg-flame-700",
    outline: "border border-navy-300 text-navy-800 hover:bg-navy-50",
    "outline-dark": "border border-white/35 text-white hover:bg-white/10",
  } as const;
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-12px_rgb(250_70_18/0.5)] ${styles[variant]}`}
    >
      {children}
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden
      />
    </Link>
  );
}

export { Reveal, RevealGroup, RevealItem };
