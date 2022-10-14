import { NextPage } from "next";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { NextSeo } from "next-seo";
import { Provider } from "react-redux";

import "@/styles/globals.css";

import { GeneratePageTitle } from "@/utils/helpers";

import { NextAppProps, site } from "@/config";

import AuthProvider from "@/components/AuthProvider";
import Layout from "@/components/Layout";
import { LayoutOptions } from "@/components/Layout/config";

import store from "@/redux/store";

const MyApp: NextPage<NextAppProps> = ({
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
            {Component.requireAuth ? (
              <Layout>
                <Component {...pageProps} />
              </Layout>
            ) : (
              <Layout mode={LayoutOptions.NotAuthenticated}>
                <Component {...pageProps} />
              </Layout>
            )}
          </AuthProvider>
        </Provider>
      </SessionProvider>
    </>
  );
};

export default MyApp;
