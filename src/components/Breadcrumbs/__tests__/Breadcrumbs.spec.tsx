import { render, screen } from "@testing-library/react";

import Breadcrumbs from "../Breadcrumbs";

describe("Breadcrumbs", () => {
  it("renders the Breadcrumbs component", () => {
    render(
      <Breadcrumbs
        items={[
          {
            id: 1,
            url: "/main",
            text: " Main",
            isActive: false,
          },
          {
            id: 2,
            url: "/auth/login",
            text: " Get All Orders",
            isActive: false,
          },
          {
            id: 3,
            url: "/auth/login",
            text: " Get History ",
            isActive: true,
          },
        ]}
      />
    );

    const checkItem = screen.getAllByRole("listitem");

    expect(checkItem[0].getElementsByTagName("a")[0].href).toContain(
      "http://localhost/main"
    );

    expect(checkItem[1].getElementsByTagName("a")[0].href).toContain(
      "http://localhost/auth/login"
    );

    expect(checkItem[2].getElementsByTagName("a")[0].href).toContain(
      "http://localhost/auth/login"
    );
  });
});
