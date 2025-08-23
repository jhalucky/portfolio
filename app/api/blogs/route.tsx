import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

export async function GET() {
  const contentDir = path.join(process.cwd(), "app/content");
  const files = fs.readdirSync(contentDir);

  const blogs = files
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(contentDir, file);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);

      return {
        slug: file.replace(/\.(md|mdx)$/, ""),
        title: data.title || "Untitled",
        description: data.description || "No description",
        date: data.date || "Unknown date",
        image: data.image || "No image",
      };
    });

  return NextResponse.json(blogs);
}
