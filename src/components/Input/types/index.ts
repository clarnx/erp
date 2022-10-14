import { InputHTMLAttributes } from "react";

type Icon = {
  src: string;
  height: number;
  width: number;
  onClick?: () => void;
};

export type InputProps = {
  label?: string;
  leftIcon?: Icon;
  rightIcon?: Icon;
  hasError?: boolean;
  bgColor?: string;
} & InputHTMLAttributes<HTMLInputElement>;
