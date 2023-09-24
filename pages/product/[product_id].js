import { useRouter } from "next/router";
import Header from "@/components/header";

import Modal from "./components/model";
import "@fontsource/poppins/400.css"; 
import ProductTitle from "./components/product_title";

export default function Product(){
    let router = useRouter();
    const {product_id} = router.query
    

    return(
        <>
        <Header/>
        <ProductTitle product_id={product_id}/>
        </>
    )
}