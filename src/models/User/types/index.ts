import { Document } from "mongoose";

import type { IRole } from "@/models/Role/types";

export interface IUserSecurityQuestion extends Document {
  question: string;
  answer: string;
}

export interface IUserDocument extends Document {
  accountNumber: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: IRole;
  permission?: string;
  securityQuestion?: IUserSecurityQuestion;
  status?: boolean;
  resetPasswordToken?: string;
  resetPasswordExpire?: Date;
}

export interface IUser extends IUserDocument {
  matchPassword(enteredPassword: string): boolean;
}

export type UserDetails = {
  accountNumber: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  securityQuestion: string;
  securityAnswer: string;
};
