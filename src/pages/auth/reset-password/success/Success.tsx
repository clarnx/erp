import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import { AUTH_PAGE_URL } from "@/constants/pageUrl";

import Button from "@/components/Button";
import Typography from "@/components/Typography";

const ResetPasswordSuccessPage: NextPage = () => {
  const router = useRouter();

  const handleBack = () => router.push(AUTH_PAGE_URL.LOGIN);

  return (
    <div className="w-full max-w-[40.625rem] rounded-xl bg-beluga px-[4.188rem] py-[4.125rem]">
      <div className="flex flex-col items-center">
        <Typography
          variant="h1"
          fontFamily="font-secondary"
          size="text-[1.625rem]"
          lineHeight="leading-[1.813rem]"
          textAlign="text-center"
          color="text-cloudBurst"
          className="mb-[1.188rem] font-bold capitalize"
        >
          Password has been successfully reset!
        </Typography>

        <Typography
          variant="h3"
          size="text-base"
          lineHeight="leading-[1.813rem]"
          textAlign="text-center"
          color="text-rustOleum"
          className="mb-[2.625rem] font-normal tracking-[0.0125em]"
        >
          You can now use your new password to sign in to your account!
        </Typography>

        <Button
          type="button"
          className="w-full justify-center font-medium"
          onClick={handleBack}
          role="button"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default ResetPasswordSuccessPage;
