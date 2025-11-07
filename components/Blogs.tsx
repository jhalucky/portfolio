"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

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
    <div className="flex flex-col gap-8">
      <div className="space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold tech-gradient">
          {showAll ? "My Blogs" : "Blogs"}
        </h2>
      </div>

      {/* Blog grid */}
      <div className="grid gap-6 sm:grid-cols-1">
        {visibleProjects.map((blog, index) => (
          <motion.div
            key={blog.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={`/blogs/${blog.slug}`}>
              <article 
                className="group relative w-full rounded-2xl p-6 border border-foreground/10 bg-card-bg hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                style={{
                  backgroundColor: 'var(--card-bg)',
                }}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  {/* Blog Image */}
                  <div className="hidden md:block md:w-56 md:h-36 flex-shrink-0">
                    <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-100 dark:bg-gray-900">
                      <img
                        src={blog.image || "/images/how-i-started.png"}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  
                  {/* Blog Text */}
                  <div className="flex-1 space-y-3">
                    <h3 
                      className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:via-cyan-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {blog.title}
                    </h3>
                    <p 
                      className="leading-relaxed text-foreground/70"
                    >
                      {blog.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-foreground/60">
                      <span>{blog.date}</span>
                      <span>•</span>
                      <span>4 min read</span>
                      <span>•</span>
                      <span className="font-medium text-cyan-500 group-hover:translate-x-1 transition-transform inline-block">
                        Read more →
                      </span>
                    </div>
                  </div>

                  {/* Mobile Image */}
                  <div className="block md:hidden">
                    <div className="relative overflow-hidden rounded-xl aspect-video bg-gray-100 dark:bg-gray-900">
                      <img
                        src={blog.image || "/images/how-i-started.png"}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          </motion.div>
        ))}
      </div>

      {!showAll && blogs.length > 1 && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setExpanded(!expanded)}
            className="px-6 py-3 rounded-lg border-2 border-cyan-500/50 text-foreground font-medium hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
          >
            {expanded ? "Show Less" : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}
