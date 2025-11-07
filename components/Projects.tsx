"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

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
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl sm:text-4xl font-bold tech-gradient">
        Projects
      </h2>
      <div className="flex flex-col gap-16 md:gap-20 relative">
        {/* Connecting line decoration (hidden on mobile) */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500/20 via-purple-500/20 to-cyan-500/20 -translate-x-1/2" />
        
        {visibleProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === visibleProjects.length - 1;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className={`group relative flex flex-col md:flex-row ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-6 md:gap-8`}
            >
              {/* Zig-zag connector dot (hidden on mobile) */}
              {!isLast && (
                <div className="hidden md:block absolute left-1/2 top-full w-3 h-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 -translate-x-1/2 translate-y-8 z-10 shadow-lg shadow-cyan-500/50" />
              )}
              {/* Image Section */}
              <div className={`w-full md:flex-1 ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                <motion.div
                  whileHover={{ scale: 1.05, rotate: isEven ? 2 : -2 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden rounded-2xl aspect-video bg-gray-100 dark:bg-gray-900 shadow-lg"
                >
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              </div>

              {/* Content Section */}
              <div className={`w-full md:flex-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                <article 
                  className="relative rounded-2xl p-6 project-card h-full flex flex-col border border-foreground/10 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.img 
                      rel="icon" 
                      src={project.favicon} 
                      className="w-14 h-14 rounded-xl bg-gray-200 dark:bg-gray-800 object-contain p-2" 
                      alt={project.title}
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-foreground/70 mb-6 flex-grow text-base leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIdx) => (
                      <motion.span
                        key={techIdx}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="rounded-lg border border-foreground/20 px-3 py-1.5 text-xs font-medium text-foreground/80 hover:border-cyan-500/50 hover:text-cyan-500 transition-colors"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2 border-t border-foreground/10">
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                    >
                      Live
                    </Link>
                    <Link
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 text-center px-4 py-2 rounded-lg border-2 border-cyan-500/50 text-foreground font-medium hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
                    >
                      Code
                    </Link>
                  </div>
                </article>
              </div>
            </motion.div>
          );
        })}
      </div>
      {!showAll && projects.length > 4 && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-3 rounded-lg border-2 border-cyan-500/50 text-foreground font-medium hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
          >
            {expanded ? "Show Less" : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}

