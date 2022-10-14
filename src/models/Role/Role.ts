import mongoose, { Schema } from "mongoose";

import type { IRole, IRoleMenuItem, IRolePermission } from "./types";

export const RolePermissionSchema = new Schema<IRolePermission>({
  canView: {
    type: Boolean,
    default: false,
  },
  canAdd: {
    type: Boolean,
    default: false,
  },
  canUpdate: {
    type: Boolean,
    default: false,
  },
  canDelete: {
    type: Boolean,
    default: false,
  },
  canCancel: {
    type: Boolean,
    default: false,
  },
  canDownload: {
    type: Boolean,
    default: false,
  },
});

export const RoleMenuItemSchema = new Schema<IRoleMenuItem>({
  key: {
    type: String,
  },
  value: {
    type: RolePermissionSchema,
    default: null,
  },
});

export const RoleSchema = new Schema<IRole>(
  {
    roleName: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    permissions: {
      type: [RoleMenuItemSchema],
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Role = mongoose.models?.Role || mongoose.model<IRole>("Role", RoleSchema);

export default Role;
