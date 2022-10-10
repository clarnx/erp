import React, { FC, useMemo } from "react";

import clsxm from "@/utils/clsxm";

import Typography from "@/components/Typography";

import type { VariationTable } from "./types";

const VariationOne: FC<VariationTable> = ({ data }) => {
  const { body, header } = data;

  const renderHeader = useMemo(
    () =>
      header.map(({ value, width }, index) => (
        <th
          key={index}
          scope="col"
          className={clsxm(
            "p-4 text-center first:rounded-l-[0.938rem] last:rounded-r-[0.938rem]",
            width && `min-w-[${width}]`
          )}
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
        <tr
          key={index}
          className="border-b border-b-silverback px-2 last:border-0"
        >
          {items.map(({ value, width }, index) => (
            <td
              key={index}
              className={clsxm(
                "py-[1.875rem] px-4",
                width && `min-w-[${width}]`
              )}
            >
              {typeof value === "string" ? (
                <Typography
                  color="text-blackOut"
                  size="text-sm"
                  variant="p"
                  textAlign="text-center"
                  className="font-light uppercase"
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
    <div className="table-container w-[66rem] flex-1 overflow-x-auto ">
      <div className="inline-block min-w-full py-2">
        <div className="overflow-hidden">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-aliceBlue">{renderHeader}</tr>
            </thead>
            <tbody>{renderBody}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VariationOne;
