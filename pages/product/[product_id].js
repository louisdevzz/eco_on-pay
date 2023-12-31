import { useRouter } from "next/router";
import Header from "@/components/header";
import "@fontsource/poppins/400.css"; 
import ProductTitle from "./components/product_title";
import Footer from "@/components/footer";

export default function Product(){
    let router = useRouter();
    const {product_id} = router.query
    return(
        <>
        <Header/>
        <ProductTitle product_id={product_id}/>
        <Footer/>
        </>
    )
}