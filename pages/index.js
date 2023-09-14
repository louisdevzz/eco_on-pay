import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useCashApp } from "../hooks/cashapp"


export default function Home() {
  const {
    connected, 
    publicKey, 
    amount,
    setAmount,
    transactionPurpose,
    setTransactionPurpose,
    receiver,
    setReceiver,
    doTransaction,
    transaction,
    
  } = useCashApp()
  console.log(transaction)
  const onAmount = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
    const newAmount = e.target.value

    setAmount(newAmount)
  }

  const onPay = async()=>{
    doTransaction({amount,receiver,transactionPurpose})
    //clear states
    setAmount(0)
    setReceiver("")
    setTransactionPurpose("")
  }

  return (
    <>
    <div className="mt-5 ml-5">
      <h1>hello</h1>
      <WalletMultiButton>
        <span>{connected?truncate(publicKey.toString()):"Not connect"}</span>
      </WalletMultiButton>
      <div className="flex flex-col mt-5">
        <input className="mb-3 border border-gray-300 px-3 py-2 w-[200px] rounded-lg focus:outline-none" onChange={onAmount} value={amount} id="amount" type="text" placeholder="Enter SOL"/>
        <input className="mb-3 border border-gray-300 px-3 py-2 w-[400px] rounded-lg focus:outline-none" value={receiver} onChange={(e) => setReceiver(e.target.value)} id="formwallet" type="text" placeholder="Enter from wallet"/>
        <input className="mb-3 border border-gray-300 px-3 py-2 w-[400px] rounded-lg focus:outline-none"value={transactionPurpose} onChange={(e) => setTransactionPurpose(e.target.value)}  id="comment" type="text" placeholder="Enter comment"/>
        <button className="h-[50px] w-[200px] bg-[#1abc9c] rounded-lg text-white font-bold text-xl" onClick={onPay}>Pay</button>
      </div>
      <div>
        {transaction.map((st,index)=>{
          const date = new Date(st.transactionDate)
          return(
            <div className="flex flex-row mt-5" key={st.id}>
              <p className="mr-2">{Object.values(st.from)[0]}</p>
              {/* <p className="mr-2">{from.map(({name})=>{return name})}</p> */}
              <p className="mr-2">{st.description}</p>
              <p className="mr-2">{date.toLocaleDateString()}</p>
              <p className=" font-medium">{st.amount} SOL</p>
            </div>
          )
        })}

      </div>
    </div>
    </>
  )
}

export const truncate = (longstring, limit=10) =>{
  if(longstring.length>limit){
    return longstring.substring(0,limit)+'...'
  }
  return longstring
}