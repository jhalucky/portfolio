export const GITHUB_USERNAME = "jhalucky";

export const bio = {
  name: "Lucky Jha",
  age: 20,
  tagline: "Full‑Stack Developer",
description: [
  "Product-driven developer who enjoys turning ideas into real, working software. I focus on building clean, practical solutions rather than just prototypes.",
  "Currently exploring systems across full-stack development, machine learning, and developer tools — building projects that combine data, automation, and good user experience.",
  "Previously built projects ranging from AI-powered tools and APIs to full web platforms with authentication, databases, and scalable backend systems.",
  "Comfortable working across the stack: JavaScript, Python, React, Node.js, and ML workflows. I enjoy solving real problems and shipping products end-to-end.",
  "When I'm not coding, I'm studying system design, improving my problem-solving skills, or experimenting with new ideas that could become the next project.",
],
  status: "Open to Work: Full-Time, Freelance, or Collabs.",
  email: "jhalucky61@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/jhalucky" },
    { label: "Twitter", href: "https://x.com/Theluckyjha" },
    { label: "LinkedIn", href: "https://linkedin.com/in/theluckyjha" },
  ],
};

export const stack = [
  "JavaScript", "TypeScript", "React", "Next.js", "Node.js",
  "TailwindCSS", "PostgreSQL", "MongoDB", "Prisma", "Redis",
  "Docker", "AWS", "Vercel", "Firebase", "GraphQL",
  "Python", "Django", "Selenium", "OpenAI SDK", "LangFuse",
];

// export const experience = [
//   {
//     company: "Bez",
//     role: "Software Engineer",
//     period: "2024 — Present",
//     description: "Helps you to create original jewel designs, visuals, and marketing materials using AI agents.",
//     tech: ["Next.js", "TypeScript", "GCP", "OpenAI SDK", "FastAPI", "Express", "LangFuse", "BullMQ", "Redis", "TailwindCSS", "shadcn"],
//   },
//   {
//     company: "CallPrep",
//     role: "Software Engineer (Intern)",
//     period: "2024",
//     description: "Built a scraper that processed 60k bank PDFs/hour with RAG-powered search, implemented a chatbot.",
//     tech: ["Django", "Celery", "Redis", "React", "Selenium"],
//   },
//   {
//     company: "EOD Adventure Park",
//     role: "Full Stack Developer",
//     period: "2023 — 2024",
//     description: "Solo-built the entire software and infra of EOD Adventure Park, Delhi. Built CRM, dashboards, chatbots, landing pages.",
//     tech: ["AWS", "Nginx"],
//   },
// ];

export const featuredProjects = [
  {
    slug: "slugify",
    title: "Slugify",
    description: "A simple url shortener with a clean interface and powerful analytics dashboard.",
    tech: ["Typescript", "Next.js", "Prisma", "PostgreSQL", "TailwindCSS"],
    live: "https://slugify.luckyworks.in",
    repo: "https://github.com/jhalucky/Slugify",
    featured: true,
  },
  {
    slug: "inkspire",
    title: "InkSpire",
    description: "Write and read blogs and tip your favourite authors.",
    tech: ["Next.js", "ORM", "ODM", "Payment Gateway"],
    live: "https://inkspire-yo.vercel.app",
    repo: "https://github.com/jhalucky/InkSpire",
    featured: true,
  },
  {
    slug: "ideias",
    title: "Ideias",
    description: "A place where people can dump their project ideas and get real-time votes and opinions.",
    tech: ["Next.js", "Supabase", "Prisma"],
    live: "https://ideiaas.vercel.app",
    repo: "https://github.com/jhalucky/ideias",
    featured: true,
  },
  {
    slug: "devorax",
    title: "DevoraX",
    description: "Practice DSA, learn core subjects, skill development, and placement preparation.",
    tech: ["Next.js", "TypeScript", "ORM"],
    live: "https://devorax.vercel.app",
    repo: "https://github.com/jhalucky/devoraX",
    featured: true,
  },
  {
    slug: "chatxmeme",
    title: "ChatxMeme",
    description: "A fake chat generator. Create realistic chat conversations for fun, pranks, or storytelling with an easy-to-use interface.",
    tech: ["React", "Tailwind CSS", "OpenAI API"],
    live: "https://chatxmeme.vercel.app",
    repo: "https://github.com/jhalucky/chatxmeme",
    featured: true,
  },
  {
    slug: "meal-finder",
    title: "Meal Finder",
    description: "Find delicious recipes and meal ideas with a beautiful, intuitive interface.",
    tech: ["React", "API", "Tailwind CSS"],
    live: "https://meal-finder-yourmeal.vercel.app",
    repo: "https://github.com/jhalucky/meal-finder",
    featured: true,
  },
];

export const blogPosts = [
  {
    slug: "get-unlimited-claude-code",
    title: "Get Unlimited Claude Code for $3",
    date: "October 10, 2025",
    readTime: "1 min read",
    excerpt: "Last week the Chinese company z.ai released their flagship coding model glm-4.5.",
    tags: ["ai", "vibe-coding", "javascript", "nextjs"],
  },
  {
    slug: "gonna-change-mine",
    title: "I'm gonna change mine.",
    date: "October 9, 2025",
    readTime: "2 min read",
    excerpt: "Back in October 2024, I had sensed that I was wasting my time. All I required was to lock in but I needed someone to tell this to me.",
    tags: ["personal"],
  },
  {
    slug: "stop-using-managed-services",
    title: "Stop using managed services or remain noob forever",
    date: "September 8, 2025",
    readTime: "2 min read",
    excerpt: "The goal is to deploy this flask /inja2 web app on the cheapest possible vps and sleep.",
    tags: ["docker", "python", "postgresql", "devops", "coolify"],
  },
  {
    slug: "2-5-vps",
    title: "$2.5 VPS",
    date: "September 1, 2025",
    readTime: "3 min read",
    excerpt: "The goal is to deploy this flask /inja2 web app on the cheapest possible vps and sleep.",
    tags: ["devops", "python", "coding", "linux", "flask"],
  },
];
