export default function TransactionDetail({order_id}){
    return(
        <div className="p-4 sm:ml-64 absolute">
            <div className="p-4 rounded-lg ml-10 w-[1000px]">
                <h1>Transaction Detail</h1>
                <h1>{order_id}</h1>
            </div>
        </div>
    )
}