import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ Await params first
  const { slug } = await params;

  // Point directly to app/content folder
  const filePath = path.join(process.cwd(), "app/content", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);

  return (
    <div className="prose prose-lg dark:prose-invert mx-auto px-4 py-12">
       <h1 className="text-3xl md:text-5xl font-extrabold text-center mb-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent drop-shadow-md">
      {data.title}</h1>
      <div className="flex justify-center mb-2">
      <img src={data.images} className="max-h-screen rounded"/>
      </div>
      <p className="text-center text-gray-500 mb-8">
        {data.date ? new Date(data.date).toDateString() : ""}
      </p>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}


