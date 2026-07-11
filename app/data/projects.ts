export interface Project {
  slug: string;
  title: string;
  description: string;
  tech: string[];
  live: string;
  repo: string | null;
  featured: boolean;
}

export const featuredProjects: Project[] = [
  // We'll add your projects here.
];