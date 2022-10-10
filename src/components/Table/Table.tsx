import React, { FC } from "react";

import { Variations } from "./config";
import type { TableProps } from "./types";
import VariationOne from "./VariationOne";
import VariationTwo from "./VariationTwo";

const Table: FC<TableProps> = ({ variation = Variations.Primary, data }) => {
  const variations = {
    [Variations.Primary]: <VariationOne data={data} />,
    [Variations.Secondary]: <VariationTwo data={data} />,
  };

  return variations[variation];
};

export default Table;
