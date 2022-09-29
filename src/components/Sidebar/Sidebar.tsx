import React from "react";

import Logo from "@/assets/svg/Logo.svg";
import Logout from "@/assets/svg/Logout.svg";

import { links } from "./config";
import SubItem from "./SubItem";

const Sidebar = () => {
  return (
    <aside className="fixed top-0 left-0 ">
      <div className="relative flex h-screen min-h-screen w-64 flex-col overflow-y-auto border-r bg-gray-700 px-4 py-8">
        <div className="flex w-full justify-center">
          <Logo className="h-4 w-28 justify-center" />
        </div>

        <div className="mt-12 flex flex-1 flex-col justify-between">
          <nav className="text">
            <p className="font-secondary text-xs font-medium uppercase text-gray-400">
              menu
            </p>

            {links.map((link) => (
              <SubItem key={link.id} {...link} />
            ))}
          </nav>

          <button className="nav-link mt-3 flex transform cursor-pointer items-center rounded-md px-4 py-2 capitalize text-gray-400 transition-colors duration-200 hover:bg-gray-600 hover:text-gray-100">
            <Logout className="h-5 w-5" />
            <span className="mx-4 font-primary font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
