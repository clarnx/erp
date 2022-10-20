import { useSession } from "next-auth/react";
import { FC, Fragment, PropsWithChildren, useMemo } from "react";

import { noop } from "@/utils/helpers";
import { useRouteTracking } from "@/hooks";

import { LayoutOptions } from "./config";
import type { LayoutProps } from "./types";
import Header from "../Header";
import Icon from "../Icon";
import Loading from "../Loading";
import Sidebar from "../Sidebar";

const Layout: FC<PropsWithChildren<LayoutProps>> = ({
  mode = LayoutOptions.Authenticated,
  children,
}) => {
  const { status, data: session } = useSession();

  const isRouteChange = useRouteTracking(noop, []);

  const renderContent = useMemo(() => {
    if (!session && mode === LayoutOptions.NotAuthenticated)
      return (
        <div
          className="relative flex min-h-screen items-center justify-center py-12 px-4"
          data-testid="layout-unauthenticated"
        >
          <div className="absolute top-[3.438rem] left-[3.75rem]">
            <Icon
              src="/svg/Logo.svg"
              height={16}
              width={112}
              className="auth-logo"
            />
          </div>

          {children}
        </div>
      );

    if (!session && status === "unauthenticated") return null;

    return (
      <div
        className="flex min-h-screen flex-col"
        data-testid="layout-authenticated"
      >
        <Header />

        <div className="flex flex-1 flex-col md:flex-row">
          <Sidebar />

          <main className="ml-64 flex-1" data-testid="content">
            {isRouteChange ? (
              <Loading height="h-[calc(100vh-108px)]" />
            ) : (
              children
            )}
          </main>
        </div>
      </div>
    );
  }, [children, mode, session, status, isRouteChange]);

  return <Fragment>{renderContent}</Fragment>;
};

export default Layout;
