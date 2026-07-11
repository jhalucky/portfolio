"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function DockNav() {
  const path = usePathname();
  const [dark, setDark] = useState(() => {
  if (typeof window === "undefined") return false;
  return localStorage.getItem("theme") === "dark";
});

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light") {
      setDark(false);
      document.documentElement.classList.add("light");
    }
  }, []);

  const toggleTheme = () => {
    setDark((prev) => {
      const next = !prev;
      localStorage.setItem("theme", next ? "dark" : "light");
      document.documentElement.classList.toggle("light", !next);
      return next;
    });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav className="flex items-center gap-1 px-3 py-2.5 rounded-full border border-[#1f1f1f] bg-#f5f5f5/10 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.6)]">

        {/* Home */}
        <DockItem href="/" active={path === "/"} label="Home">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
            <path d="M9 21V12h6v9"/>
          </svg>
        </DockItem>

        {/* Projects */}
        <DockItem href="/projects" active={path === "/projects"} label="Projects">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="7" height="7" rx="1"/>
            <rect x="14" y="3" width="7" height="7" rx="1"/>
            <rect x="3" y="14" width="7" height="7" rx="1"/>
            <rect x="14" y="14" width="7" height="7" rx="1"/>
          </svg>
        </DockItem>

        <Divider />

        {/* GitHub */}
        <DockItem href="https://github.com/jhalucky" external label="GitHub">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
          </svg>
        </DockItem>

        {/* X / Twitter */}
        <DockItem href="https://x.com/Theluckyjha" external label="X">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </DockItem>

        {/* Instagram */}
        <DockItem href="https://instagram.com/theluckyjha" external label="Instagram">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
          </svg>
        </DockItem>

        {/* Blog / Writing */}
        <DockItem href="/blog" active={path === "/blog"} label="Writing">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 016.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/>
            <line x1="9" y1="7" x2="15" y2="7"/>
            <line x1="9" y1="11" x2="15" y2="11"/>
          </svg>
        </DockItem>

        {/* Write Blog */}
      <DockItem
        href="/admin"
        active={path.startsWith("/admin")}
        label="Write"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 20h9"/>
          <path d="M16.5 3.5a2.12 2.12 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/>
        </svg>
      </DockItem>

        <Divider />

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          title={dark ? "Light mode" : "Dark mode"}
          className="w-9 h-9 flex items-center justify-center rounded-xl text-[#3a3a3a] hover:text-[#aaa] hover:bg-[#161616] transition-all duration-200"
        >
          {dark ? (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4"/>
              <line x1="12" y1="2" x2="12" y2="4"/>
              <line x1="12" y1="20" x2="12" y2="22"/>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
              <line x1="2" y1="12" x2="4" y2="12"/>
              <line x1="20" y1="12" x2="22" y2="12"/>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            </svg>
          ) : (
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"/>
            </svg>
          )}
        </button>

      </nav>
    </div>
  );
}

function DockItem({
  href, active = false, external = false, label, children
}: {
  href: string;
  active?: boolean;
  external?: boolean;
  label: string;
  children: React.ReactNode;
}) {
  const cls = `relative w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200
    ${active
      ? "text-white bg-[#1a1a1a]"
      : "text-[#3a3a3a] hover:text-[#aaa] hover:bg-[#161616]"
    }`;

  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" title={label} className={cls}>
      {children}
      {active && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white" />}
    </a>
  ) : (
    <Link href={href} title={label} className={cls}>
      {children}
      {active && <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-white" />}
    </Link>
  );
}

function Divider() {
  return <div className="w-px h-5 bg-[#1a1a1a] mx-1" />;
}