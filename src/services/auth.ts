import { onParseResponse } from "@/utils/helpers";

import { ApiResponse } from "@/config";

import { ForgotPasswordForm } from "@/pages/auth/forgot-password/types";
import { ResetPasswordForm } from "@/pages/auth/reset-password/types";

export const forgotPasswordAPI = async (
  values: ForgotPasswordForm
): Promise<ApiResponse<unknown>> => {
  const response = await onParseResponse<unknown>({
    method: "post",
    url: "/api/auth/forgot-password",
    data: values,
  });

  return response;
};

export const resetPasswordAPI = async (
  token: string,
  values: ResetPasswordForm
): Promise<ApiResponse<unknown>> => {
  const response = await onParseResponse<unknown>({
    method: "put",
    url: `/api/auth/reset-password/${token}`,
    data: values,
  });

  return response;
};
