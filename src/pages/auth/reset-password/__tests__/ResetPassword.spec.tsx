import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import ResetPassword from "../[token].page";

describe("ResetPassword Initial Render", () => {
  it("renders the ResetPassword page", () => {
    render(<ResetPassword />);

    const txtHeader = screen.getByText(/Please Set A New Password/i);
    const newPassword = screen.getByPlaceholderText("New Password");
    const verifyPassword = screen.getByPlaceholderText("Verify Password");
    const btnSavePassword = screen.getByRole("button", {
      name: "Save New Password",
    });

    expect(txtHeader).toBeInTheDocument();
    expect(newPassword).toBeInTheDocument();
    expect(verifyPassword).toBeInTheDocument();
    expect(btnSavePassword).toBeInTheDocument();
  });
});

describe("ResetPassword Functionalities", () => {
  it("should change the new password field", () => {
    render(<ResetPassword />);

    const newPassword = screen.getByPlaceholderText("New Password");

    fireEvent.change(newPassword, { target: { value: "1234" } });

    const newPasswordValue = screen.getByDisplayValue(/1234/i);

    expect(newPasswordValue).toBeInTheDocument();
  });

  it("should show the new password text", () => {
    render(<ResetPassword />);

    const newPasswordField = screen.getByPlaceholderText("New Password");

    fireEvent.change(newPasswordField, { target: { value: "123456" } });

    const showEyeIcon = screen.getAllByTestId("/svg/Eye.svg");

    fireEvent.click(showEyeIcon[0]);

    expect(newPasswordField).toHaveAttribute("type", "text");
  });

  it("should hide the new password text", () => {
    render(<ResetPassword />);

    const newPasswordField = screen.getByPlaceholderText("New Password");

    fireEvent.change(newPasswordField, { target: { value: "123456" } });

    const showEyeIcon = screen.getAllByTestId("/svg/Eye.svg");

    fireEvent.click(showEyeIcon[0]);

    const hideEyeIcon = screen.getAllByTestId("/svg/SlashedEye.svg");

    fireEvent.click(hideEyeIcon[0]);

    expect(newPasswordField).toHaveAttribute("type", "password");
  });

  it("should change the verify password field", () => {
    render(<ResetPassword />);

    const verifyPassword = screen.getByPlaceholderText("Verify Password");

    fireEvent.change(verifyPassword, { target: { value: "1234" } });

    const verifyPasswordValue = screen.getByDisplayValue(/1234/i);

    expect(verifyPasswordValue).toBeInTheDocument();
  });

  it("should show the verify password text", () => {
    render(<ResetPassword />);

    const verifyPasswordField = screen.getByPlaceholderText("Verify Password");

    fireEvent.change(verifyPasswordField, { target: { value: "123456" } });

    const showEyeIcon = screen.getAllByTestId("/svg/Eye.svg");

    fireEvent.click(showEyeIcon[1]);

    expect(verifyPasswordField).toHaveAttribute("type", "text");
  });

  it("should hide the verify password text", () => {
    render(<ResetPassword />);

    const verifyPasswordField = screen.getByPlaceholderText("Verify Password");

    fireEvent.change(verifyPasswordField, { target: { value: "123456" } });

    const showEyeIcon = screen.getAllByTestId("/svg/Eye.svg");

    fireEvent.click(showEyeIcon[1]);

    const hideEyeIcon = screen.getAllByTestId("/svg/SlashedEye.svg");

    fireEvent.click(hideEyeIcon[0]);

    expect(verifyPasswordField).toHaveAttribute("type", "password");
  });

  it("should show errors if fields are empty", () => {
    render(<ResetPassword />);

    const btnSavePassword = screen.getByRole("button", {
      name: "Save New Password",
    });

    fireEvent.click(btnSavePassword);

    const txtPasswordError = screen.findByText(
      /Please enter a valid “Password”/i
    );

    const txtConfirmPasswordError = screen.findByText(
      /Please enter a valid “Password Verification”/i
    );

    waitFor(() => {
      expect(txtPasswordError).toBeInTheDocument();
      expect(txtConfirmPasswordError).toBeInTheDocument();
    });
  });

  it("should show error if password do not match", () => {
    render(<ResetPassword />);
    const newPasswordField = screen.getByPlaceholderText("New Password");
    const verifyPasswordField = screen.getByPlaceholderText("Verify Password");
    const btnSavePassword = screen.getByRole("button", {
      name: "Save New Password",
    });

    fireEvent.change(newPasswordField, { target: { value: "12345" } });
    fireEvent.change(verifyPasswordField, { target: { value: "123456" } });
    fireEvent.click(btnSavePassword);

    const txtMatchPasswordError = screen.findByText(
      /Please make sure your passwords match/i
    );

    waitFor(() => {
      expect(txtMatchPasswordError).toBeInTheDocument();
    });
  });
});
