import Head from "next/head";
import Script from "next/script";

export const HeadAndScripts = () => {
  return (
    <>
      <Head>
        <title>Matias quiroga</title>
        <meta name="description" content="Matias quiroga" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Script src="https://cdn.jsdelivr.net/npm/animejs@3.0.1/lib/anime.min.js" />
    </>
  );
};
