import * as Yup from "yup";

import { FORGOT_PASSWORD_ERRORS } from "../config";

const ForgotPasswordValidationSchema = Yup.object().shape({
  email: Yup.string()
    .required(FORGOT_PASSWORD_ERRORS.EMAIL_REQUIRED)
    .email(FORGOT_PASSWORD_ERRORS.EMAIL_REQUIRED),
});

export default ForgotPasswordValidationSchema;
