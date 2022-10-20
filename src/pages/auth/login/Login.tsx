import { FormikContext, useFormik } from "formik";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

import Button from "@/components/Button";
import FormInput from "@/components/Formik/FormInput";
import ValidationMessage from "@/components/Formik/ValidationMessage";
import Typography from "@/components/Typography";

import { initialUserForm, LOGIN_ERRORS, loginIcons } from "./config";
import type { UserForm } from "./types";
import LoginValidationSchema from "./validations";

const LoginPage: NextPage = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const router = useRouter();

  const handleFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    formikBag.submitForm();
  };

  const handleSubmit = async (values: UserForm) => {
    const { setFieldError } = formikBag;

    const response = await signIn("credentials", {
      ...values,
      redirect: false,
    });

    switch (response?.error) {
      case LOGIN_ERRORS.USER_DOES_NOT_EXIST:
        setFieldError("accountNum", LOGIN_ERRORS.ACCOUNT_NUMBER_REQUIRED);
        setFieldError("email", LOGIN_ERRORS.EMAIL_REQUIRED);
        break;

      default:
        setFieldError("password", LOGIN_ERRORS.PASSWORD_REQUIRED);
        break;
    }

    if (response?.ok) router.push("/");
  };

  const formikBag = useFormik({
    initialValues: initialUserForm,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
    validationSchema: LoginValidationSchema,
    onSubmit: handleSubmit,
  });

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const eyeIcon = showPassword
    ? { ...loginIcons.slashedEyeIcon }
    : { ...loginIcons.eyeIcon };

  return (
    <FormikContext.Provider value={formikBag}>
      <div className="w-full max-w-[40.625rem] rounded-xl bg-beluga px-[3.438rem] pt-[4.125rem] pb-[6.5rem]">
        <div>
          <Typography
            variant="h1"
            fontFamily="font-secondary"
            size="text-[1.625rem]"
            lineHeight="leading-[1.813rem]"
            textAlign="text-center"
            color="text-cloudBurst"
            className="mb-[8.125rem] font-bold capitalize"
          >
            sign in
          </Typography>
        </div>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-[1.875rem] flex flex-col">
            <FormInput
              name="accountNum"
              data-testid="accountNum"
              type="text"
              leftIcon={loginIcons.accountNumber}
              className="block w-full border-transparent px-3 py-2 text-base leading-[1.813rem] text-nero focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Account"
            />

            <ValidationMessage name="accountNum" />
          </div>

          <div className="mb-[1.875rem] flex flex-col">
            <FormInput
              name="email"
              data-testid="email"
              leftIcon={loginIcons.email}
              type="email"
              className="block w-full border-transparent px-3 py-2 text-base leading-[1.813rem] text-nero focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Email"
            />

            <ValidationMessage name="email" />
          </div>

          <div className="mb-[1.875rem] flex flex-col">
            <FormInput
              name="password"
              data-testid="password"
              leftIcon={loginIcons.password}
              rightIcon={{ ...eyeIcon, onClick: handleShowPassword }}
              type={showPassword ? "text" : "password"}
              className="block w-full border-transparent px-3 py-2 text-base leading-[1.813rem] text-nero focus:border-transparent focus:outline-none focus:ring-0"
              placeholder="Password"
            />

            <ValidationMessage name="password" />
          </div>

          <div className="flex flex-col">
            <div className="mb-[2.625rem] flex items-center justify-between">
              <Link href="/">
                <a className="cursor-pointer font-secondary text-base font-medium text-improbable">
                  Forgot Email Address?
                </a>
              </Link>

              <Link href="/auth/forgot-password">
                <a className="cursor-pointer font-secondary text-base font-medium text-improbable">
                  Forgot Password?
                </a>
              </Link>
            </div>

            <Button
              type="submit"
              isLoading={formikBag.isSubmitting}
              className="w-full justify-center"
              role="button"
            >
              Sign In
            </Button>
          </div>
        </form>
      </div>
    </FormikContext.Provider>
  );
};

export default LoginPage;
