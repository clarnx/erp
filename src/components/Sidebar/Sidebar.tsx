import React, { FC } from "react";

import { links } from "./config";
import SubItem from "./SubItem";
import Icon from "../Icon";
import Typography from "../Typography";

const Sidebar: FC = () => {
  return (
    <aside className="fixed top-0 left-0 " data-testid="sidebar">
      <div className="relative flex h-screen min-h-screen w-64 flex-col overflow-y-auto border-r bg-primary-400 px-4 py-8">
        <div className="flex w-full justify-center">
          <Icon src="/svg/Logo.svg" height={16} width={112} />
        </div>

        <div className="mt-12 flex flex-1 flex-col justify-between">
          <nav className="text">
            <Typography
              color="text-primary-300"
              variant="p"
              size="text-xs"
              fontFamily="font-secondary"
              className="font-medium uppercase"
            >
              menu
            </Typography>

            {links.map((link) => (
              <SubItem key={link.id} {...link} />
            ))}
          </nav>

          <button className="nav-link mt-3 flex transform cursor-pointer items-center rounded-md px-4 py-2 capitalize text-primary-300 transition-colors duration-200 hover:bg-tertiary-200 hover:text-primary-100">
            <Icon src="/svg/Logout.svg" height={19} width={19} />

            <Typography
              color="text-primary-300"
              variant="p"
              size="text-base"
              className="mx-4 font-medium"
            >
              Logout
            </Typography>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
