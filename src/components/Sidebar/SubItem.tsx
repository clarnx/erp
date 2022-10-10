import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

import clsxm from "@/utils/clsxm";

import type { SidebarLink } from "./types";
import Icon from "../Icon";
import Typography from "../Typography";

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
  const isActiveMainLink = isMainLink && router.pathname === url;
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
              "nav-link mt-[0.563rem] flex min-h-[2.875rem] transform items-center rounded-md px-4 py-[0.625rem] capitalize text-whisper transition-colors duration-200 hover:text-superSilver",
              isMainLink && "hover:bg-shishaCoal",
              (isActiveMainLink || isActiveChildLink) &&
                "nav-link-active bg-shishaCoal text-superSilver",
              isActiveChildLink && "nav-link-active text-superSilver",
              isActiveSubLink &&
                "nav-link-active before:absolute before:-left-[0.4rem] before:top-1/4 before:h-6 before:rounded-sm before:border-2 before:bg-adirondack"
            )}
          >
            {icon ? (
              <Icon src={`/svg/${icon}.svg`} height={19} width={19} />
            ) : null}

            <Typography
              color="text-whisper"
              variant="p"
              size="text-base"
              className="mx-4 font-medium"
            >
              {text}
            </Typography>

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
