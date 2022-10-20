import { NextPage } from "next";
import { NextApiRequest, NextApiResponse } from "next";
import { AppInitialProps } from "next/app";
import { NextHandler } from "next-connect";

import ErrorHandler from "@/utils/errorHandler";

export type NextApplicationPage = NextPage & {
  requireAuth?: boolean;
};

export type NextAppProps = {
  Component: NextApplicationPage;
  pageProps: AppInitialProps["pageProps"];
};

export type CatchAsyncErrors = (
  req: NextApiRequest,
  res: NextApiResponse,
  next: NextHandler
) => Promise<void>;

export type EmailOptions = {
  email: string;
  subject: string;
  html: string;
};

export type ApiResponse<T> = {
  success: boolean;
  response?: T;
  message?: string;
  error?: ErrorHandler;
  stack?: string;
};
