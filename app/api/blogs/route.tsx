import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { NextResponse } from "next/server";

export async function GET() {
  const contentDir = path.join(process.cwd(), "app/content");
  const files = fs.readdirSync(contentDir);

  const blogs = files.map((file) => {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: file.replace(/\.md$/, ""),
      title: data.title || "Untitled",
      description: data.description || "No description",
      date: data.date || "Unknown date",
    };
  });

  return NextResponse.json(blogs);
}
