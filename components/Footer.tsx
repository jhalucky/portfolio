"use client";

import React from "react";
import Link from "next/link";
import { Github, Twitter, Instagram, Hash, Coffee, Youtube } from "lucide-react";

export default function Footer() {
  const socialItem = (
    href: string,
    Icon: React.ComponentType<{ className?: string }>,
    isPlaceholder?: boolean
  ) => (
    <Link
      href={href}
      target={isPlaceholder ? undefined : "_blank"}
      rel={isPlaceholder ? undefined : "noreferrer"}
      className={`inline-flex items-center justify-center rounded-lg border border-foreground/20 p-3 text-sm transition-all duration-300 ${
        isPlaceholder 
          ? "opacity-50 cursor-not-allowed" 
          : "hover:bg-gradient-to-r hover:from-blue-500 hover:via-cyan-500 hover:to-purple-500 hover:border-transparent hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/50"
      }`}
    >
      <Icon className="h-5 w-5" />
    </Link>
  );

  return (
    <footer className="border-t border-foreground/10 bg-background/50 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <p className="text-lg font-semibold tech-gradient">
              Follow me on
            </p>
            <div className="flex gap-3">
              {socialItem("https://github.com/jhalucky", Github)}
              {socialItem("https://x.com/Theluckyjha", Twitter)}
              {socialItem("https://instagram.com/theluckyjha", Instagram)}
              {socialItem("#", Hash)}
              {socialItem("#", Coffee, true)}
              {socialItem("#", Youtube, true)}
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-foreground/70">
            <p>© {new Date().getFullYear()} Lucky Jha. All rights reserved.</p>
            <p className="text-center md:text-right">
              Designed and developed by{" "}
              <Link
                href="https://x.com/Theluckyjha"
                target="_blank"
                rel="noreferrer"
                className="tech-gradient font-medium hover:underline"
              >
                Lucky Jha
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

