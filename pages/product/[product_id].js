import { useRouter } from "next/router";
import Header from "@/components/header";
import { useCashApp } from "../../hooks/cashapp"

export default function Product(){
    let router = useRouter();
    const {product_id} = router.query
    const {product} = useCashApp() 
    return(
        <>
        <Header/>
        {product.map((dt)=>{
            if(dt?.account.id == product_id){
                console.log(dt)
            }
        })}
        </>
    )
}