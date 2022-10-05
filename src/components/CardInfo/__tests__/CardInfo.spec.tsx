import { fireEvent, render, screen } from "@testing-library/react";

import CardInfo from "../CardInfo";

describe("CardInfo", () => {
  it("renders the CardInfo component", () => {
    render(
      <CardInfo header="sample header" promo="new" date="September, 21 2022" />
    );

    const testId = screen.getByTestId("card-info-sampleHeader");

    expect(testId).toBeInTheDocument();
  });

  it("renders the CardInfo header", () => {
    render(
      <CardInfo
        header="Winter 22 Product Presentation Line-up"
        promo="new"
        date="September, 21 2022"
      />
    );

    const header = screen.getByText(/Winter 22 Product Presentation Line-up/i);

    expect(header).toBeInTheDocument();
  });

  it("renders the CardInfo promo", () => {
    render(
      <CardInfo
        header="Winter 22 Product Presentation Line-up"
        promo="new"
        date="September, 21 2022"
      />
    );

    const promo = screen.getByText(/new/i);

    expect(promo).toBeInTheDocument();
  });

  it("should not render the CardInfo promo", () => {
    render(
      <CardInfo
        header="Winter 22 Product Presentation Line-up"
        date="September, 21 2022"
      />
    );

    const promo = screen.queryByText(/new/i);

    expect(promo).not.toBeInTheDocument();
  });

  it("renders the CardInfo date", () => {
    render(
      <CardInfo
        header="Winter 22 Product Presentation Line-up"
        promo="new"
        date="September, 21 2022"
      />
    );

    const date = screen.getByText(/September, 21 2022/i);

    expect(date).toBeInTheDocument();
  });

  it("should trigger the CardInfo onDownload", () => {
    const handleClick = jest.fn();

    render(
      <CardInfo
        header="Winter 22 Product Presentation Line-up"
        promo="new"
        date="September, 21 2022"
        onDownload={handleClick}
      />
    );

    const btnDownload = screen.getByText(/Download/i);

    fireEvent.click(btnDownload);

    expect(handleClick).toBeCalledTimes(1);
  });

  it("should trigger the CardInfo onOpen", () => {
    const handleClick = jest.fn();

    render(
      <CardInfo
        header="Winter 22 Product Presentation Line-up"
        promo="new"
        date="September, 21 2022"
        onOpen={handleClick}
      />
    );

    const btnOpen = screen.getByText(/Open/i);

    fireEvent.click(btnOpen);

    expect(handleClick).toBeCalledTimes(1);
  });
});
