import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ApplyForm } from "@/components/careers/ApplyForm";
import { Section } from "@/components/ui/Section";
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
  return { title: `Apply — ${job.title}` };
}

export default async function ApplyPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const job = await getJobById(id);

  if (!job) notFound();

  return (
    <Section className="max-w-2xl">
      <Link
        href={`/careers/${job.id}`}
        className="text-sm font-medium text-orange-600 hover:text-orange-700"
      >
        &larr; Back to role details
      </Link>

      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-orange-600">
          {job.department}
        </p>
        <h1 className="mt-2 font-display text-3xl font-bold text-navy-900">
          Apply — {job.title}
        </h1>
        <p className="mt-3 text-base text-slate-600">
          {job.location}
          {job.remote ? " · Remote OK" : ""} · {job.type}
        </p>

        <div className="mt-10">
          <ApplyForm jobTitle={job.title} />
        </div>
      </div>
    </Section>
  );
}
