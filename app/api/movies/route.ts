import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";
import prismadb from "@/lib/prismadb";

export const GET = async (request: NextRequest) => {
  try {
    await serverAuth(request);

    const movies = await prismadb.movie.findMany();

    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    return new NextResponse("internal server error", { status: 400 });
  }
};
