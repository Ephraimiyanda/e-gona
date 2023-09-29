import * as React from "react";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import Nav from "@/components/nav";
import "../app/globals.css"
function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <Nav/>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default App;