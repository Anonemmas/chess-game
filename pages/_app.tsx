import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import Router from "next/router";

import {
  createClient,
  configureChains,
  defaultChains,
  WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";

import { theme } from "styles/theme";
import { useState } from "react";
import Loader from "@components/Loader";

const { provider, webSocketProvider } = configureChains(defaultChains, [
  publicProvider(),
]);

const client = createClient({
  provider,
  webSocketProvider,
  autoConnect: true,
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setIsLoading(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setIsLoading(false);
  });
  return (
    <WagmiConfig client={client}>
      <ChakraProvider theme={theme}>
        {isLoading && <Loader />}
        <Component {...pageProps} />
      </ChakraProvider>
    </WagmiConfig>
  );
}
