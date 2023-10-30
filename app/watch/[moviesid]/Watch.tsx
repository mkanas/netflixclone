"use client";
import React from "react";
import { useRouter } from "next/navigation";
import useMovie from "hooks/useMovie";
import { AiOutlineAlignLeft } from "react-icons/ai";

interface Props {
  moviesid: string;
}

export const Watch = ({ moviesid }: Props) => {
  const router = useRouter();
  const { data } = useMovie(moviesid);
  return (
    <div className="h-screen w-screen bg-black">
      <nav className="fixed w-full p-4 z-10 flex flex-row  items-center gap-8 bg-black bg-opacity-70">
        <AiOutlineAlignLeft
          onClick={() => router.push("/")}
          className="text-white cursor-pointer"
          size={40}
        />
        <p className="text-white text-1xl md:text-3xl fnt-bold ">
          <span className="font-light">Watching:</span>
          {data?.title}
        </p>
      </nav>
      <video
        autoPlay
        controls
        className="h-full w-full"
        src={data?.videoUrl}
      ></video>
    </div>
  );
};

export default Watch;
