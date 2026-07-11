import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getBlog, getPublishedBlogs } from "@/app/services/blog.service";

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const post = await getBlog(params.slug);

  if (!post) {
    return {};
  }

  return {
    title: `${post.title} — Lucky Jha`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  const blogs = await getPublishedBlogs();

  return blogs.map((blog: { slug: string }) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPost({
  params,
}: Props) {
  const post = await getBlog(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-[640px] mx-auto px-6 pt-28 pb-16">
      {/* Back */}
      <Link
        href="/blog"
        className="font-mono text-[0.7rem] text-[#444] hover:text-white transition-colors tracking-wider uppercase mb-10 inline-block"
      >
        ← Back
      </Link>

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[0.7rem] text-[#444]">
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>

          <span className="font-mono text-[0.7rem] text-[#333]">
            {post.readTime}
          </span>
        </div>

        <h1 className="font-display text-[2rem] italic text-white leading-snug mb-4">
          {post.title}
        </h1>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag: string) => (
            <span
              key={tag}
              className="font-mono text-[0.65rem] text-[#333]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Excerpt */}
      <p className="text-[0.9rem] text-[#666] leading-relaxed mb-8">
        {post.excerpt}
      </p>

      {/* Blog Content */}
      <article
        className="prose-custom"
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      />
    </main>
  );
}