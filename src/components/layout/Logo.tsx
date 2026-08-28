import Image from "next/image";
import Link from "next/link";

/**
 * Official Tanvi IT Solutions mark (public/tanvi-it-logo.png — already
 * transparent, no white plate to strip).
 *
 * The artwork is black-on-transparent, so on dark surfaces we invert it
 * rather than shipping a second file; `brightness-0 invert` renders the
 * black wordmark white and lifts the mustard to a pale gold that stays
 * legible on near-black.
 */
export function Logo({
  tone = "light",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center ${className}`}
      aria-label="Tanvi IT Solutions — home"
    >
      <Image
        src="/tanvi-it-logo.png"
        alt="Tanvi IT Solutions"
        width={167}
        height={43}
        priority
        className={`h-9 w-auto ${tone === "dark" ? "brightness-0 invert" : ""}`}
      />
    </Link>
  );
}
