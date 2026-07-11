import { notFound } from "next/navigation";
import BlogForm from "@/app/components/admin/BlogForm";
import { getBlogById } from "@/app/services/blog.service";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditBlogPage({
  params,
}: Props) {
  const blog = await getBlogById(params.id);

  if (!blog) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-8 py-24">

      <h1 className="text-5xl italic text-white mb-12">
        Edit Blog
      </h1>

      <BlogForm
        mode="edit"
        blog={blog}
      />

    </main>
  );
}