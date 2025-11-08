"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[70vh] flex flex-col justify-center items-center sm:items-start space-y-8 py-20 overflow-hidden">
      {/* Tech-inspired animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-purple-500/20 dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-purple-500/10 blur-3xl animate-pulse" />
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-1/2 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      </div>
      
      {/* Tech grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-30 dark:opacity-20" style={{
        backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-6 text-center sm:text-left w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="block mb-2">
              <span className="tech-gradient
              ">
                Hi, I'm Lucky Jha.
              </span>
            </span>
          </h1>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg sm:text-xl text-foreground/70 font-light"
        >
          Full‑Stack Developer
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-base sm:text-lg text-foreground/60 max-w-2xl"
        >
          Building intuitive web experiences with modern technologies. Passionate about clean code, smooth UX, and creating tools that make a difference.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-cyan-500 to-purple-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 tech-glow relative overflow-hidden group"
          >
            <span className="relative z-10">View Projects</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border-2 border-cyan-500/50 text-foreground font-medium hover:bg-cyan-500/10 hover:border-cyan-500 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Get in Touch</span>
            <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
