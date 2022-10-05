import { InputHTMLAttributes } from "react";

type Icon = {
  src: string;
  height: number;
  width: number;
};

export type InputProps = {
  label?: string;
  icon?: Icon;
  hasError?: boolean;
} & InputHTMLAttributes<HTMLInputElement>;
