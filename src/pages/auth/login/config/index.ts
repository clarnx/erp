import { UserForm } from "../types";

export const loginIcons = {
  accountNumber: {
    src: "/svg/AccountNumber.svg",
    height: 24,
    width: 18.4,
  },
  email: {
    src: "/svg/Email.svg",
    height: 24,
    width: 24,
  },
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

export const initialUserForm: UserForm = {
  accountNum: "",
  email: "",
  password: "",
};

export const LOGIN_ERRORS = {
  ACCOUNT_NUMBER_REQUIRED: "Please enter registered “Account Number”",
  EMAIL_REQUIRED: "Please enter registered “Email”",
  PASSWORD_REQUIRED: "Please enter a valid “Password”",
  USER_DOES_NOT_EXIST: "User does not exist!",
};
