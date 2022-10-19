import React, { FC } from "react";

import clsxm from "@/utils/clsxm";

import type { InputProps } from "./types";
import Icon from "../Icon";

const Input: FC<InputProps> = ({
  label,
  leftIcon,
  rightIcon,
  disabled = false,
  hasError = false,
  bgColor = "bg-white",
  className,
  value,
  ...rest
}) => {
  return (
    <>
      {label && (
        <label className="text-sm font-bold text-improbable">{label}</label>
      )}

      <div
        className={clsxm(
          "flex w-full flex-grow appearance-none items-center",
          "rounded-[0.938rem] border p-1 py-2 px-3 text-blackOut",
          "focus-within:input-icon duration-150 focus-within:border-nero focus-within:transition-all sm:text-sm",
          value && "input-icon border border-nero",
          hasError && "border-poppySurprise",
          disabled && "bg-disable",
          bgColor && `${bgColor}`
        )}
      >
        {leftIcon && (
          <div className="pl-2 pt-1" onClick={leftIcon?.onClick}>
            <Icon
              src={leftIcon.src}
              height={leftIcon.height}
              width={leftIcon.width}
            />
          </div>
        )}

        <input
          disabled={disabled}
          className={clsxm(
            className,
            "placeholder-improbable",
            disabled && "bg-disable"
          )}
          {...rest}
        />

        {rightIcon && (
          <div
            className="cursor-pointer pr-2 pt-1"
            data-testid={rightIcon.src}
            onClick={rightIcon?.onClick}
          >
            <Icon
              src={rightIcon.src}
              height={rightIcon.height}
              width={rightIcon.width}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Input;
