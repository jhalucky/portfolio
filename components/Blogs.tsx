"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

// Blog metadata type
type BlogMeta = {
  images: string;
  slug: string;
  title: string;
  description: string;
  date: string;
};

export default function Blogs({ showAll = false }: { showAll?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [blogs, setBlogs] = useState<BlogMeta[]>([]);

  // Fetch blogs metadata from API
  useEffect(() => {
    async function fetchBlogs() {
      const res = await fetch("/api/blogs"); // 👈 API route to read /content
      const data = await res.json();
      setBlogs(data);
    }
    fetchBlogs();
  }, []);

  const visibleProjects = showAll || expanded ? blogs : blogs.slice(0, 2);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold">Blogs</h2>

        {/* Blog grid */}
        <div className="grid gap-6 sm:grid-cols-1">
          {visibleProjects.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
              <div
                className="relative flex flex-col md:flex-row p-[1px] rounded-lg 
                bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 
                bg-[length:200%_200%] animate-[shimmer_2s_linear_infinite]"
              >
                <article className="relative w-full rounded-lg p-5 bg-[var(--card-bg)] text-[var(--page-fg)] flex flex-col md:flex-row md:items-center justify-between">
                <div className="block md:hidden py-2 md:mt-0 md:ml-4 object-fit">
                    <img
                      src={blog.images || "/images/how-i-started.png"}
                      alt={blog.title}
                      className="w-full md:w-32 my:5 h-auto rounded-lg object-contain"
                    />
                  </div>
                  
                  {/* Blog Text */}
                  <div className="flex-1">
                    <h3 className="text-base font-semibold">{blog.title}</h3>
                    <p className="mt-2 text-sm text-foreground/80">
                      {blog.description}
                    </p>
                    <div className="mt-3 text-xs text-foreground/60">
                      {blog.date} • 4 min read
                    </div>
                  </div>

                  {/* Blog Image */}
                  <div className="hidden md:block mt-4 md:mt-0 md:ml-4">
                    <img
                      src={blog.images || "/images/how-i-started.png"}
                      alt={blog.title}
                      className="w-full md:w-32 h-auto rounded-lg object-contain"
                    />
                  </div>
                </article>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More button */}
        {!showAll && blogs.length > 2 && (
          <div className="flex justify-center">
            <button
              onClick={() => setExpanded(!expanded)}
              className="rounded-md border px-4 py-2 text-sm cursor-pointer 
              hover:bg-foreground/5 hover:bg-gradient-to-r 
              hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500"
            >
              {expanded ? "Show Less" : "Load More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
