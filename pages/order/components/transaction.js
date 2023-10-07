import Link  from "next/link";

export default function Transaction(){
    return(
        <div className="p-4 sm:ml-64 absolute">
                <div className="p-4 rounded-lg ml-10 w-[1000px]">
                    <div className="w-full mt-2">
                        <input type="text" className="px-3 py-2 w-full focus:outline-none border border-gray-200 rounded-lg focus:border-gray-500" placeholder="Search by id product"/>
                    </div>
                    <div className="w-full border boder-gray-300 mt-5 h-full">
                        <h1 className="ml-5 font-bold mt-2 border-b border-gray-200 py-2">Product details</h1>
                        <Link href={'/order/1'} className="mt-2 flex flex-row border-b border-gray-200 py-2">
                            <img className="px-3 py-2 ml-2" src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljo20l1y3r42f0_tn" width={130} height={130} alt="product"/>
                            <div className="flex flex-col mt-2">
                                <span>Chuột không dây Fuhlen A09 hàng nhập khẩu bảo hành 12 tháng</span>
                                <span>x1</span>
                                <span className="text-end">61.000</span>
                            </div>
                            
                        </Link>
                        <div className="text-end">
                            <h1 className="px-3 font-bold text-xl">Thanh tien: <span className="text-red-500">61.000</span></h1>
                        </div>
                    </div>
                    {/* <div className="w-full border boder-gray-300 mt-5 h-full">
                        <h1 className="ml-5 font-bold mt-2 border-b border-gray-200 py-2">Phụ Kiện Công Nghệ Giá Gốc</h1>
                        <Link href={'/order/1'} className="mt-2 flex flex-row border-b border-gray-200 py-2">
                            <img className="px-3 py-2 ml-2" src="https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-ljo20l1y3r42f0_tn" width={130} height={130} alt="product"/>
                            <div className="flex flex-col mt-2">
                                <span>Chuột không dây Fuhlen A09 hàng nhập khẩu bảo hành 12 tháng</span>
                                <span>x1</span>
                                <span className="text-end">61.000</span>
                            </div>
                            
                        </Link>
                        <div className="text-end">
                            <h1 className="px-3 font-bold text-xl">Thanh tien: <span className="text-red-500">61.000</span></h1>
                        </div>
                    </div> */}
                </div>
            </div>
    )
}