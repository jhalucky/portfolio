import Link from "next/link";
import { featuredProjects } from "../lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects — Lucky Jha",
};

export default function ProjectsPage() {
  const featured = featuredProjects.filter((p) => p.featured);
  const others = featuredProjects.filter((p) => !p.featured);

  return (
    <main className="max-w-[780px] mx-auto px-8 pt-24 pb-20">

      {/* Header */}
      <div className="pt-12 pb-14 border-b border-[#111]">
        <span className="font-mono text-[0.62rem] text-[#222] tracking-widest uppercase">
          {featuredProjects.length} projects
        </span>
        <h1 className="font-display text-[3.5rem] italic text-white leading-none mt-3">
          Things I&apos;ve<br />
          <span className="text-[#1e1e1e]">Built</span>
        </h1>
      </div>

      {/* Featured */}
      <div className="mt-10 mb-16">
        <span className="font-mono text-[0.6rem] text-[#1e1e1e] tracking-[0.2em] uppercase">
          Featured
        </span>
        <div className="mt-6 space-y-0">
          {featured.map((p, i) => (
            <div key={p.slug}
              className="group py-7 border-b border-[#0f0f0f] flex gap-5 items-start">
              <span className="font-mono text-[0.6rem] text-[#1a1a1a] mt-1 flex-shrink-0 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="font-display text-[1.15rem] italic text-[#888] group-hover:text-white transition-colors">
                    {p.title}
                  </h2>
                  <div className="flex gap-4">
                    {p.live && (
                      <Link href={p.live} target="_blank"
                        className="font-mono text-[0.6rem] text-[#222] hover:text-[#888] transition-colors tracking-widest uppercase">
                        Live ↗
                      </Link>
                    )}
                    {p.repo && (
                      <Link href={p.repo} target="_blank"
                        className="font-mono text-[0.6rem] text-[#222] hover:text-[#888] transition-colors tracking-widest uppercase">
                        Code ↗
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-[0.8rem] text-[#333] leading-relaxed mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Others */}
      <div>
        <span className="font-mono text-[0.6rem] text-[#1e1e1e] tracking-[0.2em] uppercase">
          Other Projects
        </span>
        <div className="mt-6 space-y-0">
          {others.map((p, i) => (
            <div key={p.slug}
              className="group py-6 border-b border-[#0f0f0f] flex gap-5 items-start">
              <span className="font-mono text-[0.6rem] text-[#1a1a1a] mt-1 flex-shrink-0 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <h2 className="font-display text-[1rem] italic text-[#555] group-hover:text-[#aaa] transition-colors">
                    {p.title}
                  </h2>
                  <div className="flex gap-4">
                    {p.live && (
                      <Link href={p.live} target="_blank"
                        className="font-mono text-[0.6rem] text-[#222] hover:text-[#888] transition-colors tracking-widest uppercase">
                        Live ↗
                      </Link>
                    )}
                    {p.repo && (
                      <Link href={p.repo} target="_blank"
                        className="font-mono text-[0.6rem] text-[#222] hover:text-[#888] transition-colors tracking-widest uppercase">
                        Code ↗
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-[0.8rem] text-[#2e2e2e] leading-relaxed mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
