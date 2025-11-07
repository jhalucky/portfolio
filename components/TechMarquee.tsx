"use client";

import { useState, useEffect } from "react";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss,
  SiPostgresql, SiMongodb, SiPrisma, SiDocker, SiAmazon, SiVercel,
  SiGit, SiGraphql
} from "react-icons/si";

type Tech = { name: string; icon: React.ComponentType<{ className?: string }> };

const ALL_TECHS: Tech[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Prisma", icon: SiPrisma },
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: SiAmazon },
  { name: "Vercel", icon: SiVercel },
  { name: "Git", icon: SiGit },
  { name: "GraphQL", icon: SiGraphql },
];

export default function TechMarquee() {
  const [mounted, setMounted] = useState(false);
  const [shuffledTechs, setShuffledTechs] = useState(ALL_TECHS);

  useEffect(() => {
    setMounted(true);
    // Shuffle only on client side to avoid hydration mismatch
    setShuffledTechs([...ALL_TECHS].sort(() => Math.random() - 0.5));
  }, []);

  return (
    <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-card-bg/50 backdrop-blur-sm p-8 min-h-[250px]">
      <style jsx global>{`
        @keyframes float-random {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-15px, -50px) scale(0.9);
          }
          75% {
            transform: translate(30px, -20px) scale(1.05);
          }
        }
        @keyframes tech-pulse {
          0%, 100% {
            opacity: 0.7;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.15);
          }
        }
        @keyframes tech-glow {
          0%, 100% {
            box-shadow: 0 0 15px rgba(59, 130, 246, 0.4), 0 0 30px rgba(34, 211, 238, 0.3);
          }
          50% {
            box-shadow: 0 0 25px rgba(59, 130, 246, 0.6), 0 0 50px rgba(34, 211, 238, 0.5);
          }
        }
        .tech-float {
          animation: float-random 8s ease-in-out infinite;
        }
        .tech-float:hover {
          animation: tech-pulse 0.8s ease-in-out infinite, tech-glow 1.5s ease-in-out infinite;
          z-index: 10;
          transform: scale(1.3) !important;
        }
      `}</style>
      
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 rounded-2xl" />
      
      {/* Floating tech badges */}
      <div className="relative w-full h-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4">
        {shuffledTechs.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="tech-float flex items-center justify-center"
              style={{
                animationDelay: `${index * 0.3}s`,
                animationDuration: `${6 + (index % 3) * 2}s`,
              }}
            >
              <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 px-3 py-2 rounded-xl flex flex-col items-center justify-center gap-1 shadow-lg shadow-cyan-500/30 transition-all duration-300 cursor-pointer hover:shadow-cyan-500/60 min-w-[80px]">
                <Icon className="h-5 w-5 opacity-90" />
                <span className="text-xs font-medium opacity-90 text-center leading-tight">{tech.name}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
