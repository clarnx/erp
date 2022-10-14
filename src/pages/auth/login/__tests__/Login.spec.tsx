import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import Login from "../Login";

describe("Login Initial Render", () => {
  it("renders the Login page", () => {
    render(<Login />);

    const txtSignIn = screen.getAllByText(/Sign In/i);
    const txtForgotEmail = screen.getByText(/Forgot Email Address?/i);
    const txtPassword = screen.getByText(/Forgot Password?/i);
    const btnSignIn = screen.getByRole("button", { name: "Sign In" });
    const account = screen.getByPlaceholderText("Account");
    const email = screen.getByPlaceholderText("Email");
    const password = screen.getByPlaceholderText("Password");

    expect(txtSignIn.length).toBe(2);
    expect(account).toBeInTheDocument();
    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(btnSignIn).toBeInTheDocument();
    expect(txtForgotEmail).toBeInTheDocument();
    expect(txtPassword).toBeInTheDocument();
  });
});

describe("Login Functionalities", () => {
  it("should change the account number field", () => {
    render(<Login />);

    const accountField = screen.getByPlaceholderText("Account");

    fireEvent.change(accountField, { target: { value: "1234" } });

    const accountValue = screen.getByDisplayValue(/1234/i);

    expect(accountValue).toBeInTheDocument();
  });

  it("should change the email field", () => {
    render(<Login />);

    const emailField = screen.getByPlaceholderText("Email");

    fireEvent.change(emailField, { target: { value: "test@user.com" } });

    const emailValue = screen.getByDisplayValue(/test@user.com/i);

    expect(emailValue).toBeInTheDocument();
  });

  it("should change the password field", () => {
    render(<Login />);

    const passwordField = screen.getByPlaceholderText("Password");

    fireEvent.change(passwordField, { target: { value: "123456" } });

    const passwordValue = screen.getByDisplayValue(/123456/i);

    expect(passwordValue).toBeInTheDocument();
  });

  it("should show the password text", () => {
    render(<Login />);

    const passwordField = screen.getByPlaceholderText("Password");

    fireEvent.change(passwordField, { target: { value: "123456" } });

    const showEyeIcon = screen.getByTestId("/svg/Eye.svg");

    fireEvent.click(showEyeIcon);

    expect(passwordField).toHaveAttribute("type", "text");
  });

  it("should hide the password text", () => {
    render(<Login />);

    const passwordField = screen.getByPlaceholderText("Password");

    fireEvent.change(passwordField, { target: { value: "123456" } });

    const showEyeIcon = screen.getByTestId("/svg/Eye.svg");

    fireEvent.click(showEyeIcon);

    const hideEyeIcon = screen.getByTestId("/svg/SlashedEye.svg");

    fireEvent.click(hideEyeIcon);

    expect(passwordField).toHaveAttribute("type", "password");
  });

  it("should show errors if fields are empty", () => {
    render(<Login />);

    const btnSignIn = screen.getByRole("button", { name: "Sign In" });

    fireEvent.click(btnSignIn);

    const txtAccountError = screen.findByText(
      /Please enter registered “Account Number”/i
    );
    const txtEmailError = screen.findByText(/Please enter registered “Email”/i);
    const txtPasswordError = screen.findByText(
      /Please enter a valid “Password”/i
    );

    waitFor(() => {
      expect(txtAccountError).toBeInTheDocument();
      expect(txtEmailError).toBeInTheDocument();
      expect(txtPasswordError).toBeInTheDocument();
    });
  });
});
