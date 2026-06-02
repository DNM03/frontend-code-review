"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { getTeams, getUser } from "./api";

export function Dashboard() {
  const user = useSuspenseQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  const teams = useSuspenseQuery({
    queryKey: ["teams"],
    queryFn: getTeams,
  });

  return (
    <main>
      <h1>{user.data.name}</h1>
      <p>{teams.data.length} teams</p>
    </main>
  );
}
