import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

import clsxm from "@/utils/clsxm";

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

  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

  const hasParentLink = subLinks && router.pathname.includes(url);
  const isActive = router.pathname === url || hasParentLink;
  const isActiveSubLink = isSubLink && isActive;
  const isActiveMainLink = isMainLink && isActive;
  const isActiveChildLink = !isMainLink && !isSubLink && isActive;
  const routeLink = !subLinks ? url : "";

  useEffect(() => {
    if (hasParentLink) setIsCollapsed(true);
    if (!isActive && subLinks) setIsCollapsed(false);
  }, [hasParentLink, isActive, subLinks]);

  const showCollapsed: React.MouseEventHandler<HTMLAnchorElement> = () => {
    if (subLinks) setIsCollapsed((prev) => !prev);
  };

  return (
    <>
      <div className="relative" data-testid="sub-item">
        <Link href={routeLink}>
          <a
            key={id}
            onClick={showCollapsed}
            className={clsxm(
              "nav-link mt-3 flex transform items-center rounded-md px-4 py-2 capitalize text-gray-400 transition-colors duration-200 hover:text-gray-100",
              isMainLink && "hover:bg-gray-600",
              isActiveMainLink && "nav-link-active bg-gray-600 text-gray-100",
              isActiveChildLink && "text-gray-100",
              isActiveSubLink &&
                "before:absolute before:-left-4 before:top-1/4 before:h-6 before:rounded-sm before:border-2 before:bg-gray-400"
            )}
          >
            {Icon ? <Icon className="h-5 w-5" /> : null}

            <span className="mx-4 font-primary font-medium">{text}</span>

            <div className="ml-auto">
              {subLinks && isCollapsed ? (
                <Chevron className=" h-3 w-3 rotate-180 transition" />
              ) : subLinks && !isCollapsed ? (
                <Chevron className="h-3 w-3 transition" />
              ) : null}
            </div>
          </a>
        </Link>
      </div>

      {isCollapsed &&
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
