import { useState } from "react"
import {BsChevronCompactLeft,BsChevronCompactRight} from 'react-icons/bs'

const images = [
    {
        url: "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/9/18/638306450144913983_F-C1_1200x30014%20PRM.png"
    },
    {
        url: "https://images.fpt.shop/unsafe/fit-in/1200x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/8/1/638264776256861272_F-C1_1200x300iP13%201.png"
    },
    {
        url: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/Sliding%20iPhone%2015.png"
    },
    {
        url: "https://cdn2.cellphones.com.vn/insecure/rs:fill:690:300/q:80/plain/https://dashboard.cellphones.com.vn/storage/sliding-fold-th9-ver1.png"
    },
]

export default function Carousel(){
    const [currentIndex, setCurrenIndex] = useState(0)
    const prevSide = () =>{
        const isFristIndex = currentIndex === 0
        const newIndex = isFristIndex ? images.length-1 : currentIndex - 1;
        setCurrenIndex(newIndex)
    }
    const nextSide = () =>{
        const isFristIndex = currentIndex === images.length - 1;
        const newIndex = isFristIndex ? 0 : currentIndex + 1;
        setCurrenIndex(newIndex)
    }
    return(
        <div className="max-w-[1400px] h-[330px] w-full m-auto py-5 px-4 relative group">
            <img src={`${images[currentIndex].url}`} className="w-full h-full rounded-lg bg-center bg-cover duration-500"/>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-lg p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactLeft onClick={prevSide} size={30}/>
            </div>
            <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-lg p-2 bg-black/20 text-white cursor-pointer">
                <BsChevronCompactRight onClick={nextSide} size={30}/>
            </div>
        </div>
    )
}