"use client";

import Link from "next/link";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1, 
    title: "Meal Finder",
    description: "Find delicious recipes and meal ideas with a beautiful, intuitive interface.",
    img: "/mealfinder.png",
    favicon: "https://meal-finder-yourmeal.vercel.app/favicon.svg",
    tech: ["React", "API", "TailwindCSS"],
    live: "https://meal-finder-yourmeal.vercel.app/",
    code: "https://github.com/jhalucky/meal-finder",
  },
  {
    id: 2,
    title: "Crypto Price Tracker",
    description: "Track cryptocurrency prices in real-time with live updates and charts.",
    img: "/cryptotracker.png",
    favicon: "https://cryptocurrenciespricetracker.vercel.app/rupee-sign.svg",
    tech: ["React", "API", "Tailwind"],
    live: "https://cryptocurrenciespricetracker.vercel.app/",
    code: "https://github.com/jhalucky/Crypto-Price-Tracker",
  },
  {
    id: 3,
    title: "Your City Weather",
    description: "Get accurate weather forecasts for any city worldwide.",
    img: "/weather.png",
    favicon: "https://your-city-weather.vercel.app/favicon.ico",
    tech: ["JavaScript", "API", "TailwindCSS"],
    live: "https://your-city-weather.vercel.app/",
    code: "https://github.com/jhalucky/Weather App",
  },
  {
    id: 4,
    title: "DevPeek",
    description: "Explore GitHub profiles with a beautiful, modern interface.",
    img: "/Devpeek.png",
    favicon: "https://devpeek.vercel.app/favicon.svg",
    tech: ["React", "CSS", "GithubAPI"],
    live: "https://devpeek.vercel.app/",
    code: "https://github.com/jhalucky/coca-cola-landingpage",
  },
  {
    id: 5,
    title: "Cocacola Redesigned",
    description: "A modern redesign of the classic Coca-Cola landing page.",
    img: "/cocacola.png",
    favicon: "https://coca-cola-landingpage.vercel.app/favicon.svg",
    tech: ["React", "API", "CSS"],
    live: "https://coca-cola-landingpage.vercel.app/",
    code: "https://github.com/jhalucky/coca-cola-landingpage",
  },
  {
    id: 6,
    title: "Cocacola Redesigned",
    description: "A modern redesign of the classic Coca-Cola landing page.",
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
    <div className="flex flex-col gap-8 projects-container">
      <h2 className="text-2xl sm:text-3xl font-bold tech-gradient">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            className="project-card-wrapper group"
          >
            <article 
              className="relative h-full rounded-lg overflow-hidden project-card border border-foreground/10 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: 'var(--card-bg)',
              }}
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-900">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Links overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:bg-white dark:hover:bg-black transition-all duration-300 hover:scale-110"
                    onClick={(e) => project.live === "#" && e.preventDefault()}
                  >
                    <ExternalLink className="w-5 h-5 text-foreground" />
                  </Link>
                  <Link
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-white/90 dark:bg-black/90 backdrop-blur-sm hover:bg-white dark:hover:bg-black transition-all duration-300 hover:scale-110"
                    onClick={(e) => project.code === "#" && e.preventDefault()}
                  >
                    <Github className="w-5 h-5 text-foreground" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 space-y-4">
                {/* Title and Description */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-2.5 py-1 rounded text-xs font-medium border border-foreground/20 text-foreground/70 hover:border-cyan-500/50 hover:text-cyan-500 transition-colors duration-200"
                      style={{
                        backgroundColor: 'var(--card-bg)',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-cyan-500 transition-colors duration-200 group/link"
                    onClick={(e) => project.live === "#" && e.preventDefault()}
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live</span>
                  </Link>
                  <Link
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-foreground/70 hover:text-cyan-500 transition-colors duration-200 group/link"
                    onClick={(e) => project.code === "#" && e.preventDefault()}
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
      {!showAll && projects.length > 4 && (
        <div className="flex justify-center pt-6">
          <button
            type="button"
            onClick={() => {
              setExpanded(prev => !prev);
            }}
            className="px-8 py-3 rounded-lg border-2 border-cyan-500/50 text-sm font-semibold text-foreground hover:text-cyan-500 hover:border-cyan-500 hover:bg-cyan-500/10 transition-all duration-200 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: 'var(--card-bg)',
            }}
          >
            {expanded ? "Show Less" : `Show More (${projects.length - 4} more)`}
          </button>
        </div>
      )}
    </div>
  );
}
