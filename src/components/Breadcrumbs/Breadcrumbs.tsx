import Link from "next/link";
import React, { FC, useEffect, useState } from "react";

import type { BreadcrumbItem, BreadcrumbProps } from "./types";
import Typography from "../Typography";

const Breadcrumbs: FC<BreadcrumbProps> = ({ items }) => {
  const [currPath, setCurrPath] = useState<string | null>(null);
  const [stateItems, setStateItems] = useState(items);
  const [selectedItem, setSelectedItem] = useState<BreadcrumbItem | null>(
    items.find((x) => x.isActive) ?? null
  );

  const handleClick = (itemParam: BreadcrumbItem) => () => {
    selectedItem?.id != itemParam.id && reArrangeTabItems(itemParam);
  };

  const reArrangeTabItems = (newSelectedItem: BreadcrumbItem) => {
    setStateItems((current) =>
      current.map((obj) => {
        const aa = { ...obj, isActive: false };

        if (
          (selectedItem?.id !== newSelectedItem.id &&
            currPath === newSelectedItem.url.split("/").pop() &&
            obj.id) === newSelectedItem.id
        ) {
          return { ...aa, isActive: true };
        }
        return aa;
      })
    );

    setSelectedItem(newSelectedItem);
  };

  useEffect(() => {
    setCurrPath(window.location.pathname.split("/").pop() ?? null);
  }, []);

  return (
    <>
      <nav className="m-4 rounded p-3">
        <ol className="list-reset flex h-[1.625rem] w-[23.188rem]">
          {stateItems &&
            stateItems.map((link, i, row) => (
              <li className="hover: cursor-pointer" key={link.id}>
                <Link href={link.url}>
                  <a onClick={handleClick(link)}>
                    <Typography
                      size="text-sm"
                      variant="span"
                      fontFamily="font-tertiary"
                      color={
                        link.isActive
                          ? "text-blackOut font-bold"
                          : "text-improbable"
                      }
                      className="font-normal"
                    >
                      {link.text}
                    </Typography>
                  </a>
                </Link>
                {i + 1 < row.length && <span className="mx-2">/</span>}
              </li>
            ))}
        </ol>
      </nav>
    </>
  );
};

export default Breadcrumbs;
