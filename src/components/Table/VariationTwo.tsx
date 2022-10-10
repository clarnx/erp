import React, { FC, useMemo } from "react";

import clsxm from "@/utils/clsxm";

import Typography from "@/components/Typography";

import type { VariationTable } from "./types";

const VariationTwo: FC<VariationTable> = ({ data }) => {
  const { body, header } = data;

  const renderHeader = useMemo(
    () =>
      header.map(({ value, width }, index) => (
        <th
          key={index}
          scope="col"
          className={clsxm("py-4 px-3 text-sm", width && `min-w-[${width}]`)}
        >
          <Typography
            color="text-improbable"
            size="text-xs"
            variant="span"
            className="font-bold uppercase tracking-widest"
          >
            {value}
          </Typography>
        </th>
      )),
    [header]
  );

  const renderBody = useMemo(
    () =>
      body.map(({ items }, index) => (
        <tr key={index} className="border-b border-b-beluga last:border-0">
          {items.map(({ value, width }, index) => (
            <td
              key={index}
              className={clsxm("py-4 px-3", width && `min-w-[${width}]`)}
            >
              {typeof value === "string" ? (
                <Typography
                  color="text-blackOut"
                  size="text-sm"
                  variant="p"
                  textAlign="text-center"
                  className="font-light capitalize"
                >
                  {value}
                </Typography>
              ) : (
                value
              )}
            </td>
          ))}
        </tr>
      )),
    [body]
  );

  return (
    <div className="table-overflow w-[66rem] flex-1 overflow-x-auto ">
      <div className="inline-block min-w-full rounded-[15px] bg-aliceBlue py-4 px-8">
        <div className="overflow-hidden">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="border-b border-b-silverback">{renderHeader}</tr>
            </thead>
            <tbody>{renderBody}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VariationTwo;
