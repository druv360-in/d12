import React from "react";
import { img3, img2 } from "./18.TemplatePreview";

function PreviewScreenshots(){
    return(
        <div className="w-150 m-6 p-6 rounded-2xl bg-[rgb(31,41,55)]">
            <div className="">
                <h1 className="text-2xl font-bold text-white p-4">Preview Screenshots</h1>
                <div className="">
                    <img className="mb-4 p-4 "  src={img2} alt="image" />
                    <img className="mb-4 p-4  w-full" src={img3} alt="image" />
                </div>
            </div>
        </div>
    )
}
export default PreviewScreenshots