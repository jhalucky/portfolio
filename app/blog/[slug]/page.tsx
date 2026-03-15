import { blogPosts } from "../../lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: `${post.title} — Lucky Jha`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <main className="max-w-[640px] mx-auto px-6 pt-28 pb-16">
      {/* Back */}
      <Link href="/blog"
        className="font-mono text-[0.7rem] text-[#444] hover:text-white transition-colors tracking-wider uppercase mb-10 inline-block">
        ← Back
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[0.7rem] text-[#444]">{post.date}</span>
          <span className="font-mono text-[0.7rem] text-[#333]">{post.readTime}</span>
        </div>
        <h1 className="font-display text-[2rem] italic text-white leading-snug mb-4">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((t) => (
            <span key={t} className="font-mono text-[0.65rem] text-[#333]">#{t}</span>
          ))}
        </div>
      </div>

      {/* Content placeholder */}
      <div className="prose-custom">
        <p className="text-[0.9rem] text-[#666] leading-relaxed mb-4">{post.excerpt}</p>
        <div className="border border-dashed border-[#1f1f1f] rounded p-6 text-center mt-8">
          <p className="font-mono text-[0.7rem] text-[#333]">
            Full post content goes here.<br/>
            Connect this to your CMS, MDX files, or a headless blog.
          </p>
        </div>
      </div>
    </main>
  );
}
