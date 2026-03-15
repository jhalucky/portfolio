"use client";
import { useState } from "react";
import { featuredProjects } from "../lib/data";
import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");

  const filtered = featuredProjects.filter((p) =>
    query === "" ||
    p.title.toLowerCase().includes(query.toLowerCase()) ||
    p.description.toLowerCase().includes(query.toLowerCase()) ||
    p.tech.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <main className="max-w-[780px] mx-auto px-8 pt-24 pb-32">

      {/* Header */}
      <div className="pt-12 mb-10">
        <span className="font-mono text-[0.62rem] text-[#222] tracking-widest uppercase">
          {featuredProjects.length} projects
        </span>
        <h1 className="font-display text-[3.5rem] italic text-[#1e1e1e] leading-none mt-2">
          All Projects
        </h1>
        <h2 className="text-#f5f5f5 font-display italic text-[3rem]">That I've worked on</h2>
      </div>

      {/* Search */}
      <div className="relative mb-10">
        <svg
          className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[#2a2a2a]"
          width="14" height="14" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search projects..."
          className="w-full bg-[#0d0d0d] border border-[#1a1a1a] text-[#888] placeholder-[#2a2a2a]
            font-mono text-[0.78rem] tracking-wide pl-9 pr-4 py-3 rounded-xl outline-none
            focus:border-[#2e2e2e] focus:text-[#ccc] transition-all duration-200
            [html.light_&]:bg-white [html.light_&]:border-[#e8e8e8] [html.light_&]:text-[#555]
            [html.light_&]:placeholder-[#ccc] [html.light_&]:focus:border-[#bbb]"
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#2a2a2a] hover:text-[#888] transition-colors font-mono text-xs">
            ✕
          </button>
        )}
      </div>

      {/* Results count when searching */}
      {query && (
        <p className="font-mono text-[0.62rem] text-[#2a2a2a] tracking-widest uppercase mb-6">
          {filtered.length} result{filtered.length !== 1 ? "s" : ""} for &quot;{query}&quot;
        </p>
      )}

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="font-mono text-[0.7rem] text-[#222] tracking-widest">
            No projects found for &quot;{query}&quot;
          </p>
        </div>
      )}

    </main>
  );
}