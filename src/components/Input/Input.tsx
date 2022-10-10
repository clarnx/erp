import React, { FC } from "react";

import clsxm from "@/utils/clsxm";

import type { InputProps } from "./types";
import Icon from "../Icon";

const Input: FC<InputProps> = ({
  label,
  icon,
  disabled = false,
  hasError = false,
  className,
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
          "rounded-2xl border p-1 py-2 px-3 text-blackOut",
          "focus-within:border-improbable sm:text-sm",
          hasError ? "border-poppySurprise" : "",
          disabled ? "bg-disable" : ""
        )}
      >
        {icon && icon.src && (
          <Icon src={icon.src} height={icon.height} width={icon.width} />
        )}
        <input
          disabled={disabled}
          className={clsxm(
            className,
            "placeholder-improbable",
            disabled ? "bg-disable" : ""
          )}
          {...rest}
        />
      </div>
    </>
  );
};

export default Input;
