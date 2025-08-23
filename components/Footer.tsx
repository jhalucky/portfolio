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
      className={`inline-flex items-center justify-center rounded-md border p-2 text-sm ${
        isPlaceholder ? "opacity-70" : "hover:bg-foreground/5"
      }`}
    >
      <Icon className="h-4 w-4" />
    </Link>
  );

  return (
    <footer className="py-8">
      <div className="mx-auto flex flex-col md:flex-row max-w-5xl items-center gap-4 px-6 sm:justify-between sm:px-8">
        <div className="flex flex-col items-center justify-center gap-3">
          <p className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Follow me on
          </p>
          <div className="flex gap-2">
            <div className="icons">{socialItem("https://github.com/jhalucky", Github)}</div>
            <div className="icons">{socialItem("https://x.com/Theluckyjha", Twitter)}</div>
            <div className="icons">{socialItem("https://instagram.com/theluckyjha", Instagram)}</div>
            <div className="icons">{socialItem("#", Hash)}</div>
            <div className="icons">{socialItem("#", Coffee, true)}</div>
            <div className="icons">{socialItem("#", Youtube, true)}</div>
          </div>
        </div>

        <div className="flex md:flex-col text-[10px] md:text-[15px] gap-5 md:gap-5 items-center md:items-end">
          <p className="text-foreground/70">© {new Date().getFullYear()} Lucky Jha</p>
          <p>
            Designed and developed by{" "}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer">
              <a href="https://x.com/Theluckyjha" target="_blank" rel="noreferrer">
                Lucky Jha
              </a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

