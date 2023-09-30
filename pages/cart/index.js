import React, { useState } from "react"
import Header from "@/components/header"

export default function Cart({products}){
    const [count, setCount] = useState(1)
    return(
        <div>
            {/* <Header/> */}
            <div className="mt-10 ml-10">
                <h1>CART</h1>
                <div className="mt-10 border broder-gray-200">
                    {products.length === 0 &&<span>empty cart</span>}
                    {products.map((data)=>(
                        <div className="mt-5" key={data.id}>
                            <img alt="ecommerce" class="w-[200px] h-[200px] object-cover object-center rounded border border-gray-200" src={`${data.images}`}/>
                            <div>
                                <h1>{data.title}</h1>
                                <span>{data.price * count}$</span>
                            </div>
                            <select value={count} onChange={e=>{
                                e.preventDefault();
                                setCount(e.target.value)
                            }}>
                                {[...Array(10).keys()].map(number=>{
                                    const num = number+1
                                    return <option value={num} key={num}>{num}</option>
                                })
                                }
                            </select>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}