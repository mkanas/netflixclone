import bcrypt from "bcrypt";
import { NextResponse, NextRequest } from "next/server";
import prismadb from "@/lib/prismadb";

export const POST = async (req: NextRequest) => {
  if (req.method !== "POST") {
    return new NextResponse("No data", { status: 405 });
  }
  try {
    const { email, name, password } = await req.json();
    if (!email || !name || !password)
      return new NextResponse("email, name or password required", {
        status: 400,
      });

    const existingUser = await prismadb.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return NextResponse.json({ status: 422, error: "Email taken" });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await prismadb.user.create({
      data: {
        email,
        name,
        hashedPassword,
        image: "",
        emailVerified: new Date(),
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.log(error);
    return new NextResponse("internal server error", { status: 500 });
  }
};
