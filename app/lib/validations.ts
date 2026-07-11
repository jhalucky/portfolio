import { z } from "zod";

export const blogSchema = z.object({
  title: z.string().min(3),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  tags: z.array(z.string()),
});