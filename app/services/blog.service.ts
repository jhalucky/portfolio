import { prisma } from "@/app/lib/prisma";

export async function getPublishedBlogs() {
  return prisma.blog.findMany({
    where: {
      published: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getBlog(slug: string) {
  return prisma.blog.findFirst({
    where: {
      slug,
      published: true,
    },
  });
}

export async function createBlog(data: {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  tags: string[];
  coverImage?: string;
}) {
  return prisma.blog.create({
    data,
  });
}

export async function updateBlog(
  id: string,
  data: Partial<{
    title: string;
    excerpt: string;
    content: string;
    tags: string[];
    coverImage: string;
    published: boolean;
  }>
) {
  return prisma.blog.update({
    where: {
      id,
    },
    data,
  });
}

export async function deleteBlog(id: string) {
  return prisma.blog.delete({
    where: {
      id,
    },
  });
}