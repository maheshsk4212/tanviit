import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

type Tone = "light" | "dark" | "orange";

const tones: Record<Tone, string> = {
  light:
    "border-navy-200 text-navy-900 hover:border-orange-400 hover:bg-orange-50 hover:text-orange-600",
  dark: "border-white/25 text-white hover:border-orange-300 hover:bg-white/10",
  orange: "border-orange-300/50 text-orange-300 hover:border-orange-300 hover:bg-orange-500/10",
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
      className={`group/arrow inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 ${tones[tone]} ${className}`}
    >
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5"
        aria-hidden
      />
    </Link>
  );
}
