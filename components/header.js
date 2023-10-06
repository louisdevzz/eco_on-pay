import Link from "next/link"
import dynamic from "next/dynamic"
import "@fontsource/poppins/400.css"; 
import { Roboto } from 'next/font/google'
import CartModal from "./cart";
import { useState } from "react";
import { useCart } from "react-use-cart";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";


const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

require('@solana/wallet-adapter-react-ui/styles.css')
// const Wallets = dynamic(() => import("../context/wallet"), { ssr: false });

export default function Header(){
  const [open, setOpen] = useState(false)
  const {
    isEmpty,
    totalItems,
} = useCart();
console.log(totalItems)
  return(
    <div className={roboto.className} style={{backgroundColor: "white"}}>
  <div className="border py-3 px-6">
    <div className="flex justify-between">
      <div className="flex items-center">
        <Link href={'/'}><img style={{width: "60px", height: "60px"}} src={"/img/logo1.png"} alt="logo"/></Link>
        <Link href={'/'} className="ml-2 text-2xl font-bold text-[#252C32]">Eco On-Pay</Link>
      </div>
      <div className="ml-6 flex flex-1 gap-x-3">
        <input type="text" className="w-full h-[50px] rounded-md focus:outline-none focus:border-teal-600 border border-[#DDE2E4] px-3 py-2 text-sm" placeholder="Search" />
      </div>
      <div className="ml-2 flex">
        <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          <Link href={'/order'} className="text-sm font-medium">Orders</Link>
        </div>
        {/* <div className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          <span className="text-sm font-medium">Favorites</span>
        </div> */}
        <button onClick={e=>{
          setOpen(true)
        }} className="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-5 mr-2 hover:bg-gray-100">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            {!isEmpty&&
            <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{totalItems.toString()}</span>}
            
          </div>
          {/* <Sa href={'/cart'} className="text-sm font-medium">Cart</Sa> */}
          <span className="text-sm font-medium">Cart</span>
          <CartModal open={open} setOpen={setOpen}/>
        </button>
        {/* <Wallets/> */}
        <div className="basis-1/4">
        <WalletMultiButton className='!bg-gray-900 hover:scale-105'/>
        </div>
      </div>
    </div>
    {/* <div className="mt-4 flex items-center justify-between">
      <div className="flex gap-x-8">
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">New Releases</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Books</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Computers</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Fashion</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Health</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Pharmacy</span>
        <span className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Toys & Games</span>
      </div>
      <Link href={'/seller_onboarding'} className="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Becoma a seller</Link>
    </div> */}
  </div>
</div>
  )
}
export const truncate = (longstring, limit=8) =>{
  if(longstring.length>limit){
    return longstring.substring(0,limit)+'...'
  }
  return longstring
}