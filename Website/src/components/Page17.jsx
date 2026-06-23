import React from "react"
import Back from '../assets/Back.png'
import Cart from '../assets/Cart.png'
import '../index.css'

function Page17(){
    return(
        <div className="w-screen ">
            <div>
                <div className="flex flex-col justify-between ">
                    <h2>
                        <img className="w-10 h-10" src={Back} alt="Back Page" />
                        Template Details
                        <img className="w-10 h-10" src={Cart} alt="Cart" /></h2>
                </div>
            </div>
        </div>
    )
}
export default Page17;