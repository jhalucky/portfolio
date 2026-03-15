"use client";
import Link from "next/link";
import Image from "next/image";

interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  live: string;
  repo: string | null;
  featured: boolean;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group border-2 border-[#cecccc] bg-[#0d0d0d] hover:border-[#2e2e2e] transition-all duration-300 overflow-hidden
      [html.light_&]:bg-white [html.light_&]:border-[#656565] [html.light_&]:hover:border-[#ccc] rounded-t">

      {/* Image — 16:9 */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#111]
        [html.light_&]:bg-[#f0f0f0]">
        <Image
          src={`/projects/${project.slug}.png`}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => {
            // fallback if image missing
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        {/* Fallback label shown behind image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[0.6rem] tracking-widest uppercase text-[#222]
            [html.light_&]:text-[#ccc]">
            {project.slug}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5">

        {/* Title + links */}
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display italic text-[1.05rem] leading-tight text-[#ccc] group-hover:text-white transition-colors
            [html.light_&]:text-[#1a1a1a] [html.light_&]:group-hover:text-black">
            {project.title}
          </h3>
          <div className="flex gap-3 flex-shrink-0 mt-0.5">
            {project.live && (
              <Link href={project.live} target="_blank"
                className="font-mono text-[0.6rem] tracking-widest uppercase text-[#2e2e2e] hover:text-white transition-colors
                  [html.light_&]:text-[#aaa] [html.light_&]:hover:text-black">
                Live ↗
              </Link>
            )}
            {project.repo && (
              <Link href={project.repo} target="_blank"
                className="font-mono text-[0.6rem] tracking-widest uppercase text-[#2e2e2e] hover:text-white transition-colors
                  [html.light_&]:text-[#aaa] [html.light_&]:hover:text-black">
                Code ↗
              </Link>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-[0.8rem] leading-relaxed mb-4 text-[#444]
          [html.light_&]:text-[#666]">
          {project.description}
        </p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="font-mono text-[0.62rem] px-2 py-0.5 rounded-sm border tracking-wide
              text-[#333] border-[#1e1e1e]
              [html.light_&]:text-[#888] [html.light_&]:border-[#ddd]">
              {t}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}