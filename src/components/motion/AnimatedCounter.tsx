"use client";

import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(value.replace(/[0-9]/g, "0"));

  const numeric = parseFloat(value.replace(/[^0-9.]/g, ""));
  // Strip commas too, otherwise the thousands separator lands in the suffix
  // and "10,000+" renders as "10000,+". We re-add separators on the way out —
  // but only where the value had them, so the year 2008 does not become 2,008.
  const suffix = value.replace(/[0-9.,]/g, "");
  const grouped = value.includes(",");
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => {
    const whole = Math.round(latest);
    return `${grouped ? whole.toLocaleString("en-US") : whole}${suffix}`;
  });

  useEffect(() => {
    if (!inView || Number.isNaN(numeric)) return;
    const controls = animate(count, numeric, {
      duration: 1.4,
      ease: [0.21, 0.47, 0.32, 0.98],
    });
    const unsubscribe = rounded.on("change", setDisplay);
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, numeric, count, rounded]);

  if (Number.isNaN(numeric)) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>{display}</span>;
}
