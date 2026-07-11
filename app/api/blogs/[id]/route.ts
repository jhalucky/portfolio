import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/app/lib/prisma";

interface Props {
  params: {
    id: string;
  };
}

export async function PATCH(
  req: NextRequest,
  { params }: Props
) {
  try {
    const body = await req.json();

    const blog = await prisma.blog.update({
      where: {
        id: params.id,
      },
      data: body,
    });

    return NextResponse.json(blog);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to update blog.",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: Props
) {
  try {
    await prisma.blog.delete({
      where: {
        id: params.id,
      },
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Failed to delete blog.",
      },
      {
        status: 500,
      }
    );
  }
}