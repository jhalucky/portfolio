"use client";

import Link from "next/link";
import { useState } from "react";

const projects = [
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

export default function Projects({ showAll = false }: { showAll?: boolean }) {
  const [expanded, setExpanded] = useState(false);

  const visibleProjects = showAll || expanded ? projects : projects.slice(0, 4);

  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="p-[1px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
             bg-[length:200%_200%] animate-[shimmer_2s_linear_infinite]"
          >
            <article className="relative rounded-lg p-5 bg-[var(--card-bg)] text-[var(--page-fg)]">
              <img
                src={project.img}
                alt={project.title}
                className="rounded-md mb-3"
              />
              <h3 className="text-base font-semibold">{project.title}</h3>
              <p className="mt-2 text-sm text-foreground/80">
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-foreground/70">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-md border px-2 py-1">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4 text-sm">
                <Link
                  className="underline underline-offset-4"
                  href={project.live}
                >
                  Live
                </Link>
                <Link
                  className="underline underline-offset-4"
                  href={project.code}
                >
                  Code
                </Link>
              </div>
            </article>
          </div>
        ))}
      </div>
      {!showAll && projects.length > 4 && (
        <div className="flex justify-center">
          <button
            onClick={() => setExpanded(!expanded)}
            className="rounded-md border px-4 py-2 text-sm hover:bg-foreground/5"
          >
            {expanded ? "Show Less" : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}

