import { useNavigate } from "react-router-dom"
import Router from "next/router";
import { useCashApp } from "../../hooks/cashapp";
import { useState } from "react";

require('@tailwindcss/forms')
export default function RegisterUser(){
    const navigate = useNavigate();
    const {initUser,transactionPending} = useCashApp();
    const [name, setName] = useState('');
    const [avatar, setAvatarLink] = useState('');


    function handle(){
        navigate('/')
        Router.reload()
    }
    return(
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto w-[100px] h-[100px]"
                    src="/img/logo1.png"
                    alt="Your Company"
                />
                <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Sign up to your account
                </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    <div>
                    <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                        Full name
                    </label>
                    <div className="mt-2">
                        <input
                        id="name"
                        name="name"
                        type="name"
                        autoComplete="name"
                        required
                        onChange={(e)=>setName(e.target.value)}
                        className="block px-2 focus:outline-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter your full name"
                        />
                    </div>
                    </div>

                    <div>
                    <div className="flex items-center justify-between">
                        <label htmlFor="images" className="block text-sm font-medium leading-6 text-gray-900">
                        Image link
                        </label>
                    </div>
                    <div className="mt-2">
                        <input
                        id="images"
                        name="images"
                        type="images"
                        autoComplete="images"
                        required
                        onChange={(e)=>setAvatarLink(e.target.value)}
                        className="block w-full px-2 focus:outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Enter your avatar link"
                        />
                    </div>
                    </div>

                    <div>
                    <button
                        type="submit"
                        onClick={(e)=>{
                            e.preventDefault();
                            initUser(name,avatar);
                            if(transactionPending==false){
                                navigate('/');
                                // Router.reload();
                            }
                        }}
                        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Sign up
                    </button>
                    <button
                        type="submit"
                        onClick={(e)=>{
                            e.preventDefault();
                            navigate('/');
                            // Router.reload();
                        }}
                        className="flex mt-5 w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Return home
                    </button>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}