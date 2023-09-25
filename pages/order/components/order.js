import Sidebar from "./sidebar"
import Transaction from "./transaction"


export default function OrderComponent(){
    return(
        <div className="flex flex-row ml-[300px]">
            <Sidebar/>
            <Transaction/>
        </div>
    )
}