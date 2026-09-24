// 28temp.jsx

import React, { useState } from "react";
import { Heart, Share2 } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200",
  "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200",
  "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200",
  "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200",
];

export default function Temp28() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-full">

      {/* =====================================================
          TEMPLATE PREVIEW CARD
      ====================================================== */}

      <div
        className="
          w-full
          rounded-[28px]
          border
          border-gray-100
          bg-white
          p-4
          shadow-[0_4px_18px_rgba(15,23,42,0.07)]
          transition-all
          duration-300
          hover:shadow-[0_8px_24px_rgba(15,23,42,0.10)]
          sm:p-5
        "
      >

        {/* =================================================
            MAIN IMAGE
        ================================================== */}

        <div
          className="
            relative
            overflow-hidden
            rounded-[24px]
            bg-gray-100
          "
        >

          <img
            src={images[activeIndex]}
            alt="Template preview"
            className="
              h-[300px]
              w-full
              object-cover
              sm:h-[360px]
              md:h-[420px]
              lg:h-[410px]
              xl:h-[430px]
            "
          />


          {/* =================================================
              IMAGE ACTION BUTTONS
          ================================================== */}

          <div
            className="
              absolute
              right-4
              top-4
              flex
              gap-2
              sm:right-5
              sm:top-5
            "
          >

            {/* Heart */}

            <button
              type="button"
              onClick={() => setLiked(!liked)}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/90
                shadow-md
                backdrop-blur-sm
                transition-all
                duration-200
                hover:scale-105
              "
            >

              <Heart
                className={`
                  h-5
                  w-5
                  transition
                  ${
                    liked
                      ? "fill-red-500 text-red-500"
                      : "text-gray-600"
                  }
                `}
              />

            </button>


            {/* Share */}

            <button
              type="button"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/90
                shadow-md
                backdrop-blur-sm
                transition-all
                duration-200
                hover:scale-105
              "
            >

              <Share2
                className="
                  h-5
                  w-5
                  text-gray-600
                "
              />

            </button>

          </div>

        </div>


        {/* =================================================
            THUMBNAILS
        ================================================== */}

        <div
          className="
            mt-4
            flex
            gap-3
            overflow-x-auto
            pb-1
            sm:gap-4
          "
        >

          {images.map((img, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`
                h-[68px]
                w-[86px]
                shrink-0
                overflow-hidden
                rounded-[16px]
                border-[2px]
                transition-all
                duration-200
                sm:h-[76px]
                sm:w-[100px]
                sm:rounded-[18px]

                ${
                  activeIndex === index
                    ? "border-violet-600 ring-2 ring-violet-200"
                    : "border-gray-200 hover:border-violet-300"
                }
              `}
            >

              <img
                src={img}
                alt={`Template thumbnail ${index + 1}`}
                className="
                  h-full
                  w-full
                  object-cover
                "
              />

            </button>

          ))}

        </div>

      </div>

    </div>
  );
}