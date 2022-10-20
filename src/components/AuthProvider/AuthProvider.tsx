import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FC, Fragment, PropsWithChildren, useEffect, useState } from "react";

import { whitelistPaths } from "@/config";

import { AUTH_PAGE_URL } from "@/constants/pageUrl";

import Loading from "../Loading";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { status, data: session } = useSession();

  const router = useRouter();

  const [isRouteChange, setIsRouteChange] = useState(false);

  const handleStartChange = () => setIsRouteChange(true);

  const handleStopChange = () => setIsRouteChange(false);

  const isWhitelistRoute = whitelistPaths.includes(router.pathname);
  const isAuthenticated = session && isWhitelistRoute;
  const isNotAuthenticated = !isWhitelistRoute && status === "unauthenticated";

  useEffect(() => {
    router.events.on("routeChangeStart", handleStartChange);
    router.events.on("routeChangeComplete", handleStopChange);
    router.events.on("routeChangeError", handleStopChange);

    if (isAuthenticated) router.replace("/");
    if (isNotAuthenticated) router.replace(AUTH_PAGE_URL.LOGIN);

    return () => {
      router.events.off("routeChangeStart", handleStartChange);
      router.events.off("routeChangeComplete", handleStopChange);
      router.events.off("routeChangeError", handleStopChange);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNotAuthenticated, isAuthenticated]);

  if (isRouteChange || status === "loading") return <Loading />;

  return <Fragment>{children}</Fragment>;
};

export default AuthProvider;
