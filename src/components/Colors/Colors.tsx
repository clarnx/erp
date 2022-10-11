import React, { FC } from "react";

import clsxm from "@/utils/clsxm";

import { colorPalette } from "./config";
import Typography from "../Typography";

const Colors: FC = () => {
  return (
    <div className="flex w-full flex-col" data-testid="color-palette">
      {colorPalette.map((color, index) => (
        <div key={index} className="color flex items-center gap-4">
          <div className="w-40 flex-grow pl-6">
            <Typography preset="heading3">{color}</Typography>
          </div>

          <div className={clsxm("h-44 w-full justify-end", `bg-${color}`)} />
        </div>
      ))}
    </div>
  );
};

export default Colors;
