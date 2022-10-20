import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import ForgotPassword from "../ForgotPassword";

describe("ForgotPassword Initial Render", () => {
  it("renders the ForgotPassword page", () => {
    render(<ForgotPassword />);

    const txtHeader = screen.getByText(/Forgot Your Password/i);
    const txtInfo = screen.getByText(/Enter your registered email address/i);
    const txtBackToSignIn = screen.getByText(/Back to Sign In/i);
    const emailAddress = screen.getByPlaceholderText("Email Address");
    const btnRequestPassword = screen.getByRole("button", {
      name: "Request a Link to Reset Password",
    });

    expect(txtHeader).toBeInTheDocument();
    expect(txtInfo).toBeInTheDocument();
    expect(txtBackToSignIn).toBeInTheDocument();
    expect(emailAddress).toBeInTheDocument();
    expect(btnRequestPassword).toBeInTheDocument();
  });
});

describe("ForgotPassword Functionalities", () => {
  it("should change the email field", () => {
    render(<ForgotPassword />);

    const emailAddress = screen.getByPlaceholderText("Email Address");

    fireEvent.change(emailAddress, { target: { value: "testing@test.com" } });

    const emailAddressValue = screen.getByDisplayValue(/testing@test.com/i);

    expect(emailAddressValue).toBeInTheDocument();
  });

  it("should show error if email field is empty", () => {
    render(<ForgotPassword />);

    const btnRequestPassword = screen.getByRole("button", {
      name: "Request a Link to Reset Password",
    });

    fireEvent.click(btnRequestPassword);

    const txtEmailError = screen.findByText(/Please enter registered “Email”/i);

    waitFor(() => {
      expect(txtEmailError).toBeInTheDocument();
    });
  });
});
