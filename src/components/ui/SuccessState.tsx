"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { type ReactNode } from "react";

export function SuccessState({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-start gap-4 rounded-card border border-emerald-200 bg-emerald-50/50 p-8"
    >
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 340, damping: 16, delay: 0.1 }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_0_0_6px_rgba(16,185,129,0.15)]"
      >
        <Check className="h-6 w-6" aria-hidden />
      </motion.span>
      <div>
        <h2 className="font-display text-xl font-semibold text-ink-900">{title}</h2>
        <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{children}</p>
      </div>
    </motion.div>
  );
}
