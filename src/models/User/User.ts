import mongoose, { Schema } from "mongoose";

import { UserRole } from "./config";
import type { IUser } from "./types";

export const userSchema = new Schema<IUser>(
  {
    accountNumber: {
      type: Number,
      required: true,
      unique: true,
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
    role: {
      type: String,
      enum: [UserRole.Superadmin, UserRole.Stylish, UserRole.Partner],
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
