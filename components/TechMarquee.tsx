"use client";

import { useMemo } from "react";
import { 
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiTailwindcss,
  SiPostgresql, SiMongodb, SiPrisma, SiDocker, SiAmazon, SiVercel,
  SiGit, SiJest, SiRedis, SiGraphql
} from "react-icons/si";

type Tech = { name: string; icon: React.ComponentType<{ className?: string }> };

const ROW_A: Tech[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Prisma", icon: SiPrisma },
];

const ROW_B: Tech[] = [
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: SiAmazon },
  { name: "Vercel", icon: SiVercel },
  { name: "Git", icon: SiGit },
  { name: "Jest", icon: SiJest },
  { name: "Redis", icon: SiRedis },
  { name: "GraphQL", icon: SiGraphql },
];


function Track({ items, reverse }: { items: Tech[]; reverse?: boolean }) {
  const content = useMemo(() => [...items, ...items, ...items], [items]);
  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`flex min-w-max items-center gap-6 py-6 ${
          reverse ? "animate-tech-wave-reverse" : "animate-tech-wave"
        }`}
      >
        {content.map((t, i) => {
          const Icon = t.icon;
          return (
            <div
              key={`${t.name}-${i}`}
              className="tech-badge"
              style={{
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div className="bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 px-4 py-3 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 hover:rotate-2">
                <span className="inline-flex items-center gap-3">
                  <Icon className="h-6 w-6 opacity-90 animate-spin-slow" />
                  <span className="text-sm font-medium opacity-90">{t.name}</span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white/100 via-white/50 to-transparent dark:from-black/100 dark:via-black/50"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white/100 via-white/50 to-transparent dark:from-black/100 dark:via-black/50"></div>
    </div>
  );
}


export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-foreground/10 bg-card-bg/50 backdrop-blur-sm p-8">
      <style jsx global>{`
        @keyframes tech-wave {
          0% { 
            transform: translateX(0) translateY(0);
          }
          25% { 
            transform: translateX(-33.333%) translateY(-10px);
          }
          50% { 
            transform: translateX(-66.666%) translateY(0);
          }
          75% { 
            transform: translateX(-100%) translateY(-10px);
          }
          100% { 
            transform: translateX(-133.333%) translateY(0);
          }
        }
        @keyframes tech-wave-reverse {
          0% { 
            transform: translateX(-133.333%) translateY(0);
          }
          25% { 
            transform: translateX(-100%) translateY(10px);
          }
          50% { 
            transform: translateX(-66.666%) translateY(0);
          }
          75% { 
            transform: translateX(-33.333%) translateY(10px);
          }
          100% { 
            transform: translateX(0) translateY(0);
          }
        }
        @keyframes float-badge {
          0%, 100% { 
            transform: translateY(0) rotate(0deg);
          }
          50% { 
            transform: translateY(-15px) rotate(5deg);
          }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-tech-wave { 
          animation: tech-wave 30s ease-in-out infinite;
        }
        .animate-tech-wave-reverse { 
          animation: tech-wave-reverse 30s ease-in-out infinite;
        }
        .tech-badge {
          animation: float-badge 3s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
      <Track items={ROW_A} />
      <Track items={ROW_B} reverse />
    </div>
  );
}


