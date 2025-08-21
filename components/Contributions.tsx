"use client";

import useSWR from "swr";

type Day = { date: string; count: number; level: number };

async function fetcher(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
}

// Using a third-party endpoint: https://github-contributions-api.jogruber.de
// Docs: https://github-contributions-api.jogruber.de/#/default/get_user__user__years__year_
export default function Contributions({ username }: { username: string }) {
  const year = new Date().getFullYear();
  const { data, error, isLoading } = useSWR(
    `https://github-contributions-api.jogruber.de/v4/jhalucky?y=${}`,
    fetcher
  );

  if (isLoading) return <div className="text-sm text-foreground/70">Loading contributions…</div>;
  if (error) return <div className="text-sm text-red-600">Failed to load contributions.</div>;

  const weeks: { days: Day[] }[] = data?.contributions?.[0]?.weeks ?? [];

  return (
    <div className="rounded-lg border p-4 bg-white dark:bg-black">
      <div className="grid grid-flow-col auto-cols-max gap-1">
        {weeks.map((week: { days: Day[] }, wi: number) => (
          <div key={wi} className="grid grid-rows-7 gap-1">
            {week.days.map((day, di) => (
              <div
                key={`${wi}-${di}`}
                title={`${day.date}: ${day.count} contributions`}
                className="h-3 w-3 rounded-[2px]"
                style={{
                  backgroundColor: intensityToColor(day.level),
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function intensityToColor(level: number) {
  // 0..4 scaled colors
  switch (level) {
    case 0:
      return "#e5e7eb"; // gray-200
    case 1:
      return "#bbf7d0"; // green-200
    case 2:
      return "#86efac"; // green-300
    case 3:
      return "#4ade80"; // green-400
    case 4:
      return "#22c55e"; // green-500
    default:
      return "#e5e7eb";
  }
}


