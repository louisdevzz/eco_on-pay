import Footer from "@/components/footer"
import Header from "@/components/header"
import ModalPay from "@/components/modal_pay"
import { useState } from "react"
import { useCart } from "react-use-cart";


const style = {
    border:"border border-gray-200",
    title: "text-center border border-gray-200"
}

export default function CheckOut(){
    const [checked, setChecked] = useState(false)
    const {items,cartTotal} = useCart()
    return(
        <>
        <Header/>
        <div className="container max-w-screen-lg min-h-screen mx-auto py-5 pb-20 scroll-smooth">
            <div className="">
              <h1 className="text-4xl font-semibold">Checkout</h1>  
            </div>
            <div className="mt-5 ml-2">
                <h1 className="text-xl font-medium">Billing details</h1>
                <div className="mt-5 grid grid-cols-2 gap-10">
                    <div className="flex flex-col">
                        <div className="grid grid-cols-2">
                            <div className="">
                                <label>Frist name<span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-2 border border-gray-200 rounded-lg shadow-sm mt-1 focus:outline-none"/>
                            </div>
                            <div>
                                <label>Last name<span className="text-red-500">*</span></label>
                                <input type="text" className="px-3 py-2 border border-gray-200 rounded-lg shadow-sm mt-1 focus:outline-none"/>
                            </div>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label>Country / Reginon<span className="text-red-500">*</span></label>
                            <select className="px-3 py-2 border border-gray-200 rounded-lg shadow-sm mt-1 focus:outline-none">
                                <option value="Viet Nam" selected>Viet Nam</option>
                                <option value="Trung Quoc">Trung Quoc</option>
                                <option value="My">My</option>
                                <option value="Singapore">Singapore</option>
                                <option value="Nhat Ban">Nhat Ban</option>
                            </select>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label>Email address</label>
                            <input type="text" className="px-3 py-2 border border-gray-200 rounded-lg shadow-sm mt-1 focus:outline-none"/>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex flex-col">
                            <label>Number Phone<span className="text-red-500">*</span></label>
                            <input type="text" className="px-3 py-2 border border-gray-200 rounded-lg shadow-sm mt-1 focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label>Address line <span className="text-red-500">*</span></label>
                            <input type="text" className="px-3 py-2 border border-gray-200 rounded-lg shadow-sm mt-1 focus:outline-none"/>
                        </div>
                        <div className="flex flex-col mt-3">
                            <label>Order note</label>
                            <textarea className="px-3 py-2 border border-gray-200 rounded-lg shadow-sm mt-1 focus:outline-none resize-none"></textarea>
                        </div>
                    </div>
                </div>
                <h1 className="text-xl font-medium">Your order</h1>
                <div className="mt-3">
                    <table className="border border-gray-200 text-start w-full">
                        <thead>
                            <tr className="text-lg font-semibold">
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
                <div className="mt-10 bg-[#ebe9eb] h-full w-full px-3 py-5">
                    <div className="flex flex-row">
                        <h1 className="text-lg mr-2 font-semibold text-[#333333]">Pay with Solana Pay</h1>
                        <img src="https://solana-pay-demo.juxdan.io/wp-content/plugins/wc-solana-pay/assets/img/solana_pay_black_gradient.svg" alt="Pay with Solana Pay"></img>
                    </div>
                    <div className="mt-5">
                        <span>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="#" className="text-blue-500 underline">privacy policy</a>.</span>
                        <div className="mt-5">
                            <input type="checkbox" className="mr-2" onChange={(e)=>setChecked(e.target.checked)}/>
                            <label>I have read and agree to the website <a href="#" className="text-blue-500 underline">terms and conditions.</a><span className="text-red-500">*</span></label>
                        </div>
                        <div className="mt-5">
                            <ModalPay checked={checked}/>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        <Footer/>
        </>
    )
}