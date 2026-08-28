import { type ReactNode } from "react";

type Tone = "navy" | "orange" | "navy-deep";

const tones: Record<Tone, string> = {
  navy: "bg-navy-800",
  "navy-deep": "bg-navy-950",
  orange: "bg-orange-500",
};

/**
 * A rounded color panel with a decorative "bite" cut out of the top-left
 * corner — an SVG-free approximation using an overlapping circle in the
 * surrounding background color.
 */
export function NotchPanel({
  children,
  tone = "navy",
  notchBg = "var(--color-background)",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  notchBg?: string;
  className?: string;
}) {
  return (
    <div className={`relative rounded-[2rem] sm:rounded-[2.75rem] ${tones[tone]} ${className}`}>
      <div
        className="absolute left-0 top-0 h-9 w-9 rounded-br-[100%] sm:h-12 sm:w-12"
        style={{ background: notchBg }}
        aria-hidden
      />
      {children}
    </div>
  );
}
