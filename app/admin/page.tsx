import Link from "next/link";
import { getPublishedBlogs } from "@/app/services/blog.service";

export default async function AdminPage() {
  const blogs = await getPublishedBlogs();

  return (
    <main className="max-w-5xl mx-auto px-8 py-24">

      <div className="flex items-center justify-between mb-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-[#555]">
            Dashboard
          </p>

          <h1 className="text-5xl italic text-white mt-2">
            Blog Admin
          </h1>
        </div>

        <Link
          href="/admin/new"
          className="border border-[#222] px-5 py-2 hover:bg-white hover:text-black transition"
        >
          + New Blog
        </Link>
      </div>

      <div className="space-y-5">

        {blogs.length === 0 ? (
          <p className="text-[#555]">
            No blogs yet.
          </p>
        ) : (
          blogs.map((blog: any) => (
            <div
              key={blog.id}
              className="border border-[#222] p-6 flex items-center justify-between"
            >

              <div>

                <h2 className="text-xl text-white">
                  {blog.title}
                </h2>

                <p className="text-sm text-[#666] mt-1">
                  {new Date(blog.createdAt).toLocaleDateString()}
                </p>

              </div>

              <div className="flex gap-3">

                <Link
                  href={`/admin/${blog.id}`}
                  className="border border-[#333] px-4 py-2 hover:bg-white hover:text-black transition"
                >
                  ✏️
                </Link>

                <button
                  className="border border-red-700 px-4 py-2 hover:bg-red-700 transition"
                >
                  🗑
                </button>

              </div>

            </div>
          ))
        )}

      </div>

    </main>
  );
}