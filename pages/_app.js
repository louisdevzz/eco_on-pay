import '@/styles/globals.css'
import dynmaic from 'next/dynamic'
import { BrowserRouter } from 'react-router-dom';


require('@solana/wallet-adapter-react-ui/styles.css');

const WalletConnectionProvider = dynmaic(()=> import('../context/walletconnect'),{
  ssr: false
})

export default function App({ Component, pageProps }) {
  return(
    <>
        <WalletConnectionProvider>
          <BrowserRouter>
          <Component {...pageProps} />
          </BrowserRouter>
        </WalletConnectionProvider>
    </>
  )
}
