import { InputHTMLAttributes } from "react";

type Orientation = "horizontal" | "vertical";

export type Option = {
  id: string;
  label: string;
};

export type RadioProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

export type RadioGroupProps = {
  options: Option[];
  orientation?: Orientation;
};
