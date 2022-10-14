import { NextApplicationPage } from "@/config";

export const withAuth = (Component: NextApplicationPage) => {
  Component.requireAuth = true;
  return Component;
};
