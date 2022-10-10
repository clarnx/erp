import { ChangeOptions, PaginationOptions } from "../config";

type PageChangeHandler = (
  event: React.MouseEvent<HTMLButtonElement>,
  newPage: number
) => void;

export type ChangeOptionsType = keyof typeof ChangeOptions;
export type PaginationOptionsType = keyof typeof PaginationOptions;

export type PaginationProps = {
  rowsPerPage: number[];
  count: number;
  onPageChange: PageChangeHandler;
};
