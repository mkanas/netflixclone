import { NextRequest, NextResponse } from "next/server";
import serverAuth from "@/lib/serverAuth";

export const GET = async (request: NextRequest) => {
  if (request.method !== "GET") {
    return new NextResponse("No data", { status: 405 });
  }
  try {
    const { currentUser } = await serverAuth(request);
    return NextResponse.json(currentUser, { status: 200 });
  } catch (error) {
    return new NextResponse("internal server error", { status: 500 });
  }
};
