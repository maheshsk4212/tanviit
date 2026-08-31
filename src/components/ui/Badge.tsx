import { type ReactNode } from "react";

type Tone = "ink" | "gold" | "slate";

const tones: Record<Tone, string> = {
  ink: "bg-surface-sunken text-fg",
  gold: "bg-gold-50 text-gold-700",
  slate: "bg-surface-muted text-fg-muted",
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
