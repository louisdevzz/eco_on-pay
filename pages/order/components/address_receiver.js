import Link from "next/link"

export default function AddressReceiver(){
    return(
        <>
            <div className="border-dashed border-t-2 border-teal-500 mt-5 ">
                <p>Delivery Address</p>
                <div className="grid grid-cols-3 gap-4 mt-5">
                    <div className="flex flex-col border-r border-gray-300 mr-5">
                        <span className="text-md text-gray-800">Name</span>
                        <span className="text-sm text-gray-500 mt-2">(+84) 389289156</span>
                        <span className="text-sm text-gray-500 mt-2">Nhà Trọ Minh Tiến, 2 Chấm Than, Ấp Bình Tiền 1, Xã Đức Hòa Hạ, Huyện Đức Hòa, Long An</span>
                    </div>
                    {/* <div className="col-span-2">
                            <p>Da giao</p>
                    </div> */}
                </div>
                <div>
                    <div className="w-full mt-10 h-full">
                            <h1 className="font-bold mt-2 border-b border-gray-200 py-2">Phụ Kiện Công Nghệ Giá Gốc</h1>
                            <Link href={'/order/1'} className="mt-2 flex flex-row border-b border-gray-200 py-2">
                                <img className="px-3 py-2" src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljo20l1y3r42f0_tn" width={130} height={130} alt="product"/>
                                <div className="flex flex-col mt-2">
                                    <span>Chuột không dây Fuhlen A09 hàng nhập khẩu bảo hành 12 tháng</span>
                                    <span>x1</span>
                                    <span className="text-end">61.000</span>
                                </div>
                                
                            </Link>
                            {/* <div className="text-end">
                                <h1 className="px-3 font-bold text-xl">Thanh tien: <span className="text-red-500">61.000</span></h1>
                            </div> */}
                            <div className="grid grid-cols-3 text-md">
                                <div className="text-end col-span-2 border-y border-gray-200 text-gray-500">
                                    <div className="mr-2 flex flex-col">
                                        <span className="">Tong tien hang</span>
                                        <span className="border-t border-gray-200">Tong tien hang</span>
                                        <span className="border-t border-gray-200">Tong tien hang</span>
                                        <span className="border-t border-gray-200">Tong tien hang</span>
                                    </div>
                                </div>
                                <div className="border border-gray-200 text-end text-gray-800">
                                    <div className="mr-2 flex flex-col">
                                        <span>32.000</span>
                                        <span className="border-t border-gray-200">32.000</span>
                                        <span className="border-t border-gray-200">32.000</span>
                                        <span className="border-t border-gray-200">32.000</span>
                                    </div>
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </>
    )
}