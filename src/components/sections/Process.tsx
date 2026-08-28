"use client";

import { motion } from "framer-motion";
import { processSteps } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function Process({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";
  return (
    <div className="relative">
      <div
        className={`absolute left-0 right-0 top-6 hidden h-px sm:block ${
          dark ? "bg-white/15" : "bg-slate-200"
        }`}
        aria-hidden
      >
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-orange-500 to-navy-400"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        />
      </div>

      <RevealGroup className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
        {processSteps.map((step, index) => (
          <RevealItem key={step.title} className="relative">
            <span
              className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-orange-500 font-display text-lg font-bold shadow-sm ${
                dark ? "bg-navy-950 text-orange-400" : "bg-white text-orange-600"
              }`}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3
              className={`mt-4 font-display text-lg font-semibold ${
                dark ? "text-white" : "text-navy-900"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mt-1.5 text-sm leading-relaxed ${
                dark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {step.description}
            </p>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
