import { type ReactNode } from "react";

/** Small outlined pill with a gold dot — sits above section titles and on cards. */
export function Chip({
  children,
  tone = "light",
  className = "",
}: {
  children: ReactNode;
  /** light = on white/cream/gold grounds, dark = on deep grounds, accent = solid mustard. */
  tone?: "light" | "dark" | "accent";
  className?: string;
}) {
  const tones = {
    light: "border-deep-900/15 bg-white/70 text-deep-900",
    dark: "border-white/15 bg-white/5 text-white/90",
    accent: "border-transparent bg-gold-500 text-deep-950",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${tones[tone]} ${className}`}
    >
      {tone === "accent" ? null : (
        <span className="h-1.5 w-1.5 rounded-full bg-gold-500" aria-hidden />
      )}
      {children}
    </span>
  );
}
