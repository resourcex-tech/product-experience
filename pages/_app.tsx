import "@/styles/globals.css";
import "@flaticon/flaticon-uicons/css/all/all.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
