"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import useCurrentUser from "@/hooks/useCurrentUser";

const Profile = () => {
  const router = useRouter();
  const { data: user } = useCurrentUser();

  return (
    <div>
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who is Watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <div onClick={() => router.push("/")}>
            <div className="group flex-row w-44 mx-auto">
              <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
                <Image
                  src="/assets/images/avatar.png"
                  width={200}
                  height={200}
                  alt="avatar"
                />
              </div>
              <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
                {user?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
