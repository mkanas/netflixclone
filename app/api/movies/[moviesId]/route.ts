import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export const GET = async (request: NextRequest, response: NextResponse) => {
  try {
    await serverAuth(request);

    const searchParams = request.nextUrl.searchParams;
    const movieId = searchParams.get("movieId");

    if (typeof movieId !== "string") {
      throw new Error("Invalid ID");
    }
    if (!movieId) {
      throw new Error("Invalid ID");
    }

    const movie = await prismadb.movie.findUnique({
      where: {
        id: movieId,
      },
    });
    if (!movie) {
      throw new Error("Invalid ID");
    }

    return NextResponse.json(movie, { status: 200 });
  } catch (error) {
    console.log(error);
  }
};
