"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, SearchX } from "lucide-react";
import { useMemo, useState } from "react";
import { filterJobs, type JobFilters } from "@/lib/jobs";
import type { Job } from "@/types/job";
import { Input, Select } from "@/components/ui/Field";
import { JobCard } from "./JobCard";

interface FilterOptions {
  departments: string[];
  locations: string[];
  types: string[];
}

export function JobsBrowser({
  jobs,
  filterOptions,
}: {
  jobs: Job[];
  filterOptions: FilterOptions;
}) {
  const [filters, setFilters] = useState<JobFilters>({});

  const results = useMemo(() => filterJobs(jobs, filters), [jobs, filters]);

  function update<K extends keyof JobFilters>(key: K, value: JobFilters[K]) {
    setFilters((prev) => ({ ...prev, [key]: value || undefined }));
  }

  return (
    <div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="relative">
          <Search
            className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            aria-hidden
          />
          <Input
            type="text"
            placeholder="Search roles..."
            aria-label="Search roles"
            className="pl-10"
            value={filters.query ?? ""}
            onChange={(e) => update("query", e.target.value)}
          />
        </div>

        <Select
          aria-label="Filter by department"
          value={filters.department ?? ""}
          onChange={(e) => update("department", e.target.value)}
        >
          <option value="">All departments</option>
          {filterOptions.departments.map((department) => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </Select>

        <Select
          aria-label="Filter by location"
          value={filters.location ?? ""}
          onChange={(e) => update("location", e.target.value)}
        >
          <option value="">All locations</option>
          {filterOptions.locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </Select>

        <Select
          aria-label="Filter by job type"
          value={filters.type ?? ""}
          onChange={(e) => update("type", e.target.value)}
        >
          <option value="">All types</option>
          {filterOptions.types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </Select>
      </div>

      <p className="mt-6 text-sm text-slate-500">
        {results.length} {results.length === 1 ? "role" : "roles"} found
      </p>

      <motion.div layout className="mt-4 grid grid-cols-1 gap-5">
        <AnimatePresence mode="popLayout">
          {results.map((job) => (
            <motion.div
              key={job.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <JobCard job={job} />
            </motion.div>
          ))}
        </AnimatePresence>

        {results.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center gap-3 rounded-card border border-dashed border-slate-300 p-10 text-center"
          >
            <SearchX className="h-8 w-8 text-slate-300" aria-hidden />
            <p className="text-sm text-slate-500">
              No roles match your search. Try adjusting your filters.
            </p>
          </motion.div>
        ) : null}
      </motion.div>
    </div>
  );
}
