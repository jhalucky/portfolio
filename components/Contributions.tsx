"use client";

import useSWR from "swr";

type Day = { date: string; count: number; level: number };

async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}


export default function Contributions({ username }: { username: string }) {
  const year = new Date().getFullYear();
  const { data, error, isLoading } = useSWR(
    `https://github-contributions-api.jogruber.de/v4/jhalucky?y=${year}`,
    fetcher
  );

  if (isLoading) return <div className="text-sm text-foreground/70">Loading contributions…</div>;
  if (error) return <div className="text-sm text-red-600">Failed to load contributions.</div>;

  const weeks: { days: Day[] }[] = data?.contributions?.[0]?.weeks ?? [];

  return (
    <div className="rounded-lg border p-4 bg-white dark:bg-black">
      <div className="grid grid-flow-col auto-cols-max gap-1">
      </div>
    </div>
  );
}




