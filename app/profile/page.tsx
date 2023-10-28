import { authOptions } from "@/lib/utils";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import Profile from "./profile";

const Page = async () => {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/auth");
  return (
    <div className="flex items-center h-full justify-center">
      <Profile />
    </div>
  );
};

export default Page;
