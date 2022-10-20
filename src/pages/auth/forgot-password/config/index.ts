import type { ForgotPasswordForm } from "../types";

export const forgotPasswordIcons = {
  email: {
    src: "/svg/Email.svg",
    height: 24,
    width: 24,
  },
};

export const initialForgotPasswordForm: ForgotPasswordForm = {
  email: "",
};

export const FORGOT_PASSWORD_ERRORS = {
  EMAIL_REQUIRED: "Please enter registered “Email”",
};
