import mongoose, { Schema } from "mongoose";

import { UserRole } from "./config";
import type { IUser, IUserSecurityQuestion } from "./types";

export const userSecurityQuestionSchema = new Schema<IUserSecurityQuestion>({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
});

export const userSchema = new Schema<IUser>(
  {
    accountNumber: {
      type: Number,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    securityQuestion: {
      type: userSecurityQuestionSchema,
      default: null,
    },
    role: {
      type: String,
      enum: [
        UserRole.Superadmin,
        UserRole.Stylish,
        UserRole.Agency,
        UserRole.Partner,
      ],
      default: UserRole.Stylish,
    },
    permission: {
      type: String,
    },
    status: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models?.User || mongoose.model<IUser>("User", userSchema);

export default User;
