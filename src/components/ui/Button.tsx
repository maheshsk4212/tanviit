import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "ghost" | "ghost-dark";
type Size = "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full font-semibold transition-all duration-300 ease-out hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange-500 text-white shadow-[0_1px_2px_rgba(0,0,0,0.06),0_8px_20px_-8px_rgba(242,113,15,0.55)] hover:bg-orange-600 hover:shadow-[0_1px_2px_rgba(0,0,0,0.06),0_14px_28px_-10px_rgba(242,113,15,0.65)]",
  ghost: "bg-transparent text-navy-900 border border-navy-200 hover:bg-navy-50 hover:border-navy-300",
  "ghost-dark": "bg-transparent text-white border border-white/25 hover:bg-white/10 hover:border-white/40",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-6 py-3.5 text-base",
};

const shine =
  "pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

interface ButtonAsButton
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  const showShine = variant === "primary";

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {showShine ? <span className={shine} aria-hidden /> : null}
        <span className="relative inline-flex items-center gap-2">{children}</span>
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {showShine ? <span className={shine} aria-hidden /> : null}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
