"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { type ReactNode } from "react";

type Direction = "up" | "left" | "right";

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 28 },
  left: { x: -40 },
  right: { x: 40 },
};

function makeVariants(direction: Direction, reduced: boolean): Variants {
  return {
    // Under prefers-reduced-motion, fade only — no travel.
    hidden: { opacity: 0, ...(reduced ? {} : offsets[direction]) },
    visible: (delay: number) => ({
      opacity: 1,
      x: 0,
      y: 0,
      transition: reduced
        ? { duration: 0.01, delay: 0 }
        : { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] },
    }),
  };
}

export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
  direction = "up",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span";
  direction?: Direction;
}) {
  const Component = motion[as];
  const reduced = useReducedMotion() ?? false;
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
      variants={makeVariants(direction, reduced)}
    >
      {children}
    </Component>
  );
}

export function RevealGroup({
  children,
  className = "",
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduced = useReducedMotion() ?? false;
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduced ? 0 : stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion() ?? false;
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, ...(reduced ? {} : { y: 24 }) },
        visible: {
          opacity: 1,
          y: 0,
          transition: reduced
            ? { duration: 0.01 }
            : { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
