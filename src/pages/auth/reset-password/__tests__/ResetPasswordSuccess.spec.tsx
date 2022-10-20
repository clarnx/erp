import { render, screen } from "@testing-library/react";

import ResetPasswordSuccess from "../success/Success";

describe("ResetPasswordSuccess", () => {
  it("renders the ResetPassword page", () => {
    render(<ResetPasswordSuccess />);

    const txtHeader = screen.getByText(
      /Password Has Been Successfully Reset!/i
    );
    const txtInfo = screen.getByText(
      /You can now use your new password to sign in to your account!/i
    );
    const btnSignIn = screen.getByRole("button", {
      name: "Sign In",
    });

    expect(txtHeader).toBeInTheDocument();
    expect(txtInfo).toBeInTheDocument();
    expect(btnSignIn).toBeInTheDocument();
  });
});
