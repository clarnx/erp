import { check, validationResult } from "express-validator";
import { NextApiRequest, NextApiResponse } from "next";

import User from "@/models/User";

import { mongoConnect } from "@/middlewares/mongodb";

import initMiddleware from "./helper/init-middleware";
import validateMiddleware from "./helper/validate-middleware";
import { RequestData, ResponseData } from "./types";

const validateBody = initMiddleware(
  validateMiddleware(
    [
      check("securityQuestion").isLength({ min: 1 }).isString(),
      check("securityAnswer").isLength({ min: 1 }).isString(),
      check("password").isLength({ min: 6 }).isString(),
      check("accountNumber").isLength({ min: 1 }).isString(),
      check("email").isLength({ min: 6 }).isEmail(),
    ],
    validationResult
  )
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === "PUT") {
    await validateBody(req, res);
    const userData = req.body as RequestData;

    try {
      await mongoConnect();

      await User.updateOne(
        {
          accountNumber: userData.accountNumber,
          email: userData.email,
        },
        {
          securityQuestion: {
            question: userData.securityQuestion,
            answer: userData.securityAnswer,
          },
          password: userData.password,
          status: true,
        }
      );

      res.json({ message: "Success!" });
    } catch (e) {
      res.status(500).json({ message: "error: " + e });
    }
  } else {
    res.status(404).json({ message: "Wrong method!" });
  }
}
