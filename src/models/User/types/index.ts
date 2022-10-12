import { Document } from "mongoose";

export interface IUserSecurityQuestion extends Document {
  question: string;
  answer: string;
}

export interface IUser extends Document {
  accountNumber: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  role: string;
  permission?: string;
  securityQuestion?: IUserSecurityQuestion;
  status?: boolean;
}
