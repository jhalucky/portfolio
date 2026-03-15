"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Index" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Writing" },
];

export default function Navbar() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#111]" : ""
    }`}>
      <div className="max-w-[780px] mx-auto px-8 h-12 flex items-center justify-between">

        {/* Left — wordmark */}
        <Link href="/" className="font-mono text-[0.62rem] text-[#2a2a2a] hover:text-[#888] transition-colors tracking-[0.2em] uppercase">
          Lucky Jha
        </Link>

        {/* Right — links */}
        <div className="flex items-center gap-7">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className={`nav-item ${path === l.href ? "active" : ""}`}>
              {l.label}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}
