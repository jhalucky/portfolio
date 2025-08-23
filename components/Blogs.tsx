"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

// Blog metadata type
type BlogMeta = {
  image: string;
  slug: string;
  title: string;
  description: string;
  date: string;
};

export default function Blogs({ showAll = false }: { showAll?: boolean }) {
  const [expanded, setExpanded] = useState(false);
  const [blogs, setBlogs] = useState<BlogMeta[]>([]);
  const [loading, setLoading] = useState(true);
  const { resolvedTheme } = useTheme();

  // Fetch blogs metadata from API
  useEffect(() => {
    async function fetchBlogs() {
      try {
        setLoading(true);
        const res = await fetch("/api/blogs");
        const data = await res.json();
        console.log("Fetched blogs:", data); // Debug log
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const visibleProjects = showAll || expanded ? blogs : blogs.slice(0, 2);

  if (loading) {
    return (
      <div className="flex flex-col">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {showAll ? "My Blog" : "Latest Blog Posts"}
          </h2>
          <p style={{ color: 'var(--text-primary)' }}>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
            {showAll ? "My Blog" : "Blogs"}
          </h2>
          {showAll && (
            <p style={{ color: 'var(--text-primary)' }} className="max-w-2xl mx-auto">
              Sharing my journey, insights, and experiences in the world of technology and coding.
            </p>
          )}
        </div>



        {/* Blog grid */}
        <div className="grid gap-8 sm:grid-cols-1">
          {visibleProjects.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`}>
              <div className="animated-border group hover:scale-[1.02] transition-transform duration-300">
                <article 
                  className="relative w-full rounded-xl p-6 flex flex-col md:flex-row md:items-center justify-between"
                  style={{
                    backgroundColor: 'var(--card-bg)',
                  }}
                >
                  {/* Blog Image */}
                  <div className="hidden md:block md:w-48 md:h-32 md:mr-6">
                    <img
                      src={blog.image || "/images/how-i-started.png"}
                      alt={blog.title}
                      className="w-full h-full rounded-xl object-cover shadow-lg"
                    />
                  </div>
                  
                  {/* Blog Text */}
                  <div className="flex-1 space-y-3">
                    <h3 
                      className="text-xl font-semibold transition-colors duration-300"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {blog.title}
                    </h3>
                    <p 
                      className="leading-relaxed"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {blog.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm">
                      <span style={{ color: 'var(--text-primary)' }}>{blog.date}</span>
                      <span style={{ color: 'var(--text-primary)' }}>•</span>
                      <span style={{ color: 'var(--text-primary)' }}>4 min read</span>
                      <span style={{ color: 'var(--text-primary)' }}>•</span>
                      <span style={{ color: 'var(--text-primary)' }} className="font-medium">Read more →</span>
                    </div>
                  </div>

                  {/* Mobile Image */}
                  <div className="block md:hidden mt-4">
                    <img
                      src={blog.image || "/images/how-i-started.png"}
                      alt={blog.title}
                      className="w-full h-48 rounded-xl object-cover shadow-lg"
                    />
                  </div>
                </article>
              </div>
            </Link>
          ))}
        </div>

        {/* Load More button */}
        {!showAll && blogs.length > 2 && (
          <div className="flex justify-center pt-4">
            <button
              onClick={() => setExpanded(!expanded)}
              className="px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity font-medium"
            >
              {expanded ? "Show Less" : "Load More Posts"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
