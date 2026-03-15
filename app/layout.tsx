import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import DockNav from "./components/DockNav";
export const metadata: Metadata = {
  title: "Lucky Jha",
  description: "Full-Stack Developer. I build things for the web.",
  openGraph: {
    title: "Lucky Jha",
    description: "Full-Stack Developer. I build things for the web.",
    url: "https://luckyworks.in",
    siteName: "Lucky Jha",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucky Jha",
    description: "Full-Stack Developer. I build things for the web.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <DockNav />

        <footer className="max-w-[780px] mx-auto px-8 py-10 mt-24 border-t border-[#111]">
          <div className="flex justify-between items-center">
            <span className="font-mono text-[0.62rem] text-[#252525] tracking-widest">
              LUCKY JHA © {new Date().getFullYear()}
            </span>
            <span className="font-mono text-[0.62rem] text-[#252525] tracking-widest">
              Developed by <a href="https://x.com/Theluckyjha" target="_blank" rel="noopener noreferrer" className="text-[#252525] hover:text-white transition-colors duration-200">Lucky Jha</a>
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
