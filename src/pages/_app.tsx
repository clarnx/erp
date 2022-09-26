import { AppProps } from "next/app";
import Head from "next/head";

import "@/styles/globals.css";

import { site } from "@/config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={site.title} />
        <meta name="description" content={site.description} />
        <meta name="url" content={site.siteUrl} />
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
