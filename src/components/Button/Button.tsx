import { ClassValue } from "clsx";
import React from "react";
import { ImSpinner2 } from "react-icons/im";

import clsxm from "@/utils/clsxm";

import type { ButtonProps } from "./types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "primary",
      size = "sm",
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    const sizes: ClassValue[] = [
      size === "xs" && "px-11 py-3",
      size === "sm" && "px-14 py-3",
      size === "md" && "px-24 py-3",
      size === "lg" && "px-60 py-4",
    ];

    const variants: ClassValue[] = [
      variant === "primary" && [
        "bg-nero text-white",
        "border border-nero",
        "hover:bg-blackOut hover:text-white",
        "active:bg-shishaCoal",
      ],
      variant === "secondary" && [
        "bg-polarDrift text-shishaCoal",
        "border border-polarDrift",
        "hover:bg-icicles hover:text-shishaCoal",
        "active:bg-adirondack",
      ],
    ];

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm(
          "inline-flex items-center rounded-2xl font-secondary font-semibold",
          "focus:outline-none focus-visible:ring focus-visible:ring-blackOut",
          "shadow-sm",
          "transition-colors duration-75",
          sizes,
          variants,
          "disabled:cursor-not-allowed disabled:border disabled:border-polarDrift disabled:bg-polarDrift disabled:text-shishaCoal disabled:opacity-75",
          isLoading &&
            "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            data-testid="loading-icon"
            className={clsxm(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white"
            )}
          >
            <ImSpinner2 className="animate-spin" />
          </div>
        )}
        {children}
      </button>
    );
  }
);

export default Button;
