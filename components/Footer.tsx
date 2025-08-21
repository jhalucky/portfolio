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
    <footer className="border-t py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between sm:px-8">
        <p className="text-sm text-foreground/70">© {new Date().getFullYear()} Lucky Jha</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialItem("https://github.com/jhalucky", Github)}
          {socialItem("https://x.com/Theluckyjha", Twitter)}
          {socialItem("https://instagram.com/theluckyjha", Instagram)}
          {socialItem("#", Hash)}
          {socialItem("#", Coffee, true)}
          {socialItem("#", Youtube, true)}
        </div>
      </div>
    </footer>
  );
}


