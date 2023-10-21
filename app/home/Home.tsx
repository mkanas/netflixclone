"use client";

import useCurrentUser from "@/hooks/useCurrentUser";
import { signOut } from "next-auth/react";

export default function Home() {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-white">Home Page</h1>
      <p className="text-white">Logged in as :{user?.name}</p>
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        logout
      </button>
    </>
  );
}
