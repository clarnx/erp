import { render, screen } from "@testing-library/react";

import Tabs from "../Tabs";

describe("Tabs", () => {
  it("renders the Tabs component", () => {
    render(
      <div data-testid="tabs-component">
        <Tabs
          items={[
            {
              id: 1,
              url: "/",
              text: " Main",
              isActive: false,
            },
            {
              id: 2,
              url: "/profile",
              text: " Get All Orders",
              isActive: false,
            },
            {
              id: 3,
              url: "/profile-emp",
              text: " Get History",
              isActive: true,
            },
          ]}
        />
      </div>
    );

    const checkItem = screen.getByTestId("tab-component");

    expect(checkItem).toBeInTheDocument();
  });
});
