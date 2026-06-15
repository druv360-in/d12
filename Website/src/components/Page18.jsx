import { useState } from "react";
import heart from "../assets/icon/heart.png";
import share from "../assets/icon/share.png";

import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.webp";
import img3 from "../assets/images/image3.jpg";
import img4 from "../assets/images/image4.jpg";
import img5 from "../assets/images/image5.jpg";

import "../index.css";

const images = [img1, img2, img3, img4];

function Page18() {
  const [selected, setSelected] = useState(images[1]);

  return (
    <div className="w-150 h-fit m-6 rounded-2xl bg-[rgb(31,41,55)] ">
        <div className="relative p-6 rounded-2xl">
          <img
            className="w-150 h-96 rounded-2xl overflow-hidden object-cover bg-[rgb(17,24,39)] "
            src={selected}
            alt="Selected"
            />
            <button onClick={()=>{setColor('bg-red-100')}}>
                <img src={heart} alt="like" className="w-8 h-8 bg-white rounded-full p-1 m-2  absolute top-8 right-18" />
            </button>

            <button>
                <img src={share} alt="share" className="w-8 h-8  bg-white rounded-full p-1 m-2 absolute top-8 right-8" />
            </button>
            <div className="grid grid-cols-4 gap-2">
                {images.map((img, index) => (
                <img
                key={index}
                src={img}
                alt={`thumbnail-${index}`}
                className={`w-48 h-24  object-cover rounded-lg cursor-pointer border-2 ${
                    selected === img ? "border-blue-500" : "border-transparent"
                }`}
                onClick={() => setSelected(img)}
                />
            ))}
                
            </div>
        </div>
    </div>
  );
}

export default Page18;