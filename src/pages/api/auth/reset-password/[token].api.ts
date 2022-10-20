import crypto, { BinaryLike } from "crypto";
import absoluteUrl from "next-absolute-url";
import nextConnect from "next-connect";

import ErrorHandler from "@/utils/errorHandler";
import { sendEmail } from "@/utils/sendEmail";

import User from "@/models/User";
import type { UserDetails } from "@/models/User/types";

import { catchAsyncErrors } from "@/middlewares/catchAsyncErrors";
import { onError } from "@/middlewares/errors";
import { mongoHandler } from "@/middlewares/mongodb";
import { ResetPasswordTemplate } from "@/templates/ResetPassword";

const resetPassword = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.query;
  const { password, confirmPassword } = req.body;

  // Hash URL token
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(token as BinaryLike)
    .digest("hex");

  const user = await User.findOne({
    resetPasswordToken,
    resetPasswordExpire: { $gt: Date.now() },
  });

  if (!user)
    return next(
      new ErrorHandler(
        "Password reset token is invalid or has been expired",
        400
      )
    );

  if (password !== confirmPassword)
    return next(new ErrorHandler("Password does not match", 400));

  // Setup the new password
  user.password = password;

  user.resetPasswordToken = undefined;
  user.resetPasswordExpire = undefined;

  await user.save();

  const userDetails: UserDetails = {
    accountNumber: user.accountNumber,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    password,
    securityQuestion: user.securityQuestion.question,
    securityAnswer: user.securityQuestion.answer,
  };

  // Get origin
  const { origin } = absoluteUrl(req);

  // Create reset password url
  const loginUrl = `${origin}/auth/login`;

  await sendEmail({
    email: userDetails.email,
    subject: "Carlisle Reset Password",
    html: ResetPasswordTemplate(loginUrl, userDetails),
  });

  res.status(200).json({
    success: true,
    message: "Password updated successfully",
  });
});

const handler = nextConnect({ onError });

handler.put(mongoHandler(resetPassword));

export default handler;
