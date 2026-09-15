import React, { useState } from "react";
import { X, Star } from "lucide-react";
import ReviewCard47 from "./47component";

// =====================================================
// HARDCODED REVIEWS
// =====================================================

const REVIEWS = [
  {
    id: 1,
    name: "Tech Startup Co.",
    avatar: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    date: "2026-02-28",
    comment:
      "Outstanding work! The website exceeded our expectations. Clean code and beautiful design.",
  },

  {
    id: 2,
    name: "Sarah Martinez",
    avatar: "https://i.pravatar.cc/100?img=47",
    rating: 5,
    date: "2026-02-25",
    comment:
      "Very professional and delivered on time. Great communication throughout the project.",
  },

  {
    id: 3,
    name: "Mike Chen",
    avatar: "https://i.pravatar.cc/100?img=11",
    rating: 4,
    date: "2026-02-20",
    comment:
      "Good work overall. Minor revisions needed but delivered quality results.",
  },
];


// =====================================================
// MAIN REVIEWS COMPONENT
// =====================================================

export default function ReviewsList46({
  total = 127,
}) {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      {/* =================================================
          REVIEWS SECTION
      ================================================= */}

      <div
        className="
          mx-auto
          mt-6
          w-full
          max-w-[1600px]
          px-1
          pb-8
        "
      >

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className="
            mb-5
            flex
            items-center
            justify-between
          "
        >

          <h3
            className="
              text-xl
              font-medium
              text-gray-900
            "
          >
            Reviews ({total})
          </h3>


          {/* VIEW ALL */}

          <button
            onClick={() => setShowAll(true)}
            className="
              text-lg
              font-semibold
              text-purple-700
              transition
              hover:text-purple-900
            "
          >
            View All
          </button>

        </div>


        {/* =================================================
            REVIEW CARDS
        ================================================= */}

        <div className="flex w-full flex-col gap-4">

          {REVIEWS.map((review) => (
            <ReviewCard47
              key={review.id}
              {...review}
            />
          ))}

        </div>

      </div>


      {/* =================================================
          ALL REVIEWS POPUP
      ================================================= */}

      {showAll && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-gray-900/40
            px-4
            backdrop-blur-md
          "
          onClick={() => setShowAll(false)}
        >

          {/* =================================================
              POPUP
          ================================================= */}

          <div
            className="
              w-full
              max-w-[750px]
              overflow-hidden
              rounded-3xl
              bg-white
              shadow-[0_20px_60px_rgba(0,0,0,0.20)]
            "
            onClick={(e) => e.stopPropagation()}
          >

            {/* =================================================
                POPUP HEADER
            ================================================= */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-gray-200
                px-7
                py-5
              "
            >

              <h2
                className="
                  text-xl
                  font-bold
                  text-gray-900
                "
              >
                All Reviews ({REVIEWS.length})
              </h2>


              {/* CLOSE */}

              <button
                onClick={() => setShowAll(false)}
                className="
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  bg-purple-50
                  text-gray-500
                  transition
                  hover:bg-purple-100
                  hover:text-gray-700
                "
              >
                <X size={22} />
              </button>

            </div>


            {/* =================================================
                POPUP REVIEW LIST
            ================================================= */}

            <div
              className="
                max-h-[70vh]
                space-y-4
                overflow-y-auto
                px-7
                py-7
              "
            >

              {REVIEWS.map((review) => (
                <ReviewCard47
                  key={review.id}
                  {...review}
                />
              ))}

            </div>

          </div>

        </div>
      )}

    </>
  );
}