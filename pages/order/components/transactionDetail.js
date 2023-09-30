import {BsChevronCompactLeft} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import Router from 'next/router'
import Stepper from './stepper'
import AddressReceiver from './address_receiver'

export default function TransactionDetail({order_id}){
    const navigate = useNavigate()

    return(
        <div className="p-4 sm:ml-64 absolute">
            <div className="p-4 rounded-lg ml-10 w-[1000px]">
                <div className="flex flex-row justify-between py-3 border-b border-gray-200">
                    <button onClick={(e)=>{e.preventDefault();navigate('/order');Router.reload()}} className="text-gray-500 flex flex-row"><BsChevronCompactLeft className='mt-1'/> Back to order</button>
                    <div className="flex">
                        <span className="mr-5 ">CODE ORDERS. 230824G7WCH6FH</span>
                        <span>|</span>
                        <span className="ml-5 text-teal-600 ">ĐƠN HÀNG ĐÃ HOÀN THÀNH</span>
                    </div>
                </div>
                <div className='mt-3 text-black '>
                    <Stepper/>
                </div>
                <div>
                    <AddressReceiver/>
                </div>
            </div>
        </div>
    )
}