"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewBlogPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  async function publish() {
    setLoading(true);

    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        excerpt,
        content,
        tags: tags
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
      }),
    });

    setLoading(false);

    if (!res.ok) {
      alert("Failed to publish.");
      return;
    }

    router.push("/blog");
  }

  return (
    <main className="max-w-3xl mx-auto px-8 py-24">

      <h1 className="text-5xl italic text-white mb-12">
        New Blog
      </h1>

      <div className="space-y-6">

        <input
          placeholder="Title"
          className="w-full bg-transparent border border-[#222] p-4 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Excerpt"
          rows={3}
          className="w-full bg-transparent border border-[#222] p-4 outline-none"
          value={excerpt}
          onChange={(e) => setExcerpt(e.target.value)}
        />

        <input
          placeholder="nextjs, prisma, react"
          className="w-full bg-transparent border border-[#222] p-4 outline-none"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <textarea
          rows={20}
          placeholder="Write your blog..."
          className="w-full bg-transparent border border-[#222] p-4 outline-none font-mono"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button
          onClick={publish}
          disabled={loading}
          className="border border-white px-8 py-3 hover:bg-white hover:text-black transition"
        >
          {loading ? "Publishing..." : "Publish"}
        </button>

      </div>

    </main>
  );
}