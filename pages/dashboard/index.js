import { useCashApp } from "../../hooks/cashapp"

export default function Dashboard(){

    const {product} = useCashApp()  
    
    return(
        <>
            {
                product.map((data)=>{
                   return(
                        <div className="mt-3 ml-3 text-md" key={data?.account.id}>
                            <h1>Title: {data?.account.title}</h1>
                            <h1>Description: {data?.account.description}</h1>
                            <h1>Price: {data?.account.price}</h1>
                            <h1>Quanlity: {data?.account.amount}</h1>
                            <h1>Color: {data?.account.color}</h1>
                        </div>
                   )
                })
            }
        </>
    )
}