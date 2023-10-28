"use client";

import React from "react";
import { signOut } from "next-auth/react";
import Image from "next/image";

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) return null;
  return (
    <div className="bg-black w-56 absolute top-14 right-14 py-5 flex-col border-2 border-gray-800 flex">
      <div className="flex flex-col gap-3">
        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
          <Image
            src="/assets/images/avatar.png"
            alt=""
            height={40}
            width={40}
          />
          <p className="text-white text-sm group-hover/item:underline ">
            username
          </p>
        </div>
        <hr className="bg-gray-600 border-0 h-px my-4 " />
        <div
          onClick={() => signOut()}
          className="px-3 text-center text-white text-sm hover:underline"
        >
          Sign out of Netflix
        </div>
      </div>
    </div>
  );
};

export default AccountMenu;
