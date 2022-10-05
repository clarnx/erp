import { render, screen } from "@testing-library/react";

import Radio from "../Radio";

describe("Radio", () => {
  it("renders the Radio component", () => {
    render(<Radio label="Radio one" />);

    const radio = screen.getByText(/Radio one/i);

    expect(radio).toBeInTheDocument();
  });

  it("should be checked", () => {
    const handleClick = jest.fn();

    render(
      <Radio
        data-testid="radio-one"
        label="Radio one"
        defaultChecked
        onChange={handleClick()}
      />
    );

    const radio = screen.getByTestId("radio-one");

    expect(radio).toBeChecked();
  });

  it("should be disabled", () => {
    const handleClick = jest.fn();

    render(
      <Radio
        data-testid="radio-one"
        label="Radio one"
        defaultChecked
        disabled
        onChange={handleClick()}
      />
    );

    const radio = screen.getByTestId("radio-one");

    expect(radio).toBeDisabled();
  });
});
