import { render, screen } from "@testing-library/react";

import Label from "../Label";

describe("Label", () => {
  it("renders the Label component", () => {
    render(<Label text="test text" />);

    const label = screen.getByText(/Test Text/i);

    expect(label).toBeInTheDocument();
  });
});
