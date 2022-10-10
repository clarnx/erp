import { fireEvent, render, screen } from "@testing-library/react";

import Pagination from "../Pagination";

describe("Pagination", () => {
  const rowsPerPage: number[] = [10, 20, 30];

  it("renders the Pagination component", () => {
    const handleClick = jest.fn();

    render(
      <Pagination
        count={3}
        onPageChange={handleClick}
        rowsPerPage={rowsPerPage}
      />
    );

    const txtDisplaying = screen.getByText(/Displaying/i);
    const txtOfTotalPage = screen.getByText(/of 1/i);
    const txtRowsPerPage = screen.getByText(/rows per page/i);
    const txtPage = screen.getAllByText(/page/i);

    expect(txtDisplaying).toBeInTheDocument();
    expect(txtRowsPerPage).toBeInTheDocument();
    expect(txtOfTotalPage).toBeInTheDocument();
    expect(txtPage.length).toBe(2);
  });

  it("should show the Pagination rows per page", () => {
    const handleClick = jest.fn();

    render(
      <Pagination
        count={3}
        onPageChange={handleClick}
        rowsPerPage={rowsPerPage}
      />
    );

    const rows = screen.getByTestId("rows");

    fireEvent.click(rows);

    const txtOptionOne = screen.getByText(/10/i);
    const txtOptionTwo = screen.getByText(/20/i);
    const txtOptionThree = screen.getByText(/30/i);

    expect(txtOptionOne).toBeInTheDocument();
    expect(txtOptionTwo).toBeInTheDocument();
    expect(txtOptionThree).toBeInTheDocument();
  });

  it("should select the Pagination rows per page", () => {
    const handleClick = jest.fn();

    render(
      <Pagination
        count={3}
        onPageChange={handleClick}
        rowsPerPage={rowsPerPage}
      />
    );

    const rows = screen.getByTestId("rows");

    fireEvent.change(rows, { target: { value: 20 } });

    const txtOptionOne = screen.getByText(/10/i);
    const txtOptionTwo = screen.getByText(/20/i);
    const txtOptionThree = screen.getByText(/30/i);

    expect((txtOptionOne as HTMLOptionElement).selected).toBeFalsy();
    expect((txtOptionTwo as HTMLOptionElement).selected).toBeTruthy();
    expect((txtOptionThree as HTMLOptionElement).selected).toBeFalsy();
  });

  it("should change the Pagination page", () => {
    const handleClick = jest.fn();

    render(
      <Pagination
        count={3}
        onPageChange={handleClick}
        rowsPerPage={rowsPerPage}
      />
    );

    const page = screen.getByTestId("page");

    fireEvent.change(page, { target: { value: "3" } });

    const txtPage = screen.getByText(/3/i);

    expect(txtPage).toBeInTheDocument();
  });

  it("should enable the Pagination next page button", () => {
    const handleClick = jest.fn();

    render(
      <Pagination
        count={13}
        onPageChange={handleClick}
        rowsPerPage={rowsPerPage}
      />
    );

    const btnPrevPage = screen.getByTestId("btn-prev");
    const btnNextPage = screen.getByTestId("btn-next");

    expect(btnPrevPage).toBeDisabled();
    expect(btnNextPage).toBeEnabled();
  });

  it("should enable the Pagination prev page button", () => {
    const handleClick = jest.fn();

    render(
      <Pagination
        count={13}
        onPageChange={handleClick}
        rowsPerPage={rowsPerPage}
      />
    );

    const btnPrevPage = screen.getByTestId("btn-prev");
    const btnNextPage = screen.getByTestId("btn-next");
    const page = screen.getByTestId("page");

    fireEvent.change(page, { target: { value: "2" } });

    expect(btnPrevPage).toBeEnabled();
    expect(btnNextPage).toBeDisabled();
  });

  it("should disable the Pagination prev page button if page is greater than the total number of pages", () => {
    const handleClick = jest.fn();

    render(
      <Pagination
        count={13}
        onPageChange={handleClick}
        rowsPerPage={rowsPerPage}
      />
    );

    const btnPrevPage = screen.getByTestId("btn-prev");
    const btnNextPage = screen.getByTestId("btn-next");
    const page = screen.getByTestId("page");

    fireEvent.change(page, { target: { value: "3" } });

    expect(btnPrevPage).toBeDisabled();
    expect(btnNextPage).toBeDisabled();
  });
});
