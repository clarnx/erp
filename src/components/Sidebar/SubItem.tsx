import Link from "next/link";
import { useRouter } from "next/router";
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
  const router = useRouter();

  const [subnav, setSubnav] = useState<boolean>(false);

  const showSubnav: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
    event.preventDefault();

    setSubnav(!subnav);
  };

  const isActive = router.pathname === url;

  const mainLinkStyle = isMainLink
    ? "hover:bg-gray-600"
    : `${
        isSubLink && isActive
          ? "before:absolute before:-left-4 before:top-1/4 before:h-6 before:rounded-sm before:border-2 before:bg-gray-400"
          : ""
      }`;

  return (
    <>
      <div className="relative">
        <Link href={url}>
          <a
            key={id}
            className={`nav-link mt-3 flex transform items-center rounded-md px-4 py-2 capitalize text-gray-400 transition-colors duration-200 hover:text-gray-100 ${mainLinkStyle} ${
              isMainLink && isActive
                ? "nav-link-active bg-gray-600 text-gray-100"
                : !isMainLink && !isSubLink && isActive
                ? "text-gray-100"
                : ""
            }`}
          >
            {Icon && <Icon className="h-5 w-5" />}
            <span className="mx-4 font-primary font-medium">{text}</span>

            <div className="ml-auto" onClick={showSubnav}>
              {subLinks && subnav ? (
                <Chevron className=" h-3 w-3 rotate-180 transition" />
              ) : subLinks && !subnav ? (
                <Chevron className="h-3 w-3 transition" />
              ) : null}
            </div>
          </a>
        </Link>
      </div>

      {subnav &&
        subLinks?.map((link) => {
          return (
            <SubItem
              key={link.id}
              isMainLink={false}
              isSubLink={!!link.subLinks}
              {...link}
            />
          );
        })}
    </>
  );
};

export default SubItem;
