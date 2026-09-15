import React, { useState } from "react";
import { X } from "lucide-react";
import ReviewCard47 from "./47component";

// HARDCODED REVIEWS
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

export default function ReviewsList46({ total = 45 }) {
  const [showAllReviews, setShowAllReviews] = useState(false);

  return (
    <>
      {/* =========================
          REVIEWS SECTION
      ========================== */}
      <div className="mx-auto mt-6 w-full max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-bold text-gray-1000">
            Reviews({total})
          </h2>

          {/* VIEW ALL */}
          <button
            type="button"
            onClick={() => setShowAllReviews(true)}
            className="cursor-pointer text-[#6D28D9] transition-colors hover:text-[#5B21B6]"
          >
            View all
          </button>
        </div>

        {/* Review Cards */}
        <div className="flex flex-col gap-4">
          {REVIEWS.slice(0, 2).map((review) => (
            <ReviewCard47 key={review.id} {...review} />
          ))}
        </div>
      </div>

      {/* =========================
          ALL REVIEWS MODAL
      ========================== */}
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
            backdrop-blur-[5px]
            px-4
          "
          onClick={() => setShowAllReviews(false)}
        >
          {/* MODAL */}
          <div
            className="
              relative
              w-full
              max-w-[672px]
              max-h-[80vh]
              overflow-hidden
              rounded-[24px]
              bg-white
              shadow-2xl
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* =========================
                MODAL HEADER
            ========================== */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-gray-100
                px-6
                py-5
              "
            >
              <h2 className="text-[20px] font-bold text-gray-900">
                All Reviews ({REVIEWS.length})
              </h2>

              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setShowAllReviews(false)}
                aria-label="Close reviews"
                className="
                  flex
                  h-[34px]
                  w-[34px]
                  cursor-pointer
                  items-center
                  justify-center
                  rounded-full
                  bg-[#f4f3fb]
                  text-gray-500
                  transition-all
                  hover:bg-[#ebe8ff]
                  hover:text-purple-600
                "
              >
                <X size={20} strokeWidth={1.8} />
              </button>
            </div>

            {/* =========================
                ALL REVIEWS
            ========================== */}
            <div
              className="
                max-h-[calc(80vh-80px)]
                overflow-y-auto
                px-6
                py-6
              "
            >
              <div className="flex flex-col gap-4">
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