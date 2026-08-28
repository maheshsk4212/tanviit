export type JobType = "Full-time" | "Part-time" | "Contract" | "Internship";

export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  remote: boolean;
  type: JobType;
  postedAt: string;
  summary: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}
