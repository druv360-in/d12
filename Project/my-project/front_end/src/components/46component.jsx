import React from "react";
import ReviewCard47 from "./47component";

// HARDCODED REVIEWS - so you dont need to change 11th
const REVIEWS = [
  {
    id: 1,
    name: "Sarah Johnson",
    avatar: "https://i.pravatar.cc/100?img=5",
    rating: 5.0,
    date: "2 days ago",
    comment: "Emma delivered exceptional work! The video quality was outstanding and she was very responsive to feedback. Highly recommend!"
  },
  {
    id: 2,
    name: "Michael Chen",
    avatar: "https://i.pravatar.cc/100?img=8",
    rating: 4.9,
    date: "1 week ago",
    comment: "Great communication and very professional. The final product exceeded my expectations. Will definitely work with her again."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    avatar: "https://i.pravatar.cc/100?img=9",
    rating: 5.0,
    date: "2 weeks ago",
    comment: "Amazing attention to detail. She turned my raw footage into a cinematic masterpiece. Worth every penny!"
  },
];

export default function ReviewsList46({ total = REVIEWS.length }) {
  return (
    <div className="mx-auto mt-6 w-full max-w-screen-xl px-4 pb-8 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-bold text-gray-900">Reviews</h3>
        <span className="text-gray-500">{total} Reviews</span>
      </div>

      {/* Review Cards */}
      <div className="flex flex-col gap-4">
        {REVIEWS.map((review) => (
          <ReviewCard47 key={review.id} {...review} />
        ))}
      </div>
    </div>
  );
}
