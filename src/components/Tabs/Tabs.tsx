import React, { FC, useState } from "react";

import clsxm from "@/utils/clsxm";

import type { TabItem, TabProps } from "./types";
import Typography from "../Typography";

const Tabs: FC<TabProps> = ({ items }) => {
  const [stateItems, setStateItems] = useState(items);
  const [selectedItem, setSelectedItem] = useState<TabItem | null>(
    items.find((x) => x.isActive) ?? null
  );

  const handleClick = (itemParam: TabItem) => () => {
    selectedItem?.id != itemParam.id && reArrangeTabItems(itemParam);
  };

  const reArrangeTabItems = (newSelectedItem: TabItem) => {
    setStateItems((current) =>
      current.map((obj) => {
        const aa = { ...obj, isActive: false };
        if (
          (selectedItem?.id !== newSelectedItem.id && obj.id) ===
          newSelectedItem.id
        ) {
          return { ...aa, isActive: true };
        }
        return aa;
      })
    );

    setSelectedItem(newSelectedItem);
  };

  return (
    <>
      <div className="border-b-[0.063rem]">
        <nav className="h-[2.188rem]" data-testid="tab-component">
          <ol className="list-reset flex h-[1.625rem] w-full">
            {stateItems &&
              stateItems.map((link, i) => (
                <li key={link.id}>
                  <div
                    onClick={handleClick(link)}
                    className={clsxm(
                      "hover: cursor-pointer pr-5",
                      i == 0 && "border-left-none"
                    )}
                  >
                    <Typography
                      size="text-sm"
                      variant="span"
                      fontFamily="font-tertiary"
                      color={
                        link.isActive
                          ? "text-blackOut font-bold"
                          : "text-improbable text-opacity-50"
                      }
                      className="inline font-bold"
                    >
                      {link.text}
                    </Typography>
                  </div>
                  <div
                    className={clsxm(
                      link.isActive &&
                        "mt-[0.25rem] border-b-[0.438rem] border-blackOut"
                    )}
                  />
                </li>
              ))}
          </ol>
        </nav>
      </div>
    </>
  );
};

export default Tabs;
