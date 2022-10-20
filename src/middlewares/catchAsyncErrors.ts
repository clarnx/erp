import type { NextApiRequest, NextApiResponse } from "next";
import { NextHandler } from "next-connect";

import type { CatchAsyncErrors } from "@/config";

export const catchAsyncErrors =
  (func: CatchAsyncErrors) =>
  (req: NextApiRequest, res: NextApiResponse, next: NextHandler) => {
    Promise.resolve(func(req, res, next)).catch(next);
  };
