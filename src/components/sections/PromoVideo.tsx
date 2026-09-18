import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

/**
 * Ten-second brand film, sitting directly above the closing call to action —
 * it ends on black, and its on-screen line is the same equation the CTA
 * carries, so the two read as one closing beat.
 *
 * It has an audio track and its own on-screen wording, so it is a player the
 * visitor starts, never an autoplaying background: browsers block sound on
 * autoplay anyway. `preload="metadata"` with a `#t=` start time shows a frame
 * from the film without pulling the whole 5 MB until someone presses play.
 */
export function PromoVideo() {
  return (
    <Section tone="muted">
      <SectionHeading
        align="split"
        eyebrow="Watch"
        title="Tanvi IT in ten seconds."
        description="A short look at how we connect U.S. organizations with the IT talent and technology behind their missions."
      />
      <Reveal delay={0.1} className="mt-12">
        <div className="mx-auto max-w-3xl overflow-hidden rounded-2xl bg-black shadow-[0_28px_60px_-28px_rgb(0_0_0/0.45)] ring-1 ring-deep-950/10">
          <video
            src="/tanvi-promo.mp4#t=2.5"
            controls
            playsInline
            preload="metadata"
            aria-label="Tanvi IT promotional film, ten seconds"
            className="aspect-video h-auto w-full"
          />
        </div>
      </Reveal>
    </Section>
  );
}
