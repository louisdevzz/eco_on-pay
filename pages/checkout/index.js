import Header from "@/components/header"

const style = {
    border:"border border-gray-200",
    title: "text-center border border-gray-200"
}

export default function CheckOut(){
    return(
        <>
        <Header/>
        <div className="container max-w-screen-lg mx-auto py-5">
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
                            <tr className="text-center">
                                <td className={style.border}> Solana Logo Sticker&nbsp; <strong className="product-quantity">x1</strong></td>
                                <td className={style.border}>
                                    <span className="woocommerce-Price-amount amount">
                                    <bdi>2,59&nbsp; <span className="woocommerce-Price-currencySymbol">€</span>
                                    </bdi>
                                    </span>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr className="text-center">
                                <th className={style.border}>Subtotal</th>
                                <td className={style.border}>
                                    <span className="woocommerce-Price-amount amount">
                                    <bdi>2,59&nbsp; <span className="woocommerce-Price-currencySymbol">€</span>
                                    </bdi>
                                    </span>
                                </td>
                            </tr>
                            <tr className="text-center">
                                <th className={style.border}>Shipping</th>
                                <td data-title="Shipping" className={style.border}>
                                    <ul id="shipping_method" className="woocommerce-shipping-methods">
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
                                    <span className="woocommerce-Price-amount amount">
                                        <bdi>2,59&nbsp; <span className="woocommerce-Price-currencySymbol">€</span>
                                        </bdi>
                                    </span>
                                    </strong>
                                </td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div> 
        </>
    )
}