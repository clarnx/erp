import absoluteUrl from "next-absolute-url";
import nextConnect from "next-connect";

import ErrorHandler from "@/utils/errorHandler";
import logger from "@/utils/logger";
import { sendEmail } from "@/utils/sendEmail";

import User from "@/models/User";

import { ForgotPasswordTemplate } from "@/templates/ForgotPassword";

import { catchAsyncErrors } from "@/middlewares/catchAsyncErrors";
import { onError } from "@/middlewares/errors";
import { mongoHandler } from "@/middlewares/mongodb";

const forgotPassword = catchAsyncErrors(async (req, res, next) => {
  
  try {
    
   const user = await User.findOne({ email: req.body.email });

  if (!user) return next(new ErrorHandler("Email not found", 404));

  // Get reset token
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  // Get origin
  const { origin } = absoluteUrl(req);

  // Create reset password url
  const resetUrl = `${origin}/auth/reset-password/${resetToken}`;

    
    await sendEmail({
      email: req.body.email,
      subject: "Carlisle Forgot Password",
      html: ForgotPasswordTemplate(resetUrl, req.body.email),
    });

    res.status(200).json({
      success: true,
      message: `Email sent to: ${user.email}`,
    });
  } catch (error) {
    logger(error, "error log");
    const catchError = error as Error;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save({ validateBeforeSave: false });

    logger(catchError.message, "error log msg");

    return next(new ErrorHandler(catchError.message, 500));
  }
});

const handler = nextConnect({ onError });

handler.post(mongoHandler(forgotPassword));

export default handler;
