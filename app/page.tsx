

import Link from "next/link";
import { bio } from "@/app/data/bio";
import { featuredProjects } from "@/app/data/projects";
import { stack } from "@/app/data/stack";
import TechMarquee from "./components/TechMarquee";
import ContribGraph from "./components/ContribGraph";
import Timer from "./components/Timer";
import ProjectCard from "./components/ProjectCard"; 
import ContactForm from "./components/ContactForm";


export default function Home() {
  const featured = featuredProjects.filter((p) => p.featured).slice(0, 4);
 

  return (
    <main className="max-w-[780px] mx-auto px-8 pt-14 pb-20">

      {/* ── HERO ── */}
      <section className="pt-12 pb-20">

        {/* Top row — status dot + date */}
        <div className="flex items-center justify-between mb-14">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-[0.62rem] text-[#2a2a2a] tracking-widest uppercase">
              Available for work
            </span>
          </div>
          <span className="font-mono text-[0.62rem] text-[#1e1e1e] tracking-widest">
            DELHI, IN
          </span>
        </div>


        {/* Main headline — big, asymmetric */}
  <div className="mb-1 p-6 rounded-2xl flex flex-col-reverse sm:flex-row sm:items-end sm:justify-between gap-6">

  {/* Text */}
  <div>
    <h1 className="font-display text-[2.5rem] sm:text-[4.5rem] leading-[0.95] tracking-tight italic text-#fafafa">
      Lucky Jha<span>, </span><span className="sm:block">20</span>
    </h1>
    <div className="flex items-end gap-3 mt-2">
      <span className="font-display text-[3.5rem] sm:text-[4.5rem] leading-[0.95] italic text-#f5f5f5 hidden">
        20
      </span>
      <span className="font-mono text-[0.62rem] tracking-widest uppercase mb-2 text-[#464646] hidden sm:inline">
        — Full-Stack Developer
      </span>
    </div>
  </div>

  {/* Photo */}
  <div className="w-full sm:w-[180px] aspect-square sm:aspect-auto sm:h-[180px] flex-shrink-0">
    <img
      src="/me.png"
      alt="Lucky Jha"
      className="w-full h-full object-cover rounded-sm -rotate-3 shadow-lg"
    />
  </div>

</div>

        {/* One-liner */}
        <p className="text-[1rem] text-[#555] max-w-[480px] leading-relaxed mb-10 font-light">
          Here since <Timer />
        </p>

        {/* Photo + bio grid */}
        <div className="grid gap-8 items-start">
          <div className="space-y-4">
            {bio.description.map((p, i) => (
              <p key={i} className="text-[0.82rem] text-[#444] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <p className="text-[0.82rem] text-[#333] pt-1">
              {bio.status}{" "}
              <Link href={`mailto:${bio.email}`} target="_blank"
                className="text-[#666] underline underline-offset-2 hover:text-white transition-colors">
                Let&apos;s talk.
              </Link>
            </p>
          </div>
        </div>

        {/* Socials row */}
        <div className="flex gap-6 mt-10 pt-8 border-t border-[#111]">
          {bio.socials.map((s) => (
            <Link key={s.label} href={s.href} target="_blank"
              className="font-mono text-[0.62rem] text-[#858585] hover:text-[#484747] transition-colors tracking-widest uppercase">
              {s.label}
            </Link>
          ))}
          <Link href={`mailto:${bio.email}`} target="_blank"
            className="font-mono text-[0.62rem] text-[#858585] hover:text-[#484747] transition-colors tracking-widest uppercase ml-auto">
            Email ↗
          </Link>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className="mb-20">
        <SectionHeader index="01" label="Stack" />
        <TechMarquee />
      </section>

      {/* ── GITHUB ── */}
      <section className="mb-20">
        <SectionHeader index="02" label="Activity" />
        <ContribGraph />
      </section>

      {/* ── SELECTED WORK ── */}
      <section className="mb-20">
        <div className="flex items-baseline justify-between mb-8">
          <SectionHeader index="03" label="Selected Work" />
          <Link href="/projects"
            className="font-mono text-[0.62rem] text-[#282828] hover:text-[#888] transition-colors tracking-widest uppercase">
            All →
          </Link>
        </div>

        {/* Stacked project list — not a grid */}
       {/* Stacked project list — not a grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
  {featured.map((p) => (
    <ProjectCard key={p.slug} project={p} />
  ))}
</div>
<div className="flex items-center justify-center mt-4 border border-[#1a1a1a] dark:border-[#1a1a1a] light:border-[#fafafa] rounded py-2 cursor-pointer hover:bg-[#ccc] hover:text-white transition-colors">
   <Link href="/projects"
            className="font-mono text-[0.62rem] text-[#282828] hover:text-[#888] transition-colors tracking-widest uppercase">
            Show All Projects→
    </Link>
  </div>
      </section>

      {/* ── WRITING ──
      <section className="mb-20">
        <div className="flex items-baseline justify-between mb-8">
          <SectionHeader index="04" label="Writing" />
          <Link href="/blog"
            className="font-mono text-[0.62rem] text-[#282828] hover:text-[#888] transition-colors tracking-widest uppercase">
            All →
          </Link>
        </div>

        <div>
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}
              className="blog-row flex items-start gap-5 py-5 group block">
              <span className="font-mono text-[0.6rem] text-[#1e1e1e] mt-0.5 flex-shrink-0 w-20 leading-relaxed">
                {post.date.split(",")[0]}
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-[0.9rem] text-[#444] group-hover:text-[#ccc] transition-colors mb-1">
                  {post.title}
                </h3>
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((t) => (
                    <span key={t} className="font-mono text-[0.6rem] text-[#1e1e1e]">#{t}</span>
                  ))}
                </div>
              </div>
              <span className="font-mono text-[0.6rem] text-[#1e1e1e] flex-shrink-0 mt-0.5">
                {post.readTime}
              </span>
            </Link>
          ))}
        </div>
      </section> */}

      {/* ── CONTACT ── */}
      <ContactForm />

    </main>
  );
}

function SectionHeader({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="section-index">{index}</span>
      <hr className="flex-1 border-none border-t border-[#111] h-px bg-[#111]" />
      <span className="font-mono text-[0.62rem] text-[#282828] tracking-[0.2em] uppercase">{label}</span>
    </div>
  );
}
