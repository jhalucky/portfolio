export default function Blogs() {
    return (
      <div className="flex flex-col gap-5">
        <h2 className="text-xl font-semibold">Blogs</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {[1, 2].map((i) => (
            <div
              key={i}
              className="inset-0 p-[1px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            >
             <article className="relative rounded-lg p-5 bg-[var(--card-bg)] text-[var(--page-fg)]">
                <h3 className="text-base font-semibold">Blog post title {i}</h3>
                <p className="mt-2 text-sm text-foreground/80">
                  A short teaser for the blog post. Coming soon.
                </p>
                <div className="mt-3 text-xs text-foreground/60">
                  MM DD, YYYY • 4 min read
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <button className="rounded-md border px-4 py-2 text-sm hover:bg-foreground/5">
            Load more
          </button>
        </div>
      </div>
    );
  }
  