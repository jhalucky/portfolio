import Link from "next/link";

export default function AdminPage() {
  return (
    <main className="max-w-5xl mx-auto px-8 py-24">
      <div className="flex items-center justify-between mb-10">
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

      <p className="text-[#555]">
        Blog management coming next...
      </p>
    </main>
  );
}