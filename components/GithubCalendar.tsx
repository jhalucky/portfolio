"use client";

import GitHubCalendar from "react-github-calendar";
import { useEffect, useState } from "react";

export default function GithubCalendar({ username }: { username: string }) {
  const [scheme, setScheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const update = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setScheme(isDark ? "dark" : "light");
    };
    update();
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  const theme = {
    light: [
      "#fde7f2", // pink-50 custom
      "#fbcfe8", // pink-200
      "#f9a8d4", // pink-300
      "#f472b6", // pink-400
      "#ec4899", // pink-500
    ],
    dark: [
      "#2b0f1f", // deep pink-ish background
      "#9d174d", // pink-900
      "#be185d", // pink-800
      "#db2777", // pink-700
      "#ec4899", // pink-600
    ],
  } as const;

  return (
    <div className="rounded-2xl flex justify-center border border-foreground/10 bg-card-bg/50 backdrop-blur-sm p-6 overflow-x-auto">
      <GitHubCalendar
        username={username}
        blockSize={12}
        blockMargin={4}
        fontSize={12}
        colorScheme={scheme}
        theme={theme as any}
      />
    </div>
  );
}
