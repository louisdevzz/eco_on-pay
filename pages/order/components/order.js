import Sidebar from "./sidebar"
import Transaction from "./transaction"


export default function OrderComponent(){
    return(
        <div className="flex flex-row ml-auto">
            <Sidebar/>
            <Transaction/>
        </div>
    )
}