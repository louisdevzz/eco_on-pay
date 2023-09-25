import TransactionDetail from "./components/transactionDetail"
import Header from "@/components/header"
import Sidebar from "./components/sidebar"
import { useRouter } from "next/router"


export default function OrderDetail(){
    const {method, query} = useRouter()
    return(
        <>
        <Header/>
        <div className="flex flex-row ml-[300px]">
            <Sidebar/>
            <TransactionDetail order_id={query.order}/>
        </div>
        </>
    )
}