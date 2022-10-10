import { render, screen } from "@testing-library/react";

import Dropdown from "../Dropdown";

describe("Dropdown", () => {
  it("renders the Dropdown component", () => {
    render(
      <Dropdown
        isScrolled
        label=""
        options={[
          {
            id: "1",
            label: "opt 1",
          },
          {
            id: "2",
            label: "opt 2",
          },
          {
            id: "3",
            label: "opt 3",
          },
          {
            id: "4",
            label: "opt 4",
          },
          {
            id: "5",
            label: "opt 5",
          },
          {
            id: "6",
            label: "opt 6",
          },
          {
            id: "1",
            label: "opt 1",
          },
          {
            id: "2",
            label: "opt 2",
          },
          {
            id: "3",
            label: "opt 3",
          },
          {
            id: "4",
            label: "opt 4",
          },
          {
            id: "5",
            label: "opt 5",
          },
          {
            id: "6",
            label: "opt 6",
          },
        ]}
      />
    );

    const checkDefaultItemSelected = screen.getByText("Please Choose");

    expect(checkDefaultItemSelected).toBeInTheDocument();
  });
});
