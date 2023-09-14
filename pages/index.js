import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import { useCashApp } from "../hooks/cashapp"


export default function Home() {
  const {connected, publicKey} = useCashApp()
  return (
    <>
    <h1>hello</h1>
    <WalletMultiButton>
      <span>{connected?truncate(publicKey.toString()):"Not connect"}</span>
    </WalletMultiButton>
    </>
  )
}

export const truncate = (longstring, limit=10) =>{
  if(longstring.length>limit){
    return longstring.substring(0,limit)+'...'
  }
  return longstring
}