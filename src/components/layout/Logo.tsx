import Link from "next/link";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`} aria-label="Tanvi IT home">
      <span className="flex h-9 w-9 items-center justify-center rounded-control bg-navy-900 font-display text-lg font-bold text-orange-400">
        T
      </span>
      <span className="font-display text-xl font-bold tracking-tight text-navy-900">
        Tanvi<span className="text-orange-500">IT</span>
      </span>
    </Link>
  );
}
