import type { ResetPasswordForm, ShowPassword } from "../types";

export const initialResetPasswordForm: ResetPasswordForm = {
  password: "",
  confirmPassword: "",
};

export const initialShowPassword: ShowPassword = {
  password: false,
  confirmPassword: false,
};

export const resetPasswordIcons = {
  password: {
    src: "/svg/Password.svg",
    height: 24,
    width: 24,
  },
  eyeIcon: {
    src: "/svg/Eye.svg",
    height: 30,
    width: 30,
  },
  slashedEyeIcon: {
    src: "/svg/SlashedEye.svg",
    height: 30,
    width: 30,
  },
};

export const RESET_PASSWORD_ERRORS = {
  PASSWORD_REQUIRED: "Please enter a valid “Password”",
  CONFIRM_PASSWORD_REQUIRED: "Please enter a valid “Password Verification”",
  NOT_MATCHED_PASSWORD: "Please make sure your passwords match",
};
