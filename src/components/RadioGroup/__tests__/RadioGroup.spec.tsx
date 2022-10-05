import { fireEvent, render, screen } from "@testing-library/react";

import RadioGroup from "../RadioGroup";
import type { Option } from "../types";

describe("RadioGroup", () => {
  const options: Option[] = [
    {
      id: "1",
      label: "test one",
    },
    {
      id: "2",
      label: "test two",
    },
  ];

  it("renders the RadioGroup component", () => {
    render(<RadioGroup options={options} />);

    const radioOne = screen.getByText(/test one/i);
    const radioTwo = screen.getByText(/test two/i);

    const radioOneId = screen.getByTestId("1");
    const radioTwoId = screen.getByTestId("2");

    expect(radioOne).toBeInTheDocument();
    expect(radioTwo).toBeInTheDocument();
    expect(radioOneId).not.toBeChecked();
    expect(radioTwoId).not.toBeChecked();
  });

  it("should check first radio button", () => {
    render(<RadioGroup options={options} />);

    const radioOneId = screen.getByTestId("1");
    const radioTwoId = screen.getByTestId("2");

    fireEvent.click(radioOneId);

    expect(radioOneId).toBeChecked();
    expect(radioTwoId).not.toBeChecked();
  });

  it("should check second radio button", () => {
    render(<RadioGroup options={options} />);

    const radioOneId = screen.getByTestId("1");
    const radioTwoId = screen.getByTestId("2");

    fireEvent.click(radioTwoId);

    expect(radioOneId).not.toBeChecked();
    expect(radioTwoId).toBeChecked();
  });
});
