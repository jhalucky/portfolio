"use client";

import Link from "next/link";
import { useState } from "react";

const projects = [
  {
    id: 1, 
    title: "Meal Finder",
    description: "Find delicious recipes and meal ideas.",
    img: "/mealfinder.png",
    favicon: "https://meal-finder-yourmeal.vercel.app/favicon.svg",
    tech: ["React", "API", "TailwindCSS"],
    live: "https://meal-finder-yourmeal.vercel.app/",
    code: "https://github.com/jhalucky/meal-finder",
  },
  {
    id: 2,
    title: "Crypto Price Tracker",
    description: "Track cryptocurrency prices in real-time.",
    img: "/cryptotracker.png",
    favicon: "https://cryptocurrenciespricetracker.vercel.app/rupee-sign.svg",
    tech: ["React", "API", "Tailwind"],
    live: "https://cryptocurrenciespricetracker.vercel.app/",
    code: "https://github.com/jhalucky/Crypto-Price-Tracker",
  },
  {
    id: 3,
    title: "Your City Weather",
    description: "See your city weather",
    img: "/weather.png",
    favicon: "https://your-city-weather.vercel.app/favicon.ico",
    tech: ["JavaScript", "API", "TailwindCSS"],
    live: "https://your-city-weather.vercel.app/",
    code: "https://github.com/jhalucky/Weather App",
  },
  {
    id: 4,
    title: "DevPeek",
    description: "See Github Profile of any person.",
    img: "/Devpeek.png",
    favicon: "https://devpeek.vercel.app/favicon.svg",
    tech: ["React", "CSS"],
    live: "https://devpeek.vercel.app/",
    code: "https://github.com/jhalucky/coca-cola-landingpage",
  },
  {
    id: 5,
    title: "Cocacola Redesigned",
    description: "Check the weather forecast worldwide.",
    img: "/cocacola.png",
    favicon: "https://coca-cola-landingpage.vercel.app/favicon.svg",
    tech: ["React", "API", "CSS"],
    live: "https://coca-cola-landingpage.vercel.app/",
    code: "https://github.com/jhalucky/coca-cola-landingpage",
  },
  {
    id: 6,
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
      <h2 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {visibleProjects.map((project) => (
          <div
            key={project.id}
            className="animated-border"
          >
            <article 
              className="relative rounded-xl p-5"
              style={{
                backgroundColor: 'var(--card-bg)',
              }}
            ><div className="">
              <img rel="icon" src={project.favicon} className="mb-2 bg-gray-300 rounded-full h-20" />
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{project.title}</h3>

              <img
                src={project.img}
                alt={project.title}
                className="rounded-md mb-3"
              />
              <p className="mt-2 text-sm" style={{ color: 'var(--text-primary)' }}>
                {project.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {project.tech.map((tech, techIdx) => (
                  <span
                    key={techIdx}
                    className="rounded-md border px-2 py-1 cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
                    style={{ 
                      color: 'var(--text-primary)',
                      borderColor: 'var(--card-border)'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex gap-4 text-sm">
                <Link
                  className="underline underline-offset-4"
                  href={project.live}
                  style={{ color: 'var(--text-primary)' }}
                >
                  Live
                </Link>
                <Link
                  className="underline underline-offset-4"
                  href={project.code}
                  style={{ color: 'var(--text-primary)' }}
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
            className="rounded-md border px-4 py-2 text-sm hover:bg-foreground/5 cursor-pointer hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
            style={{ 
              color: 'var(--text-primary)',
              borderColor: 'var(--card-border)'
            }}
          >
            {expanded ? "Show Less" : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}

