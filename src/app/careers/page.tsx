import type { Metadata } from "next";
import { PageHeader } from "@/components/sections/PageHeader";
import { JobsBrowser } from "@/components/careers/JobsBrowser";
import { Section } from "@/components/ui/Section";
import { getJobFilterOptions, getJobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Careers",
  description: "Explore open roles at Tanvi IT and find your next consulting opportunity.",
};

export default async function CareersPage() {
  const [jobs, filterOptions] = await Promise.all([getJobs(), getJobFilterOptions()]);

  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title="Build your career at Tanvi IT"
        description="We're always looking for senior-minded consultants who want to own outcomes, not just fill seats."
      />

      <Section>
        <JobsBrowser jobs={jobs} filterOptions={filterOptions} />
      </Section>
    </>
  );
}
