import { ClassValue } from "clsx";
import React, { FC, Fragment, useState } from "react";

import clsxm from "@/utils/clsxm";
import { camelize } from "@/utils/helpers";

import Radio from "./Radio";
import type { Option, RadioGroupProps } from "./types";

const RadioGroup: FC<RadioGroupProps> = ({
  options,
  orientation = "vertical",
}) => {
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  const handleChange = (option: Option) => () => {
    setSelectedOption(option);
  };

  const orientations: ClassValue[] = [
    orientation === "horizontal" && "flex",
    orientation === "vertical" && "flex-col",
  ];

  return (
    <div className="flex justify-center">
      <div className={clsxm("gap-4", orientations)}>
        {options.map((option) => (
          <Fragment key={option.id}>
            <Radio
              id={option.id}
              data-testid={option.id}
              label={option.label}
              name={camelize(option.label)}
              checked={selectedOption?.id === option.id}
              onChange={handleChange(option)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
