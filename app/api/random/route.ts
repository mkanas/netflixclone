import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export const GET = async (request: NextRequest) => {
  try {
    await serverAuth(request);
    const movieCount = await prismadb.movie.count();
    const randomIndex = Math.floor(Math.random() * movieCount);

    const randomMovie = await prismadb.movie.findMany({
      take: 1,
      skip: randomIndex,
    });

    return NextResponse.json(randomMovie[0], { status: 200 });
  } catch (error) {
    return new NextResponse("internal server error", { status: 500 });
  }
};
