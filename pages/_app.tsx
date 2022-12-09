import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TechLAnd 💻 📖</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta name="description" content="panel Admin" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
