import Link from "next/link"
import dynamic from "next/dynamic"
import "@fontsource/poppins/400.css"; 
import { Roboto } from 'next/font/google'
import CartModal from "./cart";
import { useState } from "react";
import { useCart } from "react-use-cart";

const roboto = Roboto({
  weight: '500',
  subsets: ['latin'],
})

require('@solana/wallet-adapter-react-ui/styles.css')
const Wallets = dynamic(() => import("../context/wallet"), { ssr: false });

export default function Header(){
  const [open, setOpen] = useState(false)
  const {
    isEmpty,
    totalItems,
} = useCart();
console.log(totalItems)
  return(
    <div class={roboto.className} style={{backgroundColor: "white"}}>
  <div class="border py-3 px-6">
    <div class="flex justify-between">
      <div class="flex items-center">
        <Link href={'/'}><img style={{width: "60px", height: "60px"}} src={"/img/logo1.png"} alt="logo"/></Link>
        <Link href={'/'} class="ml-2 text-2xl font-bold text-[#252C32]">Eco On-Pay</Link>
      </div>
      <div class="ml-6 flex flex-1 gap-x-3">
        <div class="flex cursor-pointer select-none items-center gap-x-2 rounded-md border bg-[#4094F7] py-2 px-4 text-white hover:bg-blue-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span class="text-sm font-medium">Categories</span>
        </div>
        <input type="text" class="w-full h-[50px] rounded-md focus:outline-none focus:border-teal-600 border border-[#DDE2E4] px-3 py-2 text-sm" placeholder="Search" />
      </div>
      <div class="ml-2 flex">
        <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
            <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd" />
          </svg>
          <Link href={'/order'} class="text-sm font-medium">Orders</Link>
        </div>
        <div class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-4 hover:bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
          </svg>
          <span class="text-sm font-medium">Favorites</span>
        </div>
        <button onClick={e=>{
          setOpen(true)
        }} class="flex cursor-pointer items-center gap-x-1 rounded-md py-2 px-5 mr-2 hover:bg-gray-100">
          <div class="relative">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            {!isEmpty&&
            <span class="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 p-2 text-xs text-white">{totalItems.toString()}</span>}
            
          </div>
          {/* <Sa href={'/cart'} class="text-sm font-medium">Cart</Sa> */}
          <span class="text-sm font-medium">Cart</span>
          <CartModal open={open} setOpen={setOpen}/>
        </button>
        <Wallets/>
      </div>
    </div>
    <div class="mt-4 flex items-center justify-between">
      <div class="flex gap-x-8">
        <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">New Releases</span>
        <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Books</span>
        <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Computers</span>
        <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Fashion</span>
        <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Health</span>
        <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Pharmacy</span>
        <span class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Toys & Games</span>
      </div>
      <Link href={'/seller_onboarding'} class="cursor-pointer rounded-sm py-1 px-2 text-sm font-medium hover:bg-gray-100">Becoma a seller</Link>
    </div>
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