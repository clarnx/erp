import { NextPage } from "next";
import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { NextSeo } from "next-seo";
import { Provider } from "react-redux";

import "@/styles/globals.css";

import { GeneratePageTitle } from "@/utils/helpers";

import { site } from "@/config";

import AuthProvider from "@/components/AuthProvider";

import store from "@/redux/store";

const MyApp: NextPage<AppProps<{ session: any }>> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const router = useRouter();
  const pageTitle =
    router.pathname !== "/500" &&
    router.pathname !== "/404" &&
    router.pathname !== "/"
      ? GeneratePageTitle(router.pathname)
      : router.pathname === "/"
      ? "Dashboard"
      : site.title;

  return (
    <>
      <NextSeo
        title={pageTitle}
        description={site.description}
        canonical={site.siteUrl}
        titleTemplate={`${site.title} ${
          pageTitle !== site.title ? "| %s" : ""
        }`}
      />

      <SessionProvider session={session}>
        <Provider store={store}>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </Provider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
