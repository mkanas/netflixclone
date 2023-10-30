import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    await serverAuth(request as NextRequest);

    const movieId = params.id;

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!movie) {
      return NextResponse.json("movie not found", { status: 404 });
    }

    return NextResponse.json(movie, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
