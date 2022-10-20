import { FormikContext, useFormik } from "formik";
import { useRouter } from "next/router";
import React, { useState } from "react";

import { AUTH_PAGE_URL } from "@/constants/pageUrl";

import Button from "@/components/Button";
import FormInput from "@/components/Formik/FormInput";
import ValidationMessage from "@/components/Formik/ValidationMessage";
import Typography from "@/components/Typography";

import { resetPasswordAPI } from "@/services";

import {
  initialResetPasswordForm,
  initialShowPassword,
  resetPasswordIcons,
} from "./config";
import type { ResetPasswordForm, ShowPassword } from "./types";
import ResetPasswordValidationSchema from "./validations";

const ResetPasswordPage = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] =
    useState<ShowPassword>(initialShowPassword);

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    formikBag.submitForm();
  };

  const handleSubmit = async (values: ResetPasswordForm) => {
    const { token } = router.query;

    const { success } = await resetPasswordAPI(token as string, values);

    if (success) router.push(AUTH_PAGE_URL.RESET_PASSWORD_SUCCESS);
  };

  const handleShowPassword = (key: keyof ShowPassword) => () => {
    setShowPassword((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const getEyeIcon = (key: keyof ShowPassword) =>
    showPassword[key]
      ? { ...resetPasswordIcons.slashedEyeIcon }
      : { ...resetPasswordIcons.eyeIcon };

  const getInputType = (key: keyof ShowPassword) =>
    showPassword[key] ? "text" : "password";

  const formikBag = useFormik({
    initialValues: initialResetPasswordForm,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: ResetPasswordValidationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <FormikContext.Provider value={formikBag}>
      <div className="w-full max-w-[40.625rem] rounded-xl bg-beluga px-[3.438rem] pt-[4.125rem] pb-[6.5rem]">
        <Typography
          variant="h1"
          fontFamily="font-secondary"
          size="text-[1.625rem]"
          lineHeight="leading-[1.813rem]"
          textAlign="text-center"
          color="text-cloudBurst"
          className="mb-[5.25rem] font-bold capitalize"
        >
          please set a new password
        </Typography>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-[1.875rem] flex flex-col">
            <FormInput
              name="password"
              data-testid="password"
              leftIcon={resetPasswordIcons.password}
              rightIcon={{
                ...getEyeIcon("password"),
                onClick: handleShowPassword("password"),
              }}
              type={getInputType("password")}
              className="block w-full border-transparent px-3 py-2 text-base leading-[1.813rem] text-nero focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="New Password"
            />

            <ValidationMessage name="password" />
          </div>

          <div className="mb-[2.625rem] flex flex-col">
            <FormInput
              name="confirmPassword"
              data-testid="confirmPassword"
              leftIcon={resetPasswordIcons.password}
              rightIcon={{
                ...getEyeIcon("confirmPassword"),
                onClick: handleShowPassword("confirmPassword"),
              }}
              type={getInputType("confirmPassword")}
              className="block w-full border-transparent px-3 py-2 text-base leading-[1.813rem] text-nero focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Verify Password"
            />

            <ValidationMessage name="confirmPassword" />
          </div>

          <Button
            type="submit"
            isLoading={formikBag.isSubmitting}
            className="w-full justify-center"
            role="button"
          >
            Save New Password
          </Button>
        </form>
      </div>
    </FormikContext.Provider>
  );
};

export default ResetPasswordPage;
