import type { Metadata } from "next";
import { ArrowLeft, Briefcase, CalendarDays, MapPin } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";
import { getJobById, getJobs } from "@/lib/jobs";

export async function generateStaticParams() {
  const jobs = await getJobs();
  return jobs.map((job) => ({ id: job.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const job = await getJobById(id);
  if (!job) return { title: "Role not found" };
  return { title: job.title, description: job.summary };
}

export default async function JobDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) notFound();

  const postedDate = new Date(job.postedAt).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Section>
      <Link
        href="/careers"
        className="group inline-flex items-center gap-1.5 text-sm font-medium text-orange-600 hover:text-orange-700"
      >
        <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" aria-hidden />
        Back to all roles
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-12 lg:grid-cols-[1fr_320px]">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
            {job.department}
          </p>
          <h1 className="mt-2 font-display text-3xl font-bold text-navy-900 sm:text-4xl">
            {job.title}
          </h1>

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
            <Badge tone="slate">
              <CalendarDays className="mr-1 h-3 w-3" aria-hidden />
              Posted {postedDate}
            </Badge>
          </div>

          <p className="mt-8 text-base leading-relaxed text-slate-700">{job.description}</p>

          <div className="mt-10">
            <h2 className="font-display text-lg font-semibold text-navy-900">Responsibilities</h2>
            <ul className="mt-4 space-y-2.5">
              {job.responsibilities.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10">
            <h2 className="font-display text-lg font-semibold text-navy-900">Requirements</h2>
            <ul className="mt-4 space-y-2.5">
              {job.requirements.map((item) => (
                <li key={item} className="flex gap-2.5 text-sm text-slate-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 border-t border-slate-200 pt-8 lg:hidden">
            <Button href={`/careers/${job.id}/apply`} size="lg">
              Apply for this role
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="hidden lg:block">
          <div className="sticky top-24 rounded-card border border-slate-200 bg-white p-6 shadow-elevated">
            <p className="text-sm font-semibold text-navy-900">Ready to apply?</p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
              Takes about 5 minutes. We&apos;ll follow up if there&apos;s a fit.
            </p>
            <Button href={`/careers/${job.id}/apply`} size="lg" className="mt-5 w-full">
              Apply for this role
            </Button>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
