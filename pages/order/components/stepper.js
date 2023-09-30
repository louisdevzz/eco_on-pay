import { useState } from "react";
const Stepper =()=>{
    const steps = ['Ordered package','Payment','Shipping Info','Received','Feedback'];
    const [currentStep, setCurrentStep] = useState(1)
    return(
        <>
            <div className="flex justify-between">
                {
                    steps?.map((step,i)=>(
                        <div key={i} className={`item-step  ${i < currentStep && 'complete'}`}>
                            <div className="step">{i+1}</div>
                            <p className="mt-3">{step}</p>
                            <span className="text-gray-300 text-sm">time</span>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
export default Stepper;