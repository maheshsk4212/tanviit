import { type ReactNode } from "react";

type Tone = "navy" | "orange" | "slate";

const tones: Record<Tone, string> = {
  navy: "bg-navy-50 text-navy-700",
  orange: "bg-orange-50 text-orange-700",
  slate: "bg-slate-100 text-slate-700",
};

export function Badge({
  children,
  tone = "navy",
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
