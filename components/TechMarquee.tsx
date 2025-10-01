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
  { name: "GraphQL", icon: SiGraphql },
];


function Track({ items, reverse }: { items: Tech[]; reverse?: boolean }) {
  const content = useMemo(() => [...items, ...items], [items]);
  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`flex min-w-max items-center gap-8 py-4 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {content.map((t, i) => {
          const Icon = t.icon;
          return (
            <div
              key={`${t.name}-${i}`} 
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-3 py-2 rounded-3xl flex items-center justify-center"
            >
              <span className="inline-flex items-center gap-3">
                <Icon className="h-6 w-6 opacity-90" />
                <span className="text-sm opacity-80">{t.name}</span>
              </span>
            </div>
          );
        })}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-white/100 to-transparent dark:from-black/100"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-white/100 to-transparent dark:from-black/100"></div>
    </div>
  );
}


export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden rounded-lg border bg-transparent">
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee { animation: marquee 25s linear infinite; }
        .animate-marquee-reverse { animation: marquee-reverse 25s linear infinite; }
      `}</style>
      <Track items={ROW_A} />
      <Track items={ROW_B} reverse />
    </div>
  );
}


