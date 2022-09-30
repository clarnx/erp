import { render, screen } from "@testing-library/react";

import Header from "../Header";

describe("Header", () => {
  it("renders the Header component", () => {
    render(<Header />);

    const testId = screen.getByTestId("header");

    expect(testId).toBeInTheDocument();
  });

  it("renders the welcome text", () => {
    render(<Header />);

    const txtWelcome = screen.getByText(/Welcome back!/i);

    expect(txtWelcome).toBeInTheDocument();
  });

  it("renders the search input", () => {
    render(<Header />);

    const testId = screen.getByTestId("search-input");

    expect(testId).toBeInTheDocument();
  });
});
