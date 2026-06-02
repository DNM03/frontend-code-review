"use client";

import { useQuery } from "@tanstack/react-query";
import { getJobs } from "./api";

type JobsProps = {
  status: "open" | "closed";
};

export function Jobs({ status }: JobsProps) {
  const jobs = useQuery({
    queryKey: ["jobs"],
    queryFn: () => getJobs(status),
  });

  return <pre>{JSON.stringify(jobs.data)}</pre>;
}
