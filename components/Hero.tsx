"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

export default function Hero() {
 useEffect(() => {
    // Run only on client
    if (typeof window !== "undefined") {
      gsap.from(".hero-subtitle", {
        y: 20,
        opacity: 0,
        duration: 1,
        delay: 0.5,
      });
    }
  }, []);



  return (
    <section id="home" className="space-y-5 text-center sm:text-left">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
        <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Hi, I'm Lucky Jha.
        </span>
      </h1>
      <p className="text-lg text-foreground/80 hero-subtitle">Full‑Stack Developer • Building intuitive web experiences</p>
    </section>
  );
}


