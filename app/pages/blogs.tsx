import Blogs from "@/components/Blogs";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="mx-auto max-w-5xl space-y-20 px-6 py-10 sm:px-8" id="projectspage">
        <Blogs showAll={true}/>
      </main>
      <Footer />
    </div>
  );
}
