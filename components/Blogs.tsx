"use client";

import Link from "next/link";
import { useState } from "react";

const blogs = [
  {
    id: 1,
    title: "Meal Finder",
    description: "Find meals by ingredients or categories.",
    img: "/mealfinder.png",
    tech: ["React", "JavaScript", "Tailwind", "API"],
    live: "#",
    code: "#",
  },
  {
    id: 2,
    title: "Crypto Price Tracker",
    description: "A sleek portfolio showcasing work and blogs.",
    img: "/cryptotracker.png",
    tech: ["React", "API", "Tailwind"],
    live: "https://cryptocurrenciespricetracker.vercel.app/",
    code: "https://github.com/jhalucky/Crypto-Price-Tracker",
  },
  {
    id: 3,
    title: "Cocacola Redesigned",
    description: "Check the weather forecast worldwide.",
    img: "/cocacola.png",
    tech: ["React", "CSS"],
    live: "https://jhalucky.github.io/coca-cola-landingpage/",
    code: "https://github.com/jhalucky/coca-cola-landingpage",
  },
  {
    id: 4,
    title: "Cocacola Redesigned",
    description: "Check the weather forecast worldwide.",
    img: "/cocacola.png",
    tech: ["React", "API", "CSS"],
    live: "#",
    code: "#",
  },
  {
    id: 5,
    title: "Cocacola Redesigned",
    description: "Check the weather forecast worldwide.",
    img: "/cocacola.png",
    tech: ["React", "API", "CSS"],
    live: "#",
    code: "#",
  },
];


export default function Blogs({ showAll = false }: { showAll?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = showAll || expanded ? blogs : blogs.slice(0, 2);
    return (
      <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold">Blogs</h2>
        <div className="grid gap-6 sm:grid-cols-1">
        {visibleProjects.map((blogs) => (
          <div
            key={blogs.id}
            className="p-[1px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
             bg-[length:200%_200%] animate-[shimmer_2s_linear_infinite]"
          >
             <article className="relative rounded-lg p-5 bg-[var(--card-bg)] text-[var(--page-fg)]">

                <h3 className="text-base font-semibold">{blogs.title}</h3>
                <p className="mt-2 text-sm text-foreground/80">
                  A short teaser for the blog post. Coming soon.
                </p>
                <div className="mt-3 text-xs text-foreground/60">
                  MM DD, YYYY • 4 min read
                </div>
              </article>
            </div>
          ))}
       </div>
      {!showAll && blogs.length > 2 && (
        <div className="flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="rounded-md border px-4 py-2 text-sm hover:bg-foreground/5 cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
          >
            {expanded ? "Show Less" : "Load More"}
          </button>
        </div>
      )}
    </div>
    </div>
  );
  }
  