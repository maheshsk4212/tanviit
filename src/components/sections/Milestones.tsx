"use client";

import { motion } from "framer-motion";
import { milestones } from "@/lib/site-content";
import { RevealGroup, RevealItem } from "@/components/motion/Reveal";

export function Milestones() {
  return (
    <div className="relative">
      <div className="absolute left-4 top-2 bottom-2 w-px bg-slate-200" aria-hidden>
        <motion.div
          className="w-full origin-top bg-gradient-to-b from-orange-500 to-navy-400"
          style={{ height: "100%" }}
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        />
      </div>

      <RevealGroup className="space-y-10" stagger={0.12}>
        {milestones.map((milestone) => (
          <RevealItem key={milestone.year}>
            <div className="relative flex gap-6 pl-12">
              <span className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border-2 border-orange-500 bg-white text-[10px] font-bold text-orange-600 shadow-sm">
                &#9679;
              </span>
              <div>
                <p className="font-display text-xl font-bold text-orange-600">{milestone.year}</p>
                <h3 className="mt-1 font-display text-lg font-semibold text-navy-900">
                  {milestone.title}
                </h3>
                <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-slate-600">
                  {milestone.description}
                </p>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </div>
  );
}
