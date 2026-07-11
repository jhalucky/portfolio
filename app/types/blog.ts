export type Blog = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string | null;
  tags: string[];
  readTime: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
};
