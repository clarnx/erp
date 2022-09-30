import { render, screen } from "@testing-library/react";

import Sidebar from "../Sidebar";

describe("Sidebar", () => {
  it("renders a Sidebar", () => {
    render(<Sidebar />);

    const testId = screen.getByTestId("sidebar");

    expect(testId).toBeInTheDocument();
  });
});
