import React from "react";
import '../index.css'
import check from '../assets/icon/checked.png'
import Angle from '../assets/icon/Angle bracket.png'
import Doc from '../assets/icon/google-docs.png'
import image from '../assets/icon/image.png'


function IncludedList(){
    return(
        <div className="w-150 m-6 p-6 rounded-2xl bg-[rgb(31,41,55)]">
            <div>
                <h2 className="flex gap-3 text-white m-4 p-4 text-xl font-bold"><img src={check} alt=" What's Included" /> What's Included</h2>
                <div className="grid gap-3 m-4 p-4 space-y-2">
                    <p className="flex gap-1 text-lg bg-white rounded-2xl p-2"><img src={check} alt="Complete source code" />Complete source code</p>
                    <p className="flex gap-1 text-lg bg-white rounded-2xl p-2"><img src={check} alt="Responsive design for all devices" />Responsive design for all devices</p>
                    <p className="flex gap-1 text-lg bg-white rounded-2xl p-2"><img src={check} alt="Well-documented and commented" />Well-documented and commented</p>
                    <p className="flex gap-1 text-lg bg-white rounded-2xl p-2"><img src={check} alt="Easy customization" />Easy customization</p>
                    <p className="flex gap-1 text-lg bg-white rounded-2xl p-2"><img src={check} alt="Free updates for 6 months" />Free updates for 6 months</p>
                    <p className="flex gap-1 text-lg bg-white rounded-2xl p-2"><img src={check} alt="Email support included" />Email support included</p>
                    <p className="flex gap-1 text-lg bg-white rounded-2xl p-2"><img src={check} alt="Commercial license" />Commercial license</p>
                    <p className="flex gap-1 text-lg bg-white rounded-2xl p-2"><img src={check} alt="Premium fonts included" />Premium fonts included</p>
                    <div className=" p-6 bg-blue-50 rounded-2xl">
                        <h1 className="text-xl font-bold mb-2">Included Files:</h1>
                        <div className="grid grid-cols-2 space-y-2 ">
                           <p className="flex gap-2"><img src={Angle} alt="HTML/CSS?JS" />HTML/CSS/JS</p>
                            <p className="flex gap-2"><img src={image} alt="Images & Icons" />Images & Icons</p>
                            <p className="flex gap-2"><img src={Doc} alt="Documentation" />Documentation</p> 
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default IncludedList;