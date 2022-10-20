import * as Yup from "yup";

import { LOGIN_ERRORS } from "../config";

const LoginValidationSchema = Yup.object().shape({
  accountNum: Yup.string().required(LOGIN_ERRORS.ACCOUNT_NUMBER_REQUIRED),

  email: Yup.string()
    .required(LOGIN_ERRORS.EMAIL_REQUIRED)
    .email(LOGIN_ERRORS.EMAIL_REQUIRED),

  password: Yup.string().required(LOGIN_ERRORS.PASSWORD_REQUIRED),
});

export default LoginValidationSchema;
