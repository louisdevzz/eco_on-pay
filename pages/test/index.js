import { WalletMultiButton } from "@solana/wallet-adapter-react-ui"
import { useCashApp } from "../../hooks/cashapp"
import { useState } from "react"


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

  const [nameshop,setNameShop] = useState('')
  //create produdct
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [about, setAbout] = useState('')
  const [quanlity, setQuanlity] = useState('')
  const [color, setColor] = useState('')
  const [images, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [votes, setVotes] = useState('')

  //console.log(titile)

  const {
    connected, 
    publicKey, 
    amount,
    setAmount,
    receiver,
    setReceiver,
    doTransaction,
    transaction,
    useAddress,
    initUser,
    createProduct,
    initSeller
    
  } = useCashApp()

  

  console.log(transaction)
  const onAmount = (e) =>{
    e.preventDefault()
    console.log(e.target.value)
    const newAmount = e.target.value

    setAmount(newAmount)
  }

  const onPay = async()=>{
    doTransaction({amount,receiver})
    //clear states
    setAmount(0)
    setReceiver("")
  }

  //console.log("Data Product: ",product)

 
  console.log(transaction)
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
        <button className="h-[50px] w-[200px] bg-[#1abc9c] rounded-lg text-white font-bold text-xl" onClick={onPay}>Pay</button>
      </div>
      <div>
        {transaction.map((st)=>{
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
        <input style={style.input} type="text" onChange={(e)=>setNameShop(e.target.value)} placeholder="enter your name shop"/>
        <input type="submit" value="Create seller" onClick={()=>{initSeller(nameshop)}} className="mt-5 w-[200px] h-[50px] rounded-lg text-md cursor-pointer font-bold bg-[#1abc9c] text-white"/>
      </div>
      <div className="mt-10 flex flex-col">
        <input style={style.input} type="text" onChange={(e)=>setTitle(e.target.value)} placeholder="enter titlte product"/>
        <input style={style.input} type="text" onChange={(e)=>setAbout(e.target.value)} placeholder="enter about product"/>
        <input style={style.input} type="text" onChange={(e)=>setPrice(e.target.value)} placeholder="enter price product"/>
        <input style={style.input} type="number" onChange={(e)=>setQuanlity(e.target.value)} placeholder="enter quanlity product"/>
        <input style={style.input} type="text" onChange={(e)=>setColor(e.target.value)} placeholder="enter color product"/>
        <input style={style.input} type="text" onChange={(e)=>setImage(e.target.value)} placeholder="enter image link product"/>
        <input style={style.input} type="text" onChange={(e)=>setCategory(e.target.value)} placeholder="enter category product"/>
        <input style={style.input} type="text" onChange={(e)=>setVotes(e.target.value)} placeholder="enter votes product"/>

        <input type="submit" value="Create product" onClick={()=>{createProduct(title,about,price,color,images,category,quanlity,votes)}} className="mt-5 w-[200px] h-[50px] rounded-lg text-md cursor-pointer font-bold bg-[#1abc9c] text-white"/>
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