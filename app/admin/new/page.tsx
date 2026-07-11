import BlogForm from "@/app/components/admin/BlogForm";

export default function NewBlogPage() {
  return (
    <main className="max-w-3xl mx-auto px-8 py-24">

      <h1 className="text-5xl italic text-white mb-12">
        New Blog
      </h1>

      <BlogForm mode="create" />

    </main>
  );
}