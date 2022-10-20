import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";

import { AUTH_PAGE_URL } from "@/constants/pageUrl";

import Button from "@/components/Button";
import Icon from "@/components/Icon";
import Typography from "@/components/Typography";

const ForgotPasswordSuccessPage: NextPage = () => {
  const router = useRouter();

  const handleBack = () => router.push(AUTH_PAGE_URL.LOGIN);

  return (
    <div className="w-full max-w-[40.625rem] rounded-xl bg-beluga px-[3.438rem] pt-[5rem] pb-[3.313rem]">
      <div className="flex flex-col items-center">
        <div className="relative left-5 mb-8">
          <Icon src="/svg/EmailSent.svg" height={127} width={160.71} />
        </div>

        <Typography
          variant="h1"
          fontFamily="font-secondary"
          size="text-[1.625rem]"
          lineHeight="leading-[1.813rem]"
          textAlign="text-center"
          color="text-cloudBurst"
          className="mb-[1.188rem] font-bold capitalize"
        >
          link sent
        </Typography>

        <Typography
          variant="h3"
          fontFamily="font-secondary"
          size="text-lg"
          lineHeight="leading-[1.813rem]"
          textAlign="text-center"
          color="text-improbable"
          className="mb-[2.625rem] px-14 font-medium"
        >
          A link to reset your password has been sent to your registered email
          address. Please check your email and return to sign in.
        </Typography>

        <Button
          type="button"
          className="w-full justify-center font-medium"
          onClick={handleBack}
          role="button"
        >
          Back to Sign In
        </Button>
      </div>
    </div>
  );
};

export default ForgotPasswordSuccessPage;
