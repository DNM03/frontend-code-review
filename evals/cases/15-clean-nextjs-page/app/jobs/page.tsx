import type { Metadata } from "next";
import { getJobs } from "@/lib/jobs";

export const metadata: Metadata = {
  title: "Open jobs",
  alternates: {
    canonical: "/jobs",
  },
};

export default async function JobsPage() {
  const jobs = await getJobs();

  return (
    <main>
      <h1>Open jobs</h1>
      {jobs.length === 0 ? (
        <p>No open jobs.</p>
      ) : (
        <ul>
          {jobs.map((job) => (
            <li key={job.id}>{job.title}</li>
          ))}
        </ul>
      )}
    </main>
  );
}
