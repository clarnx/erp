import React, { FC } from "react";

import clsxm from "@/utils/clsxm";

import type { LabelProps } from "./types";
import Typography from "../Typography";

const Label: FC<LabelProps> = ({
  text,
  containerColor = "bg-poppySurprise",
}) => {
  return (
    <div className={clsxm("flex rounded px-1", containerColor)}>
      <Typography
        color="text-white"
        size="text-sm"
        className="font-bold capitalize"
      >
        {text}
      </Typography>
    </div>
  );
};

export default Label;
