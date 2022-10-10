import { ReactNode } from "react";

import { Variations } from "../config";

type TableHeader = Item[];

type TableBody = BodyItems[];

type BodyItems = {
  items: Item[];
};

type Item = {
  value: string | ReactNode;
  width?: string;
};

export type TableData = {
  header: TableHeader;
  body: TableBody;
};

export type VariationTable = {
  data: TableData;
};

export type VariationOptions = keyof typeof Variations;

export type TableProps = {
  variation?: VariationOptions;
} & VariationTable;
