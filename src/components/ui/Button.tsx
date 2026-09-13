import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { type ButtonHTMLAttributes, type ReactNode } from "react";

type Variant = "primary" | "ghost" | "ghost-dark";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-3 rounded-full font-medium transition-colors duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, { button: string; bubble: string }> = {
  primary: {
    button: "bg-gold-500 text-deep-950 hover:bg-gold-400",
    bubble: "bg-deep-950 text-white",
  },
  ghost: {
    button: "border border-deep-900/20 text-deep-900 hover:border-deep-900/50 hover:bg-deep-900/5",
    bubble: "bg-deep-900 text-white",
  },
  "ghost-dark": {
    button: "border border-white/25 text-white hover:border-gold-400/70 hover:bg-white/5",
    bubble: "bg-gold-500 text-deep-950",
  },
};

/* Buttons with an arrow trade right padding for the round "bubble". */
const sizes: Record<Size, { plain: string; withArrow: string; bubble: string }> = {
  md: { plain: "px-5 py-2.5 text-sm", withArrow: "py-1.5 pl-5 pr-1.5 text-sm", bubble: "h-7 w-7" },
  lg: { plain: "px-7 py-3.5 text-base", withArrow: "py-2 pl-7 pr-2 text-base", bubble: "h-9 w-9" },
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  /** Trailing arrow bubble. Defaults on for primary buttons. */
  arrow?: boolean;
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
  arrow = variant === "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const style = variants[variant];
  const sizing = sizes[size];
  const classes = `${base} ${style.button} ${arrow ? sizing.withArrow : sizing.plain} ${className}`;

  const content = (
    <>
      <span className="inline-flex items-center gap-2">{children}</span>
      {arrow ? (
        <span
          className={`flex shrink-0 items-center justify-center rounded-full ${style.bubble} ${sizing.bubble}`}
          aria-hidden
        >
          {/* ↗ at rest, swings to → on hover */}
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
        </span>
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel, onClick } = props;
    return (
      <Link href={href} target={target} rel={rel} onClick={onClick} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
