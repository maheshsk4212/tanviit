/**
 * The small white card that overlaps the bottom of a feature image.
 * Used on the Industries tabs and the About milestones visual.
 */
export function ImageHighlightCard({
  label,
  title,
}: {
  label: string;
  title: string;
}) {
  return (
    <div className="relative z-10 mx-4 -mt-8 rounded-card border border-slate-100 bg-white p-5 shadow-elevated">
      <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">{label}</p>
      <p className="mt-1.5 font-display text-base font-bold leading-snug text-navy-900">
        {title}
      </p>
    </div>
  );
}
