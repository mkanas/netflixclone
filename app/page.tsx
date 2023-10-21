import React from "react";
import Home from "./home/Home";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/utils";

const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/auth");

  return <Home />;
};

export default page;
