import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import { MDXRemote } from 'next-mdx-remote/rsc';
import { MDXComponents } from '@/components/MDXComponents';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Await params first
  const { slug } = await params;

  // Try both .mdx and .md extensions
  const mdxPath = path.join(process.cwd(), "app/content", `${slug}.mdx`);
  const mdPath = path.join(process.cwd(), "app/content", `${slug}.md`);
  
  let filePath: string;
  if (fs.existsSync(mdxPath)) {
    filePath = mdxPath;
  } else if (fs.existsSync(mdPath)) {
    filePath = mdPath;
  } else {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-10 sm:px-8">
        {/* Hero Section */}
        <section className="space-y-6 mb-12">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {data.title}
            </h1>
            <div className="flex justify-center items-center gap-4 text-sm text-foreground/60">
              <span>By {data.author}</span>
              <span>•</span>
              <span>{data.date ? new Date(data.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }) : ""}</span>
            </div>
          </div>
          
          {/* Featured Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-3xl">
              <img 
                src={data.image} 
                className="w-full h-auto rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-800" 
                alt={data.title} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </section>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <div className=" backdrop-blur-sm rounded-2xl p-8 shadow-xl">
            <MDXRemote source={content} components={MDXComponents} />
          </div>
        </article>

        {/* Back to Blogs */}
        <div className="mt-12 text-center">
          <a 
            href="/blogs" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            ← Back to Blogs
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}


