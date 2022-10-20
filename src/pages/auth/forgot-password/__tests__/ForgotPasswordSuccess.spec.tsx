import { render, screen } from "@testing-library/react";

import ForgotPasswordSuccess from "../success/Success";

describe("ForgotPasswordSuccess", () => {
  it("renders the ResetPassword page", () => {
    render(<ForgotPasswordSuccess />);

    const txtHeader = screen.getByText(/Link Sent/i);
    const txtInfo = screen.getByText(
      /A link to reset your password has been sent to your registered email address. Please check your email and return to sign in./i
    );
    const btnSignIn = screen.getByRole("button", {
      name: "Back to Sign In",
    });

    expect(txtHeader).toBeInTheDocument();
    expect(txtInfo).toBeInTheDocument();
    expect(btnSignIn).toBeInTheDocument();
  });
});
