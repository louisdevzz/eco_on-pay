import React from "react";
import "@fontsource/poppins/400.css"; 
import { useCashApp } from "@/hooks/cashapp";

export default function Modal({receiver,amount}) {
  const [showModal, setShowModal] = React.useState(false);
  const {doTransaction,transactionPending} = useCashApp();
  return (
    <>
      <button
        className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 font-bold hover:bg-red-600 rounded focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Buy
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Check Out
                  </h3>
                  <button
                    className="p-1 ml-[500px] bg-transparent border-0 text-red-500 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                        <span className="bg-transparent text-red-500 text-3xl block outline-none focus:outline-none">
                        x
                        </span>
                    </button>
                </div>
                {/*body*/}
                <div className="relative px-3 flex-auto">
                    <div class=" bg-gray-50 px-4 pt-2">
                        <p class="text-xl font-medium">Payment Details</p>
                        <p class="text-gray-400">Complete your order by providing your payment details.</p>
                        <div class="">
                            <label for="card-holder" class="mt-4 mb-2 block text-sm font-medium">Full Name</label>
                            <div class="relative">
                                <input type="text" id="card-holder" name="card-holder" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Your full name here" />
                                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                                    </svg>
                                </div>
                            </div>
                            <label for="email" class="mt-4 mb-2 block text-sm font-medium">Email</label>
                            <div class="relative">
                                <input type="text" id="email" name="email" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your.email@gmail.com" />
                                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                </div>
                            </div>
                            <label for="number" class="mt-4 mb-2 block text-sm font-medium">Phone Number</label>
                            <div class="relative">
                                <input type="text" id="number" name="number" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your phone number" />
                                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <img width="18" height="18" src="https://img.icons8.com/ios/50/phone--v1.png" alt="phone--v1"/>
                                </div>
                                
                            </div>
                            
                            <label for="card-no" class="mt-4 mb-2 block text-sm font-medium">Address Line</label>
                            <div class="flex">
                                
                                <div class="relative w-full flex-shrink-0">
                                <input type="text" id="card-no" name="card-no" class="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="your address line" />
                                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <img width="18" height="18" src="https://img.icons8.com/material-outlined/24/address.png" alt="address"/>
                                </div>
                                </div>
                                
                            </div>
                            {/* <label for="billing-address" class="mt-4 mb-2 block text-sm font-medium">Billing Address</label>
                            <div class="flex flex-col sm:flex-row">
                                <div class="relative flex-shrink-0 sm:w-7/12">
                                <input type="text" id="billing-address" name="billing-address" class="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Street Address" />
                                <div class="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <img class="h-4 w-4 object-contain" src="https://flagpack.xyz/_nuxt/4c829b6c0131de7162790d2f897a90fd.svg" alt="" />
                                </div>
                                </div>
                                <select type="text" name="billing-state" class="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500">
                                <option value="State">State</option>
                                </select>
                                <input type="text" name="billing-zip" class="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="ZIP" />
                            </div> */}

                            <div class="mt-6 border-t border-b py-2">
                                <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Subtotal</p>
                                <p class="font-semibold text-gray-900">$399.00</p>
                                </div>
                                <div class="flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Shipping</p>
                                <p class="font-semibold text-gray-900">$8.00</p>
                                </div>
                            </div>
                            <div class="mt-6 flex items-center justify-between">
                                <p class="text-sm font-medium text-gray-900">Total</p>
                                <p class="text-2xl font-semibold text-gray-900">$408.00</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 border border-red-500 background-transparent font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-3 rounded-lg mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={(e) =>{
                        e.preventDefault();
                        doTransaction({amount,receiver});
                    }}
                  >
                    Check Out
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}