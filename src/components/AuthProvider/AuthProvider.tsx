import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FC, PropsWithChildren, useEffect, useState } from "react";

import { whitelistPaths } from "@/config";

import { loginPath } from "@/constants/env";

import Loading from "../Loading";

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const { data: session } = useSession();

  const router = useRouter();

  const [isRouteChange, setIsRouteChange] = useState(false);

  const isNotAuthenticated =
    !whitelistPaths.includes(router.pathname) && !session;

  const handleStartChange = () => setIsRouteChange(true);

  const handleStopChange = () => setIsRouteChange(false);

  useEffect(() => {
    router.events.on("routeChangeStart", handleStartChange);
    router.events.on("routeChangeComplete", handleStopChange);
    router.events.on("routeChangeError", handleStopChange);

    const checkAuth = () => {
      if (isNotAuthenticated) router.replace(loginPath);
    };

    checkAuth();

    return () => {
      router.events.off("routeChangeStart", handleStartChange);
      router.events.off("routeChangeComplete", handleStopChange);
      router.events.off("routeChangeError", handleStopChange);
    };
  });

  if (isRouteChange) {
    return <Loading />;
  }

  return <>{children}</>;
};

export default AuthProvider;