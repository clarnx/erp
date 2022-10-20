import { NextApiHandler, NextApiResponse } from "next";
import { NextHandler } from "next-connect";

import ErrorHandler from "@/utils/errorHandler";

export const onError = (
  err: ErrorHandler,
  _req: NextApiHandler,
  res: NextApiResponse,
  _next: NextHandler
) => {
  err.statusCode = err.statusCode || 500;

  let error = { ...err };

  error.message = err.message;

  if (err.name === "CastError") {
    const message = "Resource not found";
    error = new ErrorHandler(message, 400);
  }

  res.status(error.statusCode).json({
    success: false,
    error,
    stack: error.stack,
  });
};
