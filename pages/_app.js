import '@/styles/globals.css'
import dynmaic from 'next/dynamic'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/400.css"; 
import Head  from 'next/head'
import React from 'react'
import {CartProvider} from 'react-use-cart'

require('@solana/wallet-adapter-react-ui/styles.css');
const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
});
const WalletConnectionProvider = dynmaic(()=> import('../context/walletconnect'),{
  ssr: false
})

export default function App({ Component, pageProps }) {
  return(
    <>
        <ChakraProvider theme={theme}>
          <WalletConnectionProvider>
            <BrowserRouter>
            <Head>
              <title>Eco On-Pay</title>
              <meta property="og:title" content="Eco On-Pay" key="title" />
              <link rel="icon" href="/img/logo_dark.png" sizes="any" />
            </Head>
            <CartProvider>
              <Component {...pageProps} />
            </CartProvider>
            </BrowserRouter>
          </WalletConnectionProvider>
        </ChakraProvider>
    </>
  )
}
