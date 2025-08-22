import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-xl font-semibold">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="p-[1px] rounded-lg bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-shimmer"
          >
           <article className="relative rounded-lg p-5 bg-[var(--card-bg)] text-[var(--page-fg)]">

              <img src="C:\Users\Lucky Jha\Documents\lucky-portfolio\public\mealfinder.png"/>
              <h3 className="text-base font-semibold">Project {i}</h3>
              <p className="mt-2 text-sm text-foreground/80">
                Short description of what this project does and why it matters.
                Link to demo or code below.
              </p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs text-foreground/70">
                <span className="rounded-md border px-2 py-1">Next.js</span>
                <span className="rounded-md border px-2 py-1">TypeScript</span>
                <span className="rounded-md border px-2 py-1">Tailwind</span>
              </div>
              <div className="mt-4 flex gap-4 text-sm">
                <Link className="underline underline-offset-4" href="#">
                  Live
                </Link>
                <Link className="underline underline-offset-4" href="#">
                  Code
                </Link>
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