import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Tone = "light" | "dark" | "gold";

const tones: Record<Tone, string> = {
  light:
    "border-ink-200 text-ink-900 hover:border-gold-400 hover:bg-gold-50 hover:text-gold-600",
  dark: "border-white/25 text-white hover:border-gold-300 hover:bg-white/10",
  gold: "border-gold-300/50 text-gold-300 hover:border-gold-300 hover:bg-gold-500/10",
};

export function CircleArrowLink({
  href,
  label,
  tone = "light",
  className = "",
}: {
  href: string;
  label: string;
  tone?: Tone;
  className?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className={`group/arrow inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 focus-visible:ring-offset-2 ${tones[tone]} ${className}`}
    >
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5"
        aria-hidden
      />
    </Link>
  );
}
