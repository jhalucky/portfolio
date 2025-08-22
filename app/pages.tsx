import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import GithubCalendar from "@/components/GithubCalendar";
import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";

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
            I craft reliable, accessible web apps with React, Next.js, and
            TypeScript. I care about clean architecture, smooth performance, and
            great DX.<br></br>
            When I’m not coding, you’ll probably find me sketching new ideas,
            brainstorming the next side project, or diving into tech communities
            to learn and share knowledge. At the core, I just love building cool
            stuff that makes people say “wow!”
          </p>
        </section>

        {/* What I do */}
        <section className="space-y-3">
          <h2 className="text-xl font-semibold">What I do?</h2>
          <p className="text-foreground/80">
            I've delivered 10+ freelance projects, interned at two startups and
            failed to build my own startup twice. #LifeGoesOn. I'm super active
            on X where I share funnies and #BuildInPublic. I'm an AWS Cloud Club
            Captain, a maintainer and contributor of open-source projects. When
            not coding, I read books, go out for a run or binge YouTube.
          </p>
        </section>

        {/* Tools & Tech Stack (Marquee) */}
        <section className="space-y-6" id="tech">
          <h2 className="text-xl font-semibold">Tools & Tech Stack</h2>
          <TechMarquee />
        </section>
        
        {/* Projects */}
        <section className="space-y-6" id="projects">
          <Projects />
        </section>

        {/* Blogs */}
        <section className="space-y-3" id="blogs">
          <Blogs />
        </section>
        

        {/* GitHub Calendar (no heading) */}
        <section>
          <GithubCalendar username="jhalucky" />
        </section>

        {/* Contact */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Get in touch</h2>
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
    
  );
}