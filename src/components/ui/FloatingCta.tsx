"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

/** Routes where a "Talk to us" CTA would just point at the current page. */
const HIDDEN_ON = ["/contact"];

export function FloatingCta({
  label = "Talk to us",
  href = "/contact",
}: {
  label?: string;
  href?: string;
}) {
  const pathname = usePathname();
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolledPastHero(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Also hide on the apply flow, where the page's own submit is the only
  // action that should compete for attention.
  const suppressed =
    HIDDEN_ON.includes(pathname) || pathname.endsWith("/apply");
  const visible = scrolledPastHero && !suppressed;

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-40 sm:bottom-8 sm:right-8"
        >
          <Button href={href} size="lg" className="shadow-elevated-lg">
            <MessageCircle className="h-4 w-4" aria-hidden />
            {label}
          </Button>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
