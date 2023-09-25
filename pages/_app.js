import '@/styles/globals.css'
import dynmaic from 'next/dynamic'
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/400.css"; 


require('@solana/wallet-adapter-react-ui/styles.css');
const theme = extendTheme({
  config: {
    initialColorMode: "light",
  },
  fonts: {
    heading: `'Heading Font Name', sans-serif`,
    body: `'Body Font Name', sans-serif`,
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
            <Component {...pageProps} />
            </BrowserRouter>
          </WalletConnectionProvider>
        </ChakraProvider>
    </>
  )
}
