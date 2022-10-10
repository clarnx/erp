import React, { FC, Fragment, useState } from "react";

import clsxm from "@/utils/clsxm";

import Button from "@/components/Button";

import type { DropdownProps, Option } from "./types";
import Typography from "../Typography";

const Dropdown: FC<DropdownProps> = ({
  options,
  isScrolled = false,
  label,
  disabled = false,
  hasError = false,
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const [open, setIsOpen] = useState(false);

  const handleClick = (option: Option) => () => {
    setSelectedOption(option);
    handleOpenClick();
  };

  const handleOpenClick = () => setIsOpen((open) => !open);

  return (
    <>
      {label && (
        <label className="text-sm font-bold text-improbable">{label}</label>
      )}
      <button
        type="button"
        className={clsxm(
          "border-belugal inline-flex w-full justify-center rounded-lg border bg-white px-4 py-2 text-sm font-medium text-improbable shadow-sm focus-within:border-improbable ",
          hasError ? "border-poppySurprise" : ""
        )}
        id="menu-button"
        aria-expanded="true"
        aria-haspopup="true"
        onClick={() => handleOpenClick()}
      >
        {selectedOption ? selectedOption.label : "Please Choose"}
      </button>
      {!disabled && open && (
        <div
          className={clsxm(
            "mt-[0.625rem] min-h-[15.5rem] w-[14.0625rem] rounded-lg border-[0.0625rem] border-beluga py-[1.5625rem] pr-[4.6875rem] pl-[1.25rem]",
            isScrolled && "h-[15.5rem] overflow-scroll"
          )}
        >
          {options.map((option) => (
            <Fragment key={option.id}>
              <Button
                className="w-full rounded-none border-none bg-transparent hover:bg-white"
                onClick={handleClick(option)}
              >
                <Typography
                  variant="p"
                  size="text-xs"
                  color="text-improbable"
                  className="font-medium"
                >
                  {option.label}
                </Typography>
              </Button>
            </Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
