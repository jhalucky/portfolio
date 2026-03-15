import Link from "next/link";
import { blogPosts } from "../lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Lucky Jha",
};

export default function BlogPage() {
  return (
    <main className="max-w-[780px] mx-auto px-8 pt-24 pb-20">

      {/* Header */}
      <div className="pt-12 pb-14 border-b border-[#111]">
        <span className="font-mono text-[0.62rem] text-[#222] tracking-widest uppercase">
          {blogPosts.length} posts
        </span>
        <h1 className="font-display text-[3.5rem] italic text-white leading-none mt-3">
          Writing
        </h1>
        <p className="text-[0.8rem] text-[#2e2e2e] mt-3 font-mono">
          Thoughts on building, shipping, and staying sane.
        </p>
      </div>

      {/* Posts */}
      <div className="mt-10">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}
            className="blog-row group flex items-start gap-6 py-6 block">

            {/* Date column */}
            <div className="flex-shrink-0 w-24">
              <span className="font-mono text-[0.6rem] text-[#1e1e1e] leading-relaxed">
                {post.date.split(",")[0]}
              </span>
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <h2 className="text-[0.92rem] text-[#3a3a3a] group-hover:text-[#ccc] transition-colors mb-2 leading-snug">
                {post.title}
              </h2>
              <p className="text-[0.78rem] text-[#262626] leading-relaxed mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((t) => (
                  <span key={t} className="font-mono text-[0.58rem] text-[#1e1e1e]">#{t}</span>
                ))}
              </div>
            </div>

            {/* Read time */}
            <span className="font-mono text-[0.6rem] text-[#1a1a1a] flex-shrink-0 mt-0.5">
              {post.readTime}
            </span>

          </Link>
        ))}
      </div>

    </main>
  );
}
