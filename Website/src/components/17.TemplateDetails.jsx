import React from "react"
import Back from '../assets/icon/Back.png'
import Cart from '../assets/icon/Cart.png'
import '../index.css'

function TemplateDetails(){
    return(
        <div className="w-screen bg-[rgb(31,41,55)] p-6 border shadow-2xl mb-6">
            <div className="flex flex-row justify-between  invert ">
                    <img className="w-5 h-5 ml-4" src={Back} alt="Back Page" />
                    <p className="font-bold text-2xl ">Template Details</p>
                    <img className="w-5 h-5 mr-4" src={Cart} alt="Cart" />
            </div>
        </div>
    )
}
export default TemplateDetails;