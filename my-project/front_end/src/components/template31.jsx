// template31.jsx
import React from "react";

export default function Template31({ 
  screenshots = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800"
  ]
}) {

  return (

    <div className="px-3 sm:px-4 py-3 sm:py-4">

      <div
        className="
          bg-white
          rounded-2xl
          shadow-sm
          p-4
          sm:p-5
        "
      >

        {/* Header */}
        <h2
          className="
            text-lg
            sm:text-xl
            font-bold
            text-gray-900
            mb-4
          "
        >
          Preview Screenshots
        </h2>



        {/* Images */}

        <div
          className="
            space-y-4
            lg:grid
            lg:grid-cols-2
            lg:gap-5
            lg:space-y-0
          "
        >

          {
            screenshots.map((src,i)=>(

              <div
                key={i}
                className="
                  rounded-2xl
                  overflow-hidden
                  border
                  border-gray-100
                  bg-gray-50
                "
              >

                <img

                  src={src}

                  alt={`Preview screenshot ${i+1}`}

                  className="
                    w-full
                    h-48
                    sm:h-56
                    md:h-64
                    lg:h-72
                    object-cover
                  "

                />

              </div>

            ))
          }


        </div>


      </div>


    </div>

  );

}