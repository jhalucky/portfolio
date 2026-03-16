import { getGithubContributions } from "../lib/github";
import { GITHUB_USERNAME } from "../lib/data";

export default async function ContribGraph() {
  const { totalContributions, weeks } = await getGithubContributions(GITHUB_USERNAME);

  if (weeks.length === 0) return null;

  const displayWeeks = weeks;

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <span className="text-[0.7rem] font-mono text-[#444] tracking-wider uppercase">
          GitHub Activity
        </span>
        <span className="text-[0.7rem] font-mono text-[#444]">
          {totalContributions.toLocaleString()} contributions in the last year
        </span>
      </div>

      <div className="overflow-x-auto pb-2">
        <div className="contrib-grid min-w-max">
          {displayWeeks.map((week, wi) => (
            <div key={wi} className="contrib-week">
              {week.days.map((day, di) => (
                <div
                  key={di}
                  className="contrib-day"
                  data-level={day.level}
                  title={`${day.date}: ${day.count} contributions`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1.5 mt-2 justify-end">
        <span className="text-[0.65rem] text-[#333] font-mono">Less</span>
        {[0, 1, 2, 3, 4].map((l) => (
          <div key={l} className="contrib-day" data-level={l} />
        ))}
        <span className="text-[0.65rem] text-[#333] font-mono">More</span>
      </div>
    </div>
  );
}
