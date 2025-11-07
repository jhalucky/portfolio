"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import GithubCalendar from "@/components/GithubCalendar";
import ContactForm from "@/components/ContactForm";
import Projects from "@/components/Projects";
import Blogs from "@/components/Blogs";
import { motion } from "framer-motion";

const SectionWrapper = ({ children, id }: { children: React.ReactNode; id?: string }) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6 }}
    className="scroll-mt-20"
  >
    {children}
  </motion.section>
);

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Tech background overlay */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-purple-500/5 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-purple-500/10" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <Navbar />
      <main className="mx-auto max-w-7xl space-y-24 px-6 py-12 sm:px-8 relative z-10">
        <Hero />

        {/* About */}
        <SectionWrapper id="about">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tech-gradient">
              About
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-foreground/80 text-lg leading-relaxed">
                I craft reliable, accessible web apps with React, Next.js, and
                TypeScript. I care about clean architecture, smooth performance, and
                great DX.
              </p>
              <p className="text-foreground/80 text-lg leading-relaxed mt-4">
                When I'm not coding, you'll probably find me sketching new ideas,
                brainstorming the next side project, or diving into tech communities
                to learn and share knowledge. At the core, I just love building cool
                stuff that makes people say "wow!"
              </p>
            </div>
          </div>
        </SectionWrapper>

        {/* What I do */}
        <SectionWrapper>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tech-gradient">
              What I Do
            </h2>
            <p className="text-foreground/80 text-lg leading-relaxed max-w-3xl">
              I build web applications that solve real problems. From meal discovery apps to crypto trackers, I enjoy creating tools that make life easier. I'm passionate about clean code, smooth user experiences, and learning new technologies. When I'm not coding, you'll find me exploring new frameworks, contributing to open-source, or sharing my journey on social media.
            </p>
          </div>
        </SectionWrapper>

        {/* Tools & Tech Stack (Marquee) */}
        <SectionWrapper id="tech">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tech-gradient">
              Tools & Tech Stack
            </h2>
            <TechMarquee />
          </div>
        </SectionWrapper>
        
        {/* Projects */}
        <SectionWrapper id="projects">
          <Projects showAll={false} />
        </SectionWrapper>

        {/* Blogs */}
        <SectionWrapper id="blogs">
          <Blogs />
        </SectionWrapper>

        {/* GitHub Calendar */}
        <SectionWrapper>
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tech-gradient">
              GitHub Activity
            </h2>
            <GithubCalendar username="jhalucky" />
          </div>
        </SectionWrapper>

        {/* Contact */}
        <SectionWrapper id="contact">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tech-gradient">
              Get in Touch
            </h2>
            <ContactForm />
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  );
}