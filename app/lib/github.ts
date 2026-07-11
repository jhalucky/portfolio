type GithubContributionDay = {
  contributionCount: number;
  contributionLevel:
    | "NONE"
    | "FIRST_QUARTILE"
    | "SECOND_QUARTILE"
    | "THIRD_QUARTILE"
    | "FOURTH_QUARTILE";
  date: string;
};

type GithubWeek = {
  contributionDays: GithubContributionDay[];
};

const LEVEL_MAP = {
  NONE: 0,
  FIRST_QUARTILE: 1,
  SECOND_QUARTILE: 2,
  THIRD_QUARTILE: 3,
  FOURTH_QUARTILE: 4,
} as const;

export async function getGithubContributions(username: string) {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    throw new Error("Missing GITHUB_TOKEN");
  }

  const query = `
    query($username: String!) {
      user(login: $username) {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                contributionLevel
                date
              }
            }
          }
        }
      }
    }
  `;

  const res = await fetch("https://api.github.com/graphql", {
    method: "POST",

    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      query,
      variables: {
        username,
      },
    }),

    next: {
      revalidate: 3600,
    },
  });

  if (!res.ok) {
    throw new Error("GitHub GraphQL request failed.");
  }

  const json = await res.json();

  const calendar =
    json.data.user.contributionsCollection.contributionCalendar;

  return {
    totalContributions: calendar.totalContributions,

    weeks: calendar.weeks.map((week: GithubWeek) => ({
      days: week.contributionDays.map((day) => ({
        date: day.date,
        count: day.contributionCount,
        level: LEVEL_MAP[day.contributionLevel],
      })),
    })),
  };
}