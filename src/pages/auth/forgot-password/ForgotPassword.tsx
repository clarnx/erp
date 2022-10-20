import { FormikContext, useFormik } from "formik";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { AUTH_PAGE_URL } from "@/constants/pageUrl";

import Button from "@/components/Button";
import FormInput from "@/components/Formik/FormInput";
import ValidationMessage from "@/components/Formik/ValidationMessage";
import Typography from "@/components/Typography";

import { forgotPasswordAPI } from "@/services";

import { forgotPasswordIcons, initialForgotPasswordForm } from "./config";
import type { ForgotPasswordForm } from "./types";
import ForgotPasswordValidationSchema from "./validations";

const ForgotPasswordPage: NextPage = () => {
  const router = useRouter();

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    formikBag.submitForm();
  };

  const handleSubmit = async (values: ForgotPasswordForm) => {
    const { setFieldError } = formikBag;
    const { success, error } = await forgotPasswordAPI(values);

    if (error?.message) {
      setFieldError("email", error?.message);
      return;
    }

    if (success) router.push(AUTH_PAGE_URL.FORGOT_PASSWORD_SUCCESS);
  };

  const formikBag = useFormik({
    initialValues: initialForgotPasswordForm,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: ForgotPasswordValidationSchema,
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
          className="mb-[1.813rem] font-bold capitalize"
        >
          forgot your password
        </Typography>

        <Typography
          variant="h3"
          fontFamily="font-secondary"
          size="text-lg"
          lineHeight="leading-[1.813rem]"
          textAlign="text-center"
          color="text-improbable"
          className="mb-[4.5rem] font-medium"
        >
          Enter your registered email address
        </Typography>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-[2.625rem] flex flex-col">
            <FormInput
              name="email"
              data-testid="email"
              leftIcon={forgotPasswordIcons.email}
              type="email"
              className="block w-full border-transparent px-3 py-2 text-base leading-[1.813rem] text-nero focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Email Address"
            />

            <ValidationMessage name="email" />
          </div>

          <div className="mb-[2.625rem] flex flex-col">
            <Button
              type="submit"
              isLoading={formikBag.isSubmitting}
              className="w-full justify-center"
              role="button"
            >
              Request a Link to Reset Password
            </Button>
          </div>

          <div className="flex justify-center">
            <Link href="/auth/login">
              <a className="cursor-pointer font-primary text-base font-medium text-improbable">
                Back to Sign In
              </a>
            </Link>
          </div>
        </form>
      </div>
    </FormikContext.Provider>
  );
};

export default ForgotPasswordPage;
