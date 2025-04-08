"use client";

import { links, NavLinksProps } from "@/app/utils/navlinks";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen w-[256px] bg-[#1f2937] text-white  flex flex-col justify-between">
      <div>
        <h1 className="p-4 text-2xl text-[#a855f7] font-bold border border-b-neutral-200/20 border-t-0 border-l-0 border-r-0 ">
          Monogatari Hub
        </h1>
        <ul className="flex flex-col justify-center px-2 py-4 space-y-1">
          {links.map((link: NavLinksProps) => (
            <li
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition-colors duration-200"
              key={link.id}
            >
              <Link href={link.url}>{link.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex p-4 items-center h-[68.8px] gap-2 border border-t-neutral-200/20 border-b-0 border-l-0 border-r-0">
        <Image className="rounded-full" src={'https://i.pinimg.com/736x/d0/40/00/d04000f788647fd18af54fcbeaa05147.jpg'} alt="pfp" width={32} height={32} />
        <div className="user-info">
          <div className="username text-sm">Nikhil Oli</div>
          <div className="email text-xs text-[#9ca3af]">nikhiloli107@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
