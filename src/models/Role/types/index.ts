import { Document } from "mongoose";

export interface IRolePermission extends Document {
  canView: boolean;
  canAdd: boolean;
  canUpdate: boolean;
  canDelete: boolean;
  canCancel: boolean;
  canDownload: boolean;
}

export interface IRoleMenuItem extends Document {
  key: string;
  value: IRolePermission;
}

export interface IRole extends Document {
  roleName: string;
  description: string;
  permissions: IRoleMenuItem[];
}
