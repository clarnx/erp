import React from "react";
import { ImSpinner2 } from "react-icons/im";

import clsxm from "@/utils/clsxm";

enum ButtonVariant {
  "primary",
}

type ButtonProps = {
  isLoading?: boolean;
  variant?: keyof typeof ButtonVariant;
} & React.ComponentPropsWithRef<"button">;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      disabled: buttonDisabled,
      isLoading,
      variant = "primary",
      ...rest
    },
    ref
  ) => {
    const disabled = isLoading || buttonDisabled;

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsxm(
          "inline-flex items-center rounded px-4 py-2 font-medium",
          "focus:outline-none focus-visible:ring focus-visible:ring-primary-500",
          "shadow-sm",
          "transition-colors duration-75",
          [
            variant === "primary" && [
              "bg-slate-900 text-white",
              "border border-primary-600",
              "hover:bg-slate-900 hover:text-white",
              "active:bg-primary-500",
              "disabled:bg-primary-400 disabled:hover:bg-primary-400",
            ],
          ],
          "disabled:cursor-not-allowed",
          isLoading &&
            "relative text-transparent transition-none hover:text-transparent disabled:cursor-wait",
          className
        )}
        {...rest}
      >
        {isLoading && (
          <div
            className={clsxm(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
              {
                "text-white": ["primary", "dark"].includes(variant),
                "text-black": ["light"].includes(variant),
                "text-primary-500": ["outline", "ghost"].includes(variant),
              }
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
