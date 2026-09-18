"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

/**
 * Full-frame brand film: footage fills the band edge to edge (`object-cover`),
 * silent, with the message set over it.
 *
 * Only one stretch of the ten-second film can carry type over it. The rest is
 * spoken for: burned-in wording on the opening globe (0–1s), "Let's build
 * what's next, together." over the team shot (3.2–4.9s — the very line the
 * closing CTA already says), a mock Tanvi IT site on a monitor whose invented
 * interface copy does not match this one (5.6–6.5s), and the logo end card
 * (8.8–10s). What is left is 6.62–8.78: solar field, office floor, lobby,
 * handshake.
 *
 * That window ships as its own file rather than being seeked to inside the
 * full film. Playing the film from 6.62s meant pulling two thirds of 5.4 MB
 * before a single frame could appear — 15–20 seconds on the live site. The
 * clip is video only (this band is always muted), re-encoded at 2.3 Mbps with
 * the moov atom first: 635 KB, and it loops natively.
 *
 * Loading still waits until the band is near the viewport, so visitors who
 * never scroll this far never fetch it; the poster frame — the first frame of
 * the clip — holds the band until the video has decoded.
 */
const PLAYBACK_RATE = 0.6;

const lines = ["Technology moves the mission.", "People move the technology."];

const maskVariants = (reduced: boolean): Variants => ({
  hidden: reduced ? { opacity: 0 } : { y: "115%" },
  visible: {
    y: 0,
    opacity: 1,
    transition: reduced
      ? { duration: 0.01 }
      : { duration: 0.95, ease: [0.16, 1, 0.3, 1] as const },
  },
});

const fadeVariants = (reduced: boolean): Variants => ({
  hidden: { opacity: 0, ...(reduced ? {} : { y: 18 }) },
  visible: {
    opacity: 1,
    y: 0,
    transition: reduced
      ? { duration: 0.01 }
      : { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
});

export function PromoVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const onScreen = useRef(false);
  const reduced = useReducedMotion() ?? false;

  const play = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = PLAYBACK_RATE;
    // Rejected play() is fine: the poster frame stays, and the band still reads.
    void video.play().catch(() => {});
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Reduced motion: the poster frame, and nothing that moves.
    if (reduced) return;

    // `preload="none"` means nothing is fetched until play() is called, so the
    // observer is what pulls the file down — and only for visitors who arrive.
    // It fires a screen ahead of the band so the clip has landed by the time
    // the band is actually in view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        onScreen.current = entry.isIntersecting;
        if (entry.isIntersecting) play();
        else video.pause();
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(section);

    // Browsers pause muted background video in a hidden tab and do not resume
    // it on their own, so the band would sit frozen when the visitor comes back.
    const onVisible = () => {
      if (document.visibilityState === "visible" && onScreen.current) play();
    };
    document.addEventListener("visibilitychange", onVisible);

    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisible);
    };
  }, [play, reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate flex min-h-[34rem] items-center overflow-hidden bg-deep-950 py-24 sm:py-28 lg:h-[82svh] lg:max-h-[46rem] lg:py-32"
      aria-labelledby="promo-heading"
    >
      {/* First frame of the loop, held until the video itself has decoded — and
          the whole of the band for anyone who has asked for reduced motion. */}
      <Image
        src="/promo-poster.jpg"
        alt=""
        fill
        sizes="100vw"
        className="-z-30 object-cover"
      />

      <video
        ref={videoRef}
        src="/tanvi-promo-loop.mp4"
        muted
        loop
        playsInline
        preload="none"
        aria-hidden
        tabIndex={-1}
        // Until the first frame decodes the element paints nothing, so the
        // poster behind it carries the band — and it is this same frame.
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />

      {/* Legibility scrim: an even wash, weighted at top and bottom, plus a
          soft pool behind the copy so a blown-out highlight in the footage
          never runs under the type. */}
      <div
        className="absolute inset-0 -z-10 bg-deep-950/55 [background-image:radial-gradient(ellipse_82%_66%_at_50%_48%,rgb(0_0_0/0.5),transparent_75%),linear-gradient(to_bottom,rgb(0_0_0/0.55),rgb(0_0_0/0.16)_40%,rgb(0_0_0/0.72))]"
        aria-hidden
      />

      <Container>
        <motion.div
          className="mx-auto max-w-4xl text-center [text-shadow:0_2px_18px_rgb(0_0_0/0.5)]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: reduced ? 0 : 0.12 } },
          }}
        >
          <h2
            id="promo-heading"
            className="font-display text-[2.15rem] font-medium leading-[1.06] tracking-[-0.03em] text-white sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem]"
          >
            {lines.map((line) => (
              // The mask each line rises out of.
              <span key={line} className="block overflow-hidden pb-[0.08em]">
                <motion.span variants={maskVariants(reduced)} className="block">
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          <motion.p
            variants={fadeVariants(reduced)}
            className="mx-auto mt-7 max-w-xl text-pretty text-base font-medium leading-relaxed text-white sm:text-lg"
          >
            The specialists, platforms and infrastructure keeping U.S. agencies
            and enterprises running — every day, on every shift.
          </motion.p>

          <motion.div
            variants={fadeVariants(reduced)}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Button
              href="/services"
              variant="ghost-dark"
              arrow={false}
              size="lg"
              // Frosted, so the labels clear 4.5:1 even over the brightest glass.
              className="bg-deep-950/25 backdrop-blur-sm"
            >
              What we do
            </Button>
            <Button
              href="/industries"
              variant="ghost-dark"
              arrow={false}
              size="lg"
              // Frosted, so the labels clear 4.5:1 even over the brightest glass.
              className="bg-deep-950/25 backdrop-blur-sm"
            >
              Industries we serve
            </Button>
            <Button
              href="/careers"
              variant="ghost-dark"
              arrow={false}
              size="lg"
              // Frosted, so the labels clear 4.5:1 even over the brightest glass.
              className="bg-deep-950/25 backdrop-blur-sm"
            >
              Join our team
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
