import Blogs from "@/components/Blogs";

export default function BlogPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-20 px-6 py-10 sm:px-8" id="projectspage">
      <Blogs showAll={true}/>
    </main>
  );
}
