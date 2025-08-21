import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import GithubCalendar from "@/components/GithubCalendar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-5xl space-y-20 px-6 py-10 sm:px-8">
        <Hero />

        {/* About */}
        <section id="about" className="space-y-3">
          <h2 className="text-xl font-semibold">About</h2>
          <p className="text-foreground/80">
            I craft reliable, accessible web apps with React, Next.js, and TypeScript. I care about clean
            architecture, smooth performance, and great DX.
          </p>
        

        {/* What I do */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What I do?</h2>
          <p className="text-foreground/80">
            I've delivered 10+ freelance projects, interned at two startups and failed to build my own startup twice. #LifeGoesOn. I'm super active on X where I share funnies and #BuildInPublic. I'm an AWS Cloud Club Captain, a maintainer and contributor of open-source projects. When not coding, I read books, go out for a run or binge YouTube.
          </p>
          <p className="text-foreground/80">
            I'm open to work, freelance, or collaborate.{" "}
            <Link
              className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-semibold hover:underline"
              href="mailto:jhalucky@gmail.com"
            >
              Contact Me
            </Link>
          </p>
        </section>
        </section>

        {/* Tools & Tech Stack (Marquee) */}
        <section className="space-y-6" id="tech">
          <h2 className="text-xl font-semibold">Tools & Tech Stack</h2>
          <TechMarquee />
        </section>

        {/* Projects */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[1, 2, 3].map((i) => (
              <article key={i} className="rounded-lg border p-5 transition-colors hover:bg-foreground/5">
                <h3 className="text-base font-semibold">Project {i}</h3>
                <p className="mt-2 text-sm text-foreground/80">
                  Short description of what this project does and why it matters. Link to demo or code below.
                </p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-foreground/70">
                  <span className="rounded-md border px-2 py-1">Next.js</span>
                  <span className="rounded-md border px-2 py-1">TypeScript</span>
                  <span className="rounded-md border px-2 py-1">Tailwind</span>
                </div>
                <div className="mt-4 flex gap-4 text-sm">
                  <Link className="underline underline-offset-4" href="#">Live</Link>
                  <Link className="underline underline-offset-4" href="#">Code</Link>
                </div>
              </article>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="rounded-md border px-4 py-2 text-sm hover:bg-foreground/5">Load more</button>
          </div>
        </section>

        {/* Blogs */}
        <section className="space-y-3" id="blogs">
          <h2 className="text-xl font-semibold">Blogs</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <article key={i} className="rounded-lg border p-5">
                <h3 className="text-base font-semibold">Blog post title {i}</h3>
                <p className="mt-2 text-sm text-foreground/80">A short teaser for the blog post. Coming soon.</p>
                <div className="mt-3 text-xs text-foreground/60">MM DD, YYYY • 4 min read</div>
              </article>
            ))}
          </div>
        </section>

        {/* GitHub Calendar (no heading) */}
        <section>
          <GithubCalendar username="jhalucky" />
        </section>

      </main>
      <Footer />
    </div>
  );
}
