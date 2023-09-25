import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


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
// const autoplayOptions = {
//     delay: 400,
//     rootNode: (emblaRoot) => emblaRoot.parentElement,
//     }

const EmblaCarousel = () => {
    const [emblaRef] = useEmblaCarousel({loop: false},[Autoplay()])

    return (
    <div className="embla max-w-[1400px] h-[330px] w-full m-auto py-5 px-4 relative group" ref={emblaRef}>
        <div className="embla__container w-full h-full ">
        {images.map((e,i)=>(
            <img src={`${images[i].url}`} className="embla__slide w-full h-full rounded-lg bg-center bg-cover duration-500"/>
        ))}
        </div>
    </div>
    )
}

export default EmblaCarousel;