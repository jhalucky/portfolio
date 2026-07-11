import Link from "next/link";
import type { Metadata } from "next";
import { getPublishedBlogs } from "@/app/services/blog.service";
import type { Blog } from "@/app/types/blog";

export const metadata: Metadata = {
  title: "Writing — Lucky Jha",
};

export default async function BlogPage() {
  const blogs = await getPublishedBlogs();

  return (
    <main className="max-w-[780px] mx-auto px-8 pt-24 pb-20">
      {/* Header */}
      <div className="pt-12 pb-14 border-b border-[#111]">
        <span className="font-mono text-[0.62rem] text-[#222] tracking-widest uppercase">
          {blogs.length} {blogs.length === 1 ? "post" : "posts"}
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
        {blogs.length === 0 ? (
          <div className="py-16 text-center">
            <p className="font-mono text-sm text-[#444]">
              No blogs published yet.
            </p>
          </div>
        ) : (
          blogs.map((post: Blog) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="blog-row group flex items-start gap-6 py-6"
            >
              {/* Date */}
              <div className="flex-shrink-0 w-24">
                <span className="font-mono text-[0.6rem] text-[#1e1e1e] leading-relaxed">
                  {new Date(post.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
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
                  {post.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.58rem] text-[#1e1e1e]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Time */}
              <span className="font-mono text-[0.6rem] text-[#1a1a1a] flex-shrink-0 mt-0.5">
                {post.readTime}
              </span>
            </Link>
          ))
        )}
      </div>
    </main>
  );
}