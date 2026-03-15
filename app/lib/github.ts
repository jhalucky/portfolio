export interface ContribDay {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

export interface GithubStats {
  totalContributions: number;
  weeks: { days: ContribDay[] }[];
}

export async function getGithubContributions(username: string): Promise<GithubStats> {
  try {
    // Using the unofficial GitHub contributions API
    const res = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}?y=last`,
      { next: { revalidate: 3600 } } // cache for 1 hour
    );

    if (!res.ok) throw new Error("Failed to fetch contributions");

    const data = await res.json();

    // Build weeks from flat contributions array
    const contribs: { date: string; count: number; level: number }[] = data.contributions ?? [];

    // Group into weeks of 7
    const weeks: { days: ContribDay[] }[] = [];
    for (let i = 0; i < contribs.length; i += 7) {
      weeks.push({
        days: contribs.slice(i, i + 7).map((d) => ({
          date: d.date,
          count: d.count,
          level: Math.min(d.level, 4) as 0 | 1 | 2 | 3 | 4,
        })),
      });
    }

    return { totalContributions: data.total?.lastYear ?? 0, weeks };
  } catch {
    return { totalContributions: 0, weeks: [] };
  }
}
