"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import ProjectsPage from "@/app/projects/page";

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleToggle = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(next);
    // Fallback: ensure html class updates immediately
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", next === "dark");
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-white/20 dark:bg-black/20 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6 sm:px-8">
        <Link href="#home" className="text-sm font-semibold tracking-tight">
          Lucky Jha
        </Link>
        <nav className="flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Home</Link>
          <Link href="/projects" className="hover:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Projects</Link>
          <Link href="#blogs" className="hover:text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Blogs</Link>
          <button
            aria-label="Toggle theme"
            className="md:inline-flex h-8 w-8 items-center justify-center rounded-md border hover:opacity-80 "
            onClick={handleToggle}
          >
            {mounted && (resolvedTheme === "dark" ? <Sun className="h-4 w-4 mx-2" /> : <Moon className="h-4 w-4 mx-2" />)}
          </button>
        </nav>
      </div>
    </header>
  );
}


