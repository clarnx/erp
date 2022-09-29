import React, { FC, useState } from "react";

import Chevron from "@/assets/svg/Chevron.svg";

import type { SidebarLink } from "./types";

const SubItem: FC<SidebarLink> = ({
  id,
  url,
  text,
  Icon,
  isMainLink,
  isSubLink,
  subLinks,
}) => {
  const [subnav, setSubnav] = useState<boolean>(false);

  const showSubnav: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.stopPropagation();
    event.preventDefault();

    setSubnav(!subnav);
  };

  const mainLinkStyle = isMainLink
    ? "hover:bg-gray-600 hover:text-gray-100"
    : `${
        isSubLink
          ? "before:absolute before:-left-4 before:top-1/4 before:h-1/2 before:rounded-sm before:border-2 before:bg-gray-400"
          : ""
      } hover:text-gray-100`;

  return (
    <>
      <div className="relative">
        <a
          key={id}
          href={url}
          onClick={showSubnav}
          className={`nav-link mt-3 flex transform items-center rounded-md px-4 py-2 capitalize text-gray-400 transition-colors duration-200 ${mainLinkStyle} ${
            subnav ? "nav-link-active bg-gray-600 text-gray-100" : ""
          }`}
        >
          {Icon && <Icon className="h-5 w-5" />}
          <span className="mx-4 font-primary font-medium">{text}</span>

          <div className="ml-auto">
            {subLinks && subnav ? (
              <Chevron className=" h-3 w-3 rotate-180 transition" />
            ) : subLinks && !subnav ? (
              <Chevron className="h-3 w-3 transition" />
            ) : null}
          </div>
        </a>
      </div>

      {subnav &&
        subLinks?.map((link) => {
          return <SubItem key={link.id} isMainLink={false} {...link} />;
        })}
    </>
  );
};

export default SubItem;
