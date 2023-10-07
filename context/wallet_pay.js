import { VStack, Button, Image } from "@chakra-ui/react";
import { useWallet } from "@solana/wallet-adapter-react";
import { useCashApp } from "@/hooks/cashapp";
import { useEffect, useState } from "react";
import Router from "next/router";
import { useNavigate } from "react-router-dom";

const WalletPay = ({amount,receiver}) => {
  const { select, wallets, publicKey, disconnect } = useWallet();
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const {doTransaction} = useCashApp()

  const onPay = async()=>{
    doTransaction({amount,receiver})
  }
  useEffect(() => { 
  
    //Implementing the setInterval method 
    const interval = setInterval(() => { 
      navigate('/checkout/order-received')
      Router.reload()
    }, 5500); 

    //Clearing the interval 
    return () => clearInterval(interval); 
}, []);

  return !publicKey ? (
    <VStack gap={4}>
      {wallets.filter((wallet) => wallet.readyState === "Installed").length >
      0 ? (
        wallets
          .filter((wallet) => wallet.readyState === "Installed")
          .map((wallet) => (
            <Button
              key={wallet.adapter.name}
              onClick={() => select(wallet.adapter.name)}
              w="50"
              size="lg"
              fontSize="md"
              bg="#512da8"
              color="white"
              _hover="#74b9ff"
              leftIcon={
                <Image
                  src={wallet.adapter.icon}
                  alt={wallet.adapter.name}
                  h={6}
                  w={6}
                  bg="#512da8"
                />
              }
            >
              {wallet.adapter.name}
            </Button>
          ))
      ) : (
        <span></span>
      )}
    </VStack>
  ) : (
    <VStack gap={4}>
        <div className="flex flex-col">
            <div className="text-center">
                <div className="text-center flex items-center justify-between"> 
                    <button onClick={onPay} style={{backgroundColor: "#512da8",width: "200px",borderRadius:"5px 0 0 5px",marginRight: "2px"}} className="text-xl  px-3 py-2 font-bold  w-[200px] h-[50px] text-white">
                      Pay Now
                    </button>
                   <div className="">
                   <button style={{backgroundColor: "#512da8",borderRadius:"0 5px 5px 0"}} onClick={()=>setOpen((prev)=>!prev)} className="px-1 h-[50px]  py-2 flex justify-between items-center">
                      <span className="text-white flex items-center">
                      <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 8.29289C4.68342 7.90237 5.31658 7.90237 5.70711 8.29289L12 14.5858L18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289C20.0976 8.68342 20.0976 9.31658 19.7071 9.70711L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L4.29289 9.70711C3.90237 9.31658 3.90237 8.68342 4.29289 8.29289Z" fill="#ffffff"></path> </g></svg>
                      </span>
                    </button>
                    {open?(<div id="dropdown" class="z-10 -ml-10 bg-white divide-y divide-gray-100 absolute rounded-lg shadow w-44">
                        <div class="py-2 text-sm text-gray-700" aria-labelledby="dropdownDefaultButton">
                           <Button onClick={disconnect} className="block px-4 py-2 hover:bg-gray-100">Disconnect wallet</Button>
                        </div>
                    </div>):null}
                   </div>
                </div>
                
                <span >Connected: &nbsp;<strong>{truncate(publicKey.toBase58())}</strong></span>
            </div>
        {/* <Button onClick={disconnect}>disconnect wallet</Button> */}
            
        </div>
    </VStack>
  );
};

export default WalletPay;
export const truncate = (longstring, limit=8) =>{
    if(longstring.length>limit){
      return longstring.substring(0,limit)+'...'
    }
    return longstring
}
