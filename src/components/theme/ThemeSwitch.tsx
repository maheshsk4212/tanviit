"use client";

import { motion } from "framer-motion";
import { Sparkles, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const OPTIONS = [
  { value: "signature" as const, label: "Signature", icon: Sun },
  { value: "neo" as const, label: "Neo", icon: Sparkles },
];

/** Segmented control that swaps the whole site between the two visual themes. */
export function ThemeSwitch({ className = "" }: { className?: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      role="group"
      aria-label="Site theme"
      className={`relative inline-flex items-center gap-0.5 rounded-full border border-line bg-surface-muted p-1 ${className}`}
    >
      {OPTIONS.map((opt) => {
        const active = theme === opt.value;
        const Icon = opt.icon;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => setTheme(opt.value)}
            aria-pressed={active}
            title={`${opt.label} theme`}
            className={`relative z-10 inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500 ${
              active ? "text-ink-950" : "text-fg-muted hover:text-fg"
            }`}
          >
            {active && (
              <motion.span
                layoutId="theme-switch-pill"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                className="absolute inset-0 -z-10 rounded-full bg-gold-500"
              />
            )}
            <Icon className="h-3.5 w-3.5" aria-hidden />
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
