import jobsData from "@/data/jobs.json";
import type { Job } from "@/types/job";

const jobs = jobsData as Job[];

export interface JobFilters {
  query?: string;
  department?: string;
  location?: string;
  type?: string;
}

/**
 * Pure filter usable from both server and client. The async wrappers below
 * are the "service module" boundary — swap their bodies for real API calls
 * later without touching callers.
 */
export function filterJobs(allJobs: Job[], filters: JobFilters = {}): Job[] {
  const { query, department, location, type } = filters;
  const q = query?.trim().toLowerCase();

  return allJobs.filter((job) => {
    const matchesQuery =
      !q ||
      job.title.toLowerCase().includes(q) ||
      job.summary.toLowerCase().includes(q) ||
      job.department.toLowerCase().includes(q);
    const matchesDepartment = !department || job.department === department;
    const matchesLocation = !location || job.location === location;
    const matchesType = !type || job.type === type;

    return matchesQuery && matchesDepartment && matchesLocation && matchesType;
  });
}

export async function getJobs(filters: JobFilters = {}): Promise<Job[]> {
  return filterJobs(jobs, filters);
}

export async function getJobById(id: string): Promise<Job | undefined> {
  return jobs.find((job) => job.id === id);
}

export async function getJobFilterOptions() {
  return {
    departments: uniqueSorted(jobs.map((job) => job.department)),
    locations: uniqueSorted(jobs.map((job) => job.location)),
    types: uniqueSorted(jobs.map((job) => job.type)),
  };
}

function uniqueSorted(values: string[]): string[] {
  return Array.from(new Set(values)).sort();
}
