import Link from "next/link";
import { bio, featuredProjects, blogPosts, stack } from "./lib/data";
import TechMarquee from "./components/TechMarquee";
import ContribGraph from "./components/ContribGraph";

export default function Home() {
  const featured = featuredProjects.filter((p) => p.featured).slice(0, 4);
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <main className="max-w-[780px] mx-auto px-8 pt-24 pb-20">

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
        <div className="mb-10">
          <h1 className="font-display text-[4.5rem] leading-[0.95] tracking-tight text-white mb-0 italic">
            Lucky Jha
          </h1>
          <div className="flex items-end gap-4 mt-3">
            <span className="font-display text-[4.5rem] leading-[0.95] text-[#1e1e1e] italic">20</span>
            <span className="font-mono text-[0.65rem] text-[#2e2e2e] tracking-widest mb-2 uppercase">
              — Full-Stack Developer
            </span>
          </div>
        </div>

        {/* One-liner */}
        <p className="text-[1rem] text-[#555] max-w-[480px] leading-relaxed mb-10 font-light">
          I build products that ship. Currently obsessing over{" "}
          <span className="text-[#888]">Bez</span> — AI-powered design tooling for jewellery brands.
        </p>

        {/* Photo + bio grid */}
        <div className="grid grid-cols-[1fr_140px] gap-8 items-start">
          <div className="space-y-4">
            {bio.description.map((p, i) => (
              <p key={i} className="text-[0.82rem] text-[#444] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: p }} />
            ))}
            <p className="text-[0.82rem] text-[#333] pt-1">
              {bio.status}{" "}
              <Link href={`mailto:${bio.email}`}
                className="text-[#666] underline underline-offset-2 hover:text-white transition-colors">
                Let&apos;s talk.
              </Link>
            </p>
          </div>

          {/* Photo placeholder */}
          <div className="w-[140px] h-[168px] border border-[#161616] bg-[#0d0d0d] flex items-end p-2">
            <span className="font-mono text-[0.55rem] text-[#1e1e1e] tracking-widest uppercase leading-relaxed">
              Photo<br/>soon
            </span>
          </div>
        </div>

        {/* Socials row */}
        <div className="flex gap-6 mt-10 pt-8 border-t border-[#111]">
          {bio.socials.map((s) => (
            <Link key={s.label} href={s.href} target="_blank"
              className="font-mono text-[0.62rem] text-[#282828] hover:text-[#888] transition-colors tracking-widest uppercase">
              {s.label}
            </Link>
          ))}
          <Link href={`mailto:${bio.email}`}
            className="font-mono text-[0.62rem] text-[#282828] hover:text-[#888] transition-colors tracking-widest uppercase ml-auto">
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
        <div className="space-y-0">
          {featured.map((p, i) => (
            <div key={p.slug}
              className="p-card group py-6 px-5 flex gap-5 items-start border-x-0 border-t-0 last:border-b-0"
              style={{ borderLeft: "none", borderRight: "none", borderTop: "none" }}>

              {/* Index */}
              <span className="font-mono text-[0.6rem] text-[#1e1e1e] mt-1 flex-shrink-0 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4 mb-1.5">
                  <h3 className="font-display text-[1.05rem] italic text-[#aaa] group-hover:text-white transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex gap-4 flex-shrink-0">
                    {p.live && (
                      <Link href={p.live} target="_blank"
                        className="font-mono text-[0.6rem] text-[#252525] hover:text-[#888] transition-colors tracking-widest uppercase">
                        Live ↗
                      </Link>
                    )}
                    {p.repo && (
                      <Link href={p.repo} target="_blank"
                        className="font-mono text-[0.6rem] text-[#252525] hover:text-[#888] transition-colors tracking-widest uppercase">
                        Code ↗
                      </Link>
                    )}
                  </div>
                </div>
                <p className="text-[0.8rem] text-[#383838] leading-relaxed mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => <span key={t} className="tech-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── WRITING ── */}
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
      </section>

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
