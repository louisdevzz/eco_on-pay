import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useCashApp } from "../hooks/cashapp"
import { useState } from "react"
import Image from "next/image"

const style = {
  //px-3 py-2 w-[400px] rounded-lg h-[50px] border boder-gray-200 focus:outline-none focus:border-[#0abde3]
  input:{
    marginTop: "10px",
    padding: "5px 10px",
    width: "400px",
    height: "50px",
    borderRadius: "10px",
    border: "1px solid gray",
    outline:"none"
  }
}

export default function Test() {


  //create user
  const [name, setName] = useState('')
  const [avatar, setAvatar] = useState('')

  //create produdct
  const [titile, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [quanlity, setQuanlity] = useState(0)
  const [color, setColor] = useState('')

  //console.log(titile)

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
    useAddress,
    initUser,
    createProduct,
    product
    
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

  //console.log("Data Product: ",product)

 

  return (
    <>
    <div className="mt-5 ml-5 flex flex-col">
      <input type="submit" value={truncate(useAddress)} className="mb-3 cursor-pointer text-xl front-bold mt-3 ml-3 border border-gray-300 w-40 h-50 px-3 py-2 bg-[#1abc9c] text-white rounded-md"/>
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
              <p className="mr-2">{Object.values(st.to)[0]}</p>
              {/* <p className="mr-2">{from.map(({name})=>{return name})}</p> */}
              <p className="mr-2">{st.description}</p>
              <p className="mr-2">{date.toLocaleDateString()}</p>
              <p className="font-medium">{st.amount} SOL</p>
            </div>
          )
        })}

      </div>
      <div className="mt-10 flex flex-col">
        <input style={style.input} type="text" onChange={(e)=>setName(e.target.value)} placeholder="enter your name"/>
        <input style={style.input} type="text" onChange={(e)=>setAvatar(e.target.value)} placeholder="enter your avatar link "/>
        <input type="submit" value="Create user" onClick={()=>{initUser(name,avatar)}} className="mt-5 w-[200px] h-[50px] rounded-lg text-md cursor-pointer font-bold bg-[#1abc9c] text-white"/>
      </div>
      <div className="mt-10 flex flex-col">
        <input style={style.input} type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="enter titlte product"/>
        <input style={style.input} type="text" onChange={(e)=>setDescription(e.target.value)} placeholder="enter description product"/>
        <input style={style.input} type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="enter price product"/>
        <input style={style.input} type="number" onChange={(e)=>setQuanlity(e.target.value)} placeholder="enter amount product"/>
        <input style={style.input} type="text" onChange={(e)=>setColor(e.target.value)} placeholder="enter color product"/>
        <input type="submit" value="Create product" onClick={()=>{createProduct(titile,price,description,quanlity,color)}} className="mt-5 w-[200px] h-[50px] rounded-lg text-md cursor-pointer font-bold bg-[#1abc9c] text-white"/>
      </div>
      <div className="mt-5">
        <img style={{width:"500px",height: "500px"}} src="https://moccasin-handsome-jackal-895.mypinata.cloud/ipfs/QmP8UPD5HBeYqmNF5xhZyeCRqLso5BHLduDALG3CCsxqYG" alt=""/>
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