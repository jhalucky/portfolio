import Projects from "@/components/Projects";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-20 px-6 py-10 sm:px-8" id="projectspage">
      <Projects showAll={true} /> {/* show all projects */}
    </main>
  );
}
