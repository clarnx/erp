import { render, screen } from "@testing-library/react";

import { Variations } from "../config";
import Table from "../Table";
import type { TableData } from "../types";

export const variationOneData: TableData = {
  header: [{ value: "ship to" }, { value: "name" }, { value: "email address" }],
  body: [
    {
      items: [
        { value: "test" },
        { value: "lisa ann swan" },
        { value: "info@sherly.net" },
      ],
    },
    {
      items: [
        { value: "b" },
        { value: "shrely lynn walker" },
        { value: "info@sherly.net" },
      ],
    },
  ],
};

export const variationTwoData: TableData = {
  header: [
    { value: "season" },
    { value: "gross" },
    { value: "returned" },
    { value: "net rate (%)" },
  ],
  body: [
    {
      items: [
        { value: "falls" },
        { value: "7" },
        { value: "2" },
        { value: ".6" },
      ],
    },
  ],
};

describe("Table Variation One", () => {
  it("renders the Table variation one header", () => {
    render(<Table data={variationOneData} />);

    const headerShip = screen.getByText(/ship to/i);
    const headerName = screen.getByText(/name/i);
    const headerEmail = screen.getByText(/email address/i);

    expect(headerShip).toBeInTheDocument();
    expect(headerName).toBeInTheDocument();
    expect(headerEmail).toBeInTheDocument();
  });

  it("renders the Table variation one body", () => {
    render(<Table data={variationOneData} />);

    const firstShip = screen.getByText(/test/i);
    const firstName = screen.getByText(/shrely lynn walker/i);

    const secondShip = screen.getByText(/lisa ann swan/i);
    const secondName = screen.getByText(/shrely lynn walker/i);

    expect(firstShip).toBeInTheDocument();
    expect(firstName).toBeInTheDocument();
    expect(secondShip).toBeInTheDocument();
    expect(secondName).toBeInTheDocument();
  });
});

describe("Table Variation Two", () => {
  it("renders the Table variation two header", () => {
    render(<Table variation={Variations.Secondary} data={variationTwoData} />);

    const headerSeason = screen.getByText(/season/i);
    const headerGross = screen.getByText(/gross/i);
    const headerReturned = screen.getByText(/returned/i);
    const headerNetRate = screen.getByText(/net rate/i);

    expect(headerSeason).toBeInTheDocument();
    expect(headerGross).toBeInTheDocument();
    expect(headerReturned).toBeInTheDocument();
    expect(headerNetRate).toBeInTheDocument();
  });

  it("renders the Table variation two body", () => {
    render(<Table variation={Variations.Secondary} data={variationTwoData} />);

    const season = screen.getByText(/falls/i);
    const gross = screen.getByText(/7/i);
    const returned = screen.getByText(/2/i);
    const netRate = screen.getByText(/.6/i);

    expect(season).toBeInTheDocument();
    expect(gross).toBeInTheDocument();
    expect(returned).toBeInTheDocument();
    expect(netRate).toBeInTheDocument();
  });
});
