import React from "react"
import Back from '../assets/icon/Back.png'
import Cart from '../assets/icon/Cart.png'
import '../index.css'

function TemplateDetails(){
    return(
        <div className="w-fit rounded-2xl bg-[rgb(31,41,55)] p-6 border shadow-2xl mb-6">
            <div className="w-150 flex flex-row justify-between  invert ">
                    <img className="w-5 h-5 " src={Back} alt="Back Page" />
                    <p className="font-bold text-2xl ">Template Details</p>
                    <img className="w-5 h-5" src={Cart} alt="Cart" />
            </div>
        </div>
    )
}
export default TemplateDetails;