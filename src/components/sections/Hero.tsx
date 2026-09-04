"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Pause, Play, Sparkles } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

const SLIDE_DURATION = 4200;

interface HeadlineLine {
  text: string;
  /** A trailing substring of `text` to render as the gold accent. */
  accent?: string;
}

const slides: {
  eyebrow: string;
  headline: HeadlineLine[];
  description: string;
  image: string;
  imageAlt: string;
  /** Optional background clip; `image` is used as its poster frame. */
  video?: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}[] = [
  {
    eyebrow: "U.S. based & operated · Top 1% IT talent",
    headline: [
      { text: "Connecting U.S. companies" },
      { text: "with the right" },
      { text: "IT talent", accent: "IT talent" },
    ],
    description:
      "We connect organizations with skilled IT professionals to accelerate innovation, reduce time-to-hire, and deliver results.",
    // Reviewed side by side under the real scrim: the previous clip was a flat,
    // top-down beige desk that went muddy behind the overlay. This one is
    // darker, has depth and holds the headline. Poster matches its tone.
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=2560&q=85&auto=format&fit=crop",
    imageAlt: "Consulting team working in a modern office",
    video:
      "https://videos.pexels.com/video-files/7659850/7659850-uhd_2560_1440_25fps.mp4",
    primary: { label: "Talk to our team", href: "/contact" },
    secondary: { label: "Explore solutions", href: "/services" },
  },
  {
    eyebrow: "NASA SEWP VI · GSA MAS · 8(a) STARS III",
    headline: [
      { text: "Trusted partner to" },
      { text: "government and" },
      { text: "enterprise clients", accent: "enterprise clients" },
    ],
    description:
      "Buy through the vehicles you already hold. 100+ projects delivered for federal, state and local agencies and Fortune 500 companies.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2560&q=85&auto=format&fit=crop",
    imageAlt: "Institutional office towers viewed from below",
    primary: { label: "View SEWP VI contract", href: "/sewp-vi" },
    secondary: { label: "Contract vehicles", href: "/about" },
  },
  {
    eyebrow: "For talent",
    headline: [
      { text: "Opportunities that" },
      { text: "move your career" },
      { text: "forward", accent: "forward" },
    ],
    description:
      "Work with top U.S. clients on mission-critical programs — competitive pay, real growth, and long-term assignments.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=2560&q=85&auto=format&fit=crop",
    imageAlt: "Consultants mapping out a delivery roadmap in a planning session",
    primary: { label: "Explore opportunities", href: "/careers" },
    secondary: { label: "How we work", href: "/about" },
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Hovering pauses only while the pointer is over the hero; the play/pause
  // button is a separate, sticky choice that a mouse-leave must not undo.
  const playing = !userPaused && !hovering;

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!playing || reduceMotion) return;

    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, SLIDE_DURATION);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [playing, index]);

  const slide = slides[index];

  function goTo(i: number) {
    setIndex(((i % slides.length) + slides.length) % slides.length);
  }

  return (
    <section
      className="relative flex min-h-[600px] items-center overflow-hidden bg-ink-950 sm:min-h-[680px] lg:min-h-[760px]"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {slide.video ? (
              <video
                src={slide.video}
                poster={slide.image}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-hidden
                // Footage straight off the wire reads flat under a scrim;
                // a contrast/saturation lift keeps it looking lit.
                className="h-full w-full object-cover [filter:contrast(1.18)_saturate(1.15)_brightness(0.92)]"
              />
            ) : (
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1 }}
                animate={{ scale: 1.08 }}
                transition={{ duration: (SLIDE_DURATION * 2.2) / 1000, ease: "linear" }}
              >
                <Image
                  src={slide.image}
                  alt={slide.imageAlt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover [filter:contrast(1.18)_saturate(1.15)_brightness(0.92)]"
                />
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/*
          Scrims are NEUTRAL black, not the warm ink-950 (#100e09). Layering a
          brown-black over warm footage was what made the hero look muddy —
          neutral black darkens without tinting, so the image keeps its colour.
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/65 to-black/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35" />
        {/* Vignette for depth, plus one cool + one gold light source so the
            frame reads as lit rather than washed. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 50% 45%, transparent 35%, rgb(0 0 0 / 0.55) 100%)",
          }}
          aria-hidden
        />
        <div
          className="absolute -right-24 top-1/4 h-[28rem] w-[28rem] rounded-full bg-gold-500/20 blur-[120px]"
          aria-hidden
        />
        <div
          className="absolute -left-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-sky-400/10 blur-[120px]"
          aria-hidden
        />
        <div className="absolute inset-0 noise-overlay opacity-25" aria-hidden />
      </div>

      <Container className="relative pb-24 pt-32 sm:pb-28 sm:pt-36 lg:pb-32 lg:pt-40">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-500/10 px-4 py-1.5 text-sm font-medium text-gold-300">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {slide.eyebrow}
              </div>

              <h1 className="mt-6 font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-[4.5rem] lg:leading-[1.02]">
                {slide.headline.map((line) => {
                  if (!line.accent) {
                    return (
                      <span key={line.text} className="block">
                        {line.text}
                      </span>
                    );
                  }
                  const splitAt = line.text.length - line.accent.length;
                  return (
                    <span key={line.text} className="block">
                      {line.text.slice(0, splitAt)}
                      <span className="text-gradient-gold italic">{line.accent}</span>
                    </span>
                  );
                })}
              </h1>

              <p className="mt-6 max-w-xl text-xl leading-relaxed text-white/90">
                {slide.description}
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Button href={slide.primary.href} size="lg">
                  {slide.primary.label}
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
                <Button href={slide.secondary.href} size="lg" variant="ghost-dark">
                  {slide.secondary.label}
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-16 flex items-center gap-4 sm:mt-20 sm:gap-6">
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:bg-white/10 hover:text-gold-300 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next slide"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold-300 hover:bg-white/10 hover:text-gold-300 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              <ArrowRight className="h-4 w-4" aria-hidden />
            </button>
            <button
              type="button"
              onClick={() => setUserPaused((p) => !p)}
              aria-label={userPaused ? "Play slideshow" : "Pause slideshow"}
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-gold-300 hover:text-gold-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
            >
              {userPaused ? (
                <Play className="h-3.5 w-3.5" aria-hidden />
              ) : (
                <Pause className="h-3.5 w-3.5" aria-hidden />
              )}
            </button>
          </div>

          <div className="flex flex-1 gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.eyebrow}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className="h-1 flex-1 max-w-24 overflow-hidden rounded-full bg-white/15"
              >
                <span className="relative block h-full w-full">
                  {i === index ? (
                    <motion.span
                      key={index}
                      className="absolute inset-y-0 left-0 block rounded-full bg-gold-500"
                      initial={{ width: "0%" }}
                      animate={{ width: playing ? "100%" : "40%" }}
                      transition={{
                        duration: playing ? SLIDE_DURATION / 1000 : 0.3,
                        ease: "linear",
                      }}
                    />
                  ) : i < index ? (
                    <span className="absolute inset-0 block rounded-full bg-white/50" />
                  ) : null}
                </span>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
