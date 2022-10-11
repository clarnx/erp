import { Document } from "mongoose";

export interface IUser extends Document {
  accountNumber: number;
  email: string;
  password: string;
  role: string;
  permission?: string;
  status?: boolean;
}
