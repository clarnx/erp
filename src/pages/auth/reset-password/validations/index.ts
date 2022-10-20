import * as Yup from "yup";

import { RESET_PASSWORD_ERRORS } from "../config";

const ResetPasswordValidationSchema = Yup.object().shape({
  password: Yup.string().required(RESET_PASSWORD_ERRORS.PASSWORD_REQUIRED),

  confirmPassword: Yup.string()
    .required(RESET_PASSWORD_ERRORS.CONFIRM_PASSWORD_REQUIRED)
    .oneOf(
      [Yup.ref("password"), null],
      RESET_PASSWORD_ERRORS.NOT_MATCHED_PASSWORD
    ),
});

export default ResetPasswordValidationSchema;
