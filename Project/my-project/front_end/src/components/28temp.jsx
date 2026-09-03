// 28temp.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ShoppingCart, Heart, Share2 } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800",
  "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800",
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
  "https://images.unsplash.com/photo-1551650975-87deedd71325?w=800"
];


export default function Temp28() {

  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState(false);


  return (

    <div
      className="
        w-full
        bg-gray-50
      "
    >


      {/* Header */}

      <header
        className="
          sticky
          top-0
          z-10
          bg-white
          border-b
          border-gray-100
          px-4
          py-3
          flex
          items-center
          justify-between
        "
      >

        <button
  onClick={() => navigate(-1)}
  className="
    p-2
    rounded-full
    hover:bg-gray-100
  "
>

          <ArrowLeft
            className="
              w-5
              h-5
              text-gray-600
            "
          />

        </button>



        <h1
          className="
            text-xl
            font-semibold
            text-gray-900
          "
        >
          Template Details
        </h1>



        <button
          className="
            p-2
            rounded-full
            hover:bg-gray-100
          "
        >

          <ShoppingCart
            className="
              w-5
              h-5
              text-purple-700
            "
          />

        </button>


      </header>





      {/* Content */}

      <main
        className="
          px-3
          sm:px-5
          lg:px-6
          py-2
        "
      >


        <div
          className="
            bg-white
            rounded-3xl
            shadow-sm
            p-3
            w-full
          "
        >



          {/* Main Image */}


          <div
            className="
              relative
              rounded-3xl
              overflow-hidden
            "
          >


            <img

              src={images[activeIndex]}

              alt="Template preview"

              className="
                w-full
                h-72
                sm:h-80
                lg:h-[420px]
                object-cover
                rounded-3xl
              "

            />





            {/* Action Buttons */}


            <div
              className="
                absolute
                top-4
                right-4
                flex
                gap-3
              "
            >


              <button

                onClick={()=>setLiked(!liked)}

                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/80
                  backdrop-blur
                  flex
                  items-center
                  justify-center
                  shadow
                "

              >

                <Heart

                  className={`
                    w-5
                    h-5

                    ${
                      liked
                      ?
                      "fill-red-500 text-red-500"
                      :
                      "text-gray-600"
                    }

                  `}

                />

              </button>




              <button

                className="
                  w-11
                  h-11
                  rounded-full
                  bg-white/80
                  backdrop-blur
                  flex
                  items-center
                  justify-center
                  shadow
                "

              >

                <Share2
                  className="
                    w-5
                    h-5
                    text-gray-600
                  "
                />

              </button>


            </div>



          </div>







          {/* Thumbnails */}


          <div
            className="
              flex
              gap-3
              mt-3
              overflow-x-auto
              pb-1
            "
          >


            {
              images.map((img,index)=>(


                <button

                  key={index}

                  onClick={()=>setActiveIndex(index)}

                  className={`
                    flex-shrink-0
                    w-20
                    h-20
                    sm:w-24
                    sm:h-24
                    rounded-2xl
                    overflow-hidden
                    border-2
                    transition

                    ${
                      activeIndex===index
                      ?
                      "border-purple-600 ring-2 ring-purple-200"
                      :
                      "border-gray-200"
                    }

                  `}

                >


                  <img

                    src={img}

                    alt={`thumbnail ${index}`}

                    className="
                      w-full
                      h-full
                      object-cover
                    "

                  />


                </button>


              ))
            }


          </div>



        </div>



      </main>



    </div>

  );

}