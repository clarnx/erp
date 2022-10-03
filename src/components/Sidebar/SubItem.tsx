import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

import clsxm from "@/utils/clsxm";

import type { SidebarLink } from "./types";
import Icon from "../Icon";

const SubItem: FC<SidebarLink> = ({
  id,
  url,
  text,
  icon,
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

  const showCollapsed: React.MouseEventHandler<HTMLAnchorElement> = (event) => {
    if (subLinks) {
      event.preventDefault();
      event.stopPropagation();

      setIsCollapsed((prev) => !prev);
    }
  };

  return (
    <>
      <div className="relative" data-testid="sub-item">
        <Link href={routeLink}>
          <a
            key={id}
            onClick={showCollapsed}
            className={clsxm(
              "nav-link mt-3 flex transform items-center rounded-md px-4 py-2 capitalize text-primary-300 transition-colors duration-200 hover:text-primary-100",
              isMainLink && "hover:bg-tertiary-200",
              isActiveMainLink &&
                "nav-link-active bg-tertiary-200 text-primary-100",
              isActiveChildLink && "text-primary-100",
              isActiveSubLink &&
                "before:absolute before:-left-4 before:top-1/4 before:h-6 before:rounded-sm before:border-2 before:bg-primary-200"
            )}
          >
            {icon ? (
              <Icon src={`/svg/${icon}.svg`} height={19} width={19} />
            ) : null}

            <span className="mx-4 font-primary font-medium">{text}</span>

            <div className="ml-auto">
              {subLinks && isCollapsed ? (
                <Icon
                  src="/svg/Chevron.svg"
                  height={12}
                  width={12}
                  className="rotate-180 transition"
                />
              ) : subLinks && !isCollapsed ? (
                <Icon
                  src="/svg/Chevron.svg"
                  height={12}
                  width={12}
                  className="transition"
                />
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
