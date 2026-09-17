import React, { useState } from "react";
import { X } from "lucide-react";
import ReviewCard47 from "./47component";

// ======================================================
// HARDCODED REVIEWS
// ======================================================

const REVIEWS = [
  {
    id: 1,
    name: "Tech Startup Co.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    rating: 5.0,
    date: "2026-02-28",
    comment:
      "Outstanding work! The website exceeded our expectations. Clean code and beautiful design.",
  },

  {
    id: 2,
    name: "Sarah Martinez",
    avatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400",
    rating: 5.0,
    date: "2026-02-25",
    comment:
      "Very professional and delivered on time. Great communication throughout the project.",
  },

  {
    id: 3,
    name: "Mike Chen",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
    rating: 5.0,
    date: "2026-02-20",
    comment:
      "Good work overall. Minor revisions needed but delivered quality results.",
  },
];

// ======================================================
// REVIEWS LIST
// ======================================================

export default function ReviewsList46({ total = 45 }) {
  const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <>
      {/* ==================================================
          REVIEWS SECTION
      ================================================== */}

      <section
        id="reviews-section"
        className="
          mx-auto
          mt-8
          w-[1600px]
          max-w-full
          bg-white
          px-4
          pb-10
          sm:px-6
          lg:px-8
          xl:px-10
          scroll-mt-24
        "
      >
        {/* ==================================================
            HEADER
        ================================================== */}

        <div
          className="
            mb-5
            flex
            items-center
            justify-between
          "
        >
          {/* HEADING */}

          <h2
            className="
              text-xl
              font-bold
              tracking-tight
              text-gray-900
              sm:text-2xl
              lg:text-3xl
            "
          >
            Reviews ({total})
          </h2>

          {/* ==================================================
              VIEW ALL
          ================================================== */}

          <button
            type="button"
            onClick={() => setShowAllReviews(true)}
            className="
              cursor-pointer
              rounded-xl
              px-4
              py-2
              text-base
              font-bold
              text-[#6D28D9]
              transition-all
              duration-300
              ease-out

              hover:-translate-y-1
              hover:bg-purple-50
              hover:text-[#5B21B6]
              hover:shadow-[0_10px_22px_rgba(109,40,217,0.18)]

              sm:px-5
              sm:py-2.5
              sm:text-lg

              lg:px-6
              lg:py-3
              lg:text-xl
            "
          >
            View all
          </button>
        </div>

        {/* ==================================================
            REVIEW CARDS
        ================================================== */}

        <div
          className="
            flex
            w-full
            flex-col
            gap-6
          "
        >
          {REVIEWS.slice(0, 2).map((review) => (
            <ReviewCard47
              key={review.id}
              {...review}
            />
          ))}
        </div>
      </section>

      {/* ======================================================
          ALL REVIEWS MODAL
      ====================================================== */}

      {showAllReviews && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/30
            px-4
            backdrop-blur-[5px]
          "
          onClick={() => setShowAllReviews(false)}
        >
          {/* ==================================================
              MODAL
          ================================================== */}

          <div
            className="
              relative
              w-full
              max-w-[1600px]
              max-h-[85vh]
              overflow-hidden
              rounded-[28px]
              bg-white
              shadow-[0_30px_80px_rgba(0,0,0,0.25)]
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* ==================================================
                MODAL HEADER
            ================================================== */}

            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-gray-200
                px-6
                py-5
                sm:px-8
                sm:py-6
              "
            >
              {/* TITLE */}

              <h2
                className="
                  text-xl
                  font-bold
                  text-gray-900
                  sm:text-2xl
                  lg:text-3xl
                "
              >
                All Reviews ({REVIEWS.length})
              </h2>

              {/* ==================================================
                  CLOSE BUTTON
              ================================================== */}

              <button
                type="button"
                onClick={() => setShowAllReviews(false)}
                aria-label="Close reviews"
                className="
                  flex
                  h-11
                  w-11
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-[#F1F3F5]
                  text-gray-500
                  shadow-[0_6px_14px_rgba(0,0,0,0.12)]
                  transition-all
                  duration-300
                  ease-out

                  hover:-translate-y-1
                  hover:scale-105
                  hover:bg-purple-50
                  hover:text-purple-600
                  hover:shadow-[0_10px_22px_rgba(0,0,0,0.18)]

                  active:scale-95
                "
              >
                <X
                  size={22}
                  strokeWidth={2}
                />
              </button>
            </div>

            {/* ==================================================
                ALL REVIEWS
            ================================================== */}

            <div
              className="
                max-h-[calc(85vh-90px)]
                overflow-y-auto
                px-5
                py-6
                sm:px-8
                sm:py-8
              "
            >
              <div
                className="
                  flex
                  w-full
                  flex-col
                  gap-6
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
        </div>
      )}
    </>
  );
}