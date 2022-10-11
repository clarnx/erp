import { render, screen } from "@testing-library/react";

import Colors from "../Colors";

describe("Colors", () => {
  it("renders the Colors component", () => {
    render(<Colors />);

    const colorPalette = screen.getByTestId("color-palette");

    expect(colorPalette.querySelectorAll("div.color").length).toEqual(20);
  });
});
