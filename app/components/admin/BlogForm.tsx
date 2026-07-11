"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Blog } from "@/app/types/blog";
import ImageUploader from "./ImageUploader";

interface BlogFormProps {
  mode: "create" | "edit";
  blog?: Blog;
}

export default function BlogForm({
  mode,
  blog,
}: BlogFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [coverImage, setCoverImage] = useState(
  blog?.coverImage ?? ""
);

  const [title, setTitle] = useState(blog?.title ?? "");
  const [excerpt, setExcerpt] = useState(blog?.excerpt ?? "");
  const [content, setContent] = useState(blog?.content ?? "");
  const [tags, setTags] = useState(blog?.tags.join(", ") ?? "");

  async function submit() {
    setLoading(true);

    try {
      const payload = {
  title,
  excerpt,
  content,
  coverImage,
  tags: tags
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean),
};

      const res = await fetch(
        mode === "create"
          ? "/api/blogs"
          : `/api/blogs/${blog?.id}`,
        {
          method: mode === "create" ? "POST" : "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!res.ok) {
        throw new Error();
      }

      router.push("/admin");
      router.refresh();
    } catch (err) {
      console.error(err);

      alert(
        mode === "create"
          ? "Failed to publish blog."
          : "Failed to update blog."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
        <ImageUploader value={coverImage} onChange={setCoverImage} />

      <input
        placeholder="Title"
        className="w-full bg-transparent border border-[#222] p-4 outline-none"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        rows={3}
        placeholder="Excerpt"
        className="w-full bg-transparent border border-[#222] p-4 outline-none"
        value={excerpt}
        onChange={(e) => setExcerpt(e.target.value)}
      />

      <input
        placeholder="nextjs, react, prisma"
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
        onClick={submit}
        disabled={loading}
        className="border border-white px-8 py-3 hover:bg-white hover:text-black transition disabled:opacity-50"
      >
        {loading
          ? mode === "create"
            ? "Publishing..."
            : "Saving..."
          : mode === "create"
          ? "Publish"
          : "Save Changes"}
      </button>

    </div>
  );
}