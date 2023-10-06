import Link from "next/link";
import { useCashApp } from "../hooks/cashapp"
import dynamic from "next/dynamic";
import EmblaCarousel from "./carousel_embla";
//const Carousel = dynamic(()=> import('./carousel_embla'),{ssr: false})

export default function HeroSelection(){
    const {product} = useCashApp()  
    return(
        <div className="bg-gray-50">
            {/* <Carousel/> */}
            <EmblaCarousel/>
            <div className="min-h-screen bg-gray-100 flex justify-center">
                {/* <h1 className="text-start text-4xl font-bold mt-5">Featured Products</h1> */}
                <div className="mx-auto mt-10 flex flex-wrap min-w-screen justify-center">
                    {product.map((data)=>{
                        return(
                            // max-h-[450px] min-w-[340px]
                            <Link href={`/product/${data?.account.id}`} className="relative max-h-[450px] max-w-[350px] bg-white shadow-sm p-2 mx-1 my-3 cursor-pointer">
                                <div className="overflow-x-hidden rounded-lg relative">
                                    <img className="h-80 rounded-2xl w-full object-cover" src={`${data?.account.images}`} alt="hinh san pham"/>
                                    <p className="absolute right-2 top-2 bg-white rounded-full p-2 cursor-pointer group">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:opacity-50 opacity-70" fill="none" viewBox="0 0 24 24" stroke="black">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                        </svg>
                                    </p>
                                </div>
                                <div className="mt-4 pl-2 mb-2 flex justify-between ">
                                    <div>
                                    <p className="text-lg font-semibold text-gray-900 mb-0">{data?.account.title}</p>
                                    <p className="text-md text-gray-800 mt-0">${data?.account.price}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                    
                </div>
            </div>
        </div>
    )
}