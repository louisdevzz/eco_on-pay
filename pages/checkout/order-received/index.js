import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "react-use-cart"
import { useCashApp } from "@/hooks/cashapp"
import { useWallet } from "@solana/wallet-adapter-react"

const style = {
    border:"border border-gray-200",
    title: "text-center border border-gray-200"
}


export default function OrderRecevied(){
    const { publicKey } = useWallet();
    const {items,cartTotal} = useCart()
    const {txnHash} = useCashApp()
    console.log(txnHash)
    return(
        <>
        <Header/>
        <div className="container max-w-screen-lg min-h-screen mx-auto py-5 pb-20 scroll-smooth">
            <h1 className="text-4xl font-semibold">Checkout</h1> 
            <div className="mt-5 ml-2">
                <span>Thank you. Your order has been received.</span>
                <ul class="mb-3 flex mt-3 ml-10 text-sm text-gray-800">
                    <li class="flex flex-col mr-20"> Order number: <strong className="text-base font-bold">291</strong>
                    </li>
                    <li class="flex flex-col mr-20"> Date: <strong className="text-base font-bold">{new Date().toLocaleString("en-US")}</strong>
                    </li>
                    <li class="flex flex-col mr-20"> Total: <strong>
                        <span className="text-base font-bold">
                            <bdi>{cartTotal}&nbsp; <span class="">€</span>
                            </bdi>
                        </span>
                        </strong>
                    </li>
                    <li class="flex flex-col mr-20"> Payment method: <strong className="text-base font-bold">Pay with Solana Pay</strong>
                    </li>
                </ul>
                <div className="mt-5">
                    <h1 className="text-2xl font-semibold">Order details</h1>
                    <div className="mt-3">
                    <table className="border border-gray-200 text-start w-full">
                        <thead>
                            <tr className="text-base font-semibold">
                                <th className={style.title}>Product</th>
                                <th className={style.title}>Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item)=>(
                                <tr className="text-center">
                                    <td className={style.border}> {item.title}&nbsp; <strong className="product-quantity">x1</strong></td>
                                    <td className={style.border}>
                                        <span className="">
                                        <bdi>{item.price}&nbsp; <span className="">$</span>
                                        </bdi>
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                        <tfoot>
                            <tr className="text-center">
                                <th className={style.border}>Subtotal</th>
                                <td className={style.border}>
                                    <span className="">
                                    <bdi>{cartTotal}&nbsp; <span className="">$</span>
                                    </bdi>
                                    </span>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <th className={style.border}>Payment method</th>
                                <td data-title="Shipping" className={style.border}>
                                    <ul id="shipping_method">
                                    <li>
                                        <input type="hidden" name="shipping_method[0]" data-index="0" id="shipping_method_0_free_shipping1" value="free_shipping:1" className="shipping_method"/>
                                        <label for="shipping_method_0_free_shipping1">Pay with Solana Pay</label>
                                    </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <th className={style.border}>Shipping</th>
                                <td data-title="Shipping" className={style.border}>
                                    <ul id="shipping_method">
                                    <li>
                                        <input type="hidden" name="shipping_method[0]" data-index="0" id="shipping_method_0_free_shipping1" value="free_shipping:1" className="shipping_method"/>
                                        <label for="shipping_method_0_free_shipping1">Free shipping</label>
                                    </li>
                                    </ul>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <th className={style.border}>Total</th>
                                <td className={style.border}>
                                    <strong>
                                    <span className="">
                                        <bdi>{cartTotal}&nbsp; <span className="">$</span>
                                        </bdi>
                                    </span>
                                    </strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                </div>
                <div className="mt-5">
                    <h1 className="text-2xl font-semibold">Solana Pay Payment Details</h1>
                    <table class="border border-gray-200 mt-5 w-full">
                        <tbody className="w-full">
                            <tr className="grid grid-cols-2 border border-gray-200 py-1 text-center justify-between">
                                <th>Transaction ID:</th>
                                <td>
                                    <a className="text-gray-500 font-normal" href={`https://solscan.io/tx/${txnHash}?cluster=devnet`} target="_blank">{truncate(txnHash)}</a>
                                </td>
                            </tr>
                            <tr className="grid grid-cols-2 text-center border border-gray-200 py-1">
                                <th>Wallet Address:</th>
                                <td className=" font-normal">{publicKey&&publicKey.toBase58()}</td>
                            </tr>
                            <tr className="grid grid-cols-2 text-center border border-gray-200 py-1">
                                <th>Amount:</th>
                                <td className="font-normal">{cartTotal*0.0429} SOL</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export const truncate = (longstring, limit=20) =>{
    if(longstring.length>limit){
      return longstring.substring(0,limit)+'...'
    }
    return longstring
}
