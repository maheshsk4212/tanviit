import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import Link from "next/link";
import type { Job } from "@/types/job";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";

export function JobCard({ job }: { job: Job }) {
  return (
    <Card className="hover:border-orange-200">
      <Link href={`/careers/${job.id}`} className="block">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-600">
              {job.department}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold text-navy-900 transition-colors group-hover/card:text-orange-600">
              {job.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{job.summary}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              <Badge tone="slate">
                <MapPin className="mr-1 h-3 w-3" aria-hidden />
                {job.location}
                {job.remote ? " · Remote OK" : ""}
              </Badge>
              <Badge tone="slate">
                <Briefcase className="mr-1 h-3 w-3" aria-hidden />
                {job.type}
              </Badge>
            </div>
          </div>

          <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-orange-600">
            View role
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/card:translate-x-1"
              aria-hidden
            />
          </span>
        </div>
      </Link>
    </Card>
  );
}
