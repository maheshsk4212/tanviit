import { type ReactNode } from "react";

type Tone = "ink" | "gold" | "slate";

const tones: Record<Tone, string> = {
  ink: "bg-ink-50 text-ink-700",
  gold: "bg-gold-50 text-gold-700",
  slate: "bg-slate-100 text-slate-700",
};

export function Badge({
  children,
  tone = "ink",
  className = "",
}: {
  children: ReactNode;
  tone?: Tone;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
