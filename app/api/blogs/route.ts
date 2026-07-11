import { NextRequest, NextResponse } from "next/server";
import slugify from "slugify";
import { prisma } from "@/app/lib/prisma";

export async function GET() {
  try {
    const blogs = await prisma.blog.findMany({
      where: {
        published: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(blogs);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      title,
      excerpt,
      content,
      tags,
      coverImage,
      readTime,
    } = body;

    if (!title || !excerpt || !content) {
      return NextResponse.json(
        {
          error: "Title, excerpt and content are required.",
        },
        {
          status: 400,
        }
      );
    }

    const slug = slugify(title, {
      lower: true,
      strict: true,
      trim: true,
    });

    const exists = await prisma.blog.findUnique({
      where: {
        slug,
      },
    });

    if (exists) {
      return NextResponse.json(
        {
          error: "A blog with this title already exists.",
        },
        {
          status: 400,
        }
      );
    }

    const blog = await prisma.blog.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        coverImage: coverImage || null,
        tags: tags || [],
        readTime: readTime || "1 min read",
        published: true,
      },
    });

    return NextResponse.json(blog, {
      status: 201,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}