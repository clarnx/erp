import { render, screen } from "@testing-library/react";

import Popup from "../Popup";

describe("Popup", () => {
  it("renders the Input component", () => {
    render(
      <Popup
        show
        type="warning"
        msg="Your text warning about this pop up will be placed in here"
        icon={{
          src: "/svg/PopupWarningIcon.svg",
          height: 50,
          width: 50,
        }}
      />
    );

    const msgPopup = screen.getByText(
      "Your text warning about this pop up will be placed in here"
    );

    expect(msgPopup).toBeInTheDocument();
  });
});
