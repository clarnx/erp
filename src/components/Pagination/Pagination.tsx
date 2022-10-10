import React, { FC, useMemo, useState } from "react";

import clsxm from "@/utils/clsxm";

import { ChangeOptions, INITIAL_PAGE, PaginationOptions } from "./config";
import type {
  ChangeOptionsType,
  PaginationOptionsType,
  PaginationProps,
} from "./types";
import Icon from "../Icon";
import Typography from "../Typography";

const Pagination: FC<PaginationProps> = ({
  rowsPerPage,
  onPageChange,
  count,
}) => {
  const [page, setPage] = useState<number>(INITIAL_PAGE);
  const [rows, setRows] = useState<number | null>(rowsPerPage[0]);

  const handleChange =
    (type: ChangeOptionsType) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      type === ChangeOptions.Input
        ? setPage(+event.target.value)
        : setRows(+event.target.value);
    };

  const handlePaginationClick =
    (type: PaginationOptionsType) =>
    (event: React.MouseEvent<HTMLButtonElement>) => {
      type === PaginationOptions.Previous
        ? onPageChange(event, page - 1)
        : onPageChange(event, page + 1);
    };

  const totalPages = useMemo(
    () => rows && Math.ceil(count / rows),
    [count, rows]
  );

  const disabledArrows = useMemo(
    () => ({
      prev: page <= 1 || (totalPages ? page > totalPages : false),
      next: totalPages ? page >= totalPages : false,
    }),
    [page, totalPages]
  );

  return (
    <div className="flex max-h-12 w-[66rem] justify-between bg-azure px-4 py-[1.125rem]">
      <div className="flex items-center">
        <Typography
          variant="span"
          color="text-ebonyClay"
          lineHeight="leading-[0.688rem]"
          size="text-xs"
          className="font-normal capitalize"
        >
          displaying
        </Typography>

        <div className="relative ml-[0.563rem] w-[3.75rem] overflow-hidden rounded-[0.188rem] border-[0.063rem] border-whisper">
          <div className="absolute right-4 -top-[0.125rem] text-ebonyClay">
            <Icon src="/svg/PaginationChevron.svg" height={5.66} width={8.49} />
          </div>

          <select
            className="form-select border-none py-1 pl-2 text-xs text-ebonyClay bg-blend-color-dodge focus:ring-0"
            id="rows"
            name="rows"
            data-testid="rows"
            onChange={handleChange(ChangeOptions.Select)}
          >
            {rowsPerPage.map((row, index) => (
              <option
                key={index}
                value={row}
                className="block px-4 py-2 text-sm"
              >
                {row}
              </option>
            ))}
          </select>
        </div>

        <Typography
          variant="span"
          color="text-ebonyClay"
          lineHeight="leading-[0.688rem]"
          size="text-xs"
          className="ml-3 font-normal"
        >
          rows per page
        </Typography>
      </div>

      <div className="flex items-center">
        <Typography
          variant="span"
          color="text-ebonyClay"
          lineHeight="leading-[0.688rem]"
          size="text-xs"
          className="mr-[0.688rem] font-normal capitalize"
        >
          page
        </Typography>

        <input
          type="number"
          value={page}
          onChange={handleChange(ChangeOptions.Input)}
          className="mr-3 w-8 rounded-[0.188rem] border-[0.063rem] border-whisper px-2 py-1 text-xs text-ebonyClay"
          data-testid="page"
        />

        <Typography
          variant="span"
          color="text-ebonyClay"
          lineHeight="leading-[0.688rem]"
          size="text-xs"
          className="mr-[1.475rem] font-normal"
        >
          of {totalPages}
        </Typography>

        <div className="flex gap-[1.33rem]">
          <button
            onClick={handlePaginationClick(PaginationOptions.Previous)}
            disabled={disabledArrows.prev}
            data-testid="btn-prev"
          >
            <Icon
              src="/svg/Arrow.svg"
              height={14.97}
              width={9.34}
              className={clsxm(
                "rotate-180",
                disabledArrows.prev && "disabled-pagination"
              )}
            />
          </button>

          <button
            onClick={handlePaginationClick(PaginationOptions.Next)}
            disabled={disabledArrows.next}
            data-testid="btn-next"
          >
            <Icon
              src="/svg/Arrow.svg"
              height={14.97}
              width={9.34}
              className={clsxm(disabledArrows.next && "disabled-pagination")}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
