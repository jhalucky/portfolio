# Lucky Jha — Portfolio

Personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Instrument Serif + Geist + DM Mono (Google Fonts)
- GitHub Contributions API (jogruber.de)

## Structure

```
app/
  page.tsx              ← Home (hero, stack, experience, contributions, featured projects, recent posts)
  projects/page.tsx     ← All projects
  blog/page.tsx         ← All blog posts
  blog/[slug]/page.tsx  ← Individual blog post
  components/
    Navbar.tsx
    TechMarquee.tsx     ← Tilted, dual-row sliding tech stack
    ContribGraph.tsx    ← GitHub contributions grid
    ProjectCard.tsx
  lib/
    data.ts             ← ALL content lives here — edit this file
    github.ts           ← GitHub API fetcher
  globals.css
```

## Quick Start

```bash
npm install
npm run dev
```

## Customising

**All your content is in one file: `app/lib/data.ts`**

- Change `GITHUB_USERNAME` to your GitHub handle
- Edit `bio` for name, description, socials
- Edit `experience` for work history
- Edit `featuredProjects` for projects (set `featured: true` for top 4)
- Edit `blogPosts` for blog entries

## Adding your photo

Replace the placeholder in `app/page.tsx`:

```tsx
// Find the photo placeholder div and replace with:
<Image src="/photo.jpg" alt="Lucky Jha" width={140} height={170} className="object-cover" />
```

Then drop `photo.jpg` into `/public`.

## Deployment

```bash
npm run build
# Deploy to Vercel, Railway, or any Node host
```
